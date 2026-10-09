import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { FileText, GraduationCap, BookOpen, Sparkles, ArrowRight, Code2, Star, ExternalLink, Zap, Terminal, BarChart3, TrendingUp, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const resources = [
  {
    id: "learning-hub",
    title: "Learning Hub",
    description: "Curated courses and AI literacy modules to enhance your AI skills and knowledge.",
    icon: GraduationCap,
    color: "bg-primary",
    borderColor: "border-primary",
    href: "/resources/learning-hub",
    features: ["Online Courses", "AI Literacy", "Skill Development"],
  },
  {
    id: "prompt-library",
    title: "Prompt Library",
    description: "Ready-to-use prompts organized by the TRACK framework to accelerate your AI workflows.",
    icon: FileText,
    color: "bg-accent",
    borderColor: "border-accent",
    href: "/resources/prompt-library",
    features: ["TRACK-Aligned", "Searchable", "Copy & Use"],
  },
  {
    id: "notebooks",
    title: "Notebooks",
    description: "Powerful notebook tools for research, teaching, and content creation with NotebookLM and Colab.",
    icon: BookOpen,
    color: "bg-track-research",
    borderColor: "border-track-research",
    href: "/resources/notebooks",
    features: ["NotebookLM", "Google Colab", "Interactive"],
  },
  {
    id: "custom-gpts-gems",
    title: "Custom GPTs & Gems",
    description: "Create personalized AI assistants tailored to your specific teaching and research needs.",
    icon: Sparkles,
    color: "bg-track-kaizen",
    borderColor: "border-track-kaizen",
    href: "/resources/custom-gpts-gems",
    features: ["Custom GPTs", "Gemini Gems", "Specialized AI"],
  },
  {
    id: "claude-artifacts",
    title: "Claude Artifacts",
    description: "35+ interactive mini-apps and educational tools you can generate instantly with Claude AI.",
    icon: Code2,
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    href: "/resources/claude-artifacts",
    features: ["Quizzes & Simulations", "Visualizers", "Prompt-to-App"],
  },
  {
    id: "labs",
    title: "Interactive Labs",
    description: "Cloud-based AI workshops for hands-on learning with immediate feedback.",
    icon: Terminal,
    color: "bg-teal-500",
    borderColor: "border-teal-500",
    href: "/resources/labs",
    features: ["Guided Steps", "Live Terminal", "Cloud Playgrounds"],
  },
  {
    id: "planning-resources",
    title: "Planning Resources",
    description: "Strategic market forecasts and career planning tools to navigate the evolving AI landscape.",
    icon: BarChart3,
    color: "bg-indigo-600",
    borderColor: "border-indigo-600",
    href: "/resources/planning",
    features: ["Market Forecasts", "Career Paths", "Skill Gaps"],
  },
  {
    id: "reports-library",
    title: "Reports & Whitepapers",
    description: "A curated collection of high-impact AI reports spanning global trends, industry adoption, and education.",
    icon: BookOpen,
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    href: "/resources/reports",
    features: ["Global Trends", "Market Analysis", "Policy & Research"],
  },
  {
    id: "platforms-tools",
    title: "Platforms & Tools",
    description: "Curated AI platforms and developer tools for data preparation, model deployment, and building production-ready AI workflows.",
    icon: Wrench,
    color: "bg-violet-600",
    borderColor: "border-violet-600",
    href: "/resources/platforms-tools",
    features: ["Data Prep", "File Conversion", "RAG Pipelines"],
  },
];

const featuredResources = [
  {
    title: "AI for Everyone",
    category: "Course",
    description: "The gold standard non-technical introduction to AI foundations and strategy.",
    icon: GraduationCap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    href: "https://www.coursera.org/learn/ai-for-everyone",
    isExternal: true
  },
  {
    title: "Literature Summary",
    category: "Prompt",
    description: "Master prompt to distill key findings and identify gaps in research papers.",
    icon: FileText,
    categoryHref: "/resources/prompt-library",
    color: "text-accent",
    bgColor: "bg-accent/10",
    href: "/resources/prompt-library",
    isExternal: false
  },
  {
    title: "REVA Heartbreak Navigator",
    category: "Gem",
    description: "Specialized AI support for wellbeing and relationship challenges on campus.",
    icon: Sparkles,
    color: "text-track-kaizen",
    bgColor: "bg-track-kaizen/10",
    href: "https://gemini.google.com/gem/10iHlSX17PCGT1lrOPNJ0CK9WBMN2B5e9",
    isExternal: true
  },
  {
    title: "AI Launchpad for Students",
    category: "Artifact",
    description: "Interactive onboarding to discover AI tools and productivity workflows.",
    icon: Code2,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "https://claude.ai/public/artifacts/dfd5a01b-04d4-4993-b107-7677c04f2c33",
    isExternal: true
  },
  {
    title: "Interactive Labs",
    category: "Lab",
    description: "Master developer essentials for AI-native development with hands-on workshops.",
    icon: Terminal,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    href: "/resources/labs",
    isExternal: false
  },
  {
    title: "CS Market Forecast 2026-29",
    category: "Planning",
    description: "Comprehensive analysis of India's CS job market trends and talent crunch roles for 2026-2029.",
    icon: TrendingUp,
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/10",
    href: "/resources/planning",
    isExternal: false
  }
];

const Resources = () => {
  return (
    <Layout>
      <Helmet>
        <title>Resources &amp; Learning | REVA AI Hub</title>
        <meta name="description" content="Explore AI learning resources, prompt libraries, custom GPTs, Claude Artifacts, and research tools curated for REVA University." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resources & Learning
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Access our comprehensive collection of learning resources, prompts, notebooks, and AI tools to enhance your teaching and research.
            </p>
          </div>
        </div>
      </section>

      {/* Essential Toolkit Section */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Star className="h-3 w-3 fill-accent" />
                Featured Picks
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tight">
                Essential AI <span className="text-accent underline decoration-wavy underline-offset-8">Toolkit</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm md:text-base italic">
              "A hand-picked selection of high-impact resources to jumpstart your AI journey at REVA."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {featuredResources.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-white dark:bg-card rounded-2xl p-6 border border-border/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div className={cn("inline-flex p-3 rounded-xl mb-4 transition-colors", item.bgColor, item.color)}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">{item.category}</span>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {item.isExternal ? (
                    <Button variant="outline" size="sm" className="w-full rounded-lg text-xs gap-2 group-hover:bg-primary group-hover:text-white transition-all overflow-hidden relative" asChild>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        Try Now
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full rounded-lg text-xs gap-2 group-hover:bg-primary group-hover:text-white transition-all" asChild>
                      <Link to={item.href}>
                        Explore
                        <Zap className="h-3 w-3 fill-current" />
                      </Link>
                    </Button>
                  )}
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-muted/50 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {resources.map((resource, index) => (
              <Link
                key={resource.id}
                to={resource.href}
                className={cn(
                  "group relative bg-card rounded-2xl p-8 border-2 border-transparent hover:border-l-4 transition-all duration-300 card-shadow hover:card-shadow-hover",
                  `hover:${resource.borderColor}`
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Badge */}
                <div className={cn("inline-flex items-center justify-center w-14 h-14 rounded-xl text-white mb-4 shadow-md group-hover:scale-110 transition-transform", resource.color)}>
                  <resource.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="mb-3">
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.features.map((feature) => (
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
    </Layout>
  );
};

export default Resources;
