import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Lock, Users, CheckCircle, ArrowRight, Download, Eye, Sparkles, ShieldCheck, Zap, Layers, Trophy, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AssessmentType = "secure" | "ai-ready";

const secureAssessments = [
  {
    title: "AI-Ready Assessment Design",
    description: "Design assessments that meaningfully integrate AI while maintaining academic rigor and learning outcomes.",
    difficulty: "Advanced",
    duration: "Varies",
    bestFor: "Course evaluation frameworks",
    icon: ClipboardCheck,
    href: "/track/teaching/assessment-design"
  },
  {
    title: "Oral Viva",
    description: "One-on-one verbal assessment to evaluate deep understanding and reasoning skills.",
    difficulty: "Advanced",
    duration: "20-30 min",
    bestFor: "Critical thinking, verbal articulation",
    icon: Trophy
  },
  {
    title: "Practical Lab Test",
    description: "Hands-on demonstration of technical skills in a supervised environment.",
    difficulty: "Intermediate",
    duration: "60-90 min",
    bestFor: "Applied skills, problem-solving",
    icon: Zap
  },
  {
    title: "Proctored Written Exam",
    description: "Traditional supervised examination with controlled conditions.",
    difficulty: "Varies",
    duration: "2-3 hours",
    bestFor: "Knowledge recall, time management",
    icon: ShieldCheck
  },
  {
    title: "Live Presentation",
    description: "Real-time presentation and Q&A session with evaluation panel.",
    difficulty: "Advanced",
    duration: "15-20 min",
    bestFor: "Communication, subject mastery",
    icon: Users
  },
  {
    title: "Skill Demonstration",
    description: "Observable performance of specific competencies under supervision.",
    difficulty: "Intermediate",
    duration: "30-45 min",
    bestFor: "Practical abilities, technique",
    icon: CheckCircle
  },
];

const aiReadyAssessments = [
  {
    title: "AI-Assisted Data Analysis",
    description: "Use AI tools to analyze datasets and derive meaningful insights with proper attribution.",
    difficulty: "Intermediate",
    duration: "1-2 weeks",
    bestFor: "Analytical skills, AI tool proficiency",
    icon: Layers
  },
  {
    title: "Portfolio Development",
    description: "Curate and reflect on work samples with AI-powered organization and presentation.",
    difficulty: "Beginner",
    duration: "Ongoing",
    bestFor: "Self-reflection, growth documentation",
    icon: CheckCircle
  },
  {
    title: "Collaborative Research Project",
    description: "Team-based research using AI for literature review, synthesis, and drafting.",
    difficulty: "Advanced",
    duration: "4-6 weeks",
    bestFor: "Collaboration, research methodology",
    icon: Users
  },
  {
    title: "AI-Enhanced Case Study",
    description: "Analyze complex scenarios using AI as a research and brainstorming partner.",
    difficulty: "Intermediate",
    duration: "1 week",
    bestFor: "Critical analysis, problem-solving",
    icon: Sparkles
  },
  {
    title: "Reflective Learning Journal",
    description: "Document learning journey with AI-prompted reflection questions.",
    difficulty: "Beginner",
    duration: "Ongoing",
    bestFor: "Metacognition, personal growth",
    icon: ShieldCheck
  },
];

