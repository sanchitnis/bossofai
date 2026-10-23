# Project Context: PROdiGYM, the gym for brain (bossofai.org/prodigym)

> **Cold-Open Context Note**: Standing project facts, constraints, and decisions. Any agent or human must be able to read this file cold before starting work. Keep it true: update it when reality changes.
>
> **Revision:** v3, 2026-10-19. Expands scope from adult MVP only to a universal learner gym covering all Srujana Pathway stages, all academic streams (STEAM, Law, Architecture, Management, and all degree branches), from first-year undergraduates through research scholars, post-docs, and faculty. Adds challenge-project taxonomy, 3-dimensional learner analytics, and Srujana-Pathway-aligned Getting Started page. Based on Sanjay's direction on 2026-10-19.

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
- **Concept (v3, 2026-10-19):** PROdiGYM is a **universal gym for brain** — a challenge-based learning platform that helps individual learners and teams develop capabilities through chains of meaningful projects. It builds three interconnected competency dimensions: (1) collaborating effectively with AI, (2) developing deep domain expertise as a human expert in the loop (HEITL), and (3) developing 64 human-centric skills drawn from the Srujana Pathway, Minerva's pedagogic structure, and Indian Knowledge Systems (IKS). Earlier v2 focused only on adult habit-building; v3 expands the vision to serve **all learner levels** — from first-year undergraduates through research scholars, post-docs, and faculty — across **all streams and branches** (STEAM, Law, Architecture, Medicine, Management, Social Sciences, Humanities, Design, and Interdisciplinary fields). The **Srujana Pathway** (4 stages: Foundations, Internships/Applied, Deep Inquiry, Venture/Expert) is the primary navigation framework for the Getting Started page and learner progression.
- **Repo and stack (verified by reading the repo, 2026-10-16):** `web/` is a **Vite + React 18 + TypeScript + Tailwind + Radix UI** single-page app with `react-router-dom`, `@tanstack/react-query` and `@supabase/supabase-js`, deployed on **Vercel** (`vercel.json` builds `web/`, `aihub/`, `learning-hub/`). Supabase schema is `supabase/schema.sql`. Auth is `AuthContext.tsx`. There is **no server-side API folder**. Phase 1 needs none (no programmatic AI calls).
- **Srujana Pathway (source: `D:/sanjay/SrujanaBuddy/docs/srujana-pathway.md`):** Four developmental stages: Stage 1 Curriculum/Clubs/Self-Learning (Foundations), Stage 2 Internships (Applied), Stage 3 Products/Research/Consulting (Deep Inquiry), Stage 4 Enterprise/AI-Era Careers/Startups (Venture). The pathway's four core pillars are: Learn by Doing, Augmented by AI, Human-Centric Skills, AI-Era Outcomes. PROdiGYM's Getting Started page maps every learner (regardless of stream, age, or career stage) to a Srujana Pathway stage and a chain of challenge-projects appropriate for them.
- **Pedagogy and technique sources in this repo** (updated 2026-10-19):
  - [`wiki/learning_pedagogies/`](../../wiki/learning_pedagogies/): Minerva (structure only, not content), École 42 (peer review), Acton Academy (accountability squads), Nai Talim (learning-by-doing for society), Santiniketan (whole-person, arts), Kolb (experiential loop), Knowles/heutagogy (adult agency), Aalborg/Gold Standard PBL (real problems), Challenge-Based Learning (CBL), Alpha School (reference only), Khan Lab School (mastery, reference only).
  - [`wiki/learning_techniques/`](../../wiki/learning_techniques/): Atomic Habits behaviour design, Habit-formation research, AI coaching.
  - **Indian Knowledge Systems (IKS):** The 64 human-centric skills framework draws on Swami Vivekananda's character development principles (shraddha, concentration, fearlessness, service) and Swami Sarvapriyananda's commentaries, as well as traditional *Chatushashti Kalas* (64 classical arts/skills). These are synthesized into a modern competency taxonomy relevant to the AI era.
