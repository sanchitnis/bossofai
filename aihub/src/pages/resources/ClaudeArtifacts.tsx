import Layout from "@/components/layout/Layout";
import { ExternalLink, Sparkles, Filter, ArrowRight, Lightbulb, Layers, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import artifactsData from "@/data/claude-artifacts.json";

type TrackFilter = "All" | "Teaching" | "Research" | "Administration" | "Consulting" | "Kaizen";
type LevelFilter = "All" | "Beginner" | "Intermediate" | "Advanced";
type StageFilter = "All" | "Explore" | "Learn" | "Apply" | "Share";

const TRACK_COLORS: Record<string, string> = {
    Teaching: "bg-track-teaching/10 text-track-teaching border-track-teaching/20",
    Research: "bg-track-research/10 text-track-research border-track-research/20",
    Administration: "bg-track-admin/10 text-track-admin border-track-admin/20",
    Consulting: "bg-track-consulting/10 text-track-consulting border-track-consulting/20",
    Kaizen: "bg-track-kaizen/10 text-track-kaizen border-track-kaizen/20",
};

const LEVEL_COLORS: Record<string, string> = {
    Beginner: "bg-emerald-100 text-emerald-700",
    Intermediate: "bg-amber-100 text-amber-700",
    Advanced: "bg-rose-100 text-rose-700",
};

const dropdownClass =
    "text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer hover:border-primary/40 transition-colors";

const ClaudeArtifacts = () => {
    const [filterTrack, setFilterTrack] = useState<TrackFilter>("All");
    const [filterLevel, setFilterLevel] = useState<LevelFilter>("All");
    const [filterStage, setFilterStage] = useState<StageFilter>("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = useMemo(() => {
        return artifactsData.filter((a) => {
            if (filterTrack !== "All" && a.track !== filterTrack) return false;
            if (filterLevel !== "All" && a.level !== filterLevel) return false;
            if (filterStage !== "All" && a.stage !== filterStage) return false;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                return (
                    a.title.toLowerCase().includes(q) ||
                    a.description.toLowerCase().includes(q) ||
                    a.tags.some((t) => t.includes(q))
                );
            }
            return true;
        });
    }, [filterTrack, filterLevel, filterStage, searchQuery]);

    const featuredItems = filtered.filter((a) => a.featured);
    const regularItems = filtered.filter((a) => !a.featured);

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-br from-orange-500/10 via-background to-primary/5 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            Resources
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Claude Artifacts
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Interactive mini-apps, simulations, and tools you can generate instantly with Claude AI.
                            Each artifact is a ready-to-use educational tool — just open Claude and paste the prompt hint.
                        </p>
                        <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                                Open Claude AI <ExternalLink className="h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* What are Artifacts */}
            <section className="py-12 bg-muted/30 border-y border-border">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Layers, title: "What is a Claude Artifact?", desc: "An interactive web app (HTML/CSS/JS) that Claude generates within seconds from a simple text prompt — no coding needed." },
                            { icon: Lightbulb, title: "How to Use Them", desc: "Open Claude, paste the prompt hint shown on each card, then interact with or export the generated artifact." },
                            { icon: Sparkles, title: "Why Use Them in Education?", desc: "Get interactive quizzes, simulators, visualizers, and planners tailored to your exact topic in under a minute." },
                        ].map((item) => (
                            <div key={item.title} className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600 shrink-0">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Library */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 mb-4">
                        <input
                            type="search"
                            placeholder="Search artifacts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 w-48 placeholder:text-muted-foreground"
                        />
                        <select value={filterTrack} onChange={(e) => setFilterTrack(e.target.value as TrackFilter)} className={dropdownClass}>
                            {["All", "Teaching", "Research", "Administration", "Consulting", "Kaizen"].map((t) => (
                                <option key={t} value={t}>{t === "All" ? "All TRACK Areas" : t}</option>
                            ))}
                        </select>
                        <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value as LevelFilter)} className={dropdownClass}>
                            {["All", "Beginner", "Intermediate", "Advanced"].map((l) => (
                                <option key={l} value={l}>{l === "All" ? "All Levels" : l}</option>
                            ))}
                        </select>
                        <select value={filterStage} onChange={(e) => setFilterStage(e.target.value as StageFilter)} className={dropdownClass}>
                            {["All", "Explore", "Learn", "Apply", "Share"].map((s) => (
                                <option key={s} value={s}>{s === "All" ? "Any Stage" : s}</option>
                            ))}
                        </select>
                    </div>

                    <p className="text-xs text-muted-foreground mb-6">
                        Showing {filtered.length} artifact{filtered.length !== 1 ? "s" : ""}
                    </p>

                    {filtered.length === 0 ? (
                        <div className="text-center py-16 text-muted-foreground">
                            <Filter className="h-10 w-10 mx-auto mb-3 opacity-30" />
                            <p className="text-sm">No artifacts match your filters. Try broadening your selection.</p>
                        </div>
                    ) : (
                        <>
                            {/* Featured */}
                            {featuredItems.length > 0 && (
                                <div className="mb-10">
                                    <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <span className="text-orange-500">★</span> Featured Artifacts
                                    </h2>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {featuredItems.map((artifact) => (
                                            <ArtifactCard key={artifact.id} artifact={artifact} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* All others */}
                            {regularItems.length > 0 && (
                                <div>
                                    {featuredItems.length > 0 && (
                                        <h2 className="font-display text-lg font-semibold text-foreground mb-4">All Artifacts</h2>
                                    )}
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {regularItems.map((artifact) => (
                                            <ArtifactCard key={artifact.id} artifact={artifact} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-orange-500 text-white">
                <div className="container text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                        Create Your Own Artifacts
                    </h2>
                    <p className="text-white/80 max-w-xl mx-auto mb-8">
                        Use any prompt hint above as a starting point — then customize it for your own subject, course, or students.
                    </p>
                    <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                        <Button variant="hero" size="lg" className="gap-2">
                            Open Claude AI <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </section>
        </Layout>
    );
};

interface ArtifactProps {
    artifact: {
        id: string;
        title: string;
        description: string;
        track: string;
        category: string;
        level: string;
        stage: string;
        tags: string[];
        featured: boolean;
        url: string;
        promptHint: string;
        contributor?: string;
    };
}

function ArtifactCard({ artifact }: ArtifactProps) {
    const [showHint, setShowHint] = useState(false);

    return (
        <div
            className={cn(
                "bg-card rounded-xl border p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all group relative overflow-hidden",
                artifact.featured 
                    ? "border-orange-400/40 ring-1 ring-orange-400/20 bg-gradient-to-br from-card to-orange-500/5" 
                    : "border-border"
            )}
        >
            {artifact.featured && (
                <div className="absolute top-0 right-0 h-16 w-16 pointer-events-none z-20">
                    <div className="absolute top-[-8px] right-[-24px] rotate-45 bg-orange-500/20 py-1 px-8 text-[8px] font-black uppercase tracking-tighter text-orange-600 border-b border-orange-500/10">
                        Top Pick
                    </div>
                </div>
            )}
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className={cn("inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border", TRACK_COLORS[artifact.track] ?? "bg-muted text-muted-foreground border-border")}>
                        {artifact.track}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">
                        {artifact.category}
                    </span>
                </div>
                <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full shrink-0", LEVEL_COLORS[artifact.level] ?? "bg-muted text-muted-foreground")}>
                    {artifact.level}
                </span>
            </div>

            {/* Title & Desc */}
            <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-orange-600 transition-colors flex items-center gap-1.5">
                    {artifact.title}
                    {artifact.featured && (
                        <span className="flex items-center gap-1 text-[10px] text-orange-600 font-bold px-1.5 py-0.5 rounded bg-orange-100 border border-orange-200">
                            <Star className="h-2.5 w-2.5 fill-current" />
                            PICK
                        </span>
                    )}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {artifact.description}
                </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
                {artifact.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Contributor & Stage */}
            <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted w-fit italic">
                    Added by: {artifact.contributor || "REVA AI Hub"}
                </span>
                <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted w-fit">
                    Stage: {artifact.stage}
                </span>
            </div>

            {/* Prompt hint toggle */}
            {showHint && (
                <div className="text-xs bg-muted/60 rounded-lg p-3 border border-border text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground block mb-1">💬 Prompt hint:</span>
                    {artifact.promptHint}
                </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-1 border-t border-border">
                <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                    {showHint ? "Hide hint" : "Show prompt"}
                </button>
                <a href={artifact.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="h-7 text-xs gap-1 hover:text-orange-600">
                        Open Claude <ExternalLink className="h-3 w-3" />
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default ClaudeArtifacts;
