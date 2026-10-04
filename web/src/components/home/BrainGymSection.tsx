import React, { useState } from "react";
import {
  Dumbbell,
  Brain,
  ShieldAlert,
  Bot,
  Sparkles,
  CheckCircle2,
  Cpu,
  Flame,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const BrainGymSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"critical" | "communication" | "collaboration" | "creativity">("critical");

  const gymPillars = [
    {
      id: "critical",
      title: "1. Critical Thinking",
      icon: Brain,
      tagline: "Epistemic Rigor & Hallucination Auditing",
      desc: "Deconstruct complex problem spaces into root causes. Cross-examine AI-generated solutions, audit edge cases, and rigorously prevent confirmation bias.",
      workout: "Run a 'Monkey-First Bottleneck Audit' on your active probe before building easy pedestals.",
      badge: "Cognitive Muscle",
      accent: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300",
    },
    {
      id: "communication",
      title: "2. Communication",
      icon: Sparkles,
      tagline: "High-Context Synthesis & Storytelling",
      desc: "Translate deep technical R&D into compelling value propositions for Deans, CTOs, and investors. Deliver crisp executive briefings across WhatsApp, Email, and Keynotes.",
      workout: "Draft an executive one-pager that explains a complex AI probe to a non-technical domain stakeholder.",
      badge: "Influence Muscle",
      accent: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300",
    },
    {
      id: "collaboration",
      title: "3. Collaboration",
      icon: Award,
      tagline: "Human-AI Co-opetition & Team Dynamics",
      desc: "Work across interdisciplinary student-faculty-mentor pods. Pool pre-competitive compute and data while competing fiercely in venture execution.",
      workout: "Orchestrate a multi-agent sprint with 2 peers, assigning discrete subagent personas to each task.",
      badge: "Teamwork Muscle",
      accent: "from-cyan-500/20 to-teal-500/20 border-cyan-500/30 text-cyan-300",
    },
    {
      id: "creativity",
      title: "4. Creativity",
      icon: Flame,
      tagline: "Anti-Disciplinary Innovation & Fusion",
      desc: "Connect unrelated domains (e.g. Ayurveda + Edge AI, Agritech + Beckn Protocol) to invent novel solution architectures that generic models cannot conceive.",
      workout: "Apply Ramesh Raskar's SPOT-PROBE framework to synthesize two disparate domains into a patentable prototype.",
      badge: "Innovation Muscle",
      accent: "from-amber-500/20 to-rose-500/20 border-amber-500/30 text-amber-300",
    },
  ];

  return (
    <section id="brain-gym" className="py-20 bg-slate-950/60 border-t border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3">
            <Dumbbell className="h-3.5 w-3.5 text-cyan-400" />
            <span>The Cognitive Brain GYM</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Boss of <span className="text-cyan-400">AI</span>?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            In the AGI era, passive AI consumption causes cognitive atrophy. Boss of AI is a high-intensity{" "}
            <strong className="text-white">Brain GYM</strong> designed to build human-centric cognitive muscle and train you to be the authoritative{" "}
            <strong className="text-cyan-300">Human Expert Orchestrator of AI Agents</strong>.
          </p>
        </div>

        {/* Highlight Feature Card: Human Expert Orchestrator of AI Agents */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/90 via-indigo-950/40 to-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <Badge variant="gym" className="text-xs">
                ⭐ The Core Superpower
              </Badge>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Human Expert Orchestrator of AI Agents
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You are not a passive prompt typist; you are the <strong>architect and orchestrator of autonomous AI agent guilds</strong>. You assign subagent roles (strategists, coders, red-team auditors), formulate verification criteria, catch hallucinations, and take 100% human accountability for the mission outcome.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Direct frontier reasoning models (Gemini, Claude, GPT-4o) with precision graph prompts.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Enforce double-loop learning and rigorous Solution Maturity Index (SMI) self-evaluations.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Bridge raw LLM output into deployable enterprise code and patentable intellectual property.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 rounded-xl border border-white/10 p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-white/10 pb-2">
                <span className="flex items-center gap-1.5 text-white">
                  <Cpu className="h-4 w-4 text-indigo-400" />
                  Agentic Graph Loop
                </span>
                <span className="text-cyan-400 font-mono">Status: ACTIVE</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2 rounded bg-white/5 text-slate-300">
                  <span className="text-cyan-400 font-bold">1. Human Orchestrator:</span> Deconstructs prompt & sets SMI goals
                </div>
                <div className="p-2 rounded bg-white/5 text-slate-300">
                  <span className="text-purple-400 font-bold">2. Agent Fleet:</span> Rapid SPOT-PROBE exploration
                </div>
                <div className="p-2 rounded bg-white/5 text-slate-300">
                  <span className="text-indigo-400 font-bold">3. HEITL Audit:</span> Verifies benchmarks & eliminates hallucinations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 C Human Skills Workout Grid */}
        <h3 className="text-center font-heading text-xl sm:text-2xl font-bold text-white mb-8">
          The 4 C Human-Centric Cognitive Workouts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {gymPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.id}
                className="border border-white/10 bg-slate-900/50 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
              >
                <CardHeader className="space-y-2 pb-3">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="gym" className="text-[10px]">
                      {pillar.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white font-bold">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-semibold text-cyan-400">
                    {pillar.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                  <div className="rounded-lg bg-white/5 p-3 border border-white/5 text-[11px] text-slate-400">
                    <strong className="text-slate-200 block mb-1">🏋️‍♂️ Daily GYM Workout:</strong>
                    {pillar.workout}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
