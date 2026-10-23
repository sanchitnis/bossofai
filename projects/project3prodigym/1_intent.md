---
project: project3prodigym
stage: 1-plan
artifact: intent
version: v3
owner: Sanjay
created: 2026-10-16
updated: 2026-10-19
status: draft
tags: [prodigym, gym-for-brain, srujana-pathway, challenge-based-learning, 3DLA, 64-hcs, iks, vivekananda, all-streams, all-levels, stage-1]
---

# Intent: PROdiGYM, the gym for brain

> **Verification**: Light loop (see [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md)). Not yet run. Only a single-agent self-check has been done.
>
> **v3 (2026-10-19):** Expands the vision from adult habit-building MVP to a **universal gym for brain** serving all learner levels and all academic streams. Adds: Srujana Pathway as navigation spine; Challenge-Project taxonomy (12 project types × all streams); 3-Dimensional Learner Analytics (ACP, DED, HCS); 64 Human-Centric Skills framework (Minerva structure × Vivekananda/IKS × modern competencies); Chain-of-Challenges model for individual and team learner pathways; Getting Started page design for Srujana Pathway levels L1–L4. Core v2 intent (adult habit gym, taking charge, atomic habits methods, peer review, no API calls) is **preserved and extended**, not replaced.

## 1. Problem / Opportunity
- Schools, colleges, and workplaces teach content far more than they teach **how to learn, how to take charge, and how to grow as a complete human being**. This gap is Sanjay's founding observation [C-004, unverified as measured gap].
- The gap is not just about habits — it is about a **lack of structured, progressive, challenge-based practice** across three dimensions that matter in the AI era:
  1. **Collaborating with AI effectively** (prompting, directing, auditing, and remaining the expert in the loop).
  2. **Deep domain expertise** in one's chosen field (the human becomes irreplaceable precisely because AI cannot substitute deep contextual judgment).
  3. **64 human-centric skills** (inner mastery, values, thinking, communication, creativity, collaboration, leadership, and societal responsibility) that are uniquely human and increasingly valued.
- Learners at **every stage** — first-year undergraduates, research scholars, post-docs, faculty, and working professionals — lack a structured, self-sustaining, practice-oriented environment to develop these capabilities. Most existing platforms address only one dimension or one audience segment.
- **Challenge-Based Learning (CBL)** and **Problem-Based Learning (PBL)** have strong pedagogic evidence for deeper engagement and transfer, yet most institutional curricula deliver them only sporadically, not as a continuous gym-like practice with a chain of progressively harder challenges.
- AI makes routine cognitive work cheap, so judgment, self-direction, and collaboration become **the scarce and valuable human contribution**. This is the founding premise of Boss of AI.
- One-off workshops give exposure, not repetition. Habit research suggests automaticity takes 18–254 days (mean ~66 days in one study of 82 undergraduates) [C-012]. A challenge gym that provides daily practice and progressive difficulty is a qualitatively different intervention from a workshop or a MOOC.
- Learners rarely have a **3-dimensional baseline** of where they stand on AI collaboration, domain depth, and human-centric skills. Without a baseline, neither the learner, nor the coach, nor the institution can design a meaningful chain of challenges.

## 1a. The Challenge-Project Taxonomy (exhaustive across all streams)

PROdiGYM challenge-projects span **12 project types** and **all academic streams**. Each project has: a Challenge/Problem statement, Learning Outcomes (LOs), a Deliverable, a Guru (mentor), and a 3DLA dimension it primarily develops.

### 12 Project Types

