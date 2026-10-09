import React, { useState, useCallback, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface StageData {
    id: string;
    e: string;
    title: string;
    tag: string;
    desc: string;
    tools: string[];
    outcomes: string[];
    tracks: string[];
    courses?: { title: string; url: string; platform: string }[];
}
interface PathStep { id: string; l: string; }

// ─── Data ────────────────────────────────────────────────────────────────────
const SD: Record<string, StageData> = {
    F1: { id: "F1", e: "🌐", title: "AI Citizen", tag: "Modern literacy for the AI age — no code required", desc: "This foundational stage establishes your baseline understanding of artificial intelligence: what it is, what it isn't, and how it is reshaping professions across every domain. You'll explore real AI tools, learn to distinguish hype from reality, understand ethical frameworks, and practise responsible AI use. Mandatory for all students and faculty.", tools: ["Claude", "ChatGPT", "Gemini", "Microsoft Copilot", "AI Ethics Frameworks", "Responsible AI Guidelines"], outcomes: ["Explain what AI is and how it differs from traditional software", "Use at least two AI tools effectively for real learning or work tasks", "Identify and challenge common AI myths and misconceptions", "Articulate basic ethical principles around AI and data", "Understand and apply responsible AI usage guidelines"], tracks: ["All Faculties", "All Students", "All Faculty Members"], courses: [{title: "AI Prompting for Everyone", url: "https://www.deeplearning.ai/courses/ai-prompting-for-everyone/", platform: "DeepLearning.AI"}, {title: "AI for Everyone", url: "https://www.coursera.org/learn/ai-for-everyone", platform: "DeepLearning.AI / Coursera"}, {title: "AI for All", url: "https://www.skillindiadigital.gov.in/courses/detail/6606b92d-c73a-458d-94f4-ad5ff5fff177", platform: "Skill India Digital"}] },
    F2: { id: "F2", e: "⚡", title: "AI Creator", tag: "AI as your daily productivity and learning partner", desc: "This stage transforms how you work and learn every day. You'll master practical AI tools that help you research faster, summarise long documents, draft better writing, and create structured study workflows. The focus is on depth of skill with tools you will actually use daily.", tools: ["NotebookLM", "Julius AI", "Gemini Gems", "Claude Artifacts", "Perplexity AI", "Notion AI", "Otter.ai"], outcomes: ["Use NotebookLM to synthesise research from multiple sources", "Use Julius AI for automated data analysis and visualisation", "Build custom Gemini Gems for your specific domain", "Create and deploy Claude Artifacts for interactive outputs", "Design a personal AI-enhanced study or work workflow"], tracks: ["All Faculties", "All Students", "All Faculty Members"], courses: [{title: "Generative AI for Educators", url: "https://www.coursera.org/learn/generative-ai-for-educators", platform: "Google / Coursera"}, {title: "Google AI Essentials", url: "https://www.coursera.org/specializations/google-ai-essentials", platform: "Google / Coursera"}, {title: "High Impact Teaching Using Gemini & NotebookLM", url: "https://rulms.reva.edu.in/course/view.php?id=4292", platform: "REVA LMS"}] },
    A1: { id: "A1 / B1 / C1 / D1", e: "🛠️", title: "AI Maker", tag: "Build real things — no code required", desc: "The AI Maker stage is the shared entry point for all four tracks. You will build functional, real-world applications using no-code and low-code AI tools. Domain-relevant builds — an engineering student might build a sensor dashboard while a commerce student builds a business analysis tool.", tools: ["Google AppSheet", "Glide", "Softr", "Gemini Opal", "Bubble", "Make (Integromat)", "Airtable"], outcomes: ["Build a fully functional app without writing code", "Automate a real workflow in your domain using AI tools", "Connect data sources to create AI-enhanced dashboards", "Deploy a working app and gather user feedback", "Present your build and explain your design decisions"], tracks: ["Track A — Builder", "Track B — Core Engineer", "Track C — Applied Science", "Track D — Human-Centered"], courses: [
        { title: "AI Maker Google Antigravity Workshop", url: "https://github.com/rominirani/agy-workshop", platform: "Google / GitHub" }
    ] },
    A2: { id: "A2 / B2", e: "💻", title: "AI Native Orchestrator", tag: "AI as your coding co-pilot and architect", desc: "This stage introduces agentic development — where AI is not just autocomplete but a full co-developer that understands context, writes spec documents, plans architecture, and implements features. Develop the discipline to direct AI code generation through clear specifications.", tools: ["Cursor", "Kiro", "Antigravity", "GitHub Copilot", "v0.dev", "Bolt.new", "Claude Code"], outcomes: ["Write spec-driven prompts that generate production-quality code", "Use AI coding assistants to build a full feature end-to-end", "Review, debug, and refactor AI-generated code with confidence", "Understand agentic development workflows and best practices", "Build a portfolio project using AI-assisted development"], tracks: ["Track A — Builder (A2)", "Track B — Core Engineer (B2)"] },
    A3: { id: "A3", e: "🏗️", title: "AI Systems Architect", tag: "Build real AI-powered applications at scale", desc: "You move from building with AI tools to building AI-powered systems from scratch. Design and deploy full-stack applications that integrate LLMs via APIs, manage prompt engineering at scale, implement retrieval-augmented generation, and handle production deployment.", tools: ["OpenAI / Anthropic APIs", "LangChain", "FastAPI", "Supabase", "Vercel", "Pinecone", "Streamlit"], outcomes: ["Integrate a production LLM API into a working application", "Design and implement a RAG pipeline with a custom knowledge base", "Engineer prompts systematically for consistent, reliable outputs", "Deploy a full-stack AI application to a cloud platform", "Evaluate LLM outputs for accuracy, safety, and reliability"], tracks: ["Track A — Builder (A3)", "Track B — Core Engineer (B3, domain-focused)"] },
    A4: { id: "A4 / C3", e: "🔬", title: "AI Researcher", tag: "Understand and implement AI from first principles", desc: "The capstone of the technical pathway. Go deep into the mathematics and algorithms that underpin modern AI — linear algebra, probability, gradient descent, attention mechanisms, and transformer architecture. Implement models from scratch, read research papers, reproduce experiments.", tools: ["Python", "PyTorch", "NumPy", "HuggingFace", "Jupyter", "Papers With Code", "ArXiv"], outcomes: ["Derive and implement backpropagation from scratch", "Build and train a transformer model on a custom dataset", "Read, understand, and present a recent AI research paper", "Reproduce results from a published peer-reviewed paper", "Propose an original research question with methodology"], tracks: ["Track A — Builder (A4)", "Track D — Applied Science (C3)"] },
    B3: { id: "B3", e: "🏗️", title: "AI Systems Architect", tag: "Domain-focused AI for engineering applications", desc: "This engineering-specific variant focuses on building AI applications relevant to engineering domains — IoT data pipelines, structural analysis tools, predictive maintenance systems, circuit design aids, and simulation environments.", tools: ["Python", "FastAPI", "IoT Platforms", "TensorFlow Lite", "MATLAB + AI Toolbox", "Edge AI", "Azure IoT"], outcomes: ["Build an AI-enhanced monitoring system for an engineering application", "Integrate ML predictions into a real-time engineering workflow", "Design an AI API for domain-specific simulation or analysis", "Deploy an edge AI model on embedded hardware", "Evaluate AI outputs against engineering safety and accuracy standards"], tracks: ["Track B — Core Engineer (B3)"] },
    C2: { id: "C2", e: "📊", title: "AI Data Explorer", tag: "AI-accelerated research and data analysis for scientists", desc: "Uniquely designed for STEM researchers and scientists, this stage bridges no-code tools and deep research without requiring full software engineering. Work with AI-assisted data analysis in Python-light environments, use AI to accelerate literature synthesis, design experiments.", tools: ["Julius AI", "Jupyter + Copilot", "Python (pandas, matplotlib)", "Consensus AI", "Elicit", "Connected Papers", "Wolfram Alpha", "SPSS + AI"], outcomes: ["Use Julius AI for advanced statistical analysis and plotting", "Use AI to synthesise and critique 20+ research papers efficiently", "Run and interpret a machine learning analysis on domain data", "Build a Jupyter notebook workflow for a real research question", "Use AI tools to identify gaps and form a research hypothesis"], tracks: ["Track D — Applied Science (C2)"] },
    D2: { id: "D2", e: "🌍", title: "AI for Impact", tag: "Domain-specific AI for human-centered professions", desc: "Designed for students in law, liberal arts, architecture, design, and education. Explores how AI is transforming legal research, design processes, policy analysis, and social science research.", tools: ["Harvey / CoCounsel (Law)", "Midjourney / Spline (Design)", "Gamma (Presentations)", "ChatPDF", "AI for Excel", "Policy AI Tools", "Research Rabbit"], outcomes: ["Use domain-specific AI tools relevant to your field effectively", "Critically evaluate AI-generated outputs in a professional context", "Analyse the ethical and policy implications of AI in your domain", "Build an AI-enhanced workflow for a real professional task", "Present a domain-specific AI use case to peers and faculty"], tracks: ["Track E — Human-Centered (D2)"] },
    D3: { id: "D3", e: "🎯", title: "AI Changemaker", tag: "Design an AI intervention in your own domain", desc: "The capstone of the Human-Centered track. Identify a real problem in your professional or social domain and design an AI-informed intervention — a legal brief, architectural proposal, business model, or education reform grounded in AI capabilities.", tools: ["Notion AI", "Canva AI", "Gamma", "Research tools", "Domain-specific platforms", "Presentation AI"], outcomes: ["Define a real, significant problem in your domain with evidence", "Design and present an AI-informed intervention with a solid rationale", "Critically evaluate the limitations and risks of your proposed solution", "Produce a professional-quality deliverable (policy, design, business plan, etc.)", "Demonstrate responsible, critical AI fluency appropriate to your field"], tracks: ["Track F — Human-Centered (D3)"] },
    E2_DA: { id: "E2_DA", e: "🎨", title: "AI for Design & Architecture", tag: "Reimagining the creative process", desc: "Specifically for architects and designers. Learn to use generative AI for conceptual design, parametric modeling, and interior visualization. Explore tools like Midjourney for moodboarding, Spline for 3D, and AI-powered plugins for CAD/BIM software.", tools: ["Midjourney", "Spline", "Veras AI", "PromeAI", "LookX", "Rhino AI"], outcomes: ["Generate high-fidelity architectural visualizations from sketches", "Use AI for rapid interior design concept exploration", "Integrate AI-generated textures and components into 3D models", "Understand the ethics of AI in creative industry", "Design a parametric workflow using AI-assisted scripts"], tracks: ["Track E — Design & Architecture (E2)"] },
    M1: { id: "M1", e: "🛠️", title: "Commerce & Management AI Maker", tag: "Build business automation — no code required", desc: "Build functional business applications using no-code AI tools. Create automated inventory trackers, customer relationship dashboards, or business analysis tools tailored for commerce and management.", tools: ["Google AppSheet", "Glide", "Softr", "Airtable", "Make (Integromat)", "Bubble"], outcomes: ["Build a business-focused app without writing code", "Automate a repetitive business workflow", "Connect CSV/Google Sheet data to an AI-enhanced dashboard", "Deploy a working business tool and gather feedback"], tracks: ["Track C — Commerce & Management (M1)"] },
    M2: { id: "M2", e: "📊", title: "AI Business Intelligence", tag: "AI-accelerated analytics, marketing, and strategy", desc: "Master domain-specific AI for professional efficiency. Use AI for automated financial analysis, HR screening, and data-driven marketing strategy. Focus on tools that drive business growth and operational excellence.", tools: ["Pomelli", "Julius AI", "Datarails", "Lattice AI", "AdCreative.ai", "Copy.ai", "Microsoft Excel AI"], outcomes: ["Generate an AI-driven marketing campaign using Pomelli", "Use Julius AI for automated financial forecasting and trends", "Implement AI-enhanced HR workflows for talent management", "Develop an AI-assisted business strategy brief"], tracks: ["Track C — Commerce & Management (M2)"] },
    M3: { id: "M3", e: "🎯", title: "AI Business Changemaker", tag: "Drive AI transformation in commerce", desc: "The capstone of the Commerce track. Design an AI-led transformation for a business model or operational process. Pitch a roadmap for integrating AI into a retail, finance, or HR department responsibly.", tools: ["Notion AI", "Gamma", "AI Business Canvas", "Strategy AI Tools", "Presentation AI"], outcomes: ["Propose an AI integration roadmap for a specific business domain", "Analyse the ROI and impact of AI intervention", "Evaluate the ethical implications of AI in business decision-making", "Produce a professional-quality business transformation proposal"], tracks: ["Track C — Commerce & Management (M3)"] },
};

const TOOL_URLS: Record<string, string> = {
    "Claude": "https://claude.ai/",
    "ChatGPT": "https://chatgpt.com/",
    "Gemini": "https://gemini.google.com/",
    "Microsoft Copilot": "https://copilot.microsoft.com/",
    "NotebookLM": "https://notebooklm.google.com/",
    "Perplexity AI": "https://www.perplexity.ai/",
    "Notion AI": "https://www.notion.so/product/ai",
    "Otter.ai": "https://otter.ai/",
    "Claude Artifacts": "https://claude.ai/",
    "Gemini Gems": "https://gemini.google.com/",
    "Google AppSheet": "https://about.appsheet.com/home/",
    "Glide": "https://www.glideapps.com/",
    "Softr": "https://www.softr.io/",
    "Bubble": "https://bubble.io/",
    "Make (Integromat)": "https://www.make.com/",
    "Airtable": "https://www.airtable.com/",
    "Cursor": "https://www.cursor.com/",
    "Kiro": "https://kiro.ai/",
    "Antigravity": "https://antigravity.google/",
    "GitHub Copilot": "https://github.com/features/copilot",
    "v0.dev": "https://v0.dev/",
    "Bolt.new": "https://bolt.new/",
    "Claude Code": "https://claude.ai/code",
    "OpenAI / Anthropic APIs": "https://openai.com/api/",
    "LangChain": "https://www.langchain.com/",
    "FastAPI": "https://fastapi.tiangolo.com/",
    "Supabase": "https://supabase.com/",
    "Vercel": "https://vercel.com/",
    "Pinecone": "https://www.pinecone.io/",
    "Streamlit": "https://streamlit.io/",
    "Python": "https://www.python.org/",
    "PyTorch": "https://pytorch.org/",
    "NumPy": "https://numpy.org/",
    "HuggingFace": "https://huggingface.co/",
    "Jupyter": "https://jupyter.org/",
    "Midjourney": "https://www.midjourney.com/",
    "Spline": "https://spline.design/",
    "Gamma": "https://gamma.app/",
    "ChatPDF": "https://www.chatpdf.com/",
    "Research Rabbit": "https://www.researchrabbit.ai/",
    "Consensus AI": "https://consensus.app/",
    "Elicit": "https://elicit.com/",
    "Connected Papers": "https://www.connectedpapers.com/",
    "Wolfram Alpha": "https://www.wolframalpha.com/",
    "SPSS": "https://www.ibm.com/products/spss-statistics",
    "Harvey": "https://www.harvey.ai/",
    "Canva AI": "https://www.canva.com/ai-generator/",
    "Julius AI": "https://julius.ai/",
    "Pomelli": "https://pomelli.com/",
    "Datarails": "https://www.datarails.com/",
    "Lattice AI": "https://www.lattice.com/",
    "AdCreative.ai": "https://www.adcreative.ai/",
    "Copy.ai": "https://www.copy.ai/",
    "Microsoft Excel AI": "https://www.microsoft.com/en-us/microsoft-365/excel",
    "Veras AI": "https://www.evolvebim.com/veras",
    "PromeAI": "https://www.promeai.com/",
    "LookX": "https://www.lookx.ai/",
    "Rhino AI": "https://www.rhino3d.com/",
};

const PATHS: Record<string, PathStep[]> = {
    all: [{ id: "F1", l: "AI Citizen" }, { id: "F2", l: "AI Creator" }, { id: "A1", l: "AI Maker" }],
    cse: [{ id: "F1", l: "AI Citizen" }, { id: "F2", l: "AI Creator" }, { id: "A1", l: "AI Maker" }, { id: "A2", l: "AI Orchestrator" }, { id: "A3", l: "Architect" }, { id: "A4", l: "Researcher" }],
    engg: [{ id: "F1", l: "AI Citizen" }, { id: "F2", l: "AI Creator" }, { id: "A1", l: "AI Maker" }, { id: "A2", l: "AI Orchestrator" }, { id: "B3", l: "Architect" }],
    stem: [{ id: "F1", l: "AI Citizen" }, { id: "F2", l: "AI Creator" }, { id: "A1", l: "AI Maker" }, { id: "C2", l: "Data Explorer" }, { id: "A4", l: "Researcher" }],
    design: [{ id: "F1", l: "AI Citizen" }, { id: "F2", l: "AI Creator" }, { id: "A1", l: "AI Maker" }, { id: "E2_DA", l: "Creative Impact" }, { id: "D3", l: "Changemaker" }],
    human: [{ id: "F1", l: "AI Citizen" }, { id: "F2", l: "AI Creator" }, { id: "A1", l: "AI Maker" }, { id: "D2", l: "AI Impact" }, { id: "D3", l: "Changemaker" }],
    commerce: [{ id: "F1", l: "AI Citizen" }, { id: "F2", l: "AI Creator" }, { id: "M1", l: "AI Maker" }, { id: "M2", l: "AI Intelligence" }, { id: "M3", l: "Changemaker" }],
    faculty: [{ id: "F1", l: "AI Citizen" }, { id: "F2", l: "AI Creator" }, { id: "A1", l: "AI Maker" }, { id: "D2", l: "AI Impact" }],
};

const ROLE_LABELS: Record<string, string> = {
    all: "All REVA Community", cse: "CSE / CSA — Track A", engg: "Engineering — Track B",
    commerce: "Commerce & Management — Track C", stem: "Applied Science — Track D", 
    design: "Design & Architecture — Track E",
    human: "Human-Centered — Track F", faculty: "Faculty Member — All Tracks",
};

const ROLES = [
    { r: "all", icon: "🎓", label: "Everyone" },
    { r: "cse", icon: "🖥️", label: "CSE / CSA" },
    { r: "engg", icon: "⚙️", label: "Engineering (non-CS)" },
    { r: "commerce", icon: "💼", label: "Commerce & Mgmt" },
    { r: "stem", icon: "🔬", label: "Sciences" },
    { r: "design", icon: "🎨", label: "Design & Arch" },
    { r: "human", icon: "🖌️", label: "Human-Centered" },
    { r: "faculty", icon: "👩‍🏫", label: "Faculty Member" },
];

// ─── Component ───────────────────────────────────────────────────────────────

const STORAGE_KEY = "reva_ascent_progress";

function loadProgress(): Set<string> {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
    } catch { return new Set(); }
}

