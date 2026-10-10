---
project: project1aigurukul
artifact: deliberation_board
protocol: protocols/agentic-loops.md v1.0
artifact_under_review: 1_intent.md (v2), 2_spec.md (v2), 0_context.md
commit_sha: ~
stakes_level: Light (intent, spec); Heavy (program design document, later)
round_cap_per_issue: 2 (Light)
revision_cap: 3
status: round-0
chair: ~
---

# Deliberation Board: AI-Gurukul 2.0

> **Honesty note.** These are Round 0 findings from one agent, which also wrote the revisions. They are not independent verification. States are "addressed, pending confirmation" at best.

## Verification Summary

| Item | Value |
|---|---|
| Artifact reviewed | v1.1 intent, v1 spec, context; revisions v2 |
| Stakes, rounds run | Light; Round 0 only |
| Panel | none yet |
| Issues raised | 19 |
| Resolved with independent confirmation | 0 |
| Chair's recommendation | Run independent Light loop; add a qualified child-safety adviser and an assessment expert as reviewers |

## Round 0
- **Author's known weaknesses:** the pilot size, thresholds and Level definitions are my proposals; no external source has been checked; C-101 to C-107 unsourced.
- **Questions for the panel:** Is tiered assessment compatible with P2 and P3? Is 24 to 30 teachers enough to test H2 and H3? Is the prior-learning route a loophole?

## Issue ledger

| ID | Sev | Type | Location | Defect | State | Disposition |
|---|---|---|---|---|---|---|
| G-001 | C | Fact | intent §1 | Unsourced statistics (9.5M, 30-day fade, 3 to 5x) | OPEN | Claims C-101 to C-103 |
| G-002 | C | Fact | intent R10, concept note | 45-min viva with 3-person panel for 25,000 learners needs about 56,000 assessor-hours | ADDRESSED-PENDING-CONFIRM | Tiered panels; §9 arithmetic |
| G-003 | M | Fact | intent R18 | 5M/25,000 equals 200 per teacher, inconsistent with "hundreds per year" | ADDRESSED-PENDING-CONFIRM | Demoted to scenario; C-106, C-107 |
| G-004 | M | Fact | intent §1 | Existing offerings not examined | OPEN | Spec section 2 benchmark |
| G-005 | C | Risk-tolerance | whole | No child-safety or data-protection requirement for student-facing deployments | ADDRESSED-PENDING-CONFIRM | R22, P8; needs qualified adviser |
| G-006 | M | Interpretation | whole | Access, language, bandwidth, release-time ignored | ADDRESSED-PENDING-CONFIRM | R23, P8 |
| G-007 | M | Interpretation | R1 | Levels named and timed, not defined by competencies | ADDRESSED-PENDING-CONFIRM | R24 |
| G-008 | M | Fact | R17 | Impact measurement non-causal | ADDRESSED-PENDING-CONFIRM | Comparison design |
| G-009 | M | Risk | P3 | Peer-evaluation audit can itself be gamed; collusion | ADDRESSED-PENDING-CONFIRM | P3 reworded; re-rating sample |
| G-010 | M | Fact | evidence base | Pedagogy sources are inspiration, not evidence | ADDRESSED-PENDING-CONFIRM | H2; C-109 |
| G-011 | M | Value | Expert Committee | Independence, due process, credential standing | ADDRESSED-PENDING-CONFIRM | R25 |
| G-012 | M | Fact | revenue | Unit economics absent; seed "₹X" placeholder | OPEN | C-108; spec section 10 |
| G-013 | C | Interpretation | whole | No pilot before campus | ADDRESSED-PENDING-CONFIRM | R21, Pilot 0 |
| G-014 | m | Fact | repo | Three source-of-truth documents drifted | ADDRESSED-PENDING-CONFIRM | Superseded notes |
| G-015 | m | Fact | review checklist | Coverage check vacuous ("all 20 R covered") | ADDRESSED-PENDING-CONFIRM | Acceptance criteria per section |
| G-016 | M | Interpretation | P1/P2 vs experts | Strict P2 conflicts with serving experienced practitioners and Level 4 recruitment | ADDRESSED-PENDING-CONFIRM | Prior-learning route |
| G-017 | M | Interpretation | R4/P6 | Open-source mandate may exclude confidential contexts | ADDRESSED-PENDING-CONFIRM | P6 reworded |
| G-018 | m | Fact | context | Dangling `wiki/semantic/` anchors | ADDRESSED-PENDING-CONFIRM | Citation standard fixed |
| G-019 | M | Risk | R7 | Dependence on one AI tool | ADDRESSED-PENDING-CONFIRM | R26 |

## Position log
(no convergence rounds yet)

## Dissent Register
(none; no impasse reached)
