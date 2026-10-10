---
project: project0bossofai
stage: 2-design
artifact: spec
version: v2
supersedes: v1
owner: Sanjay
locked_date: ~
status: revised-awaiting-verification
stakes_level: Heavy   # for the charter (3_draft); this spec itself gets a Light loop
verification: "Round 0 only (single-agent pre-review). Independent Light loop on this spec NOT yet run."
tags: [bossofai, organization, spec, stage-2]
---

# Specification: Boss of AI Organizational Charter

> Do not start `3_draft.md` until a human sets `status: approved` and `locked_date`. Items marked **[PROPOSED]** are suggestions awaiting Sanjay.

## 1. Document architecture and acceptance criteria

Target length **10 to 14 pages [PROPOSED]**. Each section is judged on the criteria below by the Build loop and tested by the Adversary.

| # | Section | Key question | Acceptance criteria (checkable) | Evidence required |
|---|---|---|---|---|
| 1 | Purpose and charter | Why does Boss of AI exist and for whom? | States the external problem and the internal problem separately; names the wedge audiences (intent §3); every "10X"-type statement is marked a target or has a measured basis; no reference to the Cognitive Memory Architecture unless D-006 defines it | `claims.md` rows for every statistic; link to `wiki/` pages actually used |
| 2 | Benchmark and positioning | What else exists and how are we different? | Names at least 5 comparable offerings (government, platform, vendor, university, community) with source links and access dates; states honestly where each is stronger | Openable URLs; Grounding Auditor checks all |
| 3 | Governance and decision rights | Who decides what, and how are conflicts handled? | Decision-rights table (decision, who proposes, who approves, who may veto); **at least one decision class that the founder cannot approve alone**; conflict-of-interest rule; succession and exit; how the Dissent Register is handled | None external; consistent with `AGENTS.md` and protocol |
| 4 | Expert and advisory structure | How are independent experts chosen and protected? | Seat descriptions by role; independence rule (no reporting line to the founder); term, recusal, due process for removal; seats named only if D-002 provides names | Declaration template included as appendix |
| 5 | Method framework | How do SPOT-PROBE, Srujana Pathway, T.R.A.C.K. fit together? | One diagram or table connecting them; each linked to its real `wiki/` file; says what is evidence-based and what is our own design | Links resolve; Grounding Auditor samples |
| 6 | Human-agent working model | What do humans and agents each do? | Summarises HEITL and the loop protocol; states that agents are colleagues, not servants; states the manual-turn rule (no API orchestration) | Link to `protocols/agentic-loops.md` |
| 7 | Safety, ethics and data protection | How do we avoid harm? | Child-safety rule (no outreach to minors before D-009 policy); data inventory for the site (what, why, retention, deletion route); consent text; vendor processing noted; consistent with the Safety page | Legal adviser review flagged as human-only item |
| 8 | Funding, cost and sustainability | What does it cost and who pays? | Cost envelope in ranges with assumptions; revenue guardrails ("money never gates learners"; no pay-to-pass); named risks of funder dependence; no figure without a basis | `claims.md`; every number tagged assumption or sourced |
| 9 | Portfolio and WIP rule | What are we building now? | Lists active projects with real lifecycle status (Project 1 only unless D-005 says otherwise); WIP limit; how new projects are admitted | Matches `projects/README.md` |
| 10 | Roadmap and measures | What happens in 12 months and how do we know? | Milestones tied to the Done layers in intent §5; hypotheses H1 to H5 each with a measurement plan and a decision rule (continue, change, stop) | Consistent with `1_intent.md` |
| 11 | Known unknowns | What do we not know? | Lists every open decision (D-001 to D-009) with its current default; lists unverified claims on the page | Matches `decisions.md` and `claims.md` |

## 2. Voice, tone, reading level
- Strategic, plain, evidence-grounded. Say what is verified and what is hope. Institutional leaders, funders and domain experts are the readers; define jargon on first use.
- Open by default: the charter is published together with its Verification Summary and Dissent Register unless a stated reason prevents it.

## 3. Non-goals
Reconciled with the intent (§6):
- No incorporation papers or articles of association. The charter states the entity decision and what it requires.
- No financial model. A cost envelope with listed assumptions is required (section 8).
- No vendor selection. Categories and criteria may be named.
- No internal HR design. Roles and decision rights are in scope.
- No re-doing operational work already tracked in `planning/`.

## 4. Decisions needed, with defaults
An unanswered question must not stall the project. If undecided by the deadline, the default applies and the charter says so.

| ID | Decision | Owner | Deadline | Default if undecided | Cost of the default being wrong |
|---|---|---|---|---|---|
| D-001 | Legal vehicle | Sanjay + legal adviser | before Stage 5 | Charter is entity-agnostic and says so | Rework of governance wording; funders may wait |
| D-002 | Independent advisory seats | Sanjay | before Stage 4 | Seats by role, no names | Heavy loop lacks independent humans |
| D-003 | First public launch artifact | Sanjay | before Stage 5 | Publish charter plus dissent register on the site | Low |
| D-004 | Government partners named | Sanjay | before Stage 5 | None named | Lost credibility signal, no harm |
| D-005 | WIP limit | Sanjay | at lock | 2 projects beyond Stage 3 | Mild delay or overload |
| D-006 | Cognitive Memory Architecture | Sanjay | at lock | Drop all references | None if undefined |
| D-007 | Canonical naming, rename planning "Project 0" | Sanjay | at lock | Boss of AI canonical | Continued confusion |
| D-008 | Independent reviewer at human gate | Sanjay | at lock | At least one external reviewer for Heavy | Single-gate risk persists |
| D-009 | Data-protection and age policy | Sanjay + adviser | before school outreach | No outreach to minors until adopted | Legal and safety exposure |

## 5. Verification plan
- **Stakes: Heavy** for the charter (funders and partners will rely on it; external publication; contains governance and money). Spec and intent: **Light**.
- **Panel lenses (Heavy, at least 4):** Adversary; Grounding Auditor; Governance and legal; Child safety and data protection; Finance and sustainability (optional fifth). At least one reviewer on a different model or harness from the Author.
- **Round cap:** 5 per issue; revision cap 3 (protocol defaults).
- **Critical issue for this artifact means:** an unsourced figure on the critical path; a governance rule that lets one person approve everything; a data or child-safety gap; a statement contradicting the repo.
- **Conformance check before review:** Build loop ticks every acceptance criterion in §1 and lists those it could not meet.
- **Human gate:** Sanjay plus one reviewer who is not a co-author (D-008). Any decision to override consensus or impasse is recorded in `decisions.md`.
- **Not yet done:** none of this has been run. Round 0 findings in the board are one agent's pre-review, not independent verification.
