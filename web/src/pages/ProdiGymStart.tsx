import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  FlaskConical,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ChainOfChallengesGenerator } from "@/components/site/ChainOfChallengesGenerator";

// ─── Data ─────────────────────────────────────────────────────────────────────

const LEARNER_LEVELS = [
  {
    id: "explorer",
    level: "L1",
    name: "Explorer",
    srujanStage: "Stage 1 · Foundations",
    tagline: "A new world is opening up. Start here.",
    who: [
      "First-year students in any field — engineering, law, design, medicine, arts",
      "Someone new to structured, challenge-based learning",
      "A professional curious about AI who hasn't yet built anything",
      "Anyone who has an aspiration but doesn't know where to start",
    ],
    acpMilestone: "ACP-1 → ACP-2: From AI Consumer to AI Prompter",
    dedMilestone: "DED-1: Foundational domain awareness",
    hcsFocus: "C1 Inner Anchor · C2 Taking Charge · C7 Adapting & Learning",
    firstChallenges: [
      { type: "P1", label: "Learning", example: "Trace how a large language model generates one token" },
      { type: "P2", label: "Teaching", example: "Explain a concept you just learned to one person" },
      { type: "P9", label: "Community", example: "Map a small unmet need in your campus or locality" },
    ],
    sprintTime: "1–3 days per micro-challenge",
    icon: BookOpen,
    color: "bg-accent text-accent-foreground",
    badgeVariant: "ink" as const,
    ctaText: "Start as an Explorer",
    ctaLink: "/join?level=explorer",
  },
  {
    id: "builder",
    level: "L2",
    name: "Builder",
    srujanStage: "Stage 2 · Applied Sprints",
    tagline: "Turn knowledge into real, reviewable work.",
    who: [
      "2nd or 3rd year students building a portfolio for internships",
      "Early-career professionals applying their skills to new problems",
      "Someone who has learned the basics and wants to build something real",
      "Anyone who wants proof-of-work, not just certificates",
    ],
    acpMilestone: "ACP-2 → ACP-3: From AI Prompter to AI Orchestrator",
    dedMilestone: "DED-2: Completed an applied project with domain deliverables",
    hcsFocus: "C3 Thinking · C4 Communicating · C6 Collaborating",
    firstChallenges: [
      { type: "P4", label: "Building", example: "Design and test a prototype that solves a real user problem" },
      { type: "P5", label: "AI-Native", example: "Build a multi-step AI workflow for a campus challenge" },
      { type: "P7", label: "Consulting", example: "Analyse a local organisation's problem and deliver a recommendation" },
    ],
    sprintTime: "1–2 weeks per challenge",
    icon: Briefcase,
    color: "bg-secondary text-foreground",
    badgeVariant: "accent" as const,
    ctaText: "Start as a Builder",
    ctaLink: "/join?level=builder",
  },
  {
    id: "innovator",
    level: "L3",
    name: "Innovator",
    srujanStage: "Stage 3 · Deep Inquiry",
    tagline: "Go deep. Create something original. Defend it.",
    who: [
      "Final-year students, post-graduates, and research scholars",
      "Professionals who want to contribute original thinking to their field",
      "Anyone who wants to publish, patent, or produce intellectual work",
      "Teams tackling interdisciplinary, hard problems",
    ],
    acpMilestone: "ACP-3 → ACP-4: From AI Orchestrator to AI Architect",
    dedMilestone: "DED-3 → DED-4: Domain artefacts reviewed by experts → original contribution",
    hcsFocus: "C3 Thinking · C5 Creating & Innovating · C8 Contributing to Society",
    firstChallenges: [
      { type: "P6", label: "Research", example: "Conduct a systematic review and produce a preprint or report" },
      { type: "P8", label: "Design", example: "User research and prototype for a real, underserved problem" },
      { type: "P10", label: "Policy", example: "Research a policy question and develop a brief for a stakeholder" },
    ],
    sprintTime: "2–6 weeks per challenge",
    icon: Cpu,
    color: "bg-card text-foreground",
    badgeVariant: "outline" as const,
    ctaText: "Start as an Innovator",
    ctaLink: "/join?level=innovator",
  },
  {
    id: "pioneer",
    level: "L4",
    name: "Pioneer",
    srujanStage: "Stage 4 · Venture & Mastery",
    tagline: "Lead. Mentor. Create systemic impact.",
    who: [
      "Post-docs, faculty, and domain experts seeking to multiply their impact",
      "Senior practitioners, founders, and policymakers",
      "L3 learners ready to mentor others and tackle enterprise-scale challenges",
      "Anyone who wants to be recognised as a Guru in their field",
    ],
    acpMilestone: "ACP-4 → ACP-5: AI Architect to AI Pioneer",
    dedMilestone: "DED-4 → DED-5: Original contributor → recognised domain authority",
    hcsFocus: "C6 Collaborating & Leading · C8 Contributing · C2 Taking Charge",
    firstChallenges: [
      { type: "P3", label: "Learning Resources", example: "Build and publish an open challenge for 100+ learners" },
      { type: "P12", label: "Interdisciplinary", example: "Mentor a cross-stream team tackling a societal challenge" },
      { type: "P6+P4", label: "Research+Build", example: "File a patent or publish at a recognised venue" },
    ],
    sprintTime: "4–8 weeks per challenge",
    icon: Rocket,
    color: "bg-foreground text-background",
    badgeVariant: "ember" as const,
    ctaText: "Join as a Pioneer",
    ctaLink: "/join?level=pioneer",
  },
];

