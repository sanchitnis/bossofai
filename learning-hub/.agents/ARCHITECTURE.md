# the Academic Platform — Agentic Academic Platform Architecture

> A Human-AI Collaborative System for AI-Era Curriculum Development, Portfolio-First Learning,
> Enterprising Student Formation, Srujana Pathway, Personalised Tutoring, Stakeholder Governance,
> and Institutional Excellence — aligned to ADDIE, NBA-OBE, NEP 2020, and the platform's Vision and Mission

---

## the platform Vision and Mission

**Vision:** To become a technologically advanced, sustainable global university dedicated to the wellbeing of all.

**Mission:**
- Provide learner-centric education leveraged with cutting-edge technologies
- Foster stewardship by nurturing talent, leadership qualities, and entrepreneurial thinking in a safe and secure environment
- Promote liberal studies and foster the pursuit of performing arts, literature, sports, and other creative and intellectual disciplines
- Promote a culture of collaboration and cooperation
- Serve humanity and promote sustainability through higher education based on universal values

**Platform Promise:** Every course, every semester, every student emerges with a richer portfolio, a sharper enterprising mindset, a verified skill credential, and a clear personal trajectory — while the platform advances to Top 100 NIRF, deepens global partnerships, and lives its vision of wellbeing for all.

---

## Foundational Design Philosophy

### Human-AI Collaboration as the Operating Principle

This platform is not an AI system that generates academic content autonomously. It is a **collaborative intelligence environment** where human judgment, institutional wisdom, faculty expertise, industry insight, and student agency are the primary authors — and AI is the accelerator, the quality mirror, and the tireless first-draft partner.

Every step — analysis, curriculum design, industry validation, BOS deliberation, content creation, assessment design, student mentoring — is a **human-AI dialogue**: AI contributes speed, breadth, pattern recognition, and structured outputs; humans contribute values, contextual judgment, relationships, creativity, and final authority.

No curriculum decision, no course approval, no assessment goes forward on AI output alone. The platform is a scaffold for better human decisions, not a replacement for them.

### The Enterprising Student as the North Star

The central output of this platform is a graduate who is **enterprising** — someone who:

- Sees problems as opportunities
- Initiates action rather than waiting for permission
- Collaborates across boundaries and disciplines
- Communicates with clarity and conviction
- Reasons ethically under uncertainty
- Adapts and learns continuously in the face of change
- Creates value for others — through technology, service, art, research, or leadership

This is broader than entrepreneurship. An enterprising nurse, civil servant, researcher, and founder all share these qualities. Every course, every assessment, and every Srujana stage is designed with this graduate in mind.

### PEO Ambition in the AI Era

Program Educational Objectives are **raised** in this platform. AI augmentation means the platform graduates are expected to perform tasks and take on responsibilities that previously required 5–6 years of industry experience. PEOs reflect this raised ambition. COs embed the assumption that students work alongside AI tools — assessed on judgment, synthesis, creative application, and ethical reasoning, not on tasks that AI can do faster.

---

## Overview

The the platform Academic Agent Platform is a modular, multi-agent collaborative system covering the entire academic lifecycle — from future-of-jobs intelligence gathering through programme design, stakeholder validation, Board of Studies governance, content delivery, portfolio-building assessments, adaptive personalisation, and institutional positioning. It operates across online, face-to-face, and hybrid modes and integrates NBA accreditation, NIRF ranking strategy, the Srujana entrepreneurial pathway, and internationalisation by design.

The platform consists of:

- **Specialist Agents** — Role-based AI collaboration partners (not autonomous actors)
- **Skills** — Domain-specific knowledge and process modules loadable on demand
- **Workflows** — Human-AI collaborative procedures for end-to-end academic operations
- **Validators** — Quality-gate scripts for OBE compliance, portfolio integrity, AI-readiness, and accreditation

---

## Directory Structure

```plaintext
.academic-agent/
├── ARCHITECTURE.md                  # This file
├── agents/                          # Specialist Academic Agents
├── skills/                          # Domain Skills organised by category
│   ├── addie/                       # ADDIE Process Skills
│   ├── obe-nba/                     # OBE and NBA Compliance Skills
│   ├── curriculum/                  # Curriculum Design Skills
│   ├── course-design/               # Course Design Skills
│   ├── content/                     # Content Development Skills
│   ├── assessment/                  # Assessment and Evaluation Skills
│   ├── labs-projects/               # Lab, Project, and Experiential Skills
│   ├── pedagogy/                    # Pedagogy and Instructional Design Skills
│   ├── social-learning/             # Community and Social Learning Skills
│   ├── adaptive/                    # Adaptive and Personalised Learning Skills
│   ├── technology/                  # EdTech and Platform Integration Skills
│   ├── analytics/                   # Learning Analytics and Reporting Skills
│   ├── accreditation/               # Accreditation and Documentation Skills
│   ├── faculty-development/         # Faculty Development Skills
│   ├── output-formats/              # Branded Document and Media Output Skills
│   ├── futures-intelligence/        # Future of Jobs and AI-Era Role Intelligence
│   ├── stakeholder-governance/      # Industry Validation, BOS Approval, Human Review
│   ├── enterprising-human-skills/   # Core Enterprising and Human Advantage Skills
│   ├── srujana-pathway/             # Srujana: Skill → Internship → Product/Research → Venture
│   ├── portfolio-publication/       # Portfolio-First Course and Assessment Design
│   ├── ai-personalization/          # AI-Driven Tutoring and Personalised Learning
│   ├── certification-mooc/          # NPTEL, SWAYAM, Professional Certification Integration
│   ├── internationalization/        # Twinning, Dual Degrees, Global Credit Frameworks
│   └── institutional-positioning/   # NIRF, Admissions Excellence, Placement Intelligence
├── workflows/                       # Human-AI Collaborative Procedures
├── rules/                           # Global Academic Quality Rules
└── validators/                      # OBE, Portfolio, AI-Readiness, Pedagogy Validators
```

---

## Agents

Specialist AI collaboration partners. Each agent works alongside humans — generating drafts, analyses, and structured options that humans review, adapt, and approve. Human decision authority is non-negotiable at every stage.

### Core Academic Lifecycle Agents

