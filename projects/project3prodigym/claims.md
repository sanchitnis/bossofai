---
project: project3prodigym
artifact: claims
---

# Claims Register: PROdiGYM, the Brain Gym

Every factual claim, statistic, quotation and citation used in any artifact gets a row. The Grounding Auditor works from this table.

**Status values**: `verified` (source opened and checked, with date) · `unverified` (plausible, not yet checked) · `assumption` (a choice we make, not a fact) · `disputed` · `removed`.

| ID | Claim (as written) | Where used | Source (real, openable link) | Status | Checked by / date | Note |
|---|---|---|---|---|---|---|
| C-001 | Minerva's first year is four year-long Cornerstone courses (Formal Analyses, Empirical Analyses, Multimodal Communications, Complex Systems) | intent §1; spec §1 | <https://www.minerva.edu/four-year-curriculum>; <https://www.minerva.edu/public/media/enrollment-center/Minerva-HCs-Intro.pdf> | verified | agent, 2026-10-16 | Course names are from a Minerva student post on minerva.edu; the page and PDF confirm "four" |
| C-002 | Minerva teaches more than 100 habits of mind and foundational concepts (H&Cs), spread over the four Cornerstones | intent §1; spec §2 | <https://www.minerva.edu/public/media/enrollment-center/Minerva-HCs-Intro.pdf> | disputed | agent, 2026-10-16 | Minerva's own PDF says "more than 100" (text partly truncated in the search result); a 2023 student blog says 76. Use "about 100 or more" and re-check the PDF before quoting any number |
| C-003 | A US school has "150 to 160 life-skill modules and about 5 courses in year one" (founder's recollection) | earlier chat draft only | none | removed | agent, 2026-10-16 | Did not match Minerva (4 courses, 100+). Not used in any artifact. Open question Q1 |
| C-004 | Schools, colleges and workplaces teach content far more than they teach self-regulation, agency and human-centric skills (a measured gap) | intent §1 | none cited | unverified | | Founder's observation. Needs sources or soften |
| C-005 | Habits need repeated, spaced practice rather than one-off exposure | intent §1; spec §2.4 | none cited | unverified | | Cite learning-science sources (spacing, deliberate practice) or remove |
| C-006 | India's Digital Personal Data Protection Act 2023 (and its rules) requires verifiable parental consent before processing children's (under 18) data | spec §2.9; intent Q5 | none cited | unverified | | Do not rely on this. A qualified legal adviser must confirm current law and rules before any minor is onboarded |
| C-007 | Candidate baseline instruments (IPIP-derived scales, Brief Resilience Scale, General Self-Efficacy scale, Grit-S) can be used under licences that permit our use | spec §2.3 | none cited | unverified | | Check each licence in writing (commercial vs non-commercial use, adaptation, translation). None is used until confirmed |
| C-008 | École 42 has no teachers, lectures, textbooks or tuition and relies on peer evaluation, a 4-week "piscine" and a gamified project tree | intent H6; spec §2.1 | [`wiki/learning_pedagogies/ecole_42_peer_learning.md`](../../wiki/learning_pedagogies/ecole_42_peer_learning.md) | unverified | | Source is our own wiki page, not an external check. Verify against 42's own sources |
| C-009 | "Brain Gym" is an existing trademarked educational-kinesiology programme whose claims are contested | 0_context §3; intent K9; spec §2.10 | none cited | unverified | | Founder-side and agent recollection. Check trademark registers and independent reviews before final naming |
| C-010 | Minerva's design (explicit teaching of named habits, cross-context grading) is a useful model for our taxonomy | intent §1; spec §2.1 | Minerva pages above; [`minerva_project_hcas.md`](../../wiki/learning_pedagogies/minerva_project_hcas.md) | assumption | | A design choice, not evidence that it works for our audiences |
| C-011 | The existing site is a Vite + React + TypeScript + Tailwind + Radix SPA with Supabase and Vercel | 0_context §2 | `web/package.json`, `vercel.json`, `supabase/schema.sql` in this repo | verified | agent, 2026-10-16 | Read from files at commit `77d7d62` |
