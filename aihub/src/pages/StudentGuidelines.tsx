import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { 
  Users, 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  HelpCircle, 
  Sparkles, 
  FileText, 
  ClipboardList, 
  Wand2, 
  ListChecks, 
  Zap, 
  AlertTriangle, 
  Gavel, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Clipboard,
  RotateCcw,
  TrendingDown,
  Building2,
  ThumbsUp,
  ThumbsDown,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type View = "dos-donts" | "scenarios" | "disclosure" | "checklist" | "penalties";

const StudentGuidelines = () => {
    const [activeView, setActiveView] = useState<View>("dos-donts");
    const [openScenario, setOpenScenario] = useState<number | null>(null);
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
    const { toast } = useToast();

    // Disclosure Builder State
    const [disclosureForm, setDisclosureForm] = useState({
        tool: "",
        purpose: "",
        format: "",
        name: ""
    });
    const [generatedDisclosure, setGeneratedDisclosure] = useState("");

    const navPills = [
        { id: "dos-donts" as const, label: "Do's & Don'ts", icon: CheckCircle2 },
        { id: "scenarios" as const, label: "Real Scenarios", icon: MessageSquare },
        { id: "disclosure" as const, label: "Disclosure Builder", icon: Wand2 },
        { id: "checklist" as const, label: "Submission Checklist", icon: ListChecks },
        { id: "penalties" as const, label: "Violations & Penalties", icon: AlertTriangle },
    ];

    const toggleCheck = (id: string) => {
        const newSet = new Set(checkedItems);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setCheckedItems(newSet);
    };

    const checklistProgress = useMemo(() => {
        const total = 14;
        return Math.round((checkedItems.size / total) * 100);
    }, [checkedItems]);

    const handleGenerateDisclosure = () => {
        if (!disclosureForm.tool || !disclosureForm.purpose) {
            toast({
                title: "Incomplete Form",
                description: "Please provide both the AI tool name and the specific purpose.",
                variant: "destructive"
            });
            return;
        }

        let statement = `"This work includes assistance from ${disclosureForm.tool}, used for ${disclosureForm.purpose}."`;
        if (disclosureForm.format) statement += `\n\nCitation format: ${disclosureForm.format}`;
        if (disclosureForm.name) statement += `\n\nSubmitted by: ${disclosureForm.name}`;

        setGeneratedDisclosure(statement);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast({
            title: "Copied!",
            description: "Disclosure statement copied to clipboard.",
        });
    };

    const scenarios = [
        {
            emoji: "📝",
            q: "I used ChatGPT to help write part of my assignment. Do I need to mention it?",
            verdict: "Depends",
            verdictClass: "bg-amber-100 text-amber-700",
            a: "It depends on how much it contributed. If AI helped substantially — drafting sections, generating arguments, structuring content — you must disclose it. If you only used it for grammar checking, rephrasing a sentence, or brainstorming ideas that you then developed yourself, disclosure is not required.",
            tip: "When in doubt, disclose. A disclosure statement cannot harm you; missing one can."
        },
        {
            emoji: "🖥️",
            q: "My faculty hasn't said anything about AI. Can I use it for my assignment?",
            verdict: "Yes",
            verdictClass: "bg-green-100 text-green-700",
            a: "Yes — AI is permitted by default in non-proctored assignments unless your faculty has explicitly restricted it. However, you are still responsible for disclosing substantial AI use and for critically verifying any AI-generated content before submitting.",
            tip: "\"No restriction mentioned\" ≠ \"no rules apply.\" Disclosure and integrity rules still apply."
        },
        {
            emoji: "📖",
            q: "Can I use AI during my end-semester exam?",
            verdict: "No",
            verdictClass: "bg-red-100 text-red-700",
            a: "No. Proctored examinations prohibit AI use by default. Using AI in a proctored exam is a serious academic integrity violation and can result in grade reduction, referral to the Academic Integrity Committee, or even suspension.",
            tip: "Only exception: if your faculty explicitly permits a specific AI tool in writing before the exam."
        },
        {
            emoji: "🤖",
            q: "I asked AI for references and it gave me some. Can I cite them in my report?",
            verdict: "No",
            verdictClass: "bg-red-100 text-red-700",
            a: "Never cite AI-generated references without verifying them independently. AI tools frequently hallucinate — they can generate journal articles, authors, or page numbers that do not exist. Using fabricated references is treated as academic fraud.",
            tip: "Always look up every reference in Google Scholar, Scopus, or your library portal before using it."
        },
        {
            emoji: "📊",
            q: "I think my assignment was graded unfairly by AI. What can I do?",
            verdict: "Challenge it",
            verdictClass: "bg-green-100 text-green-700",
            a: "You have the right to challenge any AI-influenced grade. Submit a formal written challenge to your faculty within 14 days of the result being published. Include your specific concerns and any evidence. The faculty must review it transparently and provide a clear explanation of the outcome. If needed, the evaluation will be manually verified.",
            tip: "Act quickly — the 14-day window starts from the date of grade publication, not when you notice it."
        },
        {
            emoji: "🔒",
            q: "Can I paste my project report into an AI tool to get feedback?",
            verdict: "Caution",
            verdictClass: "bg-amber-100 text-amber-700",
            a: "Be careful. If your project contains original research, unpublished data, or university IP, you must not share it with AI platforms without prior approval. If it contains personal data of others (e.g., survey responses), that is also prohibited.",
            tip: "When in doubt about sensitivity, ask your faculty before pasting anything into an AI tool."
        },
        {
            emoji: "👥",
            q: "My group used AI to prepare our presentation. Does everyone need to disclose?",
            verdict: "Yes",
            verdictClass: "bg-green-100 text-green-700",
            a: "Yes. The AI usage policy applies to all group work and collaborative tasks. If AI contributed substantially to the final submission, the disclosure must be included in the group submission itself. Every member of the group is accountable.",
            tip: "Agree on disclosure as a group before submitting. One disclosure statement covers the whole group."
        }
    ];

    const penalties = [
        { level: "⚠️", title: "Level 1 — Formal Warning", desc: "Minor first-time violations: failing to disclose AI use where required, without intent to deceive.", color: "bg-amber-50 border-amber-200", iconBg: "bg-amber-100", icon: AlertTriangle },
        { level: "📉", title: "Level 2 — Grade Reduction", desc: "Marks reduced for the specific assignment or examination where AI was misused.", color: "bg-orange-50 border-orange-200", iconBg: "bg-orange-100", icon: TrendingDown },
        { level: "🔄", title: "Level 3 — Mandatory Resubmission", desc: "Required to redo the work with proper disclosure and corrections before it can be assessed.", color: "bg-pink-50 border-pink-200", iconBg: "bg-pink-100", icon: RotateCcw },
        { level: "🏛️", title: "Level 4 — Academic Integrity Committee Referral", desc: "Serious violations escalated for formal disciplinary proceedings.", color: "bg-red-50 border-red-200", iconBg: "bg-red-100", icon: Building2 },
        { level: "🚫", title: "Level 5 — Suspension or Expulsion", desc: "Severe or repeated violations as determined by the Academic Integrity Committee.", color: "bg-rose-50 border-rose-200", iconBg: "bg-rose-100", icon: XCircle },
    ];

    return (
        <Layout>
            <section className="relative bg-teal-950 pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <circle cx="100" cy="100" r="150" fill="#2dd4bf" />
                        <circle cx="700" cy="300" r="100" fill="#0d9488" />
                    </svg>
                </div>

                <div className="container relative z-10 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-accent font-bold tracking-widest uppercase mb-8 animate-fade-in shadow-xl">
                            <Users className="h-4 w-4" />
                            Student Guide — BossOfAI Hub
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight animate-slide-up">
                            Using AI Responsibly: <br />
                            <span className="text-teal-400 font-light italic">Your Do's &amp; Don'ts</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-100/80 leading-relaxed font-light font-sans max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Everything you need to know about using AI tools responsibly — what's allowed, what's not, and how to stay on the right side of policy.
                        </p>

                        <div className="flex flex-wrap gap-2 animate-slide-up border-b border-white/10" style={{ animationDelay: '0.2s' }}>
                            {navPills.map((pill) => (
                                <button
                                    key={pill.id}
                                    onClick={() => setActiveView(pill.id)}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-3 rounded-t-2xl font-bold text-sm transition-all duration-300",
                                        activeView === pill.id 
                                            ? "bg-slate-50 text-teal-900 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] translate-y-0" 
                                            : "text-white/60 hover:text-white hover:bg-white/5 translate-y-1"
                                    )}
                                >
                                    <pill.icon className="h-4 w-4" />
                                    {pill.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <main className="container max-w-4xl py-16 px-4 min-h-[600px]">
                
                {/* VIEW 1: DO'S & DON'TS */}
                {activeView === "dos-donts" && (
                    <div className="space-y-16 animate-fade-in">
                        <section>
                            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-teal-600 mb-8">General AI Use</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
                                    <div className="bg-green-500 py-4 px-6 text-white font-black flex items-center gap-2">
                                        <ThumbsUp className="h-5 w-5" />
                                        <span>DO</span>
                                    </div>
                                    <div className="p-4 space-y-4">
                                        {[
                                            "Use AI tools only from your institution's approved list",
                                            "Use AI to brainstorm, check grammar, or translate — no disclosure needed",
                                            "Critically review every output for accuracy and bias before using it",
                                            "Use AI as a thinking aid — let it support, not replace, reasoning",
                                            "Report biased or inaccurate content to your faculty"
                                        ].map((text, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-green-200 transition-colors">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                <p className="text-sm font-medium text-slate-700">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
                                    <div className="bg-rose-500 py-4 px-6 text-white font-black flex items-center gap-2">
                                        <ThumbsDown className="h-5 w-5" />
                                        <span>DON'T</span>
                                    </div>
                                    <div className="p-4 space-y-4">
                                        {[
                                            "Use unapproved or personal AI tools for submissions",
                                            "Enter personal data, classmates' data, or exam materials",
                                            "Accept AI output at face value — always verify first",
                                            "Let AI do all your thinking or substitute your work",
                                            "Share university IP or unpublished research with AI"
                                        ].map((text, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-rose-200 transition-colors">
                                                <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                                                <p className="text-sm font-medium text-slate-700">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-teal-600 mb-8">Assignments & Submissions</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
                                    <div className="bg-green-500 py-4 px-6 text-white font-black flex items-center gap-2">
                                        <ThumbsUp className="h-5 w-5" />
                                        <span>DO</span>
                                    </div>
                                    <div className="p-4 space-y-4">
                                        {[
                                            "Disclose AI use when it substantially contributed to work",
                                            "Use APA / MLA / IEEE format for AI citations",
                                            "Add a standard disclosure statement to your work",
                                            "Check your assignment brief for specific permission",
                                            "Use AI in non-proctored tasks unless restricted"
                                        ].map((text, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-green-200 transition-colors">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                <p className="text-sm font-medium text-slate-700">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
                                    <div className="bg-rose-500 py-4 px-6 text-white font-black flex items-center gap-2">
                                        <ThumbsDown className="h-5 w-5" />
                                        <span>DON'T</span>
                                    </div>
                                    <div className="p-4 space-y-4">
                                        {[
                                            "Submit AI-generated content as original work",
                                            "Use AI to fabricate references or research data",
                                            "Skip disclosure just because you edited the output",
                                            "Assume AI is always allowed without checking",
                                            "Use AI for group work without group agreement"
                                        ].map((text, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-rose-200 transition-colors">
                                                <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                                                <p className="text-sm font-medium text-slate-700">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* VIEW 2: SCENARIOS */}
                {activeView === "scenarios" && (
                    <div className="space-y-8 animate-fade-in">
                        <h2 className="text-xs font-black tracking-[0.3em] uppercase text-teal-600">What Would You Do?</h2>
                        <div className="space-y-4">
                            {scenarios.map((sc, idx) => (
                                <div key={idx} className={cn("bg-white rounded-3xl border transition-all duration-300", openScenario === idx ? "shadow-xl border-teal-500/30" : "hover:border-teal-500/20 shadow-sm")}>
                                    <button 
                                        onClick={() => setOpenScenario(openScenario === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl">{sc.emoji}</span>
                                            <div className="flex-1">
                                                <span className="font-bold text-slate-800 text-lg block">{sc.q}</span>
                                                <span className={cn("inline-block mt-2 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest", sc.verdictClass)}>
                                                    Verdict: {sc.verdict}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-all", openScenario === idx ? "bg-teal-500 text-white rotate-45" : "bg-teal-50 text-teal-500 group-hover:bg-teal-500 group-hover:text-white")}>
                                            <ChevronDown className="h-5 w-5" />
                                        </div>
                                    </button>
                                    {openScenario === idx && (
                                        <div className="px-10 pb-8 pt-2 animate-fade-in border-t border-slate-50">
                                            <p className="text-slate-600 leading-relaxed font-light text-lg mb-6">{sc.a}</p>
                                            <div className="flex gap-3 bg-teal-50 border border-teal-100 p-5 rounded-2xl text-teal-900 shadow-inner">
                                                <Sparkles className="h-6 w-6 shrink-0 mt-1" />
                                                <p className="font-semibold italic">{sc.tip}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW 3: DISCLOSURE BUILDER */}
                {activeView === "disclosure" && (
                    <div className="animate-fade-in space-y-8">
                        <h2 className="text-xs font-black tracking-[0.3em] uppercase text-teal-600">Build Your Disclosure Statement</h2>
                        <div className="bg-white rounded-3xl shadow-xl border p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Wand2 className="h-32 w-32" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-display text-2xl font-black text-slate-800 mb-2">Statement Generator</h3>
                                <p className="text-slate-500 mb-10 italic">Fill in the details to generate an ethical AI disclosure statement.</p>

                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">AI Tool Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. ChatGPT-4, Claude 3.5 Sonnet..." 
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-teal-500 outline-none transition-all"
                                            value={disclosureForm.tool}
                                            onChange={(e) => setDisclosureForm({...disclosureForm, tool: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Specific Purpose</label>
                                        <textarea 
                                            placeholder="e.g. generating a structure for the project report, explaining the neural network layers..." 
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-teal-500 outline-none transition-all min-h-[100px]"
                                            value={disclosureForm.purpose}
                                            onChange={(e) => setDisclosureForm({...disclosureForm, purpose: e.target.value})}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Citation Format</label>
                                            <select 
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-teal-500 outline-none transition-all appearance-none"
                                                value={disclosureForm.format}
                                                onChange={(e) => setDisclosureForm({...disclosureForm, format: e.target.value})}
                                            >
                                                <option value="">— Select format —</option>
                                                <option value="APA">APA</option>
                                                <option value="MLA">MLA</option>
                                                <option value="IEEE">IEEE</option>
                                                <option value="Chicago">Chicago</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Name / Roll No (Optional)</label>
                                            <input 
                                                type="text" 
                                                placeholder="e.g. Sanjay - 24CS001" 
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-teal-500 outline-none transition-all"
                                                value={disclosureForm.name}
                                                onChange={(e) => setDisclosureForm({...disclosureForm, name: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <Button onClick={handleGenerateDisclosure} className="w-full py-8 text-xl font-bold bg-teal-600 hover:bg-teal-700 rounded-2xl shadow-lg">
                                        Generate Statement
                                        <ArrowRight className="ml-2 h-6 w-6" />
                                    </Button>
                                </div>

                                {generatedDisclosure && (
                                    <div className="mt-12 animate-slide-up">
                                        <div className="p-8 rounded-3xl bg-teal-50 border-2 border-dashed border-teal-500/50 group">
                                            <p className="text-lg font-serif italic text-teal-900 leading-relaxed whitespace-pre-line">
                                                {generatedDisclosure}
                                            </p>
                                            <Button 
                                                variant="ghost" 
                                                className="mt-6 w-full py-6 rounded-xl border border-teal-200 text-teal-700 hover:bg-teal-500 hover:text-white transition-all font-bold"
                                                onClick={() => copyToClipboard(generatedDisclosure)}
                                            >
                                                <Clipboard className="mr-2 h-5 w-5" />
                                                Copy to Clipboard
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW 4: CHECKLIST */}
                {activeView === "checklist" && (
                    <div className="animate-fade-in space-y-8">
                        <h2 className="text-xs font-black tracking-[0.3em] uppercase text-teal-600">Pre-Submission Checklist</h2>
                        <div className="bg-white rounded-3xl border shadow-xl p-10">
                            <div className="mb-12">
                                <div className="flex justify-between items-end mb-4">
                                    <h3 className="font-display text-2xl font-black text-slate-800">Submission Readiness</h3>
                                    <span className="font-black text-teal-600">{checklistProgress}% Ready</span>
                                </div>
                                <div className="h-4 bg-slate-100 rounded-full overflow-hidden border">
                                    <div 
                                        className="h-full bg-teal-500 transition-all duration-500 ease-out"
                                        style={{ width: `${checklistProgress}%` }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-12">
                                {[
                                    { 
                                        group: "Tool & Approval", 
                                        items: [
                                            { id: "ch1", text: "I have confirmed the AI tool I used is compliant with institutional guidelines" },
                                            { id: "ch2", text: "I checked that the tool has a Data Processing Agreement (DPA) with the university" },
                                            { id: "ch3", text: "I have not entered any personal data, exam content, or unpublished research into the tool" }
                                        ] 
                                    },
                                    { 
                                        group: "AI Permission Check", 
                                        items: [
                                            { id: "ch4", text: "I have read the assignment brief and confirmed AI is permitted for this task" },
                                            { id: "ch5", text: "If this is a proctored assessment, I have NOT used any AI tools" }
                                        ] 
                                    },
                                    { 
                                        group: "Content Verification", 
                                        items: [
                                            { id: "ch6", text: "I have critically reviewed all AI output for accuracy and factual correctness" },
                                            { id: "ch7", text: "I have independently verified every reference or citation suggested by the AI" },
                                            { id: "ch8", text: "I checked the output for potential bias or misleading claims" },
                                            { id: "ch9", text: "The work reflects my own analysis — AI was a tool, not the author" }
                                        ] 
                                    },
                                    { 
                                        group: "Disclosure & Citation", 
                                        items: [
                                            { id: "ch10", text: "I have determined whether my AI use was substantial (needs disclosure)" },
                                            { id: "ch11", text: "If substantial, I have included the disclosure statement in my submission" },
                                            { id: "ch12", text: "I used the specific citation format required by my course" }
                                        ] 
                                    }
                                ].map((group, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-teal-600 border-l-4 border-teal-500 pl-3">
                                            {group.group}
                                        </h4>
                                        <div className="space-y-3">
                                            {group.items.map((item) => (
                                                <label 
                                                    key={item.id} 
                                                    className={cn(
                                                        "flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer group",
                                                        checkedItems.has(item.id) ? "bg-slate-50 border-slate-200" : "hover:border-teal-500/30"
                                                    )}
                                                >
                                                    <div className="mt-1 relative flex items-center justify-center">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={checkedItems.has(item.id)}
                                                            onChange={() => toggleCheck(item.id)}
                                                            className="peer appearance-none w-6 h-6 rounded-md border-2 border-slate-300 checked:bg-teal-500 checked:border-teal-500 transition-all cursor-pointer" 
                                                        />
                                                        <Zap className="absolute h-4 w-4 text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
                                                    </div>
                                                    <span className={cn(
                                                        "font-medium transition-all group-hover:translate-x-1",
                                                        checkedItems.has(item.id) ? "text-slate-400 line-through" : "text-slate-700"
                                                    )}>
                                                        {item.text}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <Button 
                                variant="ghost" 
                                onClick={() => setCheckedItems(new Set())}
                                className="mt-12 text-slate-400 hover:text-rose-500 hover:bg-rose-50 font-bold"
                            >
                                <RotateCcw className="h-4 w-4 mr-2" />
                                Reset Checklist
                            </Button>
                        </div>
                    </div>
                )}

                {/* VIEW 5: PENALTIES */}
                {activeView === "penalties" && (
                    <div className="animate-fade-in space-y-12">
                        <section>
                            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-rose-600 mb-8">Penalty Severity Ladder</h2>
                            <div className="space-y-4">
                                {penalties.map((p, idx) => (
                                    <div key={idx} className={cn("flex items-stretch rounded-3xl border-2 transition-transform hover:-translate-y-1 overflow-hidden shadow-sm", p.color)}>
                                        <div className={cn("w-20 shrink-0 flex items-center justify-center border-r-2", p.iconBg)}>
                                            <p.icon className="h-8 w-8 text-slate-800" />
                                        </div>
                                        <div className="p-8 flex-1">
                                            <h4 className="font-display text-xl font-black text-slate-800 mb-2">{p.title}</h4>
                                            <p className="text-slate-600 leading-relaxed font-light">{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white rounded-3xl border shadow-xl p-10">
                            <h3 className="font-display text-2xl font-black text-slate-800 mb-8 text-rose-600">Prohibited Actions</h3>
                            <div className="grid gap-4">
                                {[
                                    "Submitting AI content as entirely your own work",
                                    "Using any AI tool during a proctored exam",
                                    "Using AI to fabricate references, data, or results",
                                    "Failing to disclose substantial AI use in work",
                                    "Entering student records or exam materials in AI",
                                    "Using AI where restricted by faculty",
                                    "Sharing university IP or unpublished research"
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-rose-50 border border-rose-100 rounded-2xl group hover:border-rose-300 transition-colors">
                                        <XCircle className="h-6 w-6 text-rose-500 shrink-0" />
                                        <p className="font-bold text-slate-800">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </main>

            <footer className="bg-slate-900 border-t border-white/10 py-20 px-4">
                <div className="container max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center">
                                    <Info className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-display text-2xl font-black italic text-white">Policy Disclaimer</h3>
                            </div>
                            <p className="text-teal-100/60 leading-relaxed italic">
                                This guide is derived from academic AI usage best practices and ethical AI governance standards.
                                Guidelines are reviewed continuously — check with your course instructors for specific requirements.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                            <h4 className="text-white font-bold mb-4">Have Questions?</h4>
                            <p className="text-white/60 text-sm mb-6">Reach out to the AI Ethics &amp; Support community for clarification on specific rules.</p>
                            <Button asChild className="w-full bg-white text-teal-950 hover:bg-teal-500 hover:text-white font-bold h-14">
                                <a href="mailto:support@bossofai.org">Contact AI Ethics Desk</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </Layout>
    );
};

export default StudentGuidelines;
