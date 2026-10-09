import { MessageSquare, Send, Trophy, Users, Lightbulb, Calendar } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const discussions = [
    { author: "Arjun Mehta", role: "M.Tech Student", time: "2h ago", message: "Anyone working on sim-to-real for manipulation? Looking for teammates for the upcoming ICRA challenge.", replies: 5 },
    { author: "Dr. Priya Iyer", role: "Faculty", time: "5h ago", message: "The new NVIDIA Isaac Lab environment is now set up in the Smart Mfg Lab. Students, please book slots via the portal.", replies: 12 },
    { author: "Rohan Verma", role: "B.Tech Final Year", time: "1d ago", message: "Sharing my project report on SwarmSort implementation — any feedback is appreciated!", replies: 8 },
];

const events = [
    { title: "ROS 2 Hackathon — Autonomous Pick & Place", date: "Mar 15, 2025", type: "Hackathon" },
    { title: "Guest Lecture: Physical AI at Scale — Dr. Pulkit Agrawal (MIT)", date: "Mar 29, 2025", type: "Lecture" },
    { title: "Industry Visit: Bosch India Smart Factory Tour", date: "Apr 12, 2025", type: "Visit" },
    { title: "Annual Robotics Expo — AI & Robotics Summit 2025", date: "May 3, 2025", type: "Expo" },
];

const typeStyle: Record<string, string> = {
    "Hackathon": "bg-orange-100 text-orange-700",
    "Lecture": "bg-blue-100 text-blue-700",
    "Visit": "bg-green-100 text-green-700",
    "Expo": "bg-purple-100 text-purple-700",
};

const SmartMfgCommunity = () => {
    return (
        <ResearchCenterLayout
            name="Smart Manufacturing X+AI"
            basePath="/track/research/smart-manufacturing"
            icon={MessageSquare}
            colorClass="text-cyan-600"
        >
            <div className="space-y-12">
                <header className="max-w-3xl">
                    <h1 className="font-display text-3xl font-bold mb-4">Community</h1>
                    <p className="text-muted-foreground leading-relaxed">
                        The heart of the Smart Manufacturing X+AI Center — a collaborative space for students, faculty, and industry professionals to connect, share ideas, and build together.
                    </p>
                </header>

                {/* Discussion Board */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <MessageSquare className="h-6 w-6 text-cyan-600" />
                        Discussion Board
                    </h2>
                    <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                        {discussions.map((d, i) => (
                            <div key={i} className="p-6 border-b last:border-0 hover:bg-muted/30 transition-colors group cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm">
                                        {d.author.split(" ").map((n) => n[0]).join("")}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-semibold text-sm">{d.author}</span>
                                            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{d.role}</span>
                                            <span className="text-xs text-muted-foreground ml-auto">{d.time}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{d.message}</p>
                                        <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                                            <MessageSquare className="h-3.5 w-3.5" />
                                            {d.replies} replies
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="p-4 border-t bg-muted/20">
                            <div className="flex gap-3">
                                <Input placeholder="Share an idea, ask a question, or post a resource..." className="flex-1" />
                                <Button className="bg-cyan-600 hover:bg-cyan-700 gap-2 shrink-0">
                                    <Send className="h-4 w-4" />Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Events */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-cyan-600" />
                        Upcoming Events
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {events.map((ev) => (
                            <div key={ev.title} className="bg-card border rounded-xl p-5 shadow-sm hover:border-cyan-500/30 hover:shadow-md transition-all group cursor-pointer flex items-start gap-4">
                                <div className="shrink-0 text-center">
                                    <div className="text-2xl font-black text-foreground">{ev.date.split(" ")[1].replace(",", "")}</div>
                                    <div className="text-xs font-semibold text-muted-foreground">{ev.date.split(" ")[0]}</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold group-hover:text-cyan-600 transition-colors mb-2 leading-tight">{ev.title}</h3>
                                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${typeStyle[ev.type]}`}>
                                        {ev.type}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Idea Submit CTA */}
                <section className="bg-cyan-50 border border-cyan-100 rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="shrink-0 p-6 rounded-2xl bg-cyan-100 text-cyan-600">
                            <Lightbulb className="h-12 w-12" />
                        </div>
                        <div className="flex-1">
                            <h2 className="font-display text-2xl font-bold text-cyan-900 mb-3">Have a Bold Idea?</h2>
                            <p className="text-cyan-800/70 max-w-2xl leading-relaxed mb-6">
                                Have a revolutionary idea for AI in Smart Manufacturing? Submit it here to find a faculty mentor, recruit teammates, and potentially secure seed funding from the Center.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                                    <Trophy className="h-4 w-4 mr-2" />Submit Your Idea
                                </Button>
                                <Button variant="outline" size="lg" className="border-cyan-300 text-cyan-700 hover:bg-cyan-100">
                                    <Users className="h-4 w-4 mr-2" />Find a Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

export default SmartMfgCommunity;
