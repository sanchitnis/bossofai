---
status: draft-for-review
source: intent.md
---

# bossofai.org Redesign Plan (v0.1)

## 1. Audit of current site (`web/`)
Stack is solid: Vite + React + Tailwind + Supabase auth/forms + Vercel. Keep it. Problems:

| Finding | Why it matters | Action |
|---|---|---|
| One long home page: 10 sections, dense, not role-aware | Visitor can't find "me" in 10 seconds | Role-first home + one page per role |
| `LeaderboardSection.tsx` ships **fabricated fallback data** (fake names, institutions, points, hubs) | Violates our evidence policy | Remove. Replace with "How the leaderboard will work" (no fake rows) |
| `ProjectsSection.tsx` (33 KB) and `SolutionsShowcase.tsx` present projects/solutions as if available | None is complete | Replace with `/ideas` (open invitations, labelled "suggested, not yet built") |
| Hero copy is jargon-heavy ("Dual-Engine Architecture", "Abundant Intelligence") | Not punchy | Rewrite per intent |
| Generic dark indigo/purple/cyan "AI startup" look | Indistinguishable; weak for researchers | New visual identity (below) |
| `index.html` title/meta describe an older positioning | SEO/share cards off-message | Rewrite |
| Benchmarks (iSPIRT, École 42, Minerva, MIT, CBL, Google X) | Real references, good Deep content | Move to `/pedagogy` Deep section; verify each claim and cite |

## 2. Site map

```
/                 Home: promise + "I am a..." role picker + how it works + pay-it-forward
/students         Srujana Pathway -> AI engineer / AI-era careers
/faculty          T.R.A.C.K. -> Superfaculty
/institutions     Curriculum + agent-run workflows + access to students
/practitioners    Reskill/Upskill (launch as "coming soon" + waitlist)
/teachers         Teach-the-Teachers (launch as "coming soon" + waitlist)
/ideas            Open invitations: sample topics by role (not yet built)
/framework        T.R.A.C.K. deep dive (absorbs /cascading-theory)
/pathway          Srujana stages deep dive
/pedagogy         Projects -> challenges -> ventures; benchmarks, sources
/safety           Guardrails, HEITL, honesty policy
/evidence         What is real today, what we are building (stage labels)
/leaderboard      How it will work: portfolio + peer review + expert viva
/join             Register (free), scholarship, pay-it-forward
/portal           Existing member portal (keep)
```
Launch order: Home, Students, Faculty, Institutions, Ideas, Join, Safety, Evidence. Rest as lightweight pages or "coming soon".

## 3. Page recipe (every role page)
1. **Hook** (one line + one-line subhead)
2. **What you become** (AI engineer / Superfaculty / AI-ready institution)
3. **How it works** (3-4 steps, project-based)
4. **Try this** (3-5 sample topics, labelled suggested)
5. **Pay it forward** (access, mentor support)
6. **One CTA**
7. **Go deeper** (collapsible Deep layer: frameworks, sources, citations)

**Quick / Deep toggle** on every page. Quick = about 60 seconds. Deep = footnoted, citable, for researchers.

## 4. Home page structure
1. Hero: "Be the boss of AI." + orbit-shift line + **role picker** (Student, Faculty, Institution, Practitioner, Teacher)
2. The bet (3 lines: AI makes intelligence cheap; judgment is scarce)
3. How we learn: Challenge -> Project -> Venture (animated orbit stages)
4. Five roles, five promises (cards)
5. Smartly · Safely · Efficiently (3 pillars)
6. Pay it forward (free registration + mentorship; contribution counts)
7. Open invitations preview (3 sample topics)
8. Honest status strip: "Early. Building in public. Here is what's real." -> /evidence
9. Join CTA

## 5. Design direction
**Idea:** *Orbit shift.* Concentric orbit rings are the signature motif: stages, roles and the flywheel are all orbits. Editorial-meets-arcade.

- **Type:** display grotesque with attitude (Bricolage Grotesque or Space Grotesk); serif for long-form Deep text (Newsreader or Source Serif 4); mono for labels/stage tags (JetBrains Mono, already loaded).
- **Colour:** off-white "paper" and near-black "ink" themes (light and dark both first-class) with **one electric accent** (acid lime or signal orange) plus a quiet secondary. Drop the indigo/purple/cyan gradient.
- **Layout:** big type, strong grid, generous whitespace, hard borders, sticker-style badges (stage labels). Footnotes and margin notes in Deep mode (Tufte-like).
- **Motion:** slow orbit drift, hover-reveal, role-picker morph. Respect `prefers-reduced-motion`. No autoplay noise.
- **Voice:** short, witty, direct. Example: "AI is cheap. Judgment is not."
- **Accessibility/perf:** WCAG AA, mobile-first, English only, minimal JS.

## 6. Build plan
1. Design tokens + fonts + theme (replace `index.css`, `tailwind.config.ts`)
2. Layout: new Header (role nav), Footer, Quick/Deep toggle component
3. Home + role picker
4. Students, Faculty, Institutions pages
5. Ideas, Safety, Evidence, Join (reuse Supabase forms)
6. Remove fabricated leaderboard data and unfinished project claims
7. Update `index.html` meta; `npm run build` + browser check (desktop and mobile)

## 7. Decisions needed from you
1. Accent colour: **acid lime** (recommended, fresh, Gen Z, strong on both themes) vs signal orange.
2. Default theme: **light paper** (recommended, reads as serious/editorial) vs dark.
3. OK to remove the fake leaderboard and the old Projects/Solutions sections now?
