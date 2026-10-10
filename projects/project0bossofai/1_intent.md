---
project: project0bossofai
stage: 1-plan
artifact: intent
version: v2
supersedes: v1 (created 2026-10-08)
owner: Sanjay
created: 2026-10-08
revised: 2026-10-09
status: revised-awaiting-verification
verification: "Round 0 only (single-agent critical pre-review, see deliberation_board.md). Independent Light loop NOT yet run."
tags: [bossofai, organization, intent, stage-1]
---

# Intent: Boss of AI, Establish the Organization

> **How to read this version.** Text marked **[PROPOSED]** is a suggestion for Sanjay to accept, change or reject. Factual statements carry a claim ID such as `[C-001]`; see [`claims.md`](./claims.md) for which are verified. What changed from v1, and why, is in the change log at the end.

## 1. Problem and opportunity

Two problems are bundled here. Keeping them apart avoids a common failure: declaring victory on the second while the first is untouched.

**1a. The external problem (why the organization should exist).**
Educational institutions, educators and learners are meeting cheap, capable AI without a trusted, open, low-cost place to practise using it *well* on real problems, with expert-reviewed feedback. The hypothesis is that much current AI-readiness effort concentrates on tools and technical skills, while judgment, ethics and collaboration with AI get less attention `[C-001, unverified]`. This is a hypothesis to test, not a finding.

**1b. The internal problem (what this project actually fixes).**
Boss of AI has a vision, a knowledge base, a website and a first venture project, but **no governance, no independent experts on record, no confirmed partners, no legal vehicle, and no cost plan** `[C-004, verified in repo]`. Until those exist, the organization cannot credibly offer what 1a calls for, and funders and institutions cannot safely rely on it. **Project 0 solves 1b, in service of 1a.**

## 2. Why this, why us, why now

- **Alternatives already in the field** (to be mapped properly, not asserted): government programmes and missions, MOOC and platform providers, vendor "academies", university AI centres, and hackathon or maker communities. Each has strengths. The benchmark is a spec requirement (§4 of the spec).
- **What we think is distinct** `[to be tested, H2 to H4]`: an open repository where humans and AI agents work as colleagues under a human gate; agents reviewing each other with recorded disagreement (see [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md)); free registration with a pay-it-forward contribution model; a method base already written down (`wiki/`).
- **Why now** `[C-002, unverified]`: AI capability and access have grown faster than institutional capacity to absorb them. Needs a cited source before it appears in the charter.

## 3. Audience and stakeholders

Six audiences are listed on the site today. For an early organization that is too many to serve at once. **[PROPOSED] sequencing, as a wedge rather than a limit:**

| Priority | Audience | Why first |
|---|---|---|
| **Now** | Institutions and faculty (via Project 1), students (Srujana Pathway) | Already built into the site and project portfolio; a mentor load that two or three partners can test |
| **Waitlist** (matches the site) | Practitioners, school teachers | The site already marks these "coming soon"; school settings need child-safety review first |
| **Continuous** | **AI agents**: colleagues who contribute under the lifecycle and human gate. Not subservient; the organization's purpose is to train humans, and agents are part of how | Defined on the site's AI-agent role and in `AGENTS.md` |
| **Enabling** | Funders, expert reviewers, government bodies | Needed to exist, not served as customers |

## 4. Hypotheses (how we will know we are right)

| # | If we... | then... | Known by | Evidence today |
|---|---|---|---|---|
| H1 Demand | offer free registration plus mentor support to institutions and faculty | at least **[PROPOSED] 3 institutions** commit in writing to a pilot, and registrations come from more than the founder's network | 6 months | None |
| H2 Method | use HEITL with agents and a verification loop | deliverables reach expert-approved quality with **[PROPOSED] fewer expert-hours than expert-only drafting**, measured on at least 2 artifacts | first 2 charter artifacts | None |
| H3 Verification | agents review each other in rounds with recorded dissent | the loop finds real defects a single-agent review misses; test by seeding known defects in a draft and counting what each method finds | first Stage 4 | None; Round 0 here found 14 issues in v1 in one pass (see board) |
| H4 Access | free registration plus pay-it-forward contribution | enough volunteer mentors and reviewers come forward to meet demand without paid gatekeeping | 6 months | `data/mentors.json` holds placeholders |
| H5 Independence | we recruit reviewers who do not report to the founder | at least **[PROPOSED] 3** accept a defined role with a conflict-of-interest declaration | charter approval | None |

