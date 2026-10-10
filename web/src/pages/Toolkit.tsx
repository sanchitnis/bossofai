import React, { useMemo, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { InfoPage } from "@/pages/Info";
import promptsRaw from "@/data/prompts.json";
import gemsRaw from "@/data/gems.json";
import artifactsRaw from "@/data/claude-artifacts.json";
import coursesRaw from "@/data/courses.json";
import reportsRaw from "@/data/reports.json";

/*
 * Curated directory, ported from the REVA AI Hub data files.
 * - Items that mention REVA are left out: they are specific to that university.
 * - Vote and usage counts in the source are deliberately NOT shown. We cannot verify them.
 */

type Kind = "prompts" | "assistants" | "apps" | "courses" | "reports";

interface Item {
  id: string;
  kind: Kind;
  title: string;
  description: string;
  track?: string;
  level?: string;
  tags: string[];
  url?: string;
  source?: string;
  prompt?: string;
  hint?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const clean = (rows: any[]) => rows.filter((r) => !JSON.stringify(r).includes("REVA"));

const ITEMS: Item[] = [
  ...clean(promptsRaw as any[]).map((r) => ({
    id: `p-${r.id}`,
    kind: "prompts" as const,
    title: r.title,
    description: r.description,
    track: r.track,
    tags: r.category ? [r.category] : [],
    prompt: r.prompt,
  })),
  ...clean(gemsRaw as any[]).map((r) => ({
    id: `g-${r.id}`,
    kind: "assistants" as const,
    title: r.title,
    description: r.description,
    track: r.track,
    level: r.level,
    tags: r.tags ?? [],
    url: r.url,
    source: r.platform,
  })),
  ...clean(artifactsRaw as any[]).map((r) => ({
    id: `a-${r.id}`,
    kind: "apps" as const,
    title: r.title,
    description: r.description,
    track: r.track,
    level: r.level,
    tags: r.tags ?? [],
    url: r.url,
    source: "Claude artifact",
    hint: r.promptHint,
  })),
  ...clean(coursesRaw as any[]).map((r) => ({
    id: `c-${r.id}`,
    kind: "courses" as const,
    title: r.title,
    description: r.description,
    track: r.track,
    level: r.level,
    tags: r.tags ?? [],
    url: r.url,
    source: r.platform,
  })),
  ...clean(reportsRaw as any[]).map((r) => ({
    id: `r-${r.id}`,
    kind: "reports" as const,
    title: r.title,
    description: r.description,
    tags: [r.category, r.year].filter(Boolean),
    url: r.url,
    source: r.source,
  })),
];

const KINDS: { key: Kind | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "prompts", label: "Prompts" },
  { key: "assistants", label: "Custom assistants" },
  { key: "apps", label: "Claude apps" },
  { key: "courses", label: "Courses" },
  { key: "reports", label: "Reports" },
];

const TRACKS = ["Teaching", "Research", "Administration", "Consulting", "Kaizen", "AI Systems"];

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1500);
        } catch {
          /* clipboard blocked: the prompt is visible and can be selected by hand */
        }
      }}
      className="inline-flex items-center gap-1 rounded-md border-2 border-foreground px-2 py-1 text-xs font-bold hover:bg-accent hover:text-accent-foreground"
    >
      {done ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {done ? "Copied" : "Copy prompt"}
    </button>
  );
};

const Chip: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`rounded-full border-2 border-foreground px-3 py-1.5 text-sm font-bold transition-colors ${
      active ? "bg-foreground text-background" : "bg-card hover:bg-accent hover:text-accent-foreground"
    }`}
  >
    {children}
  </button>
);

