import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Strategy = () => {
    return (
        <section className="py-10 md:py-16 bg-background relative overflow-hidden">
            <div className="container relative z-10 px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Strategic Framework
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                        Strategy
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />

                </div>

                <div className="max-w-6xl mx-auto bg-card rounded-[40px] p-4 md:p-8 border border-border shadow-2xl relative group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                    <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
                        <img
                            src="/srujana-pathway.png"
                            alt="Srujana Pathway Strategy Diagram"
                            className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://placehold.co/1200x600/1a1a1a/FFF?text=Srujana+Pathway+Image+Missing";
                                target.alt = "Please add srujana-pathway.png to public folder";
                            }}
                        />
                    </div>

                    <div className="flex justify-center mt-12 mb-4">
                        <Button asChild variant="hero" size="xl" className="rounded-full px-10 h-14 shadow-lg hover:shadow-primary/25 transition-all duration-300">
                            <Link to="/under-development">
                                Explore the Pathway
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Strategy;
