import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Dumbbell, Sparkles, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md pt-16 pb-12 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white font-bold text-sm">
                B
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                Boss of <span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 font-medium">
              Empowering learners, faculty, and educational institutions to master human-centric skills (4 Cs) and lead as the authoritative{" "}
              <strong className="text-cyan-400">Human Expert Orchestrator of AI Agents</strong>.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              An AI-augmented Meta-Venture Studio and cognitive <strong className="text-cyan-300">Brain GYM</strong> preparing Educational Institutions, the Academic Community, and Society for Abundant Intelligence. Hosted at <a href="https://bossofai.org" className="text-indigo-400 hover:underline">bossofai.org</a>.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/sanchitnis/bossofai"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjaychitnis/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@bossofai.org"
                className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Email Queries: info@bossofai.org"
                title="Queries: info@bossofai.org"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Srujana & Brain GYM */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-heading">
              Studio Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#brain-gym" className="hover:text-cyan-400 transition-colors">
                  Brain GYM & 4 C Skills
                </a>
              </li>
              <li>
                <a href="#pathway" className="hover:text-cyan-400 transition-colors">
                  Srujana 4-Stage Pathway
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">
                  Solutions & IP Showcase
                </a>
              </li>
              <li>
                <a href="#leaderboard" className="hover:text-cyan-400 transition-colors">
                  Contribution Leaderboards
                </a>
              </li>
              <li>
                <a href="#benchmarks" className="hover:text-cyan-400 transition-colors">
                  12 Global Innovation Models
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Governance & Outreach */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-heading">
              Governance & Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#governance" className="hover:text-cyan-400 transition-colors">
                  Institutional Hubs & SPOCs
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-cyan-400 transition-colors">
                  5-Tier Mentorship Network
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Audience Inquiries & Registration
                </a>
              </li>
              <li>
                <a href="mailto:info@bossofai.org" className="hover:text-cyan-400 transition-colors">
                  Queries: info@bossofai.org
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sanchitnis/bossofai/blob/main/strategy/concept-note.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Executive Concept Note (GitHub)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sanchitnis/bossofai/blob/main/AGENTS.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Agentic Graph Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Boss of AI Community (bossofai.org) — Preparing Society for Abundant Intelligence.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Orchestrated by Dr. Sanjay Chitnis & Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