A hypothesis the evidence rejects is a result, not a failure. `6_feedback.md` records it either way.

## 5. Definition of Done: three layers kept separate

**A. Deliverable done** (the charter exists and is trustworthy)
- `5_final.md` approved by Sanjay **and** at least one reviewer who is not a co-author `[D-008]`.
- Heavy verification loop converged, or converged with Known Disagreements listed.
- `claims.md` has **no unverified claim on the critical path**; every other unverified claim is labelled in the text.

**B. Organization established** (the world is different) **[PROPOSED target: within 6 months of charter approval]**
- A legal vehicle chosen on legal advice and in motion, **or** an explicit written deferral with an interim arrangement `[D-001]`.
- **At least 3 named independent expert/advisory seats filled**, each with a signed conflict-of-interest declaration `[H5]`.
- **At least 1 written commitment** (MoU or letter of intent) from an institution to a pilot `[H1]`.
- A **cost envelope** and a runway estimate in order-of-magnitude terms, with the assumptions listed.
- Data-protection basics operating for the site: consent text, age handling, retention rule, deletion route.
- At least 1 public artifact (the charter itself, openly published) with its dissent register.

**C. Early signals** (cheap, readable within weeks; they inform but do not prove)
- Registrations by role and by institution type; time from sign-up to a human reply.
- Mentors, reviewers and agent contributors who volunteered.
- WhatsApp community joins and the share who take a concrete next step.

**Work-in-progress limit [PROPOSED, D-005]:** at most **2** projects beyond Stage 3 at once while approvals depend on one human. This replaces v1's "three projects at Stage 2", which counted activity and could be met without any value created.

## 6. Constraints, non-negotiables, non-goals

**Non-negotiables**
- **HEITL**: no autonomous deployment or external commitment without human approval.
- **Spec-first** for governance and funding documents.
- **Sequential lifecycle with legal backward moves.** v1 said "no stage may be skipped"; the repo shows stages were skipped in practice. The honest rule: record what exists (see `0_context.md` §2), and send back to an earlier stage when review requires it.
- **Independent verification**: an Author never reviews their own artifact; the loop protocol applies.
- **Open by default**: publish artifacts and dissent unless there is a stated reason not to.
- **No claim without a row in `claims.md`.**
- **Child safety and data protection come before outreach to minors.**

