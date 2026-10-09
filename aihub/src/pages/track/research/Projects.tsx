import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Search, Github, ExternalLink, FileText, User, Calendar, Building2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import projectData from "@/data/reva-projects.json";
import { cn } from "@/lib/utils";

const Projects = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("All");

    const domains = ["All", ...new Set(projectData.map(p => p.domain))];

    const filteredProjects = projectData.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.faculty.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
            project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesDomain = selectedDomain === "All" || project.domain === selectedDomain;

        return matchesSearch && matchesDomain;
    });

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-br from-track-research/10 via-background to-primary/5 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            AI <span className="text-track-research">Projects</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Explore innovative research and student projects showcasing applied AI across various academic domains.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-30">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search projects, authors, or tags..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            {domains.map(domain => (
                                <button
                                    key={domain}
                                    onClick={() => setSelectedDomain(domain)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                                        selectedDomain === domain
                                            ? "bg-track-research text-white shadow-md shadow-track-research/20"
                                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    )}
                                >
                                    {domain}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 md:py-20 bg-muted/30 min-h-[400px]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 animate-fade-in group"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="p-6 flex-1 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="px-2.5 py-1 rounded-full bg-track-research/10 text-track-research text-[10px] font-bold uppercase tracking-wider">
                                            {project.domain}
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Calendar className="h-3 w-3" />
                                            {project.year}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-track-research transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                            <User className="h-3 w-3 text-muted-foreground" />
                                            {project.faculty.join(", ")}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Building2 className="h-3 w-3" />
                                            {project.department}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="flex items-center gap-1 px-2 py-1 rounded bg-muted text-muted-foreground text-[10px] font-medium">
                                                <Tag className="h-2 w-2" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 bg-muted/50 border-t border-border flex flex-wrap gap-2">
                                    {project.githubUrl && (
                                        <Button asChild variant="outline" size="sm" className="h-8 text-xs gap-1.5 rounded-lg">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-3 w-3" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                    {project.demoUrl && (
                                        <Button asChild variant="outline" size="sm" className="h-8 text-xs gap-1.5 rounded-lg">
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-3 w-3" />
                                                Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.paperUrl && (
                                        <Button asChild variant="outline" size="sm" className="h-8 text-xs gap-1.5 rounded-lg">
                                            <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                                                <FileText className="h-3 w-3" />
                                                Paper
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground italic">No projects found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-background">
                <div className="container text-center">
                    <h2 className="text-2xl font-bold mb-4">Want to showcase your project here?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        If you have implemented an AI project, we would love to feature it in the open AI Hub.
                    </p>
                    <Button asChild variant="research" size="lg">
                        <a href="mailto:projects@bossofai.org">Submit Your Project</a>
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default Projects;
