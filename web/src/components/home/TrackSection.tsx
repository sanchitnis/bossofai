import React, { useState } from "react";
import {
  GraduationCap,
  FlaskConical,
  Heart,
  Globe,
  RefreshCw,
  Sparkles,
  Bot,
  Shield,
  Layers,
  Zap,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TrackSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "t",
      letter: "T",
      title: "Teaching & Learning",
      subtitle: "Elevating from Content Delivery to Cognitive Enablement & Co-Exploration",
      icon: GraduationCap,
      color: "from-blue-500/20 via-indigo-500/10 to-transparent border-blue-500/30 text-blue-400",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      paradigmShift:
        "When AI delivers instant, personalized explanations for any concept, broadcast lecturing is obsolete. Teaching evolves into inquiry-based co-learning, Socratic challenge, problem framing, and evaluation of synthetic outputs.",
      innovations: [
        {
          title: "Dynamic Living Case Studies",
          desc: "Using generative engines to simulate evolving real-world market crashes, engineering failures, or geopolitical crises in real time within the classroom.",
        },
        {
          title: "AI-Partnered Flipped Classrooms",
          desc: "Students learn theoretical fundamentals via conversational AI tutors (e.g., SrujanaBuddy), coming to class prepared for human debates, design sprints, and synthesis.",
        },
        {
          title: "Assessment Beyond Memorization",
          desc: "100% open-book, open-agent, portfolio-driven viva voce and adversarial verification (red-teaming and improving AI-generated architectural plans).",
        },
      ],
      collaborativeProject: {
        name: "AI-Native Flipped Pedagogy Pilot",
        stakeholders: "Faculty + Students + Instructional Designers",
        output: "Interactive simulation labs, conversational AI tutors, dynamic rubrics",
      },
    },
    {
      id: "r",
      letter: "R",
      title: "Research, Innovation, Consulting & VC",
      subtitle: "Collapsing Distance from Theoretical Inquiry to Scalable Ventures",
      icon: FlaskConical,
      color: "from-purple-500/20 via-pink-500/10 to-transparent border-purple-500/30 text-purple-400",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      paradigmShift:
        "Research cycles accelerate 100x through multi-agent literature syntheses, automated hypothesis generation, code generation, and synthetic simulation. Consulting manifests as deployable prototypes and venture spin-offs within days rather than slide decks.",
      innovations: [
        {
          title: "Venture Studios within Academic Labs",
          desc: "Academic departments operate as AI-native venture creation incubators where research directly spins out into applied startups (Deep Tech, EdTech, AgriTech, HealthTech).",
        },
        {
          title: "Translational Consulting with Multi-Agent Swarms",
          desc: "Faculty and student teams offer high-velocity consulting to MSMEs and local industries by orchestrating AI pipelines to solve complex operational challenges.",
        },
        {
          title: "Collaborative Open Science",
          desc: "Utilizing abundant intelligence to bridge cross-disciplinary boundaries (e.g., combining genomics with material science through generative foundational models).",
        },
      ],
      collaborativeProject: {
        name: "Academic Deep-Tech Venture Incubator",
        stakeholders: "Faculty + Student Founders + Industry Mentors",
        output: "Functional AI MVPs, venture spin-offs, patent/research pre-prints",
      },
    },
    {
      id: "a",
      letter: "A",
      title: "Advising & Academic Administration",
      subtitle: "The Sacred Mantle of the Guru & Frictionless Agentic Administration",
      icon: Heart,
      color: "from-rose-500/20 via-amber-500/10 to-transparent border-rose-500/30 text-rose-400",
      badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/30",
      paradigmShift:
        "Teaching (T) imparts structured capability; Research (R) creates discoveries. Advising (A) embodies the 'Inspiring Guru'—awakening intrinsic purpose (Ikigai), instilling ethics and resilience, and providing holistic life mentorship. Administrative burdens (accreditation, grading, scheduling) are automated by AI agents to liberate educators for this sacred role.",
      innovations: [
        {
          title: "The AI-Liberated 'Guru-Shishya' Dynamic",
          desc: "With routine administration handled by background AI agents, faculty-student relationships return to meaningful dialogue, wisdom sharing, and personalized life mentoring.",
        },
        {
          title: "Predictive Empathy & Friction Sensing",
          desc: "Intelligent agents detect unspoken student distress, burnout, or disengagement patterns and alert the faculty mentor to initiate compassionate, timely human conversations.",
        },
        {
          title: "Values & Character Portfolios",
          desc: "Mentors guide students in building reflection journals on ethics, societal responsibility, and human agency alongside their technical portfolios.",
        },
      ],
      collaborativeProject: {
        name: "Agentic Academic Workflow Automation",
        stakeholders: "Faculty + Admin Staff + Student Engineers",
        output: "Automated accreditation trackers, predictive mentorship dashboards",
      },
    },
    {
      id: "c",
      letter: "C",
      title: "Community Transformation",
      subtitle: "Transforming the University from an Ivory Tower into an Engine of Societal Uplift",
      icon: Globe,
      color: "from-cyan-500/20 via-teal-500/10 to-transparent border-cyan-500/30 text-cyan-400",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      paradigmShift:
        "Higher education institutions act as the regional anchor and catalyst, ensuring that the benefits of abundant intelligence are democratized across local communities, schools, and vocational trades rather than concentrated solely in tech monopolies.",
      innovations: [
        {
          title: "Regional AI Living Labs",
          desc: "Deploying faculty-student problem-solving clinics in rural and peri-urban areas for water management, precision agriculture, local language education, and public healthcare.",
        },
        {
          title: "Upskilling Grassroots Educators",
          desc: "Faculty leading hands-on training for K-12 and vocational trade teachers in local districts to prevent digital and cognitive divides.",
        },
        {
          title: "Empowering Local Governance & MSMEs",
          desc: "Collaborating with municipal bodies and small enterprises to modernize their workflows using accessible open-source intelligence platforms.",
        },
      ],
      collaborativeProject: {
        name: "Rural / MSME Grassroots AI Clinic",
        stakeholders: "Faculty + Local School Teachers + MSME Owners",
        output: "Deployed localized AI tools, teacher enablement workshops",
      },
    },
    {
      id: "k",
      letter: "K",
      title: "Kaizen Across Three Levels",
      subtitle: "Continuous, Compounding Metacognitive & Structural Evolution",
      icon: RefreshCw,
      color: "from-emerald-500/20 via-green-500/10 to-transparent border-emerald-500/30 text-emerald-400",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      paradigmShift:
        "In an exponential era, static knowledge degrades rapidly. Kaizen (continuous improvement) is the ultimate meta-skill—a cultural commitment to perpetual adaptation, unlearning, and compounding refinement across three nested scales: Personal, Institutional, and Societal.",
      innovations: [
        {
          title: "Personal Level (Educator / Learner)",
          desc: "Developing daily metacognitive reflection and prompt iteration routines; viewing AI tools as expanding personal cognitive capability.",
        },
        {
          title: "Institutional Level (The HEI / School)",
          desc: "Implementing quarterly agile curriculum audits and continuous policy updates rather than 4-year static revisions; cultivating rapid sandbox prototyping.",
        },
        {
          title: "Societal Level (The Ecosystem)",
          desc: "Active societal feedback loops monitoring the ethical, socioeconomic, and employment impacts of deployed intelligence systems to refine national strategies.",
        },
      ],
      collaborativeProject: {
        name: "Institutional Agility & Personal Growth Cohorts",
        stakeholders: "Academic Leadership + Peer Faculty Circles",
        output: "Continuous curriculum version control, personal AI mastery roadmaps",
      },
    },
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section id="track" className="py-24 bg-slate-950/80 border-t border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>The Educator & Faculty Framework</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            The <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">T.R.A.C.K.</span> Transformation Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Faculty are no longer mere distributors of static information or manual administrators. In the age of Abundant Intelligence, they become <strong className="text-white">strategic orchestrators, venture catalysts, empathetic mentors (Gurus), and drivers of Kaizen</strong>.
          </p>
        </div>

        {/* Pillar Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-5xl mx-auto mb-10">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(idx)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all duration-300 ${
                  isSelected
                    ? "bg-slate-900 border-cyan-400/60 shadow-lg shadow-cyan-500/10 -translate-y-1"
                    : "bg-slate-950/60 border-white/10 hover:border-white/20 hover:bg-slate-900/50 text-slate-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading font-black text-lg ${
                    isSelected ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {p.letter}
                </div>
                <span className={`text-xs font-bold leading-tight ${isSelected ? "text-white" : "text-slate-400"}`}>
                  {p.title.split(",")[0].split("&")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Card */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-slate-900/70 p-6 sm:p-10 backdrop-blur-xl shadow-2xl mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl border ${current.color} bg-white/5`}>
                <CurrentIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-2xl text-white">
                    {current.letter} — {current.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium">{current.subtitle}</p>
              </div>
            </div>
            <Badge className={`text-xs px-3 py-1 font-mono uppercase ${current.badgeColor}`}>
              Pillar {current.letter}
            </Badge>
          </div>

          {/* Paradigm Shift Quote */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 mb-8">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1 flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              Paradigm Shift Under Abundant Intelligence
            </div>
            <p className="text-sm text-slate-200 leading-relaxed italic">{current.paradigmShift}</p>
          </div>

          {/* 3 Strategic Innovations */}
          <div className="mb-8">
            <h4 className="font-heading font-bold text-white text-base mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              Strategic Innovations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.innovations.map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-slate-950/60 p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <h5 className="font-heading font-bold text-white text-xs leading-snug">{item.title}</h5>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operationalizing Collaborative Project Callout */}
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] uppercase font-bold text-cyan-400 flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" />
                Collaborative Project Archetype
              </div>
              <h5 className="font-heading font-bold text-white text-sm">
                {current.collaborativeProject.name}
              </h5>
              <p className="text-xs text-slate-300">
                <strong className="text-slate-200">Stakeholders:</strong> {current.collaborativeProject.stakeholders}
              </p>
              <p className="text-xs text-slate-400">
                <strong className="text-slate-200">Deliverable:</strong> {current.collaborativeProject.output}
              </p>
            </div>
            <a
              href="https://github.com/sanchitnis/bossofai/blob/main/wiki/track_framework.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold text-cyan-300 transition-colors shrink-0"
            >
              <span>Read Full Wiki</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* The Interconnected Flywheel & 3-Tier Kaizen Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Flywheel Card */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-indigo-400" />
              <h4 className="font-heading font-bold text-white text-base">
                The Synergistic T.R.A.C.K. Flywheel
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every element feeds the next in a self-reinforcing flywheel:
            </p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded bg-white/5 border border-white/5 text-slate-200">
                <span className="text-blue-400 font-bold">1. Teaching (T):</span> Sparks inquiry & student project teams
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5 text-slate-200">
                <span className="text-purple-400 font-bold">2. Research & VC (R):</span> Turns project prototypes into IP & startups
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5 text-slate-200">
                <span className="text-cyan-400 font-bold">3. Community (C):</span> Deploys solutions to local industry & MSMEs
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5 text-slate-200">
                <span className="text-rose-400 font-bold">4. Advising & Admin (A):</span> AI removes admin load; faculty mentor Guru-style
              </div>
              <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <span className="font-bold">5. Kaizen (K):</span> Overarching metacognitive loop continuously tuning all 4 pillars
              </div>
            </div>
          </div>

          {/* 3-Tier Kaizen Card */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-emerald-400" />
              <h4 className="font-heading font-bold text-white text-base">
                Three Nested Scales of Kaizen
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Continuous, compounding refinement across individual, organizational, and civilizational scales:
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-950/20 space-y-1">
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                  Tier 1: Personal Level Kaizen
                </div>
                <p className="text-xs text-slate-300">
                  Daily metacognitive reflection, prompt tuning, continuous reskilling, and cognitive agility.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-1">
                <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wide">
                  Tier 2: Institutional Level Kaizen
                </div>
                <p className="text-xs text-slate-300">
                  Quarterly living curriculum updates, agile governance, rapid experimentation, and sandbox sandboxes.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-cyan-500/20 bg-cyan-950/20 space-y-1">
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wide">
                  Tier 3: Societal Level Kaizen
                </div>
                <p className="text-xs text-slate-300">
                  Democratic AI literacy, ethical governance, feedback loops monitoring labor market evolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
