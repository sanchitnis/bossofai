---
sidebar_position: 5
title: "AI Engineering Foundations"
description: "Foundational pillars underpinning Builder, Deep Technical, and Forward Deployed tracks: Mathematics, ML/DL, Generative AI, MLOps, and Career Strategy."
---

# AI Engineering Foundations

> **"Strong systems stand on deep foundations. Tools and libraries change every few months, but mathematics, system architecture, and core machine learning principles remain timeless."**

Whether you choose **Track A (AI-Native Builder)**, **Track B (Deep Technical)**, or **Track C (Forward Deployed Engineer)**, mastering these foundational pillars ensures you build on bedrock rather than shifting sand.

---

## 1. Mathematics for AI

Machine learning is applied linear algebra, multivariable calculus, and probability theory running on hardware accelerators.

### Key Knowledge Areas:
* **Linear Algebra:** Vectors, matrices, matrix multiplication, determinants, eigenvalues and eigenvectors, singular value decomposition (SVD), cosine similarity, and dot products.
* **Calculus & Optimization:** Derivatives, partial derivatives, gradients, the chain rule (foundation of backpropagation), Jacobian/Hessian matrices, gradient descent variants (SGD, AdamW), learning rate schedules.
* **Probability & Statistics:** Random variables, probability distributions (Gaussian, Bernoulli, Multinomial), Bayes' Theorem, maximum likelihood estimation (MLE), expected value, variance, and entropy / KL divergence.
* **Information Theory:** Shannon entropy, cross-entropy loss, mutual information, perplexity.