| # | Type | Description | Primary 3DLA Axis |
|---|------|-------------|-------------------|
| P1 | **Learning** | Systematically learn a concept, framework, or skill through study, curated materials, and Socratic dialogue. Produce a learning artefact (mind map, primer, annotated bibliography). | DED |
| P2 | **Teaching** | Teach a concept to peers, juniors, or community. Design and deliver a session, workshop, or tutorial. Receive structured feedback. | HCS (communication, empathy) |
| P3 | **Creating Learning Resources** | Design, build, and publish a course module, textbook chapter, explainer video, interactive quiz, or annotated problem set. | HCS + DED |
| P4 | **Building / Generating** | Build a tangible artefact: prototype, product, solution, artwork, performance, legal brief, architectural model, medical case analysis, engineering design. | DED |
| P5 | **AI-Native Coding / Development** | Use AI coding agents to build software, data pipelines, automation tools, or agent workflows. Human as architect and auditor. | ACP + DED |
| P6 | **Research** | Design and execute a structured inquiry: literature survey, empirical study, experiment, or computational investigation. Produce a report, preprint, or patent disclosure. | DED + ACP |
| P7 | **Consulting / Advisory** | Analyse a real organisation's problem and deliver a structured recommendation. Engage with stakeholders; defend recommendations. | HCS + DED |
| P8 | **Design** | Apply design thinking: empathise, define, ideate, prototype, test. Produce a design artefact with user validation evidence. | HCS + DED |
| P9 | **Community Service / Social Impact** | Identify a community need, design an intervention, execute it, and document impact. Pair with real beneficiaries. | HCS |
| P10 | **Advocacy / Policy** | Research a policy issue, develop a position paper or brief, and present to a simulated or real stakeholder audience. | HCS + DED |
| P11 | **Arts, Culture & Humanities** | Create an original work (literary, visual, performative, archival). Situate it in a cultural and intellectual context. | HCS |
| P12 | **Interdisciplinary / Cross-Stream** | A challenge that deliberately spans two or more domains. Requires collaboration between learners from different streams. | ACP + HCS + DED |

### Challenge-Projects across All Streams (illustrative, not exhaustive)

> Each cell is an example challenge title. A full library will be built in Stage 3.

#### STEM Streams

| Stream | L1 Explorer | L2 Builder | L3 Innovator | L4 Pioneer |
|--------|------------|------------|--------------|------------|
| **Computer Science / IT** | P1: Trace how a large language model generates one token | P5: Build a multi-agent task automator for a campus problem | P6: Benchmark two LLM architectures on a domain task | P5+P6: Architect and publish an AI-native open-source tool |
| **Electronics / ECE** | P1: Map the signal path in a 5G base station | P4: Design a sensor fusion prototype for precision agriculture | P6: Investigate edge inference efficiency on FPGA vs GPU | P4+P6: Patent a novel hardware AI accelerator design |
| **Mechanical Engineering** | P1: First-principles analysis of a heat exchanger | P4: Build and test a cost-optimised cooling fin prototype | P6: Compare additive vs subtractive manufacturing for a component | P7: Consult for an SME on energy efficiency in a production line |
| **Civil / Infrastructure** | P1: Read and critique a real structural analysis report | P8: Design an inclusive public space using participatory methods | P6: Research seismic resilience in heritage buildings | P10: Draft a policy brief on urban flood resilience |
| **Environmental Science** | P1: Map the carbon footprint of a university campus | P4: Build a low-cost water quality monitoring system | P6: Conduct a biodiversity survey and analyse with AI tools | P10: Develop a net-zero roadmap for a municipality |
| **Mathematics / Statistics** | P1: Explain Bayes' theorem to a non-mathematician (P2 variant) | P6: Replicate and critique a published statistical claim | P6: Design an original mathematical model for a social problem | P6: Submit a research paper to a recognised mathematics journal |
| **Physics / Materials** | P1: Write a Feynman-style explainer on quantum entanglement | P4: Synthesise and characterise a novel thin-film sample | P6: Computational modelling of material properties | P6: Publish findings in a materials science journal |
| **Biotechnology / Life Sciences** | P1: Trace the CRISPR-Cas9 mechanism step by step | P4: Design an experiment to test antimicrobial properties of a plant extract | P6: Bioinformatics analysis of a public genomic dataset | P6+P4: File a provisional patent on a novel bioprocess |
| **Data Science / AI / ML** | P1: Reproduce a published ML result from scratch | P5: Build an end-to-end data pipeline with AI agents | P6: Novel dataset curation and benchmark for an underserved domain | P6: Publish a paper at a recognised ML/AI conference |

