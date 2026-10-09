import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ThumbsUp, ThumbsDown, ExternalLink, BookOpen, Sparkles, FileText, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useResourceVotes } from "@/hooks/useResourceVotes";
import { supabase } from "@/lib/supabase";
import type { DBResource } from "@/types/database";

import coursesData from "@/data/courses.json";
import gemsData from "@/data/gems.json";
import promptsData from "@/data/prompts.json";
import artifactsData from "@/data/claude-artifacts.json";

const LOCAL_RESOURCES: any[] = [
    ...coursesData,
    ...gemsData,
    ...promptsData,
    ...artifactsData,
];

type TrackLabel = "Teaching" | "Research" | "Administration" | "Consulting" | "Kaizen" | "All";
type LevelLabel = "All" | "Beginner" | "Intermediate" | "Advanced";
type StageLabel = "All" | "Explore" | "Learn" | "Apply" | "Share";
type ToolLabel = "All" | "Gemini" | "ChatGPT" | "NotebookLM" | "SWAYAM" | "Any";
type SortOption = "top-rated" | "most-used";

const TRACK_COLORS: Record<string, string> = {
    Teaching: "bg-track-teaching/10 text-track-teaching border-track-teaching/20",
    Research: "bg-track-research/10 text-track-research border-track-research/20",
    Administration: "bg-track-admin/10 text-track-admin border-track-admin/20",
    Consulting: "bg-track-consulting/10 text-track-consulting border-track-consulting/20",
    Kaizen: "bg-track-kaizen/10 text-track-kaizen border-track-kaizen/20",
};

const TYPE_ICONS: Record<string, React.ElementType> = {
    course: BookOpen,
    gem: Sparkles,
    prompt: FileText,
    artifact: Star,
    tool: Star,
};

const TYPE_LABELS: Record<string, string> = {
    course: "Course",
    gem: "Gem",
    prompt: "Prompt",
    artifact: "Artifact",
    tool: "Tool",
};

const LEVEL_COLORS: Record<string, string> = {
    Beginner: "bg-emerald-100 text-emerald-700",
    Intermediate: "bg-amber-100 text-amber-700",
    Advanced: "bg-rose-100 text-rose-700",
};

interface Props {
    track?: TrackLabel;
    compact?: boolean;
    enableUrlState?: boolean;
}

