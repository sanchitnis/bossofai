import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import {
  Wrench, FileInput, Cpu, ArrowUpRight,
  Brain, Database, GitBranch, Network, BookOpen,
  Microscope, BarChart3, Workflow, Code2, Bot,
  Search, FlaskConical, LayoutDashboard, Sparkles, LineChart,
  Package, Filter, Users, GraduationCap, Layers, Server,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Types ───────────────────────────────────────────────── */
type Audience = "All" | "AI Builders" | "AI Researchers" | "Science" | "Engineering" | "Management";
type Category =
  | "All"
  | "Data Preparation"
  | "LLM Frameworks"
  | "Vector Databases"
  | "Local AI & Models"
  | "MLOps"
  | "No-Code Builders"
  | "Research Tools"
  | "Dev Tools"
  | "Science AI"
  | "Management AI";

interface Tool {
  id: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  url: string;
  icon: React.ElementType;
  gradient: string;         // Tailwind bg-gradient
  badgeColor: string;       // badge pill colours
  tags: string[];
  audiences: Audience[];
  highlighted?: boolean;
}

/* ─── Data ─────────────────────────────────────────────────── */
const tools: Tool[] = [
  /* ── Data Preparation ── */
  {
    id: "unstructured-io",
    name: "Unstructured.io",
    category: "Data Preparation",
    tagline: "Transform any file into AI-ready data",
    description:
      "Parse, chunk, and clean PDFs, Word docs, HTML, images, and more — turning raw files into structured formats that large language models can understand for RAG and fine-tuning pipelines.",
    url: "https://unstructured.io/",
    icon: FileInput,
    gradient: "from-violet-500 to-purple-600",
    badgeColor: "bg-violet-500/10 text-violet-600",
    tags: ["PDF Parsing", "ETL for AI", "RAG Prep", "Open Source"],
    audiences: ["AI Builders", "AI Researchers", "Science", "Engineering"],
    highlighted: true,
  },
  /* ── LLM Frameworks ── */
  {
    id: "langchain",
    name: "LangChain",
    category: "LLM Frameworks",
    tagline: "Build agent-based AI applications",
    description:
      "The go-to framework for building complex, agent-based workflows — connecting LLMs to APIs, tools, memory, and external data sources for production AI applications.",
    url: "https://www.langchain.com/",
    icon: Network,
    gradient: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-600",
    tags: ["Agents", "Chains", "Memory", "RAG", "Open Source"],
    audiences: ["AI Builders", "Engineering"],
    highlighted: true,
  },
  {
    id: "llamaindex",
    name: "LlamaIndex",
    category: "LLM Frameworks",
    tagline: "Best-in-class data indexing for RAG",
    description:
      "Specialises in indexing and retrieving structured/unstructured data for RAG systems. Ideal for building document search, knowledge bases, and custom AI assistants backed by your own data.",
    url: "https://www.llamaindex.ai/",
    icon: Layers,
    gradient: "from-sky-500 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-600",
    tags: ["RAG", "Indexing", "Knowledge Bases", "Open Source"],
    audiences: ["AI Builders", "AI Researchers", "Engineering"],
  },
  {
    id: "haystack",
    name: "Haystack",
    category: "LLM Frameworks",
    tagline: "Enterprise-ready AI pipeline framework",
    description:
      "A modular, pipeline-based framework by deepset for building advanced search and QA systems. Ideal for research teams needing robust, production-grade NLP pipelines.",
    url: "https://haystack.deepset.ai/",
    icon: Workflow,
    gradient: "from-orange-500 to-red-500",
    badgeColor: "bg-orange-500/10 text-orange-600",
    tags: ["Pipelines", "NLP", "QA Systems", "Enterprise"],
    audiences: ["AI Builders", "AI Researchers", "Engineering"],
  },
  /* ── Vector Databases ── */
  {
    id: "pinecone",
    name: "Pinecone",
    category: "Vector Databases",
    tagline: "Managed cloud-native vector database",
    description:
      "The leading fully-managed vector database for scalable semantic search. Plug it into any RAG pipeline to store and retrieve embeddings with millisecond latency at any scale.",
    url: "https://www.pinecone.io/",
    icon: Database,
    gradient: "from-teal-500 to-cyan-600",
    badgeColor: "bg-teal-500/10 text-teal-600",
    tags: ["Vector Search", "Semantic Search", "Managed", "Embeddings"],
    audiences: ["AI Builders", "Engineering"],
  },
  {
    id: "chroma",
    name: "Chroma",
    category: "Vector Databases",
    tagline: "Open-source embedding store for local dev",
    description:
      "A lightweight, open-source vector database that runs locally — perfect for rapid prototyping, student projects, and building RAG applications without cloud costs.",
    url: "https://www.trychroma.com/",
    icon: Database,
    gradient: "from-amber-500 to-orange-500",
    badgeColor: "bg-amber-500/10 text-amber-600",
    tags: ["Open Source", "Local Dev", "Embeddings", "Free"],
    audiences: ["AI Builders", "Engineering", "AI Researchers"],
  },
  /* ── Local AI & Models ── */
  {
    id: "ollama",
    name: "Ollama",
    category: "Local AI & Models",
    tagline: "Run powerful LLMs locally, for free",
    description:
      "Run Llama 3, Mistral, Gemma, Phi, and dozens of other open-weight models entirely on your laptop. No API costs, complete data privacy — the ultimate tool for offline AI development.",
    url: "https://ollama.com/",
    icon: Server,
    gradient: "from-slate-600 to-slate-800",
    badgeColor: "bg-slate-500/10 text-slate-600",
    tags: ["Local LLM", "Privacy", "Free", "Offline", "Open Source"],
    audiences: ["AI Builders", "Engineering", "AI Researchers"],
    highlighted: true,
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "Local AI & Models",
    tagline: "The GitHub of machine learning models",
    description:
      "Access 500,000+ open-source models, datasets, and Spaces. Fine-tune, evaluate, and deploy models using the Transformers library — the essential hub for every AI researcher and engineer.",
    url: "https://huggingface.co/",
    icon: Brain,
    gradient: "from-yellow-400 to-orange-500",
    badgeColor: "bg-yellow-400/10 text-yellow-600",
    tags: ["Model Hub", "Transformers", "Datasets", "Fine-tuning"],
    audiences: ["AI Builders", "AI Researchers", "Engineering"],
    highlighted: true,
  },
  /* ── MLOps ── */
  {
    id: "wandb",
    name: "Weights & Biases",
    category: "MLOps",
    tagline: "Visualise and track every experiment",
    description:
      "The industry-leading MLOps platform for experiment tracking, dataset versioning, hyperparameter sweeps, and model evaluation. Beloved by deep learning and LLM engineering teams for its beautiful dashboards.",
    url: "https://wandb.ai/",
    icon: LineChart,
    gradient: "from-yellow-500 to-amber-600",
    badgeColor: "bg-yellow-500/10 text-yellow-600",
    tags: ["Experiment Tracking", "Dashboards", "Hyperparameters", "LLM Eval"],
    audiences: ["AI Researchers", "Engineering", "AI Builders"],
  },
  {
    id: "mlflow",
    name: "MLflow",
    category: "MLOps",
    tagline: "Open-source ML lifecycle management",
    description:
      "The most widely-adopted open-source standard for end-to-end ML lifecycle management — tracking experiments, packaging models, and deploying them anywhere. MLflow 3.0 now includes LLM tracing.",
    url: "https://mlflow.org/",
    icon: BarChart3,
    gradient: "from-blue-500 to-indigo-600",
    badgeColor: "bg-blue-500/10 text-blue-600",
    tags: ["Open Source", "Model Registry", "Experiment Tracking", "Self-hosted"],
    audiences: ["AI Researchers", "Engineering", "AI Builders"],
  },
  {
    id: "dvc",
    name: "DVC",
    category: "MLOps",
    tagline: "Git for data and ML models",
    description:
      "Data Version Control treats datasets and ML models like code. Use Git-native workflows to version your data, ensure reproducibility, and integrate ML into CI/CD pipelines.",
    url: "https://dvc.org/",
    icon: GitBranch,
    gradient: "from-green-500 to-emerald-600",
    badgeColor: "bg-green-500/10 text-green-600",
    tags: ["Version Control", "Reproducibility", "Git", "Open Source"],
    audiences: ["AI Researchers", "Engineering"],
  },
  /* ── No-Code Builders ── */
  {
    id: "flowise",
    name: "Flowise",
    category: "No-Code Builders",
    tagline: "Drag-and-drop LangChain builder",
    description:
      "Build complex LLM chains and RAG pipelines visually with a drag-and-drop canvas. Based on LangChain and LlamaIndex — ideal for rapid prototyping without writing boilerplate code.",
    url: "https://flowiseai.com/",
    icon: Workflow,
    gradient: "from-pink-500 to-rose-600",
    badgeColor: "bg-pink-500/10 text-pink-600",
    tags: ["No-Code", "Visual Builder", "LangChain", "RAG", "Open Source"],
    audiences: ["AI Builders", "Management", "Engineering"],
    highlighted: true,
  },
  {
    id: "dify",
    name: "Dify",
    category: "No-Code Builders",
    tagline: "Full-stack LLM app platform",
    description:
      "Build, manage, and deploy AI chatbots and agents with built-in RAG, prompt management, and observability. Ideal for teams building AI products without a dedicated ML engineering team.",
    url: "https://dify.ai/",
    icon: Bot,
    gradient: "from-indigo-500 to-purple-600",
    badgeColor: "bg-indigo-500/10 text-indigo-600",
    tags: ["No-Code", "Chatbots", "RAG", "Prompt Management", "Open Source"],
    audiences: ["AI Builders", "Management", "Engineering"],
  },
  {
    id: "n8n",
    name: "n8n",
    category: "No-Code Builders",
    tagline: "Workflow automation with AI superpowers",
    description:
      "Connect 400+ apps with AI nodes for LLM calls, vector stores, and agents. Self-hostable and open-source — the powerhouse for automating complex multi-step AI workflows.",
    url: "https://n8n.io/",
    icon: Workflow,
    gradient: "from-red-500 to-orange-500",
    badgeColor: "bg-red-500/10 text-red-600",
    tags: ["Automation", "AI Nodes", "Self-hosted", "Open Source", "400+ Integrations"],
    audiences: ["AI Builders", "Management", "Engineering"],
  },
  /* ── Dev Tools ── */
  {
    id: "cursor",
    name: "Cursor",
    category: "Dev Tools",
    tagline: "The AI-first code editor",
    description:
      "A fork of VS Code with deep AI integration — chat with your entire codebase, generate multi-file edits, and use autonomous AI agents to resolve GitHub issues end-to-end.",
    url: "https://www.cursor.com/",
    icon: Code2,
    gradient: "from-violet-600 to-blue-600",
    badgeColor: "bg-violet-600/10 text-violet-700",
    tags: ["IDE", "Code Generation", "Codebase Chat", "Agentic Coding"],
    audiences: ["AI Builders", "Engineering"],
    highlighted: true,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "Dev Tools",
    tagline: "AI pair programmer in every editor",
    description:
      "Real-time code completions, explanations, and Copilot Workspace for autonomous coding tasks. The industry standard for developer productivity — works inside VS Code, JetBrains, and more.",
    url: "https://github.com/features/copilot",
    icon: Code2,
    gradient: "from-slate-700 to-gray-900",
    badgeColor: "bg-slate-600/10 text-slate-700",
    tags: ["Code Completion", "PR Summaries", "IDE Plugin", "Multi-language"],
    audiences: ["AI Builders", "Engineering"],
  },
  /* ── Research Tools ── */
  {
    id: "elicit",
    name: "Elicit",
    category: "Research Tools",
    tagline: "AI-powered literature review engine",
    description:
      "Automate literature reviews and extract structured data from academic papers. Elicit synthesises findings across hundreds of papers into tables — accelerating systematic reviews dramatically.",
    url: "https://elicit.com/",
    icon: Search,
    gradient: "from-violet-500 to-fuchsia-600",
    badgeColor: "bg-violet-500/10 text-violet-600",
    tags: ["Literature Review", "Data Extraction", "Research Automation", "Free Tier"],
    audiences: ["AI Researchers", "Science", "Management"],
    highlighted: true,
  },
  {
    id: "consensus",
    name: "Consensus",
    category: "Research Tools",
    tagline: "Evidence-based answers from peer-reviewed research",
    description:
      "Search millions of papers and get direct, evidence-backed answers with a 'consensus meter' showing the weight of scientific evidence. The fastest way to get a research-grounded answer.",
    url: "https://consensus.app/",
    icon: BookOpen,
    gradient: "from-sky-500 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-600",
    tags: ["Peer-reviewed", "Evidence-based", "Academic Search", "Free Tier"],
    audiences: ["AI Researchers", "Science", "Management"],
  },
  {
    id: "semantic-scholar",
    name: "Semantic Scholar",
    category: "Research Tools",
    tagline: "Free AI-powered academic discovery engine",
    description:
      "Discover papers, track citation trends, and use AI-generated TLDRs to quickly assess relevance. Semantic Scholar indexes 220M+ papers and is completely free — built by the Allen Institute for AI.",
    url: "https://www.semanticscholar.org/",
    icon: Search,
    gradient: "from-blue-600 to-indigo-700",
    badgeColor: "bg-blue-600/10 text-blue-700",
    tags: ["Free", "Citation Analysis", "TLDR Summaries", "220M+ Papers"],
    audiences: ["AI Researchers", "Science", "Management", "Engineering"],
  },
  {
    id: "research-rabbit",
    name: "ResearchRabbit",
    category: "Research Tools",
    tagline: "Spotify for research paper discovery",
    description:
      "Visualise citation networks interactively and discover connected papers through an intuitive map-based interface. Curate paper collections and get personalised recommendations as the field evolves.",
    url: "https://www.researchrabbit.ai/",
    icon: Network,
    gradient: "from-pink-500 to-rose-500",
    badgeColor: "bg-pink-500/10 text-pink-600",
    tags: ["Citation Maps", "Discovery", "Collections", "Free"],
    audiences: ["AI Researchers", "Science", "Management"],
  },
  {
    id: "scispace",
    name: "SciSpace",
    category: "Research Tools",
    tagline: "Chat with any research paper",
    description:
      "Upload or link any PDF and ask questions about its methods, results, or jargon. SciSpace explains complex formulas and tables in plain language — ideal for interdisciplinary readers.",
    url: "https://scispace.com/",
    icon: BookOpen,
    gradient: "from-teal-500 to-emerald-600",
    badgeColor: "bg-teal-500/10 text-teal-600",
    tags: ["PDF Chat", "Paper Summarisation", "Jargon Explainer", "Free Tier"],
    audiences: ["AI Researchers", "Science", "Management", "Engineering"],
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "Research Tools",
    tagline: "Real-time cited research for everyone",
    description:
      "Search the web and academic literature with cited, real-time answers. Use Academic mode for scholarly sources. The fastest way to go from a question to a sourced, structured answer.",
    url: "https://www.perplexity.ai/",
    icon: Sparkles,
    gradient: "from-cyan-500 to-teal-500",
    badgeColor: "bg-cyan-500/10 text-cyan-600",
    tags: ["Real-time Search", "Cited Answers", "Academic Mode", "Free Tier"],
    audiences: ["AI Researchers", "Science", "Management", "Engineering", "AI Builders"],
  },
  /* ── Science AI ── */
  {
    id: "alphafold",
    name: "AlphaFold 3",
    category: "Science AI",
    tagline: "Predict protein and molecular structures with AI",
    description:
      "DeepMind's groundbreaking model predicts 3D structures of proteins, DNA, RNA, and ligands at near-experimental accuracy. AlphaFold 3 is transforming drug discovery, structural biology, and biochemistry research.",
    url: "https://alphafoldserver.com/",
    icon: FlaskConical,
    gradient: "from-blue-600 to-cyan-500",
    badgeColor: "bg-blue-600/10 text-blue-700",
    tags: ["Protein Folding", "Drug Discovery", "Structural Biology", "DeepMind", "Free"],
    audiences: ["AI Researchers", "Science"],
    highlighted: true,
  },
  {
    id: "julius-ai",
    name: "Julius AI",
    category: "Science AI",
    tagline: "Data analysis through natural language",
    description:
      "Upload any dataset and analyse it conversationally — generate charts, run statistical tests, and extract insights without writing a single line of code. Ideal for science and management researchers.",
    url: "https://julius.ai/",
    icon: BarChart3,
    gradient: "from-orange-500 to-amber-500",
    badgeColor: "bg-orange-500/10 text-orange-600",
    tags: ["Data Analysis", "No-Code", "Charts", "Statistics", "CSV/Excel"],
    audiences: ["Science", "Management", "AI Researchers"],
  },
  /* ── Management AI ── */
  {
    id: "gamma",
    name: "Gamma",
    category: "Management AI",
    tagline: "Turn ideas into stunning presentations instantly",
    description:
      "Generate professional slide decks, documents, and websites from a prompt or outline in seconds. Gamma handles design automatically so you focus on content — the fastest way to go from idea to polished deck.",
    url: "https://gamma.app/",
    icon: LayoutDashboard,
    gradient: "from-fuchsia-500 to-pink-600",
    badgeColor: "bg-fuchsia-500/10 text-fuchsia-600",
    tags: ["Presentations", "Slides", "Documents", "AI Design", "Free Tier"],
    audiences: ["Management", "Science", "Engineering", "AI Researchers"],
    highlighted: true,
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "Management AI",
    tagline: "Your AI-powered second brain",
    description:
      "Integrated AI inside Notion to write, summarise, translate, and manage projects. Use it to build a knowledge hub that captures research from Perplexity, meeting notes, and project plans in one place.",
    url: "https://www.notion.so/product/ai",
    icon: Package,
    gradient: "from-slate-700 to-slate-900",
    badgeColor: "bg-slate-600/10 text-slate-700",
    tags: ["Note-taking", "Project Management", "Summarisation", "Knowledge Hub"],
    audiences: ["Management", "Science", "Engineering", "AI Researchers"],
  },
];

/* ─── Filter config ─────────────────────────────────────────── */
const audiences: Audience[] = [
  "All", "AI Builders", "AI Researchers", "Science", "Engineering", "Management",
];

const categories: Category[] = [
  "All", "Data Preparation", "LLM Frameworks", "Vector Databases",
  "Local AI & Models", "MLOps", "No-Code Builders", "Dev Tools",
  "Research Tools", "Science AI", "Management AI",
];

const audienceIcons: Record<Audience, React.ElementType> = {
  All: Users,
  "AI Builders": Brain,
  "AI Researchers": Microscope,
  Science: FlaskConical,
  Engineering: Cpu,
  Management: GraduationCap,
};

const categoryColor: Record<Category, string> = {
  All: "bg-primary text-primary-foreground",
  "Data Preparation": "bg-violet-600 text-white",
  "LLM Frameworks": "bg-emerald-600 text-white",
  "Vector Databases": "bg-teal-600 text-white",
  "Local AI & Models": "bg-slate-700 text-white",
  MLOps: "bg-blue-600 text-white",
  "No-Code Builders": "bg-pink-600 text-white",
  "Dev Tools": "bg-violet-700 text-white",
  "Research Tools": "bg-sky-600 text-white",
  "Science AI": "bg-cyan-700 text-white",
  "Management AI": "bg-fuchsia-600 text-white",
};

/* ─── Component ─────────────────────────────────────────────── */
const PlatformsTools = () => {
  const [activeAudience, setActiveAudience] = useState<Audience>("All");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchAudience = activeAudience === "All" || t.audiences.includes(activeAudience);
      const matchCategory = activeCategory === "All" || t.category === activeCategory;
      return matchAudience && matchCategory;
    });
  }, [activeAudience, activeCategory]);

  return (
    <Layout>
      <Helmet>
        <title>Platforms &amp; Tools | REVA AI Hub Resources</title>
        <meta
          name="description"
          content="Curated AI platforms and tools for REVA University students and faculty — spanning data preparation, LLM frameworks, research tools, science AI, MLOps, and more."
        />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-violet-500/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-600 text-sm font-medium mb-6">
              <Wrench className="h-4 w-4" />
              Curated for REVA University
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              AI Platforms &amp; <span className="text-primary italic">Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A hand-picked toolkit for every REVA learner — from AI-native builders and ML researchers to science, engineering, and management faculty and students.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-border/50 bg-muted/30 py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { label: "Curated Tools", value: `${tools.length}` },
              { label: "Categories", value: `${categories.length - 1}` },
              { label: "Audience Tracks", value: `${audiences.length - 1}` },
              { label: "Featured Picks", value: `${tools.filter((t) => t.highlighted).length}` },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="py-8 bg-background border-b border-border/40">
        <div className="container space-y-5">
          {/* Audience filter */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
              <Users className="h-3.5 w-3.5" />
              Filter by audience
            </div>
            <div className="flex flex-wrap gap-2">
              {audiences.map((a) => {
                const Icon = audienceIcons[a];
                return (
                  <button
                    key={a}
                    onClick={() => setActiveAudience(a)}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border",
                      activeAudience === a
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                        : "bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted hover:border-border"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {a}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category filter */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
              <Filter className="h-3.5 w-3.5" />
              Filter by category
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
                    activeCategory === c
                      ? categoryColor[c]
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Result count */}
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-bold text-foreground">{filtered.length}</span> of{" "}
            {tools.length} tools
            {activeAudience !== "All" && (
              <span className="text-primary font-semibold"> · {activeAudience}</span>
            )}
            {activeCategory !== "All" && (
              <span className="text-primary font-semibold"> · {activeCategory}</span>
            )}
          </p>
        </div>
      </section>

      {/* ── Tools Grid ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 bg-muted/20 rounded-3xl border-2 border-dashed border-border/60">
              <Wrench className="h-12 w-12 text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">No tools match your filters</h3>
              <p className="text-sm text-muted-foreground">Try selecting a different audience or category.</p>
              <button
                className="mt-4 text-primary text-sm font-semibold underline underline-offset-4"
                onClick={() => { setActiveAudience("All"); setActiveCategory("All"); }}
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((tool) => (
                <div
                  key={tool.id}
                  className="group relative flex flex-col bg-card rounded-2xl border border-border/60 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  {/* Featured badge */}
                  {tool.highlighted && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-600 text-[10px] font-black uppercase tracking-widest border border-amber-400/20">
                      ★ Featured
                    </div>
                  )}

                  {/* Gradient top bar */}
                  <div className={cn("h-1.5 w-full bg-gradient-to-r", tool.gradient)} />

                  <div className="flex flex-col flex-1 p-6">
                    {/* Icon + Name */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={cn("p-3 rounded-xl bg-gradient-to-br text-white shadow-md flex-shrink-0", tool.gradient)}>
                        <tool.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <span className={cn("text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full inline-block", tool.badgeColor)}>
                          {tool.category}
                        </span>
                        <h2 className="font-display text-lg font-bold text-foreground mt-1 group-hover:text-primary transition-colors leading-tight">
                          {tool.name}
                        </h2>
                        <p className="text-xs text-muted-foreground italic">{tool.tagline}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {tool.description}
                    </p>

                    {/* Audience pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {tool.audiences.map((a) => {
                        const Icon = audienceIcons[a];
                        return (
                          <span key={a} className="flex items-center gap-1 text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded-full font-semibold border border-primary/10">
                            <Icon className="h-2.5 w-2.5" />
                            {a}
                          </span>
                        );
                      })}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-muted px-2 py-0.5 rounded-md text-muted-foreground font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r transition-all duration-200 hover:opacity-90 hover:shadow-lg",
                        tool.gradient
                      )}
                    >
                      Visit {tool.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}

              {/* Coming Soon */}
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/60 p-10 text-center bg-muted/10 min-h-[300px]">
                <Sparkles className="h-10 w-10 text-muted-foreground/30 mb-4" />
                <h3 className="font-display text-base font-bold text-foreground mb-2">More tools coming</h3>
                <p className="text-xs text-muted-foreground max-w-xs">
                  We're continuously vetting new platforms for REVA's curriculum and research workflows.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default PlatformsTools;
