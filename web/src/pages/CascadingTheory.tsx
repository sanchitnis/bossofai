import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Building2,
  Users,
  Globe,
  ArrowDown,
  ArrowRight,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  RefreshCw,
  CheckCircle2,
  Dumbbell,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    id: "foundation",
    number: "1",
    label: "THE FOUNDATION",
    title: "Educational Institutions",
    icon: Building2,
    color: "indigo",
    borderClass: "border-indigo-500/40",
    bgClass: "bg-indigo-500/10",
    textClass: "text-indigo-300",
    glowClass: "shadow-indigo-500/10",
    actions: [
      "AI-Native Institutional Strategic Plans with quarterly agility cycles",
      "Living Curricula — continuously updated, version-controlled syllabi",
      "AI Compute Sandboxes enabling frictionless innovation",
      "AI Ethics & Governance Frameworks with review bodies",
      "Digital infraware & open data collaborations with industry",
    ],
    outcome: "An AI-native institutional environment where radical experimentation is not only permitted but structurally incentivized.",
  },
  {
    id: "catalyst",
    number: "2",
    label: "THE CATALYST",
    title: "The Academic Community",
    icon: Users,
    color: "purple",
    borderClass: "border-purple-500/40",
    bgClass: "bg-purple-500/10",
    textClass: "text-purple-300",
    glowClass: "shadow-purple-500/10",
    actions: [
      "T — Teaching & Learning: Transition to cognitive co-exploration & Socratic challenge",
      "R — Research, Innovation, Consulting & VC: Research → Ventures in days, not years",
      "A — Advising & Administration: Reclaim Guru-Shishya mentorship; delegate admin to AI",
      "C — Community Transformation: Anchor regional grassroots AI living labs",
      "K — Kaizen: Embed continuous improvement at Personal, Institutional, Societal scales",
      "Srujana Pathway: Learner journey from Curiosity → Exploration → Creation → Impact",
    ],
    outcome: "Empowered faculty become venture catalysts, empathetic Gurus, and drivers of societal renewal. Students become autonomous orchestrators of AI systems.",
  },
  {
    id: "transformation",
    number: "3",
    label: "THE OUTCOME",
    title: "Society & Industry",
    icon: Globe,
    color: "cyan",
    borderClass: "border-cyan-500/40",
    bgClass: "bg-cyan-500/10",
    textClass: "text-cyan-300",
    glowClass: "shadow-cyan-500/10",
    actions: [
      "White-collar workforce reskilling from task execution to AI orchestration",
      "Democratized AI literacy reaching rural communities, MSMEs, aspiring learners",
      "Regional venture spin-offs solving real AgriTech, HealthTech, GovTech problems",
      "Ethical & equitable AI stewardship — citizens who govern, not just use, AI",
    ],
    outcome: "A resilient, cognitively agile society where abundant intelligence serves human flourishing, creativity, and collective prosperity.",
  },
];

const whyCascading = [
  {
    icon: Target,
    title: "Dependency",
    desc: "Each tier structurally enables the next. Societal transformation without institutional transformation is not scalable — it fragments and fades.",
  },
  {
    icon: TrendingUp,
    title: "Amplification",
    desc: "Effects compound exponentially. Transforming 100 faculty can reach 10,000 students who collectively impact 100,000+ community members.",
  },
  {
    icon: CheckCircle2,
    title: "Irreversibility",
    desc: "Once a tier transforms, it creates enduring infrastructure for the next. The progress does not reverse — it compounds.",
  },
  {
    icon: RefreshCw,
    title: "Multi-directionality",
    desc: "Societal feedback and real-world problems flow back up to inform institutional strategy and curriculum — a living, breathing system.",
  },
];

