import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { 
  ShieldCheck, 
  Users, 
  UserCheck, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Lock, 
  Scale, 
  ClipboardCheck, 
  Lightbulb, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle,
  TrendingDown,
  RotateCcw,
  Building2,
  XCircle,
  ArrowRight,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Role = "all" | "faculty" | "staff" | "student";
type Tab = "disclosure" | "privacy" | "integrity" | "assessment" | "ethics";

const StaffAIProcedures = () => {
    const [currentRole, setCurrentRole] = useState<Role>("all");
    const [activeTab, setActiveTab] = useState<Tab>("disclosure");
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const roles = [
        { id: "all" as const, label: "Everyone", icon: Users },
        { id: "faculty" as const, label: "Faculty", icon: GraduationCap },
        { id: "staff" as const, label: "Staff", icon: Briefcase },
    ];

    const tabs = [
        { id: "disclosure" as const, label: "Disclosure & Citation", icon: FileText },
        { id: "privacy" as const, label: "Data Privacy", icon: Lock },
        { id: "integrity" as const, label: "Academic Integrity", icon: Scale },
        { id: "assessment" as const, label: "Assessment Rules", icon: ClipboardCheck },
        { id: "ethics" as const, label: "Ethical Use", icon: Lightbulb },
    ];

    const tabContent = {
        disclosure: {
            title: "Disclosure & Citation Procedures",
            desc: "AI use must be disclosed whenever it contributes substantially to a final submission. Minor uses — grammar checking, translation, summarising notes, or brainstorming — do not require formal disclosure.",
            list: [
                { text: "Identify whether your AI use was substantial or minor before submitting any work.", tags: ["all"] },
                { text: "If substantial, include a disclosure statement: \"This work includes assistance from [AI Tool Name], used for [specific purpose].\"", tags: ["all"] },
                { text: "Faculty must communicate citation expectations clearly in course materials before any AI-assisted work is due.", tags: ["faculty"] },
                { text: "Undisclosed substantial AI use is treated as an academic integrity violation.", tags: ["all"] },
            ]
        },
        privacy: {
            title: "Data Privacy & Security Procedures",
            desc: "University data, research findings, and intellectual property must not be shared with AI platforms without prior approval. Personal data must never be entered into AI tools.",
            list: [
                { text: "Never enter student personal data, exam content, or unpublished research into any AI platform.", tags: ["all"] },
                { text: "University-owned data requires written approval from the concerned authority before sharing with any AI tool.", tags: ["faculty", "staff"] },
                { text: "Verify that any AI tool you plan to use has a signed Data Processing Agreement (DPA) with the university.", tags: ["faculty", "staff"] },
                { text: "Comply with relevant data protection laws and institutional information security policies at all times.", tags: ["all"] },
                { text: "Be aware that the university may audit AI usage to ensure compliance with privacy standards.", tags: ["all"] },
            ]
        },
        integrity: {
            title: "Academic Integrity Procedures",
            desc: "Misuse of AI constitutes a breach of academic integrity. Users are responsible for ensuring their work accurately represents their own effort and thinking.",
            list: [
                { text: "Do not submit AI-generated content as your own original work without appropriate disclosure.", tags: ["all"] },
                { text: "Do not use AI to fabricate references, data, or research results.", tags: ["all"] },
                { text: "Always critically evaluate AI outputs — do not present AI-generated arguments or conclusions as your own analysis without verification.", tags: ["all"] },
                { text: "Faculty must design assessments that balance AI integration with demonstration of individual effort.", tags: ["faculty"] },
            ]
        },
        assessment: {
            title: "Assessment Rules & Procedures",
            desc: "AI is permitted by default in non-proctored assessments unless restricted by faculty. Proctored exams prohibit AI by default.",
            list: [
                { text: "Faculty must explicitly state AI permissions or restrictions at the start of any assignment or assessment.", tags: ["faculty"] },
                { text: "AI-assisted grading by faculty requires prior approval of the evaluation prompt used.", tags: ["faculty"] },
                { text: "All AI-grading prompts and outputs must be logged and retained for 3 years.", tags: ["faculty"] },
                { text: "Faculty must review AI-generated evaluations before disseminating results to students.", tags: ["faculty"] },
                { text: "Students may challenge any AI-influenced grade within 14 days of publication by submitting a formal written challenge to the faculty concerned.", tags: ["student"] },
                { text: "Formal examination-managed evaluations are excluded from faculty AI evaluation rules.", tags: ["faculty"] },
            ]
        },
        ethics: {
            title: "Ethical Use Procedures",
            desc: "AI is a support tool — not a replacement for human judgment, critical thinking, or academic skills. All AI use must align with values of fairness, accountability, and integrity.",
            list: [
                { text: "Always critically review AI outputs for hallucinations, bias, or misinformation before using them.", tags: ["all"] },
                { text: "Use only University-approved AI tools for academic and administrative work.", tags: ["all"] },
                { text: "Faculty must conduct a bias and accessibility evaluation before adopting any new AI system.", tags: ["faculty"] },
                { text: "Report any identified biased or inaccurate AI-generated content to the relevant authority.", tags: ["staff"] },
                { text: "Do not rely solely on AI to form arguments, conduct analyses, or draw conclusions in academic or professional work.", tags: ["all"] },
            ]
        }
    };

    const checklists = [
        {
            role: "all",
            title: "📋 Before Using Any AI Tool",
            items: [
                "Confirm the tool is on the approved list",
                "Ensure the tool has an approved Data Processing Agreement (DPA)",
                "Check you are not entering personal data, exam content, or unpublished research",
                "Understand the purpose — AI should support, not replace your thinking"
            ]
        },
        {
            role: "student",
            title: "🎓 Before Submitting AI-Assisted Work",
            items: [
                "Determine if AI use was substantial or minor",
                "If substantial, draft your disclosure statement",
                "Apply the citation format required by your course (APA / MLA / IEEE)",
                "Critically review all AI-generated content for accuracy and bias",
                "Confirm AI was not used in a prohibited context (e.g. proctored exam)"
            ]
        },
        {
            role: "faculty",
            title: "👩‍🏫 Before Using AI for Grading",
            items: [
                "Ensure the evaluation prompt has been reviewed and verified",
                "Confirm the AI tool is approved for evaluation use",
                "Log the prompt and retain output records (minimum 3 years)",
                "Review AI-generated evaluations before releasing results",
                "Inform students of their right to challenge within 14 days"
            ]
        },
        {
            role: "faculty",
            title: "📐 Before Designing an AI-Permitted Assessment",
            items: [
                "Clearly state AI permissions or restrictions in the assessment brief",
                "Design tasks that require individual reasoning, not just AI output",
                "Specify citation and disclosure requirements for students",
                "Consider AI detection methods or human review protocols if needed"
            ]
        },
        {
            role: "staff",
            title: "🏢 Before Using AI for Administrative Tasks",
            items: [
                "Verify the AI tool is approved for administrative use",
                "Do not input confidential data without prior approval",
                "Review all AI-generated outputs before official use or distribution",
                "Comply with institutional information security and data protection policies"
            ]
        },
        {
            role: "faculty",
            title: "🔍 Before Adopting a New AI Tool",
            items: [
                "Submit a request for approval to the concerned university authority",
                "Complete the bias and accessibility evaluation checklist",
                "Verify dataset provenance and known failure modes",
                "Confirm compatibility with assistive technologies",
                "Ensure DPA is signed before procurement"
            ]
        }
    ];

    const scenarios = [
        {
            roles: ["student"],
            q: "Can I use ChatGPT or other AI tools for my assignment?",
            a: "Yes, by default — AI is permitted in non-proctored assignments unless your faculty has explicitly restricted it. Always check the assignment brief first. If you use AI substantially, you must disclose it using the format: \"This work includes assistance from [AI Tool Name], used for [specific purpose].\" Minor uses (grammar check, brainstorming, translation) do not require disclosure."
        },
        {
            roles: ["student"],
            q: "Can I use AI during a proctored exam?",
            a: "No. AI is not permitted by default in proctored examinations. Using AI in a proctored exam is a breach of academic integrity and may result in grade reduction, referral to the Academic Integrity Committee, or in severe cases, suspension or expulsion."
        },
        {
            roles: ["student"],
            q: "I believe my grade was unfairly influenced by AI. What can I do?",
            a: "You have the right to challenge any grade influenced by AI evaluation. Submit a formal written challenge to the concerned faculty within 14 days of the grade being published. Include your justification and any evidence highlighting your concerns. The faculty is required to review it transparently. If needed, the evaluation will be re-examined manually. You will receive a clear explanation of the outcome."
        },
        {
            roles: ["faculty"],
            q: "Can I use AI to grade student assignments?",
            a: "Yes, with conditions. The AI tool must be pre-approved by IQAC. The specific evaluation prompt you use must also be pre-approved. You must log all prompts and outputs and retain them for a minimum of 3 years. You must review evaluations before releasing results, and you must inform students of their right to appeal within 14 days. Note: this does not apply to evaluations managed by Pariksha Vibhaga."
        },
        {
            roles: ["faculty"],
            q: "I want to introduce a new AI tool in my course. What's the process?",
            a: "You must obtain prior approval from the concerned university authority before adopting any new AI tool for teaching, evaluation, or administration. The university will conduct a bias and accessibility evaluation covering dataset provenance, failure modes, and compatibility with assistive technologies. The vendor must sign a Data Processing Agreement (DPA) before the tool can be used."
        },
        {
            roles: ["all"],
            q: "What if an AI tool gives me biased or inaccurate output?",
            a: "All users are responsible for critically evaluating AI outputs before relying on them. AI can produce biased, inaccurate, or hallucinated content. Do not present AI output as fact without verification. Students and staff should report identified biased or inaccurate AI content to the relevant authority. Faculty should educate students on identifying and mitigating AI-generated errors."
        },
        {
            roles: ["all", "staff"],
            q: "Can I enter university data or student records into an AI tool?",
            a: "No, not without approval. Institutional data, research findings, and proprietary intellectual property must not be shared with public AI platforms without prior written authorization. Personal data — including student records, exam materials, or sensitive HR data — must never be entered into external AI tools. Always verify that any tool you use complies with data protection agreements."
        }
    ];

    const penalties = [
        { level: "⚠️", title: "Level 1 — Formal Warning", desc: "Minor violations: failure to disclose AI use where required, or minor misuse without intent to deceive.", color: "bg-amber-50 border-amber-200", iconBg: "bg-amber-100", icon: AlertTriangle },
        { level: "📉", title: "Level 2 — Grade Reduction", desc: "Reduction of marks for the concerned assignment or examination where AI was misused.", color: "bg-orange-50 border-orange-200", iconBg: "bg-orange-100", icon: TrendingDown },
        { level: "🔄", title: "Level 3 — Mandatory Resubmission", desc: "Student is required to resubmit work with appropriate AI disclosure and corrections.", color: "bg-pink-50 border-pink-200", iconBg: "bg-pink-100", icon: RotateCcw },
        { level: "🏛️", title: "Level 4 — Academic Integrity Committee Referral", desc: "Serious violations including submitting AI-generated work as original, using AI in proctored exams, or fabricating data/references with AI.", color: "bg-red-50 border-red-200", iconBg: "bg-red-100", icon: Building2 },
        { level: "🚫", title: "Level 5 — Suspension or Expulsion", desc: "Severe or repeated violations of the AI Usage Policy, as determined by the Academic Integrity Committee.", color: "bg-rose-50 border-rose-200", iconBg: "bg-rose-100", icon: XCircle },
    ];

    return (
        <Layout>
            <section className="relative bg-slate-900 pt-32 pb-24 overflow-hidden border-b border-white/10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-32" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -ml-32 -mb-32" />

                <div className="container relative z-10 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-accent font-bold tracking-widest uppercase mb-8 animate-fade-in shadow-xl">
                            <ShieldCheck className="h-4 w-4" />
                            Official Guidance
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight animate-slide-up">
                            AI Usage Procedures <br />
                            <span className="text-white/60 font-light italic">&amp; Best Practices</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light font-sans max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Practical procedures, checklists, and guidance for responsible AI use in academic and research settings.
                        </p>

                        <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            {roles.map((role) => (
                                <button
                                    key={role.id}
                                    onClick={() => setCurrentRole(role.id)}
                                    className={cn(
                                        "flex items-center gap-3 px-6 py-3 rounded-full font-accent font-bold text-sm tracking-widest uppercase transition-all duration-300",
                                        currentRole === role.id 
                                            ? "bg-primary text-white shadow-lg scale-105" 
                                            : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    <role.icon className="h-4 w-4" />
                                    {role.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <main className="container max-w-5xl py-20 px-4">
                {currentRole !== "all" && (
                    <div className="mb-12 animate-fade-in">
                        <div className="flex items-center gap-4 bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl shadow-sm">
                            <div className="p-3 rounded-xl bg-primary text-white">
                                {roles.find(r => r.id === currentRole)?.icon && <span className="h-6 w-6 shrink-0">{/* Need to render icon here properly */}
                                    {(() => {
                                        const role = roles.find(r => r.id === currentRole);
                                        if (role) {
                                            const Icon = role.icon;
                                            return <Icon className="h-6 w-6" />
                                        }
                                        return null;
                                    })()}
                                </span>}
                            </div>
                            <p className="text-lg font-bold text-slate-800">
                                Showing content relevant to {roles.find(r => r.id === currentRole)?.label} — checklists, specific rules, and tailored guidance.
                            </p>
                        </div>
                    </div>
                )}

                {/* Quick Reference Tabs */}
                <div className="mb-24">
                    <h2 className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-6">Quick Reference</h2>
                    <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
                        <div className="flex overflow-x-auto bg-slate-50 border-b scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "flex items-center gap-2 px-8 py-5 text-sm font-bold tracking-tight whitespace-nowrap transition-all border-b-4",
                                        activeTab === tab.id 
                                            ? "text-primary border-primary bg-white" 
                                            : "text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-100"
                                    )}
                                >
                                    <tab.icon className="h-4 w-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className="p-10 animate-fade-in" key={activeTab}>
                            <h3 className="font-display text-2xl font-black text-slate-800 mb-4">{tabContent[activeTab].title}</h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">{tabContent[activeTab].desc}</p>
                            <ul className="space-y-4">
                                {tabContent[activeTab].list.map((item, i) => (
                                    <li key={i} className="flex gap-4 p-5 bg-slate-50 border rounded-2xl group transition-all hover:border-primary/20 hover:bg-white hover:shadow-md">
                                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1 pointer-events-none" />
                                        <div className="flex-1">
                                            <p className="text-slate-800 leading-relaxed">{item.text}</p>
                                            <div className="mt-2 flex gap-2">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className={cn(
                                                        "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border",
                                                        tag === "all" ? "bg-slate-100 text-slate-500 border-slate-200" :
                                                        tag === "faculty" ? "bg-blue-50 text-blue-600 border-blue-100" :
                                                        tag === "student" ? "bg-green-50 text-green-600 border-green-100" :
                                                        "bg-purple-50 text-purple-600 border-purple-100"
                                                    )}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Checklists */}
                <div className="mb-24">
                    <h2 className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-8">Step-by-Step Checklists</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {checklists.filter(c => currentRole === "all" || c.role === "all" || c.role === currentRole).map((checklist, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 border hover:shadow-xl transition-shadow group">
                                <h4 className="font-display text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-primary rounded-full group-hover:h-10 transition-all" />
                                    {checklist.title}
                                </h4>
                                <div className="space-y-4">
                                    {checklist.items.map((item, i) => (
                                        <label key={i} className="flex items-start gap-3 cursor-pointer group/item">
                                            <div className="mt-1 relative flex items-center justify-center">
                                                <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-md border-2 border-slate-300 checked:bg-primary checked:border-primary transition-all cursor-pointer" />
                                                <CheckCircle2 className="absolute h-3.5 w-3.5 text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700 peer-checked:text-slate-400 peer-checked:line-through transition-colors">
                                                {item}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scenarios Accordion */}
                <div className="mb-24">
                    <h2 className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-8">Common Scenarios</h2>
                    <div className="space-y-3">
                        {scenarios.filter(s => currentRole === "all" || s.roles.includes("all") || s.roles.includes(currentRole)).map((scenario, idx) => (
                            <div 
                                key={idx} 
                                className={cn(
                                    "bg-white rounded-2xl border transition-all duration-300",
                                    openAccordion === idx ? "shadow-lg border-primary/30" : "hover:border-primary/20"
                                )}
                            >
                                <button 
                                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                                            openAccordion === idx ? "bg-primary text-white" : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
                                        )}>
                                            <ArrowRight className={cn("h-5 w-5 transition-transform", openAccordion === idx && "rotate-90")} />
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-800 block text-lg">{scenario.q}</span>
                                            <div className="mt-1 flex gap-2">
                                                {scenario.roles.map(r => (
                                                    <span key={r} className="text-[9px] font-black uppercase tracking-widest text-primary/60">
                                                        {r}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {openAccordion === idx ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                                </button>
                                {openAccordion === idx && (
                                    <div className="px-6 pb-8 pt-2 animate-fade-in">
                                        <div className="pl-14 pr-4 border-l-2 border-primary/20 ml-5 py-2">
                                            <p className="text-slate-600 leading-relaxed font-light text-lg">
                                                {scenario.a}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Penalties */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-xs font-black tracking-[0.4em] uppercase text-red-600 block mb-4">Accountability</span>
                        <h2 className="font-display text-4xl font-black text-slate-900 mb-4">Violations & Penalties</h2>
                        <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full" />
                    </div>

                    <div className="space-y-4">
                        {penalties.map((penalty, idx) => (
                            <div key={idx} className={cn("flex items-stretch rounded-3xl border-2 transition-transform hover:-translate-y-1 overflow-hidden", penalty.color)}>
                                <div className={cn("w-20 sm:w-24 shrink-0 flex items-center justify-center border-r-2", penalty.iconBg)}>
                                    <penalty.icon className="h-8 w-8 text-slate-800" />
                                </div>
                                <div className="p-6 md:p-8 flex-1">
                                    <h4 className="font-display text-xl font-black text-slate-800 mb-2">{penalty.title}</h4>
                                    <p className="text-slate-600 leading-relaxed font-light">{penalty.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Policy Info */}
                <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                                <ShieldCheck className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-display text-2xl font-black italic">Policy Review &amp; Maintenance</h3>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10 font-light italic">
                            This guidance is aligned with ethical AI usage best practices and higher education compliance frameworks. The standards are reviewed and updated continuously, considering technological advancements and community feedback.
                        </p>
                        <hr className="border-white/10 mb-8" />
                        <div className="flex flex-col sm:flex-row justify-between gap-6">
                            <p className="text-sm text-slate-400">For queries or to report AI misuse, contact your <strong className="text-white">Academic Advisory</strong> or the <strong className="text-white">AI Ethics Desk</strong>.</p>
                            <Button asChild variant="hero" className="rounded-full px-8 group shrink-0">
                                <a href="mailto:support@bossofai.org">
                                    Contact AI Desk
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default StaffAIProcedures;
