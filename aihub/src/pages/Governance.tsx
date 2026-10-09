import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Shield, FileCheck, Scale, Eye, Lock, Users, ArrowRight, Download, AlertTriangle, CheckCircle2, Gavel, HandMetal, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const policies = [
  {
    title: "Responsible AI Use Policy",
    description: "Guidelines on data privacy, ethical considerations, and maintaining human oversight in AI applications.",
    icon: Shield,
    color: "bg-primary",
    borderColor: "border-primary/20",
    lastUpdated: "January 2025",
    url: "https://revaedu-my.sharepoint.com/:w:/r/personal/agnik_haldar_reva_edu_in/_layouts/15/Doc.aspx?sourcedoc=%7B383D7859-DB61-4C1B-A83B-6226A64E5E12%7D&file=REVA%20University_AI_Policy_Document.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
  },
  {
    title: "Staff AI Usage Procedures",
    description: "Official procedures and best practices for faculty and staff when utilizing AI tools.",
    icon: FileCheck,
    color: "bg-accent",
    borderColor: "border-accent/20",
    lastUpdated: "January 2025",
    url: "/governance/staff-procedures"
  },
  {
    title: "Student AI Guidelines",
    description: "Framework for appropriate AI use in coursework, research, and academic activities.",
    icon: Users,
    color: "bg-track-teaching",
    borderColor: "border-track-teaching/20",
    lastUpdated: "January 2025",
    url: "/student-guidelines"
  },
  {
    title: "REVA Privacy policy",
    description: "Our commitment to protecting your personal information and ensuring data privacy across all university services.",
    icon: Lock,
    color: "bg-track-admin",
    borderColor: "border-track-admin/20",
    lastUpdated: "January 2025",
    url: "https://bossofai.org/privacy"
  },
];

const ethicalPrinciples = [
  {
    title: "Transparency",
    description: "Always disclose AI use in work products and be clear about AI's role in decision-making.",
    icon: Eye
  },
  {
    title: "Accuracy",
    description: "Verify AI-generated content for factual correctness before use or publication.",
    icon: CheckCircle2
  },
  {
    title: "Attribution",
    description: "Properly cite and acknowledge AI assistance in academic and professional work.",
    icon: Gavel
  },
  {
    title: "Privacy",
    description: "Never input sensitive personal data, student records, or confidential information into AI systems.",
    icon: Lock
  },
  {
    title: "Human Oversight",
    description: "Maintain human judgment as the final decision-maker for all significant outcomes.",
    icon: HandMetal
  },
  {
    title: "Continuous Learning",
    description: "Stay updated on AI capabilities, limitations, and emerging ethical considerations.",
    icon: BookOpen
  },
];

const Governance = () => {
  return (
    <Layout>
      <Helmet>
        <title>AI Governance &amp; Policy | REVA AI Hub</title>
        <meta name="description" content="REVA University's framework for responsible AI use — ethical guidelines, data governance, and the REVA Responsible AI Charter." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-hero-gradient pt-32 pb-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -ml-32 -mb-32" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-accent font-bold tracking-widest uppercase mb-8 animate-fade-in">
              <Scale className="h-4 w-4" />
              Governance & Ethics
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter animate-slide-up leading-tight">
              Responsible AI <br />
              <span className="text-white/70">Framework</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light font-sans max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Pioneering ethical, transparent, and human-centric AI integration across REVA University's academic ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb/Navigation Hack for sticky feel */}
      <div className="sticky top-20 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border/50 py-4 hidden md:block">
        <div className="container flex items-center justify-center gap-8 font-accent font-bold text-sm tracking-widest uppercase text-muted-foreground">
          <a href="#policies" className="hover:text-primary transition-colors">Policies</a>
          <div className="w-1 h-1 rounded-full bg-border" />
          <a href="#ethics" className="hover:text-primary transition-colors">Principles</a>
          <div className="w-1 h-1 rounded-full bg-border" />
          <a href="#reminder" className="hover:text-primary transition-colors">Compliance</a>
        </div>
      </div>

      {/* Policies Section */}
      <section id="policies" className="py-24 bg-background">
        <div className="container text-center mb-16 px-4">
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            Institutional Policies
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
        </div>

        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className={cn(
                  "group relative overflow-hidden rounded-3xl p-8 bg-white dark:bg-card border-2 transition-all duration-500",
                  "hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2",
                  policy.borderColor
                )}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${policy.color} text-white flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                    <policy.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {policy.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {policy.description}
                  </p>
                    <div className="flex items-center justify-between pt-6 border-t border-border/50">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-black mb-1">Last Updated</span>
                        <span className="text-sm font-bold text-foreground">{policy.lastUpdated}</span>
                      </div>
                      <Button variant="hero" size="lg" className="rounded-full px-8 shadow-md" asChild>
                        {policy.url.startsWith("http") ? (
                          <a href={policy.url} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-5 w-5 mr-2" />
                            View Document
                          </a>
                        ) : (
                          <Link to={policy.url}>
                            <Eye className="h-5 w-5 mr-2" />
                            View Document
                          </Link>
                        )}
                      </Button>
                    </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section id="ethics" className="py-32 bg-secondary/30 relative">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 px-4">
              <span className="font-accent font-black text-accent tracking-[0.3em] uppercase block mb-4 italic">The REVA Code</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-6">
                Ethical AI Principles
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Our core philosophical pillars ensure that AI serves the humanity of our campus community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {ethicalPrinciples.map((principle, index) => (
                <div
                  key={principle.title}
                  className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:bg-card hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="flex gap-6 items-start">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-300">
                        <principle.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="absolute -top-4 -left-4 text-4xl font-black text-primary/5 select-none transition-all group-hover:text-primary/10">0{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-accent text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">{principle.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed font-light">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance/Reminder Section */}
      <section id="reminder" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 dark:from-amber-950/40 dark:to-orange-950/20 border-l-8 border-accent rounded-3xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 items-center">
                <div className="shrink-0 p-6 rounded-3xl bg-white dark:bg-card shadow-lg rotate-[-2deg] border border-accent/20">
                  <AlertTriangle className="h-16 w-16 text-accent animate-pulse" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-display text-3xl font-black text-foreground mb-6">
                    Professional Accountability
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-light italic">
                    "AI tools must always augment, never replace, the critical human judgment that defines academic excellence at REVA."
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-background border border-border">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-bold">Policy Compliant</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-background border border-border">
                      <Lock className="h-5 w-5 text-primary" />
                      <span className="text-sm font-bold">Data Protected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Ready to Innovate <br />
              <span className="text-white/60">Responsibly?</span>
            </h2>
            <p className="text-xl text-white/80 font-light mb-12 max-w-xl mx-auto uppercase tracking-wide">
              Collaborate with our AI Ethics team to bridge innovation and integrity.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button asChild variant="heroOutline" size="xl" className="border-white/40 text-white hover:bg-white/10 rounded-full px-12 h-16 text-xl">
                <Link to="/resources">
                  Academic Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Governance;
