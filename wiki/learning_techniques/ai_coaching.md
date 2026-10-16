---
title: AI Coaching: Questions, Challenge and Accountability from an AI Partner
tags: [ai-coaching, coaching, socratic, skill-md, chatbot, technique]
aliases: [AI Coach, Coaching Chatbot, Socratic AI Coach, Skill-based Coaching]
status: draft-v0.1
evidence_status: one randomised-trial abstract reviewed; sample and context details not seen (2026-10-16)
---

# AI Coaching

Using an AI partner to coach: ask questions, challenge assumptions, help set goals and check progress, rather than hand over answers.

## What evidence we have
- A two-part longitudinal randomised study (human coaches, then a replication with an AI chatbot coach), each with two control groups, followed clients' **goal attainment over ten months**. Both human and AI coaching beat the controls, and by the end the **AI coach was as effective as the human coaches**. The authors also note that AI lacks empathy and emotional intelligence. *Source: [Terblanche et al., PLoS ONE (2022), indexed on DOAJ](https://doaj.org/article/404b88a4fa3b4d5799600dcd0fb8371b), abstract only, accessed 2026-10-16.*
- **Caveats:** we have not seen the sample size or population, the chatbot was a specific design (not necessarily a general large language model), and one study is not a body of evidence.

## How PROdiGYM uses it (proposed; Sanjay to confirm)
- **Release 1 (no API cost): skill files.** Coaching is delivered by a set of **`SKILL.md` coach files** (and a plain-text prompt version) that the learner loads into **their own chatbot** (for example Claude.ai, or any chatbot that accepts custom instructions). No programmatic API calls and no credits are needed. The website provides the files, instructions and a way to **log the outcome** of a coaching session (the learner pastes a short summary).
- **Later releases (after testing and early customers): in-product coach** that calls an AI model through a server, with per-learner credit caps. **If credits run out or are unavailable, it falls back to the skill-file route**, so a no-cost coaching path always exists.
- **Coach behaviour:** ask before telling; use a visible rubric; stay on the learner's goal; no clinical advice; encourage the learner to do the thinking. A common structure is goal, reality, options, plan (for example the GROW model; to verify before citing).

## Cautions
- Data privacy: what a learner types into their own chatbot is governed by *that* provider's terms, not ours. The site must say so plainly.
- Self-reported logs are not verified data. Analytics must label them as self-reported.
- Adults only in the first release. Age rules of the chatbot provider also apply.

## Related
- [[atomic_habits_behavior_design|Atomic Habits]]
- [[acton_academy_learner_driven|Acton Academy (Socratic guides)]]
- [[knowles_andragogy_heutagogy|Knowles and heutagogy]]
- Wiki home: [[index|Wiki Home]]