#### Professional and Applied Streams

| Stream | L1 Explorer | L2 Builder | L3 Innovator | L4 Pioneer |
|--------|------------|------------|--------------|------------|
| **Law** | P1: Brief a landmark Supreme Court judgment | P7: Draft a legal memorandum on a live policy issue | P6: Comparative analysis of AI regulation frameworks (India vs EU) | P10: Submit a policy brief to a parliamentary committee |
| **Architecture / Urban Design** | P1: Analyse a vernacular building tradition | P8: Design an adaptive reuse project for an abandoned structure | P6: Research passive cooling in hot-arid climates | P4: Develop an award submission for a built or speculative project |
| **Medicine / Health Sciences** | P1: Trace the pathophysiology of a common condition | P4: Design a patient education tool using plain language | P6: Systematic review of a diagnostic or treatment question | P7: Consult for a rural health programme on AI-assisted diagnostics |
| **Management / Business** | P1: Case analysis of a startup failure | P7: Develop a go-to-market strategy for a social enterprise | P6: Primary research on consumer behaviour in a niche market | P4: Launch a micro-venture and document the lean startup process |
| **Education / Pedagogy** | P3: Design a Srujana Pathway-aligned challenge for a peer group | P2: Teach a complex topic to a younger cohort and reflect | P6: Research efficacy of challenge-based learning in a local school | P3: Publish an open educational resource adopted by ≥100 learners |
| **Economics / Policy** | P1: Decompose a government budget line and its second-order effects | P7: Advisory note on economic impact of an AI policy | P6: Econometric study of a local labour market question | P10: Author a policy brief adopted or acknowledged by a public body |
| **Psychology / Counselling** | P1: Survey evidence on a common cognitive bias | P8: Design a wellbeing intervention for a student population | P6: Replicate a classic psychology experiment with modern tools | P10: Draft ethical guidelines for AI-assisted mental health tools |
| **Design / Fine Arts** | P11: Create an original work responding to a social challenge | P8: User research and prototype for an inclusive product | P6: Archival and critical analysis of a design movement | P4+P11: Exhibit a body of work with a defended conceptual statement |
| **Social Work / Sociology** | P9: Map and serve a marginalised community's unmet need | P7: Evaluate a social programme using a structured rubric | P6: Ethnographic study of a community in transition | P10: Advocate for a policy change based on field evidence |
| **Humanities / Languages** | P3: Create an annotated translation of a classical text | P11: Write and publish an original essay in a public forum | P6: Critical discourse analysis of AI in public communication | P12: Interdisciplinary project connecting literature and AI ethics |

#### Research Scholar / Post-doc / Faculty (all streams)

| Stage | Challenge Type | Example |
|-------|---------------|--------|
| Research Scholar | P6 + P5 | Design an AI-augmented research workflow; produce a preprint |
| Post-doc | P6 + P7 | Research a high-impact applied problem; advise an industry partner |
| Faculty | P3 + P6 | Develop a challenge-based course module; publish a pedagogic paper |
| Faculty / Guru | P2 + P12 | Mentor a cross-stream team; co-author a policy brief |

## 1b. The 3-Dimensional Learner Analytics (3DLA) Framework

Every learner in PROdiGYM is measured on **three independent axes**. Progress on each axis is shown as a profile, not a rank. Milestones are demonstrated achievements, not passive scores.

### Axis 1: AI Collaboration Proficiency (ACP)

Measures how effectively the learner uses AI as a force-multiplier while remaining the expert in the loop.

| Level | Milestone descriptor | Demonstrated achievement |
|-------|--------------------|--------------------------|
| ACP-1 | AI Consumer | Can use a chatbot for information and basic drafting |
| ACP-2 | AI Prompter | Writes effective prompts; evaluates and critiques AI output |
| ACP-3 | AI Orchestrator | Directs multi-step AI workflows; applies AI to domain problems |
| ACP-4 | AI Architect | Designs AI-augmented systems; trains others; red-teams AI outputs |
| ACP-5 | AI Pioneer | Publishes or ships original AI-augmented work adopted by others |

