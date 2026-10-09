import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Search, FileText, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const promptCategories = ["All", "Teaching", "Research", "Administration", "Consulting", "Kaizen"];

import promptsData from "../../data/prompts.json";

const prompts = promptsData;

const PromptLibrary = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

    const filteredPrompts = prompts.filter((p) => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.prompt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const copyToClipboard = async (text: string, title: string) => {
        await navigator.clipboard.writeText(text);
        setCopiedPrompt(title);
        setTimeout(() => setCopiedPrompt(null), 2000);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                            <FileText className="h-4 w-4" />
                            Resources
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            REVA Prompt Library
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Ready-to-use prompts organized by the TRACK framework to accelerate your AI workflows.
                        </p>
                    </div>
                </div>
            </section>

            {/* Prompt Library */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container">
                    {/* Search & Filter */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search prompts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {promptCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                        activeCategory === cat
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Prompt Cards */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {filteredPrompts.map((item) => (
                            <div
                                key={item.title}
                                className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all shadow-sm"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <span className={cn(
                                            "text-xs font-medium px-2 py-1 rounded-full",
                                            item.category === "Teaching" && "bg-track-teaching/10 text-track-teaching",
                                            item.category === "Research" && "bg-track-research/10 text-track-research",
                                            item.category === "Administration" && "bg-track-admin/10 text-track-admin",
                                            item.category === "Consulting" && "bg-track-consulting/10 text-track-consulting",
                                            item.category === "Kaizen" && "bg-track-kaizen/10 text-track-kaizen",
                                        )}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-xs text-muted-foreground">{item.uses} uses</span>
                                        <span className="text-[10px] text-muted-foreground italic bg-muted px-1.5 py-0.5 rounded">
                                            Added by: {(item as any).contributor || "Sanjay Chitnis"}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.prompt}</p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                    onClick={() => copyToClipboard(item.prompt, item.title)}
                                >
                                    {copiedPrompt === item.title ? (
                                        <>
                                            <CheckCircle className="h-4 w-4 mr-2 text-track-admin" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-4 w-4 mr-2" />
                                            Copy Prompt
                                        </>
                                    )}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PromptLibrary;