**Non-goals for this project** (v1's list reconciled with the rest of the repo)
- Drafting incorporation papers or articles of association. *The charter must still state the entity decision and what it requires.*
- A detailed financial model. *A cost envelope with listed assumptions is required, so that funders can assess it.*
- Selecting technology vendors. *The charter may name categories and criteria.*
- Designing internal HR. *Roles and decision rights are in scope.*
- Operational execution already tracked in `planning/` (credit applications, mentor recruitment drives). Those continue there and feed this project; they are not duplicated here.

## 7. Risks and assumptions

| ID | Risk or assumption | L | I | Mitigation or test |
|---|---|---|---|---|
| K1 | **Single human gate** (founder is author, approver and a listed mentor): bottleneck, bias, key-person risk | H | H | D-008: add an independent reviewer for Heavy artifacts; conflict-of-interest declaration; succession in the charter |
| K2 | **Scope sprawl**: six audiences, one small team | H | M | Wedge sequencing (§3); WIP limit (D-005) |
| K3 | **Verification theatre**: agents agree politely, nobody checks | M | H | Protocol safeguards: blind Round 1, reason codes, Grounding Auditor, different model for Heavy |
| K4 | **Funder or vendor dependence** erodes free-access promise | M | H | Revenue guardrails stated in the charter; "money never gates learners" as a charter rule |
| K5 | **Minors and personal data**: the site accepts sign-ups with no age check or consent record, and no retention rule is documented `[C-006]` | M | H | D-009; follow Indian data-protection law once confirmed with counsel; separate review before any child-facing programme (already promised on the Safety page) |
| K6 | **Identity confusion** (PRODIGY, prodigym, Boss of AI; two "Project 0"s) | H | L | Glossary in `0_context.md`; D-007 |
| K7 | **Process overhead** swamps a tiny team | M | M | Light loop for low-stakes work; Heavy only where stakes justify; review the loop quarterly |
| K8 | **Overclaiming** ("10X", "tens of thousands") before measurement | M | H | Claims register; the site already states 10X is a target, not a result `[C-005]`; keep that discipline in the charter |
| K9 | **No legal entity** blocks funding, contracts, liability protection | M | H | D-001 |

## 8. Open questions (each names an owner, a deadline, and what changes)

| ID | Question | Owner | By | If the answer is... |
|---|---|---|---|---|
| D-001 | Legal vehicle (company, trust, society, other)? | Sanjay + legal adviser | before Stage 5 | Determines governance wording, fundability, tax status. Default: charter drafted entity-agnostic |
| D-002 | Who are the first independent advisory seats? | Sanjay | before Stage 4 | Without them, Heavy verification has no independent humans. Default: seats described by role, named later |
| D-003 | What is the first public launch artifact or event? | Sanjay | before Stage 5 | Sets the charter's publication plan. Default: open publication on the site |
| D-004 | Which government bodies are partners vs targets? | Sanjay | before Stage 5 | Default: none named in the charter |
| D-005 | Work-in-progress limit | Sanjay | at spec lock | Default: 2 projects past Stage 3 |
| D-006 | Define or drop the "Cognitive Memory Architecture"? | Sanjay | at spec lock | Default: drop all references until a definition exists |
| D-007 | Canonical naming; rename `planning/` "Project 0" | Sanjay | at spec lock | Default: "Boss of AI" canonical; legacy names listed |
| D-008 | Who else sits at the human gate for Heavy artifacts? | Sanjay | at spec lock | Default: at least one independent external reviewer |
| D-009 | Data-protection and age policy for the site | Sanjay + adviser | before outreach to schools | Default: no outreach to minors until in place |

## 9. Anchors (real files only)
- Method: [`wiki/srujana_pathway.md`](../../wiki/srujana_pathway.md), [`wiki/track_framework.md`](../../wiki/track_framework.md), [`wiki/spot_probe_strategy.md`](../../wiki/spot_probe_strategy.md), [`wiki/cascading_theory_of_transformation.md`](../../wiki/cascading_theory_of_transformation.md)
- Strategy: [`strategy/concept-note.md`](../../strategy/concept-note.md), [`strategy/one_pager.md`](../../strategy/one_pager.md), [`intent.md`](../../intent.md)
- Operations: [`planning/meta_venture_plan.md`](../../planning/meta_venture_plan.md), [`planning/task_board.md`](../../planning/task_board.md)
- Process: [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md), [`AGENTS.md`](../../AGENTS.md)
- Safety commitments: the Safety page (`web/src/pages/Info.tsx`)

## Change log, v1 to v2

| Change | Why (issue) |
|---|---|
| Split external problem from internal problem | F-006, F-003 |
| Added why-us and alternatives; marked evidence status | F-006 |
| Added testable hypotheses | F-006, F-003 |
| Done split into deliverable, organization, early signals; added time horizon and WIP limit | F-003 |
| Reconciled non-goals with planning and spec | F-004 |
| Added wedge sequencing; defined AI agents' role; removed vendor name | F-007, F-011 |
| Added risks, including single-gate risk and data protection | F-005, F-010 |
| Open questions now have owner, deadline, and consequence | F-012 |
| Replaced dangling `[[wikilinks]]` with real file links | F-002 |
| Said openly that stages were skipped in practice | F-008 |
