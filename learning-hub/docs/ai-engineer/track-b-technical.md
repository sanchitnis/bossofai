---
sidebar_position: 3
title: "Track B: AI Engineer (Deep Technical)"
description: "Syllabus and roadmap for the Deep Technical AI Engineer track: fine-tuning, multi-agent pipelines, synthetic data, and core model architectures."
---

# Track B: AI Engineer (Deep Technical)

> **"You want to work on the AI systems themselves: agentic architectures, fine-tuning, knowledge distillation, data curation, synthetic datasets, and the full model lifecycle."**

Track B is designed for computer science students, ML practitioners, systems engineers, and applied AI researchers who want to master the mathematical, architectural, and data engineering layers powering modern artificial intelligence.

---

## 🎯 Target Profile & Capabilities

Upon completing Track B, you will be able to:
- Understand transformer internals, attention mechanisms, RoPE embeddings, and KV cache dynamics from first principles.
- Architect complex multi-agent collaborative systems with distinct roles, communication topologies, and deterministic convergence.
- Curate, clean, and synthesize domain datasets for supervised fine-tuning (SFT) and preference alignment (DPO/RLHF).
- Perform parameter-efficient fine-tuning (PEFT/LoRA/QLoRA) and model quantization (GGUF/AWQ/EXL2) for local edge inference.
- Build rigorous quantitative evaluation pipelines measuring accuracy, hallucination rates, and task completion.

---

## 📚 Curriculum Breakdown

### Unit 1 — Transformer Internals & Deep Learning Foundations
Demystifying the neural engine powering modern foundation models from first mathematical principles.

* **Key Concepts:**
  - Scaled Dot-Product Attention & Multi-Head Attention (MHA vs. MQA vs. GQA).
  - Positional embeddings: Sinusoidal, Rotary Position Embedding (RoPE), ALiBi.
  - Normalization layers: LayerNorm vs. RMSNorm; activation functions: GeLU, SwiGLU.
  - The KV Cache: memory footprints, latency trade-offs, and PagedAttention (vLLM).
  - Transformer variants: Encoder-only (BERT), Decoder-only (GPT/Llama), Encoder-Decoder (T5).
