import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Users, CheckCircle2 } from "lucide-react";
import REVAAiAscentPathway from "@/components/get-started/REVAAiAscentPathway";

const GetStarted = () => {
    return (
        <Layout>
            <Helmet>
                <title>Get Started | BossOfAI Hub</title>
                <meta name="description" content="Begin your AI journey. Follow the AI Ascent pathway from AI Citizen to expert-level AI practitioner." />
            </Helmet>
            <section className="py-20 md:py-32 bg-background">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Start Your AI Journey
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Choose your pathway to integrate AI into your academic, research, and professional journey.
                        </p>
                    </div>


                    {/* Department Level — Full Width */}
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-80" />
                            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

                            <div className="flex flex-col md:flex-row md:items-start gap-8">
                                {/* Icon + heading */}
                                <div className="flex items-center gap-4 md:flex-col md:items-center md:text-center shrink-0">
                                    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Users className="h-10 w-10" />
                                    </div>
                                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground md:hidden">
                                        Department Level
                                    </h2>
                                </div>

                                <div className="flex-1">
                                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 hidden md:block">
                                        Department Level
                                    </h2>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        Collaborate with your leadership to drive AI adoption across your department or school.
                                    </p>
                                    <ul className="grid sm:grid-cols-3 gap-4 list-none pl-0">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                            <span>Work with your HoD, Director, or Cluster Head.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                            <span>Organize training sessions for <strong>"AI Learner's License"</strong> and <strong>"AI Driver's License"</strong>.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                            <span>Contact the Vice Chancellor for organizing training.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── REVA AI Ascent Interactive Pathway ────────────── */}
                    <div className="max-w-6xl mx-auto mt-12">
                        <REVAAiAscentPathway />
                    </div>
                </div>
            </section>
        </Layout >
    );
};

export default GetStarted;
