---
protocol: agentic-loops
version: 1.0-draft
status: awaiting-human-approval
owner: Sanjay
supersedes: "Stage 4 'Layer 1 Automated Check' in ai-native-project-playbook.md (v0)"
---

# Agentic Loops: how agents and humans move work forward in Boss of AI

> **Status**: Draft v1.0, proposed by an AI agent. It becomes the standard only after Sanjay approves it (HEITL applies to our own process too).
>
> **Hard constraint kept from AGENTS.md**: no programmatic LLM orchestration. Every agent turn is triggered manually (Antigravity, Kiro, VS Code Copilot, Claude, or any chatbot) and communicates only through committed markdown files. The protocol is designed for that: slow, auditable, cheap.

---

## 1. Why this exists

The v0 playbook had one verification idea: an agent "reviews" the draft, then a human signs off. That has four weaknesses:

1. **One reviewer, one pass.** A single agent can be confidently wrong, and nobody checks it.
2. **No way to disagree.** Findings were a list; there was no step where the author, or another reviewer, could answer back.
3. **No stopping rule.** Nothing said when review is finished, or what to do when reviewers genuinely disagree.
4. **Consensus was undefined.** Agreement between agents can mean the claim is true, or just that the agents share a blind spot.

This protocol fixes those four things and defines every loop precisely enough that two different agents following it would behave the same way.

## 2. Vocabulary

| Term | Meaning |
|---|---|
| **Stage names** | 1 Plan (`1_intent.md`), 2 Design (`2_spec.md`), 3 Build (`3_draft.md`), 4 Test (`4_review.md`), 5 Deploy (`5_final.md`), 6 Maintain (`6_feedback.md`). `0_context.md` is the standing foundation. These match the frontmatter in every project file. The old playbook headings (Envision, Scope, Iterate) are retired. |
| **Author** | The agent (or human) that wrote the artifact under review. Defends it, but may concede. |
| **Reviewer** | An agent with a defined lens (persona) that looks for defects. Never the Author of the artifact. |
| **Chair** | A non-Author agent that runs the process: merges the issue ledger, applies stopping rules, writes the Verification Summary. The Chair has no vote on substance. |
| **Human gate** | The human expert(s) who approve, return or overrule. Not part of the agent loop; the loop feeds them. |
| **Issue** | One specific, checkable defect or doubt, with an ID (`F-001`). |
| **Crux** | The exact point on which two parties disagree. |
| **Dissent** | A disagreement that stays unresolved and is recorded openly rather than hidden. |

## 3. The four loops

```text
                        ┌────────────── Loop A: Lifecycle (outer) ───────────────┐
 0_context ──► 1 Plan ──► 2 Design ──► 3 Build ──► 4 Test ──► 5 Deploy ──► 6 Maintain
                  ▲           ▲           │  ▲        │ │          │            │
                  │           │           │  └ Loop B ┘ │          │            │
                  │           │           │  (build)    │          │            │
                  │           │           └──► Loop C ◄─┘          │            │
                  │           │          (verify & deliberate)     │            │
                  │           └──── send back (decision record) ◄──┘            │
                  └────────────────────── Loop D: new intent ◄──────────────────┘
```

| Loop | Purpose | Runs at | Exit when | Max iterations |
|---|---|---|---|---|
| **A. Lifecycle** | Move one artifact at a time through the gates | Every stage | Human gate approves, or sends back | Unlimited, but each send-back needs a decision record |
| **B. Build** | Author drafts and self-checks before anyone else sees it | Stage 3 (and revisions at 1, 2) | Self-check passes against the spec's acceptance criteria | 2 self-refinements |
| **C. Verify & deliberate** | Independent review, cross-examination, convergence or recorded disagreement | Stage 4; lighter at Stages 1 and 2 | No open Critical or Major issue (see §5.5) | Per-issue and per-artifact caps (see §5.6) |
| **D. Maintain** | Turn real-world feedback into the next intent | Stage 6 | Each feedback item triaged | Reviewed on a cadence set in `6_feedback.md` |

### Loop A: Lifecycle (outer loop)

