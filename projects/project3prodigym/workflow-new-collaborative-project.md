---
workflow: prodigym-new-collaborative-project
version: v1
created: 2026-10-19
owner: Sanjay
description: Step-by-step workflow for starting a new collaborative challenge-project on PROdiGYM. Can be run by an AI agent (using the prodigym-collab-project-starter skill) or by a human Guru or practitioner.
---

# Workflow: Starting a New PROdiGYM Collaborative Challenge-Project

**Purpose:** Launch a challenge-project for an individual learner or team (2-6 people), grounded in the Srujana Pathway and the 3-Dimensional Learner Analytics (3DLA) framework.

**Prerequisite skills to load:**
- `.agents/skills/prodigym-collab-project-starter/SKILL.md` (this workflow operationalises it)
- `projects/project3prodigym/0_context.md` (glossary, standing decisions)
- `projects/project3prodigym/1_intent.md` (challenge taxonomy, 3DLA framework)

---

## Phase 0: Pre-flight (5 minutes)

| Step | Action | Owner | Output |
|------|--------|-------|--------|
| 0.1 | Confirm learner is 18+ (adults only in Phase 1) | Guru / Agent | Verbal confirmation or sign-up record |
| 0.2 | Confirm team size (solo or 2-6) | Guru / Agent | `team_size` recorded |
| 0.3 | Ask: "What is your aspiration or goal?" | Guru / Agent | `aspiration`, `domain` recorded |
| 0.4 | Infer Learner Level (L1-L4) from competency signals (do NOT ask learner to self-label) | Guru / Agent | `learner_level`, `srujana_stage` recorded |

**Output of Phase 0:** Learner profile snapshot: `{ name, aspiration, domain, team_size, learner_level, srujana_stage }`.

---

## Phase 1: Challenge Selection (10-15 minutes)

| Step | Action | Owner | Output |
|------|--------|-------|--------|
| 1.1 | Select 1-2 appropriate project types from P1-P12 using the selection logic in the skill | Agent / Guru | `project_type`, `project_type_name` |
| 1.2 | Write the Challenge Statement (one sentence: "Your challenge is to...") | Agent draft, Guru/Learner approve | `challenge_statement` |
| 1.3 | Define 2-4 Learning Outcomes linked to 3DLA axes | Agent draft, Guru reviews | `learning_outcomes[]` |
| 1.4 | Define the Deliverable (specific, reviewable artefact) | Guru + Learner agree | `deliverable` |
| 1.5 | Set Sprint duration appropriate to level (L1=1-3d, L2=1-2w, L3=2-4w, L4=4-8w) | Guru | `sprint_duration`, `sprint_end_date` |
| 1.6 | Identify Guru expertise needed and assign (or mark TBD) | Coordinator | `guru_name_or_tbd` |
| 1.7 | Present the Chain of Challenges (3-5 next steps after this one) | Agent | `chain_of_challenges[]` |

**Output of Phase 1:** Challenge brief (presented using the output format in the skill).

---

## Phase 2: 3DLA Baseline (15-20 minutes)

Run the 3-question baseline protocol from the skill for each axis:

| Axis | Protocol | Score |
|------|----------|-------|
| ACP | 3 reflective questions about AI tool use | ACP-1 to ACP-5 |
| DED | 3 reflective questions about domain work | DED-1 to DED-5 |
| HCS | 1 question per relevant cluster (3 clusters minimum) | L0-L4 per cluster |

Record in YAML format in the learner's profile file.

**Note:** The baseline is developmental, never evaluative. Never share without learner consent.

---

## Phase 3: Project Scaffolding (10 minutes)

| Step | Action | Owner | Output |
|------|--------|-------|--------|
| 3.1 | Create project directory `projects/prodigym-challenges/[learner-slug]-[challenge-slug]/` | Agent | Directory created |
| 3.2 | Create `0_context.md` for the challenge-project using the template from the skill | Agent | `0_context.md` committed |
| 3.3 | Create `1_intent.md` for the challenge-project using the template from the skill | Agent | `1_intent.md` committed |
| 3.4 | If team (team_size >= 2): assign roles (Lead, Domain Anchor, AI Orchestrator, Communicator, Reviewer) | Guru + Team | `team_roles.md` or roles noted in `0_context.md` |
| 3.5 | Set up Accountability Squad (shared check-in cadence: weekly 15 min) | Guru | Squad schedule noted |
| 3.6 | Add the challenge-project to the learner's Chain of Challenges log | Agent | `chain-of-challenges.md` updated |

**Mode rule:** Default is Mode 1 (Guru-gated after each milestone). For simple L1 micro-challenges, Mode 3 (autonomous, single sprint, Guru reviews at end) is permitted.

---

## Phase 4: Kick-off (15 minutes with learner/team)

