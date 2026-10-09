import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Calendar, Tag, ArrowRight, ExternalLink, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import newsData from "@/data/news.json";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const News = () => {
    // Sort news latest first
    const sortedNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <Layout>
            <Helmet>
                <title>News &amp; Updates | BossOfAI Hub</title>
                <meta name="description" content="Stay up to date with the latest AI news, events, workshops, and announcements." />
            </Helmet>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                            <Bell className="h-4 w-4" />
                            Latest Announcements
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                            News & <span className="text-primary">Updates</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Stay informed about the latest events, AI developments, and community achievements.
                        </p>
                    </div>
                </div>
            </section>

            {/* News Feed */}
            <section className="py-16 bg-background">
                <div className="container max-w-5xl">
                    <div className="space-y-12">
                        {sortedNews.map((item, index) => (
                            <article
                                key={item.id}
                                className={cn(
                                    "relative group bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-500 animate-slide-up bg-opacity-50 backdrop-blur-sm",
                                    item.important && "border-primary/20 bg-primary/[0.02]"
                                )}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Visual Accent */}
                                {item.important && (
                                    <div className="absolute -top-3 left-8 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                                        Important
                                    </div>
                                )}

                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Meta Column */}
                                    <div className="md:w-48 shrink-0 space-y-4">
                                        <div className="flex items-center gap-2 text-muted-foreground font-medium">
                                            <Calendar className="h-4 w-4" />
                                            {new Date(item.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-foreground text-xs font-semibold">
                                            <Tag className="h-3 w-3" />
                                            {item.category}
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="flex-1 space-y-6">
                                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h2>

                                        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
                                        </div>

                                        {item.links && item.links.length > 0 && (
                                            <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                                                {item.links.map((link) => (
                                                    <Button
                                                        key={link.label}
                                                        asChild
                                                        variant={link.primary ? "default" : "outline"}
                                                        className={cn(
                                                            "rounded-xl font-semibold px-6",
                                                            link.primary && "shadow-lg shadow-primary/20"
                                                        )}
                                                    >
                                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                            {link.label}
                                                            {link.primary ? (
                                                                <ArrowRight className="h-4 w-4 ml-2" />
                                                            ) : (
                                                                <ExternalLink className="h-4 w-4 ml-2" />
                                                            )}
                                                        </a>
                                                    </Button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {sortedNews.length === 0 && (
                        <div className="text-center py-20 bg-muted/30 rounded-3xl border-2 border-dashed border-border">
                            <p className="text-muted-foreground italic">No updates available at the moment. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default News;
