import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronRight,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  Flame,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Layers,
  Lightbulb,
  Rocket,
  Scale,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface StreamData {
  id: string;
  name: string;
  icon: React.ElementType;
  category: "STEM" | "Professional" | "Humanities & Social";
  l1Example: { title: string; type: string; desc: string };
  l2Example: { title: string; type: string; desc: string };
  l3Example: { title: string; type: string; desc: string };
  l4Example: { title: string; type: string; desc: string };
}

export const STREAMS_DATA: StreamData[] = [
  {
    id: "cs",
    name: "Computer Science & AI",
    icon: Cpu,
    category: "STEM",
    l1Example: {
      title: "Deconstruct LLM Token Generation & Attention",
      type: "P1: Learning",
      desc: "Trace token-by-token probabilities, temperature sampling, and embeddings with an interactive notebook.",
    },
    l2Example: {
      title: "Campus AI Autonomous Agent Orchestrator",
      type: "P5: AI-Native Coding",
      desc: "Build a multi-agent workflow that automates timetable conflict resolution and assignment audits.",
    },
    l3Example: {
      title: "Domain LLM Benchmark on Low-Resource Dialects",
      type: "P6: Research",
      desc: "Design an evaluation suite measuring reasoning fidelity and hallucination rates in Indian languages.",
    },
    l4Example: {
      title: "Enterprise Multi-Agent Orchestration Framework",
      type: "P4+P6: Venture & IP",
      desc: "Open-source an AI-native runtime for deterministic workflow execution with verification guarantees.",
    },
  },
  {
    id: "ece",
    name: "Electronics & Communication (ECE)",
    icon: Zap,
    category: "STEM",
    l1Example: {
      title: "RF Signal Path Decomposition in 5G Small Cells",
      type: "P1: Learning",
      desc: "Map modulation schemes and beamforming math to hardware block diagrams using AI-assisted diagrams.",
    },
    l2Example: {
      title: "Edge-AI Smart Agriculture Sensor Node",
      type: "P4: Building",
      desc: "Assemble an ESP32/RP2040 edge telemetry board with on-device tinyML soil moisture anomaly detection.",
    },
    l3Example: {
      title: "FPGA vs TinyML Accelerator Benchmarking",
      type: "P6: Research",
      desc: "Measure latency, Joules per inference, and memory bandwidth for quantized neural networks on silicon.",
    },
    l4Example: {
      title: "Neuromorphic Vision Sensing for Industrial Robotics",
      type: "P4+P6: Venture & IP",
      desc: "File a provisional patent for ultra-low-power event-camera visual odometry in autonomous drones.",
    },
  },
  {
    id: "mechanical",
    name: "Mechanical & Aerospace Engineering",
    icon: Flame,
    category: "STEM",
    l1Example: {
      title: "Thermal Boundary Layer Simulation & Analysis",
      type: "P1: Learning",
      desc: "Compare analytical Navier-Stokes solutions with AI-augmented CFD boundary simulations.",
    },
    l2Example: {
      title: "Generative Design for 3D-Printed UAV Wing Spar",
      type: "P4: Building",
      desc: "Use topology optimization and FEA stress testing to reduce structural weight by 28% without yield.",
    },
    l3Example: {
      title: "CFD Aerodynamic Optimization with Neural Operators",
      type: "P6: Research",
      desc: "Train Fourier Neural Operators to accelerate wind-tunnel CFD simulations by 100x with 98% accuracy.",
    },
    l4Example: {
      title: "Modular Clean Thermal Energy Recovery Microgrid",
      type: "P7+P4: Consulting & Build",
      desc: "Consult for a manufacturing plant and deploy an industrial waste heat recovery system with measurable ROI.",
    },
  },
  {
    id: "civil",
    name: "Civil & Environmental Infrastructure",
    icon: Layers,
    category: "STEM",
    l1Example: {
      title: "Structural Health Audit of Historic Bridges",
      type: "P1: Learning",
      desc: "Analyze public structural load reports and create an educational breakdown of seismic vulnerability.",
    },
    l2Example: {
      title: "IoT Flood Early-Warning Telemetry Network",
      type: "P4: Building",
      desc: "Deploy ultrasound river-gauge sensors feeding an open web dashboard for civic flood preparedness.",
    },
    l3Example: {
      title: "Urban Heat Island Mitigation & Permeable Materials",
      type: "P6: Research",
      desc: "Satellite radiometric analysis paired with ground sensors across municipal wards to model microclimates.",
    },
    l4Example: {
      title: "Municipal Climate-Resilience Infrastructure Masterplan",
      type: "P10: Policy & Advocacy",
      desc: "Draft a formal resilience proposal adopted by urban local bodies with funded pilot allocations.",
    },
  },
  {
    id: "biotech",
    name: "Biotechnology & Life Sciences",
    icon: FlaskConical,
    category: "STEM",
    l1Example: {
      title: "CRISPR-Cas9 Guide RNA Design Deconstruction",
      type: "P1: Learning",
      desc: "Trace off-target scoring algorithms and guide RNA thermodynamic stability using bio-computational tools.",
    },
    l2Example: {
      title: "Automated Microbial Colony Counter & Assayer",
      type: "P4: Building",
      desc: "Build an open-hardware camera rig and computer-vision classifier for high-throughput agar plate assays.",
    },
    l3Example: {
      title: "AlphaFold In-Silico Docking for Phytochemicals",
      type: "P6: Research",
      desc: "Screen traditional medicinal compounds against inflammatory receptor targets using structural docking.",
    },
    l4Example: {
      title: "Low-Cost Rapid Diagnostic Point-of-Care Cartridge",
      type: "P4+P6: Venture & IP",
      desc: "Develop a microfluidic diagnostic prototype for vector-borne diseases and draft clinical trial protocols.",
    },
  },
  {
    id: "law",
    name: "Law & Jurisprudence",
    icon: Scale,
    category: "Professional",
    l1Example: {
      title: "Judicial Precedent Mapping on AI Intellectual Property",
      type: "P1: Learning",
      desc: "Brief 10 landmark international copyright and inventorship decisions involving machine-generated works.",
    },
    l2Example: {
      title: "Legal Tech DPDP Act Compliance Evaluator",
      type: "P7: Consulting",
      desc: "Draft a compliance checklist and audit a college's student data handling under India's DPDP Act.",
    },
    l3Example: {
      title: "Comparative Liability Models for Autonomous Agent Harms",
      type: "P6: Research",
      desc: "Author an academic law review article proposing a dual-tier strict liability framework for AI agents.",
    },
    l4Example: {
      title: "Model Legislative Bill on Algorithmic Transparency",
      type: "P10: Policy & Advocacy",
      desc: "Submit a drafted white paper and stakeholder memorandum to parliamentary standing committees.",
    },
  },
  {
    id: "architecture",
    name: "Architecture & Spatial Design",
    icon: Target,
    category: "Professional",
    l1Example: {
      title: "Vernacular Passive Cooling Climate Deconstruction",
      type: "P1: Learning",
      desc: "Document Jali screens, courtyard aerodynamics, and thermal mass in traditional Rajasthani architecture.",
    },
    l2Example: {
      title: "Adaptive Reuse of Urban Brownfield Site",
      type: "P8: Design",
      desc: "Generate parametric BIM models and physical maquette converting an abandoned warehouse into a community hub.",
    },
    l3Example: {
      title: "AI-Augmented Carbon-Neutral Housing Prototypes",
      type: "P6+P8: Research & Design",
      desc: "Run embodied carbon simulations across 50 material combinations to optimize life-cycle emissions.",
    },
    l4Example: {
      title: "Living Campus Regenerative Habitat Masterplan",
      type: "P4: Venture & Build",
      desc: "Submit a full architectural portfolio for international biennale exhibition or live public commissioning.",
    },
  },
  {
    id: "medicine",
    name: "Medicine & Health Sciences",
    icon: HeartPulse,
    category: "Professional",
    l1Example: {
      title: "Pathophysiology & Biomarker Differential Atlas",
      type: "P1: Learning",
      desc: "Create interactive visual diagnostic flowcharts for complex multi-organ syndrome presentations.",
    },
    l2Example: {
      title: "Vernacular Patient Discharge & Medication Assistant",
      type: "P4: Building",
      desc: "Develop plain-language voice and visual instructions for non-literate patients across rural clinics.",
    },
    l3Example: {
      title: "Systematic Review of AI Clinical Triage Safety",
      type: "P6: Research",
      desc: "Perform PRISMA-compliant meta-analysis of diagnostic discordance rates between LLMs and clinicians.",
    },
    l4Example: {
      title: "Rural Tele-Triage & Sepsis Early-Warning Pilot",
      type: "P7+P12: Consulting & Impact",
      desc: "Deploy and clinically audit an assisted bedside protocol across 3 community health centers.",
    },
  },
  {
    id: "management",
    name: "Business Management & Strategy",
    icon: Briefcase,
    category: "Professional",
    l1Example: {
      title: "Autopsy of 5 AI Unicorn Pivot & Downfall Cases",
      type: "P1: Learning",
      desc: "Extract unit economic, customer churn, and defensibility breakdowns across venture-backed AI startups.",
    },
    l2Example: {
      title: "GTM Strategy & Financial Model for Deeptech Spinout",
      type: "P7: Consulting",
      desc: "Deliver competitive matrix, customer interview synthesis, and dynamic pricing sensitivity model.",
    },
    l3Example: {
      title: "Organizational Velocity & AI Agent Workforce Dynamics",
      type: "P6: Research",
      desc: "Conduct empirical field study measuring employee leverage and knowledge retention in AI-native teams.",
    },
    l4Example: {
      title: "Micro-Venture Inception & Seed Traction Sprint",
      type: "P4: Venture Launch",
      desc: "Launch an autonomous digital service with first 10 paying enterprise clients and audited revenue run-rate.",
    },
  },
  {
    id: "education",
    name: "Education & Pedagogy",
    icon: GraduationCap,
    category: "Humanities & Social",
    l1Example: {
      title: "Challenge-Based Learning Rubric Decomposition",
      type: "P1: Learning",
      desc: "Analyze Gold Standard PBL vs Challenge-Based Learning models and map to Bloom's Revised Taxonomy.",
    },
    l2Example: {
      title: "Srujana-Pathway Peer Quest Curriculum Pack",
      type: "P3: Learning Resources",
      desc: "Author and test a 5-day hands-on AI literacy workshop module adopted by a local high school club.",
    },
    l3Example: {
      title: "Cognitive Apprenticeship in AI-Augmented Classrooms",
      type: "P6: Research",
      desc: "Measure problem-solving transfer and metacognitive retention among students using AI sparring partners.",
    },
    l4Example: {
      title: "District-Wide AI Mentor-in-the-Loop Implementation",
      type: "P10+P3: Policy & Pedagogy",
      desc: "Train 50 school educators as PROdiGYM Gurus, reaching 1,500+ active student challenge participants.",
    },
  },
  {
    id: "humanities",
    name: "Humanities, Arts & Philosophy",
    icon: Brain,
    category: "Humanities & Social",
    l1Example: {
      title: "Classical Indian Aesthetics (Rasa) in Synthetic Media",
      type: "P1: Learning",
      desc: "Compare Bharata Muni's Natyashastra theory of aesthetic experience with generative art synthesis.",
    },
    l2Example: {
      title: "Interactive Digital Archive of Endangered Oral History",
      type: "P11: Arts & Culture",
      desc: "Curate, transcribe, and translate oral histories of artisan weaver communities with AI transcription.",
    },
    l3Example: {
      title: "Discourse Analysis of Autonomy in AI Ethics Treatises",
      type: "P6: Research",
      desc: "Examine tensions between Eastern collectivist duty (Dharma) and Western rights frameworks in tech policy.",
    },
    l4Example: {
      title: "Cross-Cultural Interdisciplinary Exhibition & Book",
      type: "P11+P12: Public Intellectual",
      desc: "Curate a public museum pavilion and published monograph on human identity in the cognitive abundance era.",
    },
  },
];