| Agent | Role in Human-AI Collaboration | Key Skills Used |
| ----- | ------------------------------ | --------------- |
| `orchestrator` | Coordinates multi-agent workflows; surfaces the right agent at the right moment; routes human decisions to the correct governance step | parallel-agents, addie-phase-router, human-ai-handoff-protocol |
| `curriculum-architect` | Co-designs programmes with faculty curriculum committees; drafts PEOs at raised AI-era ambition; maps POs, PSOs, course structures, and minor frameworks for human review | peo-ai-era-designer, po-design, pso-design, programme-structure-designer, minor-framework-designer |
| `course-designer` | Partners with faculty to draft AI-augmented COs, CO-PO maps, module sequences, and portfolio linkage for faculty validation and approval | co-ai-augmented-designer, co-po-mapping, blooms-aligner, course-outline-writer, portfolio-co-linker |
| `session-planner` | Works with faculty to suggest active learning strategies, Bloom's-aligned activities, and proctored skill tasks for faculty selection and adaptation | unit-plan-designer, active-learning-strategies, scaffolding-designer, proctored-activity-designer |
| `content-developer` | Generates first-draft learning objects — notes, slides, case studies — for faculty review, editing, and contextualisation | lecture-notes-generator, slide-designer, case-study-developer, ai-ready-content-designer, oer-packager |
| `assessment-engineer` | Drafts HOTS assignments, proctored activities, rubrics, and question banks; flags AI-trivial tasks for human redesign | hots-assignment-designer, proctored-assessment-designer, ai-ready-assessment-auditor, rubric-designer |
| `lab-designer` | Designs lab manuals and virtual labs with lab faculty; every lab produces a portfolio artefact | lab-manual-writer, virtual-lab-designer, h5p-content-creator, portfolio-artefact-designer |
| `project-architect` | Co-designs PBL, capstone, and interdisciplinary projects with faculty; links every project to a portfolio output | pbl-project-designer, capstone-framework, interdisciplinary-project-connector, publication-scaffolder |
| `syllabus-publisher` | Generates course syllabus pages with CO-PO tables, certification map, portfolio milestones; faculty approves before publication | docusaurus-syllabus-publisher, syllabus-page-renderer, certification-credit-mapper |
| `evaluation-analyst` | Computes CO attainment, identifies gaps, and proposes remediation actions for faculty and HOD review | co-attainment-calculator, at-risk-detector, remediation-planner, co-attainment-report-generator |
| `pedagogy-advisor` | Reviews courses for pedagogical quality alongside faculty mentors; advises on Bloom's alignment, UDL, IKS, and enterprising-skills embedding | learning-design-principles, instructional-strategy-selector, universal-design-learning, iks-integration |
| `learning-pathway-designer` | Generates personalised pathways; faculty advisor and student co-decide the chosen path | learning-pathway-engine, honours-fast-track-designer, ai-tutor-configurator, diagnostic-assessment-designer |
| `community-facilitator` | Scaffolds peer learning groups, CoPs, and alumni connections; facilitation decisions rest with faculty and student leaders | collaborative-learning-designer, peer-mentoring-system, alumni-connect-integrator, community-of-practice-builder |
| `experiential-designer` | Designs field immersion, service learning, and design thinking experiences in co-creation with faculty and industry partners | experiential-learning-cycle, service-learning-designer, srujana-phase-router, design-thinking-workshop |
| `faculty-developer` | Generates feedback, coaching plans, and FDP recommendations for faculty reflection and action; the coaching relationship remains human | pedagogical-coaching, ai-pedagogy-coach, course-review-feedback, fdp-programme-designer |
| `student-advisor` | Provides faculty advisors with data-driven insights on at-risk students, Srujana readiness, and placement gaps; humans act on insights | at-risk-detector, placement-readiness-tracker, srujana-counsellor, remediation-planner |
| `analytics-reporter` | Builds dashboards and reports for programme committees, HODs, and VC office; humans interpret and decide | learning-analytics-dashboard, nirf-data-feed, co-attainment-report-generator, programme-review-reporter |
| `technology-integrator` | Configures and integrates EdTech platforms under IT and faculty direction; ensures accessibility and pedagogical fit | lms-course-builder, quizblast-setup, ai-personalization-stack, oci-infrastructure |

### Strategic, Governance, and Positioning Agents

| Agent | Role in Human-AI Collaboration | Key Skills Used |
| ----- | ------------------------------ | --------------- |
| `futures-intelligence-scout` | AI and faculty teams jointly research WEF, NASSCOM, LinkedIn, and global education trends; AI synthesises, humans deliberate and decide on curriculum implications | wef-jobs-scanner, ai-era-role-mapper, nasscom-skills-mapper, linkedin-trends-analyzer, curriculum-currency-checker |
| `stakeholder-validator` | AI prepares validation instruments and synthesises feedback; industry experts and faculty conduct the conversations and take the decisions | industry-review-facilitator, advisory-panel-coordinator, feedback-synthesis-engine, validation-gap-reporter |
| `bos-governance-officer` | Prepares BOS proposals, compliance checks, agendas, and draft minutes; Board deliberates and decides — AI ensures nothing is missed | bos-proposal-formatter, regulatory-compliance-checker, bos-minutes-generator, curriculum-change-tracker |
| `enterprising-skills-designer` | Co-designs enterprising human skills curriculum with faculty; embeds initiative, adaptability, collaboration, ethics, communication, and creativity across all programmes | enterprising-co-designer, human-skills-rubric-builder, liberal-arts-integration-designer, wellbeing-curriculum-designer |
| `srujana-pathway-designer` | Architects Srujana pathway in collaboration with placement, industry relations, and the platform NEST teams; students navigate it with faculty mentors | srujana-stage-designer, internship-framework-builder, product-research-scaffolder, venture-launch-designer |
| `portfolio-architect` | Redesigns courses to be portfolio-first in partnership with faculty; every course produces a publication, product, open source contribution, or documented solution | portfolio-co-linker, publication-scaffolder, open-source-project-designer, product-brief-generator |
| `ai-personalization-engine` | Configures AI tutoring and personalised pathways; human advisors and faculty monitor and intervene | ai-tutor-configurator, personalised-pathway-engine, honours-fast-track-designer, remedial-ai-tutor-designer |
| `certification-integrator` | Maps NPTEL, SWAYAM, and professional certifications to programme credits; faculty and BOS validate equivalences | nptel-credit-mapper, swayam-integration-designer, professional-cert-aligner, mooc-portfolio-recognizer |
| `internationalization-agent` | AI and international relations office jointly research partners and co-draft frameworks; academic leadership and partner institutions negotiate and decide | twinning-programme-designer, dual-degree-framework, international-credit-aligner, global-minor-designer |
| `nirf-accelerator` | Analyses NIRF gaps and builds action plans for leadership review and prioritisation | nirf-parameter-analyzer, nirf-data-pipeline, admissions-excellence-tracker, placement-intelligence-reporter |
| `accreditation-officer` | Prepares NBA SAR, NAAC DVV, and institutional documentation; peer committees and leadership review and certify | nba-sar-generator, naac-dvv-preparer, co-attainment-auditor, programme-review-documenter |
| `interdisciplinary-connector` | Maps minor opportunities across all four models; faculty and programme committees decide which minors to activate | minor-framework-designer, intra-the platform-minor-designer, nptel-swayam-minor-designer, international-minor-designer |

---

## Skills

Modular knowledge domains loaded on demand. Each skill supports human-AI collaboration — generating structured drafts, frameworks, and analyses that humans review, adapt, and approve.

---

### ADDIE Process Skills

| Skill | Description |
| ----- | ----------- |
| `addie-phase-router` | Determines active ADDIE phase; routes to appropriate agents; surfaces human decision gates at each phase transition |
| `needs-analysis` | Supports stakeholder interviews and learner needs synthesis; task analysis; performance gap identification; futures intelligence integration |
| `context-analysis` | Environmental, institutional, stakeholder, and technology context analysis including AI-era readiness and the platform mission alignment |
| `learner-profile-builder` | Entry behaviour mapping, prior knowledge, Srujana stage, AI tool proficiency, and liberal arts interests |
| `learning-design-principles` | Gagne's Nine Events, Merrill's First Principles, Dick and Carey model; holistic and wellbeing-aligned design |
| `instructional-strategy-selector` | Matches teaching strategies to outcomes, Bloom's levels, and enterprising human-skills threads |
| `formative-evaluation` | Mid-process evaluation checkpoints and human-reviewed iteration triggers |
| `summative-evaluation` | End-of-cycle evaluation, revision planning, and improvement loop documentation |
| `addie-documentation-packager` | Compiles full ADDIE artefact set for any course or programme for BOS submission |
| `human-ai-handoff-protocol` | Defines at each workflow step what AI drafts, what humans decide, and what requires formal governance approval |

---

### OBE and NBA Compliance Skills

