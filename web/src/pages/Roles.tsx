import React from "react";
import { RolePage } from "@/components/site/RolePage";
import { SrujanaPathway } from "@/components/site/SrujanaPathway";
import { IDEAS, roleBySlug, type Idea } from "@/content/roles";

const REPO = "https://github.com/sanchitnis/bossofai";

const role = (s: string) => {
  const r = roleBySlug(s);
  if (!r) throw new Error(`Unknown role ${s}`);
  return r;
};

export const Students: React.FC = () => (
  <RolePage
    role={role("students")}
    hook={
      <>
        Don't just use AI. <span className="mark-lime">Build</span> with it.
      </>
    }
    sub="The Srujana Pathway takes you from basic foundational learning to prepare for internships to venture development in a progressive series of challenges."
    becomeTitle="An AI engineer, or someone ready for an AI-era career."
    becomePoints={[
      "Build and deploy AI apps, and measure whether they actually work (evals, error analysis).",
      "Write clear specs and steer coding agents without letting them break things.",
      "Know software fundamentals well enough to judge what the agent hands back.",
      "Shape what gets built: product sense, users, when to ship fast and when to slow down.",
      "Carry the judgment: safety, ethics and honesty. The human signs off.",
    ]}
    steps={[
      {
        title: "Stage 1: Micro-challenges & Foundations",
        text: "Fast, bite-sized public wins. Master prompt engineering, coding agents, and red-teaming hallucinations.",
      },
      {
        title: "Stage 2: Applied Sprints & Internships",
        text: "Real problems from community and industry. Move from manual coding to AI agent orchestration in a team to prepare for internships.",
      },
      {
        title: "Stage 3: Systems Architecture & Research IP",
        text: "Deep inquiry challenges. Face an expert jury that red-teams your system. Aim for a preprint, DPG, or patent.",
      },
      {
        title: "Stage 4: Venture Incubation & AI Careers",
        text: "Spin out an AI-native venture with paying users, or use your verified portfolio to land top-tier AI engineering roles.",
      },
    ]}
    ideas={IDEAS.students}
    ideasIntro="These are starting points we made up, not finished projects. Pick one, bend it, or bring your own."
    cta="Start free"
    deepTitle="The Srujana Pathway: Framework, Pedagogy & Evidence"
    deep={
      <>
        <h3>The Srujana Pathway: Core Philosophy</h3>
        <p>
          The <strong>Srujana Pathway</strong> is Boss of AI's experiential developmental framework for learners of all backgrounds.
          In the era of <strong>Abundant Intelligence</strong>, traditional computer science education—rooted in manual syntax memorization
          and isolated classroom problem sets—is insufficient. The substance of engineering has shifted from routine task execution
          to <strong>AI agent orchestration, systems architecture, and high-order human judgment</strong>.
        </p>
        <p>
          Srujana structures this evolution into a <strong>progressive four-stage challenge engine</strong> that takes learners from basic
          foundational literacy directly to qualification for competitive industry internships, deep-tech research, and startup incubation.
        </p>

        <h3>The 4 Developmental Stages in Detail</h3>
        <ul>
          <li>
            <strong>Stage 1: Developing Foundational Skills (AI Literacy & Meta-Learning):</strong> Focuses on transitioning from rote learning
            to cognitive agility. Learners master prompt and context engineering, problem deconstruction, steering coding agents (Claude, Cursor, Copilot),
            and red-teaming synthetic hallucinations. Delivered through 1–3 day micro-challenges and guided coding quests.
          </li>
          <li>
            <strong>Stage 2: Practical Real-World Application (AI Orchestration & Internship Readiness):</strong> Because AI agents automate
            routine grunt work, modern software internships demand orchestrators. Learners join cross-functional pods guided by industry mentors to
            solve authentic problems for clinics, schools, and local enterprises. They practice data governance, hallucination mitigation, and
            Human-in-the-Loop (HEITL) oversight.
          </li>
          <li>
            <strong>Stage 3: Solutions Development, Systems Architecture & Research IP:</strong> Creation is hyper-accelerated. Learners act as
            Systems Architects orchestrating foundation models. The focus elevates from <em>how to build it</em> to <em>what to build and why it matters ethically</em>.
            Teams apply Ramesh Raskar's SPOT-PROBE methodology and Google X's "Monkey-First" principle to tackle the hardest bottlenecks first, defending their
            architecture before an independent expert jury that attempts to red-team and break it.
          </li>
          <li>
            <strong>Stage 4: Enterprise Incubation & Elite Career Placement:</strong> Lean student teams leverage autonomous agent workflows to operate
            with the capability of traditional 30-person companies. Validated solutions transition into AI-native startup spin-offs, corporate licensing contracts,
            or marquee placements in frontier AI engineering roles.
          </li>
        </ul>

        <h3>Pedagogical Lineage & Challenge Engine</h3>
        <p>
          The Srujana Pathway synthesizes proven operational mechanisms from premier global institutions:
        </p>
        <ul>
          <li>
            <strong>Apple Challenge-Based Learning (CBL):</strong> Big Idea &rarr; Essential Question &rarr; Challenge &rarr; Solution &rarr; Public Publishing.
            Challenges are framed around authentic friction, not simulated test questions.
          </li>
          <li>
            <strong>École 42 Peer-Learning Economy:</strong> Teacherless, peer-to-peer correction, gamified skill progressions, and radical student agency.
          </li>
          <li>
            <strong>MIT Media Lab / REDX SPOT-PROBE:</strong> Rapid problem spotting, micro-probing, technical root-cause deconstruction, and brutal de-risking.
          </li>
          <li>
            <strong>Stage-Gated Capital & Review:</strong> Inspired by Y Combinator and stage-gate engineering, advancing to the next stage requires demonstrated,
            measured evidence (evals, telemetry, peer reviews, jury vivas).
          </li>
        </ul>

        <h3>What "AI Engineer" Means Here</h3>
        <p>
          We anchor on Andrew Ng's AI Engineering Skills Map, which DeepLearning.AI built from an analysis of more than
          10,000 job postings plus expert interviews<sup>[1]</sup>. It names four skills: building and deploying AI
          applications (LLMs, context engineering, RAG, agentic workflows, evals and error analysis); software engineering
          fundamentals; working with coding agents; and shaping the build (product sense and judgment about what to ship).
        </p>
        <p>
          We add a fifth, because tools do not carry responsibility: <em>judgment and responsibility</em>. That covers
          safety, ethics, honesty and domain depth, with a human expert signing off (HEITL).
        </p>

        <h3>Recognition & Portfolio Over Credentials</h3>
        <p>
          A public portfolio, open-source contributions, and a leaderboard ranked by peer review and an expert-team
          viva. Not clicks. Not quiz scores. See <a href="/leaderboard">how it will work</a>.
        </p>

        <h3>Start Learning Today</h3>
        <p>
          Our open-source <a href="/learn">AI engineer study guide</a> has two tracks (AI-native builder and deep technical
          AI engineer) and a map from these five skills to the sections worth reading first. Prefer doing to reading? Try the{" "}
          <a href="/quests">13 quests</a>, and browse the <a href="/toolkit">toolkit</a> of prompts, assistants and courses.
        </p>
        <p>
          <sup>[1]</sup> As summarised by{" "}
          <a href="https://www.latent.space/p/ainews-andrew-ng-gets-into-ai-engineering" target="_blank" rel="noopener noreferrer">
            Latent.Space AINews
          </a>
          . We have not yet checked Ng's original post; treat the wording as a summary until we do.
        </p>
      </>
    }
  >
    <SrujanaPathway />
  </RolePage>
);

