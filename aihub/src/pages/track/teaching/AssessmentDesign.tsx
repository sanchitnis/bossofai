import Layout from "@/components/layout/Layout";
import { ShieldCheck, Copy, Check, Info, ArrowRight, Wand2, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AssessmentDesign = () => {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const promptText = `Act as an Educational Designer specializing in AI-Ready Assessment. I want to redesign a traditional assessment to be more "AI-Resilient" or "AI-Augmented."

Current Assessment: [E.G., A 2000-WORD ESSAY ON THE HISTORY OF ROME]
Learning Objective: [E.G., DEMONSTRATE CRITICAL ANALYSIS OF PRIMARY SOURCES]

Please provide:
1. Three alternative assessment formats that require higher-order thinking (e.g., Socratic viva, reflective journals on AI drafts, or case study transformations).
2. A "Socratic Prompt" I can give to students to use with an AI tutor for this specific topic.
3. A rubric that explicitly evaluates "Human Insight" and "Critical Verification of AI Content."
4. Suggestions for "Process-Based" grading vs. "Product-Based" grading for this task.`;

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
                        <div className="p-3 rounded-2xl bg-track-teaching/10 text-track-teaching">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold">AI-Ready Assessment Design</h1>
                            <p className="text-muted-foreground">Evolve your evaluations to measure genuine learning in the age of AI.</p>
                        </div>
                    </div>

                    {/* Intro Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-card border rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                                <RefreshCcw className="h-5 w-5 text-track-teaching" />
                                From Product to Process
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Shift the focus from the final submission to the journey of learning.
                                AI-Ready assessments value the draft, the critique, and the refinement.
                            </p>
                        </div>
                        <div className="bg-card border rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-green-600" />
                                Resilient & Authentic
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Design tasks that are inherently difficult for AI to complete alone,
                                such as those requiring local context, personal reflection, or live defense.
                            </p>
                        </div>
                    </div>

                    {/* The Prompt Box */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Wand2 className="h-5 w-5 text-track-teaching" />
                                Assessment Redesign Prompt
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
                            <pre className="bg-muted p-8 rounded-2xl text-sm font-mono whitespace-pre-wrap leading-relaxed border-2 border-transparent group-hover:border-track-teaching/20 transition-all">
                                {promptText}
                            </pre>
                            <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none rounded-2xl" />
                        </div>
                    </div>

                    {/* Additional Resources */}
                    <div className="mt-12 bg-blue-50 border border-blue-100 rounded-3xl p-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="space-y-4 flex-1">
                                <h3 className="text-xl font-bold text-blue-900">Need a rubric template?</h3>
                                <p className="text-blue-800/70">
                                    We have a collection of AI-ready rubrics tailored for different departments.
                                </p>
                                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                                    <a href="/assessment-vault">
                                        Visit Assessment Vault
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </a>
                                </Button>
                            </div>
                            <div className="hidden md:block w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-blue-100 italic font-display font-black text-blue-200 text-4xl">
                                A+
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AssessmentDesign;
