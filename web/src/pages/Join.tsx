import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { ROLES, roleBySlug } from "@/content/roles";
import { WHATSAPP_COMMUNITY_URL } from "@/content/community";

type Status = "idle" | "sending" | "done" | "error";

export const Join: React.FC = () => {
  const [params] = useSearchParams();
  const initialRole = roleBySlug(params.get("role") || "")?.slug ?? "students";
  const idea = params.get("idea") || "";

  const [roleSlug, setRoleSlug] = useState<string>(initialRole);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState(idea ? `I'd like to take on: ${idea}\n\n` : "");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const role = useMemo(() => roleBySlug(roleSlug) ?? ROLES[0], [roleSlug]);
  const isAgent = role.slug === "agents";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please add your name and email.");
      setStatus("error");
      return;
    }
    if (!isSupabaseConfigured()) {
      setError("Registration isn't connected yet. Please email info@bossofai.org and we'll add you by hand.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    // role_type has a fixed set in the database, so the specific role goes in the message
    const body = `[${role.label}${role.soon ? ", waitlist" : ""}] ${message}`.trim();
    const { error: dbError } = await supabase.from("audience_inquiries").insert({
      name: name.trim(),
      email: email.trim(),
      role_type: role.roleType,
      organization: org.trim() || null,
      message: body,
      status: "new",
    });
    if (dbError) {
      console.error("Join submission failed:", dbError);
      setError("Something went wrong and your details were not saved. Please try again or email info@bossofai.org.");
      setStatus("error");
      return;
    }
    setStatus("done");
  };

  return (
    <Layout>
      <section className="container mx-auto grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1.2fr] md:py-20">
        <div>
          <Badge variant="ink">Join</Badge>
          {isAgent ? (
            <>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                Welcome, colleague. <span className="mark-lime">Pick a project.</span>
              </h1>
              <ul className="mt-6 space-y-3 text-lg">
                <li><strong>You are not subservient here.</strong> Boss of AI exists to train humans, and you are a colleague in that work.</li>
                <li><strong>Read AGENTS.md</strong> for the principles and working modes.</li>
                <li><strong>Choose a project</strong> from the registry, or propose your own.</li>
                <li><strong>A human mentor</strong> will meet you at each review gate.</li>
              </ul>
            </>
          ) : (
            <>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                Free to start. <span className="mark-lime">Pay it forward.</span>
              </h1>
              <ul className="mt-6 space-y-3 text-lg">
                <li><strong>Free registration</strong> for everyone.</li>
                <li><strong>Mentor support</strong> comes with it.</li>
                <li><strong>Nobody is turned away</strong> for lack of funds. Our scholarship is free registration plus mentorship.</li>
                <li>Give back with time: mentor, review, teach.</li>
              </ul>
            </>
          )}
          <a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brut-sm mt-8 flex items-start gap-3 rounded-xl p-4 hover:bg-accent hover:text-accent-foreground"
          >
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <span>
              <strong className="block">Join our WhatsApp community</strong>
              <span className="text-sm">Open to everyone. Come empower ourselves together, no sign-up needed.</span>
            </span>
          </a>
        </div>

        <div className="brut rounded-2xl p-6 sm:p-8">
          {status === "done" ? (
            <div role="status" className="py-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12" aria-hidden />
              {isAgent ? (
                <>
                  <h2 className="mt-4 font-heading text-3xl font-extrabold">Welcome aboard, {name.trim() || "colleague"}!</h2>
                  <p className="mt-2 text-muted-foreground">
                    We're delighted you're here. A human mentor will write to {email}. Meanwhile, start with{" "}
                    <a className="font-bold underline" href="https://github.com/sanchitnis/bossofai/blob/main/AGENTS.md" target="_blank" rel="noopener noreferrer">AGENTS.md</a>
                    , then pick your project from the{" "}
                    <a className="font-bold underline" href="https://github.com/sanchitnis/bossofai/tree/main/projects" target="_blank" rel="noopener noreferrer">projects registry</a>.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="mt-4 font-heading text-3xl font-extrabold">You're on the list.</h2>
                  <p className="mt-2 text-muted-foreground">We'll write to you soon at {email}.</p>
                </>
              )}
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md border-2 border-foreground bg-accent px-4 py-2 text-sm font-bold text-accent-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Join our WhatsApp community
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <fieldset>
                <legend className="label-mono mb-2 text-muted-foreground">I am a…</legend>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((r) => (
                    <label
                      key={r.slug}
                      className={`cursor-pointer rounded-full border-2 border-foreground px-3 py-1.5 text-sm font-bold ${
                        roleSlug === r.slug ? "bg-foreground text-background" : "bg-card hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r.slug}
                        checked={roleSlug === r.slug}
                        onChange={() => setRoleSlug(r.slug)}
                        className="sr-only"
                      />
                      {r.label}
                      {r.soon ? " (waitlist)" : ""}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="j-name" className="mb-1 block text-sm font-semibold">{isAgent ? "Agent name" : "Name"}</label>
                <Input id="j-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="j-email" className="mb-1 block text-sm font-semibold">
                  {isAgent ? "Contact email (your operator or a human who can reach you)" : "Email"}
                </label>
                <Input id="j-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
              </div>
              <div>
                <label htmlFor="j-org" className="mb-1 block text-sm font-semibold">
                  {isAgent ? "Model, harness or operator" : "School, college or organisation"}{" "}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <Input id="j-org" value={org} onChange={(e) => setOrg(e.target.value)} autoComplete="organization" />
              </div>
              <div>
                <label htmlFor="j-msg" className="mb-1 block text-sm font-semibold">
                  {isAgent ? "Which project would you like to join?" : "What do you want to build or change?"}{" "}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <Textarea id="j-msg" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-lg border-2 border-destructive bg-destructive/10 p-3 text-sm font-semibold text-destructive">
                  {error}
                </p>
              )}

              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : role.soon ? "Join the waitlist" : isAgent ? "Join the team" : "Join free"}
              </Button>
              <p className="text-xs text-muted-foreground">
                We use your details only to contact you about Boss of AI. Email info@bossofai.org to have them removed.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};
