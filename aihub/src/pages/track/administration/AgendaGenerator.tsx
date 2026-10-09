import Layout from "@/components/layout/Layout";
import { Calendar, Copy, Check, Info, ArrowRight, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AgendaGenerator = () => {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const promptText = `Act as an expert Academic Administrator. I will provide you with rough notes, key discussion points, or a simple list of topics from a meeting. 

Your task is to:
1. Create a structured, professional meeting agenda.
2. Allocate realistic time durations for each topic.
3. Identify the likely lead person for each section (if not specified, leave a placeholder).
4. Include sections for "Action Items" and "AOB" (Any Other Business).
5. Ensure the tone is formal and suitable for a University department meeting.

Rough Notes:
[INSERT YOUR NOTES HERE]`;

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
                        <div className="p-3 rounded-2xl bg-track-admin/10 text-track-admin">
                            <Calendar className="h-8 w-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold">Meeting Agenda Generator</h1>
                            <p className="text-muted-foreground">Transform disorganized notes into structured, professional agendas.</p>
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="bg-card border rounded-2xl p-6 mb-8 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                                <Info className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">How to use this tool</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    This "tool" is a pre-engineered prompt designed to get the best results from Large Language Models like Gemini.
                                    Copy the prompt below and paste it into your preferred AI chat interface.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Prompt Box */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Wand2 className="h-5 w-5 text-track-admin" />
                                The Optimized Prompt
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
                            <pre className="bg-muted p-8 rounded-2xl text-sm font-mono whitespace-pre-wrap leading-relaxed border-2 border-transparent group-hover:border-track-admin/20 transition-all">
                                {promptText}
                            </pre>
                            <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none rounded-2xl" />
                        </div>
                    </div>

                    {/* Recommended Tools */}
                    <div className="mt-12 grid sm:grid-cols-2 gap-6">
                        <div className="bg-muted/30 border rounded-2xl p-6">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-track-admin" />
                                Best with Gemini
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                Use Gemini for quick drafting and email integration.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-track-admin" asChild>
                                <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
                                    Open Gemini <ArrowRight className="h-3 w-3 ml-1" />
                                </a>
                            </Button>
                        </div>
                        <div className="bg-muted/30 border rounded-2xl p-6">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                Best with NotebookLM
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                Use NotebookLM if you have many source documents or past meeting minutes.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-primary" asChild>
                                <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer">
                                    Open NotebookLM <ArrowRight className="h-3 w-3 ml-1" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AgendaGenerator;
