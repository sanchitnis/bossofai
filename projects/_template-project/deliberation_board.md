---
project: _template-project
artifact: deliberation_board
protocol: protocols/agentic-loops.md v1.0
artifact_under_review: ~
commit_sha: ~
stakes_level: ~          # Light | Standard | Heavy
round_cap_per_issue: ~   # Light 2 | Standard 4 | Heavy 5
revision_cap: 3
status: not-started      # not-started | round-0 | in-deliberation | converged | converged-with-dissent | escalated
chair: ~
---

# Deliberation Board: [Project Title]

> Maintained by the Chair. Reviewers write their own files in `deliberation/` and never edit this ledger directly. Word caps: findings 80, responses 120, crux 120.

## Verification Summary (Chair writes last, keeps at top)

| Item | Value |
|---|---|
| Artifact and commit reviewed | |
| Stakes level, rounds run | |
| Panel (lens: model, harness) | |
| Issues raised / resolved-fixed / closed-no-change / withdrawn | |
| Unverified (accepted risk) / impasse / escalated | |
| Position changes by reason code (NEW-EVIDENCE / NEW-ARGUMENT / CLARIFIED-SCOPE / CONCEDE-TRADEOFF) | |
| Chair's recommendation (not a decision) | |

## Round 0: freeze and declare
- **Panel**:
- **Author's known weaknesses** (what I am least sure about):
- **Review questions for the panel**:

## Issue ledger

Severity: **C** Critical, **M** Major, **m** minor. Type: Fact / Interpretation / Value / Risk-tolerance. States: see protocol §5.5.

| ID | Sev | Type | Location | Defect (80 words max) | Raised by | State | Author disposition | Round closed | Raiser confirmed |
|---|---|---|---|---|---|---|---|---|---|
| F-001 | | | | | | OPEN | | | |

## Position log (convergence rounds)

Add one row per position change. "Others agree" is never a valid reason.

| Issue | Party | Round | From | To | Reason code | One-line reason |
|---|---|---|---|---|---|---|

## Dissent Register (impasses)

For each impasse: both crux statements, both "I accept impasse" confirmations, and what would resolve it.

### D-001 (issue F-xxx)
- **Party A crux**:
- **Party B crux**:
- **A accepts impasse**: yes / no   **B accepts impasse**: yes / no
- **Resolvable by**:
- **Human gate decision**:
