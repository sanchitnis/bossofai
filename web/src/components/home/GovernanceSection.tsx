import React from "react";
import { Globe, Users, Building, Briefcase, Award, Shield, Cpu, Compass } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const GovernanceSection: React.FC = () => {
  const governanceTiers = [
    {
      title: "1. Global Advisory Board",
      icon: Globe,
      badge: "Global Oversight",
      desc: "Eminent global leaders, senior researchers, and venture partners providing strategic alignment, ethical governance, and international connectivity.",
      color: "text-cyan-400 bg-cyan-500/10",
    },
    {
      title: "2. Core Team (Project 0)",
      icon: Cpu,
      badge: "Studio Orchestration",
      desc: "Led by Founder & Lead Studio Orchestrator Dr. Sanjay Chitnis (sanjay.chitnis@gmail.com), supported by technical architects, ecosystem directors & AI subagents.",
      color: "text-indigo-400 bg-indigo-500/10",
    },
    {
      title: "3. Educational Hub Nodes",
      icon: Building,
      badge: "University Node",
      desc: "1 Executive Sponsor (VC / Dean / Director) + 4 SPOCs (2 Faculty for Curriculum & Labs + 2 Student Leads for Clubs & Probes).",
      color: "text-purple-400 bg-purple-500/10",
    },
    {
      title: "4. Corporate Governance",
      icon: Briefcase,
      badge: "Enterprise R&D",
      desc: "1 Executive Sponsor (CTO / VP R&D) + 2 SPOCs (1 Technical Operational SPOC for R&D pipelines + 1 HR / Talent SPOC for hiring).",
      color: "text-emerald-400 bg-emerald-500/10",
    },
  ];

  const mentorshipTiers = [
    {
      tier: "Tier A: Peer Mentors",
      desc: "Advanced Stage 3 & 4 student leads guiding Stage 1/2 micro-challenges & student club hackathons.",
      border: "border-l-cyan-400",
    },
    {
      tier: "Tier B: Faculty Mentors",
      desc: "Campus professors guiding TRACK projects (Teaching, Research, Admin, Consulting, Kaizen).",
      border: "border-l-indigo-400",
    },
    {
      tier: "Tier C: Industry / CTO Mentors",
      desc: "CTOs and senior tech leaders guiding TRL-based product architecture & corporate consulting.",
      border: "border-l-purple-400",
    },
    {
      tier: "Tier D: STEAM+ Domain Experts",
      desc: "Specialists across Science, DefenseTech, SpaceTech, Quantum, Optoelectronics, FinTech, Policy & IKS.",
      border: "border-l-pink-400",
    },
    {
      tier: "Tier E: Strategic Advisors",
      desc: "Global ecosystem leaders advising on venture incubation and stage-gate capital deployment.",
      border: "border-l-amber-400",
    },
    {
      tier: "🏛️ Government & R&D Liaisons",
      desc: "Policy makers and national lab leads (DST, MeitY, NITI Aayog, BIRAC, iDEX) providing sovereign AI alignment.",
      border: "border-l-emerald-400",
    },
  ];

  return (
    <section id="governance" className="py-20 bg-slate-950/80 border-t border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300 mb-3">
            <Shield className="h-3.5 w-3.5 text-purple-400" />
            <span>Multi-Tier Ecosystem Governance</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Governance & Team Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Operational structure, institutional SPOCs, and mentorship tiers driving Project Boss of AI.
          </p>
        </div>

        {/* 4 Governance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {governanceTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <Card
                key={tier.title}
                className="border border-white/10 bg-slate-900/60 backdrop-blur-md flex flex-col justify-between"
              >
                <CardHeader className="space-y-2 pb-2">
                  <div className="flex justify-between items-center">
                    <div className={`p-2 rounded-lg ${tier.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="gym" className="text-[10px]">
                      {tier.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-bold text-white leading-tight pt-1">
                    {tier.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-slate-300 leading-relaxed">{tier.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 5-Tier Mentorship Network */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-6">
            <Compass className="h-5 w-5 text-cyan-400" />
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              5-Tier Mentorship Network & Ecosystem Liaisons
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentorshipTiers.map((m) => (
              <div
                key={m.tier}
                className={`rounded-xl bg-slate-950/60 p-4 border border-white/5 border-l-4 ${m.border} space-y-1.5`}
              >
                <div className="font-semibold text-xs sm:text-sm text-white">{m.tier}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
