---
name: prodigym-collab-project-starter
description: Start new collaborative challenge-projects for individual learners or teams on PROdiGYM (bossofai.org/prodigym). Maps the learner to their Srujana Pathway level (L1 Explorer to L4 Pioneer), selects an appropriate challenge-project type from the 12-type taxonomy (P1 Learning to P12 Interdisciplinary), scaffolds the 0_context.md and 1_intent.md for the challenge-project, populates the learner's Chain of Challenges, and sets up 3-Dimensional Learner Analytics (ACP, DED, HCS) baselines. Trigger whenever the user says "start a new project", "I want to do a challenge", "help me find a project", "build a team challenge", "what should I work on next", or similar.
---

# PROdiGYM Collaborative Project Starter Skill

This skill operationalises the Challenge-Project model from projects/project3prodigym/1_intent.md §1a and §1b. It guides an AI agent or mentor to launch a new challenge-project for an individual or team of learners within the PROdiGYM gym-for-brain ecosystem.

**Core references (read before running this skill):**
- projects/project3prodigym/0_context.md — glossary, decisions, standing rules.
- projects/project3prodigym/1_intent.md §1a — 12 project types; §1b — 3DLA framework; Challenge-Project tables.
- D:/sanjay/SrujanaBuddy/docs/srujana-pathway.md — 4-stage Srujana Pathway.

---

## Step 1: Learner Profile Elicitation

Before selecting a project, gather signals from the learner (or team representative). Use a conversational, warm tone.

### 1a. Aspiration Question (mandatory)
> "Tell me about what you want to achieve — your personal aspiration or career goal."

Listen for: Domain or field of interest, personal aspiration, team or solo preference, existing work.
Record: aspiration, domain, team_size (1=solo, 2-6=team).

### 1b. Competency Signal (choose 2-3 questions)
> "Have you done any project work, internships, or independent study in your area?"
> "What is the most complex thing you have built, researched, or created?"
> "On a scale of 1-5, how confident are you in using AI tools?"

Infer Learner Level (do NOT ask learner to self-label):

| Signal pattern | Inferred Level |
|----------------|---------------|
| No prior project, new to structured learning | L1 Explorer |
| Has done coursework/clubs; wants internship-ready skills | L2 Builder |
| Has an internship, substantial artefact, wants deeper work | L3 Innovator |
| Has research experience, expert status, wants to lead/mentor | L4 Pioneer |

### 1c. Srujana Pathway Stage Mapping

| Learner Level | Srujana Pathway Stage | Focus |
|--------------|----------------------|-------|
| L1 Explorer | Stage 1: Curriculum, Clubs & Self-Learning | Foundations, AI literacy, domain fundamentals |
| L2 Builder | Stage 2: Internships & Applied Work | Real-world application, portfolio building |
| L3 Innovator | Stage 3: Products, Research & Consulting | Deep inquiry, IP creation, expert collaboration |
| L4 Pioneer | Stage 4: Venture, AI-Era Careers & Enterprise | Commercialisation, mentoring, systemic impact |

---

## Step 2: Challenge-Project Selection

### 2a. The 12 Project Types

| # | Type | Description | Primary 3DLA Axis |
|---|------|-------------|-------------------|
| P1 | Learning | Systematically learn a concept through study and Socratic dialogue. Produce a learning artefact. | DED |
| P2 | Teaching | Teach a concept to peers, juniors, or community. Design and deliver a session. | HCS |
| P3 | Creating Learning Resources | Design and publish a course module, explainer video, quiz, or annotated problem set. | HCS+DED |
| P4 | Building / Generating | Build a tangible artefact: prototype, product, design, legal brief, artwork. | DED |
| P5 | AI-Native Coding | Use AI coding agents to build software, pipelines, or agent workflows. Human as architect. | ACP+DED |
| P6 | Research | Design and execute a structured inquiry. Produce a report, preprint, or patent disclosure. | DED+ACP |
| P7 | Consulting / Advisory | Analyse a real organisation's problem and deliver a structured recommendation. | HCS+DED |
| P8 | Design | Apply design thinking: empathise, define, ideate, prototype, test. | HCS+DED |
| P9 | Community Service | Identify a community need, design an intervention, execute it, and document impact. | HCS |
| P10 | Advocacy / Policy | Research a policy issue and develop a position paper or brief. | HCS+DED |
| P11 | Arts, Culture & Humanities | Create an original work situated in cultural and intellectual context. | HCS |
| P12 | Interdisciplinary | A challenge spanning two or more domains requiring cross-stream collaboration. | ACP+HCS+DED |

### 2b. Project Selection Logic

