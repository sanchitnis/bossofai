import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Cpu,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface SrujanaStageCard {
  number: string;
  stage: string;
  timeline: string;
  title: string;
  tagline: string;
  focus: string;
  challengeType: string;
  deliverables: string[];
  outcome: string;
  icon: React.ElementType;
  ctaText: string;
  ctaLink: string;
  badgeVariant?: "ink" | "accent" | "ember" | "outline";
}

const STAGES: SrujanaStageCard[] = [
  {
    number: "01",
    stage: "Stage 1 · Foundations",
    timeline: "1 – 3 Days / Sprint",
    title: "Basic Foundational Learning & AI Literacy",
    tagline: "From passive AI consumer to active AI builder.",
    focus:
      "Master modern AI engineering basics: meta-learning, prompt and context engineering, steering coding agents, and red-teaming hallucinations.",
    challengeType: "Bite-sized micro-challenges and guided coding quests. Build small, fast, public prototypes.",
    deliverables: [
      "Working prompt and context pipelines",
      "Coding agent workflows (Claude, Cursor, Copilot)",
      "Automated evals and error analysis testbeds",
    ],
    outcome: "Verified competency in AI tooling, public GitHub portfolio, and readiness for collaborative team challenges.",
    icon: Terminal,
    ctaText: "Start 13 Quests",
    ctaLink: "/quests",
    badgeVariant: "ink",
  },
  {
    number: "02",
    stage: "Stage 2 · Applied Sprints",
    timeline: "2 – 4 Weeks / Project",
    title: "Internship Preparation & Applied Challenges",
    tagline: "From manual grunt-work to AI Agent Orchestration.",
    focus:
      "Because AI agents handle routine syntax, top internships look for orchestrators. Direct multi-agent workflows, manage data governance, and apply Human-in-the-Loop judgment.",
    challengeType: "Industry and community-backed challenge projects. Work in cross-functional pods with real mentors.",
    deliverables: [
      "Full-stack AI application deployed for real users",
      "Multi-agent task pipelines with structured evals",
      "Human-in-the-Loop (HEITL) review checkpoints",
    ],
    outcome: "Interview-ready portfolio with verifiable proof-of-work that qualifies you for competitive industry internships.",
    icon: Briefcase,
    ctaText: "Browse Challenge Ideas",
    ctaLink: "/ideas",
    badgeVariant: "accent",
  },
  {
    number: "03",
    stage: "Stage 3 · Deep Inquiry",
    timeline: "1 – 3 Months",
    title: "Systems Architecture, Solutions & Research IP",
    tagline: "From how to build to what to build and why it matters.",
    focus:
      "Act as a Systems Architect orchestrating foundation models. Tackle hard bottlenecks first ('Monkey-First' de-risking) using Ramesh Raskar's SPOT-PROBE methodology.",
    challengeType: "High-stakes deep inquiry challenges. Defend your work in front of an expert jury that red-teams your system.",
    deliverables: [
      "Research preprints, technical whitepapers, or patents",
      "Digital Public Goods (DPG) and open specifications",
      "Rigorous benchmark and red-teaming audit reports",
    ],
    outcome: "Recognized intellectual property (IP), research publications, and demonstrated system-level leadership.",
    icon: Cpu,
    ctaText: "AI Engineer Study Guide",
    ctaLink: "/learn",
    badgeVariant: "outline",
  },
  {
    number: "04",
    stage: "Stage 4 · Incubation",
    timeline: "3 – 6 Months",
    title: "Venture Development & AI-Era Careers",
    tagline: "Small student teams wielding enterprise-scale leverage.",
    focus:
      "Transform validated Stage 3 solutions into commercial software, startup spin-offs, or elite AI-native engineering careers.",
    challengeType: "Stage-gated venture incubation sprints, customer discovery, founder matchmaking, and investor demo readiness.",
    deliverables: [
      "AI-native startup launch or corporate spin-off",
      "Paying enterprise customers or pilot contracts",
      "Marquee placement in top frontier AI roles",
    ],
    outcome: "Commercial venture launch or marquee career placement backed by 100% verified proof-of-work portfolio.",
    icon: Rocket,
    ctaText: "Join with a Mentor",
    ctaLink: "/join?role=students",
    badgeVariant: "ember",
  },
];

