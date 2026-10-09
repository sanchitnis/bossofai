import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Circle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { InfoPage } from "@/pages/Info";
import { joinLink } from "@/components/site/RolePage";
import { roleBySlug } from "@/content/roles";
import { LEVELS, QUESTS, SKILL_LABEL, questById, type Quest } from "@/content/quests";

/* ---- progress: per-browser convenience only (no accounts yet) ---- */
interface Entry {
  done: boolean;
  proof: string;
}
type Progress = Record<string, Entry>;
const KEY = "bossofai.quests.v1";

const load = (): Progress => {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
};

export const useQuestProgress = () => {
  const [progress, setProgress] = useState<Progress>({});
  useEffect(() => setProgress(load()), []);

  const update = useCallback((id: string, patch: Partial<Entry>) => {
    setProgress((prev) => {
      const next = { ...prev, [id]: { done: false, proof: "", ...prev[id], ...patch } };
      try {
        window.localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable: progress lasts for this visit only */
      }
      return next;
    });
  }, []);

  const doneCount = QUESTS.filter((q) => progress[q.id]?.done).length;
  const next = QUESTS.find((q) => !progress[q.id]?.done);
  return { progress, update, doneCount, next };
};

const Inline: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split("`").map((part, i) =>
      i % 2 ? (
        <code key={i} className="rounded bg-secondary px-1 font-mono text-[0.9em]">
          {part}
        </code>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    )}
  </>
);

const StorageNote: React.FC = () => (
  <p className="text-xs text-muted-foreground">
    Progress is saved in this browser only. Accounts and shared progress are not built yet.
  </p>
);

