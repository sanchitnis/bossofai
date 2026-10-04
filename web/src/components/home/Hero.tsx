import React from "react";
import { Link } from "react-router-dom";
import {
  Dumbbell,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Users,
  Target,
  Zap,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Decorative Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md mb-6 animate-fade-in shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>Readiness for Abundant Intelligence • Dual-Engine Architecture</span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            BOSS OF{" "}
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-4 underline-offset-8">
            AI
          </span>
        </h1>

        {/* Core Strategic Mission Statement */}
        <div className="text-lg sm:text-2xl font-heading font-semibold text-white max-w-4xl mx-auto mb-4 tracking-tight">
          Preparing Educational Institutions, the Academic Community, and Thereby Society for Abundant Intelligence
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Empowering educational leaders, faculty, and learners through the{" "}
          <strong className="text-cyan-300">T.R.A.C.K. Framework</strong>, the{" "}
          <strong className="text-purple-300">Srujana Pathway</strong>, and an{" "}
          <strong className="text-white">AI-Native Project Engine</strong> with{" "}
          <strong className="text-cyan-300">you as the Human Expert Orchestrator of AI Agents</strong>.
        </p>

        {/* Cascading Theory Teaser → links to /cascading-theory subpage */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-indigo-500/20 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-xl shadow-xl mb-10 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-300 shrink-0 mt-0.5">
                <Layers className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-1">
                  Strategic Foundation
                </div>
                <div className="text-sm font-bold text-white mb-1">The Cascading Theory of Transformation</div>
                <p className="text-xs text-slate-300 leading-snug max-w-lg">
                  Educational Institutions <span className="text-indigo-300">→</span> Academic Community <span className="text-purple-300">→</span> Society & Industry — a structured cascade that systematically prepares society for Abundant Intelligence.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/cascading-theory"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-xs font-semibold text-indigo-300 transition-colors"
              >
                Explore
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://github.com/sanchitnis/bossofai/blob/main/wiki/cascading_theory_of_transformation.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Wiki
              </a>
            </div>
          </div>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#track">
            <Button size="lg" variant="gym" className="gap-2 text-sm shadow-xl">
              <span>Explore T.R.A.C.K. Framework</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>

          <a href="#projects">
            <Button size="lg" variant="outline" className="gap-2 text-sm text-slate-200">
              <BookOpen className="h-4 w-4 text-cyan-400" />
              <span>AI-Native Projects</span>
            </Button>
          </a>

          <a
            href="https://github.com/sanchitnis/bossofai/blob/main/strategy/concept-note.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="text-sm bg-slate-800/80 hover:bg-slate-700">
              Executive Concept Note
            </Button>
          </a>
        </div>

        {/* Founder's Vision Callout */}
        <div className="max-w-3xl mx-auto rounded-xl border border-white/10 bg-white/[0.02] p-6 text-left backdrop-blur-md">
          <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-2">
            The "Why" Behind Boss of AI
          </div>
          <p className="text-sm italic text-slate-300 leading-relaxed">
            “My journey with AI started during my M.Tech at IIT Kanpur and PhD at IISc, eventually leading me through multinational GCCs like Motorola and LG. I saw how the world's best tech companies operate. I returned to academics because I realized our future generation has immense potential but lacks the right runway. Boss of AI is my way of being an enabler—a catalyst to help students realize their highest aspirations in a rapidly changing world.”
          </p>
          <div className="mt-3 text-right text-xs font-medium text-slate-400">
            — <strong className="text-white">Dr. Sanjay Chitnis</strong>, Founder & Lead Studio Orchestrator{" "}
            <a
              href="https://www.linkedin.com/in/sanjaychitnis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline ml-1"
            >
              (LinkedIn ↗)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
