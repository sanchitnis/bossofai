---
project: project1aigurukul
stage: 1-plan
artifact: intent
version: v2
supersedes: v1.1
owner: Sanjay
created: 2026-10-08
revised: 2026-10-09
status: revised-awaiting-verification
verification: "Round 0 only (single-agent critical pre-review, see deliberation_board.md). Independent Light loop NOT yet run."
tags: [aigurukul, teacher-training, center-of-excellence, intent, stage-1]
---

# Intent: AI-Gurukul 2.0, Center of Excellence for Teacher Training

> **How to read this version.** Items marked **[PROPOSED]** are suggestions for the human gate. Facts carry claim IDs (`[C-0xx]`) in [`claims.md`](./claims.md). v1.1 had no unsourced-claim marking, no pilot, no safeguards for minors or data, and a scale story that did not add up. The change log at the end lists what moved and why.

## 1. Problem and opportunity

**Hypothesis, not finding.** Teachers in India are meeting generative AI without structured preparation, and one-off workshops do little to change practice. `[C-101, C-102 unverified]` The claim that institutions cannot hire AI-skilled faculty `[C-103]` may hold for some institutions and not others.

**What we do not yet know:** how many teachers are already getting training (government platforms, vendor programmes, universities, peer networks) `[C-104]`; what those offerings achieve; and whether the gap is training, time, access to tools, or school policy. Before building a centre, the first job is to find out. That is why the plan below starts with a pilot.

**Root belief (a bet):** the missing piece is a learning environment built for mastery, practice and honest critique. The pilot tests this bet before anyone spends on a campus.

## 2. Stakeholders

| Stakeholder | Interest |
|---|---|
| Teachers (school and college), the primary beneficiaries | AI capability with integrity; time; recognition |
| Their students, including **minors** | Better teaching; protection from harm and from misuse of their data |
| Institutions | Capability without hiring; risk control |
| Expert Committee / assessors | Credibility, workload, independence |
| Funders, CSR, government | Risk, return, evidence |
| Boss of AI | Parent organization; method and protocol owner |

## 3. Vision and mission
Unchanged in spirit.
**Vision:** a teaching workforce that leads the AI age rather than fears it, beginning in India, with a model others can reuse.
**Mission:** train educators on AI through mastery-gated, project-based, peer-evaluated learning whose outputs are socially useful, examined by independent experts.

## 4. Hypotheses (what must be true for this to be worth scaling)

| # | If we... | then... | Known by | Evidence today |
|---|---|---|---|---|
| H1 Demand | run a pilot cohort for a defined teacher segment | enough qualified teachers apply and complete, and their institutions release them | Pilot 0 | None |
| H2 Learning | use project work with mastery gating | completers show measurably better classroom practice than a comparison group or their own baseline | Pilot 0 plus 3 months | None; the pedagogy sources inspire but are not evidence for this setting |
| H3 Assessment | use rubric-based vivas and peer-evaluation audits | independent raters agree on pass/fail beyond a threshold (inter-rater agreement) and evaluator leniency drift is detectable | Pilot 0 | None |
| H4 Economics | blend institutional, CSR and training revenue | a cohort covers a stated share of its marginal cost without charging individual teachers | after Pilot 0 | None; seed amount is a placeholder |
| H5 Safety | follow child-safety and data rules | zero incidents; every classroom deployment has consent and a school sponsor | every cohort | None |
| H6 Access | design for low bandwidth, multiple languages and a fallback to open tools | applicants from outside metros and non-English teaching contexts complete at a similar rate | Pilot 0 | None |

Thresholds are set in the spec; the human gate approves them.

## 5. Principles (non-negotiables)

The seven principles stay, with two edits and one addition.

