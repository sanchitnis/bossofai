---
project: project3prodigym
stage: 2-design
artifact: spec
version: v2
owner: Sanjay
locked_date: ~
status: draft
stakes_level: Standard   # Phase 1 (adults, no AI calls). Heavy for any release with in-product AI or minors. Proposed here, confirmed by the human gate
tags: [prodigym, spec, stage-2, product-spec, phase-1]
---

# Specification: PROdiGYM, the gym for brain

> **Verification**: Light loop on this spec before it is locked. Do not start `3_draft.md` until `status: approved` and `locked_date` are set by a human (Spec Rule, [`AGENTS.md`](../../AGENTS.md)).
>
> **v2 (2026-10-16):** applies Sanjay's decisions DR-004 to DR-012. Changes from v1: **Phase 1 is adults only**; MVP domain is **Taking Charge of Life** (self-regulation included) with **Atomic-Habits-style** habit plans; a **techniques and methods layer** sits beside the pedagogy map; **peer review and accountability partners are in Phase 1**; **no programmatic LLM API calls in current releases**, so AI coaching in Phase 1 is delivered by **skill files used in the learner's own chatbot**; the in-product AI coach and its cost controls move to **Phase 2**; school students come later through teachers and parents.
>
> **What this spec specifies:** the product (a web platform and a coach pack) built in Stage 3. Each section has checkable acceptance criteria.

---

## 1. Document architecture and acceptance criteria

| # | Section | Key question it answers | Acceptance criteria (checkable) | Evidence required |
|---|---|---|---|---|
| 1 | **Pedagogy and methods map** | Which learning designs and techniques shape which features, and which are *not* used? | Each source in the map has a verdict (Use, Light, Reference-only, Not used) and a feature link or a reason; no effectiveness claims; every borrowed idea attributed; Sanjay confirms the verdicts (D15) | Wiki pages; `claims.md`; decision DR |
| 2 | **Skill taxonomy and habit catalogue** | What is taught, named, practised and graded? | Domain D1 *Taking Charge of Life* with two strands; Phase 1 ships **≥ 20 habits and ≥ 60 reps**, all in **our own wording and names**; each habit has level descriptors, ≥ 3 reps in different contexts, a habit-plan prompt, and one named human reviewer; **no text, list or tag copied from Minerva or from any book**; originality check passed | Review log; originality check note; [C-013] |
| 3 | **Baseline and check-ins** | How does a learner see where they start and how they change? | Instruments only with a **confirmed licence** (IPIP items are public domain, C-007; Grit-S, GSE, BRS and others not used, C-022 to C-025) or our own items marked *experimental*; scoring is pure, documented and unit-tested; re-test caveats shown; results framed as developmental, never labels; psychometrician reviewed | Licence notes; tests; reviewer note |
| 4 | **Habit plans and daily practice engine** | What does a learner do today, and why? | A habit plan template; a workout of 1 to 3 reps (5 to 15 minutes) chosen by a documented rule; **weekly consistency** (not an unbroken chain); learner can swap or skip; works with no AI at all | Rule document; unit tests |
| 5 | **Coaching: coach pack (Phase 1) and in-product coach (Phase 2)** | How does AI challenge the learner without costing us API credits now? | **Phase 1:** a coach pack (skill files plus plain-text prompts) with modes and a session-log format; tested by a human on ≥ 2 chatbots against a fixed prompt set; files ask for no personal identifiers; site states that chat content is governed by the chatbot provider. **No programmatic LLM call in Phase 1 code.** **Phase 2:** design held but not built | Test log; code search showing zero LLM API calls |
| 6 | **Peer review and accountability (Phase 1)** | How do learners learn from and support each other, safely? | Credit ledger; review rubric; anonymised handles; per-submission opt-in; report, block and moderation flow; code of conduct; accountability pairs and squads; no AI used in review; community-safety reviewer sign-off | Design note; moderation runbook; tests for credits |
| 7 | **Analytics: learner and practitioner** | How do they see real progress, honestly? | Learner and practitioner views as in §2.7; cohort aggregates only for **n ≥ 8** [PROPOSED]; self-reported data labelled; no individual ranking; metric definitions written and tested | `docs/metrics.md`; tests |
| 8 | **Architecture and data model** | How is it built on our stack? | Routes and tables listed; every table has RLS written and tested; **no server-side AI function in Phase 1**; migrations versioned; no PII in logs | Schema and RLS tests; threat-model note |
| 9 | **Privacy, consent, legal and safety** | How do we avoid harm and meet the law? | Data inventory; retention; consent records; 18+ declaration and minor-handling process; export and delete; incident process; privacy lawyer sign-off; Phase 3 children's-data plan drafted but not built | Lawyer sign-off; [C-006] |
| 10 | **Experience, brand and accessibility** | What does it feel like, and who might be left out? | Mobile-first; first practice screen under 3 s on a mid-range phone; WCAG 2.1 AA target; copy uses full Prakamya meaning; **"gym for brain" in lowercase ordinary words (we do not write "brain gym"), never as a name, tag, domain or heading**; 18+ notice and "children's version coming soon" shown; attribution page | Lighthouse and manual checks; copy review |
| 11 | **Evaluation and pilot** | How will we know it works? | Thresholds for H1 to H7 pre-set; comparison design for H2; two read points (8 and 12 weeks or more); decision rules (continue, change, stop) | Pilot protocol; human gate approval |
| 12 | **Build plan and milestones** | In what order, with what tests first? | Phases in §6; tests for scoring, credits and analytics written **before** the code | Plan; test files |

