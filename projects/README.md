# Boss of AI Projects Registry (`projects/`)

Welcome to the **Project Delivery Tracks** of Boss of AI (bossofai.org). While the **Wiki** (`wiki/`) stores our enduring methodologies and frameworks, the `projects/` directory houses our **active deliverables, policy briefs, curricula, institutional blueprints, and venture incubators**.

Every project in this directory is executed using the 6-stage **AI-Native Project Lifecycle** from [ai-native-project-playbook.md](../ai-native-project-playbook.md).

---

## 📋 The Chronological & Concept Dependency Artifact Loop

All project files are sequentially numbered (0 onwards) so that they appear in exact chronological and concept dependency order in all directory listings (`dir`, `ls`, IDE file explorers):

```text
projects/<project-slug>/
├── 0_context.md          # Standing facts, current state, working mode, glossary
├── 1_intent.md           # Stage 1 Plan: problem, hypotheses, outcome-based Done, risks
├── 2_spec.md             # Stage 2 Design: acceptance criteria, decisions with defaults, verification plan
├── 3_draft.md            # Stage 3 Build: first full draft with conformance check
├── 4_review.md           # Stage 4 Test: outcome of agent verification + human gate
├── 5_final.md            # Stage 5 Deploy: approved deliverable with Known Disagreements
├── 6_feedback.md         # Stage 6 Maintain: feedback triage, outcome readings
├── deliberation_board.md # Issue ledger, Verification Summary, Dissent Register
├── deliberation/         # Per-reviewer, per-round files
├── claims.md             # Every factual claim and its verification status
└── decisions.md          # Human decisions and overrules
```

How agents review each other, disagree, converge or agree to disagree is defined in [`protocols/agentic-loops.md`](../protocols/agentic-loops.md).

---

## 🚀 How to Launch a New Project

1. Copy [`_template-project/`](./_template-project/) to `projects/<new-project-slug>/`.
2. Fill out `0_context.md` (standing domain facts) and `1_intent.md` (problem statement and scope).
3. Partner with an AI agent using the `ai-native-project-engine` skill to lock `2_spec.md`, generate `3_draft.md`, conduct peer review in `4_review.md`, and deploy to `5_final.md`.
4. After real-world deployment or feedback, capture learnings in `6_feedback.md`.

---

## 🗂️ Active Project Registry

| # | Project Slug | Title | Current Stage | Status |
|---|---|---|---|---|
| 0 | [`project0bossofai/`](./project0bossofai/) | Boss of AI: Establish the Organization | Stage 1 to 2, revised 2026-10-09 | Intent v2 and spec v2 written; only a single-agent Round 0 pre-review has been done; awaiting independent Light loop and decisions D-001 to D-009 |
| 1 | `project1aigurukul` | AI-Gurukul 2.0: Center of Excellence for Teacher Training | Stage 1 to 2, revised 2026-10-09 | Intent v2 and spec v2 written; Round 0 only. **Moving to its own repository** (`sanchitnis/aigurukul`); the folder here stays until the new repo exists |
| 2 | [`project2medicolegal/`](./project2medicolegal/) | MedAegis 360 — Healthcare Medicolegal, Consent & Cyber Defense Platform | **Stage 2: Spec** | `1_intent.md` approved — `2_spec.md` drafted, awaiting expert lock |
| 3 | [`project3prodigym/`](./project3prodigym/) | PROdiGYM: the Brain Gym (habits, baselines, AI-challenged daily practice) | **Stage 2: Spec** | `0_context.md`, `1_intent.md` and `2_spec.md` revised to v2 on 2026-10-16 after Sanjay's decisions DR-004..012 (Light loop not yet run); awaiting Sanjay's review of the spec. Build starts only after `2_spec.md` is approved |

> **Dependency**: Project 0 is the parent context. Project 1 is the first venture project under Boss of AI. Project 2 (Healthcare Medicolegal & Cybersecurity) is the flagship venture in specialized high-stakes AI and compliance platforms.

