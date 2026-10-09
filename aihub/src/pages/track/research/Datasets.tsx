import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Search, Download, FileText, Mail, Database, ShieldCheck, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import datasetData from "@/data/reva-datasets.json";
import { cn } from "@/lib/utils";

const Datasets = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFormat, setSelectedFormat] = useState("All");

    const formats = ["All", ...new Set(datasetData.map(d => d.format))];

    const filteredDatasets = datasetData.filter(dataset => {
        const matchesSearch = dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dataset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dataset.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesFormat = selectedFormat === "All" || dataset.format === selectedFormat;

        return matchesSearch && matchesFormat;
    });

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-br from-track-research/10 via-background to-primary/5 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            AI <span className="text-track-research">Datasets</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Open dataset registry for researchers and students. Access curated datasets from academic and open science initiatives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-30">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search datasets, categories, or keywords..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            <span className="text-sm font-medium text-muted-foreground mr-2 shrink-0">Format:</span>
                            {formats.map(format => (
                                <button
                                    key={format}
                                    onClick={() => setSelectedFormat(format)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap",
                                        selectedFormat === format
                                            ? "bg-track-research text-white"
                                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    )}
                                >
                                    {format}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Datasets List */}
            <section className="py-16 md:py-20 bg-muted/30 min-h-[400px]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {filteredDatasets.map((dataset, index) => (
                            <div
                                key={dataset.id}
                                className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* Visual Icon Area */}
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-track-research/5 flex items-center justify-center text-track-research shadow-inner border border-track-research/10">
                                        <Database className="h-8 w-8" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-wrap justify-between items-start gap-2">
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                                            {dataset.title}
                                        </h3>
                                        <div className="px-3 py-1 bg-track-research text-white text-[10px] font-bold uppercase tracking-wider rounded-lg flex items-center gap-1">
                                            <ShieldCheck className="h-3 w-3" />
                                            {dataset.license}
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {dataset.description}
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2 border-y border-border/50">
                                        <div className="space-y-0.5">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Size</span>
                                            <p className="text-xs font-bold">{dataset.size}</p>
                                        </div>
                                        <div className="space-y-0.5">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Format</span>
                                            <p className="text-xs font-bold">{dataset.format}</p>
                                        </div>
                                        <div className="space-y-0.5">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Records</span>
                                            <p className="text-xs font-bold">{dataset.records}</p>
                                        </div>
                                        <div className="space-y-0.5">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Year</span>
                                            <p className="text-xs font-bold">{dataset.year}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {dataset.tags.map(tag => (
                                            <span key={tag} className="flex items-center gap-1 px-2.5 py-1 rounded bg-muted text-muted-foreground text-[10px] font-bold">
                                                <Tag className="h-2 w-2" />
                                                {tag.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        {dataset.downloadUrl ? (
                                            <Button asChild className="rounded-xl flex-1 md:flex-none">
                                                <a href={dataset.downloadUrl} target="_blank" rel="noopener noreferrer">
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Download
                                                </a>
                                            </Button>
                                        ) : (
                                            <Button asChild variant="outline" className="rounded-xl flex-1 md:flex-none">
                                                <a href={`mailto:${dataset.contactEmail}`}>
                                                    <Mail className="h-4 w-4 mr-2" />
                                                    Request Access
                                                </a>
                                            </Button>
                                        )}
                                        {dataset.paperUrl && (
                                            <Button asChild variant="ghost" className="rounded-xl flex-1 md:flex-none">
                                                <a href={dataset.paperUrl} target="_blank" rel="noopener noreferrer">
                                                    <FileText className="h-4 w-4 mr-2" />
                                                    Read Paper
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredDatasets.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground italic">No datasets found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contribution Section */}
            <section className="py-16 bg-background">
                <div className="container text-center max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Contribute to the Registry</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        Have you generated or curated a dataset that could benefit the research and student community? Share it here and contribute to open science.
                    </p>
                    <Button asChild variant="default" size="lg" className="rounded-xl h-14 px-8">
                        <a href="mailto:datasets@bossofai.org">Register a Dataset</a>
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default Datasets;
