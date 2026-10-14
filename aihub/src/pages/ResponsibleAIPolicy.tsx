import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Lock, 
  Scale, 
  Lightbulb, 
  CheckCircle2, 
  AlertTriangle,
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  BookOpen,
  FlaskConical,
  Building,
  Eye,
  Gavel,
  Download,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type Role = "all" | "faculty" | "students" | "researchers" | "staff";
type Tab = "charter" | "academic" | "research" | "privacy" | "governance";

export const ResponsibleAIPolicy = () => {
  const [currentRole, setCurrentRole] = useState<Role>("all");
  const [activeTab, setActiveTab] = useState<Tab>("charter");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const roles = [
    { id: "all" as const, label: "Everyone", icon: Users },
    { id: "faculty" as const, label: "Faculty", icon: GraduationCap },
    { id: "students" as const, label: "Students", icon: BookOpen },
    { id: "researchers" as const, label: "Researchers", icon: FlaskConical },
    { id: "staff" as const, label: "Staff & Admin", icon: Briefcase },
  ];

  const tabs = [
    { id: "charter" as const, label: "Core Charter", icon: ShieldCheck },
    { id: "academic" as const, label: "Academic Integrity", icon: Scale },
    { id: "research" as const, label: "Research & IP", icon: FlaskConical },
    { id: "privacy" as const, label: "Data Privacy", icon: Lock },
    { id: "governance" as const, label: "Audit & Oversight", icon: Gavel },
  ];

  const sections = {
    charter: {
      title: "Core Responsible AI Charter",
      desc: "Our institutional commitment: AI serves to augment human capability, expand inquiry, and accelerate learning—never to diminish human judgment, agency, or ethical responsibility.",
      clauses: [
        {
          title: "Human-in-the-Loop Supremacy",
          text: "AI systems are advisors and draft generators; final moral and professional decisions must always remain with qualified human beings. Autonomous grading, disciplinary actions, or hiring decisions without human review are strictly prohibited.",
          roles: ["all", "faculty", "staff"]
        },
        {
          title: "Radical Transparency",
          text: "Whenever AI substantially assists in generating text, code, imagery, or quantitative analysis, its use must be acknowledged and documented with clear disclosure of the model and purpose.",
          roles: ["all", "faculty", "students", "researchers"]
        },
        {
          title: "Equitable Access & Digital Inclusion",
          text: "The university is committed to ensuring sanctioned AI tools are available to all students and faculty regardless of financial capability, preventing artificial divides in educational attainment.",
          roles: ["all", "students", "faculty"]
        },
        {
          title: "Continuous Evaluation & Kaizen",
          text: "AI tools and models undergo periodic audits for algorithmic bias, accuracy drift, and ethical safety to align with evolving state and national educational guidelines.",
          roles: ["all", "staff"]
        }
      ]
    },
    academic: {
      title: "Academic Integrity & Classroom Standards",
      desc: "Establishing transparent expectations for coursework, exams, presentations, and coding assignments.",
      clauses: [
        {
          title: "Default Non-Proctored Policy: AI Permitted with Disclosure",
          text: "Unless explicitly stated otherwise by the instructor in the syllabus, AI tools may be utilized as research partners and learning accelerators for homework and design projects, provided a standard disclosure statement is appended.",
          roles: ["students", "faculty", "all"]
        },
        {
          title: "Proctored Examinations: AI Prohibited by Default",
          text: "During scheduled proctored quizzes, midterm tests, and final semester exams, the use of generative AI tools is strictly forbidden unless an open-agent exam format is explicitly designated.",
          roles: ["students", "faculty", "all"]
        },
        {
          title: "Prohibition of Cognitive Surrender",
          text: "Submitting verbatim AI-generated prose or code without personal synthesis, comprehension, or verified testing constitutes academic dishonesty subject to standard institutional disciplinary proceedings.",
          roles: ["students", "all"]
        },
        {
          title: "Faculty Assessment Design Obligations",
          text: "Faculty must design assessments emphasizing process, oral defense (viva voce), project milestones, and adversarial evaluation rather than easily automated rote recall questions.",
          roles: ["faculty"]
        }
      ]
    },
    research: {
      title: "Research, Publications & Intellectual Property",
      desc: "Guardrails for scholarly investigations, preprint drafting, grant applications, and patents.",
      clauses: [
        {
          title: "Authorship Integrity: AI Cannot Be a Co-Author",
          text: "In accordance with global academic publishing standards (COPE, IEEE, Nature), Large Language Models do not possess legal personhood, moral agency, or accountability, and cannot be listed as authors on papers, patents, or theses.",
          roles: ["researchers", "faculty", "all"]
        },
        {
          title: "Data Provenance & Hallucination Defense",
          text: "Researchers must independently verify all statistical claims, mathematical formulas, and bibliographical citations produced with AI assistance. Fictitious citations are treated as data fabrication.",
          roles: ["researchers", "faculty"]
        },
        {
          title: "Protection of Proprietary Research & Grant Data",
          text: "Unpublished manuscripts, preliminary lab findings, patent claims, and confidential industrial sponsor data must never be uploaded to commercial public AI services.",
          roles: ["researchers", "faculty", "staff"]
        },
        {
          title: "Methodological Transparency",
          text: "Every research publication leveraging AI must describe the prompts, model version, temperature, and specific analytical steps in its Methodology section.",
          roles: ["researchers", "faculty"]
        }
      ]
    },
    privacy: {
      title: "Data Privacy, Security & Tool Sanctioning",
      desc: "Strict rules protecting student personal data, institutional records, and IT infrastructure.",
      clauses: [
        {
          title: "Zero-Exposure of Personally Identifiable Information (PII)",
          text: "Never enter student names, grades, Aadhaar/SSN IDs, health information, or confidential personnel records into any non-enterprise AI system.",
          roles: ["faculty", "staff", "all"]
        },
        {
          title: "Sanctioned vs. Shadow AI",
          text: "Institutional business and academic operations must exclusively rely on university-approved AI instances featuring signed Data Processing Agreements (DPA) and zero-retention model guarantees.",
          roles: ["faculty", "staff"]
        },
        {
          title: "Safe Local Inference",
          text: "For sensitive institutional data, departments are urged to deploy self-hosted open-weights models (via vLLM/Ollama) on campus hardware behind the institutional firewall.",
          roles: ["researchers", "staff"]
        },
        {
          title: "Mandatory Breach Reporting",
          text: "Any accidental leakage of confidential data into public AI chat logs must be reported to the IT Security Officer within 24 hours for token revocation and incident containment.",
          roles: ["all", "staff"]
        }
      ]
    },
    governance: {
      title: "Oversight, Appeals & Disciplinary Procedures",
      desc: "How compliance is audited, how disputes are fairly resolved, and how policies evolve.",
      clauses: [
        {
          title: "AI Ethics & Governance Board",
          text: "An interdisciplinary committee comprising academic deans, student representatives, legal counsel, and AI specialists meets quarterly to review edge cases and update institutional standards.",
          roles: ["all", "faculty", "staff"]
        },
        {
          title: "The 14-Day Evaluation Appeal Right",
          text: "Any student who believes an assessment grade was adversely impacted by an automated AI evaluation or misapplied AI penalty may submit a formal written challenge to the Ombudsman within 14 days.",
          roles: ["students", "faculty", "all"]
        },
        {
          title: "Graduated Disciplinary Matrix",
          text: "First-time minor citation oversights trigger mandatory AI literacy re-training. Wilful fabrication, mass impersonation, or confidential data leakage results in formal disciplinary hearings.",
          roles: ["all", "students", "faculty"]
        },
        {
          title: "Annual Policy Re-Certification",
          text: "This document is re-certified every academic year to incorporate technological advances in agentic AI, multimodal models, and national regulatory mandates.",
          roles: ["all"]
        }
      ]
    }
  };

  const currentSection = sections[activeTab];
  const filteredClauses = currentSection.clauses.filter(
    (c) => currentRole === "all" || c.roles.includes(currentRole) || c.roles.includes("all")
  );

  const faqs = [
    {
      q: "Does running grammar check or code spellcheck count as substantial AI use requiring disclosure?",
      a: "No. Routine editing aids (e.g., standard spell-checkers, automated linters, dictionary lookup) do not require formal disclosure. Substantial use occurs when an AI synthesizes core arguments, writes functional program logic, or drafts multi-paragraph content."
    },
    {
      q: "Can I use ChatGPT or Claude to help me brainstorm project ideas?",
      a: "Yes! Brainstorming and exploratory inquiry are strongly encouraged. You should mention in your project preface that initial brainstorming was accelerated with an AI tool."
    },
    {
      q: "What should a standard disclosure statement look like?",
      a: "A standard statement reads: 'The author acknowledges the assistance of [Model/Tool Name, e.g. Claude 3.5 Sonnet] for [specific purpose, e.g. structuring the literature review and drafting initial Python boilerplate]. All final analysis, testing, and factual assertions were verified and accepted by the author.'"
    },
    {
      q: "Can faculty use AI to evaluate student submissions?",
      a: "Only under approved formative settings with full human verification. AI may assist in generating initial rubric feedback, but the assigned grade and final review must be verified by the instructor."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Responsible AI Use Policy | Boss of AI Hub</title>
        <meta name="description" content="Comprehensive Institutional Policy on Responsible AI Use — Ethical guidelines, academic integrity, research standards, and data privacy." />
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-hero-gradient pt-28 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-32" />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Institutional Governance Document · ID: POL-AI-2025
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Responsible AI Use Policy
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            The university framework establishing ethical boundaries, academic integrity standards, data privacy mandates, and human-in-the-loop accountability.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" className="rounded-full shadow-lg">
              <a href="#clauses">
                <FileText className="h-4 w-4 mr-2" /> Read Full Policy
              </a>
            </Button>
            <Button asChild variant="heroOutline" className="rounded-full border-white/30 text-white hover:bg-white/10">
              <Link to="/governance">
                <ArrowRight className="h-4 w-4 mr-2" /> Governance Hub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Role Filter Bar */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border py-3 shadow-sm">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-black text-muted-foreground tracking-wider">Viewing for:</span>
            <div className="flex flex-wrap gap-1">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setCurrentRole(r.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all",
                    currentRole === r.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <r.icon className="h-3.5 w-3.5" />
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
            <span>Last Certified: <strong>January 2025</strong></span>
            <span>•</span>
            <span className="text-emerald-500 font-bold">Active Status</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section id="clauses" className="py-16 bg-background">
        <div className="container">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap border-b border-border mb-12 gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition-all -mb-px rounded-t-lg",
                  activeTab === t.id
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-black font-display text-foreground mb-3">{currentSection.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{currentSection.desc}</p>
            </div>

            {/* Clauses List */}
            <div className="space-y-6">
              {filteredClauses.map((clause, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{clause.title}</h3>
                        <div className="flex gap-1.5">
                          {clause.roles.map((tag) => (
                            <span key={tag} className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base">{clause.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredClauses.length === 0 && (
              <div className="p-8 text-center border border-dashed rounded-2xl text-muted-foreground">
                No specific clauses found for role: <strong>{currentRole}</strong> in this section.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-black text-accent tracking-widest block mb-2">Clarifications & Guidance</span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-foreground">Common Policy Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border/80 bg-card rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border/40 text-base">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">Need a custom policy clarification?</h3>
              <p className="text-sm text-muted-foreground">Reach out to the AI Ethics Committee or review the student and staff guides.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button asChild variant="outline">
                <Link to="/governance/staff-procedures">Staff Procedures</Link>
              </Button>
              <Button asChild variant="hero">
                <Link to="/student-guidelines">Student Guidelines</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResponsibleAIPolicy;