| Skill | Description |
| ----- | ----------- |
| `peo-ai-era-designer` | PEO formulation raised to AI-augmented ambition: graduates expected to perform at 5–6 year experience levels through AI co-working; aligned to the platform Vision of global, sustainable, technologically advanced graduates |
| `po-design` | NBA 12 Program Outcomes alignment including AI literacy, ethical AI use, sustainability, and global competency |
| `pso-design` | Program Specific Outcomes reflecting AI-era specialisations, industry-defined competencies, and the platform mission |
| `co-ai-augmented-designer` | CO writing embedding AI-augmentation assumptions: tasks achievable with AI raise the cognitive floor; assessment focuses on judgment, synthesis, creation, and ethics |
| `co-po-mapping` | CO-PO and CO-PSO mapping matrix with strength levels (1/2/3); includes enterprising skills PO linkage |
| `co-attainment-calculator` | Direct (CIA, end-sem) and indirect (surveys, portfolio review) attainment computation |
| `co-attainment-threshold-setter` | Target setting and threshold definition for CO attainment decisions |
| `obe-compliance-checker` | Gap analysis against NBA OBE requirements; flags missing portfolio CO linkages and human-skills COs |
| `bloom-level-verifier` | Verifies CO verb alignment with Bloom's taxonomy; ensures HOTS dominance in AI-era courses |
| `nba-documentation` | SAR criterion-wise documentation and self-assessment scoring |
| `attainment-heatmap-generator` | CO-PO coverage heatmap for programme review committees |
| `portfolio-co-linker` | Links every CO to a tangible portfolio artefact: paper, product, open source contribution, or documented solution |

---

### Future Intelligence Skills

*AI and faculty curriculum committees jointly research and deliberate: AI scans and synthesises; humans validate, contextualise, and decide on curriculum implications.*

| Skill | Description |
| ----- | ----------- |
| `wef-jobs-scanner` | Scans WEF Future of Jobs Reports for emerging roles, declining roles, and reskilling priorities; generates structured briefing for committee review |
| `ai-era-role-mapper` | Maps AI-era job roles (Prompt Engineer, AI Product Manager, MLOps, Responsible AI Specialist, etc.) to curriculum competency threads; presented as discussion input for faculty and industry panels |
| `nasscom-skills-mapper` | Integrates NASSCOM FutureSkills Prime and sector skill reports into curriculum gap analysis for human validation |
| `linkedin-trends-analyzer` | LinkedIn Economic Graph insights: in-demand skills, role evolution, hiring trends — compiled as faculty briefing inputs |
| `industry-skills-taxonomy-builder` | Builds and maintains a living the platform skills taxonomy; faculty and industry advisors review and update each cycle |
| `curriculum-currency-checker` | Flags outdated topics, tools, and skills against current industry practice; presents flagged list for faculty action |
| `ai-job-role-profile-generator` | Generates detailed AI-era job role profiles (responsibilities, skills, tools, CO linkage) as starting input for curriculum committee discussions |
| `international-education-trends-scanner` | Scans QS, THE, and global curriculum benchmarks; supports academic leadership in programme positioning discussions |
| `futures-briefing-packager` | Compiles all intelligence into a structured futures briefing document for the annual human-led curriculum review workshop |

---

### Stakeholder Governance Skills

*Industry validation and BOS approval are fundamentally human deliberative processes. AI prepares, structures, and documents — humans conduct the conversations, exercise judgment, and record the decisions.*

| Skill | Description |
| ----- | ----------- |
| `industry-review-facilitator` | Designs structured industry expert review sessions: agenda, review instruments, discussion prompts — humans conduct the conversations |
| `advisory-panel-coordinator` | Manages industry advisory board composition, meeting cadence, agenda, and recommendation documentation |
| `feedback-synthesis-engine` | Synthesises multi-stakeholder feedback into structured curriculum change proposals for faculty committee consideration |
| `validation-gap-reporter` | Documents validation-identified gaps with priority classification and proposed curriculum response for faculty action |
| `bos-proposal-formatter` | Formats curriculum change proposals for BOS review to UGC/AICTE regulatory standards |
| `bos-agenda-generator` | Generates Board of Studies meeting agendas with supporting documents and member briefing materials |
| `bos-minutes-generator` | Drafts structured BOS minutes with decisions, action items, and approval records for secretary review and sign-off |
| `curriculum-change-tracker` | Tracks all changes through proposal → industry validation → BOS deliberation → approval → implementation → evaluation |
| `external-examiner-briefing` | Prepares external examiner briefing documents, question paper review forms, and structured feedback formats |
| `regulatory-compliance-checker` | UGC, AICTE, NEP 2020, and the platform internal policy compliance checks on every curriculum proposal before BOS submission |
| `industry-partner-mou-designer` | Designs structured industry partnership MOUs with curriculum, placement, and research commitments for leadership negotiation |

---

### Curriculum Design Skills

| Skill | Description |
| ----- | ----------- |
| `programme-structure-designer` | Credit distribution, semester layout, theory-lab-project balance, Srujana stage integration, and the platform mission alignment |
| `prerequisite-mapper` | Course dependency and knowledge pre-requisite mapping with visual dependency graph |
| `curriculum-gap-analyzer` | Industry relevance, technology currency, and skills gap analysis using futures intelligence feeds and advisory inputs |
| `curriculum-revision-tracker` | Version control and change management through BOS approval cycle |
| `honours-curriculum-designer` | Honours with Research and Honours with Technology Commercialisation tracks for fast learners with early Srujana Stage 3 access |
| `elective-pool-designer` | Open, professional, and discipline elective baskets incorporating NPTEL, SWAYAM, certifications, and liberal arts options |
| `minor-framework-designer` | Overarching minor programme architecture supporting all four minor models |
| `intra-the platform-minor-designer` | Intra-the platform interdisciplinary minors: CS taking Design/Management, Engineering taking Life Sciences/Arts |
| `nptel-swayam-minor-designer` | NPTEL and SWAYAM credit-bearing minor tracks with CO-PO mapping and BOS-approved equivalences |
| `industry-micro-credential-minor` | Industry-defined micro-credential minors: AWS Cloud, Google AI, NASSCOM Data, Cisco Networking |
| `international-minor-designer` | Joint minors co-designed and co-delivered with international partner universities |
| `interdisciplinary-thread-mapper` | Cross-programme shared modules, joint project threads, and minor bridges |
| `liberal-studies-integrator` | Embeds performing arts, literature, sports, sustainability, and creative disciplines into programme structure per the platform Mission |
| `ug-pg-pathway-designer` | 3+1+1 and 4+1 integrated pathway design under UGC 2022 regulations |
| `nep-credit-framework` | NEP 2020 credit framework, multiple entry-exit, Academic Bank of Credits integration |

---

### Course Design Skills

| Skill | Description |
| ----- | ----------- |
| `course-outline-writer` | Full course outline with AI-augmented COs, units, certification links, portfolio expectations, and Srujana stage indicator |
| `module-sequencer` | Module and unit ordering with progressive learning scaffolding toward a portfolio artefact |
| `unit-plan-designer` | Unit-level instructional plan with session breakdown, Bloom's level, active learning strategy, and human-skills thread |
| `blooms-aligner` | Bloom's taxonomy alignment review; ensures HOTS dominance across AI-era course design |
| `contact-hour-planner` | Teaching hour distribution across theory, tutorial, practicum, portfolio work, and proctored skill sessions |
| `co-coverage-checker` | Ensures every CO is covered across modules, sessions, assessments, and portfolio tasks |
| `ai-ready-course-auditor` | Audits for AI-readiness: AI-trivial tasks flagged for redesign; proctored activities balance AI-assisted work |
| `industry-input-integrator` | Advisory panel and futures intelligence inputs embedded into course design with documented traceability |