const THREE_DIMENSIONS = [
  {
    id: "acp",
    label: "AI Collaboration Proficiency",
    short: "ACP",
    desc: "How effectively you use AI as a force-multiplier while remaining the expert in the loop.",
    levels: ["AI Consumer", "AI Prompter", "AI Orchestrator", "AI Architect", "AI Pioneer"],
    icon: Sparkles,
    color: "text-accent",
  },
  {
    id: "ded",
    label: "Domain Expert Depth",
    short: "DED",
    desc: "How deep your judgment and knowledge runs in your chosen field. The dimension AI cannot replace.",
    levels: ["Aware", "Practising", "Competent", "Expert", "Authority"],
    icon: FlaskConical,
    color: "text-ember",
  },
  {
    id: "hcs",
    label: "Human-Centric Skills",
    short: "HCS",
    desc: "64 transferable skills across 8 clusters — from inner mastery and thinking to collaboration and societal responsibility.",
    levels: ["Unaware (L0)", "Aware (L1)", "Practising (L2)", "Consistent (L3)", "Identity (L4)"],
    icon: Brain,
    color: "text-primary",
  },
];

const HCS_CLUSTERS = [
  { id: "C1", name: "Inner Anchor", desc: "Shraddha, concentration, fearlessness, equanimity, self-discipline" },
  { id: "C2", name: "Taking Charge", desc: "Goal-setting, ownership, resilience, Viveka/Prakamya, initiative" },
  { id: "C3", name: "Thinking", desc: "First-principles, systems thinking, critical evaluation, metacognition" },
  { id: "C4", name: "Listening & Communicating", desc: "Deep listening (Shravanam), written clarity, storytelling, feedback" },
  { id: "C5", name: "Creating & Innovating", desc: "Curiosity, originality, prototyping, aesthetic sensibility, synthesis" },
  { id: "C6", name: "Collaborating & Leading", desc: "Trust, distributed leadership, conflict navigation, mentoring others (Seva)" },
  { id: "C7", name: "Adapting & Learning", desc: "Meta-learning, updating beliefs, coping with failure, transferring skills" },
  { id: "C8", name: "Contributing to Society", desc: "Ethics, empathy, civic participation, wisdom, Seva, Sarve Bhavantu Sukhinah" },
];

