---
project: project3prodigym
stage: 1-plan
artifact: intent
version: v2
owner: Sanjay
created: 2026-10-16
status: draft
tags: [prodigym, brain-gym, habits, taking-charge, psychometrics, peer-review, coaching, stage-1]
---

# Intent: PROdiGYM, the brain gym

> **Verification**: Light loop (see [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md)). Not yet run. Only a single-agent self-check has been done. Record the outcome in `deliberation_board.md`.
>
> **v2 (2026-10-16):** applies Sanjay's responses (DR-004 to DR-012): adult-only Phase 1; MVP domain "Taking Charge of Life" with Atomic-Habits-style methods; peer review in Phase 1; no programmatic AI calls in current releases (coaching via skill files); wiki pages added for five more pedagogies.

## 1. Problem / Opportunity
- Schools, colleges and workplaces teach content far more than they teach how to run one's own life: self-regulation, taking charge, and later thinking and human-centric skills. This is Sanjay's founding observation and is **unverified as a measured gap** [C-004].
- One-off workshops give exposure, not repetition. Habit research suggests change is slow and uneven: in one study of 82 undergraduates, reaching habit-level automaticity took on average about 66 days, ranging from 18 to a predicted 254, and about half had not got there by day 84 [C-012]. A short programme that promises quick habit change would over-promise.
- Learners rarely have a **baseline**, so improvement cannot be shown to the learner, the coach or the sponsor.
- Minerva University shows that a skill taxonomy can be taught explicitly: its first year is four Cornerstone courses [C-001] built around more than 100 named habits of mind and foundational concepts [C-002]. This is *inspiration for structure*, not evidence that such a design works for our audiences. Minerva's materials are copyrighted [C-013], so we build our own catalogue.
- AI makes routine cognitive work cheap, so judgment, self-direction and collaboration become scarce. This is a premise of Boss of AI (see [`intent.md`](../../intent.md)), not something this project proves.

## 2. Why this, why us, why now
- **Alternatives and gaps (not yet benchmarked, Q4):** life-skill and social-emotional curricula, habit-tracking and coaching apps, MOOCs on soft skills, habit books and courses. Spec §1 requires a sourced benchmark of at least five before any claim of "nothing like this exists".
- **What we bring:** a repo-grounded pedagogy and technique base (Minerva, École 42, Acton, Nai Talim, Santiniketan, Kolb, Knowles, PBL, CBL; Atomic-Habits-style behaviour design; AI coaching), an existing site with Supabase and Vercel, the HEITL philosophy, and the **Prakamya** frame: build the discernment to choose what is worth wanting, for the good of all.
- **A distinctive cost design:** coaching by an AI partner **without us paying API costs**, through skill files that learners use in their own chatbot, with an in-product coach added later once there are customers (DR-007).
- **What changed:** capable chatbots are now widely available to learners. That helps only if the coaching makes the learner think and act, rather than think less. One 10-month randomised study of an AI chatbot coach found goal attainment comparable to human coaches [C-015]; we have seen only its abstract, so treat it as encouraging, not settled.

## 3. Target audience & stakeholders
- **Phase 1 learners (adults, 18+):** college students who are adults, and working professionals.
- **Practitioners:** coaches, faculty and L&D leads supporting adult cohorts.
- **Later (Phase 2 or 3):** school students, **through their teachers and parents**, only after children's-data rules are confirmed and a safeguarding adviser has signed off [C-006].
- **Decision-makers:** practitioners and institutions that adopt it for a cohort.
- **Could be harmed:** any user whose reflections or scores leak or are labelled; participants in peer review (harassment, exposure of personal detail); anyone under 18 who gets in by self-declaring as an adult (K11); practitioners over-trusting weak statistics.
- **Must be consulted before the Phase 1 launch:** the reviewers listed in `0_context.md` §1.
- **Sponsor:** the PROdiGYM foundation (concept note in progress; no budget recorded here).

## 4. Theory of change, as testable hypotheses
| # | If we do... | then... | We will know by... | Evidence so far |
|---|---|---|---|---|
| H1 | give each learner a baseline, a visible skill profile and weekly consistency feedback | more learners keep practising than with practice alone | [PROPOSED] ≥ 40% of activated learners practise in week 1 and ≥ 20% still in week 5; compare with a variant without the profile | None |
| H2 | learners make a habit plan and do a 5 to 15 minute workout most days | they improve on at least one baseline construct more than a comparison group; self-reported automaticity rises | First read at **8 weeks**, habit claims at **12 weeks or more** (habit research suggests many need longer [C-012]); [PROPOSED] ≥ 60% improve on ≥ 1 construct; comparison design needed | Habit-research timing only |
| H3 | learners use the PROdiGYM coach pack (skill files) in their own chatbot | their reflections and next-step plans are of higher quality than with static prompts, scored blind | Pilot A/B; two blind human scorers; agreement reported | None (AI coaching study only partly relevant, C-015) |
| H4 | practitioners see cohort and stalled-learner analytics weekly | they intervene earlier and more learners return after a stall | [PROPOSED] ≥ 70% of active practitioners view weekly; re-engagement after a nudge | None |
| H5 | skills are taught as named, transferable habits practised across several contexts | learners apply a habit in a new context better than in a single-context control | Cross-context rubric (spec §2.2); pilot | Minerva design only; no effect evidence [C-002] |
| H6 | learners earn credits by reviewing peers' shared work (École 42-style) | review quality, persistence and learning rise | Review-quality rubric; persistence compared with learners who do not review | École 42 description only [C-008] |
| H7 | learners pair with an accountability partner or small squad (Acton-style) | they practise more consistently than learners without one | Days practised per week; return after a missed week | Acton description only [C-017] |

