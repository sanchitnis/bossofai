import { Leaf, Target, ShieldCheck, Zap, Newspaper, ArrowRight } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
    { label: "Active Projects", value: "12", icon: Target },
    { label: "Publications", value: "45", icon: Newspaper },
    { label: "Faculty Members", value: "8", icon: ShieldCheck },
    { label: "Student Researchers", value: "24", icon: Zap },
];

const news = [
    { date: "Oct 24, 2024", title: "New Grant for Precision Irrigation awarded by DST" },
    { date: "Oct 15, 2024", title: "Faculty Workshop on Satellite Imagery Analysis next week" },
    { date: "Sep 28, 2024", title: "Team Agri-AI wins National Hackathon for Pest Prediction" },
];

const AgriLanding = () => {
    return (
        <ResearchCenterLayout
            name="Agriculture X+AI"
            basePath="/track/research/agriculture"
            icon={Leaf}
            colorClass="text-green-600"
        >
            <div className="space-y-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl bg-green-950 text-white p-8 md:p-12 lg:p-16">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <Leaf className="w-full h-full rotate-12" />
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Cultivating the Future <br />
                            <span className="text-green-400">with Intelligence.</span>
                        </h1>
                        <p className="text-xl text-green-100/80 mb-8 leading-relaxed">
                            Bridging the gap between traditional farming and modern AI to ensure food security and sustainable practices across India.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild variant="secondary" size="lg">
                                <Link to="/track/research/agriculture/academy">
                                    Join the School
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card border rounded-2xl p-8 shadow-sm">
                        <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-green-600 rounded-full" />
                            Our Mission
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To empower the agricultural ecosystem by developing accessible, scalable AI solutions that optimize resource usage, improve yield, and mitigate climate risks for Indian farmers.
                        </p>
                    </div>
                    <div className="bg-card border rounded-2xl p-8 shadow-sm">
                        <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-green-600 rounded-full" />
                            Our Vision
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To be the premier national hub for AI-Agri integration, where technology serves as a natural extension of traditional wisdom to create a self-reliant agricultural future.
                        </p>
                    </div>
                </div>

                {/* Dashboard & News */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Dashboard */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="font-display text-2xl font-bold">Center at a Glance</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-background border rounded-xl p-6 flex items-center gap-4 hover:border-green-600/30 transition-colors shadow-sm">
                                    <div className="p-3 rounded-lg bg-green-50 text-green-600">
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-foreground">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Why Precision Agriculture */}
                        <div className="bg-green-50/50 border border-green-100 rounded-2xl p-8 mt-4">
                            <h2 className="font-display text-2xl font-bold text-green-900 mb-4">Why Precision Agriculture?</h2>
                            <div className="space-y-4 text-green-800/80 leading-relaxed font-medium">
                                <p>
                                    With a rapidly growing population and diminishing fertile land, food security is India's most critical challenge. Traditional farming methods are increasingly vulnerable to unpredictable climate cycles.
                                </p>
                                <p>
                                    Precision Agriculture uses AI, IoT, and satellite data to make farming "data-driven." This means using exactly the right amount of water, fertilizer, and pesticides, precisely where they are needed—reducing waste and maximizing output.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* News Ticker */}
                    <div className="bg-card border rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="font-display text-xl font-bold">Latest Updates</h2>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded tracking-wider">Live</span>
                        </div>
                        <div className="space-y-6">
                            {news.map((item, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="text-xs font-bold text-green-600 mb-1">{item.date}</div>
                                    <h3 className="font-semibold text-foreground group-hover:text-green-600 transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    {i < news.length - 1 && <div className="h-px bg-border mt-6" />}
                                </div>
                            ))}
                        </div>
                        <Button variant="ghost" className="w-full mt-6 text-green-600 hover:text-green-700 hover:bg-green-50">
                            View All News
                        </Button>
                    </div>
                </div>
                {/* Explore the Center */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold">Explore the Center</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { to: "/track/research/agriculture/academy", label: "Academy", desc: "Courses & AI learning modules", color: "bg-green-600" },
                            { to: "/track/research/agriculture/research", label: "Research", desc: "Projects, publications & labs", color: "bg-emerald-700" },
                            { to: "/track/research/agriculture/partnerships", label: "Partnerships", desc: "Industry & government collaborators", color: "bg-teal-700" },
                            { to: "/track/research/agriculture/community", label: "Community", desc: "Events, network & outreach", color: "bg-lime-700" },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="group bg-card border rounded-2xl p-6 hover:border-green-600/40 hover:shadow-md transition-all"
                            >
                                <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold text-foreground mb-1 group-hover:text-green-700 transition-colors">{item.label}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

export default AgriLanding;
