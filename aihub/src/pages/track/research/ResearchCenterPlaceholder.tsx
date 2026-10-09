import { Microscope, Hammer, Mail } from "lucide-react";
import ResearchCenterLayout from "@/components/research/ResearchCenterLayout";
import { Button } from "@/components/ui/button";

interface ResearchCenterPlaceholderProps {
    name: string;
    basePath: string;
    icon: any;
    colorClass: string;
}

const ResearchCenterPlaceholder = ({ name, basePath, icon, colorClass }: ResearchCenterPlaceholderProps) => {
    return (
        <ResearchCenterLayout
            name={name}
            basePath={basePath}
            icon={icon}
            colorClass={colorClass}
        >
            <div className="container min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="p-6 rounded-full bg-accent/10 text-accent mb-6 animate-pulse">
                    <Hammer className="h-12 w-12" />
                </div>

                <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                    {name} X+AI Sub-site
                </h1>

                <div className="max-w-2xl mx-auto space-y-6">
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                        This research center sub-site is currently under design. We are gathering mission statements, active projects, and partnership details for this domain.
                    </p>

                    <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                        <p className="font-medium text-foreground mb-4">
                            Would you like to contribute content or lead research for this center?
                        </p>
                        <Button asChild size="lg" className="gap-2">
                            <a href="mailto:research@bossofai.org">
                                <Mail className="h-4 w-4" />
                                Contact Research Office
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </ResearchCenterLayout>
    );
};

export default ResearchCenterPlaceholder;
