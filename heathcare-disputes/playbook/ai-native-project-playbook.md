# AI-Native Project Playbook - Boss of AI (bossofai.org)

This playbook defines how collaborative projects in Boss of AI move from an initial spark into high-impact, deployed assets through human-in-the-loop AI pairing.

> **The precise definition of every loop, including how agents review each other, disagree, converge or agree to disagree, lives in [`protocols/agentic-loops.md`](./protocols/agentic-loops.md).** This page is the overview.

---

## 🔁 The AI-Native Project Loop for Creating Artifacts

All project files are numbered sequentially so that they appear in exact chronological creation and concept dependency order in all directory listings. The stage names below are the ones used in every project file's frontmatter (`1-plan` to `6-maintain`).

```text
projects/<project-slug>/
├── 0_context.md          # Standing foundation: facts, current state, constraints, glossary, working mode
├── 1_intent.md           # Stage 1 Plan:     problem, why-us, hypotheses, outcome-based "done", risks
├── 2_spec.md             # Stage 2 Design:   architecture, acceptance criteria, decisions-with-defaults, verification plan
├── 3_draft.md            # Stage 3 Build:    first full draft, with conformance check and claims register
├── 4_review.md           # Stage 4 Test:     outcome of agent verification + the human gate
├── 5_final.md            # Stage 5 Deploy:   approved deliverable, with Known Disagreements
├── 6_feedback.md         # Stage 6 Maintain: feedback triage, outcome readings, next review date
├── deliberation_board.md # Issue ledger, Verification Summary, Dissent Register (Loop C)
├── deliberation/         # Per-reviewer, per-round files (blind Round 1, cross-examination, convergence)
├── claims.md             # Every factual claim with source and verification status
└── decisions.md          # Human decisions, backward moves, overrules
```

### Stage 0: Standing foundation (`0_context.md`)
- Working mode and stakes level, who the human gate is, what already exists, naming, standing decisions.
- Read cold before any work, so agents and humans share bedrock context. Keep it true.

### Stage 1: Plan (`1_intent.md`)
- The problem with evidence status, why this and why us, stakeholders, **testable hypotheses**, a **Definition of Done that separates deliverable, outcome and early signals**, risks, and open questions that each name an owner and a deadline.
- Verified by a **Light** loop.

### Stage 2: Design (`2_spec.md`)
- Architecture with **checkable acceptance criteria** per section, evidence requirements, non-goals, and **decisions needed with defaults**, so an unanswered question never silently blocks the project.
- **The Spec Rule**: high-stakes deliverables must have a spec approved by a human before drafting. Verified by a **Light** loop.

### Stage 3: Build (`3_draft.md`)
- Loop B: draft, run the spec-conformance check, update `claims.md`, declare known weaknesses, commit.

### Stage 4: Test (`4_review.md`)
- **Loop C**: blind independent reviews, cross-examination, convergence rounds, and either consensus or recorded, agreed disagreement. Then the human gate.
- Details, stopping rules and safeguards: [`protocols/agentic-loops.md`](./protocols/agentic-loops.md) §5.

### Stage 5: Deploy (`5_final.md`)
- The approved deliverable. It must carry its **Known disagreements** and any **unverified claims** openly.

### Stage 6: Maintain (`6_feedback.md`)
- Loop D: log feedback, triage it (fix, new intent, decline with a reason), read outcome measures, set the next review date.

---

## 🧭 Lifecycle rules worth repeating

1. One artifact at a time (Mode 1). Stop at the gate.
2. Backward moves are legal. If review shows the spec was wrong, return to Design, and log why in `decisions.md`.
3. Work that happened outside the lifecycle is recorded in `0_context.md` as "Current state", not hidden.
4. Only a human sets `status: approved`.
5. Agreement between agents is evidence of robustness, never proof of truth. Facts are settled by sources.

---

## 👥 Division of Labor: AI Agents vs. Human Experts

| Dimension | AI Agent Responsibility | Human Expert Responsibility |
| :--- | :--- | :--- |
| **Pacing & Speed** | Instant first-pass drafting, multi-angle outlines, rapid formatting | Sets priorities, rhythm, deadlines, and project milestones |
| **Evidence & Synthesis**| Cross-referencing wiki sources, literature synthesis, citation tracking | Supplies institutional wisdom, tacit knowledge, and moral compass |
| **Review & Quality** | Independent multi-agent review with cross-examination; claim-by-claim grounding; surfacing dissent | Final approval gate, political sensitivity, contextual judgment, overruling consensus when warranted |
| **Process** | Chairing the loop, applying round caps and the stagnation test mechanically | Approving the protocol itself and deciding what is at stake |
