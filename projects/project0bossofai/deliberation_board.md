---
project: project0bossofai
artifact: deliberation_board
protocol: protocols/agentic-loops.md v1.0
artifact_under_review: 1_intent.md (v2), 2_spec.md (v2), 0_context.md
commit_sha: ~
stakes_level: Light (intent, spec); Heavy (charter, later)
round_cap_per_issue: 2 (Light)
revision_cap: 3
status: round-0
chair: ~
---

# Deliberation Board: Project 0

> **Honesty note.** Everything below is a **Round 0 pre-review by one agent**, the same agent that revised the artifacts. It is not independent verification, and no reviewer has confirmed any closure. States are therefore "addressed, pending confirmation" at best. The independent Light loop on intent and spec has not been run.

## Verification Summary

| Item | Value |
|---|---|
| Artifact reviewed | v1 intent, spec, context, template; revisions v2 |
| Stakes, rounds run | Light; Round 0 only |
| Panel | none yet (Adversary and Grounding Auditor needed, one on a different model) |
| Issues raised | 14 |
| Resolved with human or independent confirmation | 0 |
| Chair's recommendation | Run an independent Light loop on `1_intent.md` and `2_spec.md`, then Sanjay decides D-005 to D-008 |

## Round 0
- **Author's known weaknesses:** claims C-001 to C-003 are unsourced; hypotheses thresholds are proposals; Round 0 is self-review.
- **Questions for the panel:** Is the wedge sequencing right? Are the Done layers measurable at realistic cost? Does the single-gate fix (D-008) go far enough?

## Issue ledger

| ID | Sev | Type | Location | Defect | State | Disposition |
|---|---|---|---|---|---|---|
| F-001 | M | Fact | v0 context, planning | "Project 0" meant two things | ADDRESSED-PENDING-CONFIRM | Glossary; D-007 rename pending |
| F-002 | C | Fact | v0 context, spec, intent | Cited `wiki/semantic/`, templates and a "Cognitive Memory Architecture" that do not exist | ADDRESSED-PENDING-CONFIRM | Real links; D-006 default drop |
| F-003 | C | Interpretation | v1 Done | Activity counts ("3 projects at Stage 2") could be met without value | ADDRESSED-PENDING-CONFIRM | Three-layer Done |
| F-004 | M | Fact | v1 non-goals vs plan | Non-goals contradicted planning and spec | ADDRESSED-PENDING-CONFIRM | Reconciled |
| F-005 | C | Value | whole project | Founder is author, approver and mentor; single gate | OPEN | D-008; needs Sanjay |
| F-006 | M | Fact | v1 problem | Problem unsupported; no alternatives | OPEN | C-001 to C-003 need sources |
| F-007 | M | Interpretation | v1 audiences | Six audiences, small team | ADDRESSED-PENDING-CONFIRM | Wedge; D-005 |
| F-008 | m | Fact | repo | Work happened outside the lifecycle, rule said "no skipping" | ADDRESSED-PENDING-CONFIRM | Current-state table |
| F-009 | M | Fact | template | Template shipped fake "certified/locked" statuses | ADDRESSED-PENDING-CONFIRM | Reset to not-started |
| F-010 | C | Risk-tolerance | site | No age check or consent record on join form (C-006) | OPEN | D-009; operational fix is outside this project |
| F-011 | m | Fact | v0 | Vendor names, stale model names | ADDRESSED-PENDING-CONFIRM | Generic terms |
| F-012 | M | Fact | v1 | No cost envelope or runway | OPEN | Spec section 8 requires it |
| F-013 | M | Interpretation | v1 | "Autonomous agents" vs manual-turn rule | ADDRESSED-PENDING-CONFIRM | Wording aligned with AGENTS.md |
| F-014 | m | Fact | skills, playbook | Stage-name drift; mojibake in engine skill | OPEN | Mojibake fix pending |

## Position log
(no convergence rounds yet)

## Dissent Register
(none; no impasse reached)
