import { ArrowRight, Sparkles, BookOpen, Microscope, Settings, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Top Badge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>BossOfAI · AI for Higher Education</span>
        </div>
      </div>

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            AI{" "}
            <span className="relative">
              TRACK
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full" />
            </span>
            {" "}Hub
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 font-display mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            AI Empowerment for Higher Education
          </p>

          <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A free, open reference hub for students, faculty, and researchers. Explore the TRACK framework — five pillars of AI integration in academic life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild variant="heroTeal" size="xl" className="min-w-[220px]">
              <Link to="/get-started">
                Get Started
              </Link>
            </Button>
            <Button asChild variant="hero" size="xl" className="min-w-[220px]">
              <Link to="/resources">
                Explore Resources
              </Link>
            </Button>
            <Button asChild variant="heroIndigo" size="xl" className="min-w-[220px]">
              <Link to="/governance">
                View Guidelines
              </Link>
            </Button>
          </div>

          {/* TRACK Icons Preview */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: BookOpen, label: "Teaching", color: "bg-track-teaching" },
              { icon: Microscope, label: "Research", color: "bg-track-research" },
              { icon: Settings, label: "Admin", color: "bg-track-admin" },
              { icon: Briefcase, label: "Consulting", color: "bg-track-consulting" },
              { icon: Sparkles, label: "Kaizen", color: "bg-track-kaizen" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 group">
                <div className={`p-3 rounded-xl ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-primary-foreground/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