- New to a topic -> P1 (Learning) or P2 (Teaching a peer)
- Wants to build skills and portfolio -> P4 (Building) or P5 (AI-Native Coding)
- Wants to do research or publish -> P6 (Research)
- Wants to advise or consult -> P7 (Consulting)
- Wants to design for users -> P8 (Design)
- Wants to serve the community -> P9 (Community Service)
- Wants to influence policy -> P10 (Advocacy/Policy)
- Wants to create art or culture -> P11 (Arts/Culture)
- Team from different streams -> P12 (Interdisciplinary)
- Wants to create learning for others -> P3 (Learning Resources)

RULE: Never assign a project whose complexity exceeds the learner level by more than one step.

### 2c. Present the Recommended Challenge

State clearly:
1. Project Type (e.g., P5: AI-Native Coding)
2. Challenge statement (one sentence)
3. Learning Outcomes (2-4 bullet points)
4. Deliverable (the artefact that proves the work is done)
5. 3DLA Axis (primary dimension: ACP, DED, or HCS)
6. Sprint duration (1 day for L1 micro; 1-2 weeks L2; 2-4 weeks L3; 4-8 weeks L4)
7. Guru needed (Y/N and what expertise)

### 2d. Chain of Challenges (present 3-5 next steps)

```
Chain of Challenges: [Learner Name] -> [Aspiration]

  Challenge 1 (Now):           [P-type] [Title] — Sprint: [duration] — 3DLA: [axes]
  Challenge 2 (Next):          [P-type] [Title] — Sprint: [duration] — 3DLA: [axes]
  Challenge 3 (Later):         [P-type] [Title] — Sprint: [duration] — 3DLA: [axes]
  Challenge 4 (Milestone):     [P-type] [Title] — Sprint: [duration] — 3DLA: [axes]
  Challenge 5 (Aspiration):    [P-type] [Title] — Sprint: [duration] — 3DLA: [axes]
```

RULE: Each chain must develop all 3 axes over its full length. No chain neglects any axis for more than 2 consecutive challenges.

---

## Step 3: 3DLA Baseline

Present as a warm conversation, not a test:
> "Let us take a quick snapshot of where you are starting. This is your baseline, not a grade."

### ACP Baseline (AI Collaboration Proficiency)
1. "Describe a time you used an AI tool for something meaningful."
2. "Have you written a prompt specifically to get a certain output?"
3. "Have you built anything with AI assistance — code, a workflow, a document pipeline?"

| Level | Descriptor | Demonstrated achievement |
|-------|-----------|--------------------------|
| ACP-1 | AI Consumer | Uses a chatbot for information and basic drafting |
| ACP-2 | AI Prompter | Writes effective prompts; evaluates and critiques AI output |
| ACP-3 | AI Orchestrator | Directs multi-step AI workflows; applies AI to domain problems |
| ACP-4 | AI Architect | Designs AI-augmented systems; trains others; red-teams AI |
| ACP-5 | AI Pioneer | Publishes or ships original AI-augmented work adopted by others |

### DED Baseline (Domain Expert Depth)
1. "What is the most advanced thing you have done in your domain?"
2. "Have you produced an artefact reviewed by someone else?"
3. "Have you contributed original knowledge in your domain?"

| Level | Descriptor | Demonstrated achievement |
|-------|-----------|--------------------------|
| DED-1 | Aware | Can explain core concepts; completed foundational learning |
| DED-2 | Practising | Completed an applied project with domain-specific deliverables |
| DED-3 | Competent | Produced verifiable domain artefacts reviewed by experts |
| DED-4 | Expert | Contributed original knowledge in the domain |
| DED-5 | Authority | Recognised by peers/institutions as domain expertise source |

### HCS Baseline (Human-Centric Skills — 64 skills, 8 clusters)
Ask one reflective question per relevant cluster:
- C1 Inner Anchor: "Tell me about a time you stayed focused on something difficult."
- C2 Taking Charge: "Tell me about a time you set a goal and followed through."
- C3 Thinking: "How would you approach a problem you have never seen before?"
- C4 Communicating: "Tell me about a time your communication made a real difference."
- C5 Creating: "Tell me about something original you made."
- C6 Collaborating: "Tell me about a team experience and your role in it."
- C7 Adapting: "Tell me about a time you failed and what you did with that experience."
- C8 Contributing: "Tell me about something you did that helped someone beyond yourself."

Score each: L0 Unaware / L1 Aware / L2 Practising / L3 Consistent / L4 Identity.

