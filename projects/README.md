# Boss of AI Projects Registry (`projects/`)

Welcome to the **Project Delivery Tracks** of Boss of AI (bossofai.org). While the **Wiki** (`wiki/`) stores our enduring methodologies and frameworks, the `projects/` directory houses our **active deliverables, policy briefs, curricula, institutional blueprints, and venture incubators**.

Every project in this directory is executed using the 6-stage **AI-Native Project Lifecycle** from [ai-native-project-playbook.md](../ai-native-project-playbook.md).

---

## 📋 The Chronological & Concept Dependency Artifact Loop

All project files are sequentially numbered (0 onwards) so that they appear in exact chronological and concept dependency order in all directory listings (`dir`, `ls`, IDE file explorers):

```text
projects/<project-slug>/
├── 0_context.md     # Standing project background, domain facts, and constraints
├── 1_intent.md      # Stage 1: Envision (problem, opportunity, target audience, done criteria)
├── 2_spec.md        # Stage 2: Scope (locked structure, requirements, non-goals)
├── 3_draft.md       # Stage 3: Build (AI-native comprehensive first-pass draft)
├── 4_review.md      # Stage 4: Test (red-team critique, factual verification, human expert gate)
├── 5_final.md       # Stage 5: Deploy (polished, authoritative deliverable committed for impact)
└── 6_feedback.md    # Stage 6: Iterate (field outcomes, stakeholder impact, next cycle triggers)
```

---

## 🚀 How to Launch a New Project

1. Copy [`_template-project/`](./_template-project/) to `projects/<new-project-slug>/`.
2. Fill out `0_context.md` (standing domain facts) and `1_intent.md` (problem statement and scope).
3. Partner with an AI agent using the `ai-native-project-engine` skill to lock `2_spec.md`, generate `3_draft.md`, conduct peer review in `4_review.md`, and deploy to `5_final.md`.
4. After real-world deployment or feedback, capture learnings in `6_feedback.md`.
