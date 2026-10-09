import { MessageSquare, Database, Sparkles, Send, FileCode, Cloud, ArrowRight } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const forumTopics = [
    { title: "Troubleshooting Drone RTK setup for field survey", author: "Rahul M.", replies: 12, category: "Hardware" },
    { title: "Best dataset for Rice leaf disease classification?", author: "Anjali K.", replies: 45, category: "Datasets" },
    { title: "New PyTorch model for soil moisture prediction", author: "Dr. Ramesh", replies: 8, category: "Deep Learning" },
];

const AgriCommunity = () => {
    return (
        <ResearchCenterLayout
            name="Agriculture X+AI"
            basePath="/track/research/agriculture"
            icon={MessageSquare}
            colorClass="text-green-600"
        >
            <div className="space-y-12">
                <header className="max-w-3xl">
                    <h1 className="font-display text-3xl font-bold mb-4">Collaboration & Community Tools</h1>
                    <p className="text-muted-foreground leading-relaxed">
                        The heart of our virtual center. Share datasets, troubleshoot code, and pitch new ideas to the community.
                    </p>
                </header>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Community Forum */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                            <MessageSquare className="h-6 w-6 text-blue-500" />
                            Community Forum
                        </h2>
                        <div className="bg-card border rounded-2xl divide-y shadow-sm">
                            <div className="p-6 bg-muted/20 flex items-center justify-between">
                                <span className="text-sm font-medium">Recent Discussions</span>
                                <Button size="sm">New Topic</Button>
                            </div>
                            {forumTopics.map((topic) => (
                                <div key={topic.title} className="p-6 hover:bg-muted/30 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                            {topic.category}
                                        </span>
                                        <span className="text-xs text-muted-foreground">started by <span className="font-bold text-foreground">{topic.author}</span></span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">{topic.title}</h3>
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                        <MessageSquare className="h-3 w-3" />
                                        {topic.replies} replies
                                    </div>
                                </div>
                            ))}
                            <div className="p-4 text-center">
                                <Button variant="ghost" size="sm" className="text-blue-600 font-bold">Visit Forum Interface →</Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebars */}
                    <div className="space-y-8">
                        {/* Resource Library */}
                        <section className="bg-card border rounded-2xl p-6 shadow-sm">
                            <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                                <Database className="h-5 w-5 text-green-600" />
                                Resource Library
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl border border-dashed border-border hover:border-green-600/30 hover:bg-green-50/20 transition-all cursor-pointer group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Cloud className="h-4 w-4 text-muted-foreground group-hover:text-green-600" />
                                        <span className="font-bold text-sm">Open Agri-Dataset v2</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">10k+ labeled images for pest detection.</p>
                                </div>
                                <div className="p-4 rounded-xl border border-dashed border-border hover:border-green-600/30 hover:bg-green-50/20 transition-all cursor-pointer group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FileCode className="h-4 w-4 text-muted-foreground group-hover:text-green-600" />
                                        <span className="font-bold text-sm">Weather Prediction Model</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">PyTorch weights for local cluster integration.</p>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full mt-6">Access Google Drive</Button>
                        </section>

                        {/* Newsletter */}
                        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white text-center">
                            <h3 className="font-bold mb-2">Expert Consultation</h3>
                            <p className="text-xs text-green-100 mb-6 leading-relaxed">Need help with your data? Connect with our AI Hub experts.</p>
                            <Button variant="secondary" className="w-full">Book a Slot</Button>
                        </div>
                    </div>
                </div>

                {/* Pitch Your Idea */}
                <section className="bg-green-50 border border-green-100 rounded-3xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex p-4 rounded-full bg-white shadow-sm mb-6">
                            <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-green-900 mb-4">Pitch Your Idea</h2>
                        <p className="text-green-800/70 mb-10 leading-relaxed">
                            Have a revolutionary idea for AI in Agriculture? Submit it here to find a mentor, recruit teammates, and potentially secure seed funding.
                        </p>

                        <form className="bg-white rounded-2xl p-8 shadow-xl text-left space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-green-900">Full Name</label>
                                    <Input placeholder="Enter your name" className="border-green-100 focus:border-green-600" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-green-900">Email Address</label>
                                    <Input placeholder="Enter your email" className="border-green-100 focus:border-green-600" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-green-900">Project Title</label>
                                <Input placeholder="What's your project called?" className="border-green-100 focus:border-green-600" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-green-900">Brief Pitch</label>
                                <Textarea placeholder="Explain the problem you're solving..." className="border-green-100 focus:border-green-600 min-h-[120px]" />
                            </div>
                            <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg font-bold">
                                Submit Pitch
                                <Send className="h-4 w-4 ml-2" />
                            </Button>
                        </form>
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

export default AgriCommunity;
