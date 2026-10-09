import Layout from "@/components/layout/Layout";
import { Play, Clock, Zap, Sparkles, BookOpen, ExternalLink, GraduationCap, Terminal, Code, FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const colabScenarios = [
    {
        id: "fasttrack-python",
        title: "FastTrack Python",
        desc: "Essential Python for AI-native development. \n\n **IMPORTANT: FIRST SAVE A COPY OF THIS FILE TO WORK ON BY USING FILE MENU -> SAVE A COPY IN DRIVE**",
        difficulty: "Beginner",
        time: "45 min",
        icon: BookOpen,
        color: "emerald",
        url: "https://colab.research.google.com/drive/1mLT-ZA5pgy7_lEZjp2toYwzA1sFj8MGC"
    },
    {
        id: "nanobot-qwen",
        title: "Nanobot with Qwen2.5:7",
        desc: "Build a tiny, specialized AI agent using the powerful Qwen2.5 model. Explore local LLM deployment and agentic behavior.",
        difficulty: "Advanced",
        time: "40 min",
        icon: BookOpen,
        color: "orange",
        url: "https://colab.research.google.com/drive/1O5MN3XplRQfPbFudIcTNtJOh64B75Qlo#scrollTo=sg-vHKC5pOdZ"
    },
    {
        id: "micro-gpt",
        title: "MicroGPT Study",
        desc: "Deep dive into the architecture of minimalist GPT models. Understand how self-attention and transformers work from the inside out.",
        difficulty: "Advanced",
        time: "60 min",
        icon: Terminal,
        color: "orange",
        url: "https://github.com/NimritaKoul/microGPTStudyGroup/tree/main",
        contributor: "Nimrita Koul"
    }
];

const killercodaScenarios = [
    {
        id: "linux-foundations",
        title: "Linux Foundations",
        desc: "Master the Linux command line essentials - from navigation to file permissions.",
        difficulty: "Beginner",
        time: "25 min",
        icon: Terminal,
        color: "blue",
        url: "https://killercoda.com/pawelpiwosz/course/linuxFundamentals"
    },
    {
        id: "linux-advanced",
        title: "Linux Advanced",
        desc: "Deep dive into scripting, process management, and advanced Linux administration.",
        difficulty: "Intermediate",
        time: "30 min",
        icon: Terminal,
        color: "orange",
        url: "https://killercoda.com/pawelpiwosz/course/linuxAdvanced"
    },
    {
        id: "git-foundations",
        title: "Git Foundations",
        desc: "Interactive hands-on lab to master Git fundamentals - from init to branch management.",
        difficulty: "Beginner",
        time: "20 min",
        icon: Terminal,
        color: "emerald",
        url: "https://killercoda.com/pawelpiwosz/course/gitFundamentals/"
    },
    {
        id: "prompt-engineering-101",
        title: "Prompt Engineering 101",
        desc: "Master the art of effective prompting from zero-shot to chain-of-thought.",
        difficulty: "Beginner",
        time: "15 min",
        icon: Sparkles,
        color: "blue",
        url: "https://killercoda.com/reva-labs/course/developer-essentials/prompt-engineering-101"
    },
    {
        id: "ai-data-analysis",
        title: "AI-Powered Data Analysis",
        desc: "Learn to use AI to clean, analyze, and visualize data using Python and Pandas.",
        difficulty: "Intermediate",
        time: "20 min",
        icon: Terminal,
        color: "orange",
        url: "https://killercoda.com/reva-labs/course/developer-essentials/ai-data-analysis"
    },
    {
        id: "claude-artifacts-demo",
        title: "Building with Claude Artifacts",
        desc: "Generate, iterate, and deploy interactive mini-apps using Claude AI's unique features.",
        difficulty: "Beginner",
        time: "15 min",
        icon: Zap,
        color: "emerald",
        url: "https://killercoda.com/reva-labs/course/developer-essentials/claude-artifacts-demo"
    }
];

const colabFeatures = [
    {
        title: "Interactive Coding",
        description: "Write and execute Python code in your browser with no setup required.",
        icon: Code,
    },
    {
        title: "Free GPU Access",
        description: "Access free GPU and TPU resources for machine learning and data analysis tasks.",
        icon: Sparkles,
    },
    {
        title: "Easy Sharing",
        description: "Share notebooks with students and colleagues for collaborative research and teaching.",
        icon: FileText,
    },
];

const colabUseCases = [
    "Teach Python programming and data science courses",
    "Run machine learning experiments without local setup",
    "Analyze research data with pandas and visualization libraries",
    "Create interactive tutorials and assignments for students",
    "Prototype AI models before deployment",
];

const KillercodaScenarios = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            <Terminal className="h-4 w-4" />
                            Interactive Labs
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Interactive <span className="text-primary italic">AI Labs</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Learn by doing. Our Killercoda-powered labs provide a cloud-based environment where you can practice AI techniques, write code, and build tools in real-time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Google Colab Section */}
            <section className="py-16 md:py-20 bg-background border-b border-border">
                <div className="container px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600">
                                <Code className="h-6 w-6" />
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                                Google Colab Labs
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-12 leading-relaxed">
                            Google Colaboratory (Colab) is a free cloud-based Jupyter notebook environment that requires no setup.
                            Ideal for learning Python, conducting data analysis, and running LLM experiments with access to free GPU resources.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {colabScenarios.map((lab) => (
                                <div key={lab.id} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:border-primary/30 flex flex-col">
                                    <div className={cn(
                                        "h-2 w-full",
                                        lab.color === "blue" ? "bg-blue-500" : 
                                        lab.color === "orange" ? "bg-orange-500" : "bg-emerald-500"
                                    )} />
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={cn(
                                                "p-3 rounded-xl",
                                                lab.color === "blue" ? "bg-blue-500/10 text-blue-600" : 
                                                lab.color === "orange" ? "bg-orange-500/10 text-orange-600" : "bg-emerald-500/10 text-emerald-600"
                                            )}>
                                                <lab.icon className="h-6 w-6" />
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{lab.difficulty}</span>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                                                    <Clock className="h-3 w-3" />
                                                    {lab.time}
                                                </div>
                                                <span className="text-[8px] text-muted-foreground italic bg-muted/50 px-1.5 py-0.5 rounded mt-1">
                                                    Added by: {(lab as any).contributor || "Sanjay Chitnis"}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {lab.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 whitespace-pre-wrap">
                                            {lab.desc}
                                        </p>
                                        
                                        <a href={lab.url} target="_blank" rel="noopener noreferrer">
                                            <Button className="w-full gap-2 group/btn font-bold">
                                                Start Lab <Play className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Colab Features */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {colabFeatures.map((feature) => (
                                <div key={feature.title} className="bg-muted/30 rounded-xl p-6 border border-border/50">
                                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 w-fit mb-4">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-bold text-sm text-foreground mb-1">{feature.title}</h4>
                                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* KillerCoda Section */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600">
                                <Terminal className="h-6 w-6" />
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                                KillerCoda Labs
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-12 leading-relaxed">
                            Cloud-based workshop environments where you can practice Linux, Git, and AI agent development directly in your browser with zero installation.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {killercodaScenarios.map((lab) => (
                                <div key={lab.id} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:border-primary/30 flex flex-col">
                                    <div className={cn(
                                        "h-2 w-full",
                                        lab.color === "blue" ? "bg-blue-500" : 
                                        lab.color === "orange" ? "bg-orange-500" : "bg-emerald-500"
                                    )} />
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={cn(
                                                "p-3 rounded-xl",
                                                lab.color === "blue" ? "bg-blue-500/10 text-blue-600" : 
                                                lab.color === "orange" ? "bg-orange-500/10 text-orange-600" : "bg-emerald-500/10 text-emerald-600"
                                            )}>
                                                <lab.icon className="h-6 w-6" />
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{lab.difficulty}</span>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                                                    <Clock className="h-3 w-3" />
                                                    {lab.time}
                                                </div>
                                                <span className="text-[8px] text-muted-foreground italic bg-muted/50 px-1.5 py-0.5 rounded mt-1">
                                                    Added by: {(lab as any).contributor || "Sanjay Chitnis"}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {lab.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 whitespace-pre-wrap">
                                            {lab.desc}
                                        </p>
                                        
                                        <a href={lab.url} target="_blank" rel="noopener noreferrer">
                                            <Button className="w-full gap-2 group/btn font-bold">
                                                Start Lab <Play className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Killercoda? */}
            <section className="py-16 bg-muted/30 border-y border-border">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">How These Labs Work</h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-foreground">Guided Instructions</h4>
                                    <p className="text-sm text-muted-foreground">Follow step-by-step guides directly synchronized with a live terminal or playground.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Terminal className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-foreground">Zero Installation</h4>
                                    <p className="text-sm text-muted-foreground">No local setup required. Run Python, Node.js, or LLM tools right in your browser.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <GraduationCap className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-foreground">Verified Progress</h4>
                                    <p className="text-sm text-muted-foreground">Receive instant feedback on your progress and earn completion badges for your ascent.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <ExternalLink className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-foreground">Host Your Own</h4>
                                    <p className="text-sm text-muted-foreground">Are you a faculty member? You can contribute your own scenarios by creating a GitHub repository.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources CTA */}
            <section className="py-16 bg-primary text-white">
                <div className="container px-4 text-center">
                    <h2 className="font-display text-3xl font-bold mb-6">Ready to Master AI?</h2>
                    <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                        Combine these interactive labs with our courses and prompt libraries for a complete learning experience.
                    </p>
                    <div className="flex justify-center gap-4">
                       <a href="/resources">
                            <Button variant="hero" className="font-bold">
                                Browse All Resources
                            </Button>
                       </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default KillercodaScenarios;
