import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { ROLES, roleBySlug } from "@/content/roles";

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
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Free to start. <span className="mark-lime">Pay it forward.</span>
          </h1>
          <ul className="mt-6 space-y-3 text-lg">
            <li><strong>Free registration</strong> for everyone.</li>
            <li><strong>Mentor support</strong> comes with it.</li>
            <li><strong>Nobody is turned away</strong> for lack of funds. Our scholarship is free registration plus mentorship.</li>
            <li>Give back with time: mentor, review, teach.</li>
          </ul>
        </div>

        <div className="brut rounded-2xl p-6 sm:p-8">
          {status === "done" ? (
            <div role="status" className="py-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12" aria-hidden />
              <h2 className="mt-4 font-heading text-3xl font-extrabold">You're on the list.</h2>
              <p className="mt-2 text-muted-foreground">We'll write to you soon at {email}.</p>
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
                <label htmlFor="j-name" className="mb-1 block text-sm font-semibold">Name</label>
                <Input id="j-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="j-email" className="mb-1 block text-sm font-semibold">Email</label>
                <Input id="j-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
              </div>
              <div>
                <label htmlFor="j-org" className="mb-1 block text-sm font-semibold">
                  School, college or organisation <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <Input id="j-org" value={org} onChange={(e) => setOrg(e.target.value)} autoComplete="organization" />
              </div>
              <div>
                <label htmlFor="j-msg" className="mb-1 block text-sm font-semibold">
                  What do you want to build or change? <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <Textarea id="j-msg" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-lg border-2 border-destructive bg-destructive/10 p-3 text-sm font-semibold text-destructive">
                  {error}
                </p>
              )}

              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : role.soon ? "Join the waitlist" : "Join free"}
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
