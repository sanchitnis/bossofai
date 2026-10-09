import { Link } from "react-router-dom";
import { BookOpen, Microscope, Settings, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "teaching",
    letter: "T",
    title: "Teaching & Learning",
    description: "AI-powered tools for lesson planning, creating analogies, and enhancing student engagement strategies.",
    icon: BookOpen,
    color: "bg-track-teaching",
    borderColor: "border-track-teaching",
    href: "/track/teaching",
    features: ["Lesson Planning", "AI-Ready Assessments", "Engagement Tools"],
  },
  {
    id: "research",
    letter: "R",
    title: "Research",
    description: "Discover prior work with REVA Lit and explore our X+AI Research Centers across five key domains.",
    icon: Microscope,
    color: "bg-track-research",
    borderColor: "border-track-research",
    href: "/track/research",
    features: ["REVA Lit Search", "X+AI Centers", "Publication Support"],
  },
  {
    id: "administration",
    letter: "A",
    title: "Academic Administration",
    description: "Streamline workflows with AI-powered meeting agendas, policy summaries, and internal communications.",
    icon: Settings,
    color: "bg-track-admin",
    borderColor: "border-track-admin",
    href: "/track/administration",
    features: ["Meeting Tools", "Policy Management", "Communication"],
  },
  {
    id: "consulting",
    letter: "C",
    title: "Consulting & Collaborations",
    description: "Create simulations and case studies for industry stakeholders and manage collaborative projects.",
    icon: Briefcase,
    color: "bg-track-consulting",
    borderColor: "border-track-consulting",
    href: "/track/consulting",
    features: ["Industry Simulations", "Case Studies", "Project Management"],
  },
  {
    id: "kaizen",
    letter: "K",
    title: "Kaizen (Self-Development)",
    description: "AI as your personalized tutor for skill-building, reflective practice, and continuous improvement.",
    icon: Sparkles,
    color: "bg-track-kaizen",
    borderColor: "border-track-kaizen",
    href: "/track/kaizen",
    features: ["AI Tutoring", "Skill Tracking", "Personal Growth"],
  },
];

const TrackPillars = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The <span className="text-gradient-accent">TRACK</span> Framework
          </h2>
          <p className="text-lg text-muted-foreground">
            Five interconnected pillars designed to empower every aspect of university life with AI capabilities.
          </p>
        </div>

        {/* TRACK Acronym Display */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.letter}
              className={cn(
                "w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white font-display font-bold text-xl md:text-2xl shadow-lg animate-scale-in",
                pillar.color
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pillar.letter}
            </div>
          ))}
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.id}
              to={pillar.href}
              className={cn(
                "group relative bg-card rounded-2xl p-6 border-2 border-transparent hover:border-l-4 transition-all duration-300 card-shadow hover:card-shadow-hover",
                `hover:${pillar.borderColor}`
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Badge */}
              <div className={cn("inline-flex items-center justify-center w-14 h-14 rounded-xl text-white mb-4 shadow-md group-hover:scale-110 transition-transform", pillar.color)}>
                <span className="font-display font-bold text-2xl">{pillar.letter}</span>
              </div>

              {/* Content */}
              <div className="mb-3">
                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {pillar.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackPillars;
