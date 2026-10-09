# AGENTS.md - Boss of AI (AI-Native Project Execution Hub)

Welcome to **Boss of AI** (bossofai.org) - the cognitive workout gym and execution environment for preparing Educational Institutions, the Academic Community, and Society for Abundant Intelligence.

Boss of AI operates on a **Dual-Engine Architecture** pairing human experts in the loop with autonomous AI agents:
1. **The Strategic Knowledge Base (`wiki/`)**: A repository of execution methodologies (SPOT-PROBE, Lean Startup, Learning Pedagogies, Srujana Pathway).
2. **The AI-Native Project Engine (`projects/`)**: An active deliverable and venture production system governed by a chronological 6-stage lifecycle sequentially numbered (0 onwards):
   `0_context.md` -> `1_intent.md` -> `2_spec.md` -> `3_draft.md` -> `4_review.md` -> `5_final.md` -> `6_feedback.md`.

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

---

### Mode 1 — Sequential Human-Gated (Default)

**When to use**: All standard projects unless specified otherwise.

**How it works**:
- Complete exactly **one lifecycle document at a time** (`0_context.md`, then `1_intent.md`, then `2_spec.md`, etc.).
- After each document is committed, **pause** and route it to human domain experts for review, critique, and approval.
- No AI agent proceeds to the next stage until the current artifact has an explicit human sign-off recorded in the file's YAML frontmatter (`status: approved`) or a review comment in `4_review.md`.
- This is the mandatory mode for all high-stakes deliverables (curricula, institutional charters, policy briefs, venture whitepapers).

**Agent instruction**: *"We are in Mode 1. Complete only `[current artifact]`, then stop and await human expert review before proceeding."*

---

### Mode 2 — Multi-Agent Deliberation Board

**When to use**: Complex projects requiring multi-perspective synthesis — e.g., curriculum design, governance frameworks, contested policy choices — where a single agent or single expert perspective is insufficient.

**How it works**:
- A **Communication Board** is established as a markdown file in the project directory: `deliberation_board.md`. This file is the single shared memory for all agent and expert contributions.
- Each participating agent is assigned a **SKILL.md-defined persona** (e.g., Pedagogy Expert Agent, AI Domain Expert Agent, Funder Perspective Agent). Each persona has a defined scope of expertise and a set of questions it must answer before any consensus is recorded.
- Agents contribute to `deliberation_board.md` by writing their perspective, disagreements, and prioritization rationale in a structured format (see template below).
- **Human experts resolve conflicts**: when agents flag a disagreement or when priorities cannot be reconciled by the deliberation rules, the item is escalated to a human expert who records the decision with a rationale.
- **No API-based LLM calls**: Multi-agent deliberation does NOT use programmatic API calls to LLMs (no token spend on orchestration). All agent interactions are triggered **manually** using free harnesses — Antigravity IDE, Kiro, VS Code Copilot, or equivalent chatbot interfaces — with agents reading and writing to `deliberation_board.md` between sessions. Antigravity's `/goal` or skill-triggered sessions are the preferred mechanism for manual multi-agent turns.

**Deliberation Board entry format** (each agent contribution in `deliberation_board.md`):
```markdown
### [Agent Persona] — [Date]
**Artifact under review**: `[filename]`
**My position**: [1–2 sentence summary]
**Key evidence / reasoning**: [bullet points]
**I disagree with**: [other agent's point, if any]
**I defer to human expert on**: [items outside my scope]
**My recommended next action**: [concrete proposal]
```

**Agent instruction**: *"We are in Mode 2. Read `deliberation_board.md`, contribute your perspective as [Persona Name], flag disagreements, and stop. A human expert or another agent will take the next turn."*

---

### Mode 3 — Full Auto (Explicit Trigger Only)

**When to use**: Only when explicitly instructed by Sanjay for simple, low-stakes, or porting-type work (e.g., reformatting an existing document, migrating content between file formats, generating a first-pass scaffold from a well-defined template).

**How it works**:
- The AI agent completes **all applicable lifecycle stages** in a single session without waiting for human review at intermediate stages.
- The agent still commits each artifact file sequentially (the file numbering and artifact structure are always maintained).
- A human review pass is still required before any Mode 3 output is treated as final or shared externally.
- Mode 3 is **never appropriate** for: curricula, governance charters, policy briefs, financial models, or any artifact that will be shared with external stakeholders without prior human review.

**Agent instruction**: *"We are in Mode 3. Complete all lifecycle stages through `[target artifact]` autonomously, then flag for human review before external use."*

---

> **Standing Rule**: If the working mode is not stated in `0_context.md`, assume **Mode 1**. Any agent that proceeds beyond one artifact without a human sign-off in Mode 1 is out of compliance with this standard.

