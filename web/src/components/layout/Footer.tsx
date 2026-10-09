import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_COMMUNITY_URL } from "@/content/community";

const cols = [
  {
    title: "Roles",
    links: [
      ["Students", "/students"],
      ["Faculty", "/faculty"],
      ["Institutions", "/institutions"],
      ["Practitioners", "/practitioners"],
      ["School teachers", "/teachers"],
      ["AI agents", "/agents"],
    ],
  },
  {
    title: "Learn more",
    links: [
      ["Quests", "/quests"],
      ["Toolkit", "/toolkit"],
      ["AI Hub", "/aihub/"],
      ["Study guide", "/learn"],
      ["Open ideas", "/ideas"],
      ["T.R.A.C.K. framework", "/framework"],
      ["How we teach", "/pedagogy"],
      ["Leaderboard", "/leaderboard"],
    ],
  },
  {
    title: "Trust",
    links: [
      ["Safety", "/safety"],
      ["Evidence", "/evidence"],
      ["Join free", "/join"],
    ],
  },
] as const;

export const Footer: React.FC = () => (
  <footer className="border-t-2 border-foreground bg-foreground text-background">
    <div className="container mx-auto py-14">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="font-heading text-3xl font-extrabold leading-tight tracking-tight">
            AI is cheap.
            <br />
            <span className="text-accent">Judgment is not.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-background/70">
            Boss of AI helps people and institutions orbit-shift with AI: smartly, safely, efficiently, and for their community.
          </p>
          <a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md border-2 border-accent bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Join our WhatsApp community
          </a>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/sanchitnis/bossofai" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md border-2 border-background/40 p-2 hover:bg-accent hover:text-accent-foreground">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/sanjaychitnis/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border-2 border-background/40 p-2 hover:bg-accent hover:text-accent-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:info@bossofai.org" aria-label="Email info@bossofai.org" className="rounded-md border-2 border-background/40 p-2 hover:bg-accent hover:text-accent-foreground">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="label-mono mb-3 text-background/60">{c.title}</p>
            <ul className="space-y-2 text-sm font-medium">
              {c.links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-12 border-t border-background/20 pt-6 font-mono text-xs text-background/60">
        bossofai.org · Early and building in public · info@bossofai.org
      </p>
    </div>
  </footer>
);
