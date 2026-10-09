import { GraduationCap, BookOpen, Video, Calendar, ExternalLink, Play } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";

const curriculum = [
    { level: "B.Tech", module: "AI in Farm Mechanization", description: "Introduction to sensors and actuators in autonomous farm equipment." },
    { level: "M.Tech", module: "Satellite Imaging for Crop Health", description: "Advanced computer vision techniques for multispectral data analysis." },
    { level: "BSc Agri", module: "Data-Driven Agronomy", description: "Basics of data interpretation for precision soil management." },
];

const workshops = [
    { title: "Introduction to NotebookLM for Agri-research", type: "Webinar", link: "#" },
    { title: "Drone Pilot Training for Crop Surveillance", type: "Hands-on", link: "#" },
    { title: "Predictive Analytics for Pest Management", type: "Technical", link: "#" },
];

const AgriAcademy = () => {
    return (
        <ResearchCenterLayout
            name="Agriculture X+AI"
            basePath="/track/research/agriculture"
            icon={GraduationCap}
            colorClass="text-green-600"
        >
            <div className="space-y-12">
                <header className="max-w-3xl">
                    <h1 className="font-display text-3xl font-bold mb-4">Capacity Building & Learning Hub</h1>
                    <p className="text-muted-foreground leading-relaxed">
                        Equipping the next generation of agricultural experts with AI-driven skills and interdisciplinary knowledge.
                    </p>
                </header>

                {/* Curriculum Integration */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-green-600" />
                        Curriculum Integration
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {curriculum.map((item) => (
                            <div key={item.module} className="bg-card border rounded-xl p-6 shadow-sm hover:border-green-600/20 transition-all">
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded mb-3 inline-block">
                                    {item.level}
                                </span>
                                <h3 className="font-bold text-foreground mb-2">{item.module}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Learning Resources */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* MOOCs */}
                    <section className="bg-muted/30 border rounded-2xl p-8">
                        <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                            <ExternalLink className="h-6 w-6 text-green-600" />
                            MOOC & Self-Paced Learning
                        </h2>
                        <div className="space-y-4">
                            <LinkCard
                                title="AI for Climate-Smart Agriculture"
                                provider="Coursera"
                                duration="6 Weeks"
                            />
                            <LinkCard
                                title="Google Earth Engine for Researchers"
                                provider="Internal Video"
                                duration="4 Sessions"
                            />
                            <LinkCard
                                title="Fundamental of Agronomy with Data Science"
                                provider="NPTEL"
                                duration="12 Weeks"
                            />
                        </div>
                        <Button variant="outline" className="w-full mt-6">View Full Catalog</Button>
                    </section>

                    {/* Workshop Archive */}
                    <section className="bg-card border rounded-2xl p-8 shadow-sm">
                        <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                            <Video className="h-6 w-6 text-red-600" />
                            Workshop Archive
                        </h2>
                        <div className="space-y-4">
                            {workshops.map((ws) => (
                                <div key={ws.title} className="flex items-center justify-between p-4 rounded-xl bg-background border border-border group hover:border-green-600/30 transition-all cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:scale-110 transition-transform">
                                            <Play className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm">{ws.title}</h3>
                                            <p className="text-xs text-muted-foreground">{ws.type}</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Seminar Calendar */}
                <section className="bg-green-950 text-white rounded-2xl p-8 md:p-12 overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-900 rounded-full blur-3xl opacity-50 -mb-32 -mr-32" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-lg">
                            <div className="flex items-center gap-2 text-green-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <Calendar className="h-4 w-4" />
                                Stay Updated
                            </div>
                            <h2 className="font-display text-3xl font-bold mb-4">Seminar Calendar</h2>
                            <p className="text-green-100/70">
                                Join our weekly interactive sessions with industry experts and global researchers. Don't miss the upcoming talk on "Soil Microbiome AI" this Friday.
                            </p>
                        </div>
                        <Button variant="secondary" size="lg" className="whitespace-nowrap">
                            Add to Google Calendar
                        </Button>
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

const LinkCard = ({ title, provider, duration }: { title: string, provider: string, duration: string }) => (
    <div className="flex items-center justify-between p-4 rounded-xl bg-background border border-border hover:border-green-600/30 transition-all group">
        <div>
            <h3 className="font-semibold text-foreground group-hover:text-green-600 transition-colors">{title}</h3>
            <div className="flex gap-2 text-xs text-muted-foreground mt-1">
                <span className="font-bold text-green-600/80">{provider}</span>
                <span>•</span>
                <span>{duration}</span>
            </div>
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground" />
    </div>
);

const ChevronRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

export default AgriAcademy;
