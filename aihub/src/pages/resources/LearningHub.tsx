import Layout from "@/components/layout/Layout";
import { GraduationCap, BookOpen, Award, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrackResourceWidget from "@/components/resources/TrackResourceWidget";


const LearningHub = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <GraduationCap className="h-4 w-4" />
                            Resources
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Learning Hub
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Curated courses and AI literacy modules to enhance your AI skills and knowledge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Recommended Courses & Resources */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Recommended Resources</h2>
                            <p className="text-sm text-muted-foreground mt-1">Filter by TRACK area, your level, learning stage, or preferred tool. Sort by community rating.</p>
                        </div>
                    </div>
                    <TrackResourceWidget track="All" />
                </div>
            </section>
            
            {/* Course Syllabus Portal */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-[#128C7E]/5 to-primary/5 rounded-[32px] border border-primary/10 p-8 md:p-12">
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                    <BookOpen className="h-3.5 w-3.5" />
                                    Accreditation Ready
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
                                    Course Syllabus Portal
                                </h2>
                                <p className="text-lg text-muted-foreground font-light mb-8 max-w-xl">
                                    Access official, versioned course syllabi and learning outcomes. Built for faculty and students using our searchable Docusaurus portal.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <Button asChild variant="hero" size="lg" className="rounded-full px-8">
                                        <a href="https://bossofai.org" target="_blank" rel="noopener noreferrer">
                                            Open Portal
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                                        <a href="https://bossofai.org" target="_blank" rel="noopener noreferrer">
                                            View Methodology
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full max-w-md">
                                <div className="grid gap-3">
                                    {[
                                        { title: "CS601: Machine Learning", code: "Jan 2025 - May 2025" },
                                        { title: "AI Foundations for All", code: "Aug 2025 - Dec 2025" },
                                        { title: "Prompt Engineering 101", code: "Skill Module" },
                                    ].map((course) => (
                                        <div key={course.title} className="bg-white/50 backdrop-blur-sm border border-border p-4 rounded-xl flex items-center justify-between hover:border-primary/30 transition-colors shadow-sm">
                                            <div>
                                                <h4 className="text-sm font-bold text-foreground">{course.title}</h4>
                                                <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">{course.code}</p>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-primary" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Literacy Modules */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-track-teaching/10 text-track-teaching">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                                AI Literacy Modules
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Introduction to Generative AI", desc: "Understanding the basics of how AI generates content", duration: "45 min" },
                                { title: "Common Misconceptions", desc: "Debunking myths and setting realistic expectations", duration: "30 min" },
                                { title: "Ethical AI Use", desc: "Privacy, attribution, and responsible deployment", duration: "60 min" },
                                { title: "Practical Applications", desc: "Hands-on exercises with AI tools", duration: "90 min" },
                            ].map((module) => (
                                <div key={module.title} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-semibold text-foreground mb-2">{module.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{module.desc}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">{module.duration}</span>
                                        <Button asChild size="sm">
                                            <Link to="/under-development">
                                                Start Module
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default LearningHub;