const PROJECT_TYPES_BRIEF = [
  { code: "P1", name: "Learning", icon: BookOpen },
  { code: "P2", name: "Teaching", icon: Users },
  { code: "P3", name: "Learning Resources", icon: Lightbulb },
  { code: "P4", name: "Building", icon: Zap },
  { code: "P5", name: "AI-Native", icon: Sparkles },
  { code: "P6", name: "Research", icon: FlaskConical },
  { code: "P7", name: "Consulting", icon: Briefcase },
  { code: "P8", name: "Design", icon: Target },
  { code: "P9", name: "Community", icon: Users },
  { code: "P10", name: "Policy", icon: Award },
  { code: "P11", name: "Arts & Culture", icon: Brain },
  { code: "P12", name: "Interdisciplinary", icon: Cpu },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function LevelCard({ level, expanded, onToggle }: { level: typeof LEARNER_LEVELS[0]; expanded: boolean; onToggle: () => void }) {
  const Icon = level.icon;
  return (
    <article className="brut rounded-2xl bg-card overflow-hidden">
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-secondary/40 transition-colors"
        aria-expanded={expanded}
        id={`level-btn-${level.id}`}
      >
        <div className="flex items-center gap-4">
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-foreground ${level.color}`}>
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={level.badgeVariant}>{level.level} · {level.name}</Badge>
              <span className="label-mono text-xs text-muted-foreground">{level.srujanStage}</span>
            </div>
            <p className="mt-0.5 font-heading text-lg font-bold">{level.tagline}</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
        )}
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t-2 border-foreground p-5 sm:p-6 space-y-6">
          {/* Who is this for */}
          <div>
            <p className="label-mono text-xs font-bold text-muted-foreground mb-2">Who this is for</p>
            <ul className="space-y-1.5">
              {level.who.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3DLA milestones */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border-2 border-foreground/10 bg-secondary/30 p-3">
              <p className="label-mono text-[10px] font-bold text-accent mb-1">ACP Milestone</p>
              <p className="text-xs text-foreground">{level.acpMilestone}</p>
            </div>
            <div className="rounded-lg border-2 border-foreground/10 bg-secondary/30 p-3">
              <p className="label-mono text-[10px] font-bold text-ember mb-1">DED Milestone</p>
              <p className="text-xs text-foreground">{level.dedMilestone}</p>
            </div>
            <div className="rounded-lg border-2 border-foreground/10 bg-secondary/30 p-3">
              <p className="label-mono text-[10px] font-bold text-foreground mb-1">HCS Focus</p>
              <p className="text-xs text-foreground">{level.hcsFocus}</p>
            </div>
          </div>

          {/* First challenges */}
          <div>
            <p className="label-mono text-xs font-bold text-muted-foreground mb-2">Your first challenges</p>
            <div className="space-y-2">
              {level.firstChallenges.map((c) => (
                <div key={c.type} className="flex items-start gap-3 rounded-lg border border-foreground/10 bg-card p-3">
                  <span className="label-mono text-[10px] font-bold text-accent shrink-0 mt-0.5">{c.type}</span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{c.label}</p>
                    <p className="text-xs text-muted-foreground">{c.example}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Sprint time: <span className="font-semibold text-foreground">{level.sprintTime}</span></p>
          </div>

          <div className="pt-2 border-t border-foreground/10">
            <Button asChild variant="accent" size="sm">
              <Link to={level.ctaLink}>
                {level.ctaText} <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </article>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export function ProdiGymStart() {
  const [expandedLevel, setExpandedLevel] = useState<string | null>("explorer");
  const [showAllClusters, setShowAllClusters] = useState(false);

  const toggle = (id: string) => setExpandedLevel((prev) => (prev === id ? null : id));

  return (
    <Layout>
      <main className="min-h-screen bg-background">
        {/* ─── Hero ─────────────────────────────────────────────────────── */}
        <section className="border-b-2 border-foreground bg-background py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="accent">PROdiGYM</Badge>
                <Badge variant="outline">gym for brain</Badge>
                <Badge variant="outline">Getting Started</Badge>
              </div>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight">
                Everyone can be a prodigy,<br />
                <span className="mark-lime inline-block mt-1">with AI and practice.</span>
              </h1>
              <p className="mt-5 text-base text-muted-foreground sm:text-lg max-w-2xl">
                PROdiGYM is a challenge-based learning gym for brain. Whether you are a first-year student or a post-doc, a software engineer or a lawyer — your journey starts here, at your level, toward your aspiration.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg">
                  <a href="#chain-of-challenges">
                    Build my challenge chain <ArrowRight className="h-4 w-4 ml-1.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#find-your-level">Explore levels</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/join">Join a cohort</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3 Dimensions ─────────────────────────────────────────────── */}
        <section className="border-b-2 border-foreground py-14">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-8">
              <p className="label-mono text-muted-foreground">The Three Dimensions</p>
              <h2 className="mt-1 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                Your gym tracks three things simultaneously
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Unlike a single-skill platform, PROdiGYM develops you across three independent axes — because you need all three in the AI era.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {THREE_DIMENSIONS.map((dim) => {
                const Icon = dim.icon;
                return (
                  <div key={dim.id} className="brut-sm rounded-2xl bg-card p-6">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground bg-secondary mb-4`}>
                      <Icon className={`h-5 w-5 ${dim.color}`} aria-hidden />
                    </span>
                    <p className="label-mono text-xs font-bold text-muted-foreground">{dim.short}</p>
                    <h3 className="font-heading text-lg font-extrabold mt-1">{dim.label}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{dim.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {dim.levels.map((l, i) => (
                        <span key={l} className="text-[10px] font-mono rounded border border-foreground/20 bg-secondary/50 px-1.5 py-0.5">
                          {i + 1}. {l}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Find Your Level ──────────────────────────────────────────── */}
        <section id="find-your-level" className="border-b-2 border-foreground py-14">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-8">
              <p className="label-mono text-muted-foreground">The Srujana Pathway</p>
              <h2 className="mt-1 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                Where are you in your journey?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Choose based on your current competency and aspiration — not your branch, degree, or age. Open each level to see your first challenges and milestones.
              </p>
            </div>
            <div className="space-y-4 max-w-3xl">
              {LEARNER_LEVELS.map((level) => (
                <LevelCard
                  key={level.id}
                  level={level}
                  expanded={expandedLevel === level.id}
                  onToggle={() => toggle(level.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Interactive Chain of Challenges Generator ─────────────────── */}
        <section id="chain-of-challenges" className="border-b-2 border-foreground py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <ChainOfChallengesGenerator />
          </div>
        </section>

        {/* ─── 12 Challenge-Project Types ───────────────────────────────── */}
        <section className="border-b-2 border-foreground py-14 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-8">
              <p className="label-mono text-muted-foreground">The Challenge Library</p>
              <h2 className="mt-1 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                12 types of challenges, every stream
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                From learning and teaching to research, building, AI-native coding, consulting, design, community service, policy, arts, and interdisciplinary work — there is a challenge for every aspiration in every field.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {PROJECT_TYPES_BRIEF.map((pt) => {
                const Icon = pt.icon;
                return (
                  <div key={pt.code} className="brut-sm rounded-xl bg-card p-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-foreground bg-accent text-accent-foreground">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="label-mono text-[10px] font-bold text-muted-foreground">{pt.code}</p>
                      <p className="font-heading text-sm font-bold leading-tight">{pt.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              A Guru (mentor) guides every challenge-project. Gurus are domain experts, faculty, or advanced learners who have completed the same challenge at a higher level.
            </p>
          </div>
        </section>

        {/* ─── 64 Human-Centric Skills ──────────────────────────────────── */}
        <section className="border-b-2 border-foreground py-14">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-8">
              <p className="label-mono text-muted-foreground">64 Human-Centric Skills · 8 Clusters</p>
              <h2 className="mt-1 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                Skills that are uniquely and irreplaceably human
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Synthesized from Swami Vivekananda's character principles, Indian Knowledge Systems (Shravanam, Shraddha, Viveka, Seva), Minerva's HC framework (structure only, all content is original), and the WEF Future of Jobs skills. You build a radar profile across all 8 clusters over time.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(showAllClusters ? HCS_CLUSTERS : HCS_CLUSTERS.slice(0, 4)).map((c) => (
                <div key={c.id} className="brut-sm rounded-xl bg-card p-4">
                  <span className="label-mono text-xs font-bold text-accent">{c.id}</span>
                  <h4 className="font-heading text-sm font-extrabold mt-1">{c.name}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowAllClusters((p) => !p)}
              className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent-foreground underline underline-offset-2 hover:text-accent transition-colors"
            >
              {showAllClusters ? (
                <><ChevronUp className="h-4 w-4" /> Show fewer clusters</>
              ) : (
                <><ChevronDown className="h-4 w-4" /> Show all 8 clusters</>
              )}
            </button>
          </div>
        </section>

        {/* ─── Philosophy Pillars ───────────────────────────────────────── */}
        <section className="border-b-2 border-foreground py-14 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-8">
              <p className="label-mono text-muted-foreground">How the gym works</p>
              <h2 className="mt-1 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                Prakamya — discernment of what is worth wanting
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The philosophy of PROdiGYM is <strong>Prakamya</strong> — one of the ashta siddhis — understood as the discernment to decide what is truly worth wanting, for the good of society and all beings (<em>sarve bhavantu sukhinah</em>).
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Learn by Doing",
                  desc: "Every challenge is anchored in a real problem and ends with a reviewable deliverable — never passive lectures.",
                },
                {
                  title: "Augmented by AI",
                  desc: "AI is your tireless research partner and coding agent. You learn to direct, audit, and steer it as the expert in the loop.",
                },
                {
                  title: "Human Judgment First",
                  desc: "Critical thinking, ethics, domain depth, and wisdom — these are yours. Every high-stakes decision is signed off by a human.",
                },
                {
                  title: "Proof of Work",
                  desc: "Your readiness is proven by deliverables, peer review, and Guru sign-off — not attendance or passive certificates.",
                },
              ].map((p) => (
                <div key={p.title} className="brut-sm rounded-xl bg-card p-5">
                  <h4 className="font-heading text-base font-bold">{p.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA Footer ───────────────────────────────────────────────── */}
        <section className="py-14">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="brut rounded-2xl bg-foreground text-background p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
                  Ready to start your first challenge?
                </h2>
                <p className="mt-2 text-sm text-background/70">
                  No prerequisites. Start free at your level. Join a Guru-guided cohort or begin solo — the gym is open.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button asChild variant="accent" size="lg">
                  <Link to="/join">
                    Join PROdiGYM <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="border-2 border-background text-background hover:bg-background hover:text-foreground">
                  <Link to="/quests">Browse Challenges</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