- **Minerva checks (2026-10-16):** We create our own habit and skill catalogue. We do not copy Minerva's list, wording, or tags. We attribute the structural inspiration (DR-010).
- **Naming history:** the repo earlier used `prodigym`; older wiki pages say "Project PRODIGY" and "HEITL Talent Pipeline".

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
- **Habit (H):** a named, transferable mental or behavioural skill that becomes more automatic with practice. **Concept (C):** a named piece of broadly applicable knowledge. Together **H&C**.
- **Srujana Pathway:** the four-stage learner journey (Foundations → Applied → Deep Inquiry → Venture/Expert) from SrujanaBuddy. PROdiGYM uses this as the navigation spine for all learner-facing content.
- **64 Human-Centric Skills (64-HCS):** PROdiGYM's own catalogue of 64 transferable human skills, synthesized from Minerva's HC structure, Swami Vivekananda's character principles (shraddha, concentration, fearlessness, seva), Swami Sarvapriyananda's IKS commentaries, and modern competency frameworks. Organized into 8 clusters of 8 skills each. Original wording and names; never copied from any single source.
- **3-Dimensional Learner Analytics (3DLA):** PROdiGYM's analytics framework measuring progress across three independent axes: (1) AI Collaboration Proficiency (ACP), (2) Domain Expert Depth (DED), and (3) Human-Centric Skills (HCS). Each dimension has milestones with demonstrated achievements.
- **Challenge-Project:** a structured learning engagement with a defined problem/challenge, learning outcomes, deliverables, and a Guru (mentor). Projects fall into one of 12 types: Learning, Teaching, Creating Learning Resources, Building/Generating, AI-Native Coding, Research, Consulting/Advisory, Design, Community Service, Advocacy/Policy, Arts/Culture, Interdisciplinary.
- **Chain of Challenges:** a curated sequence of challenge-projects that forms a learner's personal pathway from current competency to their aspiration. Each chain is Srujana-Pathway-stage-appropriate.
- **Guru:** a domain mentor who guides a learner or team through a challenge-project. Equivalent to a Socratic guide or coach (not a lecturer).
- **Rep:** one short practice instance. **Workout:** 1 to 3 reps for the day (5 to 15 minutes). **Sprint:** a 2–6 week challenge-project cycle.
- **Baseline:** a learner's first assessment on a construct. **Check-in:** later re-measurement.
- **Coach pack:** skill files plus plain-text prompts that turn a learner's own chatbot into a PROdiGYM coach.
- **Peer review credits:** earned by reviewing others' shared work; spent to request a review.
- **Accountability Squad:** a pair or small group (2 to 4) who check in on each other's progress.
- **Practitioner:** coach, faculty member, or L&D lead supporting a cohort. **Cohort:** a group tracked together.
- **Domains (inside-out ladder):** D1 **Taking Charge of Life** (self-regulation and agency) → D2 Thinking → D3 Human-Centric (creativity, communication, collaboration) → D4 AI-Era (working with AI as HEITL).
- **Learner Levels (for Getting Started page):** L1 Explorer (new to structured learning or to a domain), L2 Builder (applying knowledge, internship-ready), L3 Innovator (deep inquiry, research/design), L4 Pioneer (enterprise, expert, Guru). Levels are competency-and-aspiration-based, not branch- or age-gated.
- **Phase 1 / 2 / 3:** Phase 1 = adult MVP (Getting Started page + D1 habit gym + challenge scaffolding, no API calls). Phase 2 = in-product AI coach with credit caps. Phase 3 = school students via teachers and parents.

## 5. Style & Tone Standards
- **Target length:** context under 3 pages; intent about 5; spec as long as the product needs, each section self-contained.
- **Voice:** rigorous and candid in the evidence-facing documents; warm, short and non-judgmental in learner-facing text.
- **Citation standard:** link to real files in this repo or to a URL with access date. Every factual claim also gets a row in [`claims.md`](./claims.md). Say "unverified" plainly. No improvement numbers are claimed to learners or institutions without pilot evidence.
- **Originality and attribution:** write our own examples, wording and habit names; credit sources and frameworks; do not reproduce copyrighted text (books, Minerva material).
- **Format:** Markdown (Sanjay's stated default).