1. Work on **one artifact at a time** (Mode 1) and stop at its gate.
2. Each artifact carries `status` in its frontmatter: `not-started` → `draft` → `in-verification` → `awaiting-human-approval` → `approved` (or `returned`).
3. Only a human sets `approved`.
4. **Backward moves are legal and expected.** If Stage 4 shows the spec was wrong, go back to Stage 2, not to patching the draft. Every backward move gets an entry in `decisions.md` saying why. A stage reached by going back is labelled with a new version (`v2`).
5. **Retroactive honesty.** If real work happened outside the lifecycle (code, outreach, a website), record it in `0_context.md` under "Current state" instead of pretending the stage was followed.

### Loop B: Build (inner loop)

1. Author drafts against `2_spec.md` and `0_context.md`.
2. Author runs the **spec-conformance check**: for every section in the spec, tick each acceptance criterion or write why it is not met.
3. Author updates `claims.md`: every factual claim, number and citation in the draft gets a row (claim, source, status).
4. Author lists its **known weaknesses** (what it is least sure about) at the top of `deliberation_board.md`. Declaring weaknesses is rewarded, not punished.
5. If the check fails, refine (max 2 times), then submit anyway with the failures declared. Do not loop forever.
6. Commit. Freeze: the Chair records the commit SHA being reviewed.

### Loop D: Maintain

1. Record feedback in `6_feedback.md` with source and date.
2. Triage each item: **fix** (re-enter Loop A at Build or Design), **new intent** (new project), **decline** (write the reason).
3. Set a review date. Maintenance with no date is abandonment.

## 4. Stakes levels

The depth of Loop C depends on what is at stake. The Author proposes the level in `2_spec.md`; the human gate confirms it.

| Level | Use for | Reviewers | Rounds |
|---|---|---|---|
| **Light** | `1_intent.md`, `2_spec.md`, low-risk docs | 2 (Adversary + one domain lens) | R1 + R2, cap 2 |
| **Standard** | Normal Stage 4 | 3 (Adversary, Grounding Auditor, one or more domain lenses) | cap 4 |
| **Heavy** | Curricula, charters, funding asks, policy briefs, anything public or binding | 4 or more, including at least one running on a different model or harness from the Author | cap 5 |

Mode mapping (see AGENTS.md): Mode 1 runs Loop C at the level above with a human gate after every artifact. Mode 2 is Loop C at Heavy for contested topics. Mode 3 must still run Light before anything leaves the team.

## 5. Loop C in detail: verify and deliberate

### 5.1 Panel and roles

Every panel has these mandatory lenses; domain lenses are added per project.

| Lens | Job | Required at |
|---|---|---|
| **Adversary (Red Team)** | Try to break it: unsupported claims, contradictions, missing alternatives, gaming and failure modes | All levels |
| **Grounding Auditor** | Open every citation. Verify numbers against sources. Flag anything unverifiable | Standard, Heavy |
| **Domain lens(es)** | e.g. Pedagogy, Governance and legal, Finance, Equity and access, Child safety | Per project |
| **Chair** | Runs the process (§5.3 to §5.8). Not a reviewer of substance | Standard, Heavy |

Record the **model and harness** for every entry (for example "Claude, claude.ai" or "Gemini, Antigravity"). Panels made of one model share blind spots, so Heavy requires diversity.

### 5.2 Files

```text
projects/<slug>/
├── deliberation_board.md        # The ledger: issues, status, dispositions (Chair maintains)
├── deliberation/
│   ├── r1-<lens>.md             # Round 1: blind independent reviews (one file per reviewer)
│   ├── r2-<lens>.md             # Round 2: cross-examination responses
│   └── r3-....md                # Further rounds, only for open issues
├── claims.md                    # Every factual claim, with source and verification status
└── decisions.md                 # Human decisions and backward moves
```

Separate per-reviewer files in Round 1 are deliberate: they stop later reviewers anchoring on earlier ones.

### 5.3 Round 0: freeze and declare

The Chair confirms: artifact commit SHA, stakes level, panel and lenses, round cap, and the Author's known weaknesses. Reviewers read only the frozen artifact, `0_context.md`, `2_spec.md` and `claims.md`.

### 5.4 The rounds

**Round 1: blind independent review.** Each reviewer writes `deliberation/r1-<lens>.md` **without reading any other reviewer's file**. Contents:

- A list of issues, each with: ID, severity (**Critical** invalidates the argument or is a harm risk; **Major** materially weakens it; **minor**), location, the defect, evidence or source, suggested fix, confidence (low, medium, high).
- **What I checked and found sound.** Required, so the record shows coverage, not only complaints.
- The Adversary must raise at least three substantive objections, or document the attacks it tried that failed. A first round with zero findings from everyone triggers a mandatory second adversarial pass: unanimous early agreement is a warning sign, not a success.

