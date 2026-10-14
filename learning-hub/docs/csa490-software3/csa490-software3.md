---
sidebar_position: 3
title: "CSE490: Software 3.0"
# Course Descriptor — Course Buddy Builder Input Template
# Fill this file for each course. Run build.py to generate wiki, workbook, and skill.
# See tools/course-buddy-builder/README.md for usage instructions.

course_code: "CSE490"                      
course_name: "Software 3.0: Agentic Software Engineering"
short_name: "SW3"                          
stream: "CSE"                              
semester: 7                                
credits: 4
instructor: "TBD"
language: "English"

# Level for wiki page generation
wiki_level: "all"

# NotebookLM sources
notebooklm_sources:
  urls:
    - "https://karpathy.medium.com/software-2-0-a64152b37c35" # Context for evolution to 3.0
    - "https://arxiv.org/abs/2210.03629" # ReAct paper
    - "https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/"
  files:
    []
  youtube:
    []

# Textbooks (for wiki bibliography and skill reference)
textbooks:
  - title: "Building LLM Applications for Production"
    authors: "TBD"
    edition: "1st"
    isbn: ""
    free_url: ""

# Reference materials
references:
  - "https://python.langchain.com/docs/get_started/introduction"
  - "https://microsoft.github.io/autogen/"
---

# Course Overview

Software 3.0 introduces a paradigm shift where software development is driven by natural language prompts, Large Language Models (LLMs), and autonomous agentic workflows. In this course, students will learn to transition from traditional imperative coding (Software 1.0) and neural network training (Software 2.0) to orchestrating AI agents to solve complex, open-ended tasks. By the end of this course, students will be able to design, implement, evaluate, and deploy multi-agent systems and custom LLM-powered applications, positioning them at the forefront of the AI era in software engineering.

---

# Unit Breakdown

## Unit 1 — Evolution from Software 1.0 to Software 3.0

**Duration**: Weeks 1-2 (6 lectures)

**Learning outcomes**: After this unit, the student can:
1. Distinguish between Software 1.0, 2.0, and 3.0 paradigms.
2. Explain the fundamental architecture and capabilities of Large Language Models (LLMs).
3. Evaluate the limitations and hallucination risks inherent in foundation models.

**Key concepts**:
- [ ] Software paradigms (1.0 vs 2.0 vs 3.0)
- [ ] Transformer architecture basics
- [ ] Tokenization and context windows
- [ ] Limitations and Hallucinations

**Assessment alignment**: Internal Assessment 1 — Q1; Lab 1

---

## Unit 2 — Prompt Engineering and Context Management

**Duration**: Weeks 3-5 (8 lectures)

**Learning outcomes**: After this unit, the student can:
1. Apply advanced prompt engineering techniques (Few-Shot, Chain-of-Thought, Tree-of-Thoughts).
2. Design efficient context management strategies for long-running interactions.
3. Integrate external APIs and tools via function calling.

**Key concepts**:
- [ ] Zero-shot, Few-shot, Chain-of-Thought (CoT)
- [ ] Context window optimization
- [ ] System prompts and role-playing
- [ ] Function calling and tool use

**Assessment alignment**: Internal Assessment 1 — Q2, Q3; Lab 2

---

## Unit 3 — Retrieval-Augmented Generation (RAG)

**Duration**: Weeks 6-8 (8 lectures)

**Learning outcomes**: After this unit, the student can:
1. Architect a standard RAG pipeline.
2. Implement vector embeddings and vector databases.
3. Optimize retrieval using chunking strategies and hybrid search.

**Key concepts**:
- [ ] Vector embeddings and similarity search
- [ ] Chunking and indexing strategies
- [ ] Vector Databases (e.g., Chroma, Pinecone, FAISS)
- [ ] Advanced RAG (Query routing, re-ranking)

**Assessment alignment**: Internal Assessment 2 — Q1, Q2; Lab 3

---

## Unit 4 — Agentic Workflows and the ReAct Pattern

**Duration**: Weeks 9-11 (8 lectures)

**Learning outcomes**: After this unit, the student can:
1. Design single-agent systems using the ReAct (Reasoning and Acting) pattern.
2. Implement planning, reflection, and self-correction loops in AI agents.
3. Distinguish between stateless API calls and stateful agentic memory.

**Key concepts**:
- [ ] ReAct architecture
- [ ] Agentic memory (short-term vs long-term)
- [ ] Reflection and self-correction
- [ ] Planning strategies (Plan-and-Solve)

**Assessment alignment**: Internal Assessment 2 — Q3, Q4; Lab 4

---

## Unit 5 — Multi-Agent Orchestration

**Duration**: Weeks 12-13 (6 lectures)

**Learning outcomes**: After this unit, the student can:
1. Design multi-agent collaborative systems using frameworks like AutoGen or CrewAI.
2. Define distinct agent roles, permissions, and handoff protocols.
3. Troubleshoot agent loops and infinite recursive calls.

**Key concepts**:
- [ ] Multi-agent collaborative patterns
- [ ] Agent roles and personas
- [ ] Communication topologies (Hierarchical, Sequential, Joint)
- [ ] Frameworks: AutoGen / CrewAI

**Assessment alignment**: End Semester Exam; Lab 5

---

## Unit 6 — Evaluation, Security, and Production Deployment

**Duration**: Weeks 14-15 (6 lectures)

**Learning outcomes**: After this unit, the student can:
1. Evaluate LLM outputs systematically using LLM-as-a-judge and specific rubrics.
2. Identify and mitigate prompt injection and data leakage vulnerabilities.
3. Deploy an agentic workflow into a production environment with proper guardrails.

**Key concepts**:
- [ ] Evaluation metrics (ROUGE, BLEU, LLM-as-a-judge)
- [ ] Prompt injection and jailbreaking defenses
- [ ] Guardrails and ethical AI constraints
- [ ] Deployment of agentic systems

**Assessment alignment**: End Semester Exam; Capstone Project Evaluation

---

# Assessment Blueprint

| Component | Weight | Coverage |
|-----------|--------|----------|
| Internal Assessment 1 | 15% | Units 1-2 |
| Internal Assessment 2 | 15% | Units 3-4 |
| Lab Assessments & Portfolio | 20% | Practical implementation (Units 1-6) |
| End Semester Exam | 50% | All units; emphasis on architecture and ethical reasoning |

**Lab problems**: Each lab assessment requires building a functional code artefact using LLM APIs. The final lab aggregates into a comprehensive agentic portfolio project (Srujana Stage 3).

---

# Srujana Evidence Mapping

| Unit | Srujana Stage | Evidence type |
|------|--------------|---------------|
| 1-2 | Stage 1 — Foundation | Executable prompt playbook; basic API integration script |
| 3-4 | Stage 2 — Application | Functional RAG application over personal documents; single ReAct agent |
| 5-6 | Stage 3 — Creation | Multi-agent orchestrated system solving a complex open-ended problem; documented system architecture |
| All | Stage 3 — Creation | Public GitHub repository of the multi-agent system serving as a professional portfolio piece |

---

# Faculty Notes Area

> **Faculty note placeholder**: Emphasize that students must not just use ChatGPT to write code for them, but must build applications that *orchestrate* LLMs. The distinction between "using AI" and "building AI agents" is critical.
