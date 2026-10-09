import Layout from "@/components/layout/Layout";
import { FileText, Copy, Check, Info, ArrowRight, Wand2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const PolicySummarizer = () => {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const promptText = `Act as a Policy Analyst for a Higher Education Institution. I will provide you with a policy document, a section of an academic regulation, or a government directive.

Your task is to:
1. Provide a concise executive summary of the document.
2. Extract the Top 5 most critical "Action Items" for University Staff.
3. List any deadlines or compliance requirements explicitly mentioned.
4. Identify any sections that might require legal or vertical-head consultation.
5. Create a "Simplified Version" in bullet points for quick reading by faculty.

Document Content:
[PASTE DOCUMENT TEXT HERE]`;

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
                        <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                            <FileText className="h-8 w-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold">Policy Summarizer</h1>
                            <p className="text-muted-foreground">Distill lengthy regulations into actionable insights.</p>
                        </div>
                    </div>

                    {/* Privacy Warning */}
                    <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-destructive/10 text-destructive mt-1">
                                <ShieldAlert className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-destructive">Data Privacy Reminder</h3>
                                <p className="text-sm text-destructive/80 leading-relaxed">
                                    Do not paste confidential or sensitive university records into public AI tools.
                                    For internal policies, use the University-approved AI instances or ensure you are following the <a href="/governance" className="underline font-bold">Responsible AI Policy</a>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="bg-card border rounded-2xl p-6 mb-8 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                                <Info className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">Recommendation: NotebookLM</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    For policy analysis, we strongly recommend using <strong>NotebookLM</strong>.
                                    By uploading the PDF directly, you ensure the AI's responses are grounded in the actual text and can provide citations for its summaries.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Prompt Box */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Wand2 className="h-5 w-5 text-accent" />
                                Summary & Analysis Prompt
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
                            <pre className="bg-muted p-8 rounded-2xl text-sm font-mono whitespace-pre-wrap leading-relaxed border-2 border-transparent group-hover:border-accent/20 transition-all">
                                {promptText}
                            </pre>
                            <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none rounded-2xl" />
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                            <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer">
                                Analyze with NotebookLM
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PolicySummarizer;
