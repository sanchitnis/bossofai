---
project: project3prodigym
stage: 2-design
artifact: spec
version: v1
owner: Sanjay
locked_date: ~
status: draft
stakes_level: Heavy   # for the built product at Stage 4; Light for this spec
tags: [prodigym, spec, stage-2, product-spec]
---

# Specification: PROdiGYM, the Brain Gym

> **Verification**: Light loop on this spec before it is locked. Do not start `3_draft.md` until `status: approved` and `locked_date` are set by a human (Spec Rule, [`AGENTS.md`](../../AGENTS.md)).
>
> **What this spec specifies:** the product (a web platform) that will be built in Stage 3. "Document" in the template means *specification section*; each section below has checkable acceptance criteria that the Build loop ticks off and the Adversary tests.
>
> **A note on the AGENTS.md "no API-based LLM calls" rule.** That rule governs how *agents review each other* (Loop C). It does not forbid the **product** from calling Claude for learners. This spec uses the Claude API inside the product, and says so here so a later reader does not see a contradiction. (Confirm in D8.)

---

## 1. Document architecture and acceptance criteria

| # | Section | Key question it answers | Acceptance criteria (checkable) | Evidence required |
|---|---|---|---|---|
| 1 | **Product principles and pedagogy map** | Which learning designs shape which features? | Table maps each of the six wiki pedagogies to named features and to named risks for minors; every feature in §2 to §7 cites at least one source or says "our own design"; no claim of effectiveness | Links to the six wiki pages; claims in `claims.md` |
| 2 | **Skill taxonomy ("H&C catalogue")** | What is taught and how is it named, practised and graded? | Domains and habits defined with: name, hashtag-style tag, one-line definition, level descriptors (novice to fluent), at least 3 reps across **different contexts**, a cross-context rubric; MVP ships **2 domains, ≥ 20 habits, ≥ 60 reps**; each habit reviewed by one human who is not the author | Review log in `decisions.md`; Minerva sources [C-001, C-002] |
| 3 | **Baseline and check-in assessments** | How does a learner see where they start and whether they grow? | Each baseline construct has an instrument with a **confirmed licence** or a self-developed item set flagged *experimental*; scoring rules written and unit-tested; parallel forms or re-test caveats shown; results framed developmental, never as labels; psychometrician reviewed before practitioners see scores | Licence notes [C-007]; test results; reviewer note |
| 4 | **Daily practice engine** | What does a learner do today, and why? | A "workout" of 1 to 3 reps (5 to 15 minutes) is chosen by a documented rule from baseline gaps, spaced repetition and difficulty adaptation; a learner can swap or skip; works with **no AI** as a fallback; streak logic defined without punishing misses | Rule document; unit tests; fallback demo |
| 5 | **AI Challenger (Claude)** | How does AI challenge without doing the thinking? | Defined modes (Socratic, role-play, devil's advocate, rubric feedback); age-banded system prompts in version control; learner is told it is AI; no completed answers to graded-style tasks; distress escalation message; server-side only; per-learner cap and caching; an eval set (≥ 30 prompts across modes and age bands) passed before release | Prompt files; eval results; cost telemetry |
| 6 | **Projects and peer review** (Phase 2 unless D1/D5 change) | How do skills transfer to real work and with peers? | Challenge cycle in CBL form (big idea, essential question, challenge) and a PBL "public product" step; peer-review credits for adults; moderated and anonymised for minors or switched off | Design note; moderation rules |
| 7 | **Analytics: learner and practitioner** | How do they see real progress, honestly? | Learner view: baseline vs now, skill profile, streak, reflections timeline, next step. Practitioner view: cohort distribution, stalled learners, weakest skills, export. Rules: cohort charts show only for **n ≥ 8** [PROPOSED]; uncertainty and caveats shown; no individual ranking of minors; no cross-cohort comparison by default | Spec of every metric (definition, formula, caveat); tests |
| 8 | **Architecture and data model** | How is it built on our stack, and where do secrets and data live? | Components and routes listed; every table has RLS written and tested; Claude key lives only in server-side secrets; migrations are versioned; no PII in logs or prompts beyond what the spec lists | Schema and RLS tests; threat model note |
| 9 | **Privacy, consent and safety** | How do we avoid harm? | Data inventory; retention periods; consent records; parental or school consent flow before any minor; data export and delete; incident process; safeguarding adviser sign-off recorded in `4_review.md` | Adviser sign-off; legal reading [C-006] |
| 10 | **Experience, brand and accessibility** | What does it feel like, and who might be left out? | Mobile-first; first practice screen under 3 s on a mid-range phone; WCAG 2.1 AA target; copy uses full Prakamya meaning; tagline draft present; low-bandwidth mode; non-AI fallback | Lighthouse and manual a11y check; copy review |
| 11 | **Evaluation and pilot design** | How will we know it works, and what will we stop doing? | Pre-set metrics and thresholds from H1 to H7; comparison design for H2; consent for research use; decision rules (continue, change, stop) | Pilot protocol; thresholds approved by human gate |
| 12 | **Build plan and milestones** | In what order, and with what tests first? | Phases below (§6), each with a done-test; tests for scoring and analytics written **before** the code | Plan; test files |

## 2. Detailed product specification

### 2.1 Principles and pedagogy map (section 1)
| Pedagogy (repo wiki) | What we take | Feature | Caution |
|---|---|---|---|
| **Minerva** (H&Cs, 4 core competencies, cross-context grading) | Name each skill; teach it explicitly; assess how well it is applied in *new* contexts | Taxonomy of Habits and Concepts with tags; same habit practised across several contexts; cross-context rubric | Minerva's evidence is its own; designed for university students; we do not copy their catalogue |
| **École 42** (peer review, XP, skill tree, "piscine") | Peer review as learning; visible progression; an immersive start | Skill tree view; 2-week "piscine" onboarding sprint; **peer-review credits** (Phase 2) | Peer review among minors needs moderation or must be off; "piscine" stress model is not for school students |
| **Kolb** (experience, reflection, conceptualise, experiment) | Every rep ends with reflection and a rule-of-thumb | Rep structure: do, reflect, name the rule, try again | Reflection quality must be assessed, not assumed |
| **Knowles / heutagogy** (need-to-know, self-direction, double-loop) | Show *why*; learner chooses; reflect on the assumption, not only the task | "Why this rep" line; choice of workout; double-loop reflection prompt | Andragogy describes adults; for school students use **scaffolded** autonomy, not full self-determination |
| **Aalborg / Gold Standard PBL** (authentic problem, critique and revision, public product) | Sustained project with feedback | Optional capstone project (Phase 2) with critique cycle | Public products need privacy review; no public minor profiles |
| **Challenge-Based Learning** (big idea, essential question, challenge) | A frame for self-chosen real challenges | "Taking Charge" challenge cycles | Keep scope small; guiding questions, not lectures |
| **Prakamya (our philosophy)** | Discernment of *what is worth wanting*, for the good of all | A "What is worth wanting?" reflection strand; community-benefit prompts in challenges; copy | Not a pedagogy source; keep it a reflective practice, not doctrine |

### 2.2 Skill taxonomy (section 2)
- **Structure:** Domain → Skill → Habit/Concept (H&C) → Rep.
- **Domains (inside-out ladder):** D1 Self-Regulation; D2 Taking Charge (Agency); D3 Thinking; D4 Human-Centric (creativity, communication, collaboration); D5 AI-Era (human expert in the loop).
- **MVP:** D1 and D2 only. Target ≥ 20 habits and ≥ 60 reps, each with level descriptors (e.g. Novice, Developing, Fluent) and a rubric.
- **Hashtag-style tags** for habits (for example `#pause`, `#nextstep`, `#rightquestion`) are *our own* names; do not reuse Minerva's tag names without checking licence and fit.
- **Dependency:** earlier rungs are recommended, not locked. The UI shows the ladder and suggests the next rung.
- **Cross-context rule:** every habit has reps in at least three contexts (for example study, relationships, work or community) so transfer can be assessed (H5).
- **Content provenance:** each rep records author, reviewer, source, and `validation_status` (`draft`, `reviewed`, `experimental`).

### 2.3 Baseline and check-ins (section 3)
- **Constructs for MVP (candidate):** self-regulation, self-efficacy or agency, perseverance, growth mindset. Final list is a decision for the psychometrician (Q3, Q8).
- **Instruments:** only those with a **confirmed licence** that permits our use (open, public domain, or granted in writing). Candidates to check, **not yet verified**: IPIP-derived scales, the Brief Resilience Scale, General Self-Efficacy scale, Grit-S [C-007]. Anything with no clear licence is not used; a self-developed item set is marked *experimental* and not used for any comparison across people.
- **Scoring:** implemented as pure, unit-tested functions; item reversals, missing-data handling and score ranges are documented. No norms or "percentiles" until we have a validated reference sample.
- **Re-measurement:** a check-in every 4 weeks by default; show change with a caution about practice effects and self-report bias.
- **Framing:** "where you are now", never "your type". No clinical terms. A short, plain statement of purpose and consent before every assessment.

### 2.4 Daily practice engine (section 4)
- **Workout generator** (pure function, documented): inputs are the baseline gaps, last 14 days of reps, spaced-repetition due dates and chosen goal; output is 1 to 3 reps for 5 to 15 minutes.
- **Difficulty adaptation:** move up a level after two successful reps (rubric self-check plus Challenger or peer rating), down after two struggles; always allow manual choice.
- **Streaks:** weekly consistency target (for example 4 of 7 days) rather than an unbroken daily chain; one "rest day" per week with no penalty. This is a design choice [PROPOSED], tested in H1.
- **Rep format:** short prompt, action, reflection (Kolb), rule-of-thumb, and optional Challenger turn.
- **Fallback:** every rep must work without AI. When the AI cap is reached the app switches to the static version.

### 2.5 AI Challenger (section 5)
- **Modes:** (1) Socratic questioning, (2) role-play for communication, (3) devil's advocate for thinking, (4) rubric-based feedback on a reflection.
- **Behavioural rules (in the system prompt, in version control):** ask before telling; never write the learner's final answer for a graded-style task; give feedback against a visible rubric; say it is AI; stay inside the rep's topic; refuse unsafe or off-topic requests politely.
- **Age bands:** separate prompts and limits for under-13 (not supported in MVP), 13 to 17 (only after safeguarding sign-off), and 18+. Content filters on input and output.
- **Distress handling:** if the learner writes signs of serious distress, the Challenger stops the exercise, shows a plain, supportive message and points to a trusted adult or local helpline resource, and the event is logged without personal content. It does not give clinical advice.
- **Server-side only:** the Claude API key lives in server-side secrets. The browser never sees it. The server verifies the Supabase session (JWT) and checks the per-learner cap before every call.
- **Cost control:** per-learner daily and monthly token budget; cache static feedback; log token use, not text, by default; model choice is a configuration value (D6).
- **Evals before release:** a fixed set of at least 30 test prompts across modes and age bands, including adversarial ones (asking for the answer, jailbreaks, sensitive disclosures); pass criteria set before running.

### 2.6 Projects and peer review (section 6)
- **Phase 2.** For adults: peer-review credits (spend credits to get a review, earn credits by reviewing) with a quality rubric and spot checks. For minors: off by default; if used, moderated and anonymised and only within a school-sponsored cohort.
- **Capstone challenge:** a CBL-style cycle (big idea, essential question, challenge, guiding questions, solution, publish, reflect) with a public-product step only for adults who opt in.

### 2.7 Analytics (section 7)
- **Learner view:** baseline vs now (with caveats), skill profile, days practised, streak (weekly), reflections timeline, a single "next step".
- **Practitioner view:** cohort distribution by skill, list of learners who have stalled (no practice in N days, N set in D-defaults), weakest skills across the cohort, engagement trend, export (CSV).
- **Metric definitions:** every metric has a written definition, formula, minimum sample and caveat in `docs/metrics.md` (to be created in Stage 3).
- **Privacy rules:** cohort aggregates only when n ≥ 8 [PROPOSED]; practitioners see individual detail only where consent allows; learners can see who can see their data; minors' individual data visible only to their school-sponsored practitioner.
- **Honesty:** no league tables of individuals; show confidence or range where scores are used; label "self-reported".

### 2.8 Architecture and data model (section 8)
- **Front end:** a new `/prodigym` area inside the existing `web/` app (Vite, React, TypeScript, Tailwind, Radix, react-router, react-query). Reuse `AuthContext.tsx` and `lib/supabase.ts`.
- **Back end:** Supabase (Postgres, Auth, RLS). Add a **server-side function** for Claude calls. Default: a Supabase Edge Function (D4); alternative: a Vercel serverless function.
- **Tables (new, namespaced `pg_` or schema `prodigym`):** `pg_profiles`, `pg_cohorts`, `pg_cohort_members`, `pg_consents`, `pg_skills`, `pg_habits`, `pg_reps`, `pg_instruments`, `pg_instrument_items`, `pg_assessments`, `pg_responses`, `pg_scores`, `pg_workouts`, `pg_attempts`, `pg_reflections`, `pg_ai_events` (metadata only), `pg_analytics_snapshots`, `pg_audit_log`.
- **RLS:** learners read and write only their rows; practitioners read cohort rows only for cohorts they own and only for consented fields; admins manage content; no direct client access to `pg_ai_events` text. Each policy has a test.
- **Roles:** learner, practitioner, content-reviewer, admin. Existing `users` table is reused for identity where possible; do not break existing sites (`aihub`, `learning-hub`).
- **Deployment:** Vercel preview per change; migrations applied through a reviewed script; secrets only in Vercel and Supabase settings.
- **Existing-code check:** read `AuthContext.tsx`, `Join.tsx`, `MemberPortal.tsx` and `supabase/schema.sql` first; extend, do not duplicate.

### 2.9 Privacy, consent and safety (section 9)
- **Data minimisation:** name, email, role, age band, cohort, responses, reflections, practice events. No contacts, location or device ID beyond what auth needs.
- **Consent:** plain-language notice and recorded consent before assessments; separate consent for research use of anonymised data; for minors, parental or school consent before onboarding. The legal basis (including India's DPDP Act 2023 and rules) must be confirmed by a qualified adviser first [C-006, Q5].
- **Rights:** learner can export and delete their data; deletion removes rows and AI-event metadata.
- **Retention:** reflections and responses kept only while the account is active plus a stated period [PROPOSED 12 months]; analytics snapshots are aggregated and anonymised.
- **Incident process:** named contact, 72-hour internal review target [PROPOSED], notification as the law requires.
- **Safeguarding:** a named safeguarding adviser reviews flows for minors before any school pilot; report button on every AI turn.

### 2.10 Experience, brand and accessibility (section 10)
- **Routes (draft):** `/prodigym` (home), `/prodigym/start` (baseline), `/prodigym/today` (workout), `/prodigym/progress`, `/prodigym/library`, `/prodigym/practitioner`, `/prodigym/privacy`.
- **Tone:** warm, short, non-judgmental. Language like "reps", "workout", "muscle groups" is the gym metaphor; do not shame misses.
- **Brand:** PROdiGYM with tagline draft "Everyone can be a prodigy, with AI and practice." Prakamya appears as "Our philosophy" with its full meaning. No use of "Brain Gym" as a name [C-009].
- **Accessibility and inclusion:** keyboard and screen-reader support; plain-language text; low-bandwidth mode; English first, structure ready for Indian languages.

### 2.11 Evaluation and pilot (section 11)
- **Pilot 0:** 3 cohorts (one school with sponsor only if safeguarding sign-off is complete, one college, one professional group), 8 weeks, with a comparison arm for H2 (waitlist or delayed start) where possible.
- **Measures:** activation, retention, days practised, change on baseline constructs, rep reflection quality (blind rubric), Challenger usefulness, practitioner views, cost per active learner, incidents.
- **Decision rules:** continue, change, or stop, set before the pilot starts and approved by the human gate.

## 3. Voice, tone, reading level, length
- Learner-facing copy: plain English, grade 8 reading level, one idea per screen.
- Evidence-facing documents: rigorous and candid; no hype; plainly mark unverified claims.
- Code: typed (TypeScript), small modules, comments only where intent is not obvious.

## 4. Non-goals
- Therapy, diagnosis, clinical scales used as clinical tools.
- Public learner profiles or open social features.
- Full 100+ habit catalogue, voice practice, multilingual content and mentor marketplace in the MVP.
- Using scores for admissions, hiring or grading.
- Programmatic multi-agent orchestration for *document review* (the existing protocol stays manual).

## 5. Decisions needed before locking, with defaults
A question that blocks the spec should not stay a question. Each has a default so drafting can proceed. Deadlines are **[PROPOSED]** for Sanjay to set.
| ID | Decision | Owner | Deadline | Default if undecided | Cost of the default being wrong |
|---|---|---|---|---|---|
| D1 | Who can use the MVP: adults only, or minors too? | Sanjay | before spec lock | **18+ only at launch;** school students only through a school-sponsored pilot after safeguarding sign-off | Slower school reach; minimal harm risk |
| D2 | MVP scope: which two domains first? | Sanjay | before spec lock | D1 Self-Regulation and D2 Taking Charge | Rework if pilot partners need Communication first |
| D3 | Where does it live? | Sanjay | before Stage 3 | Path `bossofai.org/prodigym` inside `web/` | Small cost to move to a subdomain later |
| D4 | Where does the Claude call run? | Sanjay | before Stage 3 | Supabase Edge Function (close to auth and data) | Moderate rework if Vercel functions are preferred |
| D5 | Peer review in MVP? | Sanjay | before spec lock | Not in MVP; Phase 2 for adults only | Lost engagement benefit if H6 were true |
| D6 | AI budget, per-learner cap and model | Sanjay | before Stage 3 | Daily and monthly caps set low; model set by config; non-AI fallback always on | Weaker Challenger if cap too low |
| D7 | Brand: product PROdiGYM, philosophy Prakamya, tagline text | Sanjay | before launch | As recorded in `0_context.md` | Rebrand cost; domain and trademark checks needed |
| D8 | Confirm that the product may call Claude despite AGENTS.md's manual-only rule for agent review | Sanjay | before Stage 3 | Yes, product calls are allowed; the rule applies to Loop C only | Policy rework |
| D9 | Content authoring model | Sanjay | before Stage 3 | AI-drafted, human-reviewed, each habit has one named human reviewer | Slower content if reviewers are scarce |
| D10 | Minimum cohort size for aggregates (n) | Sanjay, psychometrician | before Stage 3 | 8 | Too-small cohorts hide data; too-large frustrates teachers |
| D11 | Retention period for responses and reflections | Sanjay, legal adviser | before any user data is stored | 12 months after last activity | Compliance risk if the law requires less |

## 6. Build plan and milestones (section 12)
Phases map to the `intent.md` Done layers. Every phase starts with tests for scoring and analytics logic.
| Phase | Deliverable | Done-test |
|---|---|---|
| **P0 Discovery** | Repo audit of auth, schema, pages; instrument licence check; benchmark of 5 offerings (Q4); habit set v0 for D1 and D2 | Notes committed; claims updated |
| **P1 Core loop** | Profiles, roles, consent, baseline (1 to 2 constructs), workout generator, reps, weekly streak | A new learner can baseline, do a workout, see progress |
| **P2 AI Challenger** | Edge function, prompts, age bands, cap, filter, evals | Eval set passes; cost cap works; fallback works |
| **P3 Analytics** | Learner and practitioner dashboards, check-ins, exports | Metric definitions tested; n-threshold enforced |
| **P4 Hardening** | RLS tests, security review, accessibility pass, privacy pages, incident process | Stage 4 Heavy verification ready |
| **P5 Pilot** | Pilot 0 with partners | Pre-set thresholds read and decisions recorded |
| **P6 Scale (later)** | Catalogue, peer review, languages | Out of MVP |

## 7. Verification plan
- **Stakes level and why:** this spec is **Light** (a plan, not binding). The built product is **Heavy** (minors, psychometric and reflective data, an AI model, public deployment).
- **Panel lenses (spec, Light):** Adversary; Pedagogy and psychometrics.
- **Panel lenses (product, Heavy):** Adversary; Grounding Auditor; Pedagogy and psychometrics; Child safety and data protection; Security (RLS, secrets, prompt injection); Equity and access; Cost and operations.
- **Models/harnesses planned:** at least one reviewer on a different model or harness from the Author (the Author is Claude).
- **Round cap and revision cap:** protocol defaults (Light 2 per issue; Heavy 5 per issue; 3 revision cycles).
- **What a Critical issue would be:** any path where a minor's data is exposed or collected without valid consent; a learner able to read another learner's data; the Claude key reachable from the browser; AI that completes a graded-style task for the learner; a score shown as a label or diagnosis; an unverified effectiveness claim shown to users; a psychometric instrument used without a confirmed licence; a contradiction with `1_intent.md`.
- **Human gate:** Sanjay plus the external reviewers listed in `0_context.md` §1 (psychometrician, safeguarding adviser, practitioner). Pending.
- **Not yet done:** nothing in this spec has been independently verified. Only the author's self-check has been done.
