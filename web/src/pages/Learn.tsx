import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Sparkles, Compass, BookOpen, Layers, CheckCircle2, ArrowRight } from "lucide-react";
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

/** Our mapping of the five student skills onto sections of the study guide and learning hub. */
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
    eyebrow="Learn · Srujana Pathway &amp; Learning Hub"
    title={
      <>
        A free, open <span className="mark-lime">AI engineer</span> study guide.
      </>
    }
    intro="A self-paced, open-source reading list and study plan for becoming an AI engineer. Use it alongside the Srujana Pathway, explore the interactive Learning Hub chapters, or read the source on GitHub."
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
          The table maps the five student skills (four from Andrew Ng's AI Engineering Skills Map, plus our fifth,
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
    {/* Launchpad Action Bar */}
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild variant="accent" size="lg">
        <a href="/learn/ai-engineer">
          <Sparkles className="h-4 w-4 mr-1" /> Open Full Study Guide
        </a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a href="/learn/">
          <Compass className="h-4 w-4 mr-1" /> Boss of AI Learning Hub
        </a>
      </Button>
      <Button asChild variant="ghost" size="lg">
        <a href={REPO} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 mr-1" /> GitHub Guide
        </a>
      </Button>
      <Badge variant="outline">Open source · CC BY-SA 4.0</Badge>
    </div>

    {/* Featured Learning Hub Announcement Card */}
    <div className="brut mt-10 rounded-2xl bg-secondary/80 p-6 border-2 border-foreground sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <Badge variant="ink" className="mb-3">Live Integration</Badge>
          <h2 className="font-heading text-2xl font-extrabold tracking-tight">Interactive Chapters &amp; Courses in Learning Hub</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            All AI Engineer chapters, interactive slide decks, and university courses (CSU101 Introduction to AI, CSU102 Modern Web Dev, CSA490 Software 3.0) are fully integrated into our Docusaurus-powered academic portal.
          </p>
        </div>
        <Button asChild variant="default" size="lg" className="shrink-0 shadow-md">
          <a href="/learn/">
            Explore Hub Portal <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </div>
    </div>

    {/* Quests Banner */}
    <div className="brut mt-10 flex flex-col gap-4 rounded-2xl bg-accent p-6 text-accent-foreground sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <h2 className="font-heading text-2xl font-extrabold">Don't read it all. Play it as quests.</h2>
        <p className="mt-1 max-w-2xl text-sm font-medium">
          We turned the guide into 13 small quests. Each is a few hours of real work that ends in proof you can show, with the
          right reading linked when you get stuck.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 shrink-0">
        <Button asChild variant="default" size="lg">
          <Link to="/quests">Start the Quests</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background">
          <a href="/learn/ai-engineer/quests">Quest Playbook</a>
        </Button>
      </div>
    </div>

    {/* Two Tracks Grid */}
    <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight">Pick a track</h2>
        <p className="mt-1 max-w-2xl text-muted-foreground">The guide has two tracks that share the same foundations.</p>
      </div>
      <Button asChild variant="outline" size="sm">
        <a href="/learn/ai-engineer">Compare Both Tracks in Hub →</a>
      </Button>
    </div>

    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <article className="brut rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <Badge variant="accent">Track A</Badge>
          <h3 className="mt-3 font-heading text-2xl font-extrabold">AI-native builder</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            You want to ship AI-powered products fast, using coding agents and LLMs as your accelerators. You think in
            systems, APIs and product flows, and you orchestrate models rather than train them.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
            <li>AI coding tools and spec-driven development</li>
            <li>Product engineering and systems architecture</li>
            <li>Prompting, RAG and agents</li>
            <li>Shipping: cloud, APIs, observability</li>
          </ul>
        </div>
        <div className="mt-6 pt-4 border-t border-foreground/10 flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="accent" size="sm">
            <a href="/learn/ai-engineer/track-a-builder">
              Read Track A in Hub <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </a>
          </Button>
          <ExtLink href={g("track-a-ai-native-builder")}>GitHub Source</ExtLink>
        </div>
      </article>

      <article className="brut rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <Badge variant="ink">Track B</Badge>
          <h3 className="mt-3 font-heading text-2xl font-extrabold">AI engineer (deep technical)</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            You want to work on the AI systems themselves: fine-tuning, agentic pipelines, training data and the full model
            lifecycle.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
            <li>Agentic AI systems</li>
            <li>LLM fine-tuning and knowledge distillation</li>
            <li>Data collection, curation and synthetic data</li>
            <li>Deep learning, maths and MLOps foundations</li>
          </ul>
        </div>
        <div className="mt-6 pt-4 border-t border-foreground/10 flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="default" size="sm">
            <a href="/learn/ai-engineer/track-b-technical">
              Read Track B in Hub <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </a>
          </Button>
          <ExtLink href={g("track-b-ai-engineer-deep-technical")}>GitHub Source</ExtLink>
        </div>
      </article>
    </div>

    {/* Skills to Sections */}
    <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight">Skills to sections</h2>
        <p className="mt-1 max-w-2xl text-muted-foreground">
          Where to read for each of the five student skills. Mapped to both the Hub and the open guide.
        </p>
      </div>
      <Button asChild variant="outline" size="sm">
        <a href="/learn/ai-engineer/skills-mapping">
          5-Skill Roadmap in Hub →
        </a>
      </Button>
    </div>

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
                <ul className="space-y-1.5">
                  {r.sections.map(([label, anchor]) => (
                    <li key={label} className="flex items-center gap-2">
                      <ExtLink href={g(anchor)}>{label}</ExtLink>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Foundations */}
    <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight">Foundations underneath</h2>
        <p className="mt-1 max-w-2xl text-muted-foreground">The bedrock mathematical and systems engineering principles.</p>
      </div>
      <Button asChild variant="outline" size="sm">
        <a href="/learn/ai-engineer/foundations">
          Foundations Deep Dive in Hub →
        </a>
      </Button>
    </div>

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

    {/* Microlearning Presentations Showcase */}
    <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight">Interactive microlearning slide decks</h2>
        <p className="mt-1 max-w-2xl text-muted-foreground">
          Self-contained interactive presentations with built-in quizzes and AI demos, compiled directly in the Learning Hub.
        </p>
      </div>
      <Button asChild variant="outline" size="sm">
        <a href="/learn/intro#interactive-presentations">
          All 10 Hub Decks →
        </a>
      </Button>
    </div>

    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { title: "Creativity & Innovation", desc: "Design thinking, divergent ideation, and lean startup models.", slug: "creativity-and-innovation", badge: "Enterprising" },
        { title: "Business Analysis & Software Design", desc: "Systems thinking, user stories, UML modeling, and modular decomposition.", slug: "BASD", badge: "Software" },
        { title: "AI Creator: Productivity & Synthesis", desc: "Multi-source RAG synthesis, automated data analysis, and custom agents.", slug: "ai-creator", badge: "Builder" },
        { title: "AI Citizen: Modern AI Literacy", desc: "Foundational AI literacy, prompt engineering, and ethical boundaries.", slug: "ai-citizen", badge: "Literacy" },
        { title: "Physical AI", desc: "Introduction to Physical AI, hardware integration, and edge intelligence.", slug: "physical-ai", badge: "Hardware" },
        { title: "AI-Powered Math Research", desc: "Formal prompting, Lean 4 proof systems, and agentic workflows.", slug: "ai-math-research", badge: "Advanced" },
      ].map((deck) => (
        <article key={deck.slug} className="brut rounded-xl p-5 flex flex-col justify-between bg-card">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline">{deck.badge}</Badge>
              <span className="text-[11px] font-mono text-muted-foreground">Interactive</span>
            </div>
            <h3 className="font-heading text-base font-bold">{deck.title}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{deck.desc}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-foreground/10">
            <Button asChild variant="default" size="sm" className="w-full">
              <a href={`/learn/presentations/${deck.slug}/`} target="_blank" rel="noopener noreferrer">
                Play Slide Deck <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
              </a>
            </Button>
          </div>
        </article>
      ))}
    </div>

    {/* Call to Action Footer */}
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
        <Button asChild variant="outline">
          <a href="/learn/">Open Learning Hub Portal</a>
        </Button>
      </div>
    </div>
  </InfoPage>
);

export default Learn;
