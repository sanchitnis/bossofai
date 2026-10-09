import { Users, Building2, Globe, HandshakeIcon, ArrowUpRight, Star } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";

const industryPartners = [
    {
        name: "Bosch India",
        type: "Industry",
        focus: "Autonomous quality inspection & smart assembly systems",
        engagement: "Joint R&D + Internships",
    },
    {
        name: "ABB Robotics",
        type: "Industry",
        focus: "Cobot programming and human-robot collaboration frameworks",
        engagement: "Research Collaboration",
    },
    {
        name: "NVIDIA",
        type: "Technology",
        focus: "NVIDIA Omniverse for digital twin simulation & Isaac robotics platform",
        engagement: "Partner Lab + Grants",
    },
    {
        name: "Tata Elxsi",
        type: "Industry",
        focus: "AI for embedded systems in industrial automation",
        engagement: "Sponsored Projects + MoU",
    },
];

const academicPartners = [
    { name: "IIT Bombay — Robotics Lab", country: "India" },
    { name: "TU Berlin — Industry 4.0 Institute", country: "Germany" },
    { name: "Carnegie Mellon University — RI", country: "USA" },
    { name: "National University of Singapore", country: "Singapore" },
];

const typeColor: Record<string, string> = {
    "Industry": "bg-blue-100 text-blue-700",
    "Technology": "bg-purple-100 text-purple-700",
};

const SmartMfgPartnerships = () => {
    return (
        <ResearchCenterLayout
            name="Smart Manufacturing X+AI"
            basePath="/track/research/smart-manufacturing"
            icon={Users}
            colorClass="text-cyan-600"
        >
            <div className="space-y-12">
                <header className="max-w-3xl">
                    <h1 className="font-display text-3xl font-bold mb-4">Partnerships & Collaborations</h1>
                    <p className="text-muted-foreground leading-relaxed">
                        Driving innovation through a powerful network of industry leaders, global research institutions, and government agencies — all united by the goal of intelligent manufacturing.
                    </p>
                </header>

                {/* Industry Partners */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-cyan-600" />
                        Industry Partners
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {industryPartners.map((partner) => (
                            <div key={partner.name} className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider ${typeColor[partner.type]}`}>
                                        {partner.type}
                                    </span>
                                    <div className="p-2 rounded-full bg-muted group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-2">{partner.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{partner.focus}</p>
                                <div className="pt-4 border-t">
                                    <span className="text-xs font-semibold bg-muted px-3 py-1 rounded-full">
                                        {partner.engagement}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Academic Partnerships */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <Globe className="h-6 w-6 text-cyan-600" />
                        Academic & Research Institution Partners
                    </h2>
                    <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                        {academicPartners.map((ap, i) => (
                            <div key={i} className="p-6 border-b last:border-0 hover:bg-muted/30 transition-colors flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <Star className="h-4 w-4 text-cyan-500 shrink-0" />
                                    <h3 className="font-semibold group-hover:text-cyan-600 transition-colors">{ap.name}</h3>
                                </div>
                                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">{ap.country}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Partnership CTA */}
                <section className="bg-gradient-to-br from-cyan-950 to-slate-900 text-white rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="shrink-0 p-6 rounded-2xl bg-cyan-900/60 border border-cyan-700/40">
                            <HandshakeIcon className="h-12 w-12 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                            <h2 className="font-display text-2xl font-bold mb-3">Become a Partner</h2>
                            <p className="text-cyan-100/70 max-w-2xl leading-relaxed mb-6">
                                Whether you are an industry leader seeking R&D collaboration, a startup with a robotics product, or an academic institution — we invite you to co-create
                                the future of smart manufacturing with our research teams.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold">
                                    Start a Partnership
                                </Button>
                                <Button variant="outline" size="lg" className="border-cyan-700 text-cyan-300 hover:bg-cyan-900">
                                    Download Partnership Deck
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

export default SmartMfgPartnerships;
