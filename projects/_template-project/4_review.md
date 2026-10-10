---
project: _template-project
stage: 4-test
artifact: review
reviewer_human: ~
date: ~
status: not-started
tags: [ai-native, review, stage-4]
---

# Review: [Project Title]

> The agentic part of review lives in [`deliberation_board.md`](./deliberation_board.md) and `deliberation/`, run under [`protocols/agentic-loops.md`](../../protocols/agentic-loops.md) §5. This file records the **outcome** and the **human gate**. Never mark anything certified here that the board does not support.

## Layer 1: Agent verification (Loop C)
- Stakes level: 
- Commit reviewed: 
- Verification Summary: see the top of `deliberation_board.md`
- Result: converged / converged with dissent / not converged
- Open Critical or Major issues: 0 required before Layer 2
- Unverified claims awaiting a human decision: 
- Dissent Register entries: 

## Layer 2: Human domain expert judgment
Humans see the Verification Summary first. They may overrule consensus and impasse alike; record why in `decisions.md`.
- [ ] Domain and strategic validity
- [ ] Political, ethical and safety sensitivity
- [ ] Dissent Register read and each entry accepted or acted on
- [ ] Unverified claims accepted, softened, or removed
- Decision: approve / approve with conditions / return to Build / return to Design / return to Plan
- Reviewer(s) and date:
