# Project Context: AI-Gurukul 2.0 — Center of Excellence for Teacher Training

> **Cold-Open Context Note**: Standing project-specific facts, institutional background, standing constraints, and key decisions. Any agent or human contributor should be able to read this file cold before starting work.

## Working Mode

**Mode 1 — Sequential Human-Gated (Default)**
This project follows Mode 1. Complete one lifecycle artifact at a time; pause after each for human expert review and explicit sign-off before proceeding to the next stage.

**Stakes level for verification:** Light for `1_intent.md` and `2_spec.md`; **Heavy** for `3_draft.md` (child safety, assessment fairness and money are all in play). See [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md).

> **Mode 2 at Stage 4.** The Heavy panel (lenses: Adversary, Grounding Auditor, Pedagogy and assessment, Child safety and data protection, Equity and access, Finance) is run as manual turns in any harness, with at least one reviewer on a different model. No API-based LLM orchestration. The human gate needs a reviewer who is not a co-author.



---

## 1. Institutional Background
- **Parent Organization**: Boss of AI (bossofai.org) — Project 1 under the AI-Native Project Engine.
- **Lead Founder**: Sanjay (single human gate today; no named collaborating experts are recorded in the repo)
- **Sponsoring Domain**: Education × AI — Teacher Training & Institutional Capacity Building
- **Physical Center Location**: Bangalore is the working assumption, not a decision. Whether Phase 1 rents space or builds a campus is open (decision G-D4).
- **Source Documents**:
  - `AI-Gurukul_2.0_Concept_Note.md`: concept note and pitch narrative (v2.0, October 2026)
  - `INTENT.md`: the original intent document (v1.0). **Superseded by `1_intent.md` v2**; kept for history. Where they differ, `1_intent.md` wins. This repo previously had three versions in play (INTENT v1.0, 1_intent v1.1, concept note v2.0); that drift is fixed here.

## 2. Standing Decisions & Assumptions
- **Decision 1**: The program is mastery-gated (no progression without demonstrated mastery); lecture-based formats are explicitly excluded.
- **Decision 2**: Peer evaluation is a core learning act — and its quality is itself examined at every Viva by an independent Expert Committee.
- **Decision 3**: Every learner project must be "socially useful productive work" (Gandhian SUPW principle) — no toy exercises.
- **Decision 4**: The Expert Committee is independent of program management and has authority to fail, require rework, or mandate re-evaluation.
- **Decision 5**: The center is designed for financial sustainability through a mixed-revenue model — not tuition dependence from individual teachers.
- **Decision 6**: Advanced levels (3–4) are virtual and open-source; foundational levels (1–2) are residential intensives.

> These six decisions were recorded in v1 and are carried forward as **working assumptions, not human-approved decisions**; the log is `decisions.md`. Decisions 1, 2, 4 and 6 are tested by hypotheses in `1_intent.md` §4 and by the review questions in `2_spec.md`.

## 3. Pedagogical Inspiration Sources (Non-Negotiable Reference Points)
| Source | Principle Borrowed |
|---|---|
| École 42 (Paris) | Peer-to-peer, project-based, no lectures |
| Minerva University | Habits of Mind; active applied sessions |
| Alpha School | AI-driven personalized tutoring |
| Acton Academy | Learner-driven studios; Hero's Journey |
| Khan Lab School | Mastery-based progression |
| Gandhian Nai Talim | Socially Useful Productive Work (SUPW) |
| Rabindranath Tagore / Santiniketan | Whole-person education; learning in nature |

## 4. Style & Tone Standards
- **Target Length**: Varies by artifact (intent: 10–15 pages; spec: 5–8 pages; draft: 20–30 pages)
- **Voice**: Evidence-grounded, pedagogically rigorous, inspiring, and actionable.
- **Target Audience**: Pedagogy experts, AI/domain experts, education-sector leaders, institutional partners, and financiers.
- **Citation Standard**: `wiki/semantic/sources/` does not exist. Link to real files in this repo or to URLs with an access date, and log every factual claim in `claims.md`.
- **Pedagogy sources**: the table above lists inspirations, not evidence. Only some have pages in `wiki/learning_pedagogies/` (Aalborg, challenge-based learning, École 42, andragogy, Kolb, Minerva). Alpha School, Acton, Khan Lab School, Nai Talim and Santiniketan have no page yet, so their claims need sources before use.
- **Relationship to Boss of AI**: this project moves to its own repository. The canonical loop protocol stays in `bossofai` (`protocols/agentic-loops.md`); a copy is vendored here with its version noted.