## 2. Detailed product specification

### 2.1 Pedagogy and methods map (section 1)
Two layers. **Pedagogies** are school or learning-design models. **Techniques and methods** are ways to build a habit or skill. Verdicts are *proposals* for Sanjay (D15): nothing is used just because a wiki page exists.

| Source (wiki page) | Layer | What we take | Verdict | Feature | Caution |
|---|---|---|---|---|---|
| **Minerva** ([page](../../wiki/learning_pedagogies/minerva_project_hcas.md)) | Pedagogy | Name each skill; teach it explicitly; assess application in *new* contexts; four core competencies | **Use (structure only)** | Habit catalogue shape; cross-context rubric | Content and name are © and trademarks of Minerva Project [C-013]: **original catalogue only** |
| **École 42** ([page](../../wiki/learning_pedagogies/ecole_42_peer_learning.md)) | Pedagogy | Peer review as learning; credits for reviewing; visible progression | **Use** | Peer-review credits; skill-tree view | Description is wiki-sourced [C-008]; no "piscine" stress model; adults only |
| **Acton Academy** ([page](../../wiki/learning_pedagogies/acton_academy_learner_driven.md)) | Pedagogy | Socratic guides; accountability partners and squads; personal contract; badges for character; sprint and showcase rhythm | **Use (selected parts)** | Accountability pairs and squads; habit contract; character badges; 4 to 6 week sprints | Own-site description only [C-017]; no age-mixed studios |
| **Nai Talim** ([page](../../wiki/learning_pedagogies/nai_talim_basic_education.md)) | Pedagogy / philosophy | Learning through useful work; learning serves others | **Use (philosophy)** | "Useful to someone else" challenge prompts; pairs with Prakamya | No craft curriculum or self-supporting economy |
| **Santiniketan** ([page](../../wiki/learning_pedagogies/santiniketan_tagore_open_air.md)) | Pedagogy / philosophy | Whole-person learning; arts and nature; member-run governance | **Light** | Optional non-screen reps (walk, writing, music); circles that set their own norms | Methods not detailed in sources [C-019] |
| **Kolb** ([page](../../wiki/learning_pedagogies/kolb_experiential_learning.md)) | Pedagogy | Do, reflect, form a rule, try again | **Use** | Rep structure | Reflection quality must be assessed |
| **Knowles / heutagogy** ([page](../../wiki/learning_pedagogies/knowles_andragogy_heutagogy.md)) | Pedagogy | Show *why*; learner chooses; reflect on assumptions | **Use** | "Why this rep" line; choice of workout; double-loop prompt | Adults only in Phase 1, so a good fit |
| **Aalborg / Gold Standard PBL** ([page](../../wiki/learning_pedagogies/aalborg_bie_pbl.md)) | Pedagogy | Real problem, critique and revision, public product | **Light** | Sprint-end "showcase" of a habit plan or small project | Phase 2 for capstones |
| **Challenge-Based Learning** ([page](../../wiki/learning_pedagogies/challenge_based_learning.md)) | Pedagogy | Big idea, essential question, challenge | **Light** | Wording of "Taking Charge" challenges | Keep small |
| **Khan Lab School** ([page](../../wiki/learning_pedagogies/khan_lab_school_mastery.md)) | Pedagogy | Mastery-based progression, agency | **Reference-only** | Mastery gating (our own design) | Thin source [C-020] |
| **Alpha School** ([page](../../wiki/learning_pedagogies/alpha_school_2_hour_learning.md)) | Pedagogy | Short focused block; adults as guides | **Reference-only / Not used** | None | Company claims only [C-016] |
| **Atomic-Habits-style behaviour design** ([page](../../wiki/learning_techniques/atomic_habits_behavior_design.md)) | Technique | Cue, tiny start, easy setup, visible tracking, identity; implementation intentions; habit stacking | **Use (core method for D1)** | Habit plan template; tiny-version reps; tracking; stacking prompts | Book is copyrighted: own wording and examples [C-014]; framework is not a tested intervention |
| **Habit-formation research** ([page](../../wiki/learning_techniques/habit_formation_research.md)) | Technique (evidence) | Habits take weeks to months, vary widely; one missed day matters little | **Use (design constraints)** | Weekly consistency; two read points (8 and 12 weeks or more) | One study of students, self-reported [C-012]; other techniques unverified [C-021] |
| **AI coaching** ([page](../../wiki/learning_techniques/ai_coaching.md)) | Technique | Question-led coaching; goal, reality, options, plan | **Use (via coach pack)** | Coach pack in Phase 1; in-product coach in Phase 2 | One study, abstract only [C-015] |
| **Prakamya** (our philosophy) | Philosophy | Discernment of what is worth wanting, for all | **Use** | "What is worth wanting?" reflection strand; copy | A reflective practice, not doctrine |

