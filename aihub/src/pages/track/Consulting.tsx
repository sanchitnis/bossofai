import Layout from "@/components/layout/Layout";
import { Briefcase, Play, FileBarChart, Users, ArrowRight, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrackResourceWidget from "@/components/resources/TrackResourceWidget";

const services = [
  {
    title: "Industry Simulations",
    description: "Create realistic business simulations and scenarios for stakeholder engagement and training.",
    icon: Play,
    features: ["Scenario Design", "Decision Trees", "Outcome Analysis"],
    uses: "120",
  },
  {
    title: "Case Study Development",
    description: "Build comprehensive case studies from real-world data with AI-assisted analysis and presentation.",
    icon: FileBarChart,
    features: ["Data Synthesis", "Insight Generation", "Visual Reports"],
    uses: "85",
  },
  {
    title: "Project Management",
    description: "AI-powered project planning, resource allocation, and stakeholder communication tools.",
    icon: Users,
    features: ["Timeline Planning", "Resource Optimization", "Progress Tracking"],
    uses: "200",
  },
];

const Consulting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-track-consulting/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-track-consulting/10 text-track-consulting text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              TRACK Pillar
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-track-consulting">C</span>onsulting & Collaborations
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Create simulations and case studies for industry stakeholders with AI-enhanced project management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="consulting" size="lg">
                <Link to="/track/consulting/simulations">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-track-consulting/30 transition-all shadow-card hover:shadow-card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-track-consulting/10 text-track-consulting group-hover:bg-track-consulting group-hover:text-white transition-colors">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm border border-border px-2 py-1 rounded-full">
                    {service.uses} uses
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Industry Collaboration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partner with the BossOfAI community for AI-driven consulting, industry simulations, and applied research
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Industry Partnership Program</h3>
                <p className="text-sm text-muted-foreground">Connect with our consulting team</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Our consulting pillar bridges academic expertise with industry needs. From AI-powered simulations to comprehensive case studies, we deliver insights that drive business decisions.
            </p>
            <Button asChild size="lg">
              <Link to="/under-development">
                Become a Partner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Resources for Consulting</h2>
            <p className="text-muted-foreground">Prompts, gems, and tools for industry collaboration and case study work &mdash; rated by the community.</p>
          </div>
          <TrackResourceWidget track="Consulting" compact />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-track-consulting text-white">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Explore consulting prompts and project templates in our resource library.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/resources/prompt-library">
              View Consulting Resources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Consulting;
