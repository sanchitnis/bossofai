import { ReactNode } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import {
    Home,
    GraduationCap,
    Microscope,
    Users,
    MessageSquare,
    ChevronRight
} from "lucide-react";

interface ResearchCenterLayoutProps {
    children: ReactNode;
    name: string;
    basePath: string;
    icon: any;
    colorClass: string;
}

const ResearchCenterLayout = ({
    children,
    name,
    basePath,
    icon: Icon,
    colorClass
}: ResearchCenterLayoutProps) => {
    const location = useLocation();

    const navItems = [
        { title: "Overview", href: basePath, icon: Home },
        { title: "Academy", href: `${basePath}/academy`, icon: GraduationCap },
        { title: "Research", href: `${basePath}/research`, icon: Microscope },
        { title: "Partnerships", href: `${basePath}/partnerships`, icon: Users },
        { title: "Community", href: `${basePath}/community`, icon: MessageSquare },
    ];

    const isActive = (path: string) => {
        if (path === basePath) {
            return location.pathname === basePath;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <Layout>
            <div className="bg-background min-h-screen">
                {/* Sub-header / Breadcrumbs */}
                <div className="border-b bg-card/50 backdrop-blur-sm sticky top-16 z-30">
                    <div className="container py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className={cn("p-2 rounded-lg bg-background border shadow-sm", colorClass)}>
                                <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Link to="/track/research" className="text-muted-foreground hover:text-primary transition-colors">Research</Link>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                <span className="font-bold text-foreground">{name}</span>
                            </div>
                        </div>

                        <nav className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl overflow-x-auto no-scrollbar">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                        isActive(item.href)
                                            ? "bg-background text-primary shadow-sm"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <main className="container py-8 animate-fade-in">
                    {children}
                </main>
            </div>
        </Layout>
    );
};

export default ResearchCenterLayout;