### Axis 2: Domain Expert Depth (DED)

Measures depth of knowledge and judgment in the learner's chosen domain. Complements AI breadth; the human is irreplaceable at this axis.

| Level | Milestone descriptor | Demonstrated achievement |
|-------|--------------------|--------------------------|
| DED-1 | Aware | Can explain core concepts in the domain; has completed foundational learning |
| DED-2 | Practising | Has completed an applied project with domain-specific deliverables |
| DED-3 | Competent | Has produced verifiable domain artefacts (reports, prototypes, cases) reviewed by experts |
| DED-4 | Expert | Has contributed original knowledge (research, design, code, practice) in the domain |
| DED-5 | Authority | Recognised by peers or institutions as a source of domain expertise |

### Axis 3: Human-Centric Skills (HCS)

Measures development of the 64 skills across 8 clusters. Each skill uses the Habit Maturity Scale (L0–L4): Unaware → Aware → Practising → Consistent → Identity.

**The 64 Human-Centric Skills — 8 Clusters (PROdiGYM original catalogue)**

> *Synthesized from: Minerva Project HC structure (inspiration only, not copied), Swami Vivekananda's character-development principles (shraddha, ekagrata/concentration, abhayam/fearlessness, seva/service, brahmacharya/disciplined energy, viveka/discernment, vairagya/detachment from outcomes, shravanam/listening), Swami Sarvapriyananda's commentaries on the Upanishads and IKS, and modern competency frameworks (WEF Future of Jobs, OECD Learning Compass 2030). All names and definitions are original.*

