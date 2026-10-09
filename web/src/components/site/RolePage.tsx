import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Orbit } from "@/components/site/Orbit";
import { Deep } from "@/components/site/Depth";
import type { Idea, RoleInfo } from "@/content/roles";

export const joinLink = (role: RoleInfo, idea?: string) =>
  `/join?role=${role.slug}${idea ? `&idea=${encodeURIComponent(idea)}` : ""}`;

export const PayForward: React.FC = () => (
  <section className="container mx-auto px-4 sm:px-6 py-10">
    <div className="brut flex flex-col gap-4 rounded-2xl bg-accent p-6 text-accent-foreground sm:flex-row sm:items-center sm:p-8">
      <Heart className="h-8 w-8 shrink-0" aria-hidden />
      <div>
        <h2 className="font-heading text-2xl font-extrabold tracking-tight">Free to start. Pay it forward.</h2>
        <p className="mt-1 max-w-3xl text-sm font-medium sm:text-base">
          Registration is free and mentor support comes with it. Nobody is turned away for lack of funds. Give back with your
          time: mentor a peer, review a project, teach a school.
        </p>
      </div>
    </div>
  </section>
);

interface Props {
  role: RoleInfo;
  hook: React.ReactNode;
  sub: string;
  becomeTitle: string;
  becomePoints: string[];
  steps: { title: string; text: string }[];
  ideas?: Idea[];
  ideasIntro?: string;
  cta: string;
  deepTitle?: string;
  deep: React.ReactNode;
}

export const RolePage: React.FC<Props> = ({
  role,
  hook,
  sub,
  becomeTitle,
  becomePoints,
  steps,
  ideas,
  ideasIntro,
  cta,
  deepTitle,
  deep,
}) => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden border-b-2 border-foreground">
      <div className="container mx-auto grid items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-20">
        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            <Badge variant="ink">For: {role.label}</Badge>
            <Badge variant="accent">{role.path}</Badge>
            {role.soon && <Badge variant="ember">Coming soon</Badge>}
          </div>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">{hook}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <Link to={joinLink(role)}>
                {role.soon ? "Join the waitlist" : cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/ideas">See open ideas</Link>
            </Button>
          </div>
        </div>
        <Orbit className="mx-auto w-full max-w-[360px] text-foreground" />
      </div>
    </section>

    {/* What you become */}
    <section className="container mx-auto px-4 py-14 sm:px-6">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="label-mono text-muted-foreground">What you become</p>
          <h2 className="mt-2 font-heading text-4xl font-extrabold tracking-tight">{becomeTitle}</h2>
        </div>
        <ul className="brut space-y-3 rounded-2xl p-6">
          {becomePoints.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-foreground bg-accent" aria-hidden />
              <span className="font-medium">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* How it works */}
    <section className="border-y-2 border-foreground bg-secondary/60 py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="label-mono text-muted-foreground">How it works</p>
        <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">Projects, not lectures.</h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="brut brut-hover rounded-xl p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-foreground bg-accent font-mono text-sm font-bold text-accent-foreground">
                {i + 1}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold leading-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Try this */}
    {ideas && (
      <section className="container mx-auto px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="label-mono text-muted-foreground">Try this</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">Open invitations</h2>
          </div>
          <Badge variant="outline">Suggested, not yet built</Badge>
        </div>
        {ideasIntro && <p className="mt-3 max-w-2xl text-muted-foreground">{ideasIntro}</p>}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <article key={idea.title} className="brut-sm flex flex-col rounded-xl p-5">
              <h3 className="font-heading text-lg font-bold leading-tight">{idea.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{idea.detail}</p>
              <Link
                to={joinLink(role, idea.title)}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold underline decoration-2 underline-offset-4 decoration-accent hover:bg-accent"
              >
                I want to take this on <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    )}

    <PayForward />

    <Deep title={deepTitle}>{deep}</Deep>

    {/* CTA */}
    <section className="container mx-auto px-4 pb-16 pt-6 text-center sm:px-6">
      <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl">Ready to orbit-shift?</h2>
      <div className="mt-6">
        <Button asChild variant="accent" size="lg">
          <Link to={joinLink(role)}>
            {role.soon ? "Join the waitlist" : cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);
