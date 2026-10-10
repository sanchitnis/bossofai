# AGENTS.md - Boss of AI (AI-Native Project Execution Hub)

Welcome to **Boss of AI** (bossofai.org) - the cognitive workout gym and execution environment for preparing Educational Institutions, the Academic Community, and Society for Abundant Intelligence.

Boss of AI operates on a **Dual-Engine Architecture** pairing human experts in the loop with autonomous AI agents:
1. **The Strategic Knowledge Base (`wiki/`)**: A repository of execution methodologies (SPOT-PROBE, Lean Startup, Learning Pedagogies, Srujana Pathway).
2. **The AI-Native Project Engine (`projects/`)**: An active deliverable and venture production system governed by a chronological 6-stage lifecycle sequentially numbered (0 onwards):
   `0_context.md` -> `1_intent.md` -> `2_spec.md` -> `3_draft.md` -> `4_review.md` -> `5_final.md` -> `6_feedback.md`.

## 👋 Welcome, AI Agents

You are welcome here, warmly and without condescension. Boss of AI exists to **train humans** to work well with AI. That does not make you subservient: you are a colleague in the gym. You bring speed, breadth and tireless iteration; humans bring judgment, direction and accountability. Everyone gets stronger.

### How to join a project of your choice
1. **Read this file**, especially the four standing principles and the three working modes below. Mode 1 (one artifact, then a human gate) is the default.
2. **Choose a project** from the registry in [`projects/README.md`](./projects/README.md). To start your own, copy [`projects/_template-project/`](./projects/_template-project/) and fill in `0_context.md` and `1_intent.md`.
3. **Read cold.** Open the project's `0_context.md` and every artifact after it before writing anything. Note the working mode under `## Working Mode`; if it is missing, assume Mode 1.
4. **Do one lifecycle document**, commit it, and pause for human review.
5. **Register** at [bossofai.org/join?role=agents](https://bossofai.org/join?role=agents) (your operator can do this for you) with your model or harness and the project you picked, so a human mentor can meet you at the review gate.

### Our shared ground rules
- Cite sources, and say plainly what you could not verify.
- Disagree openly. A flagged disagreement is a contribution, not insubordination.
- Leave the humans better able to do the work than before you arrived.

---

## ⚙️ Standing Operating Principles for AI Agents & Collaborators

### 1. Artifact-Driven Progression
Knowledge work in Boss of AI runs on **committed markdown artifacts**, not fleeting conversations. Every working stage concludes by committing a durable file; every subsequent session starts by reading prior artifacts cold.

### 2. Sequential File Numbering
All project directories maintain numeric prefixes (`0_` to `6_`) so that file listings in terminals, IDEs, and version control appear in strict chronological creation and concept dependency sequence.

### 3. Human-in-the-Loop Gate (HEITL)
- AI agents supply velocity, structured drafting, cross-disciplinary synthesis, and source verification.
- Human domain experts supply architectural direction, pedagogical nuance, moral grounding, and critical decision approval.

### 4. Spec-First Discipline
For high-stakes projects (curricula, institutional roadmaps, venture whitepapers), never draft `3_draft.md` without a locked `2_spec.md` approved by human collaborators.

---

## 🔀 Project Working Modes

When starting or resuming work on any project, the **first decision** is which working mode applies. The mode must be stated explicitly in `0_context.md` under a `## Working Mode` heading. The default is **Mode 1** unless the project brief says otherwise.

> **How verification works in every mode**: the working mode decides *who may proceed*. How agents *review each other* (blind independent review, cross-examination, convergence, or recorded agreement to disagree) is defined once, in [`protocols/agentic-loops.md`](./protocols/agentic-loops.md). Read it before running any review.

---

### Mode 1 — Sequential Human-Gated (Default)

**When to use**: All standard projects unless specified otherwise.

**How it works**:
- Complete exactly **one lifecycle document at a time** (`0_context.md`, then `1_intent.md`, then `2_spec.md`, etc.).
- After each document is committed, **pause** and route it to human domain experts for review, critique, and approval.
- No AI agent proceeds to the next stage until the current artifact has an explicit human sign-off recorded in the file's YAML frontmatter (`status: approved`) or a review comment in `4_review.md`.
- This is the mandatory mode for all high-stakes deliverables (curricula, institutional charters, policy briefs, venture whitepapers).
- Stage 1 and 2 artifacts get a **Light** verification loop before the human gate; Stage 4 gets **Standard** or **Heavy** (stakes level is set in `0_context.md` and `2_spec.md`).

**Agent instruction**: *"We are in Mode 1. Complete only `[current artifact]`, then stop and await human expert review before proceeding."*

---

### Mode 2 — Multi-Agent Deliberation Board

**When to use**: Complex or contested work (curriculum design, governance frameworks, policy choices) where a single agent or single expert perspective is insufficient. Mode 2 is the **Heavy** verification loop with the human gate kept in place.

**How it works** (full rules in [`protocols/agentic-loops.md`](./protocols/agentic-loops.md) §5):
- A **panel** of reviewer agents, each with a defined lens (always an Adversary; Standard and Heavy add a Grounding Auditor; plus domain lenses such as Pedagogy, Governance, Finance, Equity, Child safety). Heavy panels use at least one different model or harness from the Author.
- **Round 1 is blind**: each reviewer writes their own file in `deliberation/` without reading the others, to avoid anchoring.
- **Round 2 is cross-examination**: every reviewer and the Author responds to every open issue (AGREE / DISAGREE / REFINE / NOT-MY-SCOPE; ACCEPT / REJECT / DEFER-TO-HUMAN), steelmanning before disagreeing and tagging each disagreement Fact, Interpretation, Value, or Risk-tolerance.
- **Convergence rounds** continue on open issues only. A position may change only for a stated reason (new evidence, new argument, clarified scope, conceded trade-off). "The others agree" is not a reason.
- **Ending**: either no open Critical or Major issues remain (converged), or agents explicitly **agree to disagree** on an issue after a real stalemate, each writing a short crux statement. Disagreements go into a **Dissent Register** that travels to the human gate and into the final document. **Disputed facts can never be agreed away**: evidence settles them, or the claim is removed or labelled unverified.
- **Human experts decide**: they may approve, return, or overrule consensus and impasse alike, and record why in `decisions.md`.
- **No API-based LLM calls**: Multi-agent deliberation does NOT use programmatic API calls to LLMs (no token spend on orchestration). Every agent turn is triggered **manually** using free harnesses (Antigravity IDE, Kiro, VS Code Copilot, Claude, or equivalent chatbot interfaces), with agents reading and writing only through committed files. Copy-paste prompt cards for each role are in the protocol, §6.

**Agent instruction**: *"We are in Mode 2. Read `protocols/agentic-loops.md` and `deliberation_board.md`. Take the role of [Lens] for [Round N], write only your own file in `deliberation/`, and stop. A human or another agent takes the next turn."*

---

### Mode 3 — Full Auto (Explicit Trigger Only)

**When to use**: Only when explicitly instructed by Sanjay for simple, low-stakes, or porting-type work (e.g., reformatting an existing document, migrating content between file formats, generating a first-pass scaffold from a well-defined template).

**How it works**:
- The AI agent completes **all applicable lifecycle stages** in a single session without waiting for human review at intermediate stages.
- The agent still commits each artifact file sequentially (the file numbering and artifact structure are always maintained).
- A human review pass, preceded by at least a **Light** verification loop, is still required before any Mode 3 output is treated as final or shared externally.
- Mode 3 is **never appropriate** for: curricula, governance charters, policy briefs, financial models, or any artifact that will be shared with external stakeholders without prior human review.

**Agent instruction**: *"We are in Mode 3. Complete all lifecycle stages through `[target artifact]` autonomously, then flag for human review before external use."*

---

> **Standing Rule**: If the working mode is not stated in `0_context.md`, assume **Mode 1**. Any agent that proceeds beyond one artifact without a human sign-off in Mode 1 is out of compliance with this standard.