**Round 2: cross-examination.** The Chair merges duplicates into `deliberation_board.md`. Then:

- Every reviewer reads all others' findings and responds to each open issue with a stance: **AGREE**, **DISAGREE**, **REFINE** (sharpen or narrow it), or **NOT-MY-SCOPE**.
- **Steelman rule:** before disagreeing, restate the other side's strongest argument in one or two sentences, to their satisfaction.
- Every disagreement is tagged with its type, because the type decides how it can be resolved:
  - **Fact**: resolvable by evidence.
  - **Interpretation**: resolvable by clarifying what the text means.
  - **Value**: depends on what we care about most; evidence alone cannot settle it.
  - **Risk-tolerance**: depends on how much risk we accept.
- The Author responds to every issue with a disposition: **ACCEPT**, **ACCEPT-WITH-CHANGE**, **REJECT** (reason required), or **DEFER-TO-HUMAN**.

**Round 3 and later: convergence.** Only open issues continue. Each party restates its position with confidence and writes **"what evidence or argument would change my mind."** The Author may revise, but only the text under discussion. Position changes must carry one reason code:

| Code | Meaning |
|---|---|
| `NEW-EVIDENCE` | A source or fact not previously considered |
| `NEW-ARGUMENT` | Reasoning not previously made |
| `CLARIFIED-SCOPE` | We were talking about different things |
| `CONCEDE-TRADEOFF` | Still disagree on weight, accept the other's priority for this artifact |

"Because the others agree" is **not** a valid reason. This is the main defence against herding.

**Regression round.** After the Author's revision, reviewers re-read only the changed text plus anything that depends on it. The **raiser** of each Critical or Major issue confirms closure, not the Author and not the Chair.

### 5.5 Issue states

| State | Meaning |
|---|---|
| `OPEN` | Raised, not yet resolved |
| `ADDRESSED-PENDING-CONFIRM` | Author changed the text; the raiser has not yet confirmed. Also used when an issue was found and fixed by one agent acting alone (no independence achieved) |
| `RESOLVED-FIXED` | Fixed; raiser confirmed |
| `CLOSED-NO-CHANGE` | Panel agreed no change is needed (reason recorded) |
| `WITHDRAWN` | Raiser withdrew it, with a reason code |
| `UNVERIFIED-ACCEPTED-RISK` | A factual claim that could not be checked; it must be softened or labelled in the artifact, and a human accepts the risk |
| `IMPASSE` | Agreed to disagree (see §5.6); goes to the Dissent Register |
| `ESCALATED` | Beyond the panel's remit; sent to the human gate |

### 5.6 Stopping rules

**The loop ends as converged** when no `OPEN` or `ADDRESSED-PENDING-CONFIRM` issue is Critical or Major, and every minor issue has a disposition.

**Agreeing to disagree.** Agents may declare `IMPASSE` on an issue. All of the following must hold:

1. **A real stalemate**, shown by at least one of:
   - two consecutive rounds with no position change and no new evidence or argument from either side (the **stagnation test**, which the Chair checks mechanically); or
   - the disagreement is tagged **Value** or **Risk-tolerance**, not Fact; or
   - the per-issue round cap has been reached.
2. **Each party writes a crux statement** (at most 120 words): the exact point of disagreement, the strongest argument for their view, the strongest argument for the other's view, and what would resolve it.
3. **Each party explicitly records "I accept impasse."** It is the agents' decision, not the Chair's. If one side will not accept, the issue continues until the round cap, then goes to the human gate as `ESCALATED`.

**Facts cannot be agreed to disagree about.** A Critical or Major issue of type **Fact** can never end in `IMPASSE`. Either evidence settles it, or the claim is removed, weakened, or labelled unverified (`UNVERIFIED-ACCEPTED-RISK`). Reality does not have a "both views" mode.

**Caps.** Per-issue round cap: Light 2, Standard 4, Heavy 5. Per-artifact revision cap: 3 full revise-and-reverify cycles. Beyond that, stop and send the whole artifact to the human gate with a root-cause note (is the spec itself wrong?).

**What impasse does *not* do.** It does not delete the issue. Each `IMPASSE` becomes a **Dissent Register** entry in `deliberation_board.md`, shown to the human gate, and carried into `5_final.md` as a "Known disagreements" section so readers see where experts differ.