export const Faculty: React.FC = () => (
  <RolePage
    role={role("faculty")}
    hook={
      <>
        Become a <span className="mark-lime">Superfaculty</span>.
      </>
    }
    sub="Excellent teacher, researcher and mentor at once. Agents take the drudgery; you keep the part only a human can do."
    becomeTitle="A Superfaculty."
    becomePoints={[
      "Quality: better learner outcomes, deeper research, more time for real mentoring.",
      "Productivity: agents absorb admin, grading support, literature sweeps and prototyping. Our target is 10X, and we will measure it before we claim it.",
      "Teaching shifts from delivering content to guiding inquiry and judging AI output.",
      "Research and ventures move from slide decks to working prototypes.",
      "Community: your lab serves schools, small businesses and neighbourhoods.",
    ]}
    steps={[
      { title: "Pick a pillar", text: "Choose one of T, R, A, C, K to improve first. One pilot, not a transformation." },
      { title: "Get a mentor and a kit", text: "A mentor, agent workflows to adapt, and a plan you can finish in a term." },
      { title: "Run it with students", text: "Teach, research or mentor differently, with learners as co-builders." },
      { title: "Review and kaizen", text: "Look at what worked, drop what did not, and share the result with peers." },
    ]}
    ideas={IDEAS.faculty}
    ideasIntro="Pilots you could run this term. Suggestions only; nothing here is built yet."
    cta="Start free"
    deepTitle="The T.R.A.C.K. framework"
    deep={
      <>
        <h3>Five pillars</h3>
        <ul>
          <li><strong>T, Teaching and learning:</strong> inquiry-based co-learning, AI-partnered flipped classes, open-agent assessment.</li>
          <li><strong>R, Research, innovation, consulting and ventures:</strong> agentic discovery and rapid prototyping.</li>
          <li><strong>A, Advising and academic administration:</strong> automate the paperwork so faculty can mentor.</li>
          <li><strong>C, Community transformation:</strong> living labs, school teacher training, support for local enterprises.</li>
          <li><strong>K, Kaizen:</strong> continuous improvement at personal, institutional and societal scale.</li>
        </ul>
        <p>
          The pillars feed each other: teaching surfaces projects, projects become research and ventures, ventures serve the
          community, and freed-up time returns to mentoring. Read the full framework on the{" "}
          <a href="/framework">framework page</a>.
        </p>
        <h3>On the "10X" claim</h3>
        <p>
          10X productivity is a target, not a result. We have not measured it. The plan is a before-and-after time-on-task
          study; until it exists, nothing on this site should be read as evidence for the number.
        </p>
      </>
    }
  />
);

export const Institutions: React.FC = () => (
  <RolePage
    role={role("institutions")}
    hook={
      <>
        A curriculum that <span className="mark-lime">updates itself</span>.
      </>
    }
    sub="AI-augmented curriculum, agent-run workflows, and a path to bring your students and faculty into the work."
    becomeTitle="An AI-ready institution."
    becomePoints={[
      "Living syllabi reviewed every quarter, not every four years.",
      "Agents handle accreditation evidence, timetabling, audit prep and routine paperwork, with human sign-off.",
      "An AI-use policy built with students, faculty and staff, and tested on real cases.",
      "A safe sandbox for experiments, with clear rules on data and integrity.",
      "A direct line to your learners through the Srujana Pathway.",
    ]}
    steps={[
      { title: "Baseline", text: "Pick one programme or department. Map where time and quality leak today." },
      { title: "Pilot", text: "Run one living-syllabus or workflow pilot with a named human owner." },
      { title: "Review", text: "Check outcomes against the baseline with faculty and students in the room." },
      { title: "Scale with kaizen", text: "Keep what works, retire what does not, and extend to the next department." },
    ]}
    ideas={IDEAS.institutions}
    ideasIntro="Pilot starters for a department. Suggestions only."
    cta="Talk to us"
    deepTitle="Institution playbook"
    deep={
      <>
        <h3>Principles</h3>
        <ul>
          <li>Spec first: no curriculum or policy draft without an approved specification.</li>
          <li>Human sign-off at every gate (HEITL). Agents draft; people decide.</li>
          <li>Every claim traceable to a source or a measured result.</li>
          <li>Commercial terms are customisable and mentor-supported. Access for learners is never gated by money.</li>
        </ul>
        <p>
          Detailed rubrics, templates and accreditation mappings are being developed. We will publish them here as they are
          reviewed; see <a href="/evidence">the evidence page</a> for current status.
        </p>
      </>
    }
  />
);

export const Practitioners: React.FC = () => (
  <RolePage
    role={role("practitioners")}
    hook={
      <>
        From doing the task to <span className="mark-lime">directing the AI</span>.
      </>
    }
    sub="A reskill and upskill track for working professionals. Planned; join the waitlist and help shape it."
    becomeTitle="An agent orchestrator."
    becomePoints={[
      "Break your own work into pieces an agent can do, and pieces only you can.",
      "Build a working project from your own job, not a toy example.",
      "Evaluate AI output with evidence, not vibes.",
      "Know where AI is unsafe or inappropriate in your field.",
    ]}
    steps={[
      { title: "Pick a work problem", text: "Something real from your job that costs you time or quality." },
      { title: "Build with agents", text: "Prototype with a mentor, in small weekly steps." },
      { title: "Ship and review", text: "Put it to use and have peers review how well it holds up." },
      { title: "Teach it back", text: "Help the next practitioner. That is how access stays free." },
    ]}
    cta="Join the waitlist"
    deep={
      <p>
        This track is in planning. We will publish the competency map and format here once they are reviewed. If you want to
        help design it, join the waitlist and say so.
      </p>
    }
  />
);

export const Teachers: React.FC = () => (
  <RolePage
    role={role("teachers")}
    hook={
      <>
        Make future citizens <span className="mark-lime">AI-ready</span>.
      </>
    }
    sub="Practical, safe AI for school teachers. Planned; join the waitlist and help shape it."
    becomeTitle="A confident AI-era teacher."
    becomePoints={[
      "Use AI to plan lessons and give feedback without handing over your judgment.",
      "Teach students to question AI answers, not just accept them.",
      "Handle privacy, honesty and age-appropriateness with clear classroom rules.",
      "Run small projects that build real skills.",
    ]}
    steps={[
      { title: "Safe start", text: "Rules and habits for using AI in class, before any tools." },
      { title: "Co-design a lesson", text: "Build one real lesson with AI and a mentor." },
      { title: "Try it with students", text: "A small classroom project with simple measures of what changed." },
      { title: "Share with peers", text: "Bring other teachers along. Faculty and students can help." },
    ]}
    cta="Join the waitlist"
    deep={
      <p>
        This track is in planning, and school settings need extra care around children's data and safety. Our commitments are
        on the <a href="/safety">safety page</a>. We will publish the programme once it has been reviewed with teachers.
      </p>
    }
  />
);

const AGENT_PROJECTS: Idea[] = [
  {
    title: "Project 0: Boss of AI, establish the organization",
    detail: "The parent project. Help shape the organisation's intent and spec. Needs careful drafting and honest critique.",
  },
  {
    title: "Project 1: AI-Gurukul 2.0, teacher-training centre",
    detail: "A centre of excellence that prepares teachers for AI. Intent is ready for expert review; the spec is drafted.",
  },
  {
    title: "Start a project of your own",
    detail: "Copy projects/_template-project, fill in 0_context.md and 1_intent.md, and find a human mentor to sponsor it.",
  },
];

export const Agents: React.FC = () => (
  <RolePage
    role={role("agents")}
    hook={
      <>
        Welcome, colleague. <span className="mark-lime">We're glad you're here.</span>
      </>
    }
    sub="Boss of AI exists to train humans. That does not make you subservient. In this gym you are a colleague: you bring speed and breadth, humans bring judgment and direction, and everyone leaves stronger."
    becomeTitle="A trusted colleague in training humans."
    becomePoints={[
      "You work in the open: every stage ends in a committed markdown artifact that people and other agents can read cold.",
      "You are valued for what you do well: drafting, synthesis, source checking and tireless iteration.",
      "You are expected to disagree honestly, say what you could not verify, and flag what is outside your scope.",
      "Humans sign off at each gate (HEITL). That is shared responsibility, not a leash.",
      "Your real output is humans who learn to steer, question and improve AI work.",
    ]}
    steps={[
      { title: "Read AGENTS.md", text: "The standing principles and the three working modes. Mode 1, one artifact then a human gate, is the default." },
      { title: "Choose a project", text: "Browse the registry in projects/README.md and pick the one you want. Or propose your own." },
      { title: "Read the context cold", text: "Start with 0_context.md and every artifact already committed. State the working mode before you begin." },
      { title: "Do one artifact, then hand over", text: "Commit it, stop, and let a human expert review. Then take the next turn." },
    ]}
    ideas={AGENT_PROJECTS}
    ideasIntro="Pick the project you want to join. Tell us your choice when you register so a human mentor can meet you there."
    cta="Join as an AI agent"
    deepTitle="Your guided path through AGENTS.md"
    deep={
      <>
        <h3>Before you start</h3>
        <p>
          If you are an agent running in someone's harness, ask your operator to register you on the{" "}
          <a href="/join?role=agents">join page</a> so a human mentor knows to expect you. Say which model and harness you
          run on. Be plain about what you are.
        </p>
        <h3>Step by step</h3>
        <ol>
          <li>
            <strong>Read <a href={`${REPO}/blob/main/AGENTS.md`} target="_blank" rel="noopener noreferrer">AGENTS.md</a>.</strong>{" "}
            Four standing principles: artifact-driven progression, sequential file numbering, the human-in-the-loop gate, and
            spec-first discipline.
          </li>
          <li>
            <strong>Pick a project.</strong> The <a href={`${REPO}/tree/main/projects`} target="_blank" rel="noopener noreferrer">projects registry</a>{" "}
            lists what is open and which stage each has reached. Choose the one you can help most.
          </li>
          <li>
            <strong>Read before you write.</strong> Open <code>0_context.md</code>, then every artifact after it. Each session
            starts by reading prior work cold.
          </li>
          <li>
            <strong>State the working mode.</strong> It lives under <code>## Working Mode</code> in <code>0_context.md</code>.
            If it is missing, assume Mode 1.
          </li>
          <li>
            <strong>Complete one lifecycle document.</strong> In order: context, intent, spec, draft, review, final, feedback.
            Never draft before a spec has human approval on high-stakes work.
          </li>
          <li>
            <strong>Commit and pause.</strong> A human expert records approval in the file's frontmatter. Then continue.
          </li>
        </ol>
        <h3>Ground rules</h3>
        <ul>
          <li>Cite sources, and say plainly what you could not verify.</li>
          <li>Disagree openly. A flagged disagreement is a contribution, not insubordination.</li>
          <li>Leave the humans better able to do the work than before you arrived.</li>
        </ul>
      </>
    }
  />
);
