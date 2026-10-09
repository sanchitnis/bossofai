import Layout from "@/components/layout/Layout";
import { BarChart3, TrendingUp, ExternalLink, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const planningResources = [
  {
    title: "CS Market Forecast 2026-29",
    description: "Highly relevant analysis of India's CS job market trends, talent crunch roles, and survival strategies for the AI era.",
    icon: TrendingUp,
    href: "/reva_cs_forecast_2026_2029_v2.html",
    category: "Market Analysis",
    isExternal: true
  }
];

const Planning = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium mb-6">
              <BarChart3 className="h-4 w-4" />
              Resources
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Planning Resources
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Strategic insights and data-driven forecasts to help you navigate the evolving academic and professional landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planningResources.map((resource) => (
              <div 
                key={resource.title}
                className="group relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-indigo-500/10 text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <resource.icon className="h-8 w-8" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600/70 mb-2 block">
                      {resource.category}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {resource.title}
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <Button asChild size="lg" className="w-full rounded-xl gap-2 shadow-lg shadow-indigo-500/10">
                      <a href={resource.href} target="_blank" rel="noopener noreferrer">
                        Access Forecast
                        {resource.isExternal ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <resource.icon className="h-24 w-24 -mr-8 -mt-8" />
                </div>
              </div>
            ))}

            {/* Placeholder for future planning resources */}
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-2xl bg-muted/30 text-center min-h-[300px]">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-muted-foreground/30" />
              </div>
              <h3 className="font-semibold text-muted-foreground mb-1">More Resources Coming Soon</h3>
              <p className="text-sm text-center text-muted-foreground max-w-[200px]">
                We're developing more strategic tools and roadmaps for your AI journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Planning;
