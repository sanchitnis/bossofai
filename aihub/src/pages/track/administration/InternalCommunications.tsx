import Layout from "@/components/layout/Layout";
import { MessageSquare, Copy, Check, Info, ArrowRight, Wand2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const InternalCommunications = () => {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const promptText = `Act as an expert University Communications Officer. Help me draft a professional internal message.

Context: [E.G., ANNOUNCING A NEW RESEARCH GRANT, REMINDER ABOUT EXAM SCHEDULES, OR INVITATION TO FACULTY GALA]
Key Points to Include:
- [POINT 1]
- [POINT 2]
- [POINT 3]
Target Audience: [E.G., ALL FACULTY, DEPARTMENT HEADS, OR RESEARCH SCHOLARS]
Desired Tone: [E.G., FORMAL, ENCOURAGING, URGENT, OR CELEBRATORY]

Please provide:
1. A compelling Subject Line.
2. A well-structured Email draft.
3. A shorter version (approx 100 words) for Microsoft Teams/Slack announcements.
4. A list of any specific call-to-actions students/faculty should take.`;

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
                            <MessageSquare className="h-8 w-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold">Internal Communications</h1>
                            <p className="text-muted-foreground">Draft professional emails, memos, and announcements in seconds.</p>
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="bg-card border rounded-2xl p-6 mb-8 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-1">
                                <Send className="h-5 w-5" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">Consistency is Key</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Maintaining a consistent, professional, and empathetic tone across all university communications helps build community.
                                    Use the template below to ensure your messages are clear and effective.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Prompt Box */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Wand2 className="h-5 w-5 text-track-admin" />
                                Communications Blueprint
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

                    {/* Tips */}
                    <div className="mt-12 bg-muted/20 border-l-4 border-track-admin p-6 rounded-r-2xl">
                        <h4 className="font-bold flex items-center gap-2 mb-2">
                            <Info className="h-5 w-5" />
                            Pro Tip
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Once Gemini provides a draft, you can follow up with:
                            <em>"Can you make this sound more encouraging?"</em> or
                            <em>"Can you rephrase the second paragraph to be more concise?"</em>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default InternalCommunications;