*(Cost per active learner becomes a hypothesis only in Phase 2, when API calls arrive. In Phase 1 the cost is hosting, and AI cost to us is zero by design.)*

## 5. Definition of Done
Keep three things apart. Mixing them hides failure.
- **Deliverable done** (the product exists and is verified): `2_spec.md` approved by a human; the **Phase 1 MVP** built to the spec, deployed at `bossofai.org/prodigym`, passing Stage 4 verification (**Standard**, proposed) with the named reviewers; scoring and analytics code covered by automated tests; **no programmatic LLM API calls anywhere in the release**; originality and licence checks passed (no copied Minerva or book content; instrument licences confirmed).
- **Outcome achieved** (the world changed in a measurable way, with a number and a date): to be set when pilot dates are fixed (Q2). **[PROPOSED]** after a pilot of at least two adult cohorts (one college-age adult group, one professional group): H1, H2 (at its stated windows) and H4 thresholds are met, with no privacy or safety incident.
- **Early signals** (cheap indicators within weeks of launch): activation rate, days practised per week, baseline completion, return after day 7, share of learners who complete a habit plan, peer-review completion and quality ratings, accountability-partner pairing rate, practitioner weekly views.

## 6. Constraints, non-negotiables, non-goals
- **Non-negotiables:**
  1. **Privacy first.** Minimum data, row-level security on every table, clear notice and consent, no sale or sharing of identifiable data, learner can export and delete. Build to the standard of India's DPDP Act even before every part is in force [C-006].
  2. **Adults only in Phase 1.** No children in the product until the later phase and the safeguards for it are in place.
  3. **Developmental, not diagnostic.** No clinical claims, no labels, no high-stakes use of scores.
  4. **The human does the thinking and acts.** Coaching asks and challenges; it does not do the learner's task.
  5. **Honest analytics.** Show uncertainty and small-sample caveats; label self-reported data; no causal claims without a comparison design.
  6. **No programmatic LLM API calls in current releases** (DR-007). Coaching uses skill files in the learner's own chatbot.
  7. **Originality and attribution.** Own wording and examples; credit sources; no reproduction of copyrighted text (DR-010).
  8. **Prakamya means discernment, not wish-fulfilment.** Public copy uses the full meaning.
- **Non-goals** (check that no other file in the repo contradicts these):
  - Therapy, diagnosis or clinical assessment.
  - A public social network or public learner profiles. (Peer review is private to reviewer and reviewee, and anonymised by default.)
  - The full multi-domain catalogue in Phase 1.
  - An in-product AI coach, voice practice, multilingual content and a mentor marketplace in Phase 1.
  - Claiming improvement numbers before pilot evidence.
  - Using "Brain Gym" as a name, tagline, domain or hashtag.

## 7. Risks and assumptions
| ID | Risk or assumption | Likelihood | Impact | Mitigation or test |
|---|---|---|---|---|
| K1 | Retention collapses after novelty fades | High | High | Very short workouts, accountability partners, practitioner nudges; H1 test; redesign rule if week-5 retention misses the proposed threshold |
| K2 | Unlicensed or unvalidated psychometric instruments | Medium | High | Only instruments with a confirmed licence (IPIP is public domain, C-007); others only after written permission; own items labelled *experimental*; psychometrician review |
| K3 | Breach or misuse of personal data (reflections, scores, peer-review content) | Low-Medium | High | Data minimisation, RLS, consent records, security review, privacy lawyer sign-off before launch |
| K4 | Coach-pack files give poor or unsafe coaching in a learner's chatbot | Medium | Medium | Human-run test prompts in at least two chatbots before release; clear "not therapy" text; no request for personal data; version control and a report channel |
| K5 | Learners cannot or will not use their own chatbot | Medium | Medium | Static prompts and templates inside the site; peer review and partners as human coaching |
| K6 | Over-claiming impact; self-report bias and practice effects | High | High | Show uncertainty, comparison in pilot, no causal language; **do not promise fixed-day habit formation** |
| K7 | Scope sprawl towards a full catalogue | High | Medium | Phase 1 is D1 only with about 20 habits |
| K8 | Single human gate (Sanjay alone) | High | High | Sanjay arranges the reviewers listed in `0_context.md` §1; Stage 4 records who reviewed |
| K9 | Brand confusion: "Brain Gym" is associated with a registered programme widely regarded as pseudoscience [C-009]; Prakamya misread as "get anything" | Medium | Medium | Do not use "Brain Gym" as a name or tag; use PROdiGYM; full Prakamya meaning in copy; IP adviser check |
| K10 | Learners' data in third-party chatbots is outside our control | Medium | Medium | Say so plainly; coach files never ask for personal identifiers; learner pastes back only what they choose |
| K11 | A minor self-declares as an adult | Medium | High | 18+ declaration, terms, a deactivate-and-delete process, institutional invites where possible, adviser input before launch |
| K12 | Peer-review misuse: harassment, spam, exposure of personal detail, gaming of credits | Medium | High | Anonymised handles, per-submission opt-in, reporting and blocking, quality ratings, moderation, credit limits, code of conduct, community-safety reviewer |
| K13 | Copied or too-close text from Minerva or *Atomic Habits* | Low-Medium | High | Original wording rule, reviewer check, attribution page |
| K14 | Legal timeline or content of children's-data rules changes before Phase 3 | Medium | Medium | Re-check with the legal adviser before Phase 3 [C-006] |
| K15 | Peer review needs critical mass (cold start) | High | Medium | Start with pairs and practitioner-run cohorts; reviewers can be inside the same cohort; do not depend on an open marketplace |