### Recommended Free Video Courses & Interactive Resources:
* **[3Blue1Brown: The Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)** (YouTube) — The finest visual and geometric intuition for vectors, matrices, dot products, and eigenvalues.
* **[MIT 18.06: Linear Algebra by Prof. Gilbert Strang](https://www.youtube.com/playlist?list=PL49CF3715CE9E3C7A)** (YouTube) — Legendary university lecture series covering rigorous matrix theory and SVD.
* **[3Blue1Brown: The Essence of Calculus](https://www.youtube.com/playlist?list=PLZHQObOWTDoA6R4bSp55PRdXUQYDAvfNX)** (YouTube) — Visual understanding of limits, derivatives, chain rule, and gradients.
* **[Andrej Karpathy: Building Micrograd (Backprop from Scratch)](https://www.youtube.com/watch?v=VMj-3S1tku0)** (YouTube) — Implements backpropagation and scalar autograd engine in raw Python.
* **[StatQuest with Josh Starmer: Machine Learning & Statistics](https://www.youtube.com/c/joshstarmer)** (YouTube) — Clear, jargon-free visual breakdowns of probability distributions, Bayes, and MLE.
* **[Harvard Stat 110: Introduction to Probability (Prof. Joe Blitzstein)](https://www.youtube.com/playlist?list=PL2SOU6wwxF0uwwH80KTQ6ht66KWxbzTIo)** (YouTube) — Complete undergraduate probability foundation.
* **[Mathematics for Machine Learning (Deisenroth, Faisal, Ong - Free PDF)](https://mml-book.github.io/)** — The standard textbook bridging vector calculus to ML algorithms.

---

## 2. Machine Learning and Deep Learning

Understanding classical supervised/unsupervised learning and the transition to deep neural networks.

### Key Knowledge Areas:
* **Classical Machine Learning:**
  - Supervised learning: Linear & Logistic Regression, Decision Trees, Random Forests, Gradient Boosted Trees (XGBoost/LightGBM).
  - Unsupervised learning: K-Means clustering, PCA (dimensionality reduction), t-SNE, UMAP.
  - Evaluation metrics: Precision, Recall, F1-score, ROC-AUC, Mean Squared Error (MSE), Cross-validation strategies.
* **Deep Learning Fundamentals:**
  - Multi-Layer Perceptrons (MLP), forward pass, backpropagation, vanishing/exploding gradients.
  - Regularization: Dropout, Weight Decay (L1 / L2), Batch Normalization, Layer Normalization.
  - Activation functions: ReLU, LeakyReLU, GeLU, Sigmoid, Softmax.
  - Convolutional Neural Networks (CNNs) for vision and Recurrent Neural Networks (RNN/LSTM/GRU) for sequences.
* **Modern Transformer Architectures:**
  - Self-attention mechanism, scaled dot-product attention, multi-head attention.
  - Encoder vs. Decoder vs. Encoder-Decoder architectures.

### Recommended Free Video Courses & Interactive Resources:
* **[Fast.ai: Practical Deep Learning for Coders (Jeremy Howard)](https://course.fast.ai/)** (Free Course) — Top-down, hands-on deep learning teaching PyTorch, computer vision, and NLP with modern best practices.
* **[Andrej Karpathy: Neural Networks: Zero to Hero Series](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)** (YouTube) — Builds makemore, MLP, BatchNorm, manual backprop, and WaveNet from first principles.
* **[Stanford CS229: Machine Learning (Andrew Ng)](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU)** (YouTube) — The canonical mathematical formulation of supervised and unsupervised learning.
* **[Deep Learning Specialization by Andrew Ng (DeepLearning.AI / Coursera Audit)](https://www.deeplearning.ai/courses/deep-learning-specialization/)** — Foundational 5-course sequence on neural nets and optimization.

---

## 3. LLMs and Generative AI

The architectural principles, tokenization methods, and training methodologies behind Large Language Models.

### Key Knowledge Areas:
* **The Model Training Pipeline:**
  - Pretraining on massive corpora (unsupervised next-token prediction).
  - Supervised Fine-Tuning (SFT) on curated instruction-response pairs.
  - Preference Alignment: Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO).
* **Tokenization & Embeddings:**
  - Byte-Pair Encoding (BPE), WordPiece, SentencePiece.
  - Out-of-vocabulary handling and multilingual tokenization efficiency.
  - Dense semantic embeddings vs. sparse lexical representations (BM25).
* **Inference Dynamics & Context Windows:**
  - Autoregressive generation, sampling temperature, top-p (nucleus sampling), top-k, frequency/presence penalties.
  - Context window mechanics, needle-in-a-haystack retrieval, long-context degradation.
  - KV Cache, memory footprints, and speculative decoding.

### Recommended Free Video Courses & Interactive Resources:
* **[Andrej Karpathy: Let's build GPT: from scratch, in code, spelled out](https://www.youtube.com/watch?v=kCc8FmEb1nY)** (YouTube) — Builds nanoGPT character-level transformer in PyTorch line by line.
* **[Andrej Karpathy: State of GPT (Microsoft Build)](https://www.youtube.com/watch?v=bZQun8Y4L2A)** (YouTube) — The definitive 45-minute blueprint of the pretraining, SFT, reward modeling, and RLHF mental model.
* **[Umar Jamil: Attention is All You Need from Scratch](https://www.youtube.com/watch?v=bCz4OMemCcA)** (YouTube) — Complete mathematical and PyTorch coding implementation of Vaswani et al.
* **[DeepLearning.AI: Generative AI Short Courses Catalog](https://www.deeplearning.ai/short-courses/)** — Free 1-hour courses on prompt engineering, LangChain, embeddings, and vector databases.
* **[Llama 3 Technical Paper: The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783)** — Modern masterclass on data mix, architectural decisions, and post-training alignment.

---

## 4. MLOps and Cloud Infrastructure {#4-mlops-and-cloud-infrastructure}

Bridging the gap between a notebook prototype and a high-availability, fault-tolerant, cost-efficient production deployment.

### Key Knowledge Areas:
* **Backend Systems & Containerization:**
  - Python FastAPI, asynchronous endpoints, Pydantic schemas, streaming responses.
  - Docker containerization, multi-stage builds, and Kubernetes orchestration.
* **Vector Databases & Storage:**
  - Vector indexing algorithms: HNSW (Hierarchical Navigable Small World), IVF-PQ.
  - Production vector stores: pgvector (PostgreSQL), Pinecone, Qdrant, Chroma.
* **Serving & Inference Engines:**
  - High-throughput inference: vLLM, Ollama, TensorRT-LLM, llama.cpp.
  - Continuous batching, PagedAttention, dynamic quantization (AWQ, GGUF).
* **Observability, Tracing & Guardrails:**
  - LLM tracing with Langfuse, Helicone, or OpenTelemetry.
  - Automated evaluation harnesses (Ragas, DeepEval, prompt regression suites).
  - Guardrails for prompt injection, sensitive data leakage, and content policy enforcement.

### Recommended Free Video Courses & Interactive Resources:
* **[FreeCodeCamp: Python FastAPI Full Course (Sanjeev Thiyagarajan)](https://www.youtube.com/watch?v=0sOvCWFmrtA)** (YouTube) — 19 hours of production backend engineering, databases, and Docker.
* **[TechWorld with Nana: Docker Tutorial for Beginners](https://www.youtube.com/watch?v=3c-iBn73dDE)** (YouTube) — Industry-standard container tutorial.
* **[TechWorld with Nana: Kubernetes Crash Course](https://www.youtube.com/watch?v=X48VuDVv0do)** (YouTube) — Container orchestration, deployments, and cluster management.
* **[DeepLearning.AI: Efficiently Serving LLMs with vLLM](https://www.deeplearning.ai/short-courses/efficiently-serving-llms/)** (Free Course) — PagedAttention, continuous batching, and high-throughput inference on GPUs.
* **[Made With ML (Goku Mohandas - MLOps Course)](https://madewithml.com/)** — Production ML lifecycle, testing, CI/CD, and deployment.
* **[Full Stack LLM Bootcamp (FSDL)](https://fullstackdeeplearning.com/llm-bootcamp/)** — Full-stack generative AI architecture, latency profiling, and evals.
* **[Langfuse: Open Source LLM Engineering & Tracing](https://langfuse.com/docs)** — Production observability, traces, and metrics.
* **[Hamel Husain: A Practical Guide to LLM Evaluation](https://hamel.dev/blog/posts/evals/)** — Definitive field guide to creating regression benchmark suites.

---

## 5. Getting the Job & Portfolio Strategy

In the AI era, resumes listing keywords carry far less weight than **publicly verifiable proof of competence**.

### The Portfolio-First Strategy:
1. **Ship in Public:** Every major project must have a live demo hosted on a public URL and a clean, documented GitHub repository.
2. **Write the Specification:** Include `requirements.md` and architecture diagrams in your repository to prove you design before you code.
3. **Show Your Evals:** Stand out from 99% of candidates by including an `evals/` folder containing benchmark questions, accuracy scores, and cost-per-call metrics.
4. **Demonstrate Human-in-the-Loop Judgment:** Explain where AI was used, where it failed, and how you engineered human oversight to prevent edge-case failures.

### Recommended Career Reading & Practice:
* **[Building and Showcasing Your Portfolio (Study Guide Section)](https://github.com/sanchitnis/learn-ai-engineering#work-environment--portfolio-building)**
* **[Swyx / Latent Space: The Rise of the AI Engineer & FDE](https://www.latent.space/)**
* **[Boss of AI Quests (13 Verifiable Portfolio Artifacts)](https://bossofai.org/quests)** — 13 small quests that turn theoretical reading into verifiable public proof.