/* ---------------- list ---------------- */
export const Quests: React.FC = () => {
  const { progress, doneCount, next } = useQuestProgress();
  const pct = Math.round((doneCount / QUESTS.length) * 100);

  return (
    <InfoPage
      eyebrow="Quests · for students"
      title={
        <>
          {QUESTS.length} small quests. <span className="mark-lime">One at a time.</span>
        </>
      }
      intro="Each quest is a few hours of real work that ends in something you can show. Do them in order, or jump to the one you need. Every quest links to the right part of our open study guide."
    >
      <div className="brut mb-10 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-heading text-xl font-bold">
            {doneCount} of {QUESTS.length} done
          </p>
          {next ? (
            <Button asChild variant="accent">
              <Link to={`/quests/${next.id}`}>
                {doneCount === 0 ? "Start quest 1" : "Continue"}: {next.title} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Badge variant="accent">All quests done</Badge>
          )}
        </div>
        <div
          className="mt-4 h-3 overflow-hidden rounded-full border-2 border-foreground bg-secondary"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={QUESTS.length}
          aria-valuenow={doneCount}
          aria-label="Quests completed"
        >
          <div className="h-full bg-accent transition-all" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-3">
          <StorageNote />
        </div>
      </div>

      <div className="space-y-12">
        {LEVELS.map((lvl) => (
          <section key={lvl.n} aria-labelledby={`lvl-${lvl.n}`}>
            <p className="label-mono text-muted-foreground">Level {lvl.n}</p>
            <h2 id={`lvl-${lvl.n}`} className="font-heading text-3xl font-extrabold tracking-tight">
              {lvl.name}
            </h2>
            <p className="mt-1 max-w-2xl text-muted-foreground">{lvl.blurb}</p>
            <ol className="mt-5 grid gap-4 md:grid-cols-2">
              {QUESTS.filter((q) => q.level === lvl.n).map((q) => {
                const idx = QUESTS.indexOf(q) + 1;
                const done = !!progress[q.id]?.done;
                const isNext = next?.id === q.id;
                return (
                  <li key={q.id}>
                    <Link
                      to={`/quests/${q.id}`}
                      className={`brut-sm brut-hover flex h-full gap-4 rounded-xl p-5 ${isNext ? "bg-accent text-accent-foreground" : ""}`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-foreground font-mono text-sm font-bold ${
                          done ? "bg-foreground text-background" : "bg-card text-foreground"
                        }`}
                        aria-hidden
                      >
                        {done ? <Check className="h-4 w-4" /> : idx}
                      </span>
                      <span className="min-w-0">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-heading text-lg font-bold leading-tight">{q.title}</span>
                          {done && <Badge variant="ink">Done</Badge>}
                          {isNext && !done && <Badge variant="ink">Next up</Badge>}
                        </span>
                        <span className={`mt-1 block text-sm ${isNext ? "" : "text-muted-foreground"}`}>{q.goal}</span>
                        <span className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline">{SKILL_LABEL[q.skill]}</Badge>
                          <Badge variant="outline">{q.time}</Badge>
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <div className="brut mt-14 rounded-2xl bg-accent p-6 text-accent-foreground sm:p-8">
        <h2 className="font-heading text-2xl font-extrabold">Want a mentor to look at your proof?</h2>
        <p className="mt-1 max-w-2xl text-sm font-medium">
          Mentor support comes with free registration. The quests work without it, and they work better with it.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild variant="default">
            <Link to={joinLink(roleBySlug("students")!)}>Join free</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/learn">Back to the study guide</Link>
          </Button>
        </div>
      </div>
    </InfoPage>
  );
};

/* ---------------- detail ---------------- */
export const QuestDetail: React.FC = () => {
  const { id = "" } = useParams();
  const quest: Quest | undefined = questById(id);
  const { progress, update, doneCount } = useQuestProgress();

  if (!quest) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-4xl font-extrabold">Quest not found</h1>
          <Button asChild variant="accent" className="mt-6">
            <Link to="/quests">All quests</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const idx = QUESTS.indexOf(quest);
  const following = QUESTS[idx + 1];
  const entry = progress[quest.id] ?? { done: false, proof: "" };

  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="container mx-auto px-4 py-12 sm:px-6">
          <Link to="/quests" className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-accent hover:bg-accent">
            ← All quests
          </Link>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge variant="ink">
              Quest {idx + 1} of {QUESTS.length}
            </Badge>
            <Badge variant="accent">{SKILL_LABEL[quest.skill]}</Badge>
            <Badge variant="outline">{quest.time}</Badge>
          </div>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            {quest.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{quest.goal}</p>
        </div>
      </section>

      <div className="container mx-auto grid gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <section aria-labelledby="steps">
            <h2 id="steps" className="font-heading text-2xl font-extrabold">
              Do this
            </h2>
            <ol className="mt-4 space-y-3">
              {quest.steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-card font-mono text-xs font-bold">
                    {i + 1}
                  </span>
                  <span>
                    <Inline text={s} />
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {quest.read.length > 0 && (
            <section aria-labelledby="read">
              <h2 id="read" className="font-heading text-2xl font-extrabold">
                Read when you're stuck
              </h2>
              <ul className="mt-4 space-y-2">
                {quest.read.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold underline decoration-2 underline-offset-4 decoration-accent hover:bg-accent"
                    >
                      {r.label} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="brut rounded-2xl p-5">
            <p className="label-mono text-muted-foreground">Proof of work</p>
            <p className="mt-2 font-medium">{quest.proof}</p>
            <label htmlFor="proof" className="mt-4 block text-sm font-semibold">
              Link or note <span className="font-normal text-muted-foreground">(optional, kept in this browser)</span>
            </label>
            <Input
              id="proof"
              className="mt-1"
              value={entry.proof}
              onChange={(e) => update(quest.id, { proof: e.target.value })}
              placeholder="https://github.com/you/ai-quests"
            />
            <Button
              variant={entry.done ? "outline" : "accent"}
              className="mt-4 w-full"
              aria-pressed={entry.done}
              onClick={() => update(quest.id, { done: !entry.done })}
            >
              {entry.done ? (
                <>
                  <Check className="h-4 w-4" /> Done. Undo
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4" /> I did it
                </>
              )}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              You mark this yourself. Mentor and peer review of your proof comes with registration.
            </p>
          </div>

          {following ? (
            <Button asChild variant="default" className="w-full">
              <Link to={`/quests/${following.id}`}>
                Next: {following.title} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="default" className="w-full">
              <Link to="/quests">Back to all quests ({doneCount} done)</Link>
            </Button>
          )}
          <StorageNote />
        </aside>
      </div>
    </Layout>
  );
};
