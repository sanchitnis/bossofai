---
sidebar_position: 2
title: "Track A: AI-Native Builder"
description: "Syllabus and roadmap for the AI-Native Builder track: ship AI-powered products fast using coding agents, LLMs, and systems thinking."
---

# Track A: AI-Native Builder

> **"You want to ship AI-powered products fast, using coding agents and LLMs as your accelerators. You think in systems, APIs, and product flows, and you orchestrate models rather than train them from scratch."**

Track A is built for developers, product designers, technical founders, and enterprise builders who prioritize speed-to-value, user experience, and practical engineering over raw mathematical model training.

---

## 🎯 Target Profile & Capabilities

Upon completing Track A, you will be able to:
- Turn ambiguous product requirements into structured specifications that AI coding agents can execute flawlessly.
- Design and implement end-to-end applications powered by LLMs, Retrieval-Augmented Generation (RAG), and agentic workflows.
- Architect modern web systems with Next.js, FastAPIs, serverless runtimes, and vector datastores.
- Implement robust evaluation, observability, cost monitoring, and guardrails for live production environments.

---

## 📚 Curriculum Breakdown

### Unit 1 — AI Coding Tools & Spec-Driven Development
The modern builder does not write boilerplates by hand. Instead, they act as the lead systems architect directing autonomous and semi-autonomous coding agents.

* **Key Concepts:**
  - AI-assisted development environments: VS Code Copilot, Cursor, Kiro, Antigravity.
  - Spec-Driven Development (SDD): writing markdown specifications (`requirements.md`, `design.md`, `tasks.md`) before generating code.
  - Vibe-coding workflows vs. disciplined test-driven agent iteration.
  - Git version control hygiene, branch isolation, and automated validation loops.
* **Core Readings & Resources:**
  - [AI Coding Tools & Vibe-Coding Workflows (Guide)](https://github.com/sanchitnis/learn-ai-engineering#ai-coding-tools--vibe-coding-workflows)
  - [AI-Native SDLC & Spec-Driven Development](https://github.com/sanchitnis/learn-ai-engineering#ai-native-sdlc--spec-driven-development)
  - [GitHub Actions Documentation](https://docs.github.com/en/actions)
* **Milestone Artifact:** A public GitHub repository initialized via a specification document, containing automated unit tests and CI/CD workflows authored with an AI agent.

---

### Unit 2 — Systems Thinking & Software Architecture
AI features are only as reliable as the software systems wrapping them. Builders must understand data flows, APIs, and decoupled architectures.

* **Key Concepts:**
  - Client-server architecture, RESTful API design, and WebSocket streaming.
  - State management in modern web apps (React, Next.js, Vite).
  - Asynchronous workflows, background jobs, and message queues.
  - Relational databases (PostgreSQL/Supabase) vs. document storage vs. key-value caching (Redis).
* **Core Readings & Resources:**
  - [System Thinking & Software Architecture](https://github.com/sanchitnis/learn-ai-engineering#system-thinking--software-architecture)
  - [Designing Data-Intensive Applications (Martin Kleppmann)](https://dataintensive.net/)
  - [Next.js App Router Documentation](https://nextjs.org/docs)
* **Milestone Artifact:** A deployed multi-tier application with user authentication, database persistence, and structured API endpoints.

---

### Unit 3 — Orchestrating AI: Prompting, Context & RAG
Moving from raw chatbot prompts to production-grade cognitive workflows that interface with domain knowledge bases.

* **Key Concepts:**
  - Prompt engineering patterns: Zero-shot, Few-shot, Chain-of-Thought (CoT), System instructions.
  - Context window budgeting, token efficiency, and structured JSON outputs.
  - Retrieval-Augmented Generation (RAG):
    - Text chunking strategies (fixed size, recursive, semantic).
    - Dense vector embeddings and distance metrics (Cosine, Euclidean).
    - Vector databases: pgvector, Pinecone, Chroma, Qdrant.
    - Advanced RAG: query rewriting, hybrid lexical/semantic search, and reranking.
* **Core Readings & Resources:**
  - [Orchestrating AI: Prompting, RAG & Agents for Builders](https://github.com/sanchitnis/learn-ai-engineering#orchestrating-ai-prompting-rag--agents-for-builders)
  - [Anthropic Prompt Engineering Interactive Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)
  - [Vercel AI SDK Core Guide](https://sdk.vercel.ai/docs)
* **Milestone Artifact:** A grounded Q&A tool that ingests custom PDFs/markdown documents and generates cited, hallucination-resistant answers with clickable source anchors.

---

### Unit 4 — Agentic Workflows & Tool Use
Transitioning from single stateless LLM completions to multi-turn agents that reason, plan, invoke external tools, and self-correct.

* **Key Concepts:**
  - Function calling and OpenAPI schema binding.
  - The ReAct pattern (Reasoning + Acting) and Plan-and-Solve patterns.
  - Stateful agent memory: working memory vs. episodic memory vs. scratchpads.
  - Human-in-the-Loop (HEITL) approval gates for irreversible actions.
* **Core Readings & Resources:**
  - [Agentic AI Systems](https://github.com/sanchitnis/learn-ai-engineering#agentic-ai-systems)
  - [LangGraph / CrewAI Agentic Architecture Guides](https://langchain-ai.github.io/langgraph/)
  - [ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al.)](https://arxiv.org/abs/2210.03629)
* **Milestone Artifact:** An autonomous research agent capable of browsing the web, downloading research summaries, formatting comparative markdown tables, and presenting final findings for human approval.

---

### Unit 5 — Production Shipping: Observability, Cost & Evals
Shipping to real users requires monitoring, security guardrails, cost controls, and continuous regression testing.

* **Key Concepts:**
  - LLM Evaluation: LLM-as-a-judge, benchmark datasets, synthetic test cases, latency measurement.
  - Observability and tracing: Langfuse, Helicone, OpenTelemetry.
  - Security & Guardrails: Prompt injection mitigations, PII redaction, output content filtering.
  - Token economics: caching prompts, model cascading (routing between fast models and frontier reasoning models).
* **Core Readings & Resources:**
  - [LLM Evaluation Guide](https://github.com/sanchitnis/learn-ai-engineering#llm-evaluation)
  - [Building LLM Applications for Production (Chip Huyen)](https://huyenchip.com/2023/04/11/llm-engineering.html)
  - [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* **Milestone Artifact:** A production-grade monitoring dashboard tracking cost per request, p95 latency, prompt injection defenses, and daily active user satisfaction.

---

## 🏆 Capstone Portfolio Project

To graduate Track A, you must build and deploy a **production-ready AI-native application**:
1. It must solve a tangible user problem (in higher education, local business, healthcare, or research).
2. It must include a public GitHub repository with comprehensive specifications, tests, and CI/CD pipelines.
3. It must be deployed live on a public domain (e.g. Vercel) with active user telemetry.
4. It must pass an adversarial peer review demonstrating guardrails against prompt injection and data leaks.