## 8. Open questions
Every question names an owner and a deadline, and says what the answer would change. Deadlines are **[PROPOSED]** until Sanjay sets them.
| ID | Question | Owner | By when | What changes depending on the answer |
|---|---|---|---|---|
| Q1 | ~~Which school had "150 to 160 skills and 5 courses"?~~ **Closed:** Sanjay confirmed Minerva; its own figure is "more than 100" and four Cornerstones (C-001, C-002) | Sanjay | closed 2026-10-16 | Taxonomy target stays our own (about 20 habits in Phase 1) |
| Q2 | Which adult pilot partners (college-age adults, professionals) and when? | Sanjay | [PROPOSED] 2026-11-15 | Cohort sizes, peer-review design, pilot dates |
| Q3 | Who are the named reviewers in `0_context.md` §1? | Sanjay | before Stage 4 | Whether the gate has the expertise it needs |
| Q4 | What does a sourced benchmark of at least five existing offerings show? | Agent, then Sanjay | before spec lock | The "why us" claim and feature priorities |
| Q5 | Which legal advice applies to adult users' data now, and to children's data when Phase 3 nears? | Sanjay, privacy lawyer | before launch (adults); before Phase 3 (children) | Notices, consent, retention; the Phase 3 plan [C-006] |
| Q6 | Which pedagogies and techniques in the wiki does Sanjay want actually used? | Sanjay | before spec lock | Spec §2.1 (map) and the habit catalogue (D15) |
| Q7 | Who writes and reviews habit content (Sanjay, coaches, agent drafts with human review)? | Sanjay | before Stage 3 | Content pipeline |
| Q8 | Which instruments (with confirmed licence) anchor the baseline? | Psychometrician (Q3) | before Stage 3 | Baseline design [C-007] |
| Q9 | Which chatbots must the coach pack be tested on (default: Claude.ai plus one other)? | Sanjay | before Stage 3 | Coach-pack design and test plan |

## 9. Anchors
- [`0_context.md`](./0_context.md), [`2_spec.md`](./2_spec.md), [`claims.md`](./claims.md), [`decisions.md`](./decisions.md)
- Boss of AI intent: [`intent.md`](../../intent.md)
- Pedagogies in the repo: [Minerva](../../wiki/learning_pedagogies/minerva_project_hcas.md), [École 42](../../wiki/learning_pedagogies/ecole_42_peer_learning.md), [Acton Academy](../../wiki/learning_pedagogies/acton_academy_learner_driven.md), [Nai Talim](../../wiki/learning_pedagogies/nai_talim_basic_education.md), [Santiniketan](../../wiki/learning_pedagogies/santiniketan_tagore_open_air.md), [Kolb](../../wiki/learning_pedagogies/kolb_experiential_learning.md), [Knowles and heutagogy](../../wiki/learning_pedagogies/knowles_andragogy_heutagogy.md), [PBL](../../wiki/learning_pedagogies/aalborg_bie_pbl.md), [CBL](../../wiki/learning_pedagogies/challenge_based_learning.md); also drafted but judged reference-only or light-use: [Alpha School](../../wiki/learning_pedagogies/alpha_school_2_hour_learning.md), [Khan Lab School](../../wiki/learning_pedagogies/khan_lab_school_mastery.md)
- Techniques: [Atomic Habits](../../wiki/learning_techniques/atomic_habits_behavior_design.md), [Habit-formation research](../../wiki/learning_techniques/habit_formation_research.md), [AI coaching](../../wiki/learning_techniques/ai_coaching.md)
- Minerva curriculum: <https://www.minerva.edu/four-year-curriculum> and H&C introduction PDF <https://www.minerva.edu/public/media/enrollment-center/Minerva-HCs-Intro.pdf> (both accessed 2026-10-16)