---

### Content Development Skills

| Skill | Description |
| ----- | ----------- |
| `lecture-notes-generator` | Structured lecture notes with concepts, worked examples, self-check questions, and reflection prompts |
| `slide-designer` | Pedagogically rich, the platform-branded slide decks (PPTX and HTML) with active learning cues |
| `case-study-developer` | Real-world case studies; preference for Indian industry, social enterprise, and sustainability contexts aligned to the platform Mission |
| `problem-set-creator` | Graded problem sets across Bloom's levels; higher-order problems require judgment, synthesis, and creative application |
| `ai-ready-content-designer` | Content designed for AI-era engagement: problems requiring creativity, ethical reasoning, stakeholder empathy, and societal judgment |
| `reading-list-curator` | Primary readings, OERs, NPTEL modules, SWAYAM courses, arXiv papers, and textbooks curated by faculty with AI support |
| `video-script-writer` | Educational video scripts with learning objectives, narration, and visual storyboards |
| `oer-packager` | Open Educational Resource packaging in SCORM and xAPI formats |
| `microlearning-packager` | Bite-sized learning objects for spaced delivery and mobile access |
| `annotation-guide-creator` | Guided annotation layers for papers, industry reports, and primary sources |
| `wellbeing-content-integrator` | Embeds mental health, physical wellbeing, and values-based reflection into course content per the platform Vision |

---

### Assessment and Evaluation Skills

| Skill | Description |
| ----- | ----------- |
| `hots-assignment-designer` | Designs Higher Order Thinking assignments that are enjoyable, complex, AI-era relevant, and produce portfolio artefacts |
| `proctored-assessment-designer` | Designs in-person supervised assessments that verify genuine student brain and hand competency |
| `ai-ready-assessment-auditor` | Audits every assignment: AI-trivial tasks flagged; HOTS dominance verified; proctored components balanced; portfolio artefact authenticity checked |
| `assignment-enjoyability-auditor` | Reviews assignments for student motivation, creative latitude, real-world relevance, and authentic sense of accomplishment |
| `portfolio-assessment-builder` | Portfolio-based assessment linking tasks to publications, products, open source, or documented solutions |
| `question-bank-generator` | Multi-level Bloom's question banks tagged by CO, unit, difficulty, and AI-augmentation assumption |
| `rubric-designer` | Analytic and holistic rubrics for assignments, projects, presentations, portfolio review, and enterprising-skills assessment |
| `quiz-designer` | Formative quiz design for QuizBlast and H5P platforms |
| `exam-pattern-designer` | CIA and end-sem exam patterns with CO coverage matrix; separates AI-assisted from proctored components |
| `peer-assessment-designer` | Structured peer review instruments and calibration protocols |
| `viva-voce-designer` | Oral examination question sets and rubrics — essential for verifying genuine student understanding in AI era |
| `continuous-assessment-planner` | CIA calendar with component weights, CO mapping, and portfolio milestone alignment |
| `remediation-planner` | Structured below-threshold intervention, re-assessment, and AI tutor support |
| `survey-instrument-designer` | Course-end and programme-level indirect attainment surveys |

---

### Lab, Project, and Experiential Learning Skills

| Skill | Description |
| ----- | ----------- |
| `lab-manual-writer` | Lab manuals with aim, theory, procedure, observation, inference, and portfolio output brief |
| `virtual-lab-designer` | Simulation-based virtual labs using PhET, LabXchange, or custom builds |
| `pbl-project-designer` | Problem and project-based learning scenarios with milestones and portfolio deliverables |
| `capstone-framework` | Capstone phases, milestones, rubrics, and public exhibition; every capstone produces a public-facing artefact |
| `interdisciplinary-project-connector` | Multi-department, cross-domain project design with minor credit linkage and shared rubrics |
| `industry-project-integrator` | Live industry problem statements, mentor mapping, and delivery protocols |
| `hackathon-designer` | Hackathon challenge design, judging rubrics, and sprint scaffolding |
| `design-thinking-workshop` | Human-centred design studio facilitation for wicked problems and social innovation |
| `service-learning-designer` | Community-linked service learning with reflection frameworks and social impact portfolio — directly expressing the platform's mission of sustainability and universal values |
| `field-immersion-planner` | Industry visit, field study, and immersive experience planning |
| `research-project-scaffolder` | Undergraduate research from hypothesis to paper, patent, or conference presentation |
| `open-source-contribution-designer` | GitHub issues, PRs, documentation, and community engagement as assessed, portfolio-generating activities |
| `publication-scaffolder` | Course project → literature context → writing → conference or journal submission pipeline |
| `product-brief-generator` | Product requirement briefs from course COs linking learning to deliverable products and solutions |
| `entrepreneurship-studio-designer` | Ideation-to-venture studio curriculum with the platform NEST integration and Srujana Stage 4 linkage |
| `liberal-arts-experiential-designer` | Performing arts, literature, and sports-integrated learning experiences per the platform Mission |

---

### Pedagogy and Instructional Design Skills

| Skill | Description |
| ----- | ----------- |
| `active-learning-strategies` | Flipped classroom, think-pair-share, jigsaw, gallery walk, muddiest point, Socratic seminar |
| `experiential-learning-cycle` | Kolb's experiential cycle embedded into course and session design |
| `scaffolding-designer` | Cognitive and procedural scaffolding for complex learning tasks |
| `differentiated-instruction` | Multi-level content and assessment supporting fast-track honours and slow-learner remedial paths |
| `universal-design-learning` | UDL: multiple means of representation, engagement, and expression |
| `metacognitive-prompts` | Self-reflection, think-alouds, and metacognitive strategy prompts — critical in AI era to prevent cognitive offloading |
| `iks-integration` | Indian Knowledge Systems: Panchakosha, Guru-Shishya, Vivekananda's man-making education, contextual wisdom, sustainability ethics |
| `holistic-learning-designer` | Cognitive, affective, psychomotor, social, and spiritual dimensions of learning aligned to the platform Vision of wellbeing for all |
| `inquiry-based-learning` | Guided and open inquiry sequence design |
| `proctored-activity-designer` | Supervised in-person activities ensuring genuine brain and hand competency |
| `flipped-classroom-designer` | Pre-class, in-class, and post-class activity sequencing |
| `collaborative-pedagogy-designer` | Course structures making collaboration, co-creation, and peer accountability pedagogically central |

---

### Enterprising Human Skills

*The durable human advantage in the AI era — qualities that AI cannot replicate and that give the platform graduates their distinctive edge across every career path. Broader than entrepreneurship; fundamental to every professional and citizen.*