const AssessmentVault = () => {
  const [activeType, setActiveType] = useState<AssessmentType>("secure");

  const assessments = activeType === "secure" ? secureAssessments : aiReadyAssessments;

  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative bg-hero-gradient pt-32 pb-24 overflow-hidden border-b border-white/10">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -ml-64 -mt-32" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] -mr-32 -translate-y-1/2" />

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-accent font-bold tracking-[0.2em] uppercase mb-8 animate-fade-in shadow-xl">
              <Lock className="h-4 w-4" />
              Institutional Standard
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter animate-slide-up leading-[0.9]">
              The <span className="text-white/60 font-light italic">Assessment</span> <br />
              Vault
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light font-sans max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Strategic frameworks for validating academic excellence. Balancing secure authenticity with AI-integrated innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-background relative">
        <div className="container px-4">

          {/* Re-designed Toggle Switch */}
          <div className="flex justify-center mb-24">
            <div className="inline-flex rounded-full bg-muted/30 p-2 border border-border/50 backdrop-blur-sm shadow-inner relative group">
              <div
                className={cn(
                  "absolute top-2 bottom-2 w-[calc(50%-8px)] bg-primary rounded-full transition-all duration-500 ease-in-out shadow-lg",
                  activeType === "secure" ? "left-2" : "left-[calc(50%+6px)]"
                )}
              />
              <button
                onClick={() => setActiveType("secure")}
                className={cn(
                  "relative z-10 flex items-center gap-3 px-8 py-4 rounded-full font-accent font-bold text-sm tracking-widest uppercase transition-all duration-300",
                  activeType === "secure" ? "text-white" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Lock className={cn("h-4 w-4", activeType === "secure" ? "text-white" : "text-primary/60")} />
                Secure Mode
              </button>
              <button
                onClick={() => setActiveType("ai-ready")}
                className={cn(
                  "relative z-10 flex items-center gap-3 px-8 py-4 rounded-full font-accent font-bold text-sm tracking-widest uppercase transition-all duration-300",
                  activeType === "ai-ready" ? "text-white" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Sparkles className={cn("h-4 w-4", activeType === "ai-ready" ? "text-white" : "text-accent/60")} />
                AI-Integrated
              </button>
            </div>
          </div>

          {/* Contextual Description Header */}
          <div className="max-w-4xl mx-auto text-center mb-20 px-4">
            {activeType === "secure" ? (
              <div className="animate-fade-in">
                <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
                  Validated Authenticity
                </h2>
                <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-8" />
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Supervised evaluation methods designed to validate internal knowledge through controlled conditions. Essential for measuring deep subject mastery without cognitive offloading.
                </p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <h2 className="font-display text-4xl md:text-5xl font-black text-accent mb-6 tracking-tight">
                  Scaffolded Innovation
                </h2>
                <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Methodologies where AI serves as a collaborative intelligence. These tasks measure how students leverage high-level tools to achieve complex, higher-order outcomes.
                </p>
              </div>
            )}
          </div>

          {/* Assessment Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {assessments.map((assessment, index) => (
              <div
                key={assessment.title}
                className={cn(
                  "group relative overflow-hidden bg-background rounded-[40px] p-10 border transition-all duration-500",
                  "hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-3",
                  activeType === "secure" ? "border-primary/10 hover:border-primary/30" : "border-accent/10 hover:border-accent/30"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Visual Accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-10 transition-opacity group-hover:opacity-20",
                  activeType === "secure" ? "bg-primary" : "bg-accent"
                )} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                      activeType === "secure" ? "bg-primary text-white" : "bg-accent text-white"
                    )}>
                      <assessment.icon className="h-7 w-7" />
                    </div>
                    <span className="font-accent font-bold text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/50">
                      {assessment.difficulty}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {assessment.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed font-light">
                    {assessment.description}
                  </p>

                  <div className="mt-auto space-y-4 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-1.5 h-1.5 rounded-full", activeType === "secure" ? "bg-primary" : "bg-accent")} />
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Duration: {assessment.duration}</span>
                    </div>
                    <div className="flex gap-4">
                      {/* @ts-ignore */}
                      {assessment.href ? (
                        <Button asChild variant="hero" size="lg" className={cn(
                          "flex-1 rounded-2xl shadow-lg",
                          activeType === "secure" ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                        )}>
                          {/* @ts-ignore */}
                          <Link to={assessment.href}>
                            <Eye className="h-4 w-4 mr-2" />
                            Open
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="hero" size="lg" className={cn(
                          "flex-1 rounded-2xl shadow-lg",
                          activeType === "secure" ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                        )}>
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      )}
                      <Button variant="heroOutline" size="lg" className="flex-1 rounded-2xl border-primary/20 text-primary hover:bg-primary/5">
                        <Download className="h-4 w-4 mr-2" />
                        Guide
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic CTA */}
          <div className="mt-32 max-w-4xl mx-auto">
            <div className="p-12 rounded-[50px] bg-secondary/30 border border-border/50 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="relative z-10">
                <h3 className="font-display text-3xl font-black text-foreground mb-6">
                  Custom Assessment Design?
                </h3>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-light">
                  Our academic technologists can help you develop custom scaffolded assessments tailored to your specific learning outcomes.
                </p>
                <Button variant="hero" size="xl" className="rounded-full px-12 h-16 bg-primary hover:bg-primary/90 text-white shadow-2xl group">
                  Teaching Support Hub
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AssessmentVault;