export default function TrackResourceWidget({ track = "All", compact = false, enableUrlState = false }: Props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [resources, setResources] = useState<DBResource[]>([]);
    const [loading, setLoading] = useState(true);

    const readParam = <T extends string>(key: string, fallback: T): T =>
        enableUrlState ? ((searchParams.get(key) as T) ?? fallback) : fallback;

    const [filterTrack, setFilterTrackState] = useState<TrackLabel>(() => readParam<TrackLabel>("track", track));
    const [filterLevel, setFilterLevelState] = useState<LevelLabel>(() => readParam<LevelLabel>("level", "All"));
    const [filterStage, setFilterStageState] = useState<StageLabel>(() => readParam<StageLabel>("stage", "All"));
    const [filterTool, setFilterToolState] = useState<ToolLabel>(() => readParam<ToolLabel>("tool", "All"));
    const [sort, setSortState] = useState<SortOption>(() => readParam<SortOption>("sort", "top-rated"));

    const updateParam = (key: string, value: string) => {
        if (!enableUrlState) return;
        setSearchParams(prev => { const n = new URLSearchParams(prev); n.set(key, value); return n; }, { replace: true });
    };

    const setFilterTrack = (v: TrackLabel) => { setFilterTrackState(v); updateParam("track", v); };
    const setFilterLevel = (v: LevelLabel) => { setFilterLevelState(v); updateParam("level", v); };
    const setFilterStage = (v: StageLabel) => { setFilterStageState(v); updateParam("stage", v); };
    const setFilterTool  = (v: ToolLabel)  => { setFilterToolState(v);  updateParam("tool",  v); };
    const setSort        = (v: SortOption) => { setSortState(v);        updateParam("sort",  v); };

    const { vote, getDelta, getUserVote } = useResourceVotes();

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            
            // Check if Supabase is configured
            const isConfigured = 
                import.meta.env.VITE_SUPABASE_URL && 
                import.meta.env.VITE_SUPABASE_ANON_KEY;

            if (isConfigured) {
                try {
                    let q = supabase.from("resources").select("*").eq("status", "published");
                    if (track !== "All") q = q.eq("track", track);
                    const { data, error } = await q;
                    
                    if (!error && data && data.length > 0) {
                        setResources(data);
                        setLoading(false);
                        return;
                    }
                } catch (e) {
                    console.error("Supabase fetch failed, falling back to local data", e);
                }
            }

            // Fallback to local data
            const mappedLocal = LOCAL_RESOURCES.map(r => ({
                ...r,
                usage_count: r.usageCount || 0,
                prompt_text: r.prompt || null,
                status: "published",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })) as DBResource[];

            let filteredLocal = mappedLocal;
            if (track !== "All") {
                filteredLocal = mappedLocal.filter(r => r.track === track);
            }
            
            setResources(filteredLocal);
            setLoading(false);
        };
        load();
    }, [track]);

    const filtered = useMemo(() => {
        let items = resources.filter((r) => {
            if (filterTrack !== "All" && r.track !== filterTrack) return false;
            if (filterLevel !== "All" && r.level !== filterLevel) return false;
            if (filterStage !== "All" && r.stage !== filterStage) return false;
            if (filterTool !== "All" && r.tool !== filterTool && r.tool !== "Any") return false;
            return true;
        });

        items = items.sort((a, b) => {
            if (a.featured !== b.featured) return a.featured ? -1 : 1;
            if (sort === "top-rated") {
                const scoreA = a.upvotes - a.downvotes + getDelta(a.id);
                const scoreB = b.upvotes - b.downvotes + getDelta(b.id);
                return scoreB - scoreA;
            }
            return b.usage_count - a.usage_count;
        });

        return compact ? items.slice(0, 6) : items;
    }, [resources, filterTrack, filterLevel, filterStage, filterTool, sort, getDelta, compact]);

    const dropdownClass =
        "text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer hover:border-primary/40 transition-colors";

    if (loading) {
        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => <div key={i} className="h-40 bg-muted animate-pulse rounded-xl" />)}
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3 mb-6">
                {track === "All" && (
                    <select value={filterTrack} onChange={(e) => setFilterTrack(e.target.value as TrackLabel)} className={dropdownClass}>
                        {["All", "Teaching", "Research", "Administration", "Consulting", "Kaizen"].map((t) => (
                            <option key={t} value={t}>{t === "All" ? "All TRACK Areas" : t}</option>
                        ))}
                    </select>
                )}
                <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value as LevelLabel)} className={dropdownClass}>
                    {["All", "Beginner", "Intermediate", "Advanced"].map((l) => (
                        <option key={l} value={l}>{l === "All" ? "All Levels" : l}</option>
                    ))}
                </select>
                <select value={filterStage} onChange={(e) => setFilterStage(e.target.value as StageLabel)} className={dropdownClass}>
                    {["All", "Explore", "Learn", "Apply", "Share"].map((s) => (
                        <option key={s} value={s}>{s === "All" ? "Any Stage" : s}</option>
                    ))}
                </select>
                <select value={filterTool} onChange={(e) => setFilterTool(e.target.value as ToolLabel)} className={dropdownClass}>
                    {["All", "Gemini", "ChatGPT", "NotebookLM", "SWAYAM", "Any"].map((t) => (
                        <option key={t} value={t}>{t === "All" ? "Any Tool" : t}</option>
                    ))}
                </select>
                <select value={sort} onChange={(e) => setSort(e.target.value as SortOption)} className={dropdownClass}>
                    <option value="top-rated">⭐ Top Rated</option>
                    <option value="most-used">🔥 Most Used</option>
                </select>
            </div>

            <p className="text-xs text-muted-foreground mb-4">
                Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
                {compact && resources.length > 6 ? ` (top 6 of ${resources.length})` : ""}
            </p>

            {filtered.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                    <p className="text-sm">No resources match your filters. Try broadening your selection.</p>
                </div>
            ) : (
                <div className={cn("grid gap-4", compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3")}>
                    {filtered.map((resource) => {
                        const TypeIcon = TYPE_ICONS[resource.type] ?? BookOpen;
                        const userVote = getUserVote(resource.id);
                        const netScore = resource.upvotes - resource.downvotes + getDelta(resource.id);

                        return (
                            <div
                                key={resource.id}
                                className={cn(
                                    "bg-card rounded-xl border p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all group relative overflow-hidden",
                                    resource.featured 
                                        ? "border-primary/40 ring-1 ring-primary/20 bg-gradient-to-br from-card to-primary/5" 
                                        : "border-border"
                                )}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className={cn("inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border", TRACK_COLORS[resource.track ?? ""] ?? "bg-muted text-muted-foreground border-border")}>
                                            {resource.track}
                                        </span>
                                        {resource.platform === "REVA LMS" && (
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-[#f98012]/10 text-[#f98012] border border-[#f98012]/30">
                                                REVA LMS
                                            </span>
                                        )}
                                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                            <TypeIcon className="h-3 w-3" />
                                            {TYPE_LABELS[resource.type] ?? resource.type}
                                        </span>
                                        {resource.featured && (
                                            <span className="flex items-center gap-1 text-[10px] text-primary font-bold px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                                                <Star className="h-2.5 w-2.5 fill-current" />
                                                PICK
                                            </span>
                                        )}
                                    </div>
                                    <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full shrink-0", LEVEL_COLORS[resource.level ?? ""] ?? "bg-muted text-muted-foreground")}>
                                        {resource.level}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                        {resource.description}
                                    </p>
                                </div>

                                {resource.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                        {resource.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground">
                                    <span className="px-1.5 py-0.5 rounded bg-muted whitespace-nowrap">Stage: {resource.stage}</span>
                                    {resource.tool !== "Any" && (
                                        <span className="px-1.5 py-0.5 rounded bg-muted whitespace-nowrap">Tool: {resource.tool}</span>
                                    )}
                                    <span className="px-1.5 py-0.5 rounded bg-muted italic whitespace-nowrap">
                                        Added by: {resource.contributor || "Sanjay Chitnis"}
                                    </span>
                                    <span className="ml-auto flex items-center gap-1">
                                        <Users className="h-3 w-3" />
                                        {resource.usage_count.toLocaleString()}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pt-1 border-t border-border">
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={() => vote(resource.id, "up")}
                                            title="Helpful"
                                            className={cn(
                                                "flex items-center gap-0.5 text-xs rounded-md px-2 py-1 transition-colors",
                                                userVote === "up"
                                                    ? "bg-emerald-100 text-emerald-700 font-semibold"
                                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                            )}
                                        >
                                            <ThumbsUp className="h-3 w-3" />
                                            <span>{resource.upvotes + (userVote === "up" ? 1 : 0)}</span>
                                        </button>
                                        <button
                                            onClick={() => vote(resource.id, "down")}
                                            title="Not helpful"
                                            className={cn(
                                                "flex items-center gap-0.5 text-xs rounded-md px-2 py-1 transition-colors",
                                                userVote === "down"
                                                    ? "bg-rose-100 text-rose-700 font-semibold"
                                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                            )}
                                        >
                                            <ThumbsDown className="h-3 w-3" />
                                            <span>{resource.downvotes + (userVote === "down" ? 1 : 0)}</span>
                                        </button>
                                        <span className="text-[10px] text-muted-foreground ml-1">
                                            Score: {netScore > 0 ? "+" : ""}{netScore}
                                        </span>
                                    </div>
                                    {resource.url ? (
                                        <a
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => {
                                                // fire-and-forget usage count increment (only for DB resources with UUID ids)
                                                if (resource.id && /^[0-9a-f]{8}-/.test(String(resource.id))) {
                                                    supabase.from("resources").update({ usage_count: (resource.usage_count ?? 0) + 1 }).eq("id", resource.id);
                                                }
                                            }}
                                        >
                                            <Button variant="ghost" size="sm" className="h-7 text-xs gap-1 hover:text-primary">
                                                Open <ExternalLink className="h-3 w-3" />
                                            </Button>
                                        </a>
                                    ) : (
                                        <span className="text-[10px] text-muted-foreground italic">Prompt only</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