| # | Principle | Edit |
|---|---|---|
| P1 | Learning by doing, never by lecture | Kept. Means "no level passes on attendance alone", not "no explanation ever" |
| P2 | Mastery before progression | **Clarified:** mastery of the level's stated competencies; a documented **prior-learning route** exists for experienced practitioners, assessed by the same viva. The v1 text banned all "lateral entries", which conflicted with serving experts and with Level 4 faculty recruitment |
| P3 | Peer evaluation is policed | **Reworded:** peer evaluation is audited for quality **and** for collusion, with the evaluator's own ratings compared with independent raters. Examining the quality of critiques is not an anti-gaming guarantee by itself |
| P4 | Socially useful work | Kept; project selection includes a sponsor and consent check |
| P5 | The whole person | Kept |
| P6 | Openness at the frontier | **Reworded:** open by default where a teacher's context allows, with a documented route for confidential or IP-restricted work, so openness never excludes participants |
| P7 | Educators first, sustainability always | Kept. Payer is the institution or funder, not the individual teacher |
| **P8 (new, [PROPOSED])** | **Access and safety first** | No participant is excluded by language, bandwidth or disability where reasonable adjustment is possible; no child is exposed to AI tools or has data collected without lawful consent, a school sponsor and a safeguarding review |

## 6. Requirements

R1 to R20 from v1.1 are **kept**, with these edits and six additions.

**Edited**
- **R2/R10:** gating is by demonstrated mastery verified by independent assessors, **with tiered panels and calibration** so that scale does not depend on one committee (see §9, scale arithmetic).
- **R11:** calibration is measured by inter-rater agreement and drift statistics, and is designed before launch, not after.
- **R17:** impact is measured on classroom practice and, where lawful and consented, student outcomes. Causal claims require a comparison design; otherwise outputs are reported as descriptive.
- **R18:** "tens of thousands in five years" is demoted from requirement to **planning scenario**. It stays out of funder-facing claims until the pilot shows cost and capacity (see C-107).

**Added [PROPOSED]**
- **R21 Pilot first.** A bounded Pilot 0 precedes any campus commitment or multi-city plan.
- **R22 Child safety and data protection.** Safeguarding policy, consent flow, data inventory, retention and deletion; reviewed by a qualified adviser before any classroom deployment involving students.
- **R23 Access and inclusion.** Language, bandwidth, disability and cost-of-release are addressed in the design and measured by participant mix.
- **R24 Competency framework.** Levels map to explicit competencies, aligned where relevant to existing frameworks; levels are not defined by names or durations alone. `[C-105: which frameworks apply is unverified]`
- **R25 Assessor independence and due process.** Conflict-of-interest declarations, rotation, appeals for learners, and credentials that state what they certify and what they do not.
- **R26 Tool-agnostic design.** Core curriculum must not depend on one vendor or tool; a degraded-tool fallback is documented (answers open question 7 of v1).

## 7. Definition of Done: three layers

**A. Deliverable done**
- `5_final.md` (Program Design Document) approved by Sanjay and at least one reviewer who is not a co-author.
- Heavy verification loop converged or converged with listed Known Disagreements.
- No unverified claim on the critical path; the funding ask contains no unsourced number.

**B. Pilot established** (the world is different) **[PROPOSED, 6 to 9 months from spec lock]**
- Pilot 0 run with **[PROPOSED] 24 to 30** teachers from at least 2 institutions, at least 1 non-metro.
- At least **1 written institutional commitment** (MoU or letter) per pilot institution.
- At least **3 independent assessors** have served, with COI declarations, and inter-rater agreement is reported.
- Safeguarding review and data inventory completed before any student-facing deployment.
- A published pilot report including what did not work.

**C. Early signals**
- Applications per place, completion rate, participant mix (region, language, school or college), assessor workload hours per viva, cost per completer.

## 8. Risks

| ID | Risk | L | I | Mitigation |
|---|---|---|---|---|
| G1 | Unsourced statistics presented as fact | H | H | Claims register; remove or source before funder use |
| G2 | **Viva scale**: vivas cannot scale to thousands without dilution | H | H | Tiered panels, trained assessors, sampled audit; arithmetic in §9 |
| G3 | **Harm to minors** from classroom deployments | M | H | R22, P8; no student deployment without consent and sponsor |
| G4 | **Exclusion** (language, connectivity, cost, one-week residential release) | H | M | R23, P8, part-time and regional options in spec |
| G5 | **Gaming and collusion** in peer evaluation (Goodhart) | M | H | P3 reworded; independent re-rating sample; rotate pairings |
| G6 | **Expert Committee** is a single point of failure and a conflict magnet | M | H | R25; tiered panels; term limits |
| G7 | Credential means little if not recognised | M | M | Competency mapping (R24), institutional recognition in pilot MoUs |
| G8 | Revenue mix pulls mission | M | M | Guardrails: no pay-to-pass; corporate revenue capped; guardrails in spec |
| G9 | Vendor tool changes or degrades | H | M | R26 |
| G10 | Existing offerings already meet the need | M | H | Benchmark in spec; first pilot hypothesis H1 tests demand |
| G11 | Scope: campus, curriculum, certification, research at once | H | M | Pilot first; defer campus |
| G12 | Process overhead on a small team | M | M | Light loop for low stakes |

