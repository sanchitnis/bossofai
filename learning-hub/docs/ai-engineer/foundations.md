---
sidebar_position: 5
title: "AI Engineering Foundations"
description: "Foundational pillars underpinning both builder and technical tracks: Mathematics, ML/DL, Generative AI, MLOps, and Career Strategy."
---

# AI Engineering Foundations

> **"Strong systems stand on deep foundations. Tools and libraries change every few months, but mathematics, system architecture, and core machine learning principles remain timeless."**

Whether you choose **Track A (AI-Native Builder)** or **Track B (Deep Technical)**, mastering these foundational pillars ensures you build on bedrock rather than shifting sand.

---

## 1. Mathematics for AI

Machine learning is applied linear algebra, multivariable calculus, and probability theory running on hardware accelerators.

### Key Knowledge Areas:
* **Linear Algebra:** Vectors, matrices, matrix multiplication, determinants, eigenvalues and eigenvectors, singular value decomposition (SVD), cosine similarity, and dot products.
* **Calculus & Optimization:** Derivatives, partial derivatives, gradients, the chain rule (foundation of backpropagation), Jacobian/Hessian matrices, gradient descent variants (SGD, AdamW), learning rate schedules.
* **Probability & Statistics:** Random variables, probability distributions (Gaussian, Bernoulli, Multinomial), Bayes' Theorem, maximum likelihood estimation (MLE), expected value, variance, and entropy / KL divergence.
* **Information Theory:** Shannon entropy, cross-entropy loss, mutual information, perplexity.

### Recommended Free Resources:
* [3Blue1Brown: The Essence of Linear Algebra (Video Series)](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
* [3Blue1Brown: The Essence of Calculus (Video Series)](https://www.youtube.com/playlist?list=PLZHQObOWTDoA6R4bSp55PRdXUQYDAvfNX)
* [Mathematics for Machine Learning (Deisenroth, Faisal, Ong - Free PDF)](https://mml-book.github.io/)
* [StatQuest with Josh Starmer: Machine Learning & Statistics](https://statquest.org/)

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

### Recommended Free Resources:
* [Fast.ai: Practical Deep Learning for Coders (Jeremy Howard)](https://course.fast.ai/)
* [Andrej Karpathy: Neural Networks: Zero to Hero (YouTube)](https://karpathy.ai/zero-to-hero.html)
* [Deep Learning Specialization by Andrew Ng (Coursera / DeepLearning.AI)](https://www.deeplearning.ai/courses/deep-learning-specialization/)

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

### Recommended Free Resources:
* [Llama 3 Paper: The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783)
* [State of GPT (Andrej Karpathy - Microsoft Build Presentation)](https://www.youtube.com/watch?v=bZQun8Y4L2A)
* [DeepLearning.AI Short Courses on Generative AI & Prompting](https://www.deeplearning.ai/short-courses/)

---

## 4. MLOps and Cloud Infrastructure

Bridging the gap between a notebook prototype and a high-availability, fault-tolerant, cost-efficient production deployment.

### Key Knowledge Areas:
* **Vector Databases & Storage:**
  - Vector indexing algorithms: HNSW (Hierarchical Navigable Small World), IVF-PQ (Inverted File with Product Quantization).
  - Production vector stores: pgvector (PostgreSQL), Pinecone, Qdrant, Chroma.
* **Serving & Inference Engines:**
  - High-throughput inference: vLLM, Ollama, TensorRT-LLM, llama.cpp.
  - Continuous batching, PagedAttention, dynamic quantization.
* **Observability, Tracing & Guardrails:**
  - LLM tracing with Langfuse, Helicone, or Arize Phoenix.
  - Automated evaluation harnesses (Ragas, DeepEval, prompt regression suites).
  - Guardrails for prompt injection, sensitive data leakage, and content policy enforcement.
* **Serverless & Edge Deployment:**
  - Deploying full-stack AI web applications on Vercel, AWS Lambda, or Cloudflare Workers.
  - Managing cold starts, streaming responses via Server-Sent Events (SSE).

### Recommended Free Resources:
* [Made With ML (Goku Mohandas - MLOps Course)](https://madewithml.com/)
* [Full Stack LLM Bootcamp](https://fullstackdeeplearning.com/llm-bootcamp/)
* [Vercel AI SDK Observability & Telemetry Guides](https://sdk.vercel.ai/docs/advanced/telemetry)

---

## 5. Getting the Job & Portfolio Strategy

In the AI era, resumes listing keywords carry far less weight than **publicly verifiable proof of competence**.

### The Portfolio-First Strategy:
1. **Ship in Public:** Every major project must have a live demo hosted on a public URL and a clean, documented GitHub repository.
2. **Write the Specification:** Include `requirements.md` and architecture diagrams in your repository to prove you design before you code.
3. **Show Your Evals:** Stand out from 99% of candidates by including an `evals/` folder containing benchmark questions, accuracy scores, and cost-per-call metrics.
4. **Demonstrate Human-in-the-Loop Judgment:** Explain where AI was used, where it failed, and how you engineered human oversight to prevent edge-case failures.

### Recommended Career Reading:
* [Building and Showcasing Your Portfolio (Study Guide Section)](https://github.com/sanchitnis/learn-ai-engineering#work-environment--portfolio-building)
* [How to Build an Impressive AI Portfolio (Swyx / Latent Space)](https://www.latent.space/)
* [Boss of AI Quests (13 Verifiable Portfolio Artifacts)](https://bossofai.org/quests)
