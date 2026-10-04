import React from "react";
import { Layers, Lightbulb, Compass, Award, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const BenchmarksSection: React.FC = () => {
  const models = [
    {
      title: "iSPIRT Foundation 🇮🇳",
      tag: "Digital Public Infrastructure",
      desc: "Volunteer product think tank model, pre-competitive open specifications (UPI, Beckn, ABDM), and societal-scale architecture.",
    },
    {
      title: "École 42 Model 🏊‍♂️",
      tag: "P2P Evaluation",
      desc: "Teacherless peer-to-peer evaluation economy, 4-week Piscine deep dive, and gamified project skill trees.",
    },
    {
      title: "Minerva Project 🧠",
      tag: "Habits of Mind (HCAs)",
      desc: "Active learning seminars, Foundational Concepts & Habits of Mind, and systematic measurement of the 4 C human skills.",
    },
    {
      title: "MIT Media Lab / REDX 🎯",
      tag: "SPOT-PROBE Engineering",
      desc: "Prof. Ramesh Raskar's SPOT-PROBE micro-experiments, anti-disciplinary fusion, and technical root-cause deconstruction.",
    },
    {
      title: "Apple CBL & Aalborg PBL 🏗️",
      tag: "Challenge-Based Learning",
      desc: "Big Idea to Challenge framework, sustained interdisciplinary group inquiry, and public prototype publishing.",
    },
    {
      title: "Google X Moonshot 🚀",
      tag: "Monkey-First Principle",
      desc: "3-part radical breakthrough intersection and tackling the hardest technical/adoption bottleneck first before building pedestals.",
    },
  ];

  return (
    <section id="benchmarks" className="py-20 bg-slate-900/50 border-t border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-3">
            <Layers className="h-3.5 w-3.5 text-indigo-400" />
            <span>Global Benchmarks</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Learnings From Global Models
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Boss of AI synthesizes operational mechanisms from premier innovation and educational engines worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((m) => (
            <Card
              key={m.title}
              className="border border-white/10 bg-slate-950/60 backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/40 transition-all"
            >
              <CardHeader className="space-y-2 pb-2">
                <Badge variant="gym" className="w-fit text-[10px]">
                  {m.tag}
                </Badge>
                <CardTitle className="text-base font-bold text-white leading-tight">
                  {m.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
