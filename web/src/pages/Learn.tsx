import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InfoPage, Cards } from "@/pages/Info";
import { joinLink } from "@/components/site/RolePage";
import { roleBySlug } from "@/content/roles";

const REPO = "https://github.com/sanchitnis/learn-ai-engineering";
const g = (anchor: string) => `${REPO}#${anchor}`;

const ExtLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 font-semibold underline decoration-2 underline-offset-4 decoration-accent hover:bg-accent hover:text-accent-foreground"
  >
    {children} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
  </a>
);

/** Our own mapping of the five student skills onto sections of the open study guide. */
const skillMap = [
  {
    skill: "Build and deploy AI apps",
    sections: [
      ["Orchestrating AI: prompting, RAG and agents", "orchestrating-ai-prompting-rag--agents-for-builders"],
      ["Agentic AI systems", "agentic-ai-systems"],
      ["LLM evaluation", "llm-evaluation"],
    ],
  },
  {
    skill: "Software engineering fundamentals",
    sections: [
      ["System thinking and software architecture", "system-thinking--software-architecture"],
      ["AI-native SDLC and spec-driven development", "ai-native-sdlc--spec-driven-development"],
      ["Data structures", "data-structures"],
    ],
  },
  {
    skill: "Work with coding agents",
    sections: [
      ["AI coding tools and vibe-coding workflows", "ai-coding-tools--vibe-coding-workflows"],
      ["Spec-driven development", "ai-native-sdlc--spec-driven-development"],
    ],
  },
  {
    skill: "Shape the build",
    sections: [
      ["Product engineering with AI", "product-engineering-with-ai"],
      ["Building and showcasing your portfolio", "work-environment--portfolio-building"],
    ],
  },
  {
    skill: "Judgment and responsibility",
    sections: [["Core human life skills for the AI era (incl. ethics)", "core-human-life-skills-for-the-ai-era"]],
  },
];

