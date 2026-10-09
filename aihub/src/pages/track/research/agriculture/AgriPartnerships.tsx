import { Users, UserCheck, Building2, ExternalLink, Linkedin, Mail } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";

const leads = [
    { name: "Dr. Sanjay Chitnis", role: "Center Director", dept: "Director, AI Hub" },
    { name: "Dr. Ramesh Kumar", role: "Technical Lead", dept: "Agri-Tech Specialist" },
];

const scholars = [
    { name: "Priyanka S.", area: "Remote Sensing" },
    { name: "Arjun Mehta", area: "Autonomous Systems" },
    { name: "Lakshmi R.", area: "Soil Science" },
];

const partners = [
    { name: "AgroSmart AI", desc: "Leading startup in precision irrigation systems.", type: "Industry" },
    { name: "ICAR", desc: "Indian Council of Agricultural Research - Knowledge Partner.", type: "Government" },
    { name: "GreenEarth Foundation", desc: "NGO focused on sustainable farming practices.", type: "NGO" },
];

const AgriPartnerships = () => {
    return (
        <ResearchCenterLayout
            name="Agriculture X+AI"
            basePath="/track/research/agriculture"
            icon={Users}
            colorClass="text-green-600"
        >
            <div className="space-y-12">
                <header className="max-w-3xl">
                    <h1 className="font-display text-3xl font-bold mb-4">The Ecosystem (People & Partners)</h1>
                    <p className="text-muted-foreground leading-relaxed">
                        A diverse network of faculty, students, industry veterans, and international researchers working together to transform agriculture.
                    </p>
                </header>

                {/* Community Directory */}
                <section className="space-y-8">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <Users className="h-6 w-6 text-green-600" />
                        Community Directory
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leads.map((person) => (
                            <ProfileCard key={person.name} {...person} type="lead" />
                        ))}
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-8">
                        <h3 className="font-bold mb-6 text-muted-foreground uppercase tracking-widest text-xs">Research Scholars & Ambassadors</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {scholars.map((s) => (
                                <div key={s.name} className="bg-background border rounded-xl p-4 flex flex-col items-center text-center group hover:border-green-600/30 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
                                        {s.name.charAt(0)}
                                    </div>
                                    <h4 className="font-bold text-sm">{s.name}</h4>
                                    <p className="text-[10px] text-muted-foreground uppercase mt-1 tracking-wider">{s.area}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mentors Hall of Fame */}
                <section className="bg-green-50 border border-green-100 rounded-3xl p-8 md:p-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-display text-2xl font-bold flex items-center gap-2 text-green-900">
                            <UserCheck className="h-6 w-6 text-green-700" />
                            External Mentors Hall of Fame
                        </h2>
                        <Button variant="ghost" className="text-green-700 font-bold">Nominate a Mentor</Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-200/50 flex gap-4 items-start">
                            <div className="shrink-0 w-16 h-16 rounded-2xl bg-slate-100" />
                            <div>
                                <h3 className="font-bold text-green-900">Dr. Robert Chen</h3>
                                <p className="text-sm text-green-700 font-medium mb-3">Professor of Bio-Systems Engineering, MIT</p>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-green-600"><Linkedin className="h-4 w-4" /></Button>
                                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-green-600"><Mail className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-200/50 flex gap-4 items-start">
                            <div className="shrink-0 w-16 h-16 rounded-2xl bg-slate-100" />
                            <div>
                                <h3 className="font-bold text-green-900">Sarah Jenkins</h3>
                                <p className="text-sm text-green-700 font-medium mb-3">Principal Researcher, Ag-Tech Global</p>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-green-600"><Linkedin className="h-4 w-4" /></Button>
                                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-green-600"><Mail className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Collaborations */}
                <section className="space-y-8">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-green-600" />
                        Industry & Org Collaborations
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {partners.map((p) => (
                            <div key={p.name} className="bg-card border rounded-2xl p-8 flex flex-col h-full shadow-sm hover:border-green-600/30 transition-all">
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="bg-muted w-16 h-8 rounded animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted/50 px-2 py-1 rounded">{p.type}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {p.desc}
                                </p>
                                <Button variant="link" className="p-0 h-auto self-start text-green-600 mt-6">View Success Story →</Button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

const ProfileCard = ({ name, role, dept }: { name: string, role: string, dept: string, type: string }) => (
    <div className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-5 border-l-4 border-l-green-600">
        <div className="shrink-0 w-16 h-16 rounded-2xl bg-muted" />
        <div>
            <h3 className="font-bold text-lg mb-1">{name}</h3>
            <p className="text-green-600 font-bold text-sm mb-1">{role}</p>
            <p className="text-xs text-muted-foreground">{dept}</p>
        </div>
    </div>
);

export default AgriPartnerships;
