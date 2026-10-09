import Layout from "@/components/layout/Layout";
import { Sparkles, Copy, Check, Info, ArrowRight, Wand2, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const StudentEngagement = () => {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const promptText = `Act as an expert in Active Learning and Gamification. Help me design an engaging classroom activity using Generative AI.

Topic: [E.G., RECURSION IN COMPUTER SCIENCE]
Class Size: [E.G., 60 STUDENTS]
Time Limit: [E.G., 20 MINUTES]

Please provide:
1. A "Role-Play" scenario where the AI acts as a personified concept or a historical figure (e.g., AI acts as a 'Bug' in a program that students must 'fix' through dialogue).
2. Four "AI-Powered Discussion Starters" tailored to this topic.
3. A short, fast-paced game or competition involving AI-generated visuals or riddles.
4. Instructions for students to use AI in small teams to synthesize a solution to a problem you define.`;

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
                            <Sparkles className="h-8 w-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold">Student Engagement Tools</h1>
                            <p className="text-muted-foreground">Level up your classroom participation with AI-driven active learning.</p>
                        </div>
                    </div>

                    {/* Strategies Grid */}
                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                        <div className="bg-card border rounded-2xl p-6 shadow-sm hover:border-track-teaching/30 transition-colors">
                            <Users2 className="h-6 w-6 text-track-teaching mb-4" />
                            <h4 className="font-bold mb-2">Collaborative AI</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Teams working with AI to solve complex puzzles or case studies.</p>
                        </div>
                        <div className="bg-card border rounded-2xl p-6 shadow-sm hover:border-track-teaching/30 transition-colors">
                            <Sparkles className="h-6 w-6 text-track-teaching mb-4" />
                            <h4 className="font-bold mb-2">AI Role-play</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Interactive "interviews" with AI historical figures or personified concepts.</p>
                        </div>
                        <div className="bg-card border rounded-2xl p-6 shadow-sm hover:border-track-teaching/30 transition-colors">
                            <Lightbulb className="h-6 w-6 text-track-teaching mb-4" />
                            <h4 className="font-bold mb-2">Debate & Critique</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Students critiquing AI-generated arguments to build critical thinking.</p>
                        </div>
                    </div>

                    {/* The Prompt Box */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Wand2 className="h-5 w-5 text-track-teaching" />
                                Engagement Activity Designer
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

                    {/* Implementation Tip */}
                    <div className="mt-12 bg-muted/30 border-l-4 border-track-teaching p-6 rounded-r-2xl">
                        <h4 className="font-bold flex items-center gap-2 mb-2 uppercase text-xs tracking-widest text-muted-foreground">
                            Pro Tip for Faculty
                        </h4>
                        <p className="text-sm text-foreground leading-relaxed">
                            <strong>Display the AI response on the large screen</strong> in your classroom.
                            Let students see the AI's "thought process" and then ask them to identify one strength and one flaw in its logic.
                            This turns a passive tool into an active debate.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

import { Lightbulb } from "lucide-react";

export default StudentEngagement;
