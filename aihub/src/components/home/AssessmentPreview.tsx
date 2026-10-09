import { Link } from "react-router-dom";
import { Shield, Zap, ArrowRight, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AssessmentPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Assessment Framework
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Assessment Vault
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A comprehensive framework for designing assessments in the AI era. Choose between secure, proctored assessments and AI-ready collaborative tasks.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-sm">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Secure Assessments</h4>
                  <p className="text-sm text-muted-foreground">
                    Supervised, in-person tasks like oral exams, practical tests, and proctored examinations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-sm">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI-Ready Assessments</h4>
                  <p className="text-sm text-muted-foreground">
                    Scaffolded tasks where AI is used meaningfully—data analysis, portfolio creation, collaborative projects.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link to="/assessment-vault">
                Explore Assessment Vault
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl transform rotate-3" />
            <div className="relative bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <h3 className="font-display font-semibold text-lg">Assessment Designer</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-track-admin/60" />
                </div>
              </div>

              {/* Toggle Preview */}
              <div className="flex rounded-lg bg-muted p-1 mb-6">
                <button className="flex-1 px-4 py-2 rounded-md bg-card text-foreground font-medium shadow-sm text-sm">
                  Secure
                </button>
                <button className="flex-1 px-4 py-2 text-muted-foreground text-sm">
                  AI-Ready
                </button>
              </div>

              {/* Sample Items */}
              <div className="space-y-3">
                {["Oral Examination", "Practical Lab Test", "Proctored Exam"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                    <span className="ml-auto text-xs text-muted-foreground">Template</span>
                  </div>
                ))}
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentPreview;
