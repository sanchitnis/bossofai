import Layout from "@/components/layout/Layout";
import { Microscope, Search, Building2, ArrowRight, Leaf, Heart, Shield, Cpu, GraduationCap, ExternalLink, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrackResourceWidget from "@/components/resources/TrackResourceWidget";

const researchCenters = [
  {
    title: "Education",
    description: "AI applications in pedagogy, learning analytics, and educational technology.",
    icon: GraduationCap,
    color: "bg-track-teaching",
    href: "/track/research/education",
    uses: "450",
  },
  {
    title: "Agriculture",
    description: "Smart farming, crop optimization, and sustainable agricultural practices.",
    icon: Leaf,
    color: "bg-track-admin",
    href: "/track/research/agriculture",
    uses: "320",
  },
  {
    title: "Bioinformatics & Healthcare",
    description: "Medical AI, drug discovery, and healthcare optimization.",
    icon: Heart,
    color: "bg-destructive",
    href: "/track/research/healthcare",
    uses: "890",
  },
  {
    title: "Defense",
    description: "Security applications, autonomous systems, and strategic technologies.",
    icon: Shield,
    color: "bg-primary",
    href: "/track/research/defense",
    uses: "150",
  },
  {
    title: "Sustainable Infrastructure",
    description: "Smart cities, renewable energy, and environmental monitoring.",
    icon: Building2,
    color: "bg-track-consulting",
    href: "/track/research/infrastructure",
    uses: "600",
  },
  {
    title: "Smart Manufacturing",
    description: "Autonomous systems, physical AI, robotics, and digital twins for intelligent industry.",
    icon: Cpu,
    color: "bg-cyan-600",
    href: "/track/research/smart-manufacturing",
    uses: "210",
  },
];

const Research = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-track-research/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-track-research/10 text-track-research text-sm font-medium mb-6">
              <Microscope className="h-4 w-4" />
              TRACK Pillar
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-track-research">R</span>esearch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore AI research initiatives, curated datasets, open-source projects, and domain-specific X+AI Research Centers.
            </p>
          </div>
        </div>
      </section>

      {/* X+AI Research Centers */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              X+AI Research Centers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interdisciplinary research initiatives combining domain expertise with AI capabilities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {researchCenters.map((center, index) => (
              <Link
                key={center.title}
                to={center.href}
                className="group bg-card rounded-xl p-6 border border-border hover:border-track-research/30 transition-all shadow-sm hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${center.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <center.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm border border-border px-2 py-1 rounded-full">
                    {center.uses} uses
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-track-research transition-colors">
                  {center.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {center.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Datasets Banners */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Projects Banner */}
            <Link
              to="/track/research/projects"
              className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-track-research/20 to-track-research/5 border border-track-research/20 hover:border-track-research/40 transition-all card-shadow hover:card-shadow-hover"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-track-research text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Microscope className="h-7 w-7" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-track-research opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-track-research transition-colors">
                  AI Projects
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Showcase of completed AI research projects across disciplines, with links to open code repositories and publications.
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-track-research">
                  <span>Explore Projects</span>
                </div>
              </div>
            </Link>

            {/* Datasets Banner */}
            <Link
              to="/track/research/datasets"
              className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-track-research/20 to-track-research/5 border border-track-research/20 hover:border-track-research/40 transition-all card-shadow hover:card-shadow-hover"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-track-research text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Database className="h-7 w-7" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-track-research opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-track-research transition-colors">
                  AI Datasets
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Open dataset registry for researchers and students, providing access to curated data sources for academic experimentation.
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-track-research">
                  <span>Access Registry</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Resources for Research</h2>
            <p className="text-muted-foreground">Courses, prompts, and tools curated for AI researchers.</p>
          </div>
          <TrackResourceWidget track="Research" compact />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-track-research text-white">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Collaborate on Research
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join interdisciplinary research initiatives or propose new X+AI projects with the global AI community.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/under-development">
              Contact Research Office
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
