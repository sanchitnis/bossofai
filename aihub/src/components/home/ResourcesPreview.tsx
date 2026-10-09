import { Link } from "react-router-dom";
import { FileText, GraduationCap, ArrowRight, BookMarked, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourcesPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resources & Learning
          </h2>
          <p className="text-lg text-muted-foreground">
            Access curated prompts, learning pathways, and comprehensive guides to master AI integration.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Prompt Library */}
          <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <FileText className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  REVA Prompt Library
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ready-to-use templates for every TRACK pillar
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              A searchable database of categorized prompt templates designed specifically for university workflows—from lesson planning to research queries.
            </p>

            {/* Sample Prompts */}
            <div className="space-y-2 mb-6">
              {[
                { category: "Teaching", prompt: "Generate analogies for complex concepts" },
                { category: "Research", prompt: "Summarize literature review findings" },
                { category: "Admin", prompt: "Draft meeting agenda from notes" },
              ].map((item) => (
                <div key={item.prompt} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/50 text-sm">
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground truncate">{item.prompt}</span>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="w-full">
              <Link to="/resources/prompt-library">
                Browse Prompts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Learning Hub */}
          <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  Learning Hub
                </h3>
                <p className="text-sm text-muted-foreground">
                  Curated courses for AI & X+AI mastery
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              A curated list of internal REVA workshops and external courses from Coursera, edX, and more—organized by skill level and TRACK pillar.
            </p>

            {/* Sample Courses */}
            <div className="space-y-2 mb-6">
              {[
                { platform: "REVA", course: "AI Literacy Fundamentals", internal: true },
                { platform: "Coursera", course: "Generative AI for Educators", internal: false },
                { platform: "edX", course: "AI in Research Methods", internal: false },
              ].map((item) => (
                <div key={item.course} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/50 text-sm">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${item.internal ? 'bg-accent/10 text-accent' : 'bg-muted-foreground/10 text-muted-foreground'}`}>
                    {item.platform}
                  </span>
                  <span className="text-muted-foreground truncate flex-1">{item.course}</span>
                  {!item.internal && <ExternalLink className="h-3 w-3 text-muted-foreground" />}
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="w-full">
              <Link to="/resources/learning-hub">
                Explore Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* AI Literacy Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-reva-blue-dark rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookMarked className="h-6 w-6 text-accent" />
            <span className="text-primary-foreground/80 font-medium">Getting Started?</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            AI Literacy Modules
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            New to Generative AI? Start with our introductory modules covering the basics, common misconceptions, and ethical considerations.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/resources/learning-hub">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;
