import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Deep } from "@/components/site/Depth";
import { PayForward, joinLink } from "@/components/site/RolePage";
import { IDEAS, roleBySlug } from "@/content/roles";

export const InfoPage: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  children: React.ReactNode;
  deepTitle?: string;
  deep?: React.ReactNode;
}> = ({ eyebrow, title, intro, children, deepTitle, deep }) => (
  <Layout>
    <section className="border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
        <Badge variant="ink">{eyebrow}</Badge>
        <h1 className="mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
      </div>
    </section>
    <div className="container mx-auto px-4 py-12 sm:px-6">{children}</div>
    {deep && <Deep title={deepTitle}>{deep}</Deep>}
  </Layout>
);

export const Cards: React.FC<{ items: { t: string; d: string }[]; cols?: string }> = ({ items, cols = "md:grid-cols-3" }) => (
  <div className={`grid gap-5 ${cols}`}>
    {items.map((i) => (
      <article key={i.t} className="brut-sm rounded-xl p-5">
        <h3 className="font-heading text-lg font-bold leading-tight">{i.t}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
      </article>
    ))}
  </div>
);

/* ---------------- Ideas ---------------- */
export const Ideas: React.FC = () => {
  const groups = [
    { key: "students", title: "Students" },
    { key: "faculty", title: "Faculty" },
    { key: "institutions", title: "Institutions" },
  ] as const;
  return (
    <InfoPage
      eyebrow="Open invitations"
      title={
        <>
          Pick one. <span className="mark-lime">Make it real.</span>
        </>
      }
      intro="Every idea here is a suggestion, not a finished project. Take one on, bend it to your context, or bring your own. A mentor comes with it."
    >
      <div className="space-y-14">
        {groups.map((g) => {
          const role = roleBySlug(g.key)!;
          return (
            <section key={g.key} aria-labelledby={`ideas-${g.key}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 id={`ideas-${g.key}`} className="font-heading text-3xl font-extrabold tracking-tight">
                  {g.title}
                </h2>
                <Badge variant="outline">Suggested, not yet built</Badge>
              </div>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {IDEAS[g.key].map((i) => (
                  <article key={i.title} className="brut-sm flex flex-col rounded-xl p-5">
                    <h3 className="font-heading text-lg font-bold leading-tight">{i.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{i.detail}</p>
                    <Link
                      to={joinLink(role, i.title)}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold underline decoration-2 underline-offset-4 decoration-accent hover:bg-accent"
                    >
                      I want to take this on <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <PayForward />
    </InfoPage>
  );
};

/* ---------------- Framework ---------------- */
export const Framework: React.FC = () => (
  <InfoPage
    eyebrow="For faculty and leaders"
    title={
      <>
        T.R.A.C.K.: five ways to become a <span className="mark-lime">Superfaculty</span>.
      </>
    }
    intro="A framework for educators and institutions in the age of cheap intelligence. Five pillars that feed each other, tuned by kaizen."
    deepTitle="T.R.A.C.K. in detail"
    deep={
      <>
        <h3>T: Teaching and learning</h3>
        <p>
          When an AI can explain any concept on demand, broadcast lecturing loses its edge. Teaching moves to inquiry-based
          co-learning: framing problems, challenging answers and judging AI output. Foundations can be learnt with an AI
          tutor, leaving class time for debate, design sprints and synthesis. Assessment becomes open-book and open-agent,
          using portfolios, viva voce and adversarial checking of AI output.
        </p>
        <h3>R: Research, innovation, consulting and ventures</h3>
        <p>
          Multi-agent literature synthesis, code generation and simulation shorten the path from question to prototype.
          Departments can act as venture studios, and teams can consult for local enterprises through agentic pipelines.
        </p>
        <h3>A: Advising and academic administration</h3>
        <p>
          Advising is the human core: helping learners find purpose, build character and ethics, and get through hard
          times. Administration (accreditation paperwork, scheduling, rubric audits, routine grading support) is what agents
          should absorb, so faculty can do more of the first.
        </p>
        <h3>C: Community transformation</h3>
        <p>
          The institution becomes a regional anchor: living labs for local problems, training for school and vocational
          teachers, and support for small enterprises and local governance.
        </p>
        <h3>K: Kaizen at three scales</h3>
        <ul>
          <li><strong>Personal:</strong> reflection, unlearning and prompt-and-workflow iteration.</li>
          <li><strong>Institutional:</strong> quarterly curriculum reviews instead of four-year cycles; a culture of safe experiments.</li>
          <li><strong>Societal:</strong> feedback loops on the ethical, social and employment effects of deployed AI.</li>
        </ul>
        <h3>Status</h3>
        <p>
          T.R.A.C.K. is our own framework. It is a proposal, not yet a validated method. We will test it in pilots and publish
          the results, including what failed. See <Link to="/evidence">the evidence page</Link>.
        </p>
      </>
    }
  >
    <Cards
      cols="md:grid-cols-2 lg:grid-cols-5"
      items={[
        { t: "T · Teaching and learning", d: "From delivering content to guiding inquiry and judging AI output." },
        { t: "R · Research and ventures", d: "From slide decks to working prototypes, spin-offs and preprints." },
        { t: "A · Advising and admin", d: "Agents take the paperwork. Humans keep the mentoring." },
        { t: "C · Community", d: "Living labs, school teacher training, local enterprises." },
        { t: "K · Kaizen", d: "Continuous improvement: personal, institutional, societal." },
      ]}
    />
    <div className="mt-10 flex flex-wrap gap-3">
      <Button asChild variant="accent">
        <Link to={joinLink(roleBySlug("faculty")!)}>Start as faculty</Link>
      </Button>
      <Button asChild variant="outline">
        <Link to={joinLink(roleBySlug("institutions")!)}>Start as an institution</Link>
      </Button>
    </div>
  </InfoPage>
);

/* ---------------- Pedagogy ---------------- */
export const Pedagogy: React.FC = () => (
  <InfoPage
    eyebrow="How we teach"
    title={
      <>
        Challenges. Projects. <span className="mark-lime">Ventures.</span>
      </>
    }
    intro="Project-based, mentor-supported and open-agent. Every outcome is a verifiable artifact you can show: a repo, a document, a live demo."
    deepTitle="Pedagogy and influences"
    deep={
      <>
        <h3>Principles</h3>
        <ul>
          <li><strong>Experiential:</strong> start from authentic, ambiguous problems.</li>
          <li><strong>Human expert in the loop (HEITL):</strong> AI is a partner and amplifier; humans hold the final judgment.</li>
          <li><strong>Human skills:</strong> critical thinking, creativity, collaboration, communication.</li>
          <li><strong>Verified outcomes:</strong> durable artifacts, public repositories and live deployments.</li>
        </ul>
        <h3>Influences</h3>
        <p>
          Our design draws on challenge-based learning, problem- and project-based learning (as at Aalborg University),
          peer-to-peer evaluation (as at École 42) and active-learning seminars (as at Minerva). These are influences,
          not endorsements. <em>Citations for each are pending and will be added before we make any claims that depend on them.</em>
        </p>
      </>
    }
  >
    <Cards
      items={[
        { t: "1 · Micro-challenges", d: "Small, fast, public wins in days. Spot a problem, prototype with AI, show your work." },
        { t: "2 · Challenge projects", d: "Real problems from industry, community and research, over weeks, with a team and a mentor." },
        { t: "3 · Ventures", d: "The best become products, patents, preprints or startups, over months. Terms are customisable per venture." },
      ]}
    />
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      <div className="brut rounded-2xl p-6">
        <h2 className="font-heading text-2xl font-extrabold">The rules of the game</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          <li>Learn by doing.</li>
          <li>Open-book, open-agent.</li>
          <li>Every outcome is a verifiable artifact.</li>
          <li>Mentor support at every stage.</li>
          <li>A human expert signs off.</li>
        </ul>
      </div>
      <div className="brut rounded-2xl bg-accent p-6 text-accent-foreground">
        <h2 className="font-heading text-2xl font-extrabold">Customisable</h2>
        <p className="mt-2 text-sm font-medium">
          Pathways bend to your role, pace, discipline and goal. Your mentor helps you tune them.
        </p>
      </div>
    </div>
  </InfoPage>
);

/* ---------------- Safety ---------------- */
export const Safety: React.FC = () => (
  <InfoPage
    eyebrow="Safely"
    title={
      <>
        Guardrails are part of the <span className="mark-lime">curriculum</span>.
      </>
    }
    intro="These are our commitments. As each one is put into practice we will say how, and show how we check it."
    deepTitle="How we will hold ourselves to this"
    deep={
      <>
        <p>
          Commitments are only worth something if they can be checked. For each one we intend to publish the practice, the
          owner and the check on the <Link to="/evidence">evidence page</Link>. Where something is not yet in place, it will be
          marked as planned rather than implied.
        </p>
        <p>
          Programmes that involve children (the school-teacher track) will get a separate review before launch, covering
          data handling, consent and age-appropriate use.
        </p>
      </>
    }
  >
    <Cards
      items={[
        { t: "Human decides", d: "A human expert signs off on anything published or acted upon. Agents draft; people decide." },
        { t: "Honesty", d: "No invented data, citations, testimonials or metrics. We say when AI helped and when we are unsure." },
        { t: "Privacy", d: "Collect the minimum. Never put personal data into tools without a clear reason and consent." },
        { t: "Integrity", d: "Open-agent work is assessed on process and understanding, with vivas and peer review, not just output." },
        { t: "Verification", d: "AI output is checked against sources and tests before it is trusted." },
        { t: "Agent limits", d: "Agents get the least access they need. No touching production data or irreversible actions without a human gate." },
      ]}
    />
  </InfoPage>
);

/* ---------------- Evidence ---------------- */
export const Evidence: React.FC = () => {
  const rows = [
    { what: "Intent and positioning", stage: "Documented", note: "Written down in the project repository." },
    { what: "T.R.A.C.K. framework", stage: "Idea", note: "A proposal. Not yet tested in a pilot." },
    { what: "Srujana Pathway", stage: "Idea", note: "Stages defined. No cohort has completed it." },
    { what: "AI engineer study guide", stage: "Available", note: "Open-source reading plan on GitHub. Not yet tested with learners." },
    { what: "Student quests", stage: "Prototype", note: "13 self-paced quests, written but not yet tried by learners. Progress is saved in the browser only." },
    { what: "Toolkit", stage: "Available", note: "Curated links to prompts, assistants, apps, courses and reports. Curated by people, not audited." },
    { what: "Student and faculty projects", stage: "None completed", note: "Open invitations only. None are built." },
    { what: "Leaderboard", stage: "Planned", note: "No rankings exist. See how it will work." },
    { what: "Outcomes, testimonials, partners", stage: "None yet", note: "We will list them here only when verified." },
  ];
  return (
    <InfoPage
      eyebrow="Evidence"
      title={
        <>
          What is real today. <span className="mark-lime">Exactly.</span>
        </>
      }
      intro="We're early. This page is our promise not to dress that up. Each item carries a stage label, and every number we ever publish will link to its method."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {["Idea", "Prototype", "Pilot", "Proven"].map((s) => (
          <Badge key={s} variant="outline">{s}</Badge>
        ))}
        <span className="self-center text-sm text-muted-foreground">: the stage labels we will use as work lands.</span>
      </div>
      <div className="brut overflow-x-auto rounded-2xl">
        <table className="w-full min-w-[560px] text-left text-sm">
          <caption className="sr-only">Current status of Boss of AI programmes</caption>
          <thead>
            <tr className="border-b-2 border-foreground bg-secondary">
              <th scope="col" className="p-4 font-mono text-xs uppercase tracking-wider">What</th>
              <th scope="col" className="p-4 font-mono text-xs uppercase tracking-wider">Stage</th>
              <th scope="col" className="p-4 font-mono text-xs uppercase tracking-wider">Note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.what} className="border-b border-foreground/20 last:border-0">
                <th scope="row" className="p-4 font-semibold">{r.what}</th>
                <td className="p-4"><Badge variant="outline">{r.stage}</Badge></td>
                <td className="p-4 text-muted-foreground">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
        If you spot a claim on this site that this page does not support, tell us at{" "}
        <a className="font-semibold underline" href="mailto:info@bossofai.org">info@bossofai.org</a>.
      </p>
    </InfoPage>
  );
};

/* ---------------- Leaderboard ---------------- */
export const Leaderboard: React.FC = () => (
  <InfoPage
    eyebrow="Coming soon"
    title={
      <>
        A leaderboard you can't <span className="mark-lime">game</span>.
      </>
    }
    intro="There are no rankings yet, and we won't show any until real work earns them. Here is how it will work."
    deepTitle="Design notes and open decisions"
    deep={
      <>
        <p>
          Ranking by peer review and an expert-team viva avoids rewarding clicks or quiz scores. The hard parts are
          undecided: viva panel composition, conflict-of-interest rules and protection against gaming peer review. We will
          decide these with mentors and publish the rules before any ranking goes live.
        </p>
      </>
    }
  >
    <Cards
      items={[
        { t: "1 · Public portfolio", d: "Your repos, documents and live demos, visible to anyone." },
        { t: "2 · Open-source contributions", d: "Work you give back counts, including mentoring, reviewing and teaching." },
        { t: "3 · Peer review + expert viva", d: "Rank comes from people who read your work and an expert panel that questions you about it." },
      ]}
    />
    <div className="mt-10">
      <Button asChild variant="accent">
        <Link to="/join">Join free and start your portfolio</Link>
      </Button>
    </div>
  </InfoPage>
);
