import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Lock, Shield, Eye, Database, FileCheck, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  const dataTiers = [
    {
      tier: "Tier 1: Public Data",
      color: "border-green-500/30 bg-green-500/5",
      badge: "Free Use with AI",
      badgeColor: "bg-green-500/20 text-green-400",
      description: "Published course syllabi, university press releases, public research preprints, marketing brochures.",
      rule: "Permitted for input into all approved and public AI tools."
    },
    {
      tier: "Tier 2: Internal Academic Data",
      color: "border-blue-500/30 bg-blue-500/5",
      badge: "Approved Tools Only",
      badgeColor: "bg-blue-500/20 text-blue-400",
      description: "Unpublished lecture drafts, internal meeting agendas, generic classroom discussion prompts, anonymous surveys.",
      rule: "Permitted strictly inside institutional enterprise accounts with zero-retention data agreements."
    },
    {
      tier: "Tier 3: Confidential Records",
      color: "border-amber-500/30 bg-amber-500/5",
      badge: "Restricted - Approval Req",
      badgeColor: "bg-amber-500/20 text-amber-400",
      description: "Student identifiable coursework, unannounced exam rubrics, faculty peer reviews, non-disclosure commercial research.",
      rule: "Prohibited from commercial AI tools. Permitted only in air-gapped on-premise local models with explicit authorization."
    },
    {
      tier: "Tier 4: Restricted / PII",
      color: "border-red-500/30 bg-red-500/5",
      badge: "Strictly Prohibited",
      badgeColor: "bg-red-500/20 text-red-400",
      description: "Government IDs, biometric data, student health records, financial transactions, passwords, active security keys.",
      rule: "Strictly forbidden from any AI ingestion under any circumstances. Violations trigger statutory disciplinary review."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>AI Privacy &amp; Data Protection Policy | Boss of AI Hub</title>
        <meta name="description" content="Institutional policy governing data classification, personal data privacy, and intellectual property protection when using AI." />
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-hero-gradient pt-28 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-32" />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <Lock className="h-4 w-4 text-emerald-400" />
            Data Protection Standard · POL-DAT-2025
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Institutional AI Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Protecting student confidentiality, proprietary research, and personal privacy across all AI-assisted academic workflows.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" className="rounded-full shadow-lg">
              <a href="#tiers">
                <Database className="h-4 w-4 mr-2" /> View Data Tiers
              </a>
            </Button>
            <Button asChild variant="heroOutline" className="rounded-full border-white/30 text-white hover:bg-white/10">
              <Link to="/governance">
                <ArrowRight className="h-4 w-4 mr-2" /> Governance Overview
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="tiers" className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-14 text-center">
            <span className="text-xs uppercase font-black text-accent tracking-widest block mb-2">Classification Matrix</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-foreground mb-4">Four-Tier Data Sensitivity Framework</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Before submitting any text, document, or dataset into an AI tool, verify which data tier it falls under.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {dataTiers.map((tier, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border-2 ${tier.color} flex flex-col justify-between transition-all hover:shadow-md`}>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-foreground">{tier.tier}</h3>
                    <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${tier.badgeColor}`}>
                      {tier.badge}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed font-medium">
                    {tier.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-border/40 text-xs font-semibold text-muted-foreground">
                  <strong>Mandatory Rule:</strong> {tier.rule}
                </div>
              </div>
            ))}
          </div>

          {/* Privacy Guarantees */}
          <div className="p-8 md:p-12 rounded-3xl bg-secondary/30 border border-border space-y-6">
            <h3 className="text-2xl font-bold font-display text-foreground">Core Privacy Guarantees</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-foreground text-base">Zero-Training Guarantee</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Enterprise agreements prevent university data and student prompts from being used to train third-party foundation models.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
                  <Eye className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-foreground text-base">Right to Explanation</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Students have the legal and academic right to understand when AI tools were utilized in evaluation or feedback processes.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-foreground text-base">Audit Trail Retention</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Automated prompts for academic evaluations are logged and retained securely for 3 years to support appeals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
