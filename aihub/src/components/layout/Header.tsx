import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, BookOpen, Microscope, Settings, Briefcase, Sparkles, Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import bossofaiLogo from "@/assets/bossofai-logo.jpg";
import { SiteSearch } from "./SiteSearch";

const trackPillars = [
  {
    title: "Teaching",
    href: "/track/teaching",
    icon: BookOpen,
    color: "text-track-teaching",
    description: "AI for planning, analogies, and student engagement",
    subItems: [
      { title: "Planning", href: "/track/teaching" },
      { title: "Assessment Vault", href: "/assessment-vault" },
      { title: "AI-Ready Assessment Design", href: "/track/teaching/assessment-design" },
      { title: "Student AI Guidelines", href: "/student-guidelines" },
      { title: "Student Engagement", href: "/track/teaching/engagement" },
    ],
  },
  {
    title: "Research",
    href: "/track/research",
    icon: Microscope,
    color: "text-track-research",
    description: "AI-powered research tools & X+AI Research Centers",
    subItems: [
      { title: "Projects", href: "/track/research/projects" },
      { title: "Datasets", href: "/track/research/datasets" },
      { title: "Education Research", href: "/track/research/education" },
      { title: "Agriculture", href: "/track/research/agriculture" },
      { title: "Bioinformatics & Healthcare", href: "/track/research/healthcare" },
      { title: "Defense", href: "/track/research/defense" },
      { title: "Sustainable Infrastructure", href: "/track/research/infrastructure" },
      { title: "Smart Manufacturing", href: "/track/research/smart-manufacturing" },
    ],
  },
  {
    title: "Administration",
    href: "/track/administration",
    icon: Settings,
    color: "text-track-admin",
    description: "Workflow efficiency and data privacy tools",
    subItems: [
      { title: "Meeting Agenda Generator", href: "/track/administration/agenda-generator" },
      { title: "Policy Summarizer", href: "/track/administration/policy-summarizer" },
      { title: "Internal Communications", href: "/track/administration/communications" },
    ],
  },
  {
    title: "Consulting",
    href: "/track/consulting",
    icon: Briefcase,
    color: "text-track-consulting",
    description: "Industry simulations and project resources",
    subItems: [
      { title: "Industry Simulations & Case Studies", href: "/track/consulting/simulations" },
    ],
  },
  {
    title: "Kaizen",
    href: "/track/kaizen",
    icon: Sparkles,
    color: "text-track-kaizen",
    description: "Personal development and AI skill-tracking",
    subItems: [
      { title: "AI Tutoring", href: "/track/kaizen/ai-tutor" },
      { title: "Skill Tracking", href: "/under-development" },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "h-16 bg-background/80 backdrop-blur-lg border-border/40 shadow-sm"
          : "h-20 bg-background/50 backdrop-blur-md border-transparent"
      )}
    >
      <div className="container h-full flex items-center justify-between gap-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-[14px] shrink-0 group">
          <img
            src={bossofaiLogo}
            alt="BossOfAI"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              "px-3 py-2 text-lg font-accent font-semibold rounded-lg transition-all relative group overflow-hidden",
              isActive("/") && location.pathname === "/"
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <span>Home</span>
            <span className={cn(
              "absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full transition-transform duration-300",
              isActive("/") && location.pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )} />
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "h-auto px-3 py-2 text-lg font-accent font-semibold bg-transparent transition-all",
                  "hover:text-primary data-[state=open]:text-primary"
                )}>
                  TRACK Pillars
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 bg-popover rounded-xl border border-border/50 shadow-2xl">
                    {trackPillars.map((pillar) => (
                      <div key={pillar.title} className="space-y-4">
                        <Link
                          to={pillar.href}
                          className="flex items-center gap-3 rounded-lg p-3 hover:bg-primary/5 transition-all group/pillar"
                        >
                          <div className={cn("p-2 rounded-lg bg-background shadow-sm border border-border/50 group-hover/pillar:scale-110 transition-transform")}>
                            <pillar.icon className={cn("h-5 w-5", pillar.color)} />
                          </div>
                          <span className="font-bold text-foreground group-hover/pillar:text-primary transition-colors">
                            {pillar.title}
                          </span>
                        </Link>
                        <div className="space-y-2 pl-3">
                          {pillar.subItems.map((sub) => (
                            sub.external ? (
                              <a
                                key={sub.href}
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary py-1 transition-all group/sub"
                              >
                                <div className="w-1 h-1 rounded-full bg-border group-hover/sub:bg-primary transition-colors" />
                                {sub.title}
                                <ExternalLink className="h-2 w-2 ml-1" />
                              </a>
                            ) : (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary py-1 transition-all group/sub"
                              >
                                <div className="w-1 h-1 rounded-full bg-border group-hover/sub:bg-primary transition-colors" />
                                {sub.title}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/resources"
            className={cn(
              "px-3 py-2 text-lg font-accent font-semibold rounded-lg transition-all relative group",
              isActive("/resources") ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <span>Resources</span>
            <span className={cn(
              "absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full transition-transform duration-300",
              isActive("/resources") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )} />
          </Link>

          <Link
            to="/governance"
            className={cn(
              "px-3 py-2 text-lg font-accent font-semibold rounded-lg transition-all relative group",
              isActive("/governance") ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <span>Governance</span>
            <span className={cn(
              "absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full transition-transform duration-300",
              isActive("/governance") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )} />
          </Link>

          <Link
            to="/news"
            className={cn(
              "px-3 py-2 text-lg font-accent font-semibold rounded-lg transition-all relative group",
              isActive("/news") ? "text-primary" : "text-muted-foreground hover:text-primary"
            )}
          >
            <span>News & Updates</span>
            <span className={cn(
              "absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full transition-transform duration-300",
              isActive("/news") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )} />
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <SiteSearch />
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <SiteSearch />
          <Button
            variant="ghost"
            size="icon"
            className="relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {
        createPortal(
          <div className={cn(
            "fixed inset-0 z-[55] lg:hidden bg-background/95 backdrop-blur-xl transition-all duration-500 ease-in-out",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}>
            <div className="container h-full pt-24 pb-8 flex flex-col">
              <div className="flex-1 overflow-y-auto pr-4 -mr-4 space-y-8">
                <div className="grid gap-2">
                  <Link
                    to="/"
                    className={cn(
                      "flex items-center justify-between px-6 py-4 rounded-2xl text-2xl font-bold transition-all",
                      isActive("/") && location.pathname === "/" ? "bg-primary text-white" : "bg-muted/50 text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Home</span>
                    {isActive("/") && location.pathname === "/" && <div className="w-2 h-2 rounded-full bg-white" />}
                  </Link>

                  <Link
                    to="/resources"
                    className={cn(
                      "flex items-center justify-between px-6 py-4 rounded-2xl text-2xl font-bold transition-all",
                      isActive("/resources") ? "bg-primary text-white" : "bg-muted/50 text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Resources</span>
                    {isActive("/resources") && <div className="w-2 h-2 rounded-full bg-white" />}
                  </Link>

                  <Link
                    to="/governance"
                    className={cn(
                      "flex items-center justify-between px-6 py-4 rounded-2xl text-2xl font-bold transition-all",
                      isActive("/governance") ? "bg-primary text-white" : "bg-muted/50 text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Governance</span>
                    {isActive("/governance") && <div className="w-2 h-2 rounded-full bg-white" />}
                  </Link>

                  <Link
                    to="/news"
                    className={cn(
                      "flex items-center justify-between px-6 py-4 rounded-2xl text-2xl font-bold transition-all",
                      isActive("/news") ? "bg-primary text-white" : "bg-muted/50 text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>News & Updates</span>
                    {isActive("/news") && <div className="w-2 h-2 rounded-full bg-white" />}
                  </Link>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground px-6 mt-4">
                    TRACK Pillars
                  </h3>
                  <div className="grid gap-3">
                    {trackPillars.map((pillar) => (
                      <div key={pillar.title} className="group">
                        <button
                          className={cn(
                            "w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all",
                            expandedMobile === pillar.title ? "bg-accent/10 border-accent/20 border" : "bg-muted/30 hover:bg-muted"
                          )}
                          onClick={() => setExpandedMobile(expandedMobile === pillar.title ? null : pillar.title)}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("p-2 rounded-lg bg-background shadow-sm border border-border/50")}>
                              <pillar.icon className={cn("h-5 w-5", pillar.color)} />
                            </div>
                            <span className="font-bold text-lg">{pillar.title}</span>
                          </div>
                          <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", expandedMobile === pillar.title && "rotate-180")} />
                        </button>
                        <div className={cn(
                          "overflow-hidden transition-all duration-300",
                          expandedMobile === pillar.title ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                        )}>
                          <div className="pl-16 pr-6 py-2 space-y-3">
                            <Link
                              to={pillar.href}
                              className="block text-sm font-bold text-primary mb-2"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Overview →
                            </Link>
                            {pillar.subItems.map((sub) => (
                              sub.external ? (
                                <a
                                  key={sub.href}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-base text-muted-foreground hover:text-primary transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sub.title}
                                  <ExternalLink className="h-3 w-3 inline ml-2 mb-1" />
                                </a>
                              ) : (
                                <Link
                                  key={sub.href}
                                  to={sub.href}
                                  className="block text-base text-muted-foreground hover:text-primary transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sub.title}
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      }
    </header >
  );
};

export default Header;