export const Learn: React.FC = () => (
  <InfoPage
    eyebrow="Learn · for students"
    title={
      <>
        A free, open <span className="mark-lime">AI engineer</span> study guide.
      </>
    }
    intro="A self-paced, open-source reading list and study plan for becoming an AI engineer. Use it alongside the Srujana Pathway, or on its own. It lives on GitHub, so you can read it, fork it and improve it."
    deepTitle="How the guide fits our pathway"
    deep={
      <>
        <h3>Where it comes from</h3>
        <p>
          The guide is adapted from John Washam's{" "}
          <a href="https://github.com/jwasham/coding-interview-university" target="_blank" rel="noopener noreferrer">
            Coding Interview University
          </a>
          , reworked for AI engineering. Like the original, it is released under{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
            CC BY-SA 4.0
          </a>
          : you may share and adapt it with credit, under the same licence. Any content we reuse on this site keeps that
          licence and attribution.
        </p>
        <h3>The skill mapping is ours</h3>
        <p>
          The table above maps the five student skills (four from Andrew Ng's AI Engineering Skills Map, plus our fifth,
          judgment and responsibility) onto sections of the guide. That mapping is our judgment, made for this site. The
          guide itself does not claim to follow Ng's map, and we have not tested whether finishing these sections produces
          the skills.
        </p>
        <h3>What it is not</h3>
        <ul>
          <li>It is a reading and practice plan, not a course with mentors or assessment. The mentors, projects and expert review come from the pathway.</li>
          <li>It leans toward career preparation, including interviews. The pathway cares more about shipped, verifiable work.</li>
          <li>Links point to third-party resources that can move or change. Tell us when one breaks.</li>
        </ul>
      </>
    }
  >
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild variant="accent" size="lg">
        <a href={REPO} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" /> Open the guide on GitHub
        </a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a href={`${REPO}/blob/main/AI-building-resources.md`} target="_blank" rel="noopener noreferrer">
          Curated resource list
        </a>
      </Button>
      <Badge variant="outline">Open source · CC BY-SA 4.0</Badge>
    </div>

    <div className="brut mt-10 flex flex-col gap-4 rounded-2xl bg-accent p-6 text-accent-foreground sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <h2 className="font-heading text-2xl font-extrabold">Don't read it all. Play it as quests.</h2>
        <p className="mt-1 max-w-2xl text-sm font-medium">
          We turned the guide into 13 small quests. Each is a few hours of real work that ends in proof you can show, with the
          right reading linked when you get stuck.
        </p>
      </div>
      <Button asChild variant="default" size="lg" className="shrink-0">
        <Link to="/quests">Start the quests</Link>
      </Button>
    </div>

    <h2 className="mt-14 font-heading text-3xl font-extrabold tracking-tight">Pick a track</h2>
    <p className="mt-2 max-w-2xl text-muted-foreground">The guide has two tracks that share the same foundations.</p>
    <div className="mt-6 grid gap-5 md:grid-cols-2">
      <article className="brut rounded-2xl p-6">
        <Badge variant="accent">Track A</Badge>
        <h3 className="mt-3 font-heading text-2xl font-extrabold">AI-native builder</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          You want to ship AI-powered products fast, using coding agents and LLMs as your accelerators. You think in
          systems, APIs and product flows, and you orchestrate models rather than train them.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          <li>AI coding tools and spec-driven development</li>
          <li>Product engineering and systems architecture</li>
          <li>Prompting, RAG and agents</li>
          <li>Shipping: cloud, APIs, observability</li>
        </ul>
        <p className="mt-4"><ExtLink href={g("track-a-ai-native-builder")}>Start Track A</ExtLink></p>
      </article>
      <article className="brut rounded-2xl p-6">
        <Badge variant="ink">Track B</Badge>
        <h3 className="mt-3 font-heading text-2xl font-extrabold">AI engineer (deep technical)</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          You want to work on the AI systems themselves: fine-tuning, agentic pipelines, training data and the full model
          lifecycle.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          <li>Agentic AI systems</li>
          <li>LLM fine-tuning and knowledge distillation</li>
          <li>Data collection, curation and synthetic data</li>
          <li>Deep learning, maths and MLOps foundations</li>
        </ul>
        <p className="mt-4"><ExtLink href={g("track-b-ai-engineer-deep-technical")}>Start Track B</ExtLink></p>
      </article>
    </div>

    <h2 className="mt-14 font-heading text-3xl font-extrabold tracking-tight">Skills to sections</h2>
    <p className="mt-2 max-w-2xl text-muted-foreground">
      Where to read for each of the five student skills. This mapping is ours.
    </p>
    <div className="brut mt-6 overflow-x-auto rounded-2xl">
      <table className="w-full min-w-[560px] text-left text-sm">
        <caption className="sr-only">Student skills mapped to sections of the study guide</caption>
        <thead>
          <tr className="border-b-2 border-foreground bg-secondary">
            <th scope="col" className="p-4 font-mono text-xs uppercase tracking-wider">Skill</th>
            <th scope="col" className="p-4 font-mono text-xs uppercase tracking-wider">Read in the guide</th>
          </tr>
        </thead>
        <tbody>
          {skillMap.map((r) => (
            <tr key={r.skill} className="border-b border-foreground/20 align-top last:border-0">
              <th scope="row" className="p-4 font-semibold">{r.skill}</th>
              <td className="p-4">
                <ul className="space-y-1">
                  {r.sections.map(([label, anchor]) => (
                    <li key={label}><ExtLink href={g(anchor)}>{label}</ExtLink></li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="mt-14 font-heading text-3xl font-extrabold tracking-tight">Foundations underneath</h2>
    <div className="mt-6">
      <Cards
        items={[
          { t: "Mathematics for AI", d: "Linear algebra, calculus and optimisation, probability, and information theory." },
          { t: "Machine learning and deep learning", d: "Supervised and unsupervised learning, evaluation, neural networks and transformers." },
          { t: "LLMs and generative AI", d: "Architecture, fine-tuning, prompting, RAG, agents and evaluation." },
          { t: "MLOps and cloud", d: "Pipelines, experiment tracking, serving, monitoring, vector databases and cloud basics." },
          { t: "Getting the job", d: "Portfolio, resume, interview process and what to do once you are in." },
          { t: "deeplearning.ai learning path", d: "A suggested order through DeepLearning.AI courses, from foundations to deployment." },
        ]}
      />
    </div>

    <div className="mt-12 brut rounded-2xl bg-accent p-6 text-accent-foreground sm:p-8">
      <h2 className="font-heading text-2xl font-extrabold">Learning alone is slow. Build with others.</h2>
      <p className="mt-1 max-w-2xl text-sm font-medium">
        The guide tells you what to read. The pathway gives you a mentor, a real project and a review that tries to break it.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button asChild variant="default">
          <Link to={joinLink(roleBySlug("students")!)}>Join the pathway free</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/students">See the student path</Link>
        </Button>
      </div>
    </div>
  </InfoPage>
);
