import React, { useState, useMemo } from "react";
import {
  FolderGit2,
  FileCode2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  GitBranch,
  Terminal,
  BookOpen,
  Search,
  ChevronDown,
  Cpu,
  Layers,
  ExternalLink,
  Bot,
  Zap,
  RefreshCw,
  FlaskConical,
  GraduationCap,
  Heart,
  Globe,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ─── Artifact Steps ────────────────────────────────────────────────────────
const artifacts = [
  {
    step: "0",
    file: "0_context.md",
    stage: "Foundation",
    title: "Standing Project Context",
    desc: "Bedrock facts, domain background, institutional constraints, style guide, and citation standards. Read cold by AI and human before work begins.",
    badge: "border-slate-500/40 text-slate-300 bg-slate-500/10",
  },
  {
    step: "1",
    file: "1_intent.md",
    stage: "Envision",
    title: "Problem Statement & Audience",
    desc: "Capturing the raw opportunity, pain point, target stakeholders, and definition of done before any drafting commences.",
    badge: "border-blue-500/40 text-blue-300 bg-blue-500/10",
  },
  {
    step: "2",
    file: "2_spec.md",
    stage: "Scope",
    title: "Architecture & Non-Goals",
    desc: "The Spec Gate: Detailed document structure, target tone, evidence requirements, and explicit non-goals locked with human approval.",
    badge: "border-purple-500/40 text-purple-300 bg-purple-500/10",
  },
  {
    step: "3",
    file: "3_draft.md",
    stage: "Build",
    title: "First-Pass Synthesis & Draft",
    desc: "AI agents generate high-speed comprehensive drafts with atomic citations; human experts supply domain grounding and strategic nuance.",
    badge: "border-indigo-500/40 text-indigo-300 bg-indigo-500/10",
  },
  {
    step: "4",
    file: "4_review.md",
    stage: "Test",
    title: "Red-Team & Human Sign-off",
    desc: "Two-layer review: Automated fact/spec grounding check + Human Expert In The Loop (HEITL) judgment on ethics and political sensitivity.",
    badge: "border-rose-500/40 text-rose-300 bg-rose-500/10",
  },
  {
    step: "5",
    file: "5_final.md",
    stage: "Deploy",
    title: "Committed Deliverable",
    desc: "Polished, authoritative deliverable committed for institutional deployment, client delivery, or venture spin-off.",
    badge: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
  },
  {
    step: "6",
    file: "6_feedback.md",
    stage: "Iterate",
    title: "Field Impact & Next Loop",
    desc: "Real-world reception, comments, field outcomes, and the follow-up intent prompt that triggers the next project loop.",
    badge: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
  },
];

// ─── Sample Projects by T.R.A.C.K. Pillar ──────────────────────────────────
const sampleProjects = [
  // T — Teaching & Learning
  { pillar: "T", pillarLabel: "Teaching & Learning", title: "Dynamic Living Case Generator", problem: "Broadcast lecturing is obsolete when AI delivers instant personalized explanations", deliverable: "Generative simulation engine for real-time market crashes, engineering failures, and crises in the classroom", icon: GraduationCap },
  { pillar: "T", pillarLabel: "Teaching & Learning", title: "Conversational Socratic AI Tutor (SrujanaBuddy)", problem: "Students arrive to class unprepared; rote memorization degrades rapidly", deliverable: "AI tutor that guides students through Socratic dialogue before class, freeing class time for debates and synthesis", icon: GraduationCap },
  { pillar: "T", pillarLabel: "Teaching & Learning", title: "Open-Agent Assessment Protocol", problem: "Traditional closed-book exams no longer measure real-world competency", deliverable: "Portfolio-driven viva voce system with adversarial red-teaming of AI-generated solutions", icon: GraduationCap },
  { pillar: "T", pillarLabel: "Teaching & Learning", title: "Hallucination Audit Rubric for Students", problem: "Students accept AI outputs uncritically, reducing epistemic rigor", deliverable: "Standardized 5-point hallucination audit protocol embedded in every submission workflow", icon: GraduationCap },

  // R — Research, Innovation, Consulting & VC
  { pillar: "R", pillarLabel: "Research, Innovation & VC", title: "Multi-Agent Literature Synthesizer", problem: "Literature review takes weeks; faculty cannot keep pace with exponential research output", deliverable: "Agentic pipeline that surveys, rates, downloads, and synthesizes 50+ papers into a structured review matrix in hours", icon: FlaskConical },
  { pillar: "R", pillarLabel: "Research, Innovation & VC", title: "Academic Deep-Tech Venture Studio", problem: "Research discoveries stay as papers; commercialization paths are unclear and slow", deliverable: "Running AI-native startup spin-off with patent filings, MVP demo, and investor one-pager — all from within an academic lab", icon: FlaskConical },
  { pillar: "R", pillarLabel: "Research, Innovation & VC", title: "MSME Rapid Consulting Engine", problem: "Small businesses cannot afford consulting firms; faculty expertise stays siloed", deliverable: "Multi-agent consulting swarm producing an operational AI roadmap for a local MSME within 48 hours", icon: FlaskConical },
  { pillar: "R", pillarLabel: "Research, Innovation & VC", title: "Collaborative Open Science Cross-Domain Bridge", problem: "Disciplinary boundaries prevent high-impact interdisciplinary discoveries", deliverable: "Agent-orchestrated fusion of Genomics + Material Science datasets to generate 10 novel research hypotheses", icon: FlaskConical },

  // A — Advising & Academic Administration
  { pillar: "A", pillarLabel: "Advising & Administration", title: "Agentic Accreditation & Compliance Tracker", problem: "Accreditation reporting consumes 30% of faculty time per semester", deliverable: "Background AI agent that auto-generates NAAC/NBA reports, tracks KPIs, and flags compliance gaps weekly", icon: Heart },
  { pillar: "A", pillarLabel: "Advising & Administration", title: "Predictive Empathy Mentor Dashboard", problem: "Student burnout and disengagement go undetected until it is too late", deliverable: "Intelligent dashboard alerting faculty mentors when student behavioral signals indicate distress or disengagement", icon: Heart },
  { pillar: "A", pillarLabel: "Advising & Administration", title: "Student Ikigai & Purpose Discovery System", problem: "Students graduate without clarity on their intrinsic mission or life purpose", deliverable: "Interactive AI-guided Ikigai mapping journal that a faculty Guru can reference in mentorship sessions", icon: Heart },
  { pillar: "A", pillarLabel: "Advising & Administration", title: "Values & Character Portfolio Builder", problem: "Technical portfolios lack ethical reasoning and societal impact documentation", deliverable: "Structured reflection system helping students document ethical decisions, community actions, and growth milestones", icon: Heart },

  // C — Community Transformation
  { pillar: "C", pillarLabel: "Community Transformation", title: "Rural MSME AI Living Lab Clinic", problem: "AI benefits remain concentrated in tier-1 cities; rural communities are left behind", deliverable: "Deployed localized AI tools for water management, health screening, and local language education in 3 villages", icon: Globe },
  { pillar: "C", pillarLabel: "Community Transformation", title: "Grassroots K-12 Educator AI Enablement", problem: "School teachers lack access to AI pedagogy training, widening the digital divide", deliverable: "Hands-on workshop series reaching 200+ K-12 teachers in local districts with reusable AI classroom toolkits", icon: Globe },
  { pillar: "C", pillarLabel: "Community Transformation", title: "Municipal Governance AI Modernization", problem: "Local government workflows are manual, opaque, and slow", deliverable: "Open-source AI pipeline for land records management, complaint resolution, and public procurement transparency", icon: Globe },

  // K — Kaizen
  { pillar: "K", pillarLabel: "Kaizen — Personal / Institutional / Societal", title: "Personal Metacognitive AI Journal", problem: "Faculty and students lack structured daily reflection habits to track cognitive growth", deliverable: "AI-powered daily journal system with weekly insight summaries, prompt tuning suggestions, and skill gap detection", icon: RefreshCw },
  { pillar: "K", pillarLabel: "Kaizen — Personal / Institutional / Societal", title: "Agile Living Curriculum Sync Engine", problem: "Curricula are revised every 4 years; AI makes knowledge obsolete in months", deliverable: "Agent-monitored curriculum update system triggering quarterly reviews based on industry signals and student outcomes", icon: RefreshCw },
  { pillar: "K", pillarLabel: "Kaizen — Personal / Institutional / Societal", title: "Societal AI Impact Pulse Monitor", problem: "No feedback loops exist to measure social and labor market impacts of deployed AI systems", deliverable: "Public dashboard aggregating employment, equity, and innovation metrics to inform national AI policy revisions", icon: RefreshCw },
];

const pillarOptions = [
  { value: "ALL", label: "All Pillars" },
  { value: "T", label: "T — Teaching & Learning" },
  { value: "R", label: "R — Research, Innovation & VC" },
  { value: "A", label: "A — Advising & Administration" },
  { value: "C", label: "C — Community Transformation" },
  { value: "K", label: "K — Kaizen" },
];

const pillarColors: Record<string, string> = {
  T: "border-blue-500/40 text-blue-300 bg-blue-500/10",
  R: "border-purple-500/40 text-purple-300 bg-purple-500/10",
  A: "border-rose-500/40 text-rose-300 bg-rose-500/10",
  C: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
  K: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
};

// ─── Anthropic AI-Native Product Development Loop ─────────────────────────
const anthropicLoop = [
  { step: "1", phase: "Discovery & Context", desc: "Deeply understand user needs, existing systems, domain constraints, and the problem space before touching any code or prompt.", color: "text-blue-300 bg-blue-500/10 border-blue-500/30" },
  { step: "2", phase: "Prompt Architecture & Spec", desc: "Design the prompt system, agent topology, tool interfaces, and evaluation criteria. Lock the spec before building — the AI-native equivalent of a PRD.", color: "text-purple-300 bg-purple-500/10 border-purple-500/30" },
  { step: "3", phase: "Agentic Generation & Scaffolding", desc: "AI agents generate first-pass code, content, or architecture. Humans steer, inject domain knowledge, and catch early hallucinations or misalignments.", color: "text-indigo-300 bg-indigo-500/10 border-indigo-500/30" },
  { step: "4", phase: "Continuous Eval & Red-Teaming", desc: "Automated test suites, adversarial red-team attacks, and structured human review catch regressions, jailbreaks, and safety issues before deployment.", color: "text-rose-300 bg-rose-500/10 border-rose-500/30" },
  { step: "5", phase: "Production Deployment & Observability", desc: "Staged rollouts with canary deployments, real-time latency/cost/quality dashboards, and on-call human expert review for anomalies.", color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30" },
  { step: "6", phase: "Fast Feedback Loops & Iteration", desc: "User telemetry, field performance data, and prompt regression testing feed directly into the next discovery cycle — compressing the iteration clock.", color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30" },
];

// ─── Mapping between the two loops ─────────────────────────────────────────
const loopMapping = [
  { anthropic: "Discovery & Context", bossofai: "0_context.md + 1_intent.md" },
  { anthropic: "Prompt Architecture & Spec", bossofai: "2_spec.md" },
  { anthropic: "Agentic Generation & Scaffolding", bossofai: "3_draft.md" },
  { anthropic: "Continuous Eval & Red-Teaming", bossofai: "4_review.md" },
  { anthropic: "Production Deployment & Observability", bossofai: "5_final.md" },
  { anthropic: "Fast Feedback Loops & Iteration", bossofai: "6_feedback.md" },
];

export const ProjectsSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return sampleProjects.filter((p) => {
      const matchesPillar = selectedPillar === "ALL" || p.pillar === selectedPillar;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q) ||
        p.deliverable.toLowerCase().includes(q) ||
        p.pillarLabel.toLowerCase().includes(q);
      return matchesPillar && matchesSearch;
    });
  }, [selectedPillar, searchQuery]);

  const selectedLabel = pillarOptions.find((o) => o.value === selectedPillar)?.label ?? "All Pillars";

  return (
    <section id="projects" className="py-24 bg-slate-900/60 border-t border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">

        {/* ── Section Header ─────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-4 backdrop-blur-md">
            <FolderGit2 className="h-3.5 w-3.5 text-cyan-400" />
            <span>AI-Native Project Execution Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            AI-Native Project Loop{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              for Creating Artifacts
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every project in Boss of AI runs on committed, durable markdown files numbered sequentially —
            guaranteeing exact chronological and concept dependency order across terminals, IDEs, and Git repositories.
          </p>
        </div>

        {/* ── Artifact Pipeline Grid ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto mb-16">
          {artifacts.map((art) => (
            <Card
              key={art.file}
              className="border border-white/10 bg-slate-950/70 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <CardHeader className="space-y-2 pb-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${art.badge}`}>
                    Step {art.step} • {art.stage}
                  </span>
                  <FileCode2 className="h-4 w-4 text-slate-400" />
                </div>
                <CardTitle className="text-sm font-mono font-bold text-cyan-300">
                  {art.file}
                </CardTitle>
                <div className="text-xs font-bold text-white leading-snug">
                  {art.title}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {art.desc}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Quick Launch Card */}
          <div className="rounded-2xl border border-dashed border-cyan-500/40 bg-cyan-950/20 p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Terminal className="h-4 w-4" />
                <span>Quick Scaffold</span>
              </div>
              <h4 className="font-heading font-bold text-white text-sm mb-1">
                Launch Your Project
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Copy <code>projects/_template-project/</code> to your new project slug and start by drafting <code>0_context.md</code> with your AI agent.
              </p>
            </div>
            <a
              href="https://github.com/sanchitnis/bossofai/tree/main/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-cyan-500/20"
            >
              <span>Explore Projects Repo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ── T.R.A.C.K. Sample Projects Explorer ──────────────────── */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              T.R.A.C.K. Sample Projects Directory
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Explore Projects by Pillar
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              {filteredProjects.length} sample projects across the T.R.A.C.K. transformation engine — filter by pillar or search by keyword.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 max-w-3xl mx-auto">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by keyword..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
              />
            </div>
            {/* Pillar Dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-sm text-white hover:border-indigo-500/40 transition-colors min-w-[220px]"
              >
                <Layers className="h-4 w-4 text-indigo-400 shrink-0" />
                <span className="flex-1 text-left truncate">{selectedLabel}</span>
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 z-30 w-full rounded-xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden">
                  {pillarOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setSelectedPillar(opt.value); setDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-white/5 ${
                        selectedPillar === opt.value ? "text-indigo-300 bg-indigo-500/10" : "text-slate-300"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Project Cards Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 text-slate-500 text-sm">No projects match your search. Try a different keyword or pillar.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProjects.map((project, idx) => {
                const Icon = project.icon;
                const color = pillarColors[project.pillar];
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-slate-950/60 p-5 space-y-3 hover:border-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className={`p-2 rounded-lg border ${color} w-fit shrink-0`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${color}`}>
                        {project.pillar}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-white text-sm leading-snug mb-1">{project.title}</h5>
                      <p className="text-[11px] text-slate-500 mb-2">{project.pillarLabel}</p>
                    </div>
                    <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3 space-y-2">
                      <div>
                        <div className="text-[10px] font-bold uppercase text-rose-400 mb-0.5">Problem</div>
                        <p className="text-xs text-slate-300 leading-snug">{project.problem}</p>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase text-emerald-400 mb-0.5">Deliverable</div>
                        <p className="text-xs text-slate-300 leading-snug">{project.deliverable}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Side-by-Side: AI-Native Loops Comparison ─────────────── */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300 mb-3">
              <Bot className="h-3.5 w-3.5 text-purple-400" />
              AI-Native Development Loops
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Two Loops, One Mission
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              Boss of AI's AI-Native Project Loop is inspired by and extends{" "}
              <strong className="text-purple-300">Anthropic's AI-Native SDLC Playbook</strong> —
              generalising it from software products to the full knowledge artifact lifecycle:
              policy briefs, curricula, research papers, venture whitepapers, and more.
            </p>
          </div>

          {/* Anthropic Reference Callout */}
          <div className="max-w-4xl mx-auto rounded-xl border border-purple-500/20 bg-purple-950/20 px-5 py-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-300 shrink-0">
              <ExternalLink className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-purple-300 mb-0.5">Reference</div>
              <p className="text-xs text-slate-300">
                <strong>Anthropic's AI-Native SDLC Playbook</strong> — a framework for building production-grade AI software products using agentic generation, continuous evaluation, and fast feedback loops.{" "}
                <a
                  href="https://www.anthropic.com/engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  anthropic.com/engineering ↗
                </a>
              </p>
            </div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider shrink-0">
              Boss of AI extends this →
            </div>
          </div>

          {/* Side-by-side grid: desktop = 2 cols, mobile = stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* Left: Anthropic AI-Native Product Development Loop */}
            <div className="rounded-2xl border border-purple-500/30 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-5">
              <div className="flex items-start gap-3 border-b border-white/10 pb-5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 shrink-0">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-0.5">Anthropic Reference</div>
                  <h4 className="font-heading font-bold text-white text-base leading-snug">
                    AI-Native Product Development Loop
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">Full software product lifecycle — from discovery to observability</p>
                </div>
              </div>
              <div className="space-y-3">
                {anthropicLoop.map((s) => (
                  <div key={s.step} className={`rounded-xl border p-3.5 space-y-1 ${s.color}`}>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs">{s.step}.</span>
                      <span className="font-heading font-bold text-white text-xs">{s.phase}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug pl-5">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-purple-950/40 border border-purple-500/20 p-3 text-xs text-slate-400">
                <strong className="text-purple-300">Scope:</strong> Software & AI products — APIs, agents, model pipelines, and web apps.
              </div>
            </div>

            {/* Right: Boss of AI AI-Native Project Loop for Creating Artifacts */}
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-5">
              <div className="flex items-start gap-3 border-b border-white/10 pb-5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-300 shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-0.5">Boss of AI Enhancement</div>
                  <h4 className="font-heading font-bold text-white text-base leading-snug">
                    AI-Native Project Loop for Creating Artifacts
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">Complete knowledge artifact lifecycle — generalised beyond software</p>
                </div>
              </div>
              <div className="space-y-3">
                {artifacts.map((art) => (
                  <div key={art.file} className={`rounded-xl border p-3.5 space-y-1 ${art.badge}`}>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs">{art.step}.</span>
                      <span className="font-mono text-[11px] font-bold">{art.file}</span>
                      <span className="ml-auto text-[10px] font-bold uppercase">{art.stage}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug pl-5">{art.title} — {art.desc.split(';')[0]}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-cyan-950/40 border border-cyan-500/20 p-3 text-xs text-slate-400">
                <strong className="text-cyan-300">Scope:</strong> Knowledge artifacts — policy briefs, curricula, research papers, venture whitepapers, concept notes, and institutional roadmaps.
              </div>
            </div>
          </div>

          {/* Mapping Table */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-md overflow-x-auto">
            <h5 className="font-heading font-bold text-white text-sm mb-4 flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-indigo-400" />
              Loop Correspondence Map
            </h5>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left pb-2 text-slate-400 font-semibold pr-4">Anthropic AI-Native SDLC Phase</th>
                  <th className="text-left pb-2 text-slate-400 font-semibold">Boss of AI Artifact Loop Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {loopMapping.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-2 pr-4 text-purple-300 font-medium">{row.anthropic}</td>
                    <td className="py-2 text-cyan-300 font-mono">{row.bossofai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex items-start gap-2 text-xs text-slate-400">
              <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Key extension:</strong> Boss of AI adds <code className="text-cyan-300">0_context.md</code> as a standing foundation stage (missing from Anthropic's code-centric SDLC) — critical for knowledge work where domain context is not embedded in a codebase.
              </span>
            </div>
          </div>

          {/* Playbook Link */}
          <div className="mt-6 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-slate-950/60 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-heading font-bold text-white text-sm">
                  AI-Native Project Playbook
                </h5>
                <p className="text-xs text-slate-300">
                  Full division-of-labor guide between AI agents (velocity, synthesis) and human experts (moral compass, domain authority, final sign-off).
                </p>
              </div>
            </div>
            <a
              href="https://github.com/sanchitnis/bossofai/blob/main/ai-native-project-playbook.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-colors shrink-0"
            >
              Read Full Playbook
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};