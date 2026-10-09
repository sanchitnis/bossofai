import React from "react";
import { RolePage } from "@/components/site/RolePage";
import { IDEAS, roleBySlug } from "@/content/roles";

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
    sub="The Srujana Pathway takes you from AI consumer to AI engineer through real projects, real mentors and proof you can show anyone."
    becomeTitle="An AI engineer, or someone ready for an AI-era career."
    becomePoints={[
      "Build and deploy AI apps, and measure whether they actually work (evals, error analysis).",
      "Write clear specs and steer coding agents without letting them break things.",
      "Know software fundamentals well enough to judge what the agent hands back.",
      "Shape what gets built: product sense, users, when to ship fast and when to slow down.",
      "Carry the judgment: safety, ethics and honesty. The human signs off.",
    ]}
    steps={[
      { title: "Micro-challenges", text: "Small, fast, public wins. Spot a problem, build a prototype with AI, show your work." },
      { title: "Challenge projects", text: "Real problems from community, industry and research. Work in a team with a mentor." },
      { title: "Research and IP", text: "Take the best work deeper. Face an expert jury that tries to break it. Write it up." },
      { title: "Ventures and careers", text: "Spin it out as a venture, or use your verified portfolio to land the role you want." },
    ]}
    ideas={IDEAS.students}
    ideasIntro="These are starting points we made up, not finished projects. Pick one, bend it, or bring your own."
    cta="Start free"
    deepTitle="Student pathway"
    deep={
      <>
        <h3>What "AI engineer" means here</h3>
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
        <h3>The four stages</h3>
        <ul>
          <li><strong>Stage 1, foundations:</strong> micro-challenges and sprints that prove you can work with AI.</li>
          <li><strong>Stage 2, practical exposure:</strong> cross-functional teams with mentors on real problems.</li>
          <li><strong>Stage 3, research and IP:</strong> an expert jury red-teams your work; you aim for a preprint or filing.</li>
          <li><strong>Stage 4, incubation:</strong> venture, licence, or a portfolio that opens doors.</li>
        </ul>
        <h3>Recognition</h3>
        <p>
          A public portfolio, open-source contributions, and (later) a leaderboard ranked by peer review and an expert-team
          viva. Not clicks. Not quiz scores. See <a href="/leaderboard">how it will work</a>.
        </p>
        <h3>Start learning today</h3>
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
  />
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
