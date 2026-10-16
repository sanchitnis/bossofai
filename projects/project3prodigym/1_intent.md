---
project: project3prodigym
stage: 1-plan
artifact: intent
version: v1
owner: Sanjay
created: 2026-10-16
status: draft
tags: [prodigym, brain-gym, habits, psychometrics, ai-practice, stage-1]
---

# Intent: PROdiGYM, the Brain Gym

> **Verification**: Light loop (see [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md)). Not yet run. Only a single-agent self-check has been done. Record the outcome in `deliberation_board.md`.

## 1. Problem / Opportunity
- Schools, colleges and workplaces teach content far more than they teach how to run one's own mind: self-regulation, taking charge of one's life, and the human-centric skills of creativity, communication and collaboration. This is Sanjay's founding observation and is **unverified as a measured gap** [C-004].
- Skill-building offered as a one-off workshop or course gives exposure, not repetition. The belief that habits need repeated, spaced practice is plausible and widely held, but we have not yet cited the learning-science sources [C-005].
- Learners rarely have a **baseline**, so improvement cannot be shown to the learner, the teacher or the institution.
- Minerva University shows that a skill taxonomy can be taught explicitly: its first year is four Cornerstone courses [C-001] built around more than 100 named habits of mind and foundational concepts [C-002]. This is *inspiration*, not evidence that such a design works for our audiences.
- AI makes routine cognitive work cheap, so judgment, self-direction and collaboration become the scarce human assets. This is a premise of Boss of AI (see [`intent.md`](../../intent.md)), not something this project proves.

## 2. Why this, why us, why now
- **Alternatives and gaps (not yet benchmarked, see Q4):** life-skill and social-emotional curricula, habit-tracking apps, coaching apps, MOOCs on soft skills. Spec §1 requires a sourced benchmark of at least five before any claim of "nothing like this exists".
- **What we bring:** a repo-grounded pedagogy base (Minerva, École 42, Kolb, Knowles, PBL, CBL), an existing site, Supabase and Vercel set-up, a human-in-the-loop philosophy (HEITL), and the **Prakamya** frame: build the discernment to choose what is worth wanting, for the good of all, not only skill for personal gain.
- **What changed:** AI can now act as an unlimited, patient, *challenging* practice partner, which was not affordable before. That only helps if it makes the learner think harder, not less (see non-negotiables).

## 3. Target audience & stakeholders
- **Beneficiaries:** school students, college students, working professionals (the learners).
- **Decision-makers / users with authority:** practitioners (teachers, faculty, coaches, L&D leads) and institutions who adopt it for a cohort.
- **Could be harmed:** minors (data exposure, inappropriate AI output, labelling by scores); anyone for whom a "low score" becomes a label; practitioners over-trusting weak statistics.
- **Must be consulted before pilots:** a psychologist/psychometrician, a child-safeguarding and data-protection adviser, parents or guardians of any minors, and at least one school or college practitioner who is not a co-author.
- **Funder / sponsor:** the PROdiGYM foundation (concept note in progress; no budget recorded here).

## 4. Theory of change, as testable hypotheses
| # | If we do... | then... | We will know by... | Evidence so far |
|---|---|---|---|---|
| H1 | give each learner a baseline and a visible skill profile that updates | more learners keep practising (retention) than with practice alone | [PROPOSED] ≥ 40% of activated learners practise in week 1 and ≥ 20% still practise in week 5; compare to a no-profile variant | None |
| H2 | learners do a 5 to 15 minute daily workout for 8 weeks | they improve on at least one baseline construct more than a comparison group who did not practise | [PROPOSED] ≥ 60% improve on ≥ 1 construct; effect exceeds comparison group by a pre-set margin; needs a pilot comparison design | None (assumption A1) |
| H3 | the Claude-powered Challenger uses Socratic and role-play modes with a rubric | reflection and reasoning quality is higher than with static prompts, as scored blind against a rubric | A/B in pilot; blind scoring by two humans, agreement reported | None |
| H4 | practitioners see cohort and stalled-learner analytics weekly | they intervene earlier and more learners return after a stall | [PROPOSED] ≥ 70% of active practitioners view weekly; re-engagement rate after a nudge | None |
| H5 | skills are taught as named, transferable habits (Minerva-style) practised across varied contexts | learners apply a habit in a novel context (transfer) better than in a single-context control | Cross-context rubric (see spec §2); pilot | Minerva design only; no effect evidence [C-002] |
| H6 | learners earn credit by reviewing peers' work (École 42-style) | review quality and persistence rise for adult learners | Phase 2 pilot; peer-review quality rubric | École 42 description only [C-008] |
| H7 | AI use is capped per learner with non-AI fallbacks | cost per active learner stays below the cap while quality holds | Cost telemetry; cap set in D6 | None |

## 5. Definition of Done
Keep three things apart. Mixing them hides failure.
- **Deliverable done** (the product exists and is verified):
  - `2_spec.md` approved by a human, then the MVP built as in the spec, deployed at `bossofai.org/prodigym`, and passing the Stage 4 Heavy verification with an independent human gate (including safeguarding and psychometric reviewers).
  - Scoring and analytics code has automated tests that run before release.
- **Outcome achieved** (the world changed in a measurable way, with a number and a date): to be set when pilots are agreed. **[PROPOSED]** after an 8-week pilot with at least three cohorts (one school with sponsor, one college, one professional group): the H1, H2 and H4 thresholds above are met, with no privacy or safety incident. Date: set when pilot dates are fixed (Q2).
- **Early signals** (cheap indicators within weeks of launch): activation rate, days practised per week, share who complete a baseline, share who return after day 7, Challenger helpfulness rating, practitioner weekly views, AI cost per active learner.