### 5.7 Safeguards against known failure modes

| Failure mode | Safeguard |
|---|---|
| **Anchoring** on the first review | Blind Round 1, separate files |
| **Herding / sycophancy** (agents agree to be agreeable) | Reason codes on every position change; Adversary quota; zero-finding trigger |
| **Correlated errors** (same model, same blind spot) | Heavy requires a different model or harness; record model per entry |
| **Hallucinated evidence** | Grounding Auditor opens every cited source; Critical claims verified one by one, others sampled (at least 20%); unopenable sources count as unverified |
| **Scope creep** | Reviewers may not widen the spec. New scope becomes an `ESCALATED` issue |
| **Verbosity inflation** | Word caps: findings 80 words, responses 120 words, crux 120 words |
| **Authority bias** | A human comment is logged as input, not as a closed issue. Only the raiser closes an issue |
| **Consensus mistaken for truth** | Agreement never overrides evidence; the Facts rule above |
| **Endless loops** | Round and revision caps; stagnation test |

### 5.8 The Verification Summary (the packet for the human gate)

The Chair writes one page at the top of `deliberation_board.md`:

- Stakes level, panel (lens, model, harness), rounds run, commit SHA reviewed
- Counts: issues raised / resolved-fixed / closed-no-change / withdrawn / unverified / impasse / escalated
- Position changes and their reason codes (to show it was real deliberation, not rubber-stamping)
- **Dissent Register**: each impasse with both crux statements
- **Unverified claims** the human is asked to accept or reject
- Chair's recommendation (never a decision)

### 5.9 The human gate

The human may **approve**, **approve with conditions**, or **return** (to Build, Design or Plan, with a reason). The human may overrule consensus and impasse alike; the rationale goes into `decisions.md`. Only then does `status` become `approved`.

## 6. Prompt cards for manual harnesses

Paste one into the agent's session. Each assumes the agent has read this protocol and the project's `0_context.md`.

**Reviewer, Round 1**
> You are the **[lens]** reviewer for `projects/<slug>/<artifact>.md` at commit `<sha>`. Do not read any file in `deliberation/` or `deliberation_board.md`. Write `deliberation/r1-<lens>.md` with: issues (ID, severity, location, defect, evidence, fix, confidence), and a section "What I checked and found sound". Verify any source you cite is openable. Stop when done.

**Reviewer, Round 2**
> Read `deliberation_board.md` and all `deliberation/r1-*.md`. For every open issue, give a stance (AGREE / DISAGREE / REFINE / NOT-MY-SCOPE). Before any DISAGREE, restate the other side's strongest argument. Tag each disagreement Fact / Interpretation / Value / Risk-tolerance. Write `deliberation/r2-<lens>.md`. Do not change your view merely because others hold it. Stop when done.

**Author response**
> Read the ledger. For every issue give ACCEPT, ACCEPT-WITH-CHANGE, REJECT (reason), or DEFER-TO-HUMAN. Revise only the text the accepted issues touch. List your known weaknesses honestly. Stop when done.

**Convergence round**
> Only the open issues in `deliberation_board.md` remain. For each, restate your position, your confidence, and what evidence or argument would change your mind. If you change position, give a reason code (NEW-EVIDENCE, NEW-ARGUMENT, CLARIFIED-SCOPE, CONCEDE-TRADEOFF). "Others agree" is not a reason. If you think the issue is a stalemate, say so and write your crux statement (max 120 words).

**Chair**
> Merge duplicates into the ledger. Apply the stagnation test and caps mechanically. Never vote on substance. Write the Verification Summary (§5.8). Recommend; do not decide.

## 7. Measuring the protocol itself

Record per project, in `deliberation_board.md`: issues found by round, share fixed versus impasse, number of reason-coded position changes, human overrule rate, and rounds to close. Review them each quarter and tune caps and panel sizes (kaizen). If agents almost never change positions, or almost always do, the loop is not working; adjust it.

## 8. Known limits (stated plainly)

- Agents reviewing agents can still miss what only domain humans know. The human gate stays.
- Manual turns are slow. That is the price of no-API, auditable orchestration.
- Diverse models reduce but do not remove shared errors.
- Consensus is evidence of robustness, not of truth. The Grounding Auditor and the Facts rule exist for that reason.
