import Layout from "@/components/layout/Layout";
import { Sparkles, Copy, Check, Info, ArrowRight, Wand2, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AITutor = () => {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const promptText = `Act as my Personalized AI Tutor and Mentor. I want to master a new skill or concept.

My Target Skill: [E.G., ADVANCED DATA VISUALIZATION WITH D3.JS]
My Current Level: [E.G., BEGINNER IN JAVASCRIPT, NO EXPERIENCE WITH SVG]
My Goal: [E.G., BUILD AN INTERACTIVE DASHBOARD FOR RESEARCH DATA]

Please provide:
1. A "10-Step Personalized Roadmap" starting from my current level.
2. A "Resource List" including a mix of free documentation, key concepts, and project ideas.
3. A "Knowledge Check": Ask me three open-ended questions to test my foundational understanding.
4. "The Explain-Like-I'm-Five (ELI5) version" of the most difficult part of this skill.
5. Set up a "Socratic Dialogue" where you help me solve a small starter problem without giving me the direct code.`;

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
                        <div className="p-3 rounded-2xl bg-track-kaizen/10 text-track-kaizen">
                            <Sparkles className="h-8 w-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold">Personalized AI Tutor</h1>
                            <p className="text-muted-foreground">Continuous self-development with custom AI learning pathways.</p>
                        </div>
                    </div>

                    {/* Kaizen Philosophy */}
                    <div className="bg-gradient-to-br from-track-kaizen/20 to-track-kaizen/5 border border-track-kaizen/20 rounded-3xl p-8 mb-12 flex items-center gap-8">
                        <div className="hidden md:block shrink-0">
                            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                                <BrainCircuit className="h-12 w-12 text-track-kaizen" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Kaizen: Small steps to massive change</h3>
                            <p className="text-sm text-foreground/80 leading-relaxed">
                                Personal development shouldn't be overwhelming. By using AI as a tutor, you can bridge skill gaps in your own time, at your own pace, with a mentor that's always available.
                            </p>
                        </div>
                    </div>

                    {/* The Prompt Box */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Wand2 className="h-5 w-5 text-track-kaizen" />
                                Tutor Activation Prompt
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
                            <pre className="bg-muted p-8 rounded-2xl text-sm font-mono whitespace-pre-wrap leading-relaxed border-2 border-transparent group-hover:border-track-kaizen/20 transition-all">
                                {promptText}
                            </pre>
                            <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none rounded-2xl" />
                        </div>
                    </div>

                    {/* Verification */}
                    <div className="mt-12 p-8 border border-dashed rounded-3xl">
                        <h4 className="font-bold mb-4 flex items-center gap-2">
                            <Info className="h-5 w-5 text-track-kaizen" />
                            How to Verify Your Progress
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            After completing a module with your AI tutor, try explaining the concept to a colleague or building a small "Hello World" project. True mastery is demonstrated through application.
                        </p>
                        <Button variant="outline" className="w-full" asChild>
                            <a href="/track/kaizen">
                                Return to Kaizen Dashboard
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AITutor;