export const CascadingTheory: React.FC = () => {
  const [activeTier, setActiveTier] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[120px]" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-6">
            <Layers className="h-3.5 w-3.5 text-indigo-400" />
            <span>Strategic Foundation of Boss of AI</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
            The Cascading{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Theory of
            </span>{" "}
            Transformation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Societal readiness for <strong className="text-white">Abundant Intelligence</strong> cannot
            be achieved through isolated, one-off interventions. It requires a structured, cascading institutional
            movement — flowing from the most foundational layer outward.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <Link to="/#track">
              <Button variant="gym" size="lg" className="gap-2 text-sm">
                <Sparkles className="h-4 w-4" />
                T.R.A.C.K. Framework
              </Button>
            </Link>
            <a
              href="https://github.com/sanchitnis/bossofai/blob/main/wiki/cascading_theory_of_transformation.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2 text-sm text-slate-200">
                <BookOpen className="h-4 w-4 text-indigo-400" />
                Read Wiki Node
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Core Principle Banner */}
      <section className="border-t border-b border-white/10 bg-slate-950/60 py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-400">
              The Core Principle
            </div>
            <blockquote className="text-lg sm:text-2xl font-heading font-semibold text-white leading-snug">
              "By transforming{" "}
              <span className="text-indigo-300">Educational Institutions</span> and empowering the{" "}
              <span className="text-purple-300">Academic Community</span>, we systematically and
              inevitably prepare the broader{" "}
              <span className="text-cyan-300">Workforce and Society</span> to thrive."
            </blockquote>
            <p className="text-sm text-slate-400">
              Primary operational vehicle:{" "}
              <strong className="text-white">Vision-Aligned Collaborative Projects</strong> powered by
              the AI-Native Project Engine
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tier Exploration */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Explore the Three Tiers
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Each tier builds upon the last, creating an irreversible cascade of societal transformation.
            </p>
          </div>

          {/* Tier Selector */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto mb-10 justify-center">
            {tiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(idx)}
                  className={`flex-1 flex flex-col items-center gap-2 p-5 rounded-xl border text-center transition-all duration-300 ${
                    activeTier === idx
                      ? `${tier.borderClass} ${tier.bgClass} shadow-lg ${tier.glowClass} -translate-y-1`
                      : "border-white/10 bg-slate-950/60 hover:border-white/20 text-slate-400"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg ${activeTier === idx ? `${tier.bgClass} ${tier.textClass}` : "bg-white/5 text-slate-400"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${activeTier === idx ? tier.textClass : "text-slate-500"}`}>
                    {tier.label}
                  </span>
                  <span className={`text-sm font-bold leading-tight ${activeTier === idx ? "text-white" : "text-slate-400"}`}>
                    {tier.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tier Detail */}
          {(() => {
            const tier = tiers[activeTier];
            const Icon = tier.icon;
            return (
              <div className={`max-w-4xl mx-auto rounded-2xl border ${tier.borderClass} bg-slate-900/70 p-6 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
                  <div className={`p-3 rounded-xl ${tier.bgClass} ${tier.textClass}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <Badge className={`text-[10px] mb-1 ${tier.bgClass} ${tier.textClass} border ${tier.borderClass}`}>
                      Tier {tier.number} — {tier.label}
                    </Badge>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                      {tier.title}
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-amber-400" />
                      Transformation Actions
                    </h4>
                    <ul className="space-y-2">
                      {tier.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <ChevronRight className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${tier.textClass}`} />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl border ${tier.borderClass} ${tier.bgClass} p-5`}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Target className={`h-3.5 w-3.5 ${tier.textClass}`} />
                      <span className={tier.textClass}>Tier Outcome</span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed italic">
                      "{tier.outcome}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Cascade Flow Visual */}
      <section className="py-12 bg-slate-950/60 border-t border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl sm:text-3xl font-extrabold text-white mb-12">
            The Cascade Flow
          </h2>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-2">
            {tiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <React.Fragment key={tier.id}>
                  <div className={`w-full rounded-xl border ${tier.borderClass} ${tier.bgClass} p-4 flex items-center gap-4`}>
                    <div className={`p-2.5 rounded-lg ${tier.bgClass} ${tier.textClass} shrink-0`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${tier.textClass} mb-0.5`}>
                        {tier.label}
                      </div>
                      <div className="text-sm font-bold text-white">{tier.title}</div>
                    </div>
                    <div className={`text-xs font-mono font-bold ${tier.textClass}`}>Tier {tier.number}</div>
                  </div>
                  {idx < tiers.length - 1 && (
                    <div className="flex flex-col items-center gap-0.5 py-1">
                      <ArrowDown className="h-5 w-5 text-slate-500" />
                      <span className="text-[10px] text-slate-500 font-medium">Empowers & Catalyzes</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            <div className="mt-4 w-full rounded-xl border border-dashed border-amber-500/30 bg-amber-950/20 p-4 text-center">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">Primary Vehicle at All Levels</div>
              <div className="text-sm font-bold text-white">Vision-Aligned Collaborative Projects</div>
              <div className="text-xs text-slate-400 mt-0.5">Powered by the AI-Native Project Engine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cascading */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Why <span className="text-indigo-300">"Cascading"</span>?
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              The word is intentional and precise. It describes four structural properties of this theory.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {whyCascading.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 space-y-3 hover:border-indigo-500/30 transition-colors">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-300 w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-base">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amplification Impact Stats */}
      <section className="py-12 bg-slate-950/60 border-t border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">The Amplification Effect</h3>
              <p className="text-xs text-slate-400">How transforming one institution cascades into societal impact</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: "1", label: "Institution Transformed", color: "text-indigo-300", sub: "Foundation" },
                { value: "100+", label: "Faculty Empowered", color: "text-purple-300", sub: "Catalyst Tier" },
                { value: "10K+", label: "Students Reached", color: "text-cyan-300", sub: "Each Cohort" },
                { value: "100K+", label: "Community Members Impacted", color: "text-emerald-300", sub: "Societal Outcome" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 text-center space-y-1">
                  <div className={`font-heading font-black text-3xl ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs font-bold text-white leading-snug">{stat.label}</div>
                  <div className="text-[10px] text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Links to subpages & wiki */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link to="/#track" className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-5 hover:bg-indigo-950/40 transition-colors group">
              <Sparkles className="h-6 w-6 text-indigo-400 mb-3" />
              <div className="font-heading font-bold text-white text-sm mb-1 group-hover:text-indigo-300 transition-colors">T.R.A.C.K. Framework</div>
              <p className="text-xs text-slate-400">The faculty operating system across 5 dimensions of impact.</p>
              <ArrowRight className="h-4 w-4 text-indigo-400 mt-3" />
            </Link>
            <Link to="/#pathway" className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-5 hover:bg-purple-950/40 transition-colors group">
              <Dumbbell className="h-6 w-6 text-purple-400 mb-3" />
              <div className="font-heading font-bold text-white text-sm mb-1 group-hover:text-purple-300 transition-colors">Srujana Pathway</div>
              <p className="text-xs text-slate-400">The 4-stage experiential learner journey from Curiosity to Impact.</p>
              <ArrowRight className="h-4 w-4 text-purple-400 mt-3" />
            </Link>
            <a
              href="https://github.com/sanchitnis/bossofai/blob/main/wiki/cascading_theory_of_transformation.md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-5 hover:bg-cyan-950/40 transition-colors group"
            >
              <BookOpen className="h-6 w-6 text-cyan-400 mb-3" />
              <div className="font-heading font-bold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                Wiki Deep-Dive
                <ExternalLink className="h-3 w-3" />
              </div>
              <p className="text-xs text-slate-400">Full semantic wiki node with source references and cross-links.</p>
              <ArrowRight className="h-4 w-4 text-cyan-400 mt-3" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