export const Toolkit: React.FC = () => {
  const [kind, setKind] = useState<Kind | "all">("all");
  const [track, setTrack] = useState<string>("all");
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return ITEMS.filter(
      (i) =>
        (kind === "all" || i.kind === kind) &&
        (track === "all" || i.track === track) &&
        (!needle || `${i.title} ${i.description} ${i.tags.join(" ")} ${i.source ?? ""}`.toLowerCase().includes(needle))
    );
  }, [kind, track, q]);

  const count = (k: Kind | "all") => (k === "all" ? ITEMS.length : ITEMS.filter((i) => i.kind === k).length);

  return (
    <InfoPage
      eyebrow="Toolkit · for everyone"
      title={
        <>
          Tools, prompts and courses. <span className="mark-lime">Curated, not endorsed.</span>
        </>
      }
      intro={`A working shelf of ${ITEMS.length} prompts, custom assistants, small apps, courses and reports to build with. Filter by the T.R.A.C.K. pillar you care about.`}
      deepTitle="About this shelf"
      deep={
        <>
          <h3>Where it comes from</h3>
          <p>
            These entries were collected in the REVA AI Hub, an AI resource hub for a university community. We ported the
            general-purpose ones here and left out anything specific to that university. The full hub, with learning
            tracks, guidelines and more, is at <a href="/aihub/">bossofai.org/aihub</a>.
          </p>
          <h3>What we have and haven't checked</h3>
          <ul>
            <li>Entries are curated by people, not audited. We have not tested each tool's accuracy, privacy practices or terms.</li>
            <li>The source data carried vote and usage counts. We don't show them because we can't verify them.</li>
            <li>Links to third-party sites, courses and shared apps can move, change or disappear. Tell us when one breaks.</li>
            <li>
              Read our <a href="/safety">safety commitments</a> before using any tool with personal or student data.
            </li>
          </ul>
          <h3>Pillar tags</h3>
          <p>
            The pillar tags (Teaching, Research, Administration, Consulting, Kaizen) come from the source hub and map loosely to
            T.R.A.C.K. They are a convenience for browsing, not a classification we have validated.
          </p>
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Type">
          {KINDS.map((k) => (
            <Chip key={k.key} active={kind === k.key} onClick={() => setKind(k.key)}>
              {k.label} <span className="font-mono text-xs opacity-70">{count(k.key)}</span>
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="T.R.A.C.K. pillar">
          <span className="label-mono mr-1 text-muted-foreground">Pillar</span>
          <Chip active={track === "all"} onClick={() => setTrack("all")}>
            Any
          </Chip>
          {TRACKS.map((t) => (
            <Chip key={t} active={track === t} onClick={() => setTrack(t)}>
              {t}
            </Chip>
          ))}
        </div>
        <label className="block max-w-md">
          <span className="sr-only">Search the toolkit</span>
          <Input placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        Showing {shown.length} of {ITEMS.length}
      </p>

      {shown.length === 0 ? (
        <p className="mt-6 rounded-xl border-2 border-dashed border-foreground p-6 font-medium">Nothing matches. Try a different filter.</p>
      ) : (
        <ul className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((i) => (
            <li key={i.id} className="brut-sm flex flex-col rounded-xl p-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{KINDS.find((k) => k.key === i.kind)?.label}</Badge>
                {i.track && <Badge variant="accent">{i.track}</Badge>}
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold leading-tight">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.description}</p>
              {i.prompt && (
                <details className="mt-3 text-sm">
                  <summary className="cursor-pointer font-semibold">Show prompt</summary>
                  <pre className="mt-2 max-h-56 overflow-auto whitespace-pre-wrap rounded-lg border-2 border-foreground bg-secondary p-3 font-mono text-xs">
                    {i.prompt}
                  </pre>
                </details>
              )}
              {i.hint && <p className="mt-2 text-xs text-muted-foreground">Try: {i.hint}</p>}
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {[i.source, i.level].filter(Boolean).join(" · ")}
                </span>
                {i.prompt ? (
                  <CopyButton text={i.prompt} />
                ) : i.url ? (
                  <a
                    href={i.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold underline decoration-2 underline-offset-4 decoration-accent hover:bg-accent"
                  >
                    Open <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </InfoPage>
  );
};
