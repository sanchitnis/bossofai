# Chain-of-Thought (CoT) Prompting

Chain-of-Thought (CoT) prompts encourage the AI to show its work before giving the final answer. This is critical for complex logic, math, and reasoning.

### The Problem:
If you ask an AI:
`I have 3 apples, I eat 1, and buy 2 more. Then I give half to my friend. How many do I have?`

It might jump to a quick (and sometimes wrong) answer.

### The CoT Prompt:
Try adding `Let's think step by step.` at the end of your prompt.

**Prompt**:
`I have 3 apples, I eat 1, and buy 2 more. Then I give half to my friend. How many do I have? Let's think step by step.`

**Why it works**:
By breaking the problem down, the AI is less likely to make "hallucination" errors in middle steps.