function saveProgress(done: Set<string>) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...done])); } catch {}
}

const REVAAiAscentPathway: React.FC = () => {
    const [done, setDone] = useState<Set<string>>(loadProgress);
    const [curRole, setCurRole] = useState("all");
    const [curStage, setCurStage] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [progressOpen, setProgressOpen] = useState(false);

    // Close modal on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const setRole = useCallback((role: string) => {
        setCurRole(role);
        setProgressOpen(true);
    }, []);

    const openModal = useCallback((id: string) => {
        if (!SD[id]) return;
        setCurStage(id);
        setModalOpen(true);
    }, []);

    const markDone = useCallback(() => {
        if (!curStage) return;
        setDone(prev => {
            const next = new Set([...prev, curStage!]);
            saveProgress(next);
            return next;
        });
    }, [curStage]);

    const steps = PATHS[curRole] || PATHS.all;
    const completedCount = steps.filter(s => done.has(s.id)).length;
    const pct = Math.round((completedCount / steps.length) * 100);
    const firstIncomplete = steps.findIndex(s => !done.has(s.id));

    const stage = curStage ? SD[curStage] : null;

    const trackCols = [
        {
            cls: "ra-ta", r: ["all", "cse", "faculty"], l: "A", name: "🖥️ Builder Ascent", forLabel: "CSE · CSA · AI & ML", motto: '"You don\'t just use AI. You build it."',
            stages: [
                { id: "A1", num: "A1", name: "🛠️ AI Maker", desc: "AppSheet, Glide, Softr, Gemini Opal", shared: true },
                { id: "A2", num: "A2", name: "💻 AI Native Orchestrator", desc: "Cursor, Kiro, Antigravity, spec-driven", shared: false },
                { id: "A3", num: "A3", name: "🏗️ AI Systems Architect", desc: "Full-stack AI, APIs, LLM integrations", shared: false },
                { id: "A4", num: "A4", name: "🔬 AI Researcher", desc: "Transformers, maths of AI, from scratch", shared: false },
            ]
        },
        {
            cls: "ra-tb", r: ["all", "engg", "faculty"], l: "B", name: "⚙️ Core Engineer Ascent", forLabel: "ECE · Mech · Civil · EEE · Chemical", motto: '"AI is your new instrument. Wield it."',
            stages: [
                { id: "A1", num: "B1", name: "🛠️ Core Engineer AI Maker", desc: "Domain apps, automation dashboards", shared: true },
                { id: "A2", num: "B2", name: "💻 AI Native Orchestrator", desc: "Simulations, automation, IoT pipelines", shared: true },
                { id: "B3", num: "B3", name: "🏗️ AI Systems Architect", desc: "Structural AI, predictive maintenance", shared: false },
            ]
        },
        {
            cls: "ra-tc", r: ["all", "commerce", "faculty"], l: "C", name: "💼 Commerce & Management Ascent", forLabel: "Commerce · Management · MBA · Accounting", motto: '"Data-driven decisions. AI-accelerated growth."',
            stages: [
                { id: "M1", num: "C1", name: "🛠️ Commerce AI Maker", desc: "Business apps, inventory automation, CRM", shared: false },
                { id: "M2", num: "C2", name: "📊 AI Business Intelligence", desc: "Pomelli, Datarails, Julius AI, Marketing", shared: false },
                { id: "M3", num: "C3", name: "🎯 AI Business Changemaker", desc: "ROI analysis, Business AI transformation", shared: false },
            ]
        },
        {
            cls: "ra-td", r: ["all", "stem", "faculty"], l: "D", name: "🔬 Applied Science Ascent", forLabel: "Sciences · Pharmacy · Biotech · Maths", motto: '"AI accelerates discovery. Direct it."',
            stages: [
                { id: "A1", num: "D1", name: "🛠️ Applied Science AI Maker", desc: "Lab dashboards, literature automation", shared: true },
                { id: "C2", num: "D2", name: "📊 AI Data Explorer", desc: "Python-light + Jupyter + AI research", shared: false },
                { id: "A4", num: "D3", name: "🔬 AI Researcher", desc: "ML for science, domain AI models", shared: true },
            ]
        },
        {
            cls: "ra-te", r: ["all", "design", "faculty"], l: "E", name: "🎨 Design & Architecture Ascent", forLabel: "Architecture · Design · Planning · Interiors", motto: '"Design the world. AI is your blueprint."',
            stages: [
                { id: "A1", num: "E1", name: "🛠️ Design & Arch AI Maker", desc: "No-code apps for site surveys, client tools", shared: true },
                { id: "E2_DA", num: "E2", name: "🎨 AI for Creative Impact", desc: "Midjourney, Spline, Rhino AI, Architecture focus", shared: false },
                { id: "D3", num: "E3", name: "🎯 AI Changemaker", desc: "Capstone: Spec-driven design or urban plan", shared: false },
            ]
        },
        {
            cls: "ra-tf", r: ["all", "human", "faculty"], l: "F", name: "🖌️ Human-Centered Ascent", forLabel: "Law · Liberal Arts · Education · Humanities", motto: '"Lead the AI conversation in your domain."',
            stages: [
                { id: "A1", num: "F1", name: "🛠️ Human Centered AI Maker", desc: "Portfolio apps, client tools, no-code", shared: true },
                { id: "D2", num: "F2", name: "🌍 AI for Impact", desc: "Harvey, Midjourney, AI strategy, policy", shared: false },
                { id: "D3", num: "F3", name: "🎯 AI Changemaker", desc: "Capstone: AI intervention in your field", shared: false },
            ]
        },
    ];

    return (
        <div className="ra-wrap">
            <style>{`
        .ra-wrap { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; color: #4a4c55; }
        .ra-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

        /* HERO */
        .ra-hero { background: #1a1b20; color: white; padding: 52px 0 0; position: relative; overflow: hidden; border-radius: 20px; }
        .ra-hero-glow1 { position:absolute;top:-80px;right:-100px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(247,163,91,.12) 0%,transparent 70%);pointer-events:none; }
        .ra-hero-glow2 { position:absolute;bottom:60px;left:0;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(247,163,91,.06) 0%,transparent 70%);pointer-events:none; }
        .ra-hero-inner { max-width:720px;padding:0 40px 52px;position:relative;z-index:1; }
        .ra-badge { display:inline-flex;align-items:center;gap:7px;background:rgba(247,163,91,.15);border:1px solid rgba(247,163,91,.3);border-radius:40px;padding:5px 14px;font-size:11px;font-weight:700;color:#fdc98a;letter-spacing:.1em;text-transform:uppercase;margin-bottom:22px; }
        .ra-hero h1 { font-size:clamp(32px,5vw,54px);font-weight:800;line-height:1.08;margin-bottom:8px;letter-spacing:-.025em;color:white; }
        .ra-hero h1 em { font-style:normal;color:#f7a35b; }
        .ra-hero-tag { font-size:14px;color:rgba(255,255,255,.5);font-style:italic;margin-bottom:18px; }
        .ra-hero-desc { font-size:15px;line-height:1.72;color:rgba(255,255,255,.7);max-width:580px;margin-bottom:34px; }
        .ra-stats { display:flex;gap:36px;flex-wrap:wrap; }
        .ra-stat-n { font-size:28px;font-weight:800;color:#f7a35b;line-height:1;display:block; }
        .ra-stat-l { font-size:10.5px;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em;display:block; }
        .ra-wave svg { display:block;width:100%; }
        .ra-wave { position:relative;z-index:1;margin-top:44px; }

        /* ROLE BAR */
        .ra-role-bar { background:white;padding:22px 28px;border:1px solid #e8e8ed;border-radius:14px;margin-top:20px; }
        .ra-role-bar h2 { font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:#9a9ca8;margin-bottom:10px; }
        .ra-chips { display:flex;gap:8px;flex-wrap:wrap; }
        .ra-chip { display:flex;align-items:center;gap:6px;padding:8px 16px;border-radius:40px;border:1.5px solid #e8e8ed;background:transparent;font-size:13px;font-weight:600;color:#6b6d78;cursor:pointer;font-family:inherit;transition:all .2s; }
        .ra-chip:hover { border-color:#f7a35b;color:#f7a35b; }
        .ra-chip.active { background:#f7a35b;border-color:#f7a35b;color:white;box-shadow:0 4px 14px rgba(247,163,91,.3); }

        /* PROGRESS */
        .ra-pp { background:white;border-radius:14px;padding:24px 28px;margin-top:20px;box-shadow:0 2px 10px rgba(74,76,85,.1);border:1.5px solid #e8e8ed; }
        .ra-pp-top { display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:12px; }
        .ra-pp-title { font-size:15px;font-weight:800;color:#1a1b20; }
        .ra-pp-sub { font-size:11.5px;color:#9a9ca8;margin-top:2px; }
        .ra-pp-circle { width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#4a4c55;box-shadow:inset 0 0 0 5px white,0 1px 4px rgba(74,76,85,.08); }
        .ra-steps { display:flex;gap:6px;flex-wrap:wrap; }
        .ra-ps { display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer; }
        .ra-ps-dot { width:34px;height:34px;border-radius:50%;background:#ebebef;border:2px solid #d8d8de;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#9a9ca8;transition:all .2s; }
        .ra-ps.done .ra-ps-dot { background:#f7a35b;border-color:#f7a35b;color:white; }
        .ra-ps.curr .ra-ps-dot { background:white;border-color:#f7a35b;color:#f7a35b;box-shadow:0 0 0 4px rgba(247,163,91,.18); }
        .ra-ps-lbl { font-size:9px;font-weight:600;color:#9a9ca8;text-align:center;max-width:38px;line-height:1.3; }

        /* SECTION HEADING */
        .ra-sh { display:flex;align-items:center;gap:12px;margin:32px 0 16px; }
        .ra-sh-badge { background:#f7a35b;color:white;font-size:10.5px;font-weight:700;padding:4px 12px;border-radius:40px;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap; }
        .ra-sh-title { font-size:19px;font-weight:800;color:#1a1b20;white-space:nowrap;letter-spacing:-.015em; }
        .ra-sh-line { flex:1;height:1px;background:#e8e8ed; }

        /* FOUNDATION CARDS */
        .ra-f-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px; }
        .ra-scard { background:white;border-radius:16px;border:2px solid rgba(247,163,91,.3);padding:24px;cursor:pointer;transition:all .25s;position:relative;overflow:hidden;text-align:left;width:100%;font-family:inherit;background:linear-gradient(140deg,#fff 55%,#fff8f2); }
        .ra-scard::after { content:'';position:absolute;top:0;left:0;right:0;height:4px;background:#f7a35b;transform:scaleX(1); }
        .ra-scard:hover { border-color:#f7a35b;box-shadow:0 12px 40px rgba(74,76,85,.17);transform:translateY(-3px); }
        .ra-sc-top { display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px; }
        .ra-sc-icon { width:44px;height:44px;border-radius:11px;background:#fff4eb;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0; }
        .ra-sc-id { font-size:11px;font-weight:700;color:#f7a35b;background:#fff4eb;padding:4px 11px;border-radius:20px;letter-spacing:.06em; }
        .ra-sc-sub { font-size:11px;font-weight:700;color:#f7a35b;text-transform:uppercase;letter-spacing:.09em;margin-bottom:4px; }
        .ra-sc-title { font-size:18px;font-weight:800;color:#1a1b20;margin-bottom:8px;letter-spacing:-.015em; }
        .ra-sc-desc { font-size:13px;color:#6b6d78;line-height:1.65;margin-bottom:14px; }
        .ra-tools { display:flex;flex-wrap:wrap;gap:5px;margin-bottom:14px; }
        .ra-ttag { font-size:11px;font-weight:500;padding:3px 10px;border-radius:20px;background:#f5f5f7;color:#6b6d78;border:1px solid #e8e8ed; }
        .ra-prog-lbl { display:flex;justify-content:space-between;font-size:10.5px;color:#9a9ca8;margin-bottom:5px; }
        .ra-prog-bar { height:4px;background:#ebebef;border-radius:4px;overflow:hidden;margin-bottom:14px; }
        .ra-prog-fill { height:100%;border-radius:4px;background:#f7a35b;transition:width .6s ease; }
        .ra-sc-cta { display:flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:#f7a35b; }
        .ra-scard:hover .ra-sc-cta-arrow { transform:translateX(4px); }
        .ra-sc-cta-arrow { transition:transform .2s; }

        /* CONNECTOR */
        .ra-connector { display:flex;align-items:center;justify-content:center;padding:14px 0;gap:8px;font-size:11.5px;color:#9a9ca8;font-weight:700;letter-spacing:.08em;text-transform:uppercase; }
        .ra-connector-svg { color:#f7a35b; }

        /* TRACKS GRID */
        .ra-tracks-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px; }
        .ra-tcolumn { background:white;border-radius:16px;overflow:hidden;box-shadow:0 2px 10px rgba(74,76,85,.1);border:1.5px solid #e8e8ed;transition:all .25s; }
        .ra-tcolumn:hover { box-shadow:0 6px 24px rgba(74,76,85,.13); }
        .ra-tcolumn.dimmed { opacity:.3;pointer-events:none;filter:grayscale(.4); }
        .ra-tcolumn.highlight { border-color:#f7a35b;box-shadow:0 0 0 3px rgba(247,163,91,.15),0 6px 24px rgba(74,76,85,.13); }
        .ra-track-hdr { padding:20px 22px 16px;position:relative;overflow:hidden; }
        .ra-track-hdr::after { content:attr(data-l);position:absolute;right:-6px;top:-12px;font-size:88px;font-weight:900;color:rgba(255,255,255,.1);line-height:1;pointer-events:none; }
        .ra-ta .ra-track-hdr { background:linear-gradient(135deg,#d44c1e,#e8683a); }
        .ra-tb .ra-track-hdr { background:linear-gradient(135deg,#1a6fd4,#3a88ec); }
        .ra-tc .ra-track-hdr { background:linear-gradient(135deg,#e67e22,#f39c12); }
        .ra-td .ra-track-hdr { background:linear-gradient(135deg,#1a9e6e,#30bb84); }
        .ra-te .ra-track-hdr { background:linear-gradient(135deg,#e91e63,#f06292); }
        .ra-tf .ra-track-hdr { background:linear-gradient(135deg,#7c3fd4,#9b5de5); }
        .ra-th-lbl { font-size:10px;font-weight:700;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.12em;margin-bottom:4px; }
        .ra-th-name { font-size:16px;font-weight:800;color:white;margin-bottom:4px; }
        .ra-th-for { font-size:11px;color:rgba(255,255,255,.7);line-height:1.45; }
        .ra-th-motto { font-size:10.5px;font-style:italic;color:rgba(255,255,255,.55);margin-top:6px; }
        .ra-track-stages { padding:10px 12px 12px;display:flex;flex-direction:column;gap:7px; }
        .ra-tsi { display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;border:1.5px solid #e8e8ed;cursor:pointer;transition:all .2s;background:white;width:100%;text-align:left;font-family:inherit; }
        .ra-tsi:hover { border-color:#f7a35b;background:#fff8f2;transform:translateX(4px); }
        .ra-ts-num { width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0;color:white; }
        .ra-ta .ra-ts-num { background:#d44c1e; }
        .ra-tb .ra-ts-num { background:#1a6fd4; }
        .ra-tc .ra-ts-num { background:#e67e22; }
        .ra-td .ra-ts-num { background:#1a9e6e; }
        .ra-te .ra-ts-num { background:#e91e63; }
        .ra-tf .ra-ts-num { background:#7c3fd4; }
        .ra-ts-name { font-size:12.5px;font-weight:700;color:#1a1b20; }
        .ra-ts-desc { font-size:10.5px;color:#9a9ca8;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
        .ra-sh-tag { font-size:9px;font-weight:700;background:rgba(247,163,91,.15);color:#c9651a;padding:2px 8px;border-radius:10px;border:1px solid rgba(247,163,91,.28);flex-shrink:0;letter-spacing:.04em; }

        /* MODAL */
        .ra-overlay { position:fixed;inset:0;background:rgba(26,27,32,.6);z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(5px); }
        .ra-modal { background:white;border-radius:20px;width:100%;max-width:640px;max-height:92vh;overflow-y:auto;box-shadow:0 24px 64px rgba(0,0,0,.22);animation:raModalIn .28s ease; }
        @keyframes raModalIn { from{opacity:0;transform:translateY(22px) scale(.97)} to{opacity:1;transform:none} }
        .ra-mh { background:#1a1b20;color:white;padding:26px 28px 22px;border-radius:20px 20px 0 0;position:relative; }
        .ra-mh-id { font-size:11px;font-weight:700;color:#f7a35b;letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px; }
        .ra-mh-title { font-size:24px;font-weight:800;color:white;margin-bottom:4px;letter-spacing:-.02em; }
        .ra-mh-tag { font-size:13px;color:rgba(255,255,255,.55);font-style:italic; }
        .ra-m-close { position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.12);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:white;font-size:17px;transition:background .2s;font-family:inherit; }
        .ra-m-close:hover { background:rgba(255,255,255,.22); }
        .ra-mb { padding:24px; }
        .ra-msec { margin-bottom:18px; }
        .ra-msec-title { font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#9a9ca8;margin-bottom:10px;display:flex;align-items:center;gap:8px; }
        .ra-msec-title::after { content:'';flex:1;height:1px;background:#e8e8ed; }
        .ra-m-desc { font-size:13.5px;line-height:1.72;color:#6b6d78; }
        .ra-m-tools { display:flex;flex-wrap:wrap;gap:7px; }
        .ra-mtool { display:flex;align-items:center;gap:6px;padding:6px 13px;background:#f5f5f7;border:1px solid #e8e8ed;border-radius:40px;font-size:11.5px;font-weight:600;color:#4a4c55; }
        .ra-mtool-dot { width:6px;height:6px;border-radius:50%;background:#f7a35b;flex-shrink:0; }
        .ra-m-outcomes { display:flex;flex-direction:column;gap:8px; }
        .ra-oi { display:flex;align-items:flex-start;gap:10px;font-size:13px;color:#6b6d78;line-height:1.55; }
        .ra-ocheck { width:18px;height:18px;border-radius:50%;background:rgba(247,163,91,.15);border:1.5px solid #f7a35b;display:flex;align-items:center;justify-content:center;font-size:10px;color:#f7a35b;flex-shrink:0;margin-top:1px; }
        .ra-mf { padding:16px 24px 24px;border-top:1px solid #e8e8ed;display:flex;gap:10px;flex-wrap:wrap; }
        .ra-mbtn-p { flex:1;padding:12px 20px;background:#f7a35b;color:white;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;text-align:center;min-width:140px; }
        .ra-mbtn-p:hover { background:#e8893a;transform:translateY(-1px);box-shadow:0 4px 14px rgba(247,163,91,.38); }
        .ra-mbtn-p.ra-done { background:#1a9e6e; }
        .ra-mbtn-s { padding:12px 18px;background:#f5f5f7;color:#4a4c55;border:1.5px solid #e8e8ed;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s; }
        .ra-mbtn-s:hover { border-color:#4a4c55; background:white; }

        .ra-tlink { text-decoration: none !important; transition: all 0.2s; }
        .ra-tlink:hover { border-color: #f7a35b !important; color: #f7a35b !important; background: #fff4eb !important; }
        .ra-sc-cta { background: none; border: none; padding: 0; font-family: inherit; cursor: pointer; }
        .ra-tsi-desc-link { border-bottom: 1px dotted #9a9ca8; color: inherit; text-decoration: none; }
        .ra-tsi-desc-link:hover { color: #f7a35b; border-color: #f7a35b; }
        @media(max-width:640px){
          .ra-hero-inner{padding:0 20px 40px;}
          .ra-tracks-grid{grid-template-columns:1fr;}
          .ra-f-grid{grid-template-columns:1fr;}
        }
      `}</style>

            {/* ── HERO ────────────────────────────────────────────────── */}
            <div className="ra-hero">
                <div className="ra-hero-glow1" />
                <div className="ra-hero-glow2" />
                <div className="ra-hero-inner">
                    <div className="ra-badge">🏔 University-Wide AI Programme</div>
                    <h1>REVA<br /><em>AI Ascent</em></h1>
                    <p className="ra-hero-tag">From Curious to Capable</p>
                    <p className="ra-hero-desc">A structured AI learning framework built for every faculty at REVA University. One shared foundation. Six ascent paths. Every student and faculty member climbs toward AI fluency from exactly where they stand today.</p>
                    <div className="ra-stats">
                        {[["2", "Foundation Stages"], ["6", "Ascent Tracks"], ["13", "Learning Stages"], ["All", "Faculties Covered"]].map(([n, l]) => (
                            <div key={l}><span className="ra-stat-n">{n}</span><span className="ra-stat-l">{l}</span></div>
                        ))}
                    </div>
                </div>
                <div className="ra-wave">
                    <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0 64V32Q180 0 360 28Q540 56 720 28Q900 0 1080 28Q1260 56 1440 32V64Z" fill="#f9fafb" />
                    </svg>
                </div>
            </div>

            {/* ── ROLE SELECTOR ───────────────────────────────────────── */}
            <div className="ra-role-bar">
                <h2>I am a…</h2>
                <div className="ra-chips">
                    {ROLES.map(({ r, icon, label }) => (
                        <button key={r} className={`ra-chip${curRole === r ? " active" : ""}`} onClick={() => setRole(r)}>
                            <span>{icon}</span>{label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── PROGRESS PANEL ──────────────────────────────────────── */}
            {progressOpen && (
                <div className="ra-pp">
                    <div className="ra-pp-top">
                        <div>
                            <div className="ra-pp-title">{ROLE_LABELS[curRole]}</div>
                            <div className="ra-pp-sub">Click any stage to explore content and track progress</div>
                        </div>
                        <div
                            className="ra-pp-circle"
                            style={{ background: `conic-gradient(#f7a35b ${pct * 3.6}deg, #ebebef ${pct * 3.6}deg)` }}
                        >
                            {pct}%
                        </div>
                    </div>
                    <div className="ra-steps">
                        {steps.map((s, i) => {
                            const isDone = done.has(s.id);
                            const isCurr = !isDone && i === firstIncomplete;
                            return (
                                <div key={s.id + i} className={`ra-ps${isDone ? " done" : isCurr ? " curr" : ""}`} onClick={() => openModal(s.id)}>
                                    <div className="ra-ps-dot">{isDone ? "✓" : i + 1}</div>
                                    <div className="ra-ps-lbl">{s.l}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* ── FOUNDATION: AI LEARNER'S LICENSE ────────────────────── */}
            <div className="ra-sh">
                <span className="ra-sh-badge">Foundation</span>
                <span className="ra-sh-title">AI Learner's License</span>
                <span className="ra-sh-line" />
            </div>

            <div className="ra-f-grid">
                {(["F1", "F2"] as const).map(id => {
                    const s = SD[id];
                    const isDone = done.has(id);
                    return (
                        <div key={id} className="ra-scard" onClick={() => openModal(id)}>
                            <div className="ra-sc-top">
                                <div className="ra-sc-icon">{s.e}</div>
                                <span className="ra-sc-id">{id}</span>
                            </div>
                            <div className="ra-sc-sub">Foundation Stage {id === "F1" ? "1" : "2"}</div>
                            <div className="ra-sc-title">{s.title}</div>
                            <div className="ra-sc-desc">{s.desc.slice(0, 160)}…</div>
                            <div className="ra-tools">
                                {s.tools.map(t => (
                                    TOOL_URLS[t] ? (
                                        <a key={t} href={TOOL_URLS[t]} target="_blank" rel="noopener noreferrer" className="ra-ttag ra-tlink" onClick={e => e.stopPropagation()}>
                                            {t}
                                        </a>
                                    ) : (
                                        <span key={t} className="ra-ttag">{t}</span>
                                    )
                                ))}
                            </div>
                            <div className="ra-prog-lbl"><span>Progress</span><span>{isDone ? "Completed ✓" : "Not started"}</span></div>
                            <div className="ra-prog-bar"><div className="ra-prog-fill" style={{ width: isDone ? "100%" : "0%" }} /></div>
                            <button className="ra-sc-cta" onClick={e => { e.stopPropagation(); openModal(id); }}>
                                Explore Stage <span className="ra-sc-cta-arrow">→</span>
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* ── FOUNDATION: AI DRIVER'S LICENSE ─────────────────────── */}
            <div className="ra-sh" style={{ marginTop: "32px" }}>
                <span className="ra-sh-badge">Foundation</span>
                <span className="ra-sh-title">AI Driver's License</span>
                <span className="ra-sh-line" />
            </div>

            <div className="ra-f-grid">
                <a
                    href="https://reva-learning-hub.vercel.app/presentations/ai-drivers-license/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ra-scard"
                    style={{ textDecoration: "none" }}
                >
                    <div className="ra-sc-top">
                        <div className="ra-sc-icon">🚗</div>
                        <span className="ra-sc-id">DL</span>
                    </div>
                    <div className="ra-sc-sub">Faculty Certification</div>
                    <div className="ra-sc-title">AI Driver's License</div>
                    <div className="ra-sc-desc">Empower faculty and academic leadership to design learning experiences and assessments for the AI era. Audit courses, manage cognitive risk, and prevent cognitive outsourcing.</div>
                    <div className="ra-tools">
                        {["Course Audits", "Assessment Redesign", "Verification-based Assessment", "Educate to Enterprise"].map(t => (
                            <span key={t} className="ra-ttag">{t}</span>
                        ))}
                    </div>
                    <div className="ra-sc-cta">
                        View Presentation <span className="ra-sc-cta-arrow">→</span>
                    </div>
                </a>
            </div>

            {/* ── CONNECTOR ───────────────────────────────────────────── */}
            <div className="ra-connector">
                <span className="ra-connector-svg">↓</span>
                Choose your Ascent Track
                <span className="ra-connector-svg">↓</span>
            </div>

            {/* ── TRACKS ──────────────────────────────────────────────── */}
            <div className="ra-sh" id="ra-tracks-top">
                <span className="ra-sh-badge">Ascent Tracks</span>
                <span className="ra-sh-title">Choose Your Path</span>
                <span className="ra-sh-line" />
            </div>

            <div className="ra-tracks-grid">
                {trackCols.map(track => {
                    const isMatch = curRole === "all" || track.r.includes(curRole);
                    return (
                        <div key={track.l} className={`ra-tcolumn ${track.cls}${!isMatch ? " dimmed" : progressOpen ? " highlight" : ""}`}>
                            <div className="ra-track-hdr" data-l={track.l}>
                                <div className="ra-th-lbl">Track {track.l}</div>
                                <div className="ra-th-name">{track.name}</div>
                                <div className="ra-th-for">{track.forLabel}</div>
                                <div className="ra-th-motto">{track.motto}</div>
                            </div>
                            <div className="ra-track-stages">
                                {track.stages.map(st => (
                                    <div key={st.num} className="ra-tsi" onClick={() => openModal(st.id)}>
                                        <div className="ra-ts-num">{st.num}</div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div className="ra-ts-name">{st.name}</div>
                                            <div className="ra-ts-desc">
                                                {st.desc.split(/(\s|,)/).map((part, idx) => {
                                                    const cleanPart = part.trim().replace(/,$/, '');
                                                    if (TOOL_URLS[cleanPart]) {
                                                        return (
                                                            <a key={idx} href={TOOL_URLS[cleanPart]} target="_blank" rel="noopener noreferrer" className="ra-tsi-desc-link" onClick={e => e.stopPropagation()}>
                                                                {part}
                                                            </a>
                                                        );
                                                    }
                                                    return <span key={idx}>{part}</span>;
                                                })}
                                            </div>
                                        </div>
                                        {st.shared && <span className="ra-sh-tag">Shared</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── MODAL ───────────────────────────────────────────────── */}
            {modalOpen && stage && (
                <div className="ra-overlay" onClick={e => { if (e.target === e.currentTarget) setModalOpen(false); }}>
                    <div className="ra-modal">
                        <div className="ra-mh">
                            <div className="ra-mh-id">{stage.id}</div>
                            <div className="ra-mh-title">{stage.e} {stage.title}</div>
                            <div className="ra-mh-tag">{stage.tag}</div>
                            <button className="ra-m-close" onClick={() => setModalOpen(false)}>✕</button>
                        </div>
                        <div className="ra-mb">
                            <div className="ra-msec">
                                <div className="ra-msec-title">About this Stage</div>
                                <div className="ra-m-desc">{stage.desc}</div>
                            </div>
                            <div className="ra-msec">
                                <div className="ra-msec-title">Tools &amp; Platforms</div>
                                <div className="ra-m-tools">
                                    {stage.tools.map(t => (
                                        TOOL_URLS[t] ? (
                                            <a key={t} href={TOOL_URLS[t]} target="_blank" rel="noopener noreferrer" className="ra-mtool ra-tlink">
                                                <span className="ra-mtool-dot" />{t}
                                            </a>
                                        ) : (
                                            <div key={t} className="ra-mtool"><span className="ra-mtool-dot" />{t}</div>
                                        )
                                    ))}
                                </div>
                            </div>
                            <div className="ra-msec">
                                <div className="ra-msec-title">What You'll Be Able to Do</div>
                                <div className="ra-m-outcomes">
                                    {stage.outcomes.map(o => (
                                        <div key={o} className="ra-oi"><div className="ra-ocheck">✓</div><span>{o}</span></div>
                                    ))}
                                </div>
                            </div>
                            <div className="ra-msec">
                                <div className="ra-msec-title">Suitable For</div>
                                <div className="ra-m-tools">
                                    {stage.tracks.map(t => <div key={t} className="ra-mtool"><span className="ra-mtool-dot" />{t}</div>)}
                                </div>
                            </div>
                            {stage.courses && stage.courses.length > 0 && (
                                <div className="ra-msec">
                                    <div className="ra-msec-title">Recommended Courses</div>
                                    <div className="ra-m-tools">
                                        {stage.courses.map(c => (
                                            <a key={c.title} href={c.url} target="_blank" rel="noopener noreferrer" className="ra-mtool ra-tlink" style={{flexDirection:'column',alignItems:'flex-start',gap:2}}>
                                                <span style={{display:'flex',alignItems:'center',gap:6}}><span className="ra-mtool-dot" /><strong style={{fontSize:12}}>{c.title}</strong></span>
                                                <span style={{fontSize:10,color:'#9a9ca8',marginLeft:12}}>{c.platform}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="ra-mf">
                            <button
                                className={`ra-mbtn-p${done.has(curStage!) ? " ra-done" : ""}`}
                                onClick={markDone}
                            >
                                {done.has(curStage!) ? "✓ Completed — Revisit" : "✓ Mark as In Progress"}
                            </button>
                            <button className="ra-mbtn-s" onClick={() => setModalOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default REVAAiAscentPathway;