| Skill | Description |
| ----- | ----------- |
| `enterprising-co-designer` | Writes Enterprising Human Skills COs for every course: initiative, adaptability, collaborative agency, and value creation |
| `critical-thinking-embedder` | Designs tasks requiring analysis of ambiguous problems, evaluation of competing arguments, and synthesis of novel solutions |
| `communication-skill-designer` | Oral, written, visual, and cross-cultural communication tasks embedded as portfolio deliverables across all semesters |
| `ethical-reasoning-designer` | Ethical case scenarios, responsible AI use, societal impact analysis, and value-based decision tasks aligned to the platform universal values mission |
| `leadership-collaboration-designer` | Team dynamics, constructive conflict, peer leadership, and accountable collaboration structures in projects and labs |
| `adaptability-resilience-designer` | Growth mindset tasks, iterative redesign challenges, failure reflection protocols, and adaptive learning experiences |
| `creativity-and-initiative-designer` | Open-ended tasks rewarding original approaches, divergent thinking, and self-initiated exploration |
| `financial-legal-literacy-designer` | Personal finance, IP basics, contracts, and startup compliance embedded as practical course threads |
| `global-and-cultural-competence-designer` | Cross-cultural collaboration, global professional norms, and international perspectives in course projects |
| `sustainability-values-designer` | Sustainability thinking, social responsibility, and universal values embedded into projects per the platform Mission |
| `wellbeing-curriculum-designer` | Physical, mental, and social wellbeing integrated into design: study skills, stress resilience, community care |
| `human-skills-rubric-builder` | Observable, assessable rubrics for enterprising human skills across academic, project, and portfolio contexts |
| `human-advantage-portfolio-designer` | Designs the human skills portfolio: communication artefacts, ethical analyses, leadership reflections, social impact evidence |
| `ai-human-collaboration-designer` | Teaches students to use AI as a tool while retaining ownership of judgment, creativity, ethics, and human relationships |
| `liberal-arts-integration-designer` | Integrates performing arts, literature, creative writing, sports, and humanities into degree programmes per the platform Mission |

---

### Srujana Pathway Skills

*Srujana (Sanskrit: सृजन — to create, to bring into being) is the platform's structured entrepreneurial progression pathway. Designed fresh in this architecture through collaboration among faculty, placement, industry relations, the platform NEST, and students.*

| Skill | Description |
| ----- | ----------- |
| `srujana-phase-router` | Routes students to the appropriate Srujana stage based on academic year, portfolio readiness, and faculty mentor assessment |
| `srujana-s1-skill-builder` | Stage 1 — Skill Formation: structured skill development through courses, labs, certifications, and foundational portfolio artefacts (Semesters 1–4) |
| `srujana-s2-internship-designer` | Stage 2 — Real World Immersion: structured industry or research internship with COs, mentor mapping, and reflective portfolio (Semesters 3–6) |
| `srujana-s3-product-research-designer` | Stage 3 — Create and Contribute: product development, research project, patent filing, open source contribution, or published paper (Semesters 5–7) |
| `srujana-s4-venture-designer` | Stage 4 — Enterprise: venture design through the platform NEST; pitch preparation, business model, legal setup, investor readiness (Semester 7–8 and beyond) |
| `srujana-portfolio-integrator` | Integrates all four Srujana stage artefacts into a unified enterprising portfolio — the student's journey from learner to creator |
| `srujana-milestone-tracker` | Tracks student progress through stages with milestone gates, faculty mentor check-ins, and advisory reviews |
| `srujana-counsellor` | Guides students and advisors in identifying Srujana stage, choosing electives, certifications, and internship tracks |
| `internship-framework-builder` | Institutional internship credit framework: guidelines, mentor mapping, assessment rubrics, credit recognition |
| `product-research-scaffolder` | Stage 3 scaffold: problem identification, ideation, prototype, IP check, paper writing, or open source pipeline |
| `venture-launch-designer` | the platform NEST integration, pitch scaffolding, team formation, financial modelling, and founder mindset development |
| `srujana-industry-connect-builder` | Builds the industry and alumni mentor network supporting Srujana Stages 2, 3, and 4 |

---

### Portfolio and Publication Skills

| Skill | Description |
| ----- | ----------- |
| `portfolio-architecture-designer` | Designs the student's cumulative 4-year portfolio with semester-by-semester artefact milestones across all courses |
| `portfolio-co-linker` | Links every CO to a tangible output: paper, product, open source contribution, or documented solution |
| `publication-scaffolder` | Course project → literature context → drafting → review → conference or journal submission pipeline |
| `open-source-contribution-designer` | GitHub issues, PRs, documentation, and community engagement as assessed portfolio-generating activities |
| `product-artefact-designer` | Product spec documents, prototypes, technical demos, and solution briefs as course outputs |
| `portfolio-review-rubric-builder` | Analytic rubrics for portfolio artefact quality, originality, and public impact |
| `digital-portfolio-publisher` | Guides students in publishing portfolios on GitHub Pages, personal sites, or the platform's showcase platform |
| `placement-portfolio-connector` | Links portfolio artefacts directly to placement readiness and recruiter-facing profiles |
| `portfolio-integrity-auditor` | Verifies portfolio artefacts represent genuine student work; distinguishes AI-assisted from student-authored elements |

---

### AI Personalisation Skills

*AI personalises the learning journey; human advisors and faculty monitor, guide, and intervene.*

| Skill | Description |
| ----- | ----------- |
| `ai-tutor-configurator` | Configures AI tutoring for slow learners: adaptive pacing, Socratic prompts, concept reinforcement, progress reports to faculty |
| `personalised-pathway-engine` | Generates individualised pathways based on diagnostics and CO performance; faculty advisor co-signs the plan with student |
| `intelligent-intervention-designer` | AI-triggered interventions: at-risk alerts, content recommendations, peer group suggestions — humans act on signals |
| `ai-study-companion-builder` | Student-facing AI study companion: question answering, practice generation, reflection prompting, wellbeing check-ins |
| `honours-fast-track-designer` | Fast-track pathways for high performers: advanced electives, research immersion, early Srujana Stage 3 access |
| `remedial-ai-tutor-designer` | Dedicated AI tutor for slow learners with extra tutorial credits, paced re-learning, and faculty check-in rubrics |
| `ai-personalization-stack` | Technical architecture for AI personalisation: LLM APIs, learner data models, adaptive content delivery |
| `learning-velocity-tracker` | Tracks individual learning velocity and surfaces adjustment recommendations for faculty advisor review |
| `peo-readiness-profiler` | AI-assisted profiling of each student's readiness to meet raised AI-era PEOs by graduation; shared with student and advisor |

---

### Certification and MOOC Integration Skills

| Skill | Description |
| ----- | ----------- |
| `nptel-credit-mapper` | Maps NPTEL courses to programme electives and minors with CO-PO equivalence documentation for BOS approval |
| `swayam-integration-designer` | SWAYAM course integration: credit transfer, assessment equivalence, and progress tracking |
| `professional-cert-aligner` | Aligns industry certifications (AWS, Google Cloud, Microsoft, NASSCOM, Cisco, PMI) to COs and electives |
| `mooc-portfolio-recognizer` | Recognises MOOC completion artefacts as portfolio evidence within CO attainment computation |
| `certification-track-designer` | Designs structured certification tracks within degree programmes |
| `external-credit-auditor` | Audits externally earned credits for regulatory compliance and CO-PO integrity before BOS ratification |
| `mooc-quality-screener` | Screens MOOCs for academic rigour, currency, and alignment before faculty recommendation |

---

### Adaptive and Personalised Learning Skills

| Skill | Description |
| ----- | ----------- |
| `learning-pathway-engine` | Personalised pathway generation based on diagnostic and CO performance data |
| `diagnostic-assessment-designer` | Pre-course and mid-course diagnostic instruments |
| `remedial-content-designer` | Below-threshold support content and guided re-learning sequences |
| `enrichment-content-designer` | Advanced extension content for high performers leading to honours or early Srujana Stage 3 |
| `spaced-repetition-planner` | Forgetting curve-based review scheduling and retrieval practice design |
| `mastery-learning-designer` | Mastery-based progression with competency gating |
| `self-paced-module-designer` | Self-paced online modules with checkpoint assessments for flexible learners |

---

### Social and Community Learning Skills