## 9. Scale arithmetic (shows why R18 is a scenario)

Assumptions: 25,000 educators reach Level 1 over five years; each viva is 45 minutes with a 3-person panel; ignore preparation and deliberation time. Level 1 vivas alone need about **56,000 assessor-hours**. Spread across a 6 to 10 member committee, that is 5,600 to 9,400 hours each over five years, about 1,100 to 1,900 hours a year each, which is close to a full-time job per person. Levels 2 to 4 add more. **Conclusion:** one small committee cannot examine every learner at scale. A tiered model (trained assessors, sampled expert audit, calibration) is required, and the spec must say how integrity survives it. `[arithmetic only; assumptions to be revisited in the spec]`

Also: v1 says 25,000 educators lead to 5 million students, which is 200 students per teacher in total, while elsewhere it speaks of hundreds per year compounding across a career. Pick one and state the basis (C-107).

## 10. Open questions (owner, deadline, consequence)

| ID | Question | Owner | By | Default if undecided |
|---|---|---|---|---|
| G-D1 | Curriculum depth in Levels 1 and 2 | Pedagogy + AI reviewers | spec lock | Applied use, evaluation and ethics; model internals deferred to Level 3 |
| G-D2 | Viva panel composition | Sanjay + assessment expert | spec lock | Tiered: trained assessors for Levels 1 and 2, senior panel for 3 and 4, sampled audit |
| G-D3 | Rubric source | Assessment expert | spec lock | Adapt an existing rubric with attribution, then calibrate in Pilot 0 |
| G-D4 | Phase 1 campus | Sanjay | before spec lock | Rented or partner space, no dedicated campus until Pilot 0 results |
| G-D5 | Government partner | Sanjay | before Stage 5 | None named |
| G-D6 | Open-source projects for Level 3 | AI reviewer | Stage 3 | Contribute to existing projects; build only if none fit |
| G-D7 | Prior-learning route design | Pedagogy reviewer | Stage 3 | Same viva, evidence portfolio |
| G-D8 | Pilot size and site | Sanjay | spec lock | 24 to 30 teachers, two institutions |
| G-D9 | Language of delivery | Sanjay | spec lock | English plus one regional language for pilot |
| G-D10 | Who pays | Sanjay | Stage 3 | Institutions and funders, not individual teachers |

## 11. Scope boundaries
**In scope:** intent, principles, requirements, hypotheses, success measures, pilot definition, safeguards.
**Out of scope here:** implementation plans, budgets, site selection, technology stack, staffing, legal structure, partnership agreements, marketing. (v1 also listed "timelines", but the pilot needs one; timeline goes in the spec.)

## 12. How to review
Reviewers pick the lens that fits their expertise: pedagogy and assessment (P1 to P3, R2, R8, R10 to R12, H2, H3, G2, G5, G6); AI and domain (R7, R13, R14, R26, G9); child safety and data (R22, P8, G3); equity (R23, G4); finance (R19, H4, G8); sector leaders (R15 to R18, H1, G7, G10). Everyone can challenge anything.

## Change log, v1.1 to v2

| Change | Why (issue) |
|---|---|
| Problem restated as hypothesis; unknowns named | G-001, G-004, G-005 |
| Scale arithmetic added; R18 demoted to scenario; 200 vs hundreds inconsistency flagged | G-002, G-003 |
| Added R21 to R26 and principle P8 | G-005 to G-007, G-011, G-012, G-016 |
| P2, P3, P6 reworded | G-006, G-009, G-017 |
| Hypotheses H1 to H6 | G-008, G-010, G-016 |
| Done in three layers, with pilot | G-013, G-014 |
| Risks table and open questions with defaults | G-015, G-019 |
| Single source of truth: `INTENT.md` and concept note superseded | G-014 |
| Scope: timeline removed from out-of-scope | internal inconsistency |