| Cluster | Cluster Name | Skills (8 per cluster) |
|---------|-------------|------------------------|
| C1 | **Inner Anchor** (Self-regulation & Character) | Shraddha (deep trust in self and the process), Concentration (Ekagrata), Fearlessness (Abhayam), Patience under uncertainty, Detachment from outcomes (Vairagya), Truthfulness (Satyam), Self-discipline (Niyama), Equanimity under pressure |
| C2 | **Taking Charge** (Agency & Initiative) | Goal-setting and priority clarity, Ownership and follow-through, Bouncing back from setbacks (resilience), Decision-making under uncertainty, Planning and reverse-engineering, Discernment of what is worth wanting (Viveka/Prakamya), Initiative without permission, Self-accountability |
| C3 | **Thinking** (Cognitive rigour) | First-principles reasoning, Systems thinking and feedback loops, Critical evaluation of sources and claims, Logical argumentation and proof, Analogical and lateral thinking, Metacognition (thinking about one's own thinking), Intellectual humility, Comfort with ambiguity |
| C4 | **Listening & Communicating** (Expression & understanding) | Deep listening (Shravanam), Written clarity and precision, Oral communication and storytelling, Visual and data communication, Non-violent and empathetic communication, Questioning and Socratic dialogue, Giving and receiving feedback, Cross-cultural communication |
| C5 | **Creating & Innovating** (Generative capacity) | Curiosity and wonder, Originality (generating non-obvious ideas), Prototyping and iteration, Aesthetic sensibility, Risk-taking and experimentation, Synthesis across domains, Metaphorical and narrative thinking, Making something from nothing |
| C6 | **Collaborating & Leading** (Collective effectiveness) | Building and sustaining trust, Role clarity and distributed leadership, Conflict navigation and mediation, Accountability to team commitments, Mentoring and growing others (Seva), Facilitating group decision-making, Managing across hierarchy and culture, Building inclusive teams |
| C7 | **Adapting & Learning** (Growth orientation) | Learning how to learn (meta-learning), Seeking and integrating feedback, Updating beliefs on new evidence, Coping with failure as information, Managing attention and energy, Habit formation and maintenance, Curiosity-driven self-directed study, Transferring skills across contexts |
| C8 | **Contributing to Society** (Citizenship & service) | Ethical reasoning and integrity, Empathy and social awareness, Environmental and intergenerational responsibility, Civic participation and advocacy, Respect for diversity of thought and tradition, Wisdom (knowledge applied for good), Service orientation (Seva) beyond self-interest, Discernment of collective good (Sarve bhavantu sukhinah) |

**HCS milestone system:** Each learner builds an HCS radar profile. Milestones are earned at L2 (Practising), L3 (Consistent), and L4 (Identity) for each skill, verified by peer review, Guru attestation, or a demonstrated artefact.

## 2. Why this, why us, why now
- **Alternatives and gaps (not yet benchmarked, Q4):** life-skill and social-emotional curricula, habit-tracking and coaching apps, MOOCs on soft skills, challenge-based learning platforms, peer-learning networks. Spec §1 requires a sourced benchmark of at least five before any claim of "nothing like this exists".
- **What we bring:** the Srujana Pathway (a proven 4-stage learner journey from SrujanaBuddy), a challenge-project library across all streams, a 64-HCS framework grounded in both Indian Knowledge Systems (Vivekananda, IKS) and modern competency research, a repo-grounded pedagogy and technique base (Minerva structure, École 42 peer review, Acton accountability squads, Kolb, CBL, PBL, AI coaching), an existing site with Supabase and Vercel, the HEITL philosophy, and the **Prakamya** frame: build the discernment to choose what is worth wanting, for the good of all.
- **A distinctive triple scope:** most platforms target a single dimension. PROdiGYM tracks and develops all three dimensions simultaneously: AI collaboration, domain depth, and human-centric skills — making learner analytics genuinely multi-dimensional.
- **A distinctive cost design:** coaching by an AI partner **without us paying API costs**, through skill files that learners use in their own chatbot, with an in-product coach added later once there are customers (DR-007).
- **Self-sustaining through peer learning:** challenge-projects create peer review opportunities; Gurus are developed from advanced learners (L3/L4) who earn by teaching; the community sustains and scales without proportional staff costs.
- **What changed:** capable chatbots are now widely available to learners. That helps only if the coaching makes the learner think and act, rather than think less. One 10-month randomised study of an AI chatbot coach found goal attainment comparable to human coaches [C-015]; we have seen only its abstract, so treat it as encouraging, not settled.

## 3. Target audience & stakeholders
- **All learner levels (aspiration-and-competency-based, not branch-gated):**
  - **L1 Explorer:** new to structured learning or new to a domain. First-year undergraduates in any stream; career changers; anyone starting something new.
  - **L2 Builder:** applying knowledge, building a portfolio, internship-ready. 2nd–3rd year undergraduates; early-career professionals.
  - **L3 Innovator:** deep inquiry, research, design, and creation. Final-year students, post-graduates, research scholars, mid-career professionals.
  - **L4 Pioneer:** enterprise, expert, Guru. Post-docs, faculty, senior practitioners, founders, policymakers.
- **Teams and cohorts:** groups of 2–6 learners undertaking a shared chain of challenges. Interdisciplinary teams encouraged.
- **Gurus:** domain mentors (human experts, faculty, practitioners, advanced L4 learners) who guide challenge-projects.
- **Practitioners / Institutions:** faculty, L&D leads, educational institutions that adopt PROdiGYM for cohorts.
- **Phase 1 constraint (adults only, 18+):** learners who are adults (18+). School students in Phase 3 via teachers and parents (K11, safeguarding not yet in place).
- **Could be harmed:** any user whose reflections or scores leak or are labelled; participants in peer review (harassment, exposure of personal detail); anyone under 18 who gets in by self-declaring as an adult (K11); practitioners over-trusting weak statistics.
- **Must be consulted before the Phase 1 launch:** the reviewers listed in `0_context.md` §1.

## 4. Theory of change, as testable hypotheses
| # | If we do... | then... | We will know by... | Evidence so far |
|---|---|---|---|---|
| H1 | give each learner a 3D baseline (ACP, DED, HCS), a visible radar profile and weekly consistency feedback | more learners keep practising than with practice alone | [PROPOSED] ≥ 40% of activated learners practise in week 1 and ≥ 20% still in week 5; compare with a variant without the profile | None |
| H2 | learners make a habit plan and do a 5 to 15 minute workout most days | they improve on at least one baseline construct more than a comparison group; self-reported automaticity rises | First read at **8 weeks**, habit claims at **12 weeks or more** (habit research suggests many need longer [C-012]); [PROPOSED] ≥ 60% improve on ≥ 1 construct | Habit-research timing only |
| H3 | learners use the PROdiGYM coach pack (skill files) in their own chatbot | their reflections and next-step plans are of higher quality than with static prompts, scored blind | Pilot A/B; two blind human scorers; agreement reported | None |
| H4 | practitioners see cohort and stalled-learner analytics weekly | they intervene earlier and more learners return after a stall | [PROPOSED] ≥ 70% of active practitioners view weekly; re-engagement after a nudge | None |
| H5 | skills are taught as named, transferable habits practised across several contexts | learners apply a habit in a new context better than in a single-context control | Cross-context rubric (spec §2.2); pilot | Minerva design only; no effect evidence |
| H6 | learners earn credits by reviewing peers' shared work (École 42-style) | review quality, persistence and learning rise | Review-quality rubric; persistence compared with learners who do not review | École 42 description only |
| H7 | learners pair with an accountability partner or small squad (Acton-style) | they practise more consistently than learners without one | Days practised per week; return after a missed week | Acton description only |
| H8 | learners are given a chain of challenge-projects matched to their current Srujana Pathway level and aspiration | they complete more projects and report higher motivation than learners given open-ended projects | Challenge completion rate; self-reported motivation (weekly); compare chain-guided vs unguided cohort | None |
| H9 | challenge-projects span multiple types (P1–P12) across a learner's journey | their 3DLA profile becomes more balanced over time (ACP, DED, and HCS all progress) | 3DLA radar scores at sprint checkpoints | None |
| H10 | teams of 2–6 learners tackle interdisciplinary challenge-projects (P12) | they report higher learning from the project than solo learners on equivalent solo projects | Self-reported and peer-rated learning quality; Guru rating | None |
| H11 | Gurus are developed from advanced (L3/L4) learners who teach through P2 and P3 project types | the platform becomes self-sustaining; mentor supply grows with learner supply | Guru supply ratio per cohort; quality of Guru-guided projects | None |
| H12 | the Getting Started page matches learners to their Srujana Pathway stage (L1–L4) using aspiration and competency signals | learners begin their first challenge-project within 7 days of arriving on the page | Time-to-first-project-start; % who complete the onboarding pathway | None |

*(Cost per active learner becomes a hypothesis only in Phase 2, when API calls arrive. In Phase 1 the cost is hosting, and AI cost to us is zero by design.)*

## 5. Definition of Done
Keep three things apart. Mixing them hides failure.
- **Deliverable done** (the product exists and is verified): `2_spec.md` approved by a human; the **Phase 1 MVP** built to the spec, deployed at `bossofai.org/prodigym`, passing Stage 4 verification (**Standard**, proposed) with the named reviewers; scoring and analytics code covered by automated tests; **no programmatic LLM API calls anywhere in the release**; originality and licence checks passed (no copied Minerva or book content; instrument licences confirmed).
- **Outcome achieved** (the world changed in a measurable way, with a number and a date): to be set when pilot dates are fixed (Q2). **[PROPOSED]** after a pilot of at least two adult cohorts (one college-age adult group, one professional group): H1, H2 (at its stated windows) and H4 thresholds are met, with no privacy or safety incident.
- **Early signals** (cheap indicators within weeks of launch): activation rate, days practised per week, baseline completion, return after day 7, share of learners who complete a habit plan, peer-review completion and quality ratings, accountability-partner pairing rate, practitioner weekly views.

## 6. Constraints, non-negotiables, non-goals
- **Non-negotiables:**
  1. **Privacy first.** Minimum data, row-level security on every table, clear notice and consent, no sale or sharing of identifiable data, learner can export and delete. Build to the standard of India's DPDP Act even before every part is in force [C-006].
  2. **Adults only in Phase 1.** No children in the product until the later phase and the safeguards for it are in place.
  3. **Developmental, not diagnostic.** No clinical claims, no labels, no high-stakes use of scores.
  4. **The human does the thinking and acts.** Coaching asks and challenges; it does not do the learner's task.
  5. **Honest analytics.** Show uncertainty and small-sample caveats; label self-reported data; no causal claims without a comparison design.
  6. **No programmatic LLM API calls in current releases** (DR-007). Coaching uses skill files in the learner's own chatbot.
  7. **Originality and attribution.** Own wording and examples; credit sources; no reproduction of copyrighted text (DR-010).
  8. **Prakamya means discernment, not wish-fulfilment.** Public copy uses the full meaning.
- **Non-goals** (check that no other file in the repo contradicts these):
  - Therapy, diagnosis or clinical assessment.
  - A public social network or public learner profiles. (Peer review is private to reviewer and reviewee, and anonymised by default.)
  - The full multi-domain catalogue in Phase 1.
  - An in-product AI coach, voice practice, multilingual content and a mentor marketplace in Phase 1.
  - Claiming improvement numbers before pilot evidence.
  - Using "gym for brain" (or "Brain Gym") as a name, tagline, domain or hashtag.

## 7. Risks and assumptions
| ID | Risk or assumption | Likelihood | Impact | Mitigation or test |
|---|---|---|---|---|
| K1 | Retention collapses after novelty fades | High | High | Very short workouts, accountability partners, practitioner nudges; H1 test; redesign rule if week-5 retention misses the proposed threshold |
| K2 | Unlicensed or unvalidated psychometric instruments | Medium | High | Only instruments with a confirmed licence (IPIP is public domain, C-007); others only after written permission; own items labelled *experimental*; psychometrician review |
| K3 | Breach or misuse of personal data (reflections, scores, peer-review content) | Low-Medium | High | Data minimisation, RLS, consent records, security review, privacy lawyer sign-off before launch |
| K4 | Coach-pack files give poor or unsafe coaching in a learner's chatbot | Medium | Medium | Human-run test prompts in at least two chatbots before release; clear "not therapy" text; no request for personal data; version control and a report channel |
| K5 | Learners cannot or will not use their own chatbot | Medium | Medium | Static prompts and templates inside the site; peer review and partners as human coaching |
| K6 | Over-claiming impact; self-report bias and practice effects | High | High | Show uncertainty, comparison in pilot, no causal language; **do not promise fixed-day habit formation** |
| K7 | Scope sprawl towards a full catalogue | High | Medium | Phase 1 is D1 only with about 20 habits |
| K8 | Single human gate (Sanjay alone) | High | High | Sanjay arranges the reviewers listed in `0_context.md` §1; Stage 4 records who reviewed |
| K9 | Brand confusion: "Brain Gym" is associated with a registered programme widely regarded as pseudoscience [C-009]; Prakamya misread as "get anything" | Medium | Medium | Do not use "Brain Gym" as a name or tag; use PROdiGYM; full Prakamya meaning in copy; IP adviser check |
| K10 | Learners' data in third-party chatbots is outside our control | Medium | Medium | Say so plainly; coach files never ask for personal identifiers; learner pastes back only what they choose |
| K11 | A minor self-declares as an adult | Medium | High | 18+ declaration, terms, a deactivate-and-delete process, institutional invites where possible, adviser input before launch |
| K12 | Peer-review misuse: harassment, spam, exposure of personal detail, gaming of credits | Medium | High | Anonymised handles, per-submission opt-in, reporting and blocking, quality ratings, moderation, credit limits, code of conduct, community-safety reviewer |
| K13 | Copied or too-close text from Minerva or *Atomic Habits* | Low-Medium | High | Original wording rule, reviewer check, attribution page |
| K14 | Legal timeline or content of children's-data rules changes before Phase 3 | Medium | Medium | Re-check with the legal adviser before Phase 3 [C-006] |
| K15 | Peer review needs critical mass (cold start) | High | Medium | Start with pairs and practitioner-run cohorts; reviewers can be inside the same cohort; do not depend on an open marketplace |

## 8. Open questions
Every question names an owner and a deadline, and says what the answer would change. Deadlines are **[PROPOSED]** until Sanjay sets them.
| ID | Question | Owner | By when | What changes depending on the answer |
|---|---|---|---|---|
| Q1 | ~~Which school had "150 to 160 skills and 5 courses"?~~ **Closed:** Sanjay confirmed Minerva; its own figure is "more than 100" and four Cornerstones (C-001, C-002) | Sanjay | closed 2026-10-16 | Taxonomy target stays our own (about 20 habits in Phase 1) |
| Q2 | Which adult pilot partners (college-age adults, professionals) and when? | Sanjay | [PROPOSED] 2026-11-15 | Cohort sizes, peer-review design, pilot dates |
| Q3 | Who are the named reviewers in `0_context.md` §1? | Sanjay | before Stage 4 | Whether the gate has the expertise it needs |
| Q4 | What does a sourced benchmark of at least five existing offerings show? | Agent, then Sanjay | before spec lock | The "why us" claim and feature priorities |
| Q5 | Which legal advice applies to adult users' data now, and to children's data when Phase 3 nears? | Sanjay, privacy lawyer | before launch (adults); before Phase 3 (children) | Notices, consent, retention; the Phase 3 plan [C-006] |
| Q6 | Which pedagogies and techniques in the wiki does Sanjay want actually used? | Sanjay | before spec lock | Spec §2.1 (map) and the habit catalogue (D15) |
| Q7 | Who writes and reviews habit content (Sanjay, coaches, agent drafts with human review)? | Sanjay | before Stage 3 | Content pipeline |
| Q8 | Which instruments (with confirmed licence) anchor the baseline? | Psychometrician (Q3) | before Stage 3 | Baseline design [C-007] |
| Q9 | Which chatbots must the coach pack be tested on (default: Claude.ai plus one other)? | Sanjay | before Stage 3 | Coach-pack design and test plan |

## 9. Anchors
- [`0_context.md`](./0_context.md), [`2_spec.md`](./2_spec.md), [`claims.md`](./claims.md), [`decisions.md`](./decisions.md)
- Boss of AI intent: [`intent.md`](../../intent.md)
- Pedagogies in the repo: [Minerva](../../wiki/learning_pedagogies/minerva_project_hcas.md), [École 42](../../wiki/learning_pedagogies/ecole_42_peer_learning.md), [Acton Academy](../../wiki/learning_pedagogies/acton_academy_learner_driven.md), [Nai Talim](../../wiki/learning_pedagogies/nai_talim_basic_education.md), [Santiniketan](../../wiki/learning_pedagogies/santiniketan_tagore_open_air.md), [Kolb](../../wiki/learning_pedagogies/kolb_experiential_learning.md), [Knowles and heutagogy](../../wiki/learning_pedagogies/knowles_andragogy_heutagogy.md), [PBL](../../wiki/learning_pedagogies/aalborg_bie_pbl.md), [CBL](../../wiki/learning_pedagogies/challenge_based_learning.md); also drafted but judged reference-only or light-use: [Alpha School](../../wiki/learning_pedagogies/alpha_school_2_hour_learning.md), [Khan Lab School](../../wiki/learning_pedagogies/khan_lab_school_mastery.md)
- Techniques: [Atomic Habits](../../wiki/learning_techniques/atomic_habits_behavior_design.md), [Habit-formation research](../../wiki/learning_techniques/habit_formation_research.md), [AI coaching](../../wiki/learning_techniques/ai_coaching.md)
- Minerva curriculum: <https://www.minerva.edu/four-year-curriculum> and H&C introduction PDF <https://www.minerva.edu/public/media/enrollment-center/Minerva-HCs-Intro.pdf> (both accessed 2026-10-16)
