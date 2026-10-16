# Project Context: PROdiGYM, the Brain Gym (bossofai.org/prodigym)

> **Cold-Open Context Note**: Standing project facts, constraints, and decisions. Any agent or human must be able to read this file cold before starting work. Keep it true: update it when reality changes.

---

## Working Mode

**Mode:** 1 (Sequential Human-Gated). Complete one lifecycle artifact at a time and stop at the human gate. By Sanjay's explicit instruction on 2026-10-16, `0_context.md`, `1_intent.md` and `2_spec.md` are drafted together, then **paused for Sanjay's review of the spec**. No `3_draft.md` (build) work starts until `2_spec.md` carries `status: approved` set by a human.

**Stakes level for verification** (see [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md) §4):
- `1_intent.md` and `2_spec.md`: **Light**.
- Stage 4 on the built product: **Heavy**, because the product serves minors, collects psychometric and reflective data, and calls an AI model.

---

## 1. Institutional Background
- **Lead author / working group:** Sanjay (founder). Drafted with an AI agent (Claude).
- **Sponsoring domain:** Education × Human-skills development × AI-assisted practice.
- **Human gate (who approves):** Sanjay alone today. That is a single-gate governance risk (same as flagged for Projects 0 and 1). Before Stage 4, add at minimum: (a) a psychologist or psychometrician for the assessments, (b) a qualified child-safeguarding and data-protection adviser, (c) one school or college practitioner who is not a co-author. Names are not recorded in the repo yet.
- **Related projects / parent:** Parent is [`project0bossofai`](../project0bossofai/). Sibling: [`project1aigurukul`](../project1aigurukul/) (teacher training; its teachers are a natural practitioner audience).
- **Product home:** a section of the existing site, `bossofai.org/prodigym`, inside the existing `web/` app. A separate subdomain is possible later (decision D3).

## 2. Current State (what actually exists today)
- **Concept (2026-10-16):** the founder's verbal brief: a brain gym that develops habits and human-centric skills for school students, college students and working professionals, with psychometric baselines, daily practice, AI that challenges, and learner and practitioner analytics. Earlier chat drafts `context.md` and `intent.md` (generic, not in this repo's format) are **superseded by these files**.
- **Repo and stack (verified by reading the repo, 2026-10-16):** `web/` is a **Vite + React 18 + TypeScript + Tailwind + Radix UI** single-page app with `react-router-dom`, `@tanstack/react-query` and `@supabase/supabase-js`. Deployed on **Vercel** (`vercel.json` builds `web/`, `aihub/` and `learning-hub/`). Supabase schema is in `supabase/schema.sql` (tables: `users`, `audience_inquiries`, `broadcast_subscribers`, `projects`, `leaderboard_entries`, `hub_nodes`). Auth is via `AuthContext.tsx`. There is **no server-side API folder today**, so any Claude call needs a new server-side function (see `2_spec.md` §5). The earlier chat draft guessed Next.js; that was wrong.
- **Pedagogy sources in this repo:** six wiki pages in [`wiki/learning_pedagogies/`](../../wiki/learning_pedagogies/): Minerva (HCs), École 42 peer learning, Kolb, Knowles andragogy/heutagogy, Aalborg and Gold Standard PBL, Challenge-Based Learning. Alpha, Acton, Khan Lab, Nai Talim and Santiniketan were surveyed earlier (see Project 1's claim C-109) but **have no wiki pages**, so they are not used as design sources here until a page exists.
- **Naming history:** the repo earlier used the name `prodigym` for the site; older wiki pages say "Project PRODIGY" and "HEITL Talent Pipeline" (see Glossary).

## 3. Standing Decisions & Assumptions
Decisions made by a human go in [`decisions.md`](./decisions.md). Standing ones, as stated by Sanjay on 2026-10-16:
- **Brand:** **PROdiGYM** is the product, at `bossofai.org/prodigym`. **Prakamya** is the guiding philosophy (see Glossary), not the product name. The word "Gym" stays in the name. "Brain Gym" as a name is **rejected** (existing trademarked programme with contested claims; claim C-009, unverified, to be checked before any final naming).
- **Tagline (draft):** "Everyone can be a prodigy, with AI and practice."
- **Build first, then seek feedback.** The team is **not** being asked for input on the idea now. A complete solution is built from the spec, then shared for feedback (recorded here so a later agent does not send the early-feedback WhatsApp draft).
- **Minerva is the reference model** for the skill taxonomy (the "150-160 skills, 5 courses" in the founder's recollection did not match Minerva's published figures; see C-001 to C-003 and Q1).
- Assumptions that, if wrong, change the plan:
  - A1: Daily practice of 5 to 15 minutes is enough to change measurable habits within 8 weeks. **Unverified**; it is hypothesis H2.
  - A2: Self-report baselines can be made useful for development (not diagnosis) if framed and interpreted carefully.
  - A3: Claude API access and a per-learner cost cap are available (budget not recorded; D6).

## 4. Glossary and naming
One canonical name per thing.
- **PROdiGYM** (canonical): the brain-gym product. Backronym (Sanjay's): "Pipeline for Research Oriented Development using Intelligence of Global Youth for Mankind". Legacy spellings: PRODIGY (older wiki pages), `prodigym` (earlier repo name for the site).
- **Prakamya:** one of the *ashta siddhis*; classically, irresistible will or fulfilment of desire. As **our philosophy** it is extended to mean the discernment to decide *what is worth wanting*, for the good of society and all beings (*sarve bhavantu sukhinah*). Always say this extended meaning when the word is used with the public, to avoid the "get anything you want" misreading.
- **HEITL:** Human Expert In The Loop. The umbrella talent framework (see [`wiki/learning_pedagogies/minerva_project_hcas.md`](../../wiki/learning_pedagogies/minerva_project_hcas.md) for how it uses HCs).
- **Habit (H):** a named, transferable mental or behavioural skill that becomes more automatic with practice (our term for Minerva's "habit of mind"; the unit of the skill taxonomy). Not to be confused with a daily-routine habit.
- **Concept (C):** a named piece of broadly applicable knowledge (Minerva's "foundational concept"). Habits and Concepts together are "H&Cs"; Minerva's own abbreviation is "HCs" (the repo wiki writes "HCAs"; we use **H&C** in this project).
- **Rep:** one short practice exercise instance, 1 to 5 minutes.
- **Workout:** the 1 to 3 reps recommended for a learner on a given day (5 to 15 minutes).
- **Baseline:** a learner's first assessment on a construct. **Check-in:** a later re-measurement.
- **Pathway:** a sequenced bundle of reps and projects toward a skill goal (analogue of a Minerva Cornerstone course).
- **Challenger:** the Claude-powered practice partner that questions, role-plays and gives rubric feedback, and never hands over finished answers.
- **Practitioner:** teacher, faculty, coach or L&D professional supporting a cohort. **Cohort:** a group tracked together.
- **Skill ladder (inside-out):** Self-Regulation → Taking Charge (Agency) → Thinking → Human-Centric (creativity, communication, collaboration) → AI-Era (working with AI as the human expert in the loop).

## 5. Style & Tone Standards
- **Target length:** context under 2 pages; intent about 4; spec as long as the product needs, each section self-contained.
- **Voice:** rigorous and candid; inspiring in the learner-facing copy, never hype in the evidence-facing documents. Learner-facing text is warm, short and non-judgmental.
- **Citation standard:** link to real files in this repo or to a URL with access date. Every factual claim also gets a row in [`claims.md`](./claims.md). Say "unverified" plainly. No improvement numbers are claimed to learners or institutions without pilot evidence.
- **Format:** Markdown (Sanjay's stated default).