const PILLARS = [
  {
    title: "Learn by Doing",
    desc: "Every concept is anchored in a live codebase and real users—never passive lectures or multiple-choice quizzes.",
    icon: Workflow,
  },
  {
    title: "Augmented by AI",
    desc: "AI agents are your tireless pair-programmers and researchers. You learn to direct, audit, and steer them safely.",
    icon: Sparkles,
  },
  {
    title: "Human Judgment",
    desc: "Critical thinking, safety, ethics, and domain depth. The human signs off on every high-stakes decision (HEITL).",
    icon: ShieldCheck,
  },
  {
    title: "Proof of Work",
    desc: "Your readiness is proven by public GitHub code, deployed systems, peer reviews, and expert jury vivas.",
    icon: Award,
  },
];

export const SrujanaPathway: React.FC = () => {
  return (
    <section className="border-t-2 border-foreground bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="accent">The Srujana Pathway</Badge>
            <Badge variant="outline">4-Stage Challenge Progression</Badge>
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl">
            From Foundations to Internships to Venture Development
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            In the era of Abundant Intelligence, learning is not about passive memorization. The{" "}
            <strong>Srujana Pathway</strong> takes you through a sequential series of hands-on challenges—taking you from
            basic foundational literacy to qualifying for competitive internships, designing deep-tech architectures,
            and incubating real ventures.
          </p>
        </div>

        {/* Stepper overview / Progress bar */}
        <div className="mt-10 brut rounded-2xl bg-secondary/50 p-6">
          <p className="label-mono mb-4 text-muted-foreground">The Progression Arc</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((s, idx) => (
              <div key={s.number} className="relative flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-accent font-mono text-xs font-bold text-accent-foreground">
                  {s.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Stage {idx + 1}
                  </p>
                  <p className="truncate font-heading text-sm font-extrabold">{s.stage.split("·")[1]?.trim()}</p>
                </div>
                {idx < STAGES.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted-foreground lg:block" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4 Detailed Stage Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {STAGES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.number}
                className="brut brut-hover flex flex-col justify-between rounded-2xl bg-card p-6 sm:p-8"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge variant={s.badgeVariant || "outline"}>{s.stage}</Badge>
                      <Badge variant="outline" className="font-mono text-xs">
                        {s.timeline}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent-foreground mark-lime inline-block">
                    {s.tagline}
                  </p>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.focus}</p>

                  <div className="mt-5 rounded-xl border-2 border-foreground/20 bg-secondary/40 p-4">
                    <p className="label-mono text-xs font-bold text-foreground">Challenge Engine</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.challengeType}</p>
                  </div>

                  <div className="mt-5">
                    <p className="label-mono text-xs font-bold text-muted-foreground">Key Proof-of-Work</p>
                    <ul className="mt-2 space-y-2">
                      {s.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs font-medium">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-4 border-t border-foreground/10">
                    <p className="text-xs font-medium text-muted-foreground">
                      <strong className="text-foreground">Target Outcome:</strong> {s.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-foreground">
                  <Button asChild variant="accent" size="sm" className="w-full sm:w-auto">
                    <Link to={s.ctaLink}>
                      {s.ctaText} <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {/* The 4 Core Mentoring Pillars */}
        <div className="mt-14 brut rounded-2xl bg-secondary/60 p-6 sm:p-10">
          <div className="max-w-2xl">
            <p className="label-mono text-muted-foreground">Mentoring Philosophy</p>
            <h3 className="mt-1 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              How the Srujana Gym Mentors You
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every challenge stage is anchored in four foundational pillars designed to prepare you for high-trust,
              high-judgment roles in the AI era.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="brut-sm rounded-xl bg-card p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-foreground bg-accent text-accent-foreground mb-3">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h4 className="font-heading text-base font-bold">{p.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Banner footer prompt */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border-2 border-foreground bg-background p-5">
            <div>
              <p className="font-heading text-base font-bold">Ready to take on your first challenge?</p>
              <p className="text-xs text-muted-foreground">
                No prerequisites. Start free with Stage 1 quests or join a mentored cohort.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button asChild variant="accent">
                <Link to="/quests">
                  Start Stage 1 <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/join?role=students">Join with Mentor</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
