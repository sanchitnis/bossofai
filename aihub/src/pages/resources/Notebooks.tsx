import Layout from "@/components/layout/Layout";
import { BookOpen, ExternalLink, Lightbulb, Code, FileText, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const notebookLMFeatures = [
    {
        title: "Audio Overviews",
        description: "Generate AI-powered podcast-style discussions from your course materials and research papers.",
        icon: Play,
    },
    {
        title: "Source Grounding",
        description: "All AI responses are grounded in your uploaded sources with inline citations for verification.",
        icon: FileText,
    },
    {
        title: "Multi-Source Analysis",
        description: "Upload multiple documents and get synthesized insights across all your materials.",
        icon: Lightbulb,
    },
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

const notebookLMUseCases = [
    "Create course summaries from textbooks and lecture notes",
    "Generate study guides and review materials for students",
    "Synthesize research papers for literature reviews",
    "Prepare presentation materials from multiple sources",
    "Create audio overviews for accessibility and learning",
];

const colabUseCases = [
    "Teach Python programming and data science courses",
    "Run machine learning experiments without local setup",
    "Analyze research data with pandas and visualization libraries",
    "Create interactive tutorials and assignments for students",
    "Prototype AI models before deployment",
];

const Notebooks = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <BookOpen className="h-4 w-4" />
                            Resources
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Notebooks
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Powerful notebook tools for research, teaching, and content creation.
                        </p>
                    </div>
                </div>
            </section>

            {/* NotebookLM Section */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                                NotebookLM
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            NotebookLM is Google's AI-powered research and note-taking tool that helps you understand complex materials,
                            generate insights, and create content from your sources. Perfect for course design, research synthesis, and
                            creating engaging learning materials.
                        </p>

                        {/* Features */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {notebookLMFeatures.map((feature) => (
                                <div key={feature.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Use Cases */}
                        <div className="bg-muted/30 rounded-xl p-6 mb-6">
                            <h3 className="font-semibold text-foreground mb-4">Use Cases for Faculty</h3>
                            <div className="space-y-3">
                                {notebookLMUseCases.map((useCase, index) => (
                                    <div key={useCase} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-xs shrink-0 mt-0.5">
                                            {index + 1}
                                        </div>
                                        <span className="text-muted-foreground">{useCase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg">
                                <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer">
                                    Open NotebookLM
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href="https://support.google.com/notebooklm" target="_blank" rel="noopener noreferrer">
                                    Learn More
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Notebooks;