| Step | Action | Owner | Output |
|------|--------|-------|--------|
| 4.1 | Present the Project Brief (using the output format in the skill) | Guru / Agent | Brief shared with learner/team |
| 4.2 | Confirm learner/team understanding of: Challenge, Deliverable, Sprint, Review Gate | Guru | Verbal or written confirmation |
| 4.3 | Learner/team sets their first milestone date and commits to Week 1 action | Learner / Team | Week 1 commitment noted in `1_intent.md` |
| 4.4 | Guru explains the review gate: "At the end of the sprint, you present your deliverable. I will ask you to defend it. You don't pass by submitting — you pass by being able to explain every choice." | Guru | Learner understands |
| 4.5 | Share the Coach Pack instructions (how to use PROdiGYM coaching via their own chatbot) | Agent / Guru | Learner has coach pack access |

---

## Phase 5: Sprint Execution (duration = sprint_duration)

The learner runs their sprint. The Guru does NOT do the work. The Guru's role during the sprint:

- Check in once per week (15 min max) to ask: "What did you do? What got in the way? What is your next step?"
- Use Socratic questions, not answers.
- Note any scope creep and redirect: "Is this in your deliverable, or is it an expansion? Let's stay in scope."
- For team challenges: ensure the AI Orchestrator role is being used, and that the human lead is still the architect.

---

## Phase 6: Review Gate (Guru sign-off)

| Step | Action | Owner | Output |
|------|--------|-------|--------|
| 6.1 | Learner/team submits deliverable (as peer-review-ready draft or final) | Learner | Deliverable submitted |
| 6.2 | Peer review (at least 1 peer reviewer, using the PROdiGYM review rubric: clear, kind, specific, useful) | Peer / Cohort | Peer review note on deliverable |
| 6.3 | Guru reviews against Learning Outcomes and Deliverable spec from `1_intent.md` | Guru | Review notes |
| 6.4 | Guru holds a 20-minute viva: asks the learner to explain 3 choices they made | Guru | Pass / Conditional / Redo decision |
| 6.5 | If Pass: update 3DLA scores; unlock next challenge in the Chain; celebrate | Guru + Agent | `3DLA_checkin` updated in profile |
| 6.6 | If Conditional: learner refines one specific element and resubmits within 1 week | Learner | Revised deliverable |
| 6.7 | If Redo: the sprint was too big or the challenge was wrong — redesign the challenge (go back to Phase 1) | Guru | Redesign |

---

## Phase 7: 3DLA Check-in and Next Challenge

| Step | Action | Owner | Output |
|------|--------|-------|--------|
| 7.1 | Update the learner's 3DLA profile with new scores | Agent | `3DLA_checkin` in profile YAML |
| 7.2 | Show the learner their before/after on all three axes | Guru / Agent | Visual or textual comparison |
| 7.3 | Present the next challenge in the Chain of Challenges | Agent / Guru | Next challenge selected |
| 7.4 | If the learner is ready to be a Guru (L3/L4): invite them to mentor one L1/L2 challenge | Guru | Guru invitation |
| 7.5 | Commit all files; update `projects/prodigym-challenges/README.md` | Agent | Files committed |

---

## Guardrails (apply throughout)

1. **No API calls from PROdiGYM in Phase 1.** AI coaching uses coach packs in the learner's own chatbot.
2. **Adults only (18+).** Do not run this workflow for anyone under 18 until Phase 3 safeguards are in place.
3. **Guru is not a lecturer.** If the Guru is explaining more than asking, stop and ask a question instead.
4. **One challenge at a time.** Never start Phase 1 for a new challenge until the previous sprint is at Phase 6 or formally paused.
5. **Privacy.** Learner profiles and 3DLA baselines have RLS. Do not share without explicit consent.
6. **Honest analytics.** Never claim improvement without a comparison. Self-report data is labelled as such.
7. **Prakamya principle.** Every challenge should ultimately serve someone beyond the learner. Ask: "Who benefits if you succeed at this?"

---

## Quick Reference: Workflow Phases

```
Phase 0: Pre-flight          (5 min)   → Learner profile snapshot
Phase 1: Challenge Selection (15 min)  → Challenge brief + Chain
Phase 2: 3DLA Baseline       (20 min)  → Baseline YAML recorded
Phase 3: Scaffolding         (10 min)  → 0_context.md + 1_intent.md created
Phase 4: Kick-off            (15 min)  → Learner/team committed
Phase 5: Sprint Execution    (variable) → Learner does the work
Phase 6: Review Gate         (30 min)  → Pass / Conditional / Redo
Phase 7: Next Challenge      (15 min)  → 3DLA updated, chain continues
```

Total agent/Guru time (Phases 0-4 + 6-7): approximately 90-120 minutes.
Learner sprint time: 1 day (L1) to 8 weeks (L4), as appropriate.
