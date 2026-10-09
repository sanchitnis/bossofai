import Layout from "@/components/layout/Layout";
import { Hammer, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const UnderDevelopment = () => {
    return (
        <Layout>
            <div className="container min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
                <div className="p-6 rounded-full bg-accent/10 text-accent mb-6 animate-pulse">
                    <Hammer className="h-12 w-12" />
                </div>

                <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Under Development
                </h1>

                <div className="max-w-2xl mx-auto space-y-6">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We need volunteers for the content creation and training delivery team for AI powered University. No prior knowledge required and as part of this team, you will learn usage of AI a lot.
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <p className="font-medium text-foreground mb-4">
                            Please contact hello@bossofai.org if you would like to join this team or contribute.
                        </p>
                        <Button asChild size="lg" className="gap-2">
                            <a href="mailto:hello@bossofai.org">
                                <Mail className="h-4 w-4" />
                                Contact BossOfAI Team
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UnderDevelopment;