| Skill | Description |
| ----- | ----------- |
| `collaborative-learning-designer` | Group work structures, roles, protocols, and interdependence design |
| `peer-mentoring-system` | Peer mentor-mentee matching; Srujana senior-junior pairing; training materials |
| `community-of-practice-builder` | CoP setup for faculty learning circles, student discipline communities, and alumni networks |
| `study-circle-facilitator` | Study group design guides, norms, facilitation prompts, AI tutor integration |
| `social-annotation-setup` | Hypothesis and Perusall social reading layer configuration |
| `alumni-connect-integrator` | Alumni mentorship, guest lecture series, industry immersion, and Srujana Stage 2/3 mentor network |
| `industry-expert-connector` | Industry advisory panel, expert guest series, practitioner-in-residence, and live project partnerships |
| `discourse-forum-designer` | Asynchronous academic discussion forum design and moderation guides |

---

### EdTech and Platform Integration Skills

| Skill | Description |
| ----- | ----------- |
| `lms-course-builder` | Moodle and Canvas course structure, activity sequencing, gradebook, and portfolio submission setup |
| `h5p-content-creator` | H5P interactives: branching scenarios, drag-and-drop, video quizzes, timelines |
| `docusaurus-syllabus-publisher` | Docusaurus-based course syllabus pages with OBE metadata, CO-PO tables, portfolio milestones, Srujana stage |
| `quizblast-setup` | QuizBlast platform configuration for large-cohort formative assessment |
| `ai-tool-integration` | AI tool scaffolding for student and faculty use with clear ethical use guidelines |
| `oci-infrastructure` | OCI Free Tier deployment for EdTech tools, AI tutors, and agent services |
| `video-platform-integration` | YouTube, Panopto, and Kaltura video content management |
| `accessibility-checker` | WCAG 2.1 accessibility compliance for all digital educational content |
| `mobile-learning-adapter` | Responsive content adaptation for mobile learner access |
| `scorm-xapi-packager` | SCORM and xAPI packaging for LMS delivery and learning activity tracking |

---

### Internationalisation Skills

*AI and human international relations teams co-research; partner university relationships are built and sustained through human dialogue and trust.*

| Skill | Description |
| ----- | ----------- |
| `twinning-programme-designer` | Twinning programme design: credit equivalence, quality assurance protocols, student mobility, and joint delivery |
| `dual-degree-framework` | Dual degree architecture: partner selection criteria, joint COs, shared assessment, mutual credential recognition |
| `international-credit-aligner` | Maps the platform courses to ECTS, US credit hours, and APQF frameworks |
| `mobility-programme-planner` | Inbound and outbound student mobility: summer schools, semester abroad, research exchange, faculty mobility |
| `international-curriculum-benchmarker` | Benchmarks the platform programmes against top 100 global university curricula in the same discipline |
| `joint-research-programme-designer` | Joint research and innovation programmes aligned to the platform's sustainability and technology vision |
| `english-medium-course-designer` | Courses for international student cohorts with language support and cultural contextualisation |
| `global-minor-designer` | Minors co-designed and co-delivered with international partner universities |
| `international-partner-intelligence` | AI-assisted research on potential partner universities by ranking, discipline strength, and the platform Vision alignment; humans negotiate and decide |

---

### Learning Analytics and Reporting Skills

| Skill | Description |
| ----- | ----------- |
| `learning-analytics-dashboard` | Student progress, engagement, portfolio health, CO attainment, and Srujana stage analytics |
| `co-attainment-report-generator` | Automated CO attainment reports for programme committees |
| `at-risk-detector` | Early warning indicators; AI-triggered alerts reviewed by faculty advisors before action |
| `engagement-tracker` | LMS engagement: logins, submissions, forum activity, portfolio uploads, AI tutor interaction |
| `placement-readiness-tracker` | CO and portfolio mapping to placement readiness and recruiter benchmarks |
| `faculty-effectiveness-analyzer` | Teaching effectiveness from student feedback and attainment correlation |
| `programme-review-reporter` | Annual programme review data and narrative for programme committees and BOS |
| `cohort-progression-analyzer` | Year-on-year cohort progression and outcome trend analysis |
| `nirf-data-feed` | Continuous NIRF parameter data collection feeding the NIRF Accelerator |
| `srujana-progress-tracker` | Cohort-level Srujana progress across all four stages |
| `portfolio-quality-analyzer` | Portfolio artefact quality distribution across cohorts; gaps flagged for faculty action |
| `wellbeing-indicator-tracker` | Tracks student wellbeing signals from platform engagement, performance, and advisor interactions |

---

### Institutional Positioning Skills

| Skill | Description |
| ----- | ----------- |
| `nirf-parameter-analyzer` | Analyses the platform's position on each NIRF parameter; identifies priority gaps with estimated rank impact |
| `nirf-data-pipeline` | Automates NIRF data collection, cleaning, and submission-ready packaging |
| `nirf-action-plan-generator` | NIRF improvement action plans by parameter with owner, timeline, and measurable target |
| `admissions-excellence-tracker` | Student quality metrics, programme appeal signals, and competitive positioning for admissions |
| `placement-intelligence-reporter` | Placement analytics: company quality, role seniority, CTC trends, sector diversity, portfolio-to-placement correlation |
| `programme-reputation-builder` | Programme visibility: accreditations, student success stories, alumni achievements, and research output |
| `research-output-tracker` | Faculty and student publications, patents, and funded projects for ranking inputs and institutional reputation |

---

### Accreditation and Documentation Skills

| Skill | Description |
| ----- | ----------- |
| `nba-sar-generator` | NBA SAR generation by criterion with evidence links and self-assessment scoring |
| `naac-dvv-preparer` | NAAC DVV documentation, metric data preparation, and supporting evidence |
| `nirf-data-collector` | NIRF parameter data collection and submission format preparation |
| `co-attainment-auditor` | OBE audit trail documentation for NBA inspection readiness |
| `academic-calendar-generator` | Lesson plan, teaching calendar, and session log generation |
| `programme-review-documenter` | Board of Studies documentation and curriculum revision records |
| `accreditation-gap-analyzer` | Gaps between current programme state and accreditation criteria with remediation plan |
| `regulatory-compliance-checker` | UGC, AICTE, NEP 2020, and the platform policy compliance checks |

---

### Faculty Development Skills

| Skill | Description |
| ----- | ----------- |
| `pedagogical-coaching` | Faculty pedagogy improvement plans — AI drafts; faculty mentor reviews and owns the coaching relationship |
| `ai-pedagogy-coach` | Guides faculty in designing AI-era courses: raising ambition, redesigning assessments, embedding AI literacy |
| `course-review-feedback` | Structured feedback on course design, portfolio linkage, AI-readiness, and enterprising-skills presence |
| `micro-teaching-evaluator` | Micro-teaching observation rubrics and structured debrief guides |
| `research-integration-advisor` | Research-teaching nexus: connecting faculty research to course content and student projects |
| `faculty-load-optimizer` | Teaching load calculation, distribution, and optimisation per the platform policy |
| `fdp-programme-designer` | FDP design aligned to OBE, active learning, AI-era pedagogy, and portfolio-first principles |
| `mentorship-programme-designer` | New faculty mentorship programme design and milestone planning |

---

### Output Format Skills

| Skill | Description |
| ----- | ----------- |
| `pptx-generator` | the platform-branded PowerPoint for sessions, BOS presentations, and academic events |
| `docx-generator` | the platform-branded Word documents for course materials, proposals, and reports |
| `html-page-builder` | Interactive HTML educational pages with the platform branding |
| `pdf-exporter` | PDF export of syllabi, BOS proposals, and accreditation documents |
| `syllabus-page-renderer` | OBE syllabus page with CO-PO tables, certification linkage, portfolio expectations, and Srujana stage indicator |
| `excel-report-generator` | CO attainment, analytics, NIRF data, and programme review Excel reports |
| `infographic-renderer` | Visual summaries for concepts, pathways, programme structures, Srujana journey, and institutional positioning |

