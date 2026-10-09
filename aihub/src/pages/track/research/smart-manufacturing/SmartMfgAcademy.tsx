import { GraduationCap, BookOpen, Video, Award, ArrowUpRight, Clock, Users } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";

const courses = [
    {
        title: "Foundations of Autonomous Systems",
        level: "Introductory",
        duration: "6 weeks",
        seats: "40",
        desc: "Covers perception, planning, and actuation pipelines — from sensor fusion to decision trees used in autonomous robots.",
    },
    {
        title: "Physical AI & Embodied Intelligence",
        level: "Intermediate",
        duration: "8 weeks",
        seats: "30",
        desc: "Deep dive into training AI models that interact with the physical environment using reinforcement learning and world models.",
    },
    {
        title: "Industrial Robotics & Cobot Programming",
        level: "Intermediate",
        duration: "10 weeks",
        seats: "25",
        desc: "Hands-on programming of UR/FANUC cobots for assembly tasks, using ROS 2 and real-time control frameworks.",
    },
    {
        title: "Digital Twin Design & Simulation",
        level: "Advanced",
        duration: "8 weeks",
        seats: "20",
        desc: "Build high-fidelity factory digital twins using NVIDIA Omniverse and ANSYS, enabling zero-downtime predictive maintenance.",
    },
];

const workshops = [
    { title: "ROS 2 Bootcamp for Beginners", date: "Mar 8, 2025", format: "In-person" },
    { title: "Computer Vision for Quality Inspection", date: "Mar 22, 2025", format: "Hybrid" },
    { title: "Sim-to-Real Transfer in Robotics", date: "Apr 5, 2025", format: "Online" },
];

const levelColor: Record<string, string> = {
    "Introductory": "bg-emerald-100 text-emerald-700",
    "Intermediate": "bg-blue-100 text-blue-700",
    "Advanced": "bg-purple-100 text-purple-700",
};

const SmartMfgAcademy = () => {
    return (
        <ResearchCenterLayout
            name="Smart Manufacturing X+AI"
            basePath="/track/research/smart-manufacturing"
            icon={GraduationCap}
            colorClass="text-cyan-600"
        >
            <div className="space-y-12">
                <header className="max-w-3xl">
                    <h1 className="font-display text-3xl font-bold mb-4">Academy</h1>
                    <p className="text-muted-foreground leading-relaxed">
                        Structured learning pathways in autonomous systems, physical AI, and industrial robotics — for students,
                        researchers, and industry professionals looking to master the technologies of tomorrow's factory floor.
                    </p>
                </header>

                {/* Courses */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-cyan-600" />
                        Courses & Learning Pathways
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {courses.map((course) => (
                            <div key={course.title} className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all flex flex-col group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider ${levelColor[course.level]}`}>
                                        {course.level}
                                    </span>
                                    <div className="p-2 rounded-full bg-muted group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{course.desc}</p>
                                <div className="pt-4 border-t flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                                    <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{course.seats} seats</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workshops */}
                <section className="space-y-6">
                    <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                        <Video className="h-6 w-6 text-cyan-600" />
                        Upcoming Workshops
                    </h2>
                    <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                        {workshops.map((ws, i) => (
                            <div key={i} className="p-6 hover:bg-muted/30 transition-colors border-b last:border-0 flex items-center justify-between gap-4 group cursor-pointer">
                                <div>
                                    <h3 className="font-semibold group-hover:text-cyan-600 transition-colors">{ws.title}</h3>
                                    <p className="text-sm text-muted-foreground">{ws.date}</p>
                                </div>
                                <span className={`shrink-0 px-3 py-1 text-xs font-semibold rounded-full ${ws.format === "Online" ? "bg-blue-100 text-blue-700" : ws.format === "Hybrid" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>
                                    {ws.format}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certification CTA */}
                <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="shrink-0 p-6 rounded-2xl bg-slate-800 border border-slate-700">
                        <Award className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-display text-2xl font-bold mb-3">Smart Manufacturing AI Certification</h2>
                        <p className="text-slate-400 max-w-2xl leading-relaxed mb-6">
                            Earn a recognized certification in Smart Manufacturing AI upon completing a defined pathway of courses and capstone project. Recognized by our industry partners for career advancement in automation and robotics roles.
                        </p>
                        <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold">
                            Apply for Certification
                        </Button>
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

export default SmartMfgAcademy;