Record baseline in the learner's profile as YAML:
```yaml
3DLA_baseline:
  date: YYYY-MM-DD
  ACP: ACP-[1-5]
  DED: DED-[1-5]
  HCS:
    C1_inner_anchor: L[0-4]
    C2_taking_charge: L[0-4]
    C3_thinking: L[0-4]
    C4_communicating: L[0-4]
    C5_creating: L[0-4]
    C6_collaborating: L[0-4]
    C7_adapting: L[0-4]
    C8_contributing: L[0-4]
```

---

## Step 4: Challenge-Project Scaffold

Create files under projects/prodigym-challenges/[learner-slug]-[challenge-slug]/ following the Boss of AI lifecycle structure (0_context.md, 1_intent.md).

The 0_context.md must include: Working Mode, Challenge Statement, Learning Outcomes, Deliverable, Guru details, 3DLA Development Focus, Non-goals, Risks.

The 1_intent.md must include YAML frontmatter and sections: Problem/Challenge, Aspiration Link, Deliverable/Definition of Done, Learning Outcomes table, Constraints, Plan/Milestones, Guru Review Gate.

---

## Step 5: Team Challenges (team_size >= 2)

Assign roles before the sprint begins:
- Lead (owns the deliverable, coordinates)
- Research/Domain anchor (deepest domain knowledge)
- AI Orchestrator (directs AI tools for the team)
- Communicator/Scribe (writes and presents)
- Quality Reviewer (challenges assumptions, red-teams)
- Community/User liaison (for P7-P10 only)

Create a shared Accountability Squad space: weekly 15-min check-in; shared progress visibility.

P12 interdisciplinary teams: explicitly record each member's domain. A single-domain challenge must not be labelled P12.

Every team member reviews at least one other member's contribution before the final deliverable is assembled.

---

## Step 6: Guru Matching

| Project Type | Guru expertise needed |
|-------------|----------------------|
| P1 Learning | Domain expert who can Socratically guide exploration |
| P2 Teaching | Experienced educator or facilitator |
| P3 Learning Resources | Instructional designer or experienced faculty |
| P4 Building | Senior practitioner in the domain |
| P5 AI-Native Coding | AI engineer or technical architect |
| P6 Research | Research faculty, post-doc, or domain researcher |
| P7 Consulting | Industry practitioner with consulting experience |
| P8 Design | UX/design practitioner or design faculty |
| P9 Community Service | NGO leader or social entrepreneur |
| P10 Advocacy/Policy | Policy analyst, lawyer, or public policy academic |
| P11 Arts/Culture | Artist, curator, or humanities faculty |
| P12 Interdisciplinary | Two+ Gurus from different domains |

SELF-SUSTAINING RULE: As learners reach L3/L4, actively invite them to become Gurus for L1/L2 challenges. A P2 or P3 challenge for an L3 learner is simultaneously their own learning project AND the beginning of their Guru track.

---

## Step 7: Session Output Format

```
================================================================================
PROdiGYM Challenge-Project Brief
================================================================================
Learner:        [Name / Team name]
Level:          [L1-L4] . Srujana Stage [1-4]
Domain:         [Domain]
Project Type:   [P-type] — [Type name]
Challenge:      [One-sentence challenge statement]
Deliverable:    [Specific artefact]
Sprint:         [Duration] . Ends: [Target date]
Guru:           [Name or TBD]

3DLA Baseline
  ACP: [ACP-1 to ACP-5]    DED: [DED-1 to DED-5]
  HCS focus: [C-clusters targeted]

Chain of Challenges (next 3)
  1. [Next challenge title] — [P-type] — [duration]
  2. [After that] — [P-type] — [duration]
  3. [Milestone challenge] — [P-type] — [duration]

Files created:
  projects/prodigym-challenges/[slug]/0_context.md
  projects/prodigym-challenges/[slug]/1_intent.md
================================================================================
```

---

## Guardrails

1. ONE CHALLENGE AT A TIME. Do not load a learner with more than one active sprint. Pause before starting the next.
2. NO DIAGNOSIS, NO LABELS. The 3DLA baseline is developmental, not evaluative. Never share a learner's baseline without their consent.
3. GURU IS NOT A LECTURER. The Guru asks questions, creates conditions for discovery, and reviews the deliverable. The Guru does NOT do the work.
4. AI AUGMENTS, HUMAN LEADS. In P5 and AI-heavy challenges, the human must be the architect and auditor. An AI-only deliverable is not accepted.
5. NO API CALLS FROM PRODIGYM IN PHASE 1. AI coaching uses coach packs (skill files) in the learner's own chatbot. This skill does not call any LLM API directly.
6. PRIVACY. Learner profiles and 3DLA baselines have RLS. Do not share individual data with a Guru or cohort admin without explicit consent.
7. ADULTS ONLY IN PHASE 1 (18+). Do not onboard learners under 18 until Phase 3 safeguards are in place.
