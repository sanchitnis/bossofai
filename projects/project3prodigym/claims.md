---
project: project3prodigym
artifact: claims
---

# Claims Register: PROdiGYM, the gym for brain

Every factual claim, statistic, quotation and citation used in any artifact gets a row. The Grounding Auditor works from this table.

**Status values**: `verified` (source opened and checked, with date) · `unverified` (plausible, not yet checked) · `assumption` (a choice we make, not a fact) · `disputed` · `removed`.

| ID | Claim (as written) | Where used | Source (real, openable link) | Status | Checked by / date | Note |
|---|---|---|---|---|---|---|
| C-001 | Minerva's first year is four year-long Cornerstone courses (Formal Analyses, Empirical Analyses, Multimodal Communications, Complex Systems) | intent §1; spec §2.1 | <https://www.minerva.edu/four-year-curriculum>; <https://www.minerva.edu/public/media/enrollment-center/Minerva-HCs-Intro.pdf> | verified | agent, 2026-10-16 | Course names from a Minerva post on minerva.edu; page and PDF confirm "four" |
| C-002 | Minerva teaches "more than 100" habits and concepts (HCs) across four Cornerstones | intent §1; spec §2.1 | Minerva-HCs-Intro.pdf (above) | verified | agent, 2026-10-16 | Use Minerva's own figure only; a 2023 student blog's "76" is not used |
| C-003 | A US school has "150 to 160 life-skill modules and about 5 courses" | earlier chat draft only | none | removed | agent, 2026-10-16 | Did not match Minerva; Q1 closed (Minerva) |
| C-004 | Schools, colleges and workplaces teach content far more than self-regulation, agency and human-centric skills | intent §1 | none cited | unverified | | Founder's observation. Needs sources or soften |
| C-005 | Habits need repeated, spaced practice rather than one-off exposure | intent §1; spec §2.4 | see C-012 for timing; spacing itself not sourced | unverified | | Repetition over weeks is supported by C-012; spacing/retrieval claim still needs a source |
| C-006 | India's DPDP Act 2023 treats under-18s as children, requires verifiable parental consent, and bars tracking/behavioural monitoring of children (with exemptions); DPDP Rules notified Nov 2025, children's provisions phased in about 18 months later (around May 2027) | spec §2.9; context | secondary sources (law-firm summaries) read 2026-10-16 | unverified | agent, 2026-10-16 | Secondary sources only. Privacy lawyer must confirm text, dates and exemptions before Phase 3 and before launch notices |
| C-007 | IPIP items and scales are public domain, usable for any purpose including commercial | spec §2.3 | International Personality Item Pool site (ipip.ori.org) | verified | agent, 2026-10-16 | Says nothing about translation or attribution; ask IP adviser. Brief Resilience Scale, GSE, Grit-S and habit-automaticity scales remain unverified and unused |
| C-008 | École 42 has no teachers, lectures or tuition; peer evaluation, 4-week piscine, gamified project tree | spec §2.1 | [`ecole_42_peer_learning.md`](../../wiki/learning_pedagogies/ecole_42_peer_learning.md) | unverified | | Our wiki page only; verify against 42's sources |
| C-009 | "Brain Gym" is claimed as a mark by the Educational Kinesiology Foundation (USPTO record serial 73654046, status not confirmed; India unknown) and the programme is widely regarded as pseudoscience (e.g. Ofsted 2018 called it a "gimmick") | context §3; intent K9; spec §2.10 | Justia trademark record; press reports | unverified | agent, 2026-10-16 | Not legal advice. Our own wording "gym for brain" avoids the phrase; descriptive use is lower risk than use as name/tag; IP adviser to confirm |
| C-010 | Minerva's design (explicit teaching of named habits, cross-context grading) is a useful model for our taxonomy | intent §1; spec §2.1 | Minerva pages; [`minerva_project_hcas.md`](../../wiki/learning_pedagogies/minerva_project_hcas.md) | assumption | | Design choice, not evidence of effect |
| C-011 | The site is a Vite + React + TypeScript + Tailwind + Radix SPA with Supabase and Vercel | context §2 | `web/package.json`, `vercel.json`, `supabase/schema.sql` | verified | agent, 2026-10-16 | Read from files |
| C-012 | Lally et al. (2010): 96 undergraduates, average ~66 days to automaticity (range 18 to 254 predicted); one missed day made little difference; self-reported | spec §2.1, §2.4 | <https://bps.org.uk/research-digest/how-form-habit> | verified | agent, 2026-10-16 | From a research digest, not the paper; student sample |
| C-013 | Minerva's website carries "© Minerva Project, Inc. All Rights Reserved" and states its name, logo and trade dress are trademarks | context §2; spec §2.1 | minerva.edu footer | verified | agent, 2026-10-16 | Basis for DR-010: original catalogue only |
| C-014 | *Atomic Habits* is a copyrighted book; the cue/craving/response/reward and make-it-obvious/attractive/easy/satisfying framework is described by secondary sources | spec §2.1 | [`atomic_habits_behavior_design.md`](../../wiki/learning_techniques/atomic_habits_behavior_design.md) | unverified | | Paraphrase and attribute only; framework is not a tested intervention |
| C-015 | A randomised study found an AI chatbot coach about as effective as human coaches for goal attainment over ten months | spec §2.1; ai_coaching page | Terblanche et al., PLoS ONE 2022 (via DOAJ) | verified | agent, 2026-10-16 | Abstract only; specific chatbot design; one study |
| C-016 | Alpha School outcome claims | spec §2.1 | [`alpha_school_2_hour_learning.md`](../../wiki/learning_pedagogies/alpha_school_2_hour_learning.md) | unverified | | Company claims only; reference-only |
| C-017 | Acton Academy model: Socratic guides, accountability partners, contract, badges, sprints | spec §2.1 | [`acton_academy_learner_driven.md`](../../wiki/learning_pedagogies/acton_academy_learner_driven.md) | unverified | | Own-site description; no independent evidence |
| C-018 | Nai Talim (Gandhi, Wardha 1937): learning through useful work | spec §2.1 | [`nai_talim_basic_education.md`](../../wiki/learning_pedagogies/nai_talim_basic_education.md) | unverified | | Philosophy anchor only |
| C-019 | Patha Bhavana (Santiniketan) founded 1901 with five students | spec §2.1 | [`santiniketan_tagore_open_air.md`](../../wiki/learning_pedagogies/santiniketan_tagore_open_air.md) | unverified | | Methods not detailed in sources |
| C-020 | Khan Lab School uses mastery-based progression | spec §2.1 | [`khan_lab_school_mastery.md`](../../wiki/learning_pedagogies/khan_lab_school_mastery.md) | unverified | | Thin source |
| C-021 | Implementation intentions have medium-to-large effects (Gollwitzer and Sheeran 2006) | spec §2.1 | [`habit_formation_research.md`](../../wiki/learning_techniques/habit_formation_research.md) | unverified | | Source blocked by bot protection; not used in learner copy until verified |