export const ASPIRATIONS = [
  { id: "career", label: "Land Top AI-Era Career / Internship", icon: Briefcase },
  { id: "research", label: "Publish Research / Preprint / IP", icon: FlaskConical },
  { id: "venture", label: "Build & Launch a Venture / Product", icon: Rocket },
  { id: "pedagogy", label: "Create Learning Resources / Teach", icon: BookOpen },
  { id: "impact", label: "Community & Civic Societal Impact", icon: Award },
];

export function ChainOfChallengesGenerator() {
  const [selectedStreamId, setSelectedStreamId] = useState<string>("cs");
  const [selectedLevelId, setSelectedLevelId] = useState<"L1" | "L2" | "L3" | "L4">("L2");
  const [teamMode, setTeamMode] = useState<"solo" | "team">("team");
  const [aspirationId, setAspirationId] = useState<string>("career");
  const [copied, setCopied] = useState(false);

  const currentStream = STREAMS_DATA.find((s) => s.id === selectedStreamId) || STREAMS_DATA[0];
  const currentAspiration = ASPIRATIONS.find((a) => a.id === aspirationId) || ASPIRATIONS[0];

  // Derive custom 3-Challenge Chain
  const getChain = () => {
    const isL1 = selectedLevelId === "L1";
    const isL2 = selectedLevelId === "L2";
    const isL3 = selectedLevelId === "L3";
    const isL4 = selectedLevelId === "L4";

    const sName = currentStream.name;

    if (isL1) {
      return [
        {
          step: 1,
          type: "P1",
          typeLabel: "Learning Challenge",
          title: `Foundations of ${sName}: First-Principles Deconstruction`,
          problem: `Unpack the fundamental mechanisms, equations, and mental models of ${sName} with AI as an interactive Socratic tutor.`,
          learningOutcomes: [
            "Explain core domain terminology and systems without buzzwords.",
            "Formulate precision prompts to stress-test your understanding.",
            "Spot and correct AI hallucinations in domain context.",
          ],
          deliverable: "Annotated primer, interactive mind-map, and reflective learning log committed to GitHub.",
          guru: "L3/L4 Senior Peer Guru",
          milestone: "ACP-1 → ACP-2 · DED-1 Foundational · HCS C1 Inner Anchor & C3 Thinking",
          sprint: "3–5 Days (10 reps)",
        },
        {
          step: 2,
          type: "P2",
          typeLabel: "Teaching Challenge",
          title: `Teach-Back Sprint: Explaining ${sName} to a Non-Specialist`,
          problem: `To truly know something, teach it. Design a 15-minute interactive lesson for a peer or junior on a core concept in ${sName}.`,
          learningOutcomes: [
            "Translate technical complexity into intuitive analogies (Feynman Technique).",
            "Handle live questions and probe misunderstandings with empathy.",
            "Reflect on feedback and iterate explanation clarity.",
          ],
          deliverable: "Recorded 10-minute micro-lesson or interactive slide-deck with peer feedback rubric.",
          guru: "Faculty or Academic Guru",
          milestone: "HCS C4 Communicating · HCS C6 Empathy · DED-1 Verified",
          sprint: "1 Week (15 reps)",
        },
        {
          step: 3,
          type: "P9",
          typeLabel: "Community Micro-Challenge",
          title: `Local Problem Discovery in ${sName}`,
          problem: `Identify an unaddressed friction or inefficiency in your campus, locality, or student body solvable with domain principles.`,
          learningOutcomes: [
            "Conduct 3 in-depth stakeholder empathy interviews.",
            "Frame an actionable Problem Statement using SPOT-PROBE methodology.",
            "Draft a concrete hypothesis for a follow-up L2 builder sprint.",
          ],
          deliverable: "1-page Problem Brief with stakeholder quotes and photographic/data evidence.",
          guru: "Domain Practitioner Guru",
          milestone: "HCS C8 Contributing to Society · C2 Taking Charge · Readiness for L2",
          sprint: "1 Week (15 reps)",
        },
      ];
    }

    if (isL2) {
      return [
        {
          step: 1,
          type: "P4",
          typeLabel: "Building / Generating Challenge",
          title: `Rapid Prototype: Applied ${sName} Problem Solver`,
          problem: `Construct a working, testable solution for a real-world friction in ${sName}. No toy datasets or synthetic tutorials.`,
          learningOutcomes: [
            "Formulate detailed functional specs before writing code or assembling designs.",
            "Orchestrate AI agents (Claude, Copilot, Cursor) to generate 70% of scaffolding.",
            "Validate with real inputs, unit tests, and edge-case boundary conditions.",
          ],
          deliverable: "Working prototype, documentation in Markdown, and demonstrable proof-of-work link.",
          guru: "Industry Practitioner Guru",
          milestone: "ACP-2 → ACP-3 Orchestrator · DED-2 Applied · HCS C5 Creating",
          sprint: "2 Weeks (20 reps)",
        },
        {
          step: 2,
          type: teamMode === "team" ? "P12" : "P5",
          typeLabel: teamMode === "team" ? "Interdisciplinary Team Challenge" : "AI-Native Engineering Challenge",
          title: teamMode === "team"
            ? `Collaborative Squad Sprint: Full-Story ${sName} System`
            : `AI-Native High-Leverage Build in ${sName}`,
          problem: teamMode === "team"
            ? `Form a 3-person squad (Domain Lead, AI Architect, Evaluator) to build an integrated end-to-end platform.`
            : `Architect an autonomous workflow that multiplies your solo engineering output by 10x with rigorous evals.`,
          learningOutcomes: [
            "Practice distributed ownership, clear interface contracts, and Git-driven collaboration.",
            "Implement automated eval pipelines to quantify accuracy and latency.",
            "Act as the Human Expert In The Loop (HEITL) auditing agent decisions.",
          ],
          deliverable: "Tested multi-component repository, automated CI/CD eval suite, and 2-min demo walkthrough.",
          guru: "Principal Engineer / Senior Architect Guru",
          milestone: "ACP-3 Orchestrator · HCS C6 Distributed Leadership · DED-2 High",
          sprint: "3 Weeks (30 reps)",
        },
        {
          step: 3,
          type: "P7",
          typeLabel: "Consulting / Advisory Challenge",
          title: `External Defense: Deliver & Defend to Stakeholders`,
          problem: `Present your solution to external users, an industry jury, or a community client. Defend architectural choices and trade-offs.`,
          learningOutcomes: [
            "Synthesize business, ethical, and technical value in an executive summary.",
            "Handle tough red-team critique and defend design choices without defensiveness.",
            "Produce an actionable post-mortem and roadmap.",
          ],
          deliverable: "External Review Report with client sign-off, live presentation, and verified credential in portfolio.",
          guru: "Executive Jury / Domain Guru",
          milestone: "HCS C4 High-stakes Communication · DED-3 Candidate · Internship Readiness",
          sprint: "1 Week (10 reps)",
        },
      ];
    }

    if (isL3) {
      return [
        {
          step: 1,
          type: "P6",
          typeLabel: "Deep Inquiry & Literature Survey",
          title: `State-of-the-Art Systematic Survey in ${sName}`,
          problem: `Map the frontier of open problems in ${sName}. Synthesize 30+ recent academic papers or institutional benchmarks to uncover an unresolved gap.`,
          learningOutcomes: [
            "Perform rigorous literature surveys using standardized evidence rubrics.",
            "Extract atomic claims and isolate contradictory empirical findings.",
            "Formulate a novel hypothesis worthy of publication or patent consideration.",
          ],
          deliverable: "Systematic Literature Matrix, atomic claim notes in wiki format, and hypothesis defense brief.",
          guru: "Research Scholar / Post-doc Guru",
          milestone: "DED-3 Expert Depth · ACP-3 Advanced · HCS C3 Deep Thinking",
          sprint: "2–3 Weeks (25 reps)",
        },
        {
          step: 2,
          type: "P6",
          typeLabel: "Empirical Investigation & Rigorous Benchmark",
          title: `Experimental Proof & Benchmark Suite in ${sName}`,
          problem: `Design and execute the controlled experiment, empirical simulation, or legal/architectural comparative analysis.`,
          learningOutcomes: [
            "Construct reproducible benchmarks with rigorous controls against confirmation bias.",
            "Steer AI agents to execute data synthesis, statistical analysis, and plot generation.",
            "Subject all findings to adversarial red-teaming (blind multi-agent review).",
          ],
          deliverable: "Complete preprint draft (LaTeX/Markdown) with reproducible datasets and code repository.",
          guru: "Faculty Principal Investigator Guru",
          milestone: "DED-4 Original Contributor · ACP-4 AI Architect · HCS C5 Innovation",
          sprint: "4 Weeks (40 reps)",
        },
        {
          step: 3,
          type: "P10",
          typeLabel: "Advocacy, Policy & Public Contribution",
          title: `Public Defense & Intellectual Contribution in ${sName}`,
          problem: `Subject your research to peer review, submit to an archival journal/conference, or file a provisional patent disclosure.`,
          learningOutcomes: [
            "Address blind reviewer critique with structured, evidence-backed rebuttals.",
            "Communicate societal implications, safety guardrails, and policy impact.",
            "Mentor an L1/L2 squad through their first challenge rep.",
          ],
          deliverable: "Submitted preprint on arXiv/SSRN, patent disclosure, or institutional policy adoption letter.",
          guru: "Senior Fellow / Dean Guru",
          milestone: "DED-4 Confirmed · HCS C8 Societal Contribution · Guru Certification",
          sprint: "2 Weeks (15 reps)",
        },
      ];
    }

    // L4 Pioneer
    return [
      {
        step: 1,
        type: "P3",
        typeLabel: "Pedagogic Architecture Challenge",
        title: `Design an Open Challenge Syllabus for 100+ Learners in ${sName}`,
        problem: `Translate your deep mastery into a repeatable, high-engagement challenge curriculum that accelerates others through the Srujana Pathway.`,
        learningOutcomes: [
          "Deconstruct expert intuition into explicit rubrics and scaffolding stages.",
          "Design automated evals and peer-review rubrics that scale without loss of quality.",
          "Train and certify 5 Gurus to deliver the cohort.",
        ],
        deliverable: "Full open-source challenge pack adopted by a university department or PROdiGYM cohort.",
        guru: "Boss of AI Academic Council",
        milestone: "HCS C6 Master Mentorship · C8 Generative Seva · DED-5 Recognized Authority",
        sprint: "3 Weeks",
      },
      {
        step: 2,
        type: "P12",
        typeLabel: "Venture / Mission-Critical Innovation",
        title: `Lead an Interdisciplinary Moonshot Venture in ${sName}`,
        problem: `Architect and direct a cross-stream team combining ${sName} with AI agents, legal frameworks, and human-centric design for systemic impact.`,
        learningOutcomes: [
          "Direct multi-agent swarms alongside multidisciplinary human experts.",
          "Navigate institutional governance, ethical dilemmas, and capital allocation.",
          "Achieve verifiable real-world adoption, revenue, or public policy impact.",
        ],
        deliverable: "Operational venture, verified institutional pilot, or multi-center research consortium.",
        guru: "Venture Partner / Institutional Leader",
        milestone: "ACP-5 AI Pioneer · DED-5 Authority · HCS C8 Transformational Leadership",
        sprint: "8–12 Weeks",
      },
      {
        step: 3,
        type: "P2+P6",
        typeLabel: "Prakamya Masterwork Defense",
        title: `Prakamya Capstone: Discernment of What is Worth Wanting`,
        problem: `Document the full journey, institutional lessons, and societal impact. Deliver a public master lecture and induct the next cohort.`,
        learningOutcomes: [
          "Articulate ethical stewardship and the philosophical principle of Prakamya.",
          "Establish an enduring community of practice and talent pipeline.",
          "Sustain the cycle of learning, building, and uplifting mankind.",
        ],
        deliverable: "Published monograph or keynote, accredited Guru fellowship, and alumni challenge fund.",
        guru: "Founding Mentor (Sanjay Chitnis)",
        milestone: "Pioneer Fellowship · Lifelong PROdiGYM Master Guru",
        sprint: "Ongoing",
      },
    ];
  };

  const chain = getChain();

  const generateMarkdownScaffold = () => {
    return `# PROdiGYM Chain of Challenges: ${currentStream.name}
**Learner Level:** ${selectedLevelId} (${selectedLevelId === "L1" ? "Explorer" : selectedLevelId === "L2" ? "Builder" : selectedLevelId === "L3" ? "Innovator" : "Pioneer"})
**Collaboration Mode:** ${teamMode === "team" ? "Collaborative Team / Squad" : "Solo Individual Learner"}
**Primary Aspiration:** ${currentAspiration.label}
**Philosophy:** Prakamya (Discernment of what is worth wanting)

---

${chain
  .map(
    (c) => `## Challenge ${c.step}: ${c.title}
- **Project Type:** ${c.type} (${c.typeLabel})
- **Sprint Duration:** ${c.sprint}
- **Assigned Guru (Mentor):** ${c.guru}
- **3DLA Focus:** ${c.milestone}

### Problem / Challenge Statement
${c.problem}

### Learning Outcomes (Pedagogy of CBL)
${c.learningOutcomes.map((lo, i) => `${i + 1}. ${lo}`).join("\n")}

### Tangible Deliverable
${c.deliverable}

---`
  )
  .join("\n\n")}

*Generated via PROdiGYM (bossofai.org/prodigym) — The Gym for Brain.*
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdownScaffold());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* ─── Interactive Form Card ─────────────────────────────────────── */}
      <div className="brut rounded-2xl bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border-2 border-foreground bg-accent text-accent-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <p className="label-mono text-xs font-bold text-muted-foreground uppercase">Interactive Pathway Architect</p>
            </div>
            <h3 className="mt-1 font-heading text-2xl font-extrabold sm:text-3xl">
              Design Your Custom Chain of Challenges
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Select your academic stream, Srujana Pathway level, and aspiration to generate an aligned 3-sprint challenge workout.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleCopy}
              variant="outline"
              size="sm"
              className="gap-1.5"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied Scaffold!" : "Copy Scaffold Markdown"}
            </Button>
          </div>
        </div>

        {/* ─── Selectors ─────────────────────────────────────────────────── */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stream Selector */}
          <div>
            <label className="label-mono text-xs font-bold text-foreground block mb-2">
              1. Degree Stream / Discipline
            </label>
            <select
              value={selectedStreamId}
              onChange={(e) => setSelectedStreamId(e.target.value)}
              className="w-full rounded-xl border-2 border-foreground bg-background px-3 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-accent"
              id="stream-select"
            >
              <optgroup label="STEM & Engineering">
                {STREAMS_DATA.filter((s) => s.category === "STEM").map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Professional & Applied">
                {STREAMS_DATA.filter((s) => s.category === "Professional").map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Humanities, Social & Pedagogy">
                {STREAMS_DATA.filter((s) => s.category === "Humanities & Social").map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Level Selector */}
          <div>
            <label className="label-mono text-xs font-bold text-foreground block mb-2">
              2. Srujana Pathway Stage
            </label>
            <div className="grid grid-cols-4 gap-1 rounded-xl border-2 border-foreground bg-secondary/30 p-1">
              {(["L1", "L2", "L3", "L4"] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevelId(lvl)}
                  className={`rounded-lg py-1.5 text-xs font-bold transition-all ${
                    selectedLevelId === lvl
                      ? "bg-foreground text-background shadow"
                      : "hover:bg-secondary text-foreground"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground font-mono">
              {selectedLevelId === "L1" && "1st Year / Curious Explorer"}
              {selectedLevelId === "L2" && "2nd/3rd Year / Applied Builder"}
              {selectedLevelId === "L3" && "Final Year / Scholar / Innovator"}
              {selectedLevelId === "L4" && "Faculty / Post-doc / Pioneer"}
            </p>
          </div>

          {/* Mode Selector */}
          <div>
            <label className="label-mono text-xs font-bold text-foreground block mb-2">
              3. Participation Mode
            </label>
            <div className="grid grid-cols-2 gap-1 rounded-xl border-2 border-foreground bg-secondary/30 p-1">
              <button
                onClick={() => setTeamMode("solo")}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-bold transition-all ${
                  teamMode === "solo"
                    ? "bg-foreground text-background shadow"
                    : "hover:bg-secondary text-foreground"
                }`}
              >
                <Users className="h-3 w-3" /> Solo
              </button>
              <button
                onClick={() => setTeamMode("team")}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-bold transition-all ${
                  teamMode === "team"
                    ? "bg-foreground text-background shadow"
                    : "hover:bg-secondary text-foreground"
                }`}
              >
                <Sparkles className="h-3 w-3" /> Squad (2–4)
              </button>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground font-mono">
              {teamMode === "solo" ? "Individual deliberate practice" : "Collaborative peer gym squad"}
            </p>
          </div>

          {/* Aspiration Selector */}
          <div>
            <label className="label-mono text-xs font-bold text-foreground block mb-2">
              4. Primary Aspiration
            </label>
            <select
              value={aspirationId}
              onChange={(e) => setAspirationId(e.target.value)}
              className="w-full rounded-xl border-2 border-foreground bg-background px-3 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-accent"
              id="aspiration-select"
            >
              {ASPIRATIONS.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ─── Active Chain Sequence Output ──────────────────────────────── */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Badge variant="accent">Your Personalized Chain of Challenges</Badge>
              <span className="text-xs font-mono text-muted-foreground">3 Progressive Sprints</span>
            </div>
            <span className="label-mono text-xs text-muted-foreground">
              Pedagogy: Challenge-Based Learning (CBL)
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {chain.map((c) => (
              <div
                key={c.step}
                className="brut-sm rounded-2xl bg-card border-2 border-foreground p-5 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-foreground text-background font-mono text-xs font-bold px-3 py-1 rounded-bl-xl">
                  Sprint {c.step}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      {c.type}
                    </Badge>
                    <span className="text-[11px] font-mono text-muted-foreground">{c.typeLabel}</span>
                  </div>

                  <h4 className="font-heading text-base font-extrabold leading-snug text-foreground">
                    {c.title}
                  </h4>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {c.problem}
                  </p>

                  <div className="mt-4 space-y-2 border-t border-foreground/10 pt-3">
                    <p className="label-mono text-[10px] font-bold text-foreground uppercase">
                      Learning Outcomes (LOs)
                    </p>
                    <ul className="space-y-1">
                      {c.learningOutcomes.map((lo, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-foreground">
                          <CheckCircle2 className="h-3 w-3 shrink-0 text-accent mt-0.5" />
                          <span>{lo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 space-y-1 border-t border-foreground/10 pt-3">
                    <p className="label-mono text-[10px] font-bold text-ember uppercase">
                      Tangible Deliverable
                    </p>
                    <p className="text-xs font-semibold text-foreground">{c.deliverable}</p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-foreground/10 bg-secondary/20 -mx-5 -mb-5 p-4 rounded-b-xl space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-muted-foreground">Assigned Guru:</span>
                    <span className="font-bold text-foreground">{c.guru}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-muted-foreground">Timeline:</span>
                    <span className="font-mono font-bold text-accent">{c.sprint}</span>
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground pt-1 border-t border-foreground/10">
                    Target: {c.milestone}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border-2 border-foreground bg-accent/15 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-foreground bg-accent text-accent-foreground">
                <Rocket className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold">Ready to embark on this Chain of Challenges?</p>
                <p className="text-xs text-muted-foreground">
                  Create your project workspace, clone the scaffold, or join an upcoming Guru-guided cohort.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="accent" size="sm">
                <Link to={`/join?stream=${selectedStreamId}&level=${selectedLevelId}&mode=${teamMode}`}>
                  Enroll in this Chain <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Exhaustive Stream-by-Stream Directory ─────────────────────────── */}
      <div className="brut rounded-2xl bg-secondary/30 p-6 sm:p-8">
        <div className="max-w-3xl mb-6">
          <p className="label-mono text-muted-foreground">Exhaustive Stream Directory</p>
          <h3 className="font-heading text-2xl font-extrabold sm:text-3xl">
            Challenge-Projects Across Every Discipline
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            From STEAM, Law, and Architecture to Medicine, Management, and Humanities — see how every level progresses from first-year undergraduate to research scholar and faculty.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STREAMS_DATA.map((stream) => {
            const Icon = stream.icon;
            const isSelected = stream.id === selectedStreamId;
            return (
              <div
                key={stream.id}
                onClick={() => setSelectedStreamId(stream.id)}
                className={`brut-sm cursor-pointer rounded-xl bg-card p-5 transition-all hover:-translate-y-0.5 ${
                  isSelected ? "border-accent ring-2 ring-accent" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-foreground bg-secondary text-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="font-heading text-sm font-bold leading-tight">{stream.name}</h4>
                      <span className="label-mono text-[10px] text-muted-foreground">{stream.category}</span>
                    </div>
                  </div>
                  {isSelected && <Badge variant="accent">Selected</Badge>}
                </div>

                <div className="space-y-2 mt-3 text-xs border-t border-foreground/10 pt-3">
                  <div className="flex items-start gap-1.5">
                    <span className="label-mono text-[10px] font-bold text-accent shrink-0">L1</span>
                    <span className="text-muted-foreground line-clamp-1">{stream.l1Example.title}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="label-mono text-[10px] font-bold text-ember shrink-0">L2</span>
                    <span className="text-muted-foreground line-clamp-1">{stream.l2Example.title}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="label-mono text-[10px] font-bold text-foreground shrink-0">L3</span>
                    <span className="text-muted-foreground line-clamp-1">{stream.l3Example.title}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="label-mono text-[10px] font-bold text-primary shrink-0">L4</span>
                    <span className="text-muted-foreground line-clamp-1">{stream.l4Example.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
