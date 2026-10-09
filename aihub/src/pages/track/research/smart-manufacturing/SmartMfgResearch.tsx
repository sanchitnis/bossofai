import { Microscope, Search, FileText, Lightbulb, Landmark, Award, ArrowUpRight } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const projects = [
    {
        title: "AutoWeld-AI",
        lead: "Dr. Kavitha Nair",
        status: "Active",
        desc: "Vision-guided autonomous welding robot that self-corrects seam trajectories using real-time thermal imaging and deep learning.",
    },
    {
        title: "PhysAI-Grasp",
        lead: "Prof. Rajeev Menon",
        status: "Active",
        desc: "Physical AI model for dexterous robotic grasping of novel deformable objects using physics-informed neural networks.",
    },
    {
        title: "DigitalTwin-X",
        lead: "Dr. Shreya Patel, Research Scholar",
        status: "Validation",
        desc: "High-fidelity digital twin of an advanced CNC lab enabling predictive maintenance with 95% downtime reduction in simulation.",
    },
    {
        title: "SwarmSort",
        lead: "Dr. Arun Krishnamurthy",
        status: "Active",
        desc: "Multi-agent swarm robotics system for autonomous warehouse sorting and dynamic bin-packing optimization.",
    },
];

const SmartMfgResearch = () => {
    return (
        <ResearchCenterLayout
            name="Smart Manufacturing X+AI"
            basePath="/track/research/smart-manufacturing"
            icon={Microscope}
            colorClass="text-cyan-600"
        >
            <div className="space-y-12">
                <header className="max-w-3xl">
                    <h1 className="font-display text-3xl font-bold mb-4">Research & Innovation</h1>
                    <p className="text-muted-foreground leading-relaxed">
                        Pioneering research at the intersection of physical AI, autonomous systems, and precision robotics — from simulation to deployment on real factory floors.
                    </p>
                </header>

                {/* Active Projects */}
                <section className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                            <Lightbulb className="h-6 w-6 text-yellow-500" />
                            Active Projects
                        </h2>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search projects..." className="pl-10" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((p) => (
                            <div key={p.title} className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider ${p.status === "Active" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                                        {p.status}
                                    </span>
                                    <div className="p-2 rounded-full bg-muted group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{p.desc}</p>
                                <div className="pt-4 border-t text-xs font-medium text-muted-foreground italic">
                                    Lead: {p.lead}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Publications & Patents */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <section className="space-y-6">
                        <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                            <FileText className="h-6 w-6 text-cyan-600" />
                            Recent Publications
                        </h2>
                        <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                            {[
                                "Sim-to-Real Transfer for Physical AI in Unstructured Manufacturing Environments",
                                "Multi-Robot Task Allocation with Hierarchical Deep Reinforcement Learning",
                                "Zero-Shot Grasping of Novel Objects via Physics-Informed Contact Prediction",
                            ].map((title, i) => (
                                <div key={i} className="p-6 hover:bg-muted/30 transition-colors border-b last:border-0 group cursor-pointer">
                                    <h3 className="font-semibold text-foreground group-hover:text-cyan-600 transition-colors mb-2">{title}</h3>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <span className="bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded font-bold">2025</span>
                                        <span>IEEE Robotics & Automation Letters</span>
                                        <span>Impact: 6.1</span>
                                    </div>
                                </div>
                            ))}
                            <div className="p-4 bg-muted/20 text-center">
                                <Button variant="ghost" size="sm" className="text-muted-foreground">Browse all papers</Button>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                            <Award className="h-6 w-6 text-orange-600" />
                            IP & Patents
                        </h2>
                        <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-8 h-full">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">P1</div>
                                    <div>
                                        <h3 className="font-bold text-orange-900">Adaptive Seam-Tracking Welding System</h3>
                                        <p className="text-sm text-orange-800/70">Patent filed for AI-guided thermal-vision welding trajectory correction.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">P2</div>
                                    <div>
                                        <h3 className="font-bold text-orange-900">PhysAI-Grasp Controller</h3>
                                        <p className="text-sm text-orange-800/70">Patent filed for physics-informed dexterous manipulation algorithm.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">C1</div>
                                    <div>
                                        <h3 className="font-bold text-orange-900">DigitalTwin-X Software Suite</h3>
                                        <p className="text-sm text-orange-800/70">Predictive maintenance simulation framework for industrial digital twins.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Funding & Proposals */}
                <section className="bg-slate-900 text-slate-100 rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="shrink-0 p-6 rounded-2xl bg-slate-800 border border-slate-700">
                            <Landmark className="h-12 w-12 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                            <h2 className="font-display text-2xl font-bold mb-4">Funding & Proposals Hub</h2>
                            <p className="text-slate-400 max-w-2xl leading-relaxed mb-6">
                                Access active calls for proposals from DST, SERB, DRDO, and industry partners like Bosch and ABB. Explore successful project templates and budget calculation tools tailored for robotics and AI research.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold">Open Grants Portal</Button>
                                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800">Download Templates</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ResearchCenterLayout>
    );
};

export default SmartMfgResearch;
