import { Cpu, Target, ShieldCheck, Zap, Newspaper, ArrowRight, Bot, Cog, Layers } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
    { label: "Active Projects", value: "9", icon: Target },
    { label: "Publications", value: "31", icon: Newspaper },
    { label: "Faculty Members", value: "11", icon: ShieldCheck },
    { label: "Student Researchers", value: "38", icon: Zap },
];

const news = [
    { date: "Feb 14, 2025", title: "Smart Mfg Lab receives ₹50L grant from DST for Physical AI research" },
    { date: "Jan 28, 2025", title: "Collaborative Robotics workshop with industry partners — registrations open" },
    { date: "Jan 10, 2025", title: "Team AutoSys wins 1st place at IIT Bombay Autonomous Systems Challenge" },
];

const pillars = [
    {
        icon: Bot,
        title: "Autonomous Systems",
        desc: "Self-governing machines that perceive, decide, and act — from mobile robots on factory floors to automated inspection drones.",
    },
    {
        icon: Cpu,
        title: "Physical AI",
        desc: "AI models trained to understand and interact with the physical world, bridging the gap between digital intelligence and tangible machinery.",
    },
    {
        icon: Cog,
        title: "Robotics & Automation",
        desc: "Design and deployment of both collaborative (cobot) and fully autonomous robotic systems for precision manufacturing tasks.",
    },
    {
        icon: Layers,
        title: "Digital Twin & Process Intelligence",
        desc: "Real-time virtual replicas of manufacturing systems enabling predictive analytics, simulation, and zero-downtime optimization.",
    },
];

const SmartMfgLanding = () => {
    return (
        <ResearchCenterLayout
            name="Smart Manufacturing X+AI"
            basePath="/track/research/smart-manufacturing"
            icon={Cpu}
            colorClass="text-cyan-600"
        >
            <div className="space-y-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 md:p-12 lg:p-16">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <circle cx="650" cy="100" r="200" fill="#06b6d4" />
                            <circle cx="720" cy="320" r="120" fill="#3b82f6" />
                        </svg>
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
                            <Cpu className="h-4 w-4" />
                            Interdisciplinary X+AI Center
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Building the Factory <br />
                            <span className="text-cyan-400">of Tomorrow, Today.</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Fusing autonomous systems, physical AI, and precision robotics to redefine how India manufactures — intelligently, safely, and at scale.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold">
                                <Link to="/track/research/smart-manufacturing/academy">
                                    Join the School
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                                <Link to="/track/research/smart-manufacturing/research">
                                    View Research
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card border rounded-2xl p-8 shadow-sm">
                        <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-cyan-600 rounded-full" />
                            Our Mission
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To develop cutting-edge AI-driven manufacturing technologies — from autonomous robotic systems to physical AI — that enable Indian industry to compete on the global stage while creating highly skilled, future-ready engineers.
                        </p>
                    </div>
                    <div className="bg-card border rounded-2xl p-8 shadow-sm">
                        <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-cyan-600 rounded-full" />
                            Our Vision
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To be India's leading interdisciplinary research hub where AI, robotics, and manufacturing science converge — pioneering autonomous systems and physical AI solutions that transform production and create a self-reliant industrial ecosystem.
                        </p>
                    </div>
                </div>

                {/* Research Pillars */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold">Research Pillars</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {pillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="bg-card border rounded-2xl p-6 shadow-sm flex gap-4 hover:border-cyan-500/30 transition-colors"
                            >
                                <div className="shrink-0 p-3 rounded-xl bg-cyan-50 text-cyan-600 h-fit">
                                    <pillar.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dashboard & News */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Dashboard */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="font-display text-2xl font-bold">Center at a Glance</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-background border rounded-xl p-6 flex items-center gap-4 hover:border-cyan-600/30 transition-colors shadow-sm">
                                    <div className="p-3 rounded-lg bg-cyan-50 text-cyan-600">
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-foreground">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Why Smart Manufacturing */}
                        <div className="bg-cyan-50/50 border border-cyan-100 rounded-2xl p-8 mt-4">
                            <h2 className="font-display text-2xl font-bold text-cyan-900 mb-4">Why Smart Manufacturing?</h2>
                            <div className="space-y-4 text-cyan-800/80 leading-relaxed font-medium">
                                <p>
                                    India's manufacturing sector contributes ~17% of GDP and employs millions. Yet, global competitiveness demands a leap
                                    toward intelligent, automated, and data-driven production systems.
                                </p>
                                <p>
                                    Physical AI and autonomous systems are reshaping how products are designed, assembled, and quality-checked — making
                                    factories faster, safer, and dramatically more efficient. The Smart Manufacturing X+AI Center is at the forefront of this industrial revolution.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* News Ticker */}
                    <div className="bg-card border rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="font-display text-xl font-bold">Latest Updates</h2>
                            <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-[10px] font-bold uppercase rounded tracking-wider">Live</span>
                        </div>
                        <div className="space-y-6">
                            {news.map((item, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="text-xs font-bold text-cyan-600 mb-1">{item.date}</div>
                                    <h3 className="font-semibold text-foreground group-hover:text-cyan-600 transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    {i < news.length - 1 && <div className="h-px bg-border mt-6" />}
                                </div>
                            ))}
                        </div>
                        <Button variant="ghost" className="w-full mt-6 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50">
                            View All News
                        </Button>
                    </div>
                </div>
                {/* Explore the Center */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold">Explore the Center</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { to: "/track/research/smart-manufacturing/academy", label: "Academy", desc: "Courses & AI learning modules", color: "bg-cyan-600" },
                            { to: "/track/research/smart-manufacturing/research", label: "Research", desc: "Projects, publications & labs", color: "bg-blue-700" },
                            { to: "/track/research/smart-manufacturing/partnerships", label: "Partnerships", desc: "Industry & government collaborators", color: "bg-indigo-700" },
                            { to: "/track/research/smart-manufacturing/community", label: "Community", desc: "Events, network & outreach", color: "bg-sky-700" },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="group bg-card border rounded-2xl p-6 hover:border-cyan-600/40 hover:shadow-md transition-all"
                            >
                                <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold text-foreground mb-1 group-hover:text-cyan-700 transition-colors">{item.label}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

export default SmartMfgLanding;
