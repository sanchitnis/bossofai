# Project Context: Boss of AI, Organization Setup (Project 0)

> **Cold-Open Context Note**: Read this file first. It states what is true today, what is only proposed, and what is undecided. Update it when reality changes. Anything marked **[PROPOSED]** is an agent's suggestion awaiting a human decision; it is not a fact or a commitment.

## Working Mode

**Mode 1: Sequential Human-Gated.** One artifact at a time; stop at each human gate.
**Stakes level for verification:** Light for `1_intent.md` and `2_spec.md`; **Heavy** for `3_draft.md` (a governance charter that funders and partners will rely on). See [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md).

> Mode 2 (Heavy panel) is expected at Stage 4. The panel needs at least one reviewer on a different model or harness from the Author, and the human gate must include at least one reviewer who is not a co-author (decision D-008).

---

## 1. Institutional background
- **Organization**: Boss of AI (bossofai.org). Open repo: `github.com/sanchitnis/bossofai`.
- **Lead founder / current sole human gate**: Sanjay. This is a single point of approval and a conflict-of-interest risk (founder, author and approver are the same person). See issue F-005 and decision D-008.
- **Domain**: Education × AI. Preparing educational institutions, the academic community and society for abundant intelligence.
- **Architecture**: Strategic Knowledge Base (`wiki/`) plus AI-Native Project Engine (`projects/`).
- **Child project**: [`project1aigurukul`](../project1aigurukul/) (AI-Gurukul 2.0), the first venture project.

## 2. Current state (verified by reading the repo on 2026-10-09)

Work has run well ahead of Stage 1. Recording it here is deliberate: the process is only honest if the record is.

| Area | What exists | Where | Lifecycle status |
|---|---|---|---|
| Strategy | Concept note, one-pager, strategy and learnings, site redesign plan | `strategy/` | Written outside the lifecycle; not verified |
| Method | Srujana Pathway, T.R.A.C.K., SPOT-PROBE, cascading theory, pedagogy pages | `wiki/` | Written outside the lifecycle; not verified |
| Website | Vite/React app with role pages, join form, Google sign-in code, deployment config | `web/`, `vercel.json` | Built and iterated without a spec |
| Data capture | Supabase schema and an `audience_inquiries` form | `supabase/`, `web/src/pages/Join.tsx` | Live behaviour depends on environment variables being set |
| Outreach | Plan and LinkedIn templates | `outreach/` | Drafts; no evidence of results in repo |
| Operations | Meta-venture plan, task board, standups | `planning/` | Calls itself "Project 0" (see §4) |
| Community | WhatsApp community link on the site; role for AI agents | `web/` | Added 2026-10-09 |
| Experts / partners | `data/mentors.json` lists the founder and **placeholder** entries only | `data/mentors.json` | No named independent expert or partner is recorded in the repo |
| Legal entity | **Not recorded in the repo** | n/a | Open (D-001) |
| `wiki/semantic/`, `wiki/procedural/templates/` | **Do not exist**, though v0 files cited them | n/a | Fixed in this revision (see §3) |
| "5-tier Cognitive Memory Architecture" | **Not defined anywhere in the repo**, though v0 made it a standing decision and a Done criterion | n/a | Open (D-006) |

## 3. Standing decisions and assumptions

Human decisions live in [`decisions.md`](./decisions.md) with IDs. Summary:

- **Recorded in v0 (kept):** the organization is both a knowledge base and a project incubator; projects follow the 6-stage lifecycle; HEITL applies everywhere.
- **Changed in this revision [PROPOSED]:**
  - v0 Decision 2 said AI-Gurukul is the organization's "first physical expression" in Bangalore. That pre-empts Project 1's own open question about campus form. Reworded: AI-Gurukul is the first venture project; its physical form is undecided.
  - v0 Decision 4 required knowledge to be organized under a "5-tier Cognitive Memory Architecture". Nothing defines it. Until it is defined or dropped (D-006), no artifact may rely on it.
  - v0 citation standard pointed to `wiki/semantic/sources/`, which does not exist. New standard: link to real files in this repo, or to URLs with an access date, and log every factual claim in [`claims.md`](./claims.md).

## 4. Glossary and naming

| Canonical | Meaning | Legacy or confusable names |
|---|---|---|
| **Boss of AI** | The organization, site (bossofai.org) and repo (`bossofai`) | **PRODIGY / Project PRODIGY / prodigym** are earlier names that still appear in `index.html`, `strategy/`, `planning/`, `outreach/`, `logs/`. **JP AI Future Study Group** appears in skill files and is the origin community. |
| **Project 0** | This project: establishing the organization and its charter | `planning/meta_venture_plan.md` and `planning/task_board.md` also call the *operational* plan "Project 0". **[PROPOSED]** treat those as inputs to this project, and rename them "Operational plan" when next edited (D-007). |
| **HEITL** | Human-in-the-loop gate: agents draft, humans decide | |
| **Agent** | An AI collaborator working under the lifecycle; a colleague, not a servant (see the site's AI agent role) | "AI agents (Antigravity)" in v0 named a vendor tool; replaced by the generic term |
| **Loop A/B/C/D** | Lifecycle, Build, Verify-and-deliberate, Maintain | See the protocol |

## 5. Style and tone
- **Voice**: strategic, plain, evidence-grounded. Say what is verified and what is hope.
- **Audience**: institution leaders, funders, domain experts, policymakers.
- **Length**: charter 10 to 14 pages [PROPOSED; v0 said 8 to 12 for fewer sections].
- **Citations**: real, openable links; every factual claim has a row in `claims.md`.
- **Language**: plain English; define jargon on first use.
