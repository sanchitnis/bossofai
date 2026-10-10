---
name: ai-native-project-engine
description: Guide, execute, and maintain AI-native knowledge work projects across the 6-stage committed artifact loop (Plan -> Design -> Build -> Test -> Deploy -> Maintain). Trigger whenever the user asks to "start a new project", "write an intent", "draft a spec", "generate project draft", "review draft", "finalize deliverable", or "capture project feedback".
---

# AI-Native Project Engine Skill

This skill operationalizes the principles of [ai-native-project-playbook.md](../../../ai-native-project-playbook.md) for the **JP AI Future Study Group**. It guides users and agents in producing high-impact policy briefs, curricula, concept notes, and research deliverables without losing institutional context or suffering scope drift.

---

## ðŸ” The 6-Stage Committed Artifact Loop

Whenever starting or progressing a project in `projects/<project-slug>/`, follow this strict sequence:

### 1. Stage 1: Plan â†’ `1_intent.md`
- **When triggered**: User presents an idea, opportunity, or problem statement.
- **Action**: Create or refine `projects/<slug>/1_intent.md` using `wiki/procedural/templates/template-intent.md`.
- **Mandatory Fields**:
  1. Problem / Opportunity statement.
  2. Target audience & key stakeholders.
  3. Definition of "Done" (format, length, criteria).
  4. Constraints, non-negotiables, and explicit non-goals.
  5. Grounding anchors to `wiki/` nodes.

### 2. Stage 2: Design â†’ `2_spec.md`
- **When triggered**: `1_intent.md` is approved and work is high-stakes or complex.
- **Action**: Compress structure and requirements into `projects/<slug>/2_spec.md` in one sitting.
- **Rules**:
  - Lock section headings, reading level, citation standards, and explicit non-goals.
  - Do NOT begin writing prose until `2_spec.md` is agreed upon.

### 3. Stage 3: Build â†’ `3_draft.md`
- **When triggered**: `2_spec.md` and `0_context.md` are established.
- **Action**: Draft the complete deliverable adhering strictly to the spec.
- **Rules**:
  - The human supplies judgment, direction, and domain facts.
  - The agent supplies drafting speed, coherent flow, and atomic citations (`[[source-slug]]`).

### 4. Stage 4: Test â†’ `4_review.md`
- **When triggered**: `3_draft.md` is completed.
- **Action**: Produce `projects/<slug>/4_review.md` following the two-layer review rubric:
  - *Layer 1 (Automated Check)*: Grounding audit against `wiki/semantic/sources/`, spec section completeness, scope boundaries.
  - *Layer 2 (Human Expert Judgment)*: Flagged questions regarding policy nuance, political sensitivity, and ethics.

### 5. Stage 5: Deploy â†’ `5_final.md`
- **When triggered**: All Layer 2 flagged items in `4_review.md` are resolved and signed off.
- **Action**: Promote verified text to `projects/<slug>/5_final.md` with version frontmatter and author attribution.

### 6. Stage 6: Maintain â†’ `6_feedback.md`
- **When triggered**: The deliverable receives real-world reception, comments, or critique.
- **Action**: Record feedback in `projects/<slug>/6_feedback.md` and define the follow-up intent prompt that restarts the loop for the next deliverable.

---

## ðŸ› ï¸ Project Initialization Command Checklist

When the user asks to start a project:
1. Confirm or suggest the project slug (e.g. `policy-brief-gpu-allocation`).
2. Scaffold `projects/<project-slug>/` with `0_context.md`, `1_intent.md`, and initial files from `projects/_template-project/`.
3. Link relevant wiki concepts, sources, and seminar recordings.
4. Record the project in `projects/README.md`, `index.md`, and `log.md`.

---

## Verification and loops (updated)

The Stage 4 "two-layer review" is now the **multi-round verification loop (Loop C)** followed by the human gate. Stage 1 and Stage 2 artifacts get a Light version of it. Build has its own self-check (Loop B).

- Canonical definition: `protocols/agentic-loops.md` (read before running any review).
- Reviewer role skill: `.agents/skills/expert-peer-review/SKILL.md`.
- Stage names used in project frontmatter: `1-plan`, `2-design`, `3-build`, `4-test`, `5-deploy`, `6-maintain`.
- New project files in every project: `deliberation_board.md`, `deliberation/`, `claims.md`, `decisions.md`. Copy them from `projects/_template-project/`.
- Do not mark anything `approved` or `certified`. Only a human does.
