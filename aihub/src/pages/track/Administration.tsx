import Layout from "@/components/layout/Layout";
import { Settings, Calendar, FileText, MessageSquare, ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrackResourceWidget from "@/components/resources/TrackResourceWidget";

const tools = [
  {
    title: "Meeting Agenda Generator",
    description: "Transform rough notes into structured meeting agendas with time allocations and discussion points.",
    icon: Calendar,
    action: "Generate Agenda",
    href: "/track/administration/agenda-generator",
  },
  {
    title: "Policy Summarizer",
    description: "Get clear, actionable summaries of lengthy policy documents with key points highlighted.",
    icon: FileText,
    action: "Summarize Policy",
    href: "/track/administration/policy-summarizer",
  },
  {
    title: "Internal Communications",
    description: "Draft professional emails, announcements, and memos with consistent tone and clarity.",
    icon: MessageSquare,
    action: "Draft Content",
    href: "/track/administration/communications",
  },
];

const Administration = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-track-admin/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-track-admin/10 text-track-admin text-sm font-medium mb-6">
              <Settings className="h-4 w-4" />
              TRACK Pillar
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-track-admin">A</span>cademic Administration
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Streamline administrative workflows with AI-powered tools for meetings, policies, and communications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="admin" size="lg">
                <Link to="/under-development">
                  Explore Tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-track-admin/30 transition-all shadow-card hover:shadow-card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-track-admin/10 text-track-admin group-hover:bg-track-admin group-hover:text-white transition-colors">
                    <tool.icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {tool.title}
                </h3>
                {/* Tool Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {tool.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/under-development">
                    {tool.action}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why Use AI for Administration?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Clock, title: "Save Time", desc: "Reduce hours spent on routine documentation tasks" },
                { icon: FileText, title: "Consistency", desc: "Maintain uniform tone and format across communications" },
                { icon: Shield, title: "Data Privacy", desc: "Built-in guardrails to protect sensitive information" },
                { icon: Settings, title: "Efficiency", desc: "Focus on decision-making, not document drafting" },
              ].map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border">
                  <div className="p-2 rounded-lg bg-track-admin/10 text-track-admin">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Resources for Administration</h2>
            <p className="text-muted-foreground">Prompts, gems, and tools to streamline your administrative workflows &mdash; rated by the community.</p>
          </div>
          <TrackResourceWidget track="Administration" compact />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-track-admin text-white">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Streamline Your Workflow
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Access prompt templates designed specifically for administrative tasks.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/resources/prompt-library">
              View Admin Prompts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Administration;