## 6. Constraints, non-negotiables, non-goals
- **Non-negotiables:**
  1. **Privacy and child safety first.** Minimum data, row-level security on every table, verified consent for minors, no sale or sharing of identifiable data.
  2. **Developmental, not diagnostic.** No clinical claims, no labels, no high-stakes use (admissions, hiring, grading) of scores.
  3. **The human does the thinking.** The Challenger asks, challenges and gives feedback; it does not do the learner's task.
  4. **Honest analytics.** Show uncertainty and small-sample caveats; no vanity metrics; no causal claims without a comparison design.
  5. **Claude is called from the server only,** with per-learner cost caps and non-AI fallbacks.
  6. **Prakamya means discernment, not wish-fulfilment.** Public copy must use the full meaning.
- **Non-goals** (check that no other file in the repo contradicts these):
  - Therapy, diagnosis or clinical assessment.
  - A public social network or public learner profiles.
  - A full 100+ habit catalogue in the MVP.
  - Voice, multilingual and mentor-marketplace features in the MVP.
  - Claiming improvement numbers before pilot evidence.

## 7. Risks and assumptions
| ID | Risk or assumption | Likelihood | Impact | Mitigation or test |
|---|---|---|---|---|
| K1 | Retention collapses after novelty fades (habit apps often do) | High | High | Very short workouts, practitioner nudges, relevance to real goals; H1 test; stop-and-redesign rule if week-5 retention is below the proposed threshold |
| K2 | Unvalidated or unlicensed psychometric instruments | Medium | High | Use instruments with confirmed licences [C-007]; label our own items "experimental"; psychometrician review before scores are shown to practitioners |
| K3 | Breach or misuse of minors' data | Low-Medium | Critical | Data minimisation, RLS, consent records, adult-first launch (D1), safeguarding adviser sign-off before any school pilot |
| K4 | AI output unsuitable, biased or too helpful (does the work for the learner) | Medium | High | Age-banded system prompts, content filters, rubric-based evals before release, report button, human review of templates |
| K5 | AI cost overrun | Medium | Medium | Per-learner cap, caching, non-AI fallback reps (D6) |
| K6 | Over-claiming impact; self-report bias and practice effects on repeated tests | High | High | Show uncertainty, pilot with comparison, no causal language, parallel test forms |
| K7 | Scope sprawl towards a 100+ habit catalogue | High | Medium | MVP ships two domains and a small, reviewed habit set; grow by pathway |
| K8 | Single human gate (Sanjay alone) | High | High | Add external reviewers before Stage 4 (see `0_context.md` §1) |
| K9 | Brand confusion ("Brain Gym" trademark, Prakamya misread) | Medium | Medium | Keep PROdiGYM; use full Prakamya meaning in copy; trademark check [C-009] |

## 8. Open questions
Every question names an owner and a deadline, and says what the answer would change. Deadlines are **[PROPOSED]** until Sanjay sets them.
| ID | Question | Owner | By when | What changes depending on the answer |
|---|---|---|---|---|
| Q1 | Which school did you mean by "150 to 160 skills and 5 courses in year one"? (Minerva shows four Cornerstones and 100+ H&Cs, C-001/C-002.) | Sanjay | before spec lock | Scale target and framing of the taxonomy |
| Q2 | Which pilot partners and age bands (school, college, professionals), and when? | Sanjay | [PROPOSED] 2026-11-15 | Whether minors are in the first pilot; consent flow; content tone |
| Q3 | Who is the psychologist or psychometrician reviewer? | Sanjay | before Stage 3 | Whether baseline scores can be shown to practitioners at all |
| Q4 | What does a sourced benchmark of at least five existing offerings show? | Agent, then Sanjay | before spec lock | The "why us" claim and feature priorities |
| Q5 | Which legal reading applies to children's data (India DPDP 2023 and rules, plus any other region), per a qualified adviser? | Sanjay, legal adviser | before any minor is onboarded [C-006] | Consent design; whether school students can use it at all in MVP |
| Q6 | What is the monthly AI budget and per-learner cap? | Sanjay | before Stage 3 | Challenger design, caching, fallbacks (D6) |
| Q7 | Who writes and reviews habit content (Sanjay, FabGurus, educators, AI with human review)? | Sanjay | before Stage 3 | Content pipeline and review workflow |
| Q8 | Which instruments (with confirmed licence) anchor the first baseline? | Psychometrician (Q3) | before Stage 3 | Baseline design [C-007] |

## 9. Anchors
- [`projects/project3prodigym/0_context.md`](./0_context.md), [`claims.md`](./claims.md), [`decisions.md`](./decisions.md)
- Boss of AI intent: [`intent.md`](../../intent.md)
- Pedagogies: [Minerva](../../wiki/learning_pedagogies/minerva_project_hcas.md), [École 42](../../wiki/learning_pedagogies/ecole_42_peer_learning.md), [Kolb](../../wiki/learning_pedagogies/kolb_experiential_learning.md), [Knowles and heutagogy](../../wiki/learning_pedagogies/knowles_andragogy_heutagogy.md), [Aalborg and Gold Standard PBL](../../wiki/learning_pedagogies/aalborg_bie_pbl.md), [Challenge-Based Learning](../../wiki/learning_pedagogies/challenge_based_learning.md)
- Minerva curriculum: <https://www.minerva.edu/four-year-curriculum> (accessed 2026-10-16); Minerva H&C introduction PDF: <https://www.minerva.edu/public/media/enrollment-center/Minerva-HCs-Intro.pdf> (accessed 2026-10-16)