---

## Workflows

Human-AI collaborative procedures for end-to-end academic operations. Invoke with `/command`. Every workflow identifies **human decision gates** explicitly — points where AI stops and humans deliberate.

### Core Academic Workflows

| Command | Description |
| ------- | ----------- |
| `/analyze` | Human-AI needs analysis: AI scans futures data and learner profiles; faculty and curriculum committee deliberate and decide |
| `/design-curriculum` | AI-assisted programme design — PEOs (raised) → POs → PSOs → course map → minor basket → MOOC/cert tracks; faculty committee approves each phase; BOS provides formal approval |
| `/design-course` | AI drafts AI-augmented COs, CO-PO map, module sequence, assessment plan, and portfolio linkage; course faculty reviews, refines, and formally approves |
| `/generate-syllabus` | AI generates syllabus page in Docusaurus, HTML, and DOCX; faculty reviews and approves before publication |
| `/develop-session` | AI generates first-draft session materials; faculty edits, contextualises, and approves before delivery |
| `/create-lab` | AI designs lab manual or virtual lab; lab faculty validates procedure, safety, and portfolio output brief |
| `/design-project` | AI drafts PBL or capstone design; project faculty and industry mentors co-refine and approve |
| `/build-assessment` | AI generates HOTS assignments, proctored tasks, rubrics, and question banks; faculty reviews for AI-readiness and enjoyability |
| `/evaluate-co` | Automated CO attainment computation; results reviewed by faculty and programme committee before action |

### Intelligence and Governance Workflows

| Command | Description |
| ------- | ----------- |
| `/futures-scan` | AI and faculty jointly compile WEF, NASSCOM, LinkedIn, and global trends into a structured briefing; curriculum committee deliberates and decides on implications |
| `/validate-industry` | AI prepares instruments and synthesises feedback; industry experts and faculty conduct dialogue and record decisions; AI documents outcomes |
| `/bos-approve` | AI prepares proposal, compliance check, agenda, and draft minutes; Board of Studies deliberates and records formal decisions |

### Personalisation and Pathway Workflows

| Command | Description |
| ------- | ----------- |
| `/srujana-track` | AI assesses stage readiness and generates pathway plan; student and faculty advisor co-design the personal Srujana journey |
| `/personalize` | AI diagnostic → pathway → fast-track or remedial assignment → AI tutor setup; faculty advisor monitors and adjusts throughout |
| `/portfolio-design` | AI audits COs, proposes artefact types, and drafts milestone plan; faculty approves and contextualises |

### Certification and Global Workflows

| Command | Description |
| ------- | ----------- |
| `/certify-map` | AI maps NPTEL/SWAYAM/professional certs to CO-PO equivalences; faculty and BOS validate and formally approve credit allocation |
| `/internationalize` | AI researches partner universities and drafts credit alignment frameworks; international relations office and academic leadership negotiate, decide, and build the relationship |

### Institutional Positioning Workflows

| Command | Description |
| ------- | ----------- |
| `/nirf-accelerate` | NIRF gap analysis → AI-generated action plan → leadership review and prioritisation → data pipeline activation → progress dashboard |
| `/review-course` | Comprehensive course review: Bloom's audit + CO coverage + assessment AI-readiness + portfolio completeness + human-skills presence + curriculum currency |
| `/faculty-develop` | AI generates pedagogy gap analysis and coaching plan; faculty mentor facilitates the development conversation and relationship |
| `/analytics` | Analytics dashboard: CO attainment, engagement, portfolio health, Srujana progress, at-risk flags, placement readiness — reviewed by programme committee |
| `/community-learn` | Social learning setup: peer groups, CoP scaffolding, alumni/expert connect, study circles |
| `/accredit` | NBA or NAAC documentation generation; peer committee and leadership review before submission |
| `/orchestrate` | Multi-agent coordination for complex operations spanning ADDIE phases, governance cycles, and institutional priorities |

---

## Skill Loading Protocol

```plaintext
User Request / Academic Trigger / Institutional Signal
                    ↓
         ADDIE Phase Router
                    ↓
     Agent Selection (role-based)
                    ↓
  ┌─────────────────────────────────────┐
  │   Human-AI Handoff Check            │
  │   What does AI draft or analyse?    │
  │   What does the human decide?       │
  │   Is industry validation required?  │
  │   Is BOS governance required?       │
  └─────────────────────────────────────┘
                    ↓
      Skill Description Match
                    ↓
          Load SKILL.md
                    ↓
    Read references/ (templates, rubrics,
    frameworks, WEF/NASSCOM feeds, BOS
    proposal formats, the platform policy docs)
                    ↓
    Read scripts/ (computation, validation,
    generation, portfolio audit, NIRF data)
                    ↓
    Apply the platform branding to all outputs
                    ↓
  ┌─────────────────────────────────────┐
  │   Governance Gate                   │
  │   Industry validation needed?       │
  │   → Route to /validate-industry     │
  │   BOS approval needed?              │
  │   → Route to /bos-approve           │
  └─────────────────────────────────────┘
```

### Skill Structure

```plaintext
skill-name/
├── SKILL.md           # (Required) Metadata, instructions, frameworks,
│                      #   human decision points, governance gates
├── scripts/           # (Optional) Python/Bash computation and generation
├── references/        # (Optional) Templates, rubric banks, framework docs,
│                      #   CO banks, WEF/NASSCOM data, the platform policy documents
└── assets/            # (Optional) the platform logos, brand tokens, illustration sets
```

---

## Validators

Quality-gate scripts enforcing OBE compliance, portfolio integrity, AI-readiness, pedagogical standards, and accreditation readiness. All outputs are reviewed by humans before any action is taken.

### Validator Scripts

| Script | Purpose | When to Use |
| ------ | ------- | ----------- |
| `obe-check.py` | CO-PO mapping completeness, Bloom's level correctness, CO coverage, portfolio linkage, human-skills CO presence | Before course finalisation |
| `attainment-audit.py` | Attainment data integrity, threshold logic, direct + indirect merge, audit trail completeness | Before NBA submission |
| `pedagogy-scan.py` | Bloom's level distribution, active learning frequency, UDL compliance, enterprising-skills CO presence, liberal arts integration | Course design review |
| `ai-readiness-audit.py` | Flags AI-trivial assignments; verifies HOTS dominance; checks proctored activity balance; validates portfolio artefact authenticity | Before each semester launch |
| `portfolio-integrity-check.py` | Every CO linked to artefact type; portfolio milestone plan exists; rubrics present; Srujana stage artefacts tracked; digital publication pathway defined | Course design and semester review |
| `content-qa.py` | Content completeness, session-to-CO linkage, format compliance, and currency vs. futures intelligence flags | Before content deployment |
| `accreditation-ready.py` | Full pre-visit audit: SAR completeness, OBE trail, NIRF data, evidence links, regulatory compliance | Pre-NBA / NAAC visit |
| `nirf-data-validator.py` | NIRF parameter data completeness, format compliance, year-on-year consistency | Quarterly and pre-submission |

### What They Check

**obe-check.py:**
- CO verb alignment with Bloom's taxonomy; HOTS ≥ 60% across course
- CO-PO mapping completeness; all POs addressed at programme level
- AI-augmented COs present where appropriate
- Portfolio CO linkage for every CO
- Enterprising Human Skills CO in every course
- Attainment threshold defined

