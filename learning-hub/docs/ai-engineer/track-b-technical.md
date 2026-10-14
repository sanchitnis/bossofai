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
- Understand transformer internals, attention mechanisms, RoPE embeddings, and KV cache dynamics.
- Architect complex multi-agent collaborative systems with distinct roles, communication topologies, and deadlock resolution.
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
* **Core Readings & Resources:**
  - [Attention Is All You Need (Vaswani et al.)](https://arxiv.org/abs/1706.03762)
  - [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/)
  - [Transformer Architecture Deep Dive (Andrej Karpathy - Let's build GPT)](https://www.youtube.com/watch?v=kCc8FmEb1nY)
* **Milestone Artifact:** A miniature decoder-only GPT transformer built from scratch in PyTorch, trained on a character/word-level corpus with custom attention masks.

---

### Unit 2 — Stateful Agentic Systems & Multi-Agent Topologies
Designing systems where multiple specialized models cooperate to solve complex, multi-step reasoning problems.

* **Key Concepts:**
  - Single-agent reasoning: ReAct, Tree-of-Thoughts (ToT), Reflexion, and Self-Discover.
  - Multi-agent communication topologies:
    - Hierarchical supervisor pattern (Router -> Specialists).
    - Sequential conveyor pipelines (Author -> Reviewer -> Auditor).
    - Joint collaborative debates and consensus convergence.
  - Memory architectures: short-term scratchpads, vector episodic memory, reflective summarization.
  - Tool execution sandboxing: Firecracker microVMs, Docker containers, WASM sandboxes.
* **Core Readings & Resources:**
  - [Agentic AI Systems in the Study Guide](https://github.com/sanchitnis/learn-ai-engineering#agentic-ai-systems)
  - [Reflexion: Language Agents with Verbal Reinforcement Learning (Shinn et al.)](https://arxiv.org/abs/2303.11366)
  - [AutoGen: Enabling Next-Gen LLM Applications (Microsoft Research)](https://arxiv.org/abs/2308.08155)
* **Milestone Artifact:** A multi-agent code verification harness where an Adversary agent writes adversarial test cases against a Developer agent's generated code until convergence is verified.

---

### Unit 3 — Fine-Tuning, PEFT & Knowledge Distillation
Adapting foundation models to specialized domain tasks, style constraints, and private institutional knowledge.

* **Key Concepts:**
  - Full parameter fine-tuning vs. Parameter-Efficient Fine-Tuning (PEFT).
  - Low-Rank Adaptation (LoRA) and Quantized LoRA (QLoRA): rank selection, alpha scaling, and target modules.
  - Instruction tuning format: ShareGPT vs. ChatML format.
  - Direct Preference Optimization (DPO) and Odds Ratio Preference Optimization (ORPO) without complex RL reward models.
  - Knowledge distillation: transferring reasoning from frontier models (e.g. Gemini 1.5 Pro) to lightweight edge models (e.g. Llama-3-8B).
* **Core Readings & Resources:**
  - [LoRA: Low-Rank Adaptation of Large Language Models (Hu et al.)](https://arxiv.org/abs/2106.09685)
  - [Direct Preference Optimization: Your Language Model is Secretly a Reward Model (Rafailov et al.)](https://arxiv.org/abs/2305.18290)
  - [Hugging Face PEFT Library Documentation](https://huggingface.co/docs/peft/index)
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
* **Core Readings & Resources:**
  - [Data Collection, Curation & Synthetic Data](https://github.com/sanchitnis/learn-ai-engineering#data-collection-curation--synthetic-data)
  - [Self-Instruct: Aligning Language Models with Self-Generated Instructions (Wang et al.)](https://arxiv.org/abs/2212.10560)
  - [Textbooks Are All You Need (Phi-1 Paper - Gunasekar et al.)](https://arxiv.org/abs/2306.11644)
* **Milestone Artifact:** A clean, filtered 10,000-sample synthetic instruction dataset generated using an Evol-Instruct pipeline, with automated quality audits and license compliance records.

---

### Unit 5 — Production Serving, Quantization & MLOps
Deploying high-throughput, low-latency inference pipelines with cost guarantees.

* **Key Concepts:**
  - Model quantization: Post-Training Quantization (PTQ), AWQ, GPTQ, GGUF/llama.cpp.
  - High-throughput inference engines: vLLM, TensorRT-LLM, TGI (continuous batching, speculative decoding).
  - GPU memory profiling: activation memory, model weights, KV cache sizing.
  - Systematic benchmarking: Ragas, DeepEval, MT-Bench, and custom domain test suites.
* **Core Readings & Resources:**
  - [MLOps and Cloud](https://github.com/sanchitnis/learn-ai-engineering#mlops-and-cloud)
  - [Efficient Memory Management for Large Language Model Serving with PagedAttention (vLLM Paper)](https://arxiv.org/abs/2309.06180)
  - [AWQ: Activation-aware Weight Quantization for LLM Compression (Lin et al.)](https://arxiv.org/abs/2306.00978)
* **Milestone Artifact:** A self-hosted or cloud-served inference API benchmarked under concurrent load, reporting tokens per second, time-to-first-token (TTFT), and GPU memory saturation.

---

## 🏆 Capstone Portfolio Project

To graduate Track B, you must complete a **deep technical engineering artifact**:
1. Train, fine-tune, or compress a model to solve a non-trivial benchmark, OR build an advanced multi-agent runtime with verifiable convergence proofs.
2. Publish complete code, data pipelines, weights (on Hugging Face), and reproducibility scripts.
3. Write a comprehensive technical report with ablation studies, failure modes, and quantitative performance curves.
4. Defend your work in a technical viva voce addressing data leakage, bias mitigation, and architectural choices.
