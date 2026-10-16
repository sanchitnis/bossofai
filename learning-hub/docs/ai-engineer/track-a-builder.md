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
- Architect modern web systems with Next.js, FastAPI, serverless runtimes, and vector datastores.
- Implement robust evaluation, observability, cost monitoring, and guardrails for live production environments.

---

## 📚 Curriculum Breakdown

### Unit 1 — AI Coding Tools & Spec-Driven Development (SDD)
The modern builder does not write boilerplates by hand. Instead, they act as the lead systems architect directing autonomous and semi-autonomous coding agents.

* **Key Concepts:**
  - AI-assisted development environments: VS Code Copilot, Cursor, Kiro, Antigravity.
  - Spec-Driven Development (SDD): writing markdown specifications (`requirements.md`, `design.md`, `tasks.md`) before generating code.
  - Vibe-coding workflows vs. disciplined test-driven agent iteration.
  - Git version control hygiene, branch isolation, and automated validation loops.
* **Curated Free Trainings & Video Masterclasses:**
  - [FreeCodeCamp: Cursor AI Tutorial for Beginners](https://www.youtube.com/watch?v=yk9lXobJ95E) (YouTube) — Fast-paced walkthrough of agentic IDE shortcuts and composer mode.
  - [GitHub Copilot: Full Course for Beginners](https://www.youtube.com/watch?v=Fi3AJZZregE) (YouTube) — Using Copilot for context-aware inline code generation and tests.
  - [GitHub Actions Documentation & CI/CD Quickstarts](https://docs.github.com/en/actions) — Automating test runs on every pull request.
* **⚠️ Missing Training (What Boss of AI Provides):**
  - *Ecosystem Gap:* Public videos only demonstrate shallow "vibe-coding" (blindly accepting autocomplete without design contracts). Zero free courses teach structured Spec-Driven Development (SDD), specification-first prompt cards, and agentic git discipline.
  - *Boss of AI Solution:* **Quest 03 (Specify Before You Build)** and the [`0_context.md` through `6_feedback.md` lifecycle](file:///d:/sanjay/bossofai/AGENTS.md).
* **Milestone Artifact:** A public GitHub repository initialized via a formal specification document, containing automated unit tests and CI/CD workflows authored with an AI agent.

---

### Unit 2 — Systems Thinking & Software Architecture
AI features are only as reliable as the software systems wrapping them. Builders must understand data flows, APIs, and decoupled architectures.

* **Key Concepts:**
  - Client-server architecture, RESTful API design, and WebSocket streaming.
  - State management in modern web apps (React, Next.js, Vite).
  - Asynchronous workflows, background jobs, and message queues.
  - Relational databases (PostgreSQL/Supabase) vs. document storage vs. key-value caching (Redis).
* **Curated Free Trainings & Video Masterclasses:**
  - [Hussein Nasser: Backend Engineering Crash Course](https://www.youtube.com/watch?v=0_hkfqU3H0E) (YouTube) — Protocols, TCP, HTTP, REST, and distributed systems architecture.
  - [Harvard CS50W: Web Programming with Python and JavaScript](https://www.youtube.com/playlist?list=PLhQjrBD2T382hIWms_yI4Qp_wG-g59m8R) (YouTube) — Production web architectures, APIs, and state.
  - [Next.js App Router Documentation & Video Tutorials](https://nextjs.org/docs) — Modern full-stack architecture, Server Components, and streaming UI.
  - [Designing Data-Intensive Applications (Martin Kleppmann)](https://dataintensive.net/) — The definitive guide to reliability, scalability, and data consistency.
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
* **Curated Free Trainings & Video Masterclasses:**
  - [DeepLearning.AI: ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (Free Course) — Andrew Ng & Isa Fulford's canonical prompt engineering course.
  - [Anthropic: Prompt Engineering Interactive Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) — Interactive repo with exercises on few-shot prompting, chain-of-thought, and XML tags.
  - [FreeCodeCamp: Vector Databases & RAG Masterclass (James Briggs)](https://www.youtube.com/watch?v=klTvEwg3oJ4) (YouTube) — Vector indexing, Pinecone, and semantic embeddings.
  - [Cohere LLM University: Reranking & Retrieval](https://cohere.com/llmu) — Free visual guide to hybrid search and cross-encoder rerankers.
* **Milestone Artifact:** A grounded Q&A tool that ingests custom PDFs/markdown documents and generates cited, hallucination-resistant answers with clickable source anchors.

---

### Unit 4 — Agentic Workflows & Tool Use
Transitioning from single stateless LLM completions to multi-turn agents that reason, plan, invoke external tools, and self-correct.

* **Key Concepts:**
  - Function calling and OpenAPI schema binding.
  - The ReAct pattern (Reasoning + Acting) and Plan-and-Solve patterns.
  - Stateful agent memory: working memory vs. episodic memory vs. scratchpads.
  - Human-in-the-Loop (HEITL) approval gates for irreversible actions.
* **Curated Free Trainings & Video Masterclasses:**
  - [DeepLearning.AI: Functions, Tools and Agents with LangChain](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) (Free Course) — Harrison Chase on function calling, routing, and tools.
  - [LangChain: LangGraph Full Course for Beginners](https://www.youtube.com/playlist?list=PLfaIDF98qy1AO3iZiqnmU_tcrstcpvW9g) (YouTube) — Cyclic graphs, persistence, and stateful human approval gates.
  - [Microsoft Research: AutoGen Tutorial & Multi-Agent Design](https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/) (Free Course) — Multi-agent conversation patterns.
  - [ReAct Paper: Synergizing Reasoning and Acting in Language Models (Yao et al.)](https://arxiv.org/abs/2210.03629) — The original foundational paper.
* **Milestone Artifact:** An autonomous research agent capable of browsing the web, downloading research summaries, formatting comparative markdown tables, and presenting final findings for human approval.

---

### Unit 5 — Production Shipping: Observability, Cost & Evals
Shipping to real users requires monitoring, security guardrails, cost controls, and continuous regression testing.

* **Key Concepts:**
  - LLM Evaluation: LLM-as-a-judge, benchmark datasets, synthetic test cases, latency measurement.
  - Observability and tracing: Langfuse, Helicone, OpenTelemetry.
  - Security & Guardrails: Prompt injection mitigations, PII redaction, output content filtering.
  - Token economics: caching prompts, model cascading (routing between fast models and frontier reasoning models).
* **Curated Free Trainings & Video Masterclasses:**
  - [Vercel: Building Modern Web Apps with Vercel AI SDK (Lee Robinson)](https://www.youtube.com/watch?v=sxx_Ucxo2eQ) (YouTube) — Streaming UI, tools, and telemetry.
  - [DeepLearning.AI: Evaluating and Debugging Generative AI Models](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/) (Free Course) — Automated evaluation harnesses and tracking.
  - [Hamel Husain: A Practical Guide to LLM Evaluation](https://hamel.dev/blog/posts/evals/) — The field guide to building non-academic evaluation test suites.
  - [Lakera Gandalf: Prompt Injection Sandbox Game](https://gandalf.lakera.ai/) (Interactive Training) — Hands-on defense against prompt extraction.
* **⚠️ Missing Training (What Boss of AI Provides):**
  - *Ecosystem Gap:* Evals training is scattered across technical blogs; there is no structured video masterclass on CI/CD regression benchmarking and human-in-the-loop review gates.
  - *Boss of AI Solution:* **Quest 05 (Build an Evaluation Harness)** and the **Mode 1 Sequential Human-Gated loop** in [`AGENTS.md`](file:///d:/sanjay/bossofai/AGENTS.md).
* **Milestone Artifact:** A production-grade monitoring dashboard tracking cost per request, p95 latency, prompt injection defenses, and daily active user satisfaction.

---

## 🏆 Capstone Portfolio Project

To graduate Track A, you must build and deploy a **production-ready AI-native application**:
1. It must solve a tangible user problem (in higher education, local business, healthcare, or research).
2. It must include a public GitHub repository with comprehensive specifications, tests, and CI/CD pipelines.
3. It must be deployed live on a public domain (e.g. Vercel) with active user telemetry.
4. It must pass an adversarial peer review demonstrating guardrails against prompt injection and data leaks.