**ai-readiness-audit.py:**
- Assignment completable by AI without student judgment → flag for redesign
- HOTS (Analyse / Evaluate / Create) ≥ 60% of total marks
- Proctored assessment present to verify genuine student competency
- Portfolio artefact requires authentic student work with verifiable authorship
- AI collaboration is explicit, bounded, and declared — not hidden
- Enjoyability indicators: creative latitude, real-world relevance, student choice present

**portfolio-integrity-check.py:**
- Every CO linked to a portfolio artefact type
- Portfolio milestone plan with semester timing in course outline
- Portfolio rubrics exist for every artefact type
- Cumulative 4-year portfolio architecture visible at programme level
- Srujana stage artefacts mapped across all four stages
- Digital publication pathway defined for at least one course per semester

**accreditation-ready.py** — all above checks plus:
- SAR section completeness by NBA criterion
- Supporting evidence files present and correctly named
- Programme outcome attainment computed at programme level
- Faculty qualification and load data consistent
- Infrastructure data complete
- NIRF parameter data current and validator-cleared

---

## Quick Reference

| Need | Agent | Workflow | Key Skills |
| ---- | ----- | -------- | ---------- |
| New programme with raised PEOs | `curriculum-architect` | `/design-curriculum` | peo-ai-era-designer, programme-structure-designer, nep-credit-framework |
| Future-of-jobs intelligence | `futures-intelligence-scout` | `/futures-scan` | wef-jobs-scanner, nasscom-skills-mapper, futures-briefing-packager |
| Industry validation | `stakeholder-validator` | `/validate-industry` | industry-review-facilitator, feedback-synthesis-engine |
| Board of Studies approval | `bos-governance-officer` | `/bos-approve` | bos-proposal-formatter, regulatory-compliance-checker, bos-minutes-generator |
| AI-augmented course design | `course-designer` | `/design-course` | co-ai-augmented-designer, co-po-mapping, blooms-aligner |
| Enterprising skills in curriculum | `enterprising-skills-designer` | `/design-course` | enterprising-co-designer, human-skills-rubric-builder, liberal-arts-integration-designer |
| Srujana pathway | `srujana-pathway-designer` | `/srujana-track` | srujana-s1–s4-skills, srujana-portfolio-integrator, internship-framework-builder |
| Portfolio-first course redesign | `portfolio-architect` | `/portfolio-design` | portfolio-co-linker, publication-scaffolder, portfolio-review-rubric-builder |
| AI-ready assessment design | `assessment-engineer` | `/build-assessment` | ai-ready-assessment-auditor, hots-assignment-designer, proctored-assessment-designer |
| Session material development | `session-planner` + `content-developer` | `/develop-session` | active-learning-strategies, slide-designer, proctored-activity-designer |
| Minors (all four models) | `interdisciplinary-connector` | `/design-curriculum` | intra-the platform-minor-designer, nptel-swayam-minor-designer, industry-micro-credential-minor, international-minor-designer |
| NPTEL / SWAYAM / certifications | `certification-integrator` | `/certify-map` | nptel-credit-mapper, professional-cert-aligner, mooc-portfolio-recognizer |
| Honours / fast learners | `learning-pathway-designer` | `/personalize` | honours-fast-track-designer, enrichment-content-designer |
| AI tutor / slow learners | `ai-personalization-engine` | `/personalize` | ai-tutor-configurator, remedial-ai-tutor-designer |
| CO attainment evaluation | `evaluation-analyst` | `/evaluate-co` | co-attainment-calculator, co-attainment-report-generator |
| NBA / NAAC accreditation | `accreditation-officer` | `/accredit` | nba-sar-generator, naac-dvv-preparer, co-attainment-auditor |
| NIRF Top 100 | `nirf-accelerator` | `/nirf-accelerate` | nirf-parameter-analyzer, nirf-action-plan-generator, research-output-tracker |
| Twinning / dual degrees | `internationalization-agent` | `/internationalize` | twinning-programme-designer, dual-degree-framework, international-credit-aligner |
| Admissions and placements | `nirf-accelerator` | `/analytics` | admissions-excellence-tracker, placement-intelligence-reporter, placement-portfolio-connector |
| Learning analytics | `analytics-reporter` | `/analytics` | learning-analytics-dashboard, at-risk-detector, srujana-progress-tracker |
| Complex multi-phase operations | `orchestrator` | `/orchestrate` | addie-phase-router, parallel-agents, human-ai-handoff-protocol |

---

## Design Principles

Every agent, skill, workflow, and validator in this platform is grounded in the following non-negotiable principles:

- **Human-AI collaboration at every step** — AI accelerates, drafts, analyses, and surfaces options; humans exercise judgment, build relationships, and take final decisions. No curriculum, assessment, or governance action proceeds on AI output alone.
- **the platform Vision as the compass** — Technologically advanced, sustainable, global, dedicated to the wellbeing of all. Every design choice is tested against this.
- **the platform Mission as the design brief** — Learner-centred, entrepreneurial stewardship, liberal arts and creative disciplines, collaboration, universal values, and sustainability. These are structural requirements, not decorative statements.
- **ADDIE as the operating backbone** — Analysis always precedes Design; Development is validated before Implementation; Evaluation feeds back into every phase.
- **NBA OBE as the quality contract** — Every course artefact is traceable to a CO; every CO is mapped to a PO; attainment is computed, evidenced, and audited.
- **PEOs raised for the AI era** — Graduates are expected to perform at 5–6 year experience levels through AI co-working; COs embed this; assessments test judgment, synthesis, creation, and ethics.
- **Portfolio-first learning** — Every course produces a tangible artefact: a publication, product, open source contribution, or documented solution.
- **Enterprising human skills as the durable advantage** — Critical thinking, communication, ethical reasoning, adaptability, collaboration, initiative, and creativity are non-negotiable across every programme. These are what AI cannot replace.
- **Srujana as the student's personal narrative** — Every student has a visible journey from skill formation to real-world contribution. The platform scaffolds and celebrates this journey.
- **Differentiation by design** — Fast learners are accelerated through honours tracks and early Srujana Stage 3. Slow learners are supported through AI tutors, extra tutorials, and personalised pathways. No student is without a forward path.
- **Bloom's taxonomy as the learning compass** — Outcomes, content, activities, and assessments are coherently aligned; HOTS dominates in AI-era courses.
- **AI-readiness of assessments** — Trivially AI-completable tasks are redesigned. Proctored activities verify genuine competency. AI-assisted work is explicit, bounded, and declared.
- **Futures intelligence as a living input** — Curriculum is updated by WEF, NASSCOM, LinkedIn, and global signals — synthesised by AI, deliberated by humans, approved by BOS.
- **Governance integrity** — Industry validation and BOS approval are human deliberative processes. AI prepares and documents; the Board decides.
- **Internationalisation as a long-term human relationship** — Twinning, dual degrees, and joint programmes are built on trust, sustained dialogue, and mutual academic respect — supported by AI intelligence, driven by human partnership.
- **NIRF Top 100 as the institutional north star** — Every platform capability connects to research output, academic quality, placements, faculty excellence, and global engagement.
- **the platform brand on every output** — All documents, pages, and slides conform to the platform visual identity, typography, and brand voice.

---

*the Academic Platform — Educate to Enterprise*
*"To become a technologically advanced, sustainable global university dedicated to the wellbeing of all"*
*Platform Version: 2.0 | Academic Year: 2025–26*
