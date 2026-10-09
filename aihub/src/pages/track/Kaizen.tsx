import Layout from "@/components/layout/Layout";
import { Sparkles, Brain, Target, TrendingUp, ArrowRight, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrackResourceWidget from "@/components/resources/TrackResourceWidget";

const features = [
  {
    title: "AI Tutoring",
    description: "Personalized learning support that adapts to your pace and style of learning.",
    icon: Brain,
    uses: "5.6k",
  },
  {
    title: "Skill Tracking",
    description: "Monitor your progress across different competencies with visual dashboards.",
    icon: Target,
    uses: "3.2k",
  },
  {
    title: "Reflective Practice",
    description: "Guided self-reflection exercises to consolidate learning and identify growth areas.",
    icon: BookOpen,
    uses: "1.5k",
  },
  {
    title: "Goal Setting",
    description: "AI-assisted goal creation with actionable milestones and progress tracking.",
    icon: Award,
    uses: "900",
  },
];

const Kaizen = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-track-kaizen/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-track-kaizen/10 text-track-kaizen text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              TRACK Pillar
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-track-kaizen">K</span>aizen (Self-Development)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Continuous improvement through AI-powered personalized tutoring, skill-building, and reflective practice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/track/kaizen/ai-tutor" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-track-kaizen text-track-kaizen-foreground shadow hover:bg-track-kaizen/90 h-11 px-8">
                Start Your Journey
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 border border-border hover:border-track-kaizen/30 transition-all shadow-card hover:shadow-card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-track-kaizen/10 text-track-kaizen group-hover:bg-track-kaizen group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm border border-border px-2 py-1 rounded-full">
                    {feature.uses} uses
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              The Kaizen Philosophy
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              "Kaizen" (改善) means continuous improvement. In the context of AI, it represents our commitment to lifelong learning, adapting to new technologies, and constantly enhancing our skills and capabilities.
            </p>

            <div className="flex justify-center gap-8 mb-8">
              {[
                { value: "1%", label: "Daily Improvement" },
                { value: "365x", label: "Annual Growth" },
                { value: "∞", label: "Possibilities" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-track-kaizen mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-track-kaizen">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium">Small steps, big transformations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Resources for Self-Development</h2>
            <p className="text-muted-foreground">Courses, gems, and prompts for continuous personal and professional growth &mdash; rated by the community.</p>
          </div>
          <TrackResourceWidget track="Kaizen" compact />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-track-kaizen text-white">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Begin Your AI Learning Journey
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Access personalized learning resources and skill development tools.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/resources#learning-hub">
              Explore Learning Hub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Kaizen;
