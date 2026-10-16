---
project: project3prodigym
artifact: decisions
---

# Decision Log: PROdiGYM, the gym for brain

Human decisions, backward moves in the lifecycle, and overrules of agent consensus or impasse. One entry per decision. Never edit an old entry; add a new one that supersedes it.

Entries below record what Sanjay said in chat on 2026-10-16. Proposals and defaults in `2_spec.md` §5 are **not** decisions until a human records them here.

| ID | Date | Decision | Decided by | Reasoning | Alternatives rejected | Supersedes | Review by |
|---|---|---|---|---|---|---|---|
| DR-001 | 2026-10-16 | The product is **PROdiGYM**, a section of Boss of AI at `bossofai.org/prodigym`; **Prakamya** is the guiding philosophy, not the product name. Tagline (draft): "Everyone can be a prodigy, with AI and practice." The word "Gym" stays in the name | Sanjay | PROdiGYM is clear and ties to HEITL; Prakamya carries the societal "what is worth wanting" meaning but can be misread alone | Prakamya Gym as the product name; "Brain Gym" as a name (trademark and credibility concerns, C-009) | | before launch |
| DR-002 | 2026-10-16 | Do **not** ask the core team for early feedback on the idea. Build the complete solution first, then circulate it for feedback | Sanjay | Feedback is more useful on a working solution | Sending the WhatsApp request for input now | | when MVP is built |
| DR-003 | 2026-10-16 | Use the repo's pedagogies as design sources; Minerva is the reference for the skill taxonomy. Work follows the playbook (context, intent, spec), **review the spec**, then build | Sanjay | Keeps the product grounded in the repo's methodology | Starting to build before a spec | | at spec lock |
| DR-004 | 2026-10-16 | Phase 1 is **adults only (18+)**. School students come later (Phase 2 or 3) through their teachers and parents | Sanjay | Avoids children's-data obligations at launch | Include school students in v1 |  | Phase 3 start |
| DR-005 | 2026-10-16 | MVP domain is **Taking Charge of Life**, including self-regulation, using **Atomic-Habits-style** habit design. Concept gains a **techniques and methods layer** (including AI coaching) beside pedagogies | Sanjay | Inside-out ladder; habit method fits D1 | Two-domain MVP (v1) |  | spec lock |
| DR-006 | 2026-10-16 | **Peer review is in the first version** | Sanjay | Learning value and École 42-style credits | Defer to Phase 2 |  | after Pilot 0 |
| DR-007 | 2026-10-16 | **No programmatic LLM API calls in any current release** (product and agent review). AI cost (D6) moves to Phase 2. AI coaching in Phase 1 runs via skill files in the learner's own chatbot; this stays as fallback when credits run out | Sanjay | Avoid API cost until tested and initial customers exist | API-based Challenger in v1 | Spec v1 §2.5 default; D8 | before Phase 2 |
| DR-008 | 2026-10-16 | **Single human gate**: Sanjay alone. He arranges the reviewers listed in `0_context.md` | Sanjay | Simplicity | Multi-person gate |  | each gate |
| DR-009 | 2026-10-16 | "gym for brain" is used only as an ordinary phrase, not as a mark. Agent view: lower risk in descriptive lowercase text, higher as a name/tag/domain/heading; IP adviser to confirm (C-009) | Sanjay (agent view recorded) | Metaphor is the founder's | Avoiding the phrase entirely |  | IP adviser check |
| DR-010 | 2026-10-16 | Minerva: build **our own catalogue**; attribute; no copyrighted material. Copyright check done (C-013) | Sanjay | Minerva content is © and trademarked | Copy or reword Minerva's list |  | spec lock |
| DR-011 | 2026-10-16 | Add wiki pages for Alpha, Acton, Khan Lab, Nai Talim, Santiniketan; use pedagogies and techniques **only where relevant**, with Sanjay's confirmation (D15) | Sanjay | Avoid decorative borrowing | Use all |  | spec lock |
| DR-012 | 2026-10-16 | Push all changes to GitHub on a branch (`project3-prodigym-spec`); Sanjay merges later | Sanjay | Work visible and safe | Keep local |  | merge |
| DR-013 | 2026-10-16 | Age bar: the site is for 18+ only; show a notice "This site is for people aged 18 and over. A version for children is coming soon." | Sanjay | Clear expectation; children's version planned | No notice |  | Phase 3 start |
| DR-014 | 2026-10-16 | Wording: use the wording "gym for brain" (lowercase, ordinary words) everywhere instead of "brain gym", and never as a name or mark. Agent note: case does not change trademark rights; the non-name use is what lowers risk; IP adviser to confirm | Sanjay (agent note recorded) | Avoid the mark issue | Avoid the phrase entirely | DR-009 (refines) | IP adviser check |
| DR-015 | 2026-10-16 | Add the verification loop: AI agent review, discussion on the deliberation board, human expert in the loop takes the final call | Sanjay | Improves artifacts before the human reads them; keeps human accountability | Human-only review |  | each gate |
| DR-016 | 2026-10-16 | Merge `project3-prodigym-spec` into `main` and push; any further changes go on separate branches | Sanjay | Spec work is ready to live on main | Keep on branch | DR-012 | next change |
| DR-017 | 2026-10-16 | Replace "brain gym" with "gym for brain" in our own wording everywhere (project files, registry, strategy one-pager, site title). Third-party trademark references keep the original mark name for accuracy | Sanjay | Avoids the phrase "Brain Gym" | Lowercase "brain gym" (DR-014) | DR-014 (refines) | IP adviser check |
