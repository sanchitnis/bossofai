import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Search, FileText, ExternalLink, Filter, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import reportsData from "../../data/reports.json";

const reportCategories = ["All", "Teaching", "Research", "Administration", "Consulting", "Kaizen"];

const ReportsLibrary = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredReports = reportsData.filter((r) => {
        const matchesSearch = 
            r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = activeCategory === "All" || r.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-500/10 via-background to-primary/5 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium mb-6">
                            <BookOpen className="h-4 w-4" />
                            Knowledge Base
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Reports & Whitepapers <span className="text-primary italic">Library</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A curated repository of high-impact AI reports spanning global macro trends, industry adoption, and education transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Library Content */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container">
                    {/* Search & Filter */}
                    <div className="flex flex-col lg:flex-row gap-6 mb-12">
                        <div className="relative flex-1 max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                placeholder="Search by title, keyword, or source (e.g. 'Marketing', 'McKinsey')..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 h-12 rounded-xl border-border/60 shadow-sm focus:ring-primary/20"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2 items-center">
                            <div className="flex items-center gap-2 mr-2 text-muted-foreground text-sm font-medium">
                                <Filter className="h-4 w-4" />
                                <span>Filter:</span>
                            </div>
                            {reportCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                                        activeCategory === cat
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                            : "bg-muted/50 text-muted-foreground hover:bg-muted"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Report Cards */}
                    {filteredReports.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredReports.map((report) => (
                                <div
                                    key={report.id}
                                    className="group flex flex-col bg-card rounded-2xl p-6 border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={cn(
                                            "text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full",
                                            report.category === "Teaching" && "bg-track-teaching/10 text-track-teaching",
                                            report.category === "Research" && "bg-track-research/10 text-track-research",
                                            report.category === "Administration" && "bg-track-admin/10 text-track-admin",
                                            report.category === "Consulting" && "bg-track-consulting/10 text-track-consulting",
                                            report.category === "Kaizen" && "bg-track-kaizen/10 text-track-kaizen",
                                        )}>
                                            {report.category}
                                        </div>
                                        <span className="text-xs font-bold text-muted-foreground/60">{report.year}</span>
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{report.source}</div>
                                        <h3 className="font-display text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                                            {report.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                                            {report.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {report.tags.map(tag => (
                                                <span key={tag} className="text-[10px] bg-muted px-2 py-0.5 rounded-md text-muted-foreground font-medium">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-border/40">
                                            <span className="text-[10px] text-muted-foreground italic">
                                                Added by: {report.contributor}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 gap-2 text-primary hover:text-primary hover:bg-primary/5 font-bold"
                                                asChild
                                            >
                                                <a href={report.url} target="_blank" rel="noopener noreferrer">
                                                    Open Report <ExternalLink className="h-3 w-3" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed border-border/60">
                            <Sparkles className="h-12 w-12 text-muted-foreground/30 mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">No reports found</h3>
                            <p className="text-muted-foreground text-center max-w-xs">
                                Try adjusting your search or filters to find what you're looking for.
                            </p>
                            <Button 
                                variant="link" 
                                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                                className="mt-4"
                            >
                                Reset all filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default ReportsLibrary;