**Candidates not yet researched, not used:** spaced repetition and retrieval practice, deliberate practice, self-determination theory, WOOP. Each needs a source before it enters the spec (see the research page's table).

### 2.2 Skill taxonomy and habit catalogue (section 2)
- **Structure:** Domain → Strand → Habit (or Concept) → Rep.
- **Phase 1 domain:** **D1 Taking Charge of Life**, with two strands:
  - **Self-regulation:** attention and focus, noticing and handling emotions, urges and impulses, pausing under stress, energy and rest routines (non-clinical, no sleep or mental-health advice).
  - **Agency:** goals and priorities, planning and next steps, ownership and follow-through, bouncing back from setbacks, decisions, and **what is worth wanting** (Prakamya strand).
- **Later domains (not built in Phase 1):** D2 Thinking; D3 Human-Centric (creativity, communication, collaboration); D4 AI-Era.
- **Size:** ≥ 20 habits and ≥ 60 reps, each with level descriptors (for example Starting, Steady, Fluent) and a short rubric. **This is our own catalogue.**
- **Originality rules (DR-010):** names, tags, definitions, examples and rubrics are written fresh; no entry is a rewording of a Minerva item or of passages from a book; each habit lists its inspirations in an attribution field; one named human reviewer checks originality and quality.
- **Cross-context rule:** each habit has reps in ≥ 3 contexts (for example work, study, home or community) so transfer can be assessed (H5).
- **Rep record fields:** author, reviewer, source or inspiration, `validation_status` (`draft`, `reviewed`, `experimental`).
- **Habit plan template (our wording):** *When [cue], I will [tiny action] in [place]. I will make it easier by [change]. I will track it by [method]. I will check in with [partner].* Each habit rep includes a plan step and a "what got in the way" reflection.

### 2.3 Baseline and check-ins (section 3)
- **Candidate constructs for D1:** self-regulation, self-efficacy or agency, perseverance, and self-reported habit automaticity, each measured with IPIP-based scales or our own experimental items. Final list set with the psychometrician (Q3, Q8).
- **Instruments (licence check done 2026-10-16, DR-018):** only items with a confirmed licence are used.

| Instrument | Licence finding | Decision |
|---|---|---|
| **IPIP** items and scales | Public domain, any purpose including commercial [C-007]. Silent on translation and attribution | **Allowed.** IP adviser to confirm translation |
| **Grit Scale / Grit-S** | Copyrighted; free for non-commercial research and education only; "cannot be published or used for commercial purposes or wide public distribution" [C-022] | **Not allowed. Not used** |
| **General Self-Efficacy Scale (GSE)** | Free for research studies with source credit; silent on commercial or product use and translation [C-023] | **Not cleared. Not used** unless the authors confirm in writing |
| **Brief Resilience Scale (BRS)** | No author or publisher licence found; one host says "No restrictions", another ties it to a software licence [C-024] | **Not cleared. Not used** unless the author confirms in writing |
| **Self-Report Habit Index, Brief Self-Control Scale** | No licence terms found [C-025] | **Not cleared. Not used** |
| Our own items | Written by us | Allowed, marked *experimental*, never used to compare people |

  Replacement constructs (self-discipline, self-efficacy, perseverance, emotional stability, orderliness) come from IPIP scales chosen with the psychometrician. If we want a named scale later, we ask the author for written permission and record it in `claims.md` first.
- **Scoring:** pure, unit-tested functions; reversals, missing data and ranges documented; **no norms or percentiles** without a validated reference sample.
- **Re-measurement:** a check-in at **8 weeks**, and another at **12 weeks or more** for habit-automaticity (H2); show change with caveats about practice effects and self-report bias.
- **Framing:** "where you are now", never a type or label; plain purpose and consent text before each assessment; no clinical terms.

### 2.4 Habit plans and daily practice engine (section 4)
- **Workout generator** (pure function, documented): inputs are baseline gaps, the last 14 days of reps, due dates and the learner's chosen goal; output is 1 to 3 reps for 5 to 15 minutes.
- **Difficulty:** move up a level after two successful reps (self-check plus partner or peer rating); down after two struggles; manual choice always allowed.
- **Consistency, not chains:** a **weekly target** (for example 4 of 7 days) with one rest day; one missed day has no penalty. This follows the finding that one missed day matters little while many missed days matter [C-012]. Tested in H1.
- **Rep format:** short prompt, tiny action, reflection (Kolb), rule of thumb, optional coach-pack session.
- **No-AI path:** every rep works without any AI.

### 2.5 Coaching (section 5)
**Phase 1: coach pack (no API calls, no credits).**
- **What it is:** a folder of files in the repo, for example `coach-pack/`: a core `SKILL.md` (the PROdiGYM coach) plus mode files (habit plan, weekly review, obstacle troubleshooter, "what is worth wanting" reflection, Socratic challenger) and a **plain-text prompt version** of each for chatbots without skill support.
- **How a learner uses it:** the site gives download or copy instructions; the learner loads the pack in **their own chatbot** (for example Claude.ai); at the end the coach produces a **short session log** in a fixed, readable format; the learner **pastes it into PROdiGYM** to log the rep. That log is **self-reported**.
- **Coach behaviour (in the files):** ask before telling; keep to the learner's goal; use a visible rubric; never do the learner's task; no clinical advice; do not ask for names, contacts or other identifiers; a gentle off-ramp if the learner seems distressed (suggest a trusted person or a local helpline).
- **Testing:** a human runs a fixed set of ≥ 20 test prompts (including "just give me the answer" and distress cases) on **at least two chatbots** before release; results recorded.
- **Disclosure:** the site says that what is typed into a chatbot is governed by that provider's terms and age rules, and is not stored by PROdiGYM unless the learner pastes it in.
- **Code rule:** a repository check confirms **no call to any LLM API** in Phase 1 code and no AI key in settings.

**Phase 2: in-product coach (design held, not built).** After testing and an initial customer base: a server-side function calls an AI model with per-learner credit caps, caching and logging of usage (not text); age-banded prompts; content filters; an eval set before release. **When credits are unavailable the coach falls back to the coach pack**, so a no-cost path always exists. Where the function runs (Supabase Edge Function by default, D4) is decided then.

### 2.6 Peer review and accountability (section 6)
- **Credits:** earn credits by reviewing others' shared work; spend credits to request a review. Starting default: 1 review given earns 1 credit; a request costs 1; a new learner gets a small starter balance (D13).
- **What can be reviewed:** only **work the learner chooses to share** (a habit plan, a weekly review, a short written reflection or exercise). **Private reflections stay private.** Each submission needs an explicit opt-in and a warning not to include personal details.
- **Anonymity:** reviewers and reviewees see **anonymised handles** by default. Phase 1 has no public profiles.
- **Quality:** a short rubric (clear, kind, specific, useful); reviewees rate usefulness; low-quality or abusive reviews lose credits; spot checks by admins.
- **Safety:** report and block on every review; moderation queue and runbook; code of conduct; account suspension; adults only. Reviewed by the community-safety reviewer before launch (K12).
- **Accountability pairs and squads (Acton-inspired):** a pair or squad of 2 to 4 with a weekly check-in and a shared view of only what each member chooses to share. A personal habit contract is optional.
- **Cold start (K15):** begin with pairs and cohort-run groups (practitioner-led cohorts count as the reviewer pool); do not rely on an open marketplace at launch.
- **No AI** takes part in peer review in Phase 1.

### 2.7 Analytics (section 7)
- **Learner view:** baseline vs now (with caveats), skill profile, days practised against the weekly target, habit plans, reflections timeline, partner and review activity, one "next step".
- **Practitioner view (adult cohorts):** cohort distribution by skill, stalled learners (no practice in N days), weakest skills, engagement trend, peer-review quality, export (CSV).
- **Metric definitions:** each metric has a written definition, formula, minimum sample and caveat in `docs/metrics.md` (created in Stage 3).
- **Rules:** cohort aggregates only for **n ≥ 8** [PROPOSED]; individual detail visible to a practitioner only where the learner consented; learners can see who can see their data; **self-reported data is labelled as such**; no individual league tables.

### 2.8 Architecture and data model (section 8)
- **Front end:** a new `/prodigym` area in `web/` (Vite, React, TypeScript, Tailwind, Radix, react-router, react-query), reusing `AuthContext.tsx` and `lib/supabase.ts`.
- **Back end:** Supabase (Postgres, Auth, RLS). **Phase 1 needs no server-side function** because there are no AI calls. The coach pack is **static files** served with the site.
- **Tables (namespaced `pg_`):** `pg_profiles`, `pg_cohorts`, `pg_cohort_members`, `pg_consents`, `pg_skills`, `pg_habits`, `pg_reps`, `pg_habit_plans`, `pg_instruments`, `pg_instrument_items`, `pg_assessments`, `pg_responses`, `pg_scores`, `pg_workouts`, `pg_attempts`, `pg_reflections`, `pg_session_logs` (pasted coach summaries, self-reported), `pg_squads`, `pg_peer_requests`, `pg_peer_reviews`, `pg_credit_ledger`, `pg_reports`, `pg_analytics_snapshots`, `pg_audit_log`.
- **RLS:** learners read and write only their rows; reviewers see only the submissions assigned to them, under anonymised handles; practitioners see cohort rows only for cohorts they own and consented fields; admins manage content and moderation; each policy has a test.
- **Roles:** learner, practitioner, content-reviewer, moderator, admin.
- **Do not break** `aihub`, `learning-hub` or the existing `users` flows. Read `AuthContext.tsx`, `Join.tsx`, `MemberPortal.tsx` and `supabase/schema.sql` first; extend, do not duplicate.
- **Deployment:** Vercel preview per change; migrations through a reviewed script; no AI key anywhere in Phase 1.

### 2.9 Privacy, consent, legal and safety (section 9)
- **Adults only (Phase 1):** an 18+ declaration at sign-up and in the terms, and a visible notice on the home page and sign-up screen: **"This site is for people aged 18 and over. A version for children is coming soon."** (DR-013); if a user is found to be under 18, suspend the account, delete their data and tell them why. Institutional invites (cohort codes) help but do not prove age (K11).
- **Data minimisation:** name or handle, email, role, cohort, responses, reflections, habit plans, practice events, pasted session logs, peer-review content. No contacts, location or device identifiers beyond what authentication needs.
- **Law (to be confirmed by the privacy lawyer, Q5):** India's Digital Personal Data Protection Rules were notified in November 2025; the parts dealing with consent, notice, security and children's data are described by secondary sources as taking effect in stages, with most of them about **18 months after publication (around May 2027)** [C-006]. We build to that standard from the start: clear notice, specific consent, purpose limits, security, breach process, erasure on request.
- **Phase 3 (school students) design constraints noted now:** the Act treats anyone under 18 as a child; processing needs **verifiable parental consent**; the Act bars **tracking, behavioural monitoring and targeted advertising directed at children**, with narrow exemptions (for example for educational institutions, under the Rules' fourth schedule) [C-006]. **Learner analytics on children must not be built until the legal adviser confirms what is allowed.**
- **Rights:** learner can export and delete their data; deletion removes rows including peer-review content they authored.
- **Retention:** active account plus [PROPOSED] 12 months, then delete or anonymise (D11).
- **Incident process:** named contact, internal review target [PROPOSED 72 hours], notification as the law requires.
- **Peer-review safety:** see §2.6.
- **Third-party chatbots:** see §2.5 disclosure.

### 2.10 Experience, brand and accessibility (section 10)
- **Routes (draft):** `/prodigym` (home), `/prodigym/start` (baseline), `/prodigym/today` (workout and habit plans), `/prodigym/coach` (coach pack and how to use it), `/prodigym/circle` (partners, squads, peer review), `/prodigym/progress`, `/prodigym/library`, `/prodigym/practitioner`, `/prodigym/privacy`, `/prodigym/credits` (attributions and sources).
- **Tone:** warm, short, non-judgmental; the gym metaphor (reps, workouts) without shame for missed days.
- **Brand:** PROdiGYM; tagline draft "Everyone can be a prodigy, with AI and practice."; Prakamya shown as "Our philosophy" with its full meaning.
- **"gym for brain" wording (DR-009, DR-014, DR-017):** Sanjay's decision: write **"gym for brain"** in lowercase as ordinary words, and do not write "brain gym" in our own copy, never as a proper name. The phrase "Brain Gym" is claimed as a trademark by the Educational Kinesiology Foundation (US record for BRAIN GYM filed 1987; status and any Indian registration not confirmed), and the programme is widely regarded as pseudoscience [C-009]. Note: trademark rights do not depend on letter case, so lowercase lowers but does not remove risk; the descriptive, non-name use is what matters. **Rule:** the product is PROdiGYM; do not use "brain gym" (in any case) or "gym for brain" as a product name, tagline, headline, hashtag, domain or social handle; do not describe our methods as movement-based "brain integration"; the IP adviser confirms before launch. This is not legal advice.
- **Attribution page (`/prodigym/credits`):** credits frameworks and sources used (for example *Atomic Habits*, Minerva's approach, École 42, Acton, Nai Talim) without reproducing their text.
- **Accessibility and inclusion:** keyboard and screen-reader support; plain language; low-bandwidth mode; English first; structure ready for Indian languages.

### 2.11 Evaluation and pilot (section 11)
- **Pilot 0:** at least two adult cohorts (college-age adults, professionals), with a comparison arm for H2 where possible.
- **Read points:** 8 weeks (practice, baseline change, peer-review quality) and 12 weeks or more (habit automaticity).
- **Measures:** activation, retention, days practised, change on baseline constructs, self-reported automaticity, reflection quality (blind rubric), coach-pack usefulness (self-report), peer-review quality, partner effects, practitioner views, incidents.
- **Decision rules:** continue, change or stop, set before the pilot and approved by the human gate.

## 3. Voice, tone, reading level, length
- Learner-facing copy: plain English, grade 8 reading level, one idea per screen.
- Evidence-facing documents: rigorous and candid; no hype; unverified claims marked.
- Code: TypeScript, small modules, comments where intent is not obvious.

## 4. Non-goals
- Therapy, diagnosis, clinical scales used as clinical tools.
- Children in the product (Phase 3 only, after safeguards).
- Programmatic LLM API calls in any current release.
- Public learner profiles or open social features.
- Domains D2 to D4, voice practice, multilingual content and a mentor marketplace in Phase 1.
- Using scores for admissions, hiring or grading.
- Any copied Minerva or book content.

## 5. Decisions needed before locking, with defaults
Deadlines are **[PROPOSED]** for Sanjay to set. **Decided** rows come from Sanjay's 2026-10-16 responses.
| ID | Decision | Owner | Deadline | Default if undecided | Cost of the default being wrong |
|---|---|---|---|---|---|
| D1 | Who can use Phase 1? | Sanjay | **Decided** (DR-004) | Adults only; school students later via teachers and parents | n/a |
| D2 | MVP scope | Sanjay | **Decided** (DR-005) | D1 Taking Charge of Life incl. self-regulation; Atomic-Habits-style methods; techniques layer | n/a |
| D3 | Where it lives | Sanjay | before Stage 3 | `bossofai.org/prodigym` inside `web/` | Small cost to move later |
| D4 | Where the Phase 2 AI function runs | Sanjay | before Phase 2 | Supabase Edge Function | Moderate rework |
| D5 | Peer review in Phase 1? | Sanjay | **Decided** (DR-006) | Yes, adults only | n/a |
| D6 | AI budget, caps and model | Sanjay | **Moved to Phase 2** (DR-007) | Decide before Phase 2 | n/a |
| D7 | Brand | Sanjay | **Decided** (DR-001, DR-009) | PROdiGYM + Prakamya philosophy; "gym for brain" only as lowercase ordinary words, never a mark | Rebrand if the IP adviser objects |
| D8 | May the product call an AI API? | Sanjay | **Decided** (DR-007) | No, in any current release; later releases after testing and early customers | n/a |
| D9 | Habit content authoring | Sanjay | before Stage 3 | Drafted by an AI agent in working sessions, each habit reviewed by one named human, original wording | Slower if reviewers are scarce |
| D10 | Minimum n for cohort aggregates | Sanjay, psychometrician | before Stage 3 | 8 | Hidden data or weak privacy |
| D11 | Retention period | Sanjay, privacy lawyer | before any user data is stored | 12 months after last activity | Compliance risk |
| D12 | Stakes level for Phase 1 Stage 4 | Sanjay | before Stage 4 | **Standard** (Heavy for AI or minors) | Under-review if wrong |
| D13 | Peer-review credit rules | Sanjay | before Stage 3 | 1 earned per review, 1 spent per request, small starter balance, abuse penalties | Gaming or stalling |
| D14 | Which chatbots to test the coach pack on | Sanjay | before Stage 3 | Claude.ai plus one other | Uneven coach quality |
| D15 | Which wiki pedagogies and techniques to use (verdicts in §2.1) | Sanjay | before spec lock | As proposed in §2.1 | Design carries unused or missing ideas |

## 6. Build plan and milestones (section 12)
Every phase starts with tests for scoring, credits and analytics logic.
| Phase | Deliverable | Done-test |
|---|---|---|
| **P0 Discovery** | Repo audit (auth, schema, pages); instrument licence check; benchmark of 5 offerings (Q4); habit list v0 for D1 | Notes committed; claims updated |
| **P1a Core loop** | Profiles, roles, consent, 18+ declaration, baseline, habit plans, workout generator, weekly consistency | A new adult can baseline, plan a habit, do a workout, see progress |
| **P1b Coach pack** | Skill files, plain-text prompts, session-log format, test log on ≥ 2 chatbots | Human test log passes; repo check shows zero LLM API calls |
| **P1c Circle** | Pairs and squads, peer review, credits, moderation | Credit tests pass; moderator can review a report; safety reviewer signs off |
| **P1d Analytics** | Learner and practitioner dashboards, check-ins, exports | Metric tests pass; n-threshold enforced |
| **P1e Hardening and launch prep** | RLS tests, security review, accessibility, privacy pages, attribution page, lawyer and IP review | Stage 4 verification ready |
| **P1f Pilot 0** | Two adult cohorts, two read points | Thresholds read; decisions recorded |
| **Phase 2** | In-product coach with credit caps and coach-pack fallback; domain D2 | After testing and early customers (DR-007) |
| **Phase 3** | School students via teachers and parents; safeguarding and children's-data compliance | Legal and safeguarding sign-off first |

## 7. Verification plan
**The verification loop (DR-015).** Every lifecycle artifact (intent, spec, draft, final) goes through the repo's loop in [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md):
1. **AI agent review:** reviewer agents, each with a defined lens, read the artifact and raise issues with severity and evidence.
2. **Discussion on the deliberation board:** the issues, rebuttals and revisions are discussed in [`deliberation_board.md`](./deliberation_board.md) so the artifact is improved before it reaches the human. Per AGENTS.md, this deliberation uses no programmatic LLM API calls (agents run in working sessions).
3. **Human expert in the loop (HEITL) takes the final call:** Sanjay (DR-008), with the specialist reviewers he arranges, accepts, changes or rejects; unresolved disagreements and Critical issues are decided by the human and recorded in `decisions.md`.
Loop depth by stakes: Light, Standard or Heavy as below. Nothing here has run yet; the first Light loop on this spec is the next step after Sanjay's read.

- **Stakes level and why:** this spec is **Light**. Phase 1 Stage 4 is **Standard** (adults, personal reflective data, peer interaction, no AI calls) [PROPOSED, D12]. Any release with in-product AI or minors is **Heavy**.
- **Panel lenses (spec, Light):** Adversary; Pedagogy and psychometrics.
- **Panel lenses (Phase 1 Stage 4, Standard):** Adversary; Grounding Auditor; Pedagogy and psychometrics; Privacy and data protection; Security; Community safety; IP and licensing.
- **Models/harnesses planned:** at least one reviewer on a different model or harness from the Author (the Author is Claude).
- **Round cap and revision cap:** protocol defaults (Light 2, Standard 4 per issue; 3 revision cycles).
- **What a Critical issue would be:** any call to an LLM API in the Phase 1 release; a path to read another learner's private data; peer-review content exposing identity or personal detail; a minor able to use the product without being detected or removed; copied Minerva or book content; an instrument without a confirmed licence; a score shown as a label or diagnosis; "brain gym" or "gym for brain" used as a name, tag or heading; an unverified effectiveness claim shown to users; a contradiction with `1_intent.md`.
- **Human gate:** Sanjay alone, with the reviewers listed in `0_context.md` §1 arranged by him (DR-008).
- **Not yet done:** nothing here has been independently verified. Only the author's self-check has been done.
