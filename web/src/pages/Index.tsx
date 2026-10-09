import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, ShieldCheck, Zap, Brain } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Orbit } from "@/components/site/Orbit";
import { PayForward, joinLink } from "@/components/site/RolePage";
import { IDEAS, ROLES } from "@/content/roles";

const Hero: React.FC = () => {
  const [sel, setSel] = useState(0);
  const role = ROLES[sel];
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground">
      <div className="container mx-auto grid items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-20">
        <div>
          <Badge variant="ink" className="mb-5">Early. Building in public.</Badge>
          <h1 className="font-heading text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
            Be the <span className="mark-lime">boss</span> of AI.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">
            AI is cheap. Judgment is not. We help students, faculty and institutions orbit-shift with AI: smartly, safely,
            efficiently.
          </p>

          <div className="mt-8">
            <p className="label-mono mb-3 text-muted-foreground">I am a…</p>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Choose your role">
              {ROLES.map((r, i) => (
                <button
                  key={r.slug}
                  role="tab"
                  aria-selected={i === sel}
                  onClick={() => setSel(i)}
                  className={`rounded-full border-2 border-foreground px-4 py-2 text-sm font-bold transition-all ${
                    i === sel
                      ? "bg-foreground text-background shadow-[3px_3px_0_0_hsl(var(--accent))]"
                      : "bg-card hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <div className="brut-sm mt-4 rounded-xl p-5" role="tabpanel" aria-live="polite">
              <p className="font-heading text-xl font-bold leading-snug">{role.promise}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button asChild variant="accent">
                  <Link to={`/${role.slug}`}>
                    See the {role.label.toLowerCase()} path <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Link to={joinLink(role)} className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-accent hover:bg-accent">
                  {role.soon ? "Join the waitlist" : "Join free"}
                </Link>
                {role.soon && <Badge variant="ember">Coming soon</Badge>}
              </div>
            </div>
          </div>
        </div>
        <Orbit className="mx-auto w-full max-w-[420px] text-foreground" />
      </div>
    </section>
  );
};

const Bet: React.FC = () => (
  <section className="container mx-auto px-4 py-16 sm:px-6">
    <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
      <p className="label-mono text-muted-foreground">The bet</p>
      <div>
        <p className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          When intelligence is cheap, what stays scarce is <span className="mark-lime">judgment, taste, ethics</span> and the
          nerve to build.
        </p>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          So we don't teach <em>about</em> AI. We make people boss of it: the human decides, the AI amplifies.
        </p>
      </div>
    </div>
  </section>
);

const HowWeLearn: React.FC = () => {
  const stages = [
    { n: "01", t: "Challenge", d: "Small, fast, public. Days.", c: "bg-card" },
    { n: "02", t: "Project", d: "Real problems, real mentors. Weeks.", c: "bg-accent text-accent-foreground" },
    { n: "03", t: "Venture", d: "Product, patent, preprint or startup. Months.", c: "bg-foreground text-background" },
  ];
  return (
    <section className="border-y-2 border-foreground bg-secondary/60 py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="label-mono text-muted-foreground">How we learn</p>
        <h2 className="mt-2 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">Projects, not lectures.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {stages.map((s) => (
            <div key={s.n} className={`brut brut-hover rounded-2xl p-6 ${s.c}`}>
              <span className="font-mono text-sm font-bold opacity-70">{s.n}</span>
              <h3 className="mt-6 font-heading text-3xl font-extrabold">{s.t}</h3>
              <p className="mt-2 text-sm font-medium opacity-80">{s.d}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {["Open-book, open-agent", "Verifiable artifacts", "Mentor support at every stage", "Human expert signs off"].map((t) => (
            <li key={t} className="rounded-full border-2 border-foreground bg-card px-3 py-1 text-sm font-semibold">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link to="/pedagogy" className="text-sm font-bold underline decoration-2 underline-offset-4 decoration-accent hover:bg-accent">
            How we teach →
          </Link>
        </div>
      </div>
    </section>
  );
};

const Roles: React.FC = () => (
  <section className="container mx-auto px-4 py-16 sm:px-6">
    <p className="label-mono text-muted-foreground">Six roles, six promises</p>
    <h2 className="mt-2 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">Find your orbit.</h2>
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {ROLES.map((r) => (
        <Link key={r.slug} to={`/${r.slug}`} className="brut brut-hover group flex flex-col rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <Badge variant="accent">{r.path}</Badge>
            {r.soon && <Badge variant="ember">Soon</Badge>}
          </div>
          <h3 className="mt-5 font-heading text-2xl font-extrabold leading-tight">
            {r.label}s become {r.become}.
          </h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.promise}</p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold">
            Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  </section>
);

const Pillars: React.FC = () => {
  const items = [
    { icon: Brain, t: "Smartly", d: "Right tool, right task. AI never replaces thinking." },
    { icon: ShieldCheck, t: "Safely", d: "Privacy, honesty, bias and cheating are in the curriculum, not a footnote." },
    { icon: Zap, t: "Efficiently", d: "Agents remove the drudgery so humans can mentor and create." },
  ];
  return (
    <section className="border-y-2 border-foreground bg-foreground py-16 text-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t}>
              <Icon className="h-8 w-8 text-accent" aria-hidden />
              <h3 className="mt-4 font-heading text-4xl font-extrabold">{t}</h3>
              <p className="mt-2 text-background/75">{d}</p>
            </div>
          ))}
        </div>
        <Link to="/safety" className="mt-8 inline-block text-sm font-bold text-accent underline decoration-2 underline-offset-4">
          Our safety commitments →
        </Link>
      </div>
    </section>
  );
};

const IdeasPreview: React.FC = () => (
  <section className="container mx-auto px-4 py-16 sm:px-6">
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="label-mono text-muted-foreground">Open invitations</p>
        <h2 className="mt-2 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">Start something.</h2>
      </div>
      <Badge variant="outline">Suggested, not yet built</Badge>
    </div>
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {IDEAS.students.slice(0, 3).map((i) => (
        <article key={i.title} className="brut-sm rounded-xl p-5">
          <h3 className="font-heading text-lg font-bold leading-tight">{i.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{i.detail}</p>
        </article>
      ))}
    </div>
    <Button asChild variant="outline" className="mt-6">
      <Link to="/ideas">All ideas for students, faculty and institutions</Link>
    </Button>
  </section>
);

const Honest: React.FC = () => (
  <section className="container mx-auto px-4 pb-4 sm:px-6">
    <div className="rounded-2xl border-2 border-dashed border-foreground p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="label-mono text-muted-foreground">Honest status</p>
          <p className="mt-1 max-w-2xl font-heading text-xl font-bold sm:text-2xl">
            We're early. No fake testimonials, no invented numbers. Here is exactly what is real today.
          </p>
        </div>
        <Button asChild variant="default">
          <Link to="/evidence">
            <Rocket className="h-4 w-4" /> See the evidence page
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export const Index: React.FC = () => (
  <Layout>
    <Hero />
    <Bet />
    <HowWeLearn />
    <Roles />
    <Pillars />
    <PayForward />
    <IdeasPreview />
    <Honest />
    <section className="container mx-auto px-4 py-16 text-center sm:px-6">
      <h2 className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl">
        Ready to <span className="mark-lime">orbit-shift</span>?
      </h2>
      <div className="mt-8">
        <Button asChild variant="accent" size="lg">
          <Link to="/join">
            Join free <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);
