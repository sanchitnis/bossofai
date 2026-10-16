---
sidebar_position: 1
title: "AI Engineer Study Guide: Overview & Pathways"
description: "Self-paced, open-source reading list and study plan for becoming an AI Engineer in the era of abundant intelligence."
---

# AI Engineer Study Guide

> **"A self-paced, open-source reading list and study plan for becoming an AI engineer. Use it alongside the Srujana Pathway, or on its own."**

Welcome to the **Boss of AI — AI Engineer Study Guide**. In the era of abundant machine intelligence, software engineering is undergoing its most profound transformation since the birth of the personal computer. 

Writing code manually line-by-line is no longer the sole differentiator. What distinguishes exceptional AI engineers today is **architectural judgment, systems orchestration, spec-driven discipline, and the ability to turn ambiguous human problems into verifiable, deployed software.**

This curriculum is adapted from the open-source [learn-ai-engineering](https://github.com/sanchitnis/learn-ai-engineering) project (itself inspired by John Washam's *Coding Interview University* and released under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). It bridges traditional computing fundamentals with cutting-edge agentic workflows.

---

## 🧭 Three Specialized Tracks

The curriculum is structured around three distinct learning tracks sharing a unified foundation. Pick the track that matches your immediate career ambition:

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-100 flex flex-col justify-between">
    <div>
      <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-3">Track A</span>
      <h3 className="text-xl font-bold text-white mb-2">AI-Native Builder</h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        For developers and entrepreneurs who want to ship AI-powered products fast using coding agents, LLMs, and modern web APIs. You orchestrate models rather than train them.
      </p>
      <ul className="text-xs text-slate-400 space-y-1.5 my-4 pl-4 list-disc">
        <li>AI coding tools & spec-driven development</li>
        <li>Product engineering & system architecture</li>
        <li>Prompting, RAG pipelines, and agent orchestration</li>
        <li>Production shipping: cloud, APIs, observability</li>
      </ul>
    </div>
    <a href="/learn/ai-engineer/track-a-builder" className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors no-underline">
      Explore Track A: Builder →
    </a>
  </div>

  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-100 flex flex-col justify-between">
    <div>
      <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">Track B</span>
      <h3 className="text-xl font-bold text-white mb-2">AI Engineer (Deep Technical)</h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        For engineers and researchers who want to work on the AI systems themselves: transformer internals, fine-tuning, synthetic datasets, and high-throughput inference engines.
      </p>
      <ul className="text-xs text-slate-400 space-y-1.5 my-4 pl-4 list-disc">
        <li>Transformer internals & KV cache dynamics</li>
        <li>PEFT, LoRA & preference alignment (DPO)</li>
        <li>Data curation & synthetic datasets (Evol-Instruct)</li>
        <li>High-throughput inference (vLLM) & quantization</li>
      </ul>
    </div>
    <a href="/learn/ai-engineer/track-b-technical" className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors no-underline">
      Explore Track B: Technical →
    </a>
  </div>

  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-100 flex flex-col justify-between">
    <div>
      <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-3">Track C</span>
      <h3 className="text-xl font-bold text-white mb-2">Forward Deployed AI Engineer (FDE)</h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        For engineers who embed on the front lines with enterprise clients: solving messy unstructured problems, integrating legacy data, and hardening custom workflows into core platforms.
      </p>
      <ul className="text-xs text-slate-400 space-y-1.5 my-4 pl-4 list-disc">
        <li>Diagnostic problem scoping & ADR authoring</li>
        <li>FastAPI, Docker & private VPC networking</li>
        <li>Model Context Protocol (MCP) & RBAC RAG</li>
        <li>4-week enterprise pilots & executive ROI defense</li>
      </ul>
    </div>
    <a href="/learn/ai-engineer/track-c-fde" className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl bg-blue-500 text-slate-950 hover:bg-blue-400 transition-colors no-underline">
      Explore Track C: FDE →
    </a>
  </div>
</div>

---

## 🎯 The 5 Core Student Competencies

We map our learning outcomes to **five core student skills**—combining Andrew Ng’s AI Engineering Skills Map with our own fifth essential pillar, **Judgment and Responsibility**:

1. **Build and Deploy AI Apps:** Prompt orchestration, RAG architectures, multi-agent frameworks, and systematic evaluation.
2. **Software Engineering Fundamentals:** Systems thinking, modular decomposition, data structures, and AI-native SDLC.
3. **Work with Coding Agents:** Spec-driven development, human-in-the-loop workflows, test-first iteration, and git discipline.
4. **Shape the Build:** Product engineering, user empathy, rapid prototyping, and portfolio building.
5. **Judgment and Responsibility:** Ethical boundaries, data privacy, hallucination verification, and moral accountability.

👉 Read the full **[5 Core Skills Mapping & Reading List](./skills-mapping.md)** to see where to read for each skill.

---

## 🏛️ Comprehensive Foundations Underneath

Both tracks are grounded in five foundational pillars:
- **[Mathematics for AI](./foundations.md#1-mathematics-for-ai):** Linear algebra, multivariable calculus, probability, statistics, and optimization.
- **[Machine Learning & Deep Learning](./foundations.md#2-machine-learning-and-deep-learning):** Neural architectures, loss functions, transformers, and representation learning.
- **[LLMs & Generative AI](./foundations.md#3-llms-and-generative-ai):** Pretraining, instruction-tuning, tokenization, context windows, and scaling laws.
- **[MLOps & Cloud Infrastructure](./foundations.md#4-mlops-and-cloud-infrastructure):** Vector databases, model serving, latency optimization, and monitoring.
- **[Career & Portfolio Strategy](./foundations.md#5-getting-the-job--portfolio-strategy):** Building in public, portfolio proof artifacts, and interview mastery.

---

## ⚔️ Don't Just Read. Play It as Quests!

Theory without shipped code creates fragile understanding. We have turned this entire study guide into **13 action-oriented Quests** organized across four progressive levels:

* **Level 1 — Warm Up:** Set up your workshop, invoke your first model from code, specify before you build.
* **Level 2 — Build & Test:** RAG with source citations, build evaluation harnesses, deploy a ReAct agent.
* **Level 3 — Ship & Shape:** Talk to real users, ship a small production app, and perform adversarial red-teaming.
* **Level 4 — Judgment & Proof:** Model explainability, ethical auditing, publish your public portfolio, and pay it forward.

👉 Explore the **[Quests Overview](./quests.md)** or jump into the interactive quest board at **[bossofai.org/quests](https://bossofai.org/quests)**.

---

## 🏗️ Bridging the Gaps: Plan to Build Missing Trainings

Where public online courses only offer toy demos or abstract philosophy, Boss of AI is actively building hands-on modules, starter repositories, and microlearning decks across 8 critical gaps (Spec-Driven Development, Synthetic Data, Multi-Agent Deliberation, and Enterprise FDE Pilots).

👉 Read our comprehensive **[Plan to Build Missing AI Engineer & FDE Trainings](./missing-trainings-action-plan.md)**.

---

## 🤝 Pairing with the Srujana Pathway

The study guide is a **self-paced knowledge engine**. When paired with the **Srujana Pathway**, it transforms into an execution gymnasium:
* **Stage 1 (Micro-challenges):** Quick 48-hour wins that validate technical grasp.
* **Stage 2 (Challenge Projects):** Multi-week team projects solving real institutional or industry briefs under mentor guidance.
* **Stage 3 (Ventures & Production):** Shipped open-source systems, enterprise prototypes, or commercial ventures evaluated by human domain experts.
