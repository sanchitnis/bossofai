import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ExternalLink,
  ThumbsUp,
  PlusCircle,
  Cpu,
  Layers,
  Leaf,
  HeartPulse,
  BookOpen,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { DBProject } from "@/types/database";

const initialProjects: DBProject[] = [
  {
    id: "proj-1",
    title: "AI Soil & Pest Diagnostic Probe",
    category: "Agritech R&D Solution",
    stage: "Stage 3",
    smi_score: 8.2,
    description: "Edge-AI diagnostic tool for smallholder farmers to spot crop disease early without internet connectivity. Patentable IP & Open R&D.",
    lead_name: "Student R&D Team Alpha",
    institution: "Institute of Technology Hub 1",
    github_url: "https://github.com/sanchitnis/bossofai",
    demo_url: null,
    upvotes: 42,
    status: "published",
    created_at: new Date().toISOString(),
  },
  {
    id: "proj-2",
    title: "Rural Maternal Triage Assistant",
    category: "HealthTech Guild Probe",
    stage: "Stage 2",
    smi_score: 7.5,
    description: "LLM-augmented decision support app for frontline health workers operating under low-bandwidth constraints.",
    lead_name: "Health-Tech Guild",
    institution: "Global Youth STEAM Network",
    github_url: "https://github.com/sanchitnis/bossofai",
    demo_url: null,
    upvotes: 29,
    status: "published",
    created_at: new Date().toISOString(),
  },
  {
    id: "proj-3",
    title: "SrujanaBuddy Learning Companion",
    category: "EdTech DPI & Solution",
    stage: "Stage 3",
    smi_score: 9.1,
    description: "Open-source peer tutoring platform using Beckn protocol to connect student tutors with learners globally.",
    lead_name: "Student & Faculty Hub",
    institution: "National Academic Network",
    github_url: "https://github.com/sanchitnis/bossofai",
    demo_url: null,
    upvotes: 56,
    status: "published",
    created_at: new Date().toISOString(),
  },
];

export const SolutionsShowcase: React.FC = () => {
  const [projects, setProjects] = useState<DBProject[]>(initialProjects);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      if (!isSupabaseConfigured()) return;
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("status", "published")
          .order("smi_score", { ascending: false });

        if (data && data.length > 0 && !error) {
          setProjects(data as DBProject[]);
        }
      } catch (err) {
        console.warn("Using fallback initial projects:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const categories = ["All", "Agritech R&D Solution", "HealthTech Guild Probe", "EdTech DPI & Solution"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleUpvote = async (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
    if (isSupabaseConfigured()) {
      try {
        const current = projects.find((p) => p.id === id);
        if (current) {
          await supabase
            .from("projects")
            .update({ upvotes: current.upvotes + 1 })
            .eq("id", id);
        }
      } catch (err) {
        console.error("Upvote error:", err);
      }
    }
  };

  return (
    <section id="solutions" className="py-20 bg-slate-950/70 border-t border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Innovation & IP Showcase</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Student & Faculty Solutions & IP
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Discover innovative software prototypes, research papers, patentable IP, and industry capstone projects evaluated on the Solution Maturity Index (SMI).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "gym" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="text-xs rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {filteredProjects.map((proj) => (
            <Card
              key={proj.id}
              className="border border-white/10 bg-slate-900/60 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
            >
              <CardHeader className="space-y-2 pb-3">
                <div className="flex justify-between items-start">
                  <Badge variant="gym" className="text-[10px]">
                    {proj.category}
                  </Badge>
                  <Badge variant="stage3" className="text-[10px]">
                    {proj.stage}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-white font-bold">{proj.title}</CardTitle>
                <CardDescription className="text-xs text-slate-300 leading-relaxed">
                  {proj.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
                  <div>
                    <span className="text-slate-300 font-medium">Lead:</span> {proj.lead_name}
                  </div>
                  <div className="font-mono text-cyan-400 font-semibold bg-cyan-500/10 px-2 py-0.5 rounded">
                    SMI: {proj.smi_score}/10
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleUpvote(proj.id)}
                    className="gap-1.5 text-xs text-slate-300 hover:text-cyan-300 h-8 px-2"
                  >
                    <ThumbsUp className="h-3.5 w-3.5" />
                    <span>{proj.upvotes}</span>
                  </Button>

                  {proj.github_url && (
                    <a
                      href={proj.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>View Code</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit Solution Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-indigo-950/30 to-purple-950/30 p-8 text-center backdrop-blur-xl">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
            Share Your Innovative Solution, Capstone or IP Idea
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-6">
            Built an innovative AI probe, capstone deliverable, or patentable prototype? Register and showcase your work to industry CTO mentors, internship recruiters, and venture partners.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6CkQQXXr3306tPjUFi6nODpdLXT-F6uyFrLpoEcK5iBAa5Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="gym" size="lg" className="gap-2 text-sm shadow-xl">
              <PlusCircle className="h-4 w-4" />
              <span>Register & Submit Solution / Project</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
