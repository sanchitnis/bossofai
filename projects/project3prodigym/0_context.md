# Project Context: PROdiGYM, the gym for brain (bossofai.org/prodigym)

> **Cold-Open Context Note**: Standing project facts, constraints, and decisions. Any agent or human must be able to read this file cold before starting work. Keep it true: update it when reality changes.
>
> **Revision:** v2, 2026-10-16. Applies Sanjay's responses to the first spec review (recorded as DR-004 to DR-012 in [`decisions.md`](./decisions.md)).

---

## Working Mode

**Mode:** 1 (Sequential Human-Gated). Complete one lifecycle artifact at a time and stop at the human gate. By Sanjay's explicit instruction on 2026-10-16, `0_context.md`, `1_intent.md` and `2_spec.md` are drafted and revised together, then **paused for Sanjay's review**. No `3_draft.md` (build) work starts until `2_spec.md` carries `status: approved` set by a human.

**Stakes level for verification** (see [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md) §4):
- `1_intent.md` and `2_spec.md`: **Light**.
- Stage 4 on **Phase 1** (adults only, no programmatic AI calls): **Standard** [PROPOSED, decision D12].
- Stage 4 on any release that adds in-product AI or minors: **Heavy**.

---

## 1. Institutional Background
- **Lead author / working group:** Sanjay (founder). Drafted with an AI agent (Claude).
- **Sponsoring domain:** Education × Human-skills development × habit-building practice.
- **Human gate (who approves):** **Sanjay alone**, by his decision (DR-008). He will review with others as needed and arrange the reviewers below. Single-gate risk is recorded (K8 in `1_intent.md`).
- **Reviewers Sanjay needs to arrange** (names go in `4_review.md` when known):
  - **Phase 1 (adult MVP):**
    1. *Data-protection / privacy lawyer* with India's DPDP Act experience (adult users' personal data, privacy notice, terms).
    2. *Psychologist or psychometrician* (choice and framing of baseline measures; no diagnostic claims).
    3. *Experienced habit or performance coach* (habit catalogue and coach-pack content).
    4. *Security reviewer* who did not build it (auth, row-level security, secrets).
    5. *IP / trademark adviser* (name PROdiGYM, the phrase "gym for brain", attributions to Minerva and *Atomic Habits*, instrument licences).
    6. *Community-safety reviewer* (peer-review rules and moderation).
    7. *One adult learner* from the target group (usability and tone).
  - **Added for Phase 2:** an AI-safety and evals reviewer; a cost and operations check.
  - **Added for Phase 3 (school students):** a child-safeguarding adviser; a school leader; a parent representative; a legal adviser on children's data.
- **Related projects / parent:** Parent is [`project0bossofai`](../project0bossofai/). Sibling: [`project1aigurukul`](../project1aigurukul/) (teacher training; its teachers are a natural practitioner audience in Phase 3).
- **Product home:** a section of the existing site, `bossofai.org/prodigym`, inside the existing `web/` app (decision D3 default).

## 2. Current State (what actually exists today)
- **Concept (2026-10-16):** a gym for brain that builds habits and human-centric skills through baselines, daily practice, coaching and analytics. Earlier chat drafts `context.md` and `intent.md` are **superseded by these files**.
- **Repo and stack (verified by reading the repo, 2026-10-16):** `web/` is a **Vite + React 18 + TypeScript + Tailwind + Radix UI** single-page app with `react-router-dom`, `@tanstack/react-query` and `@supabase/supabase-js`, deployed on **Vercel** (`vercel.json` builds `web/`, `aihub/`, `learning-hub/`). Supabase schema is `supabase/schema.sql` (tables: `users`, `audience_inquiries`, `broadcast_subscribers`, `projects`, `leaderboard_entries`, `hub_nodes`). Auth is `AuthContext.tsx`. There is **no server-side API folder**. Phase 1 needs none (no programmatic AI calls).
- **Pedagogy and technique sources in this repo** (added or checked 2026-10-16):
  - [`wiki/learning_pedagogies/`](../../wiki/learning_pedagogies/): Minerva, École 42, Kolb, Knowles/heutagogy, Aalborg and Gold Standard PBL, Challenge-Based Learning, plus new draft pages for **Alpha School, Acton Academy, Khan Lab School, Nai Talim and Santiniketan**. Each new page states its evidence status and a proposed verdict. Use only where relevant (DR-011); **Sanjay confirms** which to include (D15).
  - [`wiki/learning_techniques/`](../../wiki/learning_techniques/) (new): **Atomic Habits** behaviour design, **habit-formation research**, **AI coaching**.
- **Minerva checks (2026-10-16):** Minerva's own materials say "more than 100" habits and concepts (HCs) across four first-year Cornerstones. Its website carries "© Minerva Project, Inc. All Rights Reserved" and states its name, logo and trade dress are trademarks. **We therefore create our own habit catalogue and do not copy Minerva's list, wording or tags**, and attribute the idea (DR-010).
- **Naming history:** the repo earlier used `prodigym` for the site; older wiki pages say "Project PRODIGY" and "HEITL Talent Pipeline".

