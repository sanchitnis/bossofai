import Layout from "@/components/layout/Layout";
import { Briefcase, Copy, Check, Info, ArrowRight, Wand2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const SimulationsCaseStudies = () => {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const promptText = `Act as a Senior Business Consultant and Case Study Designer. I want to create an immersive simulation or case study for my students/clients.

Industry: [E.G., RENEWABLE ENERGY IN SOUTH ASIA]
Core Challenge: [E.G., MANAGING GRID STABILITY WITH 40% INTERMITTENT SOURCES]
Target Audience: [E.G., MBA STUDENTS OR CORPORATE EXECUTIVES]

Please provide:
1. A 500-word Narrative Case Study establishing the "Protagonist" and the "Point of Failure."
2. Three "Strategic Dilemmas" that require high-stakes decision making.
3. A "Simulation Script" where the AI acts as a grumpy Board Member or a cautious Regulator whom the user must convince.
4. Data placeholders for a financial spreadsheet (e.g., CAPEX, OPEX, and ROI projections).`;

    const handleCopy = () => {
        navigator.clipboard.writeText(promptText);
        setCopied(true);
        toast({
            title: "Prompt Copied!",
            description: "Paste this into Gemini or any other AI tool.",
        });
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Layout>
            <div className="bg-background min-h-screen py-12 md:py-20">
                <div className="container max-w-4xl">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-track-consulting/10 text-track-consulting">
                            <Briefcase className="h-8 w-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold">Industry Simulations & Case Studies</h1>
                            <p className="text-muted-foreground">Bridging academia and industry through AI-powered immersive learning.</p>
                        </div>
                    </div>

                    {/* Consulting Pillars */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-card border rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold mb-3 flex items-center gap-2 text-track-consulting">
                                <Globe className="h-5 w-5" />
                                Real-World Context
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Use AI to generate diverse datasets and personas that reflect the actual complexities of the global market.
                            </p>
                        </div>
                        <div className="bg-card border rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold mb-3 flex items-center gap-2 text-track-consulting">
                                <Users2 className="h-5 w-5" />
                                Interactive Personas
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Let students negotiate with AI "stakeholders" to test their persuasion and leadership skills.
                            </p>
                        </div>
                    </div>

                    {/* The Prompt Box */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Wand2 className="h-5 w-5 text-track-consulting" />
                                Simulation Architect Prompt
                            </h3>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2"
                                onClick={handleCopy}
                            >
                                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                                {copied ? "Copied" : "Copy Prompt"}
                            </Button>
                        </div>
                        <div className="relative group">
                            <pre className="bg-muted p-8 rounded-2xl text-sm font-mono whitespace-pre-wrap leading-relaxed border-2 border-transparent group-hover:border-track-consulting/20 transition-all">
                                {promptText}
                            </pre>
                            <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none rounded-2xl" />
                        </div>
                    </div>

                    <div className="mt-12 text-center bg-muted/50 p-10 rounded-3xl border border-border">
                        <h3 className="font-bold mb-4">Partner with the Hub</h3>
                        <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
                            Need custom simulations for your consultancy project or industry collaboration?
                        </p>
                        <Button className="bg-track-consulting hover:bg-track-consulting/90" asChild>
                            <a href="mailto:consulting@bossofai.org">
                                Contact Consulting Lead
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

import { Users2 } from "lucide-react";

export default SimulationsCaseStudies;
