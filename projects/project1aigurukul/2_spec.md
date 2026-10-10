---
project: project1aigurukul
stage: 2-design
artifact: spec
version: v2
supersedes: v1
owner: Sanjay
locked_date: ~
status: revised-awaiting-verification
stakes_level: Heavy   # for the Program Design Document; this spec gets a Light loop
verification: "Round 0 only (single-agent pre-review). Independent Light loop NOT yet run."
tags: [aigurukul, teacher-training, spec, stage-2]
---

# Specification: AI-Gurukul 2.0 Program Design Document

> Do not start `3_draft.md` until a human sets `status: approved` and `locked_date`. **[PROPOSED]** marks suggestions for the human gate.

## 1. Document architecture and acceptance criteria
Target length **25 to 35 pages**, each section opening with its key question.

| # | Section | Key question | Acceptance criteria (checkable) | Evidence required |
|---|---|---|---|---|
| 1 | Executive summary | What, why, what we ask | 2 pages; every number traces to `claims.md`; the ask states Pilot 0 funding, not a campus | Claims register |
| 2 | Problem and benchmark | What exists and what is missing? | At least 5 existing offerings compared (government platforms, vendor programmes, universities, MOOCs, peer networks) with sources; a clear statement of what is unverified | URLs with access dates |
| 3 | Pedagogical foundation | Why these methods? | Each inspiration is either linked to a `wiki/learning_pedagogies` page or sourced; separates "inspired by" from "evidence that it works"; names the evidence gap for teacher AI training | Links; Grounding Auditor samples |
| 4 | Program architecture and competency framework | What does each level certify? | Per level: competencies, entry route (including prior learning), assessment, duration, release time; mapping to at least one external framework where relevant | Framework sources |
| 5 | Curriculum | What is taught and practiced? | Level-by-level objectives; project types; track variants (school, college, leaders); tool-agnostic with fallback; low-bandwidth and language options | Review by pedagogy and AI lenses |
| 6 | Assessment and integrity | How is mastery judged fairly at scale? | Rubric; tiered panel design; inter-rater agreement target; calibration and drift method; collusion safeguards; appeals; COI rules; **assessor-hour budget** per 1,000 learners | Arithmetic shown |
| 7 | Safeguarding and data protection | How do we avoid harm? | Safeguarding policy outline; consent flow; data inventory; retention; no student deployment without a school sponsor; reviewed by a qualified adviser (human-only) | Adviser sign-off recorded in `4_review.md` |
| 8 | Access and inclusion | Who might be left out? | Participant-mix targets; language plan; bandwidth plan; release-time and cost plan; disability adjustment | Pilot metrics |
| 9 | Pilot 0 | How do we test the bet cheaply? | Cohort size and selection; site; comparison design; hypotheses H1 to H6 with thresholds and decision rules (continue, change, stop); timeline; cost estimate | Thresholds approved by human gate |
| 10 | Business model and sustainability | Who pays and what could go wrong? | Revenue streams; guardrails (no pay-to-pass, corporate revenue cap, payer not individual teacher); cost per completer from assumptions; no number without a basis | Claims register |
| 11 | Campus and environment principles | What do we need, and when? | Phase 1 is rented or partner space; campus decision conditional on Pilot 0 results | |
| 12 | Roadmap and measures | What happens and how do we know? | Phases tied to Done layers; impact measurement with comparison design where claims are causal | |
| 13 | The ask and governance | What are we asking for and who is accountable? | Pilot 0 funding range with basis; Expert Committee and assessor recruitment criteria; independence and term rules | |
| 14 | Known unknowns | What isn't settled? | Lists open decisions with defaults and unverified claims | Matches `decisions.md`, `claims.md` |

## 2. Voice, tone, reading level
Rigorous, evidence-grounded, inspiring but candid. Funder, institutional leader and pedagogy specialist readers. Published openly with its Verification Summary and Dissent Register.

## 3. Non-goals
- No detailed financial model (a cost-per-completer estimate with assumptions is required).
- No vendor selection; the design is tool-agnostic.
- No legal agreements or lease documents.
- No staffing org chart.
- No named campus address or partner schools unless a human adds them.

## 4. Decisions with defaults
See `1_intent.md` §10 (G-D1 to G-D10). If undecided at lock, the default applies and the draft says so.

## 5. Verification plan
- **Stakes: Heavy** for the Program Design Document (minors, assessment fairness, public money). Intent and spec: Light.
- **Lenses (at least 5):** Adversary; Grounding Auditor; Pedagogy and assessment; Child safety and data protection; Equity and access; Finance. At least one reviewer on a different model or harness.
- **Caps:** 5 rounds per issue; 3 revisions.
- **Critical issue means:** unsourced headline statistic; a safeguarding or data gap; an assessment design that cannot work at the stated scale; a contradiction with the intent.
- **Pre-review conformance check:** the Build loop ticks every acceptance criterion and lists the ones unmet.
- **Human gate:** Sanjay plus an external reviewer, with a qualified safeguarding adviser for section 7.
- **Not yet done:** nothing here has been run. Round 0 findings are one agent's pre-review.