* **Curated Free Trainings & Video Masterclasses:**
  - [Andrej Karpathy: Let's build GPT: from scratch, in code, spelled out](https://www.youtube.com/watch?v=kCc8FmEb1nY) (YouTube) — The gold standard for understanding decoder transformers and autoregressive generation.
  - [Umar Jamil: Attention is All You Need from Scratch](https://www.youtube.com/watch?v=bCz4OMemCcA) (YouTube) — Complete mathematical breakdown and PyTorch implementation.
  - [Jay Alammar: The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) — The world's most famous visual explanation of multi-head self-attention.
  - [Vaswani et al.: Attention Is All You Need Paper](https://arxiv.org/abs/1706.03762) — The foundational research text.
* **Milestone Artifact:** A miniature decoder-only GPT transformer built from scratch in PyTorch, trained on a character/word-level corpus with custom attention masks.

---

### Unit 2 — Stateful Agentic Systems & Multi-Agent Topologies
Designing systems where multiple specialized models cooperate to solve complex, multi-step reasoning problems.

* **Key Concepts:**
  - Single-agent reasoning: ReAct, Tree-of-Thoughts (ToT), Reflexion, and Self-Discover.
  - Multi-agent communication topologies:
    - Hierarchical supervisor pattern (Router -> Specialists).
    - Sequential conveyor pipelines (Author -> Reviewer -> Auditor).
    - Joint collaborative deliberation boards and consensus convergence.
  - Memory architectures: short-term scratchpads, vector episodic memory, reflective summarization.
  - Tool execution sandboxing: Firecracker microVMs, Docker containers, WASM sandboxes.
* **Curated Free Trainings & Video Masterclasses:**
  - [DeepLearning.AI: Multi AI Agent Systems with crewAI](https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/) (Free Course) — Multi-agent roles, task assignment, and collaboration.
  - [DeepLearning.AI: AI Agentic Design Patterns with AutoGen](https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/) (Free Course) — Conversational agent design and tool integration.
  - [LangChain: LangGraph Full Course (YouTube)](https://www.youtube.com/playlist?list=PLfaIDF98qy1AO3iZiqnmU_tcrstcpvW9g) — Stateful multi-agent graphs and persistence.
* **⚠️ Missing Training (What Boss of AI Provides):**
  - *Ecosystem Gap:* Existing courses only show simple sequential handoffs or unconstrained chatter. Zero free courses teach formal **deliberation boards with blind review rounds, cross-examination, and mathematical stopping/convergence conditions**.
  - *Boss of AI Solution:* **Mode 2 Deliberation Board Protocol** in [`protocols/agentic-loops.md`](file:///d:/sanjay/bossofai/protocols/agentic-loops.md) and **Quest 06 (Deploy a ReAct Agent)**.
* **Milestone Artifact:** A multi-agent code verification harness where an Adversary agent writes adversarial test cases against a Developer agent's generated code until convergence is verified.

---

### Unit 3 — Fine-Tuning, PEFT & Knowledge Distillation
Adapting foundation models to specialized domain tasks, style constraints, and private institutional knowledge.

* **Key Concepts:**
  - Full parameter fine-tuning vs. Parameter-Efficient Fine-Tuning (PEFT).
  - Low-Rank Adaptation (LoRA) and Quantized LoRA (QLoRA): rank selection, alpha scaling, and target modules.
  - Instruction tuning format: ShareGPT vs. ChatML format.
  - Direct Preference Optimization (DPO) and Odds Ratio Preference Optimization (ORPO) without complex RL reward models.
  - Knowledge distillation: transferring reasoning from frontier models to lightweight edge models.
* **Curated Free Trainings & Video Masterclasses:**
  - [Umar Jamil: LoRA & QLoRA Explained & Implemented from Scratch](https://www.youtube.com/watch?v=t509sv5MT0w) (YouTube) — Low-rank matrix decomposition and quantization explained visually and coded.
  - [Umar Jamil: Direct Preference Optimization (DPO) Explained](https://www.youtube.com/watch?v=hvGa5Mba4c8) (YouTube) — Mathematical derivation of DPO without RL reward models.
  - [DeepLearning.AI: Finetuning Large Language Models](https://www.deeplearning.ai/short-courses/finetuning-large-language-models/) (Free Course) — Instruction tuning with Sharon Zhou.
  - [Hugging Face: PEFT Library Documentation & Tutorials](https://huggingface.co/docs/peft/index) — The official industry toolkit.
* **Milestone Artifact:** A fine-tuned open-source model (e.g. Llama 3 8B or Mistral 7B) trained with QLoRA on a specialized domain dataset, demonstrating measurable domain uplift over the base model.

---

### Unit 4 — Data Engineering, Curation & Synthetic Datasets
In AI engineering, dataset quality is the primary ceiling on model capabilities.

* **Key Concepts:**
  - Web data extraction, document parsing, and layout extraction (Unstructured, Marker, PyMuPDF).
  - Deduplication algorithms (MinHash LSH) and quality heuristic filtering.
  - Synthetic data generation pipelines: Self-Instruct, Evol-Instruct, UltraFeedback techniques.
  - Adversarial red-teaming datasets and safety filtering.
  - Dataset versioning and provenance tracking (Hugging Face Datasets, DVC).
* **Curated Readings & Research:**
  - [Self-Instruct: Aligning Language Models with Self-Generated Instructions (Wang et al.)](https://arxiv.org/abs/2212.10560)
  - [Textbooks Are All You Need (Phi-1 Paper - Gunasekar et al.)](https://arxiv.org/abs/2306.11644)
  - [WizardLM: Empowering Large Language Models to Follow Complex Instructions (Evol-Instruct)](https://arxiv.org/abs/2304.12244)
* **⚠️ Missing Training (What Boss of AI Provides):**
  - *Ecosystem Gap:* Almost no public video courses exist for this domain. Scalable synthetic instruction generation, quality heuristic pruning, and MinHash deduplication are currently trapped in academic research papers and private AI lab codebases.
  - *Boss of AI Solution:* **Missing Module 2: Scalable Synthetic Data Engineering & Evol-Instruct Pipelines** with open-source notebooks and pipelines.
* **Milestone Artifact:** A clean, filtered 10,000-sample synthetic instruction dataset generated using an Evol-Instruct pipeline, with automated quality audits and license compliance records.

---

### Unit 5 — Production Serving, Quantization & MLOps
Deploying high-throughput, low-latency inference pipelines with cost guarantees.

* **Key Concepts:**
  - Model quantization: Post-Training Quantization (PTQ), AWQ, GPTQ, GGUF/llama.cpp.
  - High-throughput inference engines: vLLM, TensorRT-LLM, TGI (continuous batching, speculative decoding).
  - GPU memory profiling: activation memory, model weights, KV cache sizing.
  - Systematic benchmarking: Ragas, DeepEval, MT-Bench, and custom domain test suites.
* **Curated Free Trainings & Video Masterclasses:**
  - [DeepLearning.AI: Efficiently Serving LLMs with vLLM](https://www.deeplearning.ai/short-courses/efficiently-serving-llms/) (Free Course) — PagedAttention and production serving.
  - [DeepLearning.AI: Quantization Fundamentals with Hugging Face](https://www.deeplearning.ai/short-courses/quantization-fundamentals/) (Free Course) — Post-training quantization, INT8, and INT4.
  - [Umar Jamil: Quantization & AWQ Explained](https://www.youtube.com/watch?v=PBv_pnox2OU) (YouTube) — Activation-aware weight quantization theory and math.
  - [Trelis Research: Local Inference & Benchmarking (YouTube)](https://www.youtube.com/@TrelisResearch) — Real-world tokens-per-second, TTFT, and GPU profiling.
* **Milestone Artifact:** A self-hosted or cloud-served inference API benchmarked under concurrent load, reporting tokens per second, time-to-first-token (TTFT), and GPU memory saturation.

---

## 🏆 Capstone Portfolio Project

To graduate Track B, you must complete a **deep technical engineering artifact**:
1. Train, fine-tune, or compress a model to solve a non-trivial benchmark, OR build an advanced multi-agent runtime with verifiable convergence proofs.
2. Publish complete code, data pipelines, weights (on Hugging Face), and reproducibility scripts.
3. Write a comprehensive technical report with ablation studies, failure modes, and quantitative performance curves.
4. Defend your work in a technical viva voce addressing data leakage, bias mitigation, and architectural choices.
