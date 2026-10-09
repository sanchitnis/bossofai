import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  Compass, 
  BookOpen, 
  Layers, 
  Newspaper, 
  Shield, 
  FileText, 
  Zap, 
  Microscope, 
  Briefcase, 
  MessageSquare,
  Sparkles,
  Star,
  ExternalLink
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import coursesData from "@/data/courses.json";
import gemsData from "@/data/gems.json";
import promptsData from "@/data/prompts.json";
import artifactsData from "@/data/claude-artifacts.json";

const ALL_RESOURCES = [
  ...coursesData.map((r: any) => ({ ...r, _type: "course" as const })),
  ...gemsData.map((r: any) => ({ ...r, _type: "gem" as const })),
  ...promptsData.map((r: any) => ({ ...r, _type: "prompt" as const })),
  ...artifactsData.map((r: any) => ({ ...r, _type: "artifact" as const })),
];

const TYPE_ICONS: Record<string, React.ElementType> = {
  course: BookOpen,
  gem: Sparkles,
  prompt: FileText,
  artifact: Star,
};

const TYPE_HREFS: Record<string, string> = {
  course: "/resources/learning-hub",
  gem: "/resources/custom-gpts-gems",
  prompt: "/resources/prompt-library",
  artifact: "/resources/claude-artifacts",
};

export function SiteSearch({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    setQuery("");
    command();
  };

  const resourceHits = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return ALL_RESOURCES.filter(r =>
      r.title?.toLowerCase().includes(q) ||
      r.description?.toLowerCase().includes(q) ||
      (r.tags as string[] | undefined)?.some((t: string) => t.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [query]);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 text-muted-foreground bg-background/50 hover:bg-background/80 hover:text-foreground",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search AI Hub...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setQuery(""); }}>
        <CommandInput placeholder="Search resources, prompts, courses…" value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {resourceHits.length > 0 && (
            <CommandGroup heading="Resources">
              {resourceHits.map((r) => {
                const Icon = TYPE_ICONS[r._type] ?? BookOpen;
                const dest = r.url && (r._type === "course" || r._type === "gem")
                  ? r.url
                  : TYPE_HREFS[r._type];
                const isExternal = dest.startsWith("http");
                return (
                  <CommandItem
                    key={r.id}
                    onSelect={() => runCommand(() => isExternal ? window.open(dest, "_blank", "noopener noreferrer") : navigate(dest))}
                    className="flex items-start gap-2"
                  >
                    <Icon className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="truncate font-medium">{r.title}</span>
                        {isExternal && <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />}
                      </div>
                      {r.description && <p className="text-xs text-muted-foreground truncate">{r.description}</p>}
                    </div>
                    <span className="text-[10px] text-muted-foreground capitalize shrink-0">{r._type}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}

          {resourceHits.length > 0 && <CommandSeparator />}

          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runCommand(() => navigate("/"))}>
              <Compass className="mr-2 h-4 w-4" /> Home
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/resources"))}>
              <Layers className="mr-2 h-4 w-4" /> Resources
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/governance"))}>
              <Shield className="mr-2 h-4 w-4" /> Governance
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/news"))}>
              <Newspaper className="mr-2 h-4 w-4" /> News &amp; Updates
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="TRACK Pillars">
            <CommandItem onSelect={() => runCommand(() => navigate("/track/teaching"))}>
              <BookOpen className="mr-2 h-4 w-4" /> Teaching Track
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/track/research"))}>
              <Microscope className="mr-2 h-4 w-4" /> Research Track
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/track/administration"))}>
              <FileText className="mr-2 h-4 w-4" /> Administration Track
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/track/consulting"))}>
              <Briefcase className="mr-2 h-4 w-4" /> Consulting Track
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/track/kaizen"))}>
              <Zap className="mr-2 h-4 w-4" /> Kaizen Track
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Quick Links">
            <CommandItem onSelect={() => runCommand(() => navigate("/get-started"))}>
              <Zap className="mr-2 h-4 w-4 text-primary" /> Get Started (Ascent)
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/resources/prompt-library"))}>
              <BookOpen className="mr-2 h-4 w-4 text-primary" /> Prompt Library
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/resources/custom-gpts-gems"))}>
              <Sparkles className="mr-2 h-4 w-4 text-primary" /> Custom GPTs &amp; Gems
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/resources/claude-artifacts"))}>
              <Star className="mr-2 h-4 w-4 text-primary" /> Claude Artifacts
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