## 3. Standing Decisions & Assumptions
Decisions made by a human are in [`decisions.md`](./decisions.md). Standing ones, as stated by Sanjay on 2026-10-16:
- **Brand:** **PROdiGYM** is the product (`bossofai.org/prodigym`); **Prakamya** is the guiding philosophy. The word "Gym" stays. Tagline (draft): "Everyone can be a prodigy, with AI and practice." Sanjay's decision: we write "gym for brain" in lowercase ordinary words instead of "brain gym", never as a name or mark (DR-009, DR-014, DR-017). Agent view and open check: see `claims.md` C-009 and `2_spec.md` §2.10.
- **Build first, then feedback.** No early feedback request to the core team; a complete solution is built from the spec, then shared.
- **Phase 1 is adults only (18+).** The site shows: "This site is for people aged 18 and over. A version for children is coming soon." (DR-013). School students come later, through their teachers and parents, in Phase 2 or 3 (DR-004).
- **MVP scope:** domain **Taking Charge of Life**, which **includes self-regulation**, taught with **Atomic-Habits-style behaviour design**. The concept also has a **techniques and methods layer** (habit design, implementation intentions, tracking, accountability, coaching by AI) next to the pedagogy layer (DR-005).
- **Peer review is in the first version** (DR-006).
- **No programmatic LLM API calls in any current release**, for the product and for agent review. Features whose API cost would fall on us are **deferred to a later release**, after testing and an initial customer base. **AI coaching in Phase 1 runs through skill files** that learners load in their own chatbot (for example Claude.ai); this stays as a no-credit fallback when in-product credits exist (DR-007).
- **Minerva** is a model for *how* to organise a taxonomy, not a source of content. Use only licensed or original material, with attribution (DR-010).
- **Pedagogies and techniques are used only where relevant**; having a wiki page does not mean it is used (DR-011).
- **Git:** the spec work is merged to `main` and pushed (DR-012, superseded by DR-016); further changes go on separate branches.
- **Verification loop:** AI agent review, then discussion on the deliberation board, then the human expert in the loop takes the final call (DR-015).
- Assumptions that, if wrong, change the plan:
  - A1: A short daily practice can change measurable habits. **Partly informed** by habit research (average about 66 days to automaticity, range 18 to 254; `claims.md` C-012), so the pilot reads at 8 weeks and again at 12 weeks or later.
  - A2: Self-report baselines can be made useful for development (not diagnosis) if framed and interpreted carefully.
  - A3: Enough adult users will join for peer review to work (cold-start risk K15).
  - A4: Learners can use a chatbot of their own (free or paid) to run the coach files; some may not (then static prompts and peer coaching remain).

## 4. Glossary and naming
One canonical name per thing.
- **PROdiGYM** (canonical): the product. Backronym (Sanjay's): "Pipeline for Research Oriented Development using Intelligence of Global Youth for Mankind". Legacy spellings: PRODIGY, `prodigym`.
- **Prakamya:** one of the *ashta siddhis*; classically, irresistible will or fulfilment of desire. As **our philosophy** it means the discernment to decide *what is worth wanting*, for the good of society and all beings (*sarve bhavantu sukhinah*). Always give this extended meaning in public copy.
- **HEITL:** Human Expert In The Loop.
- **Habit (H):** a named, transferable mental or behavioural skill that becomes more automatic with practice. **Concept (C):** a named piece of broadly applicable knowledge. Together **H&C**. (Minerva's term is "HCs"; the older repo wiki writes "HCAs".)
- **Habit plan:** a learner's short written plan for a habit: a cue, a tiny starting action, a place, an environment tweak, how it is tracked, a partner. (Our own template, informed by behaviour-design ideas; see the Atomic Habits wiki page.)
- **Rep:** one short practice instance. **Workout:** 1 to 3 reps for the day (5 to 15 minutes).
- **Baseline:** a learner's first assessment on a construct. **Check-in:** later re-measurement.
- **Coach pack:** the set of skill files (`SKILL.md` plus plain-text prompts) that turn a chatbot into a PROdiGYM coach, used with the learner's own chatbot.
- **Peer review credits:** a credit earned by reviewing another learner's shared work and spent to request a review.
- **Accountability partner / squad:** a pair or small group (2 to 4) who check in on each other's habit plans.
- **Practitioner:** coach, faculty member or L&D lead supporting a cohort. **Cohort:** a group tracked together.
- **Domains (inside-out ladder):** D1 **Taking Charge of Life** (self-regulation and agency strands) → D2 Thinking → D3 Human-Centric (creativity, communication, collaboration) → D4 AI-Era (working with AI as the human expert in the loop). Phase 1 builds D1 only.
- **Phase 1 / 2 / 3:** Phase 1 = adult MVP, no API calls. Phase 2 = in-product AI coach with credit caps (after testing and early customers). Phase 3 = school students via teachers and parents. Order of 2 and 3 may swap (Sanjay: "phase 2 or 3").

## 5. Style & Tone Standards
- **Target length:** context under 3 pages; intent about 5; spec as long as the product needs, each section self-contained.
- **Voice:** rigorous and candid in the evidence-facing documents; warm, short and non-judgmental in learner-facing text.
- **Citation standard:** link to real files in this repo or to a URL with access date. Every factual claim also gets a row in [`claims.md`](./claims.md). Say "unverified" plainly. No improvement numbers are claimed to learners or institutions without pilot evidence.
- **Originality and attribution:** write our own examples, wording and habit names; credit sources and frameworks; do not reproduce copyrighted text (books, Minerva material).
- **Format:** Markdown (Sanjay's stated default).
