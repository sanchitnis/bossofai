# AI-Native Doctrinal Legal Thesis Playbook - Boss of AI (bossofai.org)

This playbook defines how AI agents and a human legal scholar jointly produce a **300-page doctrinal legal research thesis** (LL.M. dissertation or Ph.D.) with full authority-verification, traceability and human authorship.

**Doctrinal research** (also "black-letter" research) asks *"What is the law on this point, how is it to be understood, and how should it be developed?"* It works by locating, analysing, systematising and critically evaluating **primary authorities** (constitutions, statutes, subordinate legislation, treaties, judicial decisions) with the help of **secondary authorities** (treatises, commentaries, journal articles, law-reform reports). Typical movements are: *identify the rules -> interpret them -> synthesise them into a coherent doctrine -> test them against principle, other jurisdictions and practice -> propose reform.*

> This playbook extends the [AI-Native Project Playbook](./ai-native-project-playbook.md) (Stage 0-6 lifecycle, Loops A-D, human-only approval). "Loop C" and "Light loop" refer to the loops defined in [`protocols/agentic-loops.md`](./protocols/agentic-loops.md). A thesis is a high-stakes, long-form artifact, so every gate below is at least a Standard review.

---

## 1. The Doctrine (standing rules for every agent)

"Doctrine" also names this playbook's own governing rules. Every agent reads them cold in every session; they override convenience.

| # | Article | Meaning in practice |
| :--- | :--- | :--- |
| D1 | **The human is the author.** | The candidate owns every proposition of law, argument and word signed. Agents locate, draft, critique and verify; the candidate decides, rewrites in their own voice and can defend every page at viva. Only a human sets `status: approved`. |
| D2 | **Authorities settle the law, not agents.** | Agreement between agents proves nothing about what the law is. Every statement of law traces to a primary authority, opened and read, recorded in `authorities_register.md`. |
| D3 | **No fabricated authority.** | Never invent or "recall" a case name, citation, neutral citation, paragraph number, section number, quotation, judge or holding. Large language models are known to produce plausible but non-existent cases. An authority not opened in an official report or recognised database is `UNVERIFIED` and cannot pass any gate. |
| D4 | **Read before you rely.** | A holding is stated only after the judgment itself has been read (not a headnote, digest or secondary summary). Quotations are verbatim, with pinpoint (paragraph or page). Ratio decidendi, obiter dicta and dissents are distinguished. |
| D5 | **Law is stated as at a date, in a jurisdiction.** | Every proposition names its jurisdiction and its currency. The thesis declares a single **"law stated as at"** date. Every authority is checked for amendment, repeal, overruling, reversal or distinguishing (citator check) before and after drafting. |
| D6 | **Respect the hierarchy of authority.** | Binding vs persuasive; constitutional vs statutory; higher vs lower court; later vs earlier; same-bench vs larger-bench; per incuriam. Conflicts between authorities are surfaced, never smoothed over. |
| D7 | **Primary before secondary; never secondary for primary.** | A treatise or article may guide the search, but a proposition about a case or statute is cited to the case or statute. Secondary sources support interpretation, critique and theory. |
| D8 | **Description and evaluation are separate.** | The text must signal when it *states* the law (lex lata) and when it *argues* what the law should be (lex ferenda). Normative claims are argued and attributed, not presented as settled law. |
| D9 | **If access is missing, stop and report.** | If a database, law report, gazette or translation is unavailable, the agent reports it to the human. No reconstruction from memory, no substitute authority. Foreign-language authorities and translations are flagged with the translator. |
| D10 | **The spec precedes the prose.** | No chapter is drafted without an approved Chapter Brief derived from the approved Thesis Spec. One unit at a time. |
| D11 | **Context is externalised.** | The Thesis Bible (§2) is the memory. If it is not written in a file, it does not exist for the next session. |
| D12 | **Gates are not skippable; dissent is recorded.** | No phase starts until the previous gate is passed and signed. Reviewer disagreement goes to the Dissent Register and the human rules with a written reason. Backward moves are legal and logged. |
| D13 | **Disclose AI use; stay inside policy.** | Maintain `ai_use_log.md`; follow the institution's AI, plagiarism and academic-integrity rules; include the required disclosure statement. |
| D14 | **Honest status reporting.** | Agents report what failed, what is unverified and what was skipped. "Done" means done and verified. |

---

## 2. The Thesis Bible and Repository Layout

All files are numbered by phase so listings show creation and dependency order.

```text
thesis/<thesis-slug>/
├── 00_doctrine.md              # Phase 0: this doctrine tailored: institution rules, jurisdiction, law-stated-as-at date, gate owners
├── 01_intent.md                # Phase 1: problem, research questions, thesis statement, scope, methodology statement, risks
├── 02_authority_base.md        # Phase 2: authority and literature map, search protocol, gap analysis
├── 03_thesis_spec.md           # Phase 3: argument architecture, chapter map, page budget, acceptance criteria
├── 04_doctrinal_analysis.md    # Phase 4: rule extraction, case matrices, synthesis, comparative analysis
├── 05_chapters/                # Phase 5: ch01_*.md ... ch09_*.md, each with Chapter Brief and Chapter Contract
├── 06_integration.md           # Phase 6: whole-thesis coherence and currency audit
├── 07_adversarial_review.md    # Phase 7: examiner-style review and mock viva
├── 08_submission/              # Phase 8: final manuscript, tables of authorities, compliance pack
├── 09_viva_and_revisions.md    # Phase 9: examiner feedback, corrections, publications
│
├── bible/
│   ├── glossary.md             # Legal terms and defined terms: one meaning each, used everywhere
│   ├── style_guide.md          # Citation system (OSCOLA / Bluebook / Indian Legal Citation / other), spelling, tense, voice
│   ├── argument_map.md         # Thesis statement -> RQs -> propositions -> authorities -> chapters
│   ├── crossref_ledger.md      # Every internal cross-reference ("see Section 4.3") and its status
│   ├── hierarchy_notes.md      # Court hierarchy, binding effect rules per jurisdiction, treatment of foreign law
│   └── page_budget.md          # Target vs actual pages and words per chapter
├── authorities_register.md     # Every case, statute, treaty and instrument: verification and currency record
├── claims.md                   # Every non-trivial proposition (of law, history, fact, theory) with source and status
├── references.bib              # Secondary-source bibliography (books, articles, reports); `verified:` field on each
├── case_matrix.md              # Cases compared on facts, issue, holding, reasoning, treatment (Phase 4)
├── deliberation_board.md       # Issue ledger, verification summary, dissent register
├── deliberation/               # Per-reviewer, per-round review files for each gate
├── decisions.md                # Human decisions, overrules, backward moves
├── ai_use_log.md               # What AI did, tool and model, what the human changed
└── gate_log.md                 # One signed entry per phase gate
```

### The authorities register (the heart of the verification system)

One row per authority, created when it is first used and never deleted:

```markdown
| ID | Authority & full citation | Type | Jurisdiction / court | Opened at (source & URL/db) | Date opened | Pinpoints used | Current status (good law / amended / overruled / distinguished / n.a.) | Citator check date | Translation? | Verified by |
| A-0231 | Kesavananda Bharati v State of Kerala (1973) 4 SCC 225 | case | India, SC (13 judges) | SCC Online / Supreme Court website | 2026-09-12 | paras 292, 437 | good law; basic-structure doctrine applied repeatedly | 2026-09-12 | no | human |
```

### Scale and budget

A **300-page thesis** here means 300 numbered pages including front matter, tables, bibliography and appendices, at roughly 300-350 words per body page (1.5 spacing). Footnotes in legal writing carry citations and are counted within the pages. Adjust to the institution's template in Phase 0.

| Component | Pages | Approx. words | Notes |
| :--- | ---: | ---: | :--- |
| Front matter (title, declaration, abstract, contents, abbreviations) | 15 | n/a | Roman numerals |
| Ch 1 Introduction | 20 | 6,500 | Problem, RQs, methodology, scope, outline |
| Ch 2 Conceptual and Theoretical Framework | 30 | 9,500 | Concepts, jurisprudential theories used as lenses |
| Ch 3 Historical and Constitutional/International Background | 25 | 8,000 | Evolution of the doctrine |
| Ch 4 The Statutory / Treaty Framework | 35 | 11,000 | Systematic exposition of legislation and instruments |
| Ch 5 Judicial Interpretation and Development | 45 | 14,500 | Case law analysis: the core doctrinal chapter |
| Ch 6 Comparative Analysis | 35 | 11,000 | 2-3 comparator jurisdictions or international regimes |
| Ch 7 Critical Analysis: Gaps, Conflicts, Inconsistencies | 30 | 9,500 | Evaluation of the doctrine against principle |
| Ch 8 Reform Proposals | 20 | 6,500 | Concrete, drafted, justified |
| Ch 9 Conclusion | 10 | 3,000 | Answers each RQ explicitly |
| Table of cases, legislation, treaties; bibliography | 25 | n/a | Generated from the registers |
| Appendices (draft bill/model provisions, case tables, translations) | 10 | n/a | |
| **Total** | **300** | **~79,000 body** | ±10% variance per chapter is allowed; more needs `decisions.md` |

Chapter titles are placeholders. Adapt to the topic (e.g. a single-jurisdiction thesis may fold Ch 3 into Ch 4; an international-law thesis may replace Ch 4 with treaty and customary-law chapters). The phase structure does not change.

---

## 3. The Ten Phases

Every phase has the same shape: **Purpose -> Inputs -> Agent work -> Outputs -> Gate**. The next phase may not start until `gate_log.md` shows a human-signed PASS.

```text
P0 Doctrine -> P1 Intent -> P2 Authority Base -> P3 Spec -> P4 Doctrinal Analysis
   -> P5 Chapters (5A foundations, 5B core doctrine, 5C critique & framing)
   -> P6 Integration -> P7 Adversarial Review -> P8 Submission -> P9 Viva & Maintenance
        each arrow = a gate; any gate can send work backward
```

---

### Phase 0: Doctrine and Foundation (`00_doctrine.md`)

**Purpose.** Establish the rules of the game, the jurisdiction and the date of the law, before any research.

**Inputs.** Institution regulations, supervisor expectations, candidate profile, deadline, existing work.

**Agent work.**
- Summarise institutional rules: length, formatting, citation system, ethics, AI-use and similarity policy, submission format, supervisor and examiner process.
- Record **available legal databases and access** (e.g. SCC Online, Manupatra, Indian Kanoon, Westlaw, LexisNexis, HeinOnline, BAILII, official gazettes, treaty collections) and any gaps. Missing access is raised now (D9).
- Set **jurisdiction(s)** and the provisional **"law stated as at"** date; document hierarchy rules in `bible/hierarchy_notes.md`.
- Draft `bible/style_guide.md` and seed `bible/glossary.md`.
- Record **current state**: existing papers, notes, chapters (nothing hidden).
- Propose a calendar working backward from the deadline, with a gate date per phase.

**Outputs.** `00_doctrine.md`, calendar, empty bible files and registers.

**Gate 0 (Light + human).** Do the rules match the institution's actual regulations? Is AI use permitted and documented? Is database access adequate for the planned scope? Does the supervisor accept the calendar?

---

### Phase 1: Intent and Research Questions (`01_intent.md`)

**Purpose.** Fix *what law* the thesis examines, *what it will argue* and *why it matters*.

**Agent work.**
- Problem statement: the legal uncertainty, inconsistency, gap or injustice, with evidence status per claim (verified, plausible, unknown).
- One **central thesis statement**, 3-5 **research questions** (RQs) and, where appropriate, working propositions.
- **Methodology statement**: doctrinal method, its sub-methods (analytical, historical, comparative, reform-oriented), why each is used, and its acknowledged limits (e.g. no empirical claims about how law operates in practice, unless a socio-legal element is expressly added).
- **Contribution** in three tiers: doctrinal (clarifying or systematising the law), theoretical (new framing), practical (reform, drafting guidance). Include an explicit "this thesis does NOT cover" list.
- Definition of Done: deliverable, outcome and early signals (e.g. publishable chapters, viva readiness).
- Risks, each with owner and deadline (access to sources, fast-moving law, supervisor availability, scope creep, a pending apex-court decision or statutory amendment).

**Outputs.** `01_intent.md`, first version of `bible/argument_map.md`.

**Gate 1 (Standard + human supervisor).** Is each RQ answerable by doctrinal method, original and bounded? Is the scope achievable at 300 pages? Is the contribution defensible against "this has already been written"? Is the risk from moving law (pending reforms and judgments) managed?

---

### Phase 2: Authority Base and Literature Map (`02_authority_base.md`)

**Purpose.** Build the verified foundation of primary and secondary sources on which every chapter will stand.

**Agent work.**
- **Search protocol**: databases, search strings, date ranges, inclusion/exclusion, date searched. Repeatable and recorded.
- **Primary-authority inventory** into `authorities_register.md`: constitutional provisions, statutes and their amendment history, delegated legislation, treaties and their ratification status, leading and subsequent cases, tribunal and regulator decisions. Each *opened and read* from an official or recognised source (D3, D4).
- **Citator/currency pass** on every case and statute (D5).
- **Secondary-literature inventory** in `references.bib` (treatises, commentaries, articles, law-commission and committee reports), each with a `verified:` flag and a note on the position taken, the school of thought and relevance to which RQ.
- **Thematic map and gap analysis**: where the authorities agree, conflict or are silent; where scholars disagree; where the law is unsettled; which gap this thesis fills.
- Seed `claims.md` for propositions the doctrinal chapters will rely on.

**Outputs.** `02_authority_base.md`, populated `authorities_register.md` and `references.bib` (for a 300-page thesis, typically 150-400 primary authorities and 150-300 secondary sources, scaled to the topic).

**Gate 2 (Standard + human).**
- **Authority audit**: at least 25% of register entries re-opened against the source by a different reviewer; any fabricated, mis-cited or wrongly described authority triggers a **100% re-audit**.
- Currency spot-check of at least 20% of authorities.
- Coverage: Are leading and most recent decisions present? Are minority or contrary authorities included? Is any comparator jurisdiction under-sourced?
- Does the gap analysis genuinely justify the RQs?

---

### Phase 3: Thesis Specification (`03_thesis_spec.md`)

**Purpose.** The blueprint. **The Spec Rule: no drafting before the human approves this.**

**Agent work.**
- **Argument architecture**: decompose the thesis statement into propositions; for each, state the authorities that support it, the counter-authorities that must be answered and the chapter that proves it (`argument_map.md` completed).
- **Chapter map**: a **Chapter Brief** (§5.2) per chapter: purpose, RQs served, section outline with budgets, required authorities (register IDs), required secondary sources, and **checkable acceptance criteria**.
- **Comparative design**: selection criteria for comparator jurisdictions (functional equivalence, legal family, relevance to the reform), and the *tertium comparationis*.
- **Reform design**: criteria for evaluating the law (e.g. constitutional coherence, certainty, access to justice, efficiency) that will be applied in Ch 7 and justify the proposals in Ch 8.
- Dependency graph between chapters; decisions needed with **defaults**; non-goals.

**Outputs.** `03_thesis_spec.md`, completed argument map, `page_budget.md`.

**Gate 3 (Full Loop C + supervisor).** The most important gate. Is any link broken in the chain *thesis -> RQ -> proposition -> authority -> chapter*? Does any chapter do two jobs or is any proposition unsupported? Are counter-authorities planned for, not avoided? Are comparative and reform criteria principled rather than convenient? Is the budget realistic?

---

### Phase 4: Doctrinal Analysis (`04_doctrinal_analysis.md`)

**Purpose.** Do the legal analysis *before* the prose that reports it. This replaces data collection in empirical research: here the "evidence" is the analysed set of authorities.

**Agent work.**
- **Rule extraction**: for each key statute provision, the elements, exceptions, defences, remedies and interpretive aids; for each leading case, a structured entry in `case_matrix.md`: facts, issue, holding (ratio), reasoning, obiter, dissents, bench strength, treatment by later courts (followed, distinguished, doubted, overruled).
- **Interpretive analysis**: literal, purposive, harmonious and constitutional readings; the court's canons of interpretation; legislative history where admissible.
- **Synthesis**: from the case law, derive the doctrine and its tests; trace its **chronological development** and identify turning points.
- **Conflict and gap mapping**: inconsistent decisions, per incuriam decisions, unresolved questions, statutory lacunae, tension between constitutional principles and statutory text.
- **Comparative analysis**: the same extraction applied to comparator jurisdictions, mapped against the *tertium comparationis*; legal transplants and their limits.
- **Evaluation** against the criteria fixed in Phase 3; draft reform propositions and test them against the strongest objections.
- Update `authorities_register.md` as new authorities appear; re-run the citator on everything before the gate.

**Outputs.** `04_doctrinal_analysis.md`, `case_matrix.md`, updated registers.

**Gate 4 (Full Loop C + human).**
- **Independent re-analysis**: a different agent (or the candidate) reads a sample of the judgments afresh and compares ratio, quotations and pinpoints with the matrix; mismatches are Critical.
- **Currency check** of every authority at the current "law stated as at" date.
- Are contrary and minority authorities treated honestly? Is ratio separated from obiter? Is hierarchy respected?
- Do the findings actually answer the RQs? If not, return to Phase 3 or 1.

---

### Phase 5: Chapter Drafting (`05_chapters/`)

**Purpose.** Convert the spec and the analysis into prose, in **three waves**, each with its own gate. Within a wave, chapters are drafted **one at a time** (D10).

- **Wave 5A: Foundations.** Ch 2 Conceptual/Theoretical Framework; Ch 3 Historical Background; Ch 4 Statutory/Treaty Framework. These set vocabulary and the legal baseline.
- **Wave 5B: Core doctrine.** Ch 5 Judicial Interpretation; Ch 6 Comparative Analysis. These are the most citation-dense and highest-risk chapters for fabricated or misread authority.
- **Wave 5C: Critique and framing.** Ch 7 Critical Analysis; Ch 8 Reform; then Ch 1 Introduction, Ch 9 Conclusion and the Abstract (last, so they describe the thesis as it turned out).

**The chapter loop (Loop B, per chapter).**

1. **Brief check.** Re-read the approved Chapter Brief, `glossary.md`, `style_guide.md`, the relevant `argument_map.md` part and the summaries (not full text) of finished chapters.
2. **Section-by-section drafting**, 1,500-3,000 words at a time, drawing every proposition of law from the register and case matrix, not from the model's memory (D2, D3).
3. **Pinpoint discipline.** Every footnoted authority carries a pinpoint; every quotation is checked character-by-character against the source.
4. **Claim and authority registration.** New authorities go to `authorities_register.md` *before* they are cited; propositions go to `claims.md`.
5. **Voice-of-law marking** (D8): each section clearly states or argues; mark *lex lata* vs *lex ferenda* in the Chapter Contract.
6. **Conformance check** against the brief's acceptance criteria.
7. **Chapter Contract** (§5.3); update `crossref_ledger.md`; declare known weaknesses at the top of the draft.
8. **Human rewrite pass**: the candidate rewrites into their own voice and corrects the substance; diff and AI share go to `ai_use_log.md` (D1).
9. **Per-chapter review** (§4.4) before the chapter counts toward the wave gate.

**Outputs.** `ch01_*.md` ... `ch09_*.md`, front-matter drafts, updated registers, cross-reference ledger and page budget.

**Gates 5A / 5B / 5C (Full Loop C + human, per wave).**
- 100% of authorities cited in the wave exist in the register with status *verified*; sampled pinpoints and quotations re-checked against sources (at least 25% in 5B).
- Statements of law are current as at the declared date.
- Acceptance criteria met; word and page counts within ±10%.
- Terminology matches the glossary; citation style matches the style guide.
- 5C only: does the introduction promise exactly what the conclusion delivers, and does Ch 8 follow from Ch 7's criteria?

---

### Phase 6: Integration (`06_integration.md`)

**Purpose.** Turn nine good chapters into one thesis. Most AI-assisted long documents fail here.

**Agent work.** Whole-thesis audits, each producing findings and fixes (run by thread, not by reading everything at once):
- **Argument-thread audit**: trace the thesis statement through every chapter; find gaps, repetition and contradiction.
- **Doctrinal-consistency audit**: the same case, section or test is described identically everywhere; no chapter states the law differently from another.
- **Currency re-audit**: re-run the citator across the complete register; any change in law since the Phase 4 gate is incorporated or the "as at" date is formally reset.
- **Authority completeness audit**: every cited authority is in the register and the tables; every register entry is cited or deliberately dropped; table of cases, legislation and treaties generated from the register.
- **Quotation and pinpoint audit**: a systematic sample (at least 20%) of all footnotes checked against sources.
- **Terminology audit**: one concept, one term (glossary).
- **Cross-reference audit**: every internal reference and numbering resolves.
- **RQ-closure audit**: each RQ in Ch 1 is answered in Ch 9 and rests on analysis in Ch 5-7.
- **Voice and redundancy audit**: a single authorial voice; no duplicated passages; no generic AI boilerplate.
- **Length audit** vs 300 pages and the institutional maximum.

**Outputs.** `06_integration.md`, integrated manuscript.

**Gate 6 (Full Loop C + human).** Zero open Critical findings; every Major finding resolved or accepted in `decisions.md`.

---

### Phase 7: Adversarial Review and Mock Viva (`07_adversarial_review.md`)

**Purpose.** Attack the thesis as examiners will, before they do.

**Agent work.**
- **Independent reviewer panel** (blind Round 1), each in a distinct role:
  1. *Black-letter accuracy examiner*: is the law stated correctly, completely and currently? Misread ratios? Missed authorities?
  2. *Authority verifier*: re-opens authorities and checks citations, pinpoints and quotations, with no sight of other reviewers.
  3. *Comparative law examiner*: soundness of comparator choice, functional equivalence, accuracy of foreign law.
  4. *Jurisprudential sceptic*: the strongest competing theory or reading of the same authorities.
  5. *Reform and practice critic*: workability, unintended consequences, drafting quality of proposals.
  6. *Integrity and style reviewer*: attribution, plagiarism risk, AI-use disclosure, citation style, language.
- **Cross-examination and convergence** per Loop C; consensus or recorded disagreement.
- **Mock viva**: an agent generates the 50-100 hardest questions by chapter and RQ ("Why this comparator?", "Which authority contradicts your thesis?", "What if the Supreme Court overrules X?"); the candidate answers *without AI help*; supervisors score.
- Similarity check on the whole manuscript.

**Outputs.** `07_adversarial_review.md`, issue ledger and Dissent Register, viva question bank with answer notes.

**Gate 7 (Full Loop C + supervisor + at least one independent human legal reader).** The human decides each issue: fix, rebut with authority, or accept as limitation. Passes when all Critical and Major issues have a recorded disposition and the supervisor confirms the thesis is examinable.

---

### Phase 8: Finalization and Submission (`08_submission/`)

**Purpose.** A compliant, polished, submittable package.

**Agent work.**
- Typesetting in the institutional template; contents, abbreviations, tables of cases, legislation and treaties; front matter (declaration, certificate, acknowledgements, abstract, keywords).
- Citation formatting pass against the style guide; hyperlinks and neutral-citation checks; **final "law stated as at" statement** inserted in the preface.
- Appendices assembled (draft model provisions, tables, translations with translator credit).
- **Last currency sweep** within days of submission; late changes in the law are either incorporated or noted in a short postscript.
- **Compliance pack**: checklist against regulations, similarity report, ethics note (e.g. anonymised or sensitive case material), AI-use disclosure, candidate and supervisor declarations.
- Freeze: tag the repository `thesis-vX.Y-submission`; PDF from a clean build with zero errors.

**Gate 8 (Standard + human; candidate and supervisor sign).** Cold read of the final PDF end to end by the candidate; compliance checklist 100% complete; `status: approved` set only by the human.

---

### Phase 9: Viva and Maintenance (`09_viva_and_revisions.md`)

**Purpose.** Loop D: close the loop with examiners and the evolving law.

**Agent work.**
- Viva preparation from the question bank; one-page chapter summaries; slides.
- Log examiner comments verbatim; triage each: *correct now*, *clarify in text*, *rebut with authority*, *future research*.
- Revision cycle: each correction is a small spec -> change -> verification -> log loop, with a change summary mapped to each comment.
- **Currency watch**: track new judgments, amendments and treaties affecting the thesis; update the register and flag impact.
- Derive journal articles and chapters for publication; each new proposition keeps its register trail.

**Gate 9 (Light + human).** Every examiner comment has a disposition; the corrected thesis is re-verified (citations, currency, cross-references, compile); the final version is approved by the human.

---

## 4. The Phase Gate Protocol

### 4.1 Gate levels

| Level | Reviewers | Used at | Rounds |
| :--- | :--- | :--- | :--- |
| **Light** | 1 AI reviewer + the human | Gates 0, 9 | 1 |
| **Standard** | 2 independent AI reviewers + the human | Gates 1, 2, 8; per-chapter reviews | 1 + cross-exam |
| **Full (Loop C)** | 3+ role-differentiated AI reviewers (blind Round 1), cross-examination, capped convergence + human supervisor | Gates 3, 4, 5A-5C, 6, 7 | Up to 3 |

### 4.2 The gate sequence (every gate, every phase)

1. **Freeze.** The producing agent stops, commits, and writes a **Phase Handover Note** (§5.4).
2. **Self-audit.** The producing agent runs the universal checklist (§4.3) and reports honestly (D14).
3. **Blind AI review (Round 1).** Reviewers receive only the artifacts, the spec and the checklist. Each writes `deliberation/<gate>_<reviewer>_r1.md`, classifying findings Critical / Major / Minor with location and evidence.
4. **Cross-examination (Round 2).** Reviewers read each other's findings, challenge or confirm, de-duplicate. Disputed points are **settled by reading the authority**, not by vote.
5. **Convergence (Round 3, capped).** Consensus or recorded dissent. A stagnation test (no new substantive finding in a round) ends the loop early.
6. **Human review.** The human reads the Verification Summary and Dissent Register, with a **mandatory spot-check**: at least 10% of cited authorities opened personally and at least one full section read cold. The human may overrule any consensus.
7. **Disposition.** Each issue is set to *fix*, *rebut* or *accept-as-limitation* with a reason in `decisions.md`.
8. **Remediation.** The producing agent fixes; a reviewer verifies each fix. Critical items re-open the gate until closed.
9. **Sign-off.** The human writes the `gate_log.md` entry: **PASS**, **PASS WITH CONDITIONS** (conditions and deadlines; no later gate may pass until cleared) or **FAIL (return to Phase N)**.

### 4.3 Universal pass criteria

A gate may pass only when **all** are true:

- [ ] Zero open Critical issues; every Major issue has a recorded disposition.
- [ ] Every authority cited in the phase output is in `authorities_register.md`, **opened from a recognised source**, with pinpoints, and checked for currency as at the declared date.
- [ ] No fabricated, unopened or mis-described authority remains (D3, D4); quotations are verbatim.
- [ ] Every proposition in the output is in `claims.md` with a source and status `verified` or disclosed as `unverified`.
- [ ] Statements of law are distinguished from argument about the law (D8); hierarchy and conflicts are handled (D6).
- [ ] Output matches the approved spec, or deviations are in `decisions.md`.
- [ ] `ai_use_log.md`, `bible/*` and `page_budget.md` are updated.
- [ ] Handover Note complete; repo committed and tagged `phase-N-gate-PASS`.
- [ ] A human signed `gate_log.md`.

### 4.4 Per-chapter review (inside Phase 5)

| Reviewer role | Checks |
| :--- | :--- |
| **Doctrinal accuracy reviewer** | Is the law stated correctly? Ratio vs obiter? Hierarchy respected? Counter-authority addressed? |
| **Authority verifier** | Sample of footnotes opened against sources: existence, pinpoint, verbatim quotation, currency |
| **Argument and style reviewer** | Does the chapter meet its brief? Is each section advancing the argument? Glossary, citation style, voice, cross-references |

The candidate then reads the chapter cold and rules on all open items.

### 4.5 Severity definitions

| Severity | Definition | Examples |
| :--- | :--- | :--- |
| **Critical** | Invalidates an argument, misstates the law or breaches integrity rules | Non-existent or misdescribed case; fabricated quotation; overruled case relied on as good law; plagiarism; undisclosed AI use |
| **Major** | Weakens the argument or coherence but is fixable | Missing leading authority; ratio confused with obiter; unaddressed contrary authority; inconsistent statements of the same rule; RQ not answered |
| **Minor** | Quality or polish | Citation format; awkward phrasing |

### 4.6 Backward moves

If a gate shows a flaw rooted in an earlier phase, the human sets **FAIL (return to Phase N)**. Examples:
- The analysis cannot support the thesis statement (Gate 4) -> Phase 3 or Phase 1.
- A chapter relies on unlocated authority (Gate 5A) -> Phase 2.
- A major new judgment changes the law (any gate) -> Phase 4 for the affected area, and reset the "as at" date.
- Mock viva shows the comparator choice is indefensible (Gate 7) -> Phase 3.

Log the reason in `decisions.md`, mark downstream outputs `stale`, re-run only affected gates. Never patch downstream text to hide an upstream problem.

### 4.7 Gate timing guidance

| Phase and gate | Share of calendar | Why |
| :--- | :--- | :--- |
| Gates 0-2 | 12% | Cheap to fix errors early; sourcing is slow in law |
| Gate 3 | 5% (do not shorten) | Highest leverage |
| Phase 4 + Gate 4 | 20% | The analysis is the thesis |
| Phase 5 + Gates 5A-5C | 33% | Bulk of the writing |
| Phase 6 + Gate 6 | 8% | Integration and currency |
| Phase 7 + Gate 7 | 10% | Includes fix time |
| Phase 8 + Gate 8 | 5% | Citation formatting always overruns |
| Buffer | 7% | Law changes during the project |

---

## 5. Templates

### 5.1 Claim register row (`claims.md`)

```markdown
| ID | Proposition (as in thesis) | Type | Authority / source (register ID or bib key, pinpoint) | Location | Status | Verified by / date |
| C-0142 | "The basic-structure doctrine limits Parliament's power to amend the Constitution." | law (lex lata) | A-0231, paras 292, 437 | Ch5 §5.2.1 | verified | human / 2026-10-02 |
```

Type: `law (lex lata)` · `law reform (lex ferenda)` · `history` · `theory` · `comparative` · `fact`. Status: `verified` · `unverified-disclosed` · `disputed` · `superseded-authority`.

### 5.2 Chapter Brief (Phase 3, approved by the human)

```markdown
# Chapter Brief: Ch N <title>
- Purpose (1 sentence):
- RQs served:
- Propositions proven here (IDs from argument_map):
- Page / word budget:
- Section outline (with word budget each):
- Required primary authorities (register IDs):
- Required secondary sources (bib keys):
- Counter-authorities and opposing views to be answered:
- Depends on (chapters that must be final first):
- Acceptance criteria (each checkable yes/no):
  1. ...
- Non-goals:
- Decisions needed (with defaults):
```

### 5.3 Chapter Contract (written with each draft)

```markdown
# Chapter Contract: Ch N
- Assumes from earlier chapters (rule/term/case, location):
- Promises to later chapters:
- Sections stating law (lex lata) vs arguing reform (lex ferenda):
- New defined terms (added to glossary: yes/no):
- New cross-references (added to ledger: yes/no):
- New authorities (all in register: yes/no):
- Known weaknesses (honest list):
- Unverified claims (IDs):
- Law stated as at: <date>
- Word / page count vs budget:
```

### 5.4 Phase Handover Note

```markdown
# Handover: Phase N -> Gate N
- Outputs produced (paths):
- Spec deviations (and why):
- Self-audit per checklist item (pass/fail):
- Authorities pending verification or currency check:
- Known weaknesses:
- Open questions (owner, deadline):
- Files a fresh agent must read first:
```

### 5.5 Reviewer report (`deliberation/<gate>_<reviewer>_r1.md`)

```markdown
# Review: Gate N, reviewer <role>, Round 1
| # | Severity | Location | Finding | Evidence (authority opened, pinpoint) | Suggested fix |
Overall judgement (ready / ready with conditions / not ready) and why:
What I could NOT verify (and why):
```

### 5.6 Gate log entry (`gate_log.md`)

```markdown
## Gate N: <phase name>, <date>
- Level: Light / Standard / Full
- Reviewers (agents and humans):
- Open Critical: 0 | Major dispositions: n/n | Dissents recorded: n
- Authorities re-opened by humans (count and % of register):
- Currency check date:
- Decision: PASS / PASS WITH CONDITIONS / FAIL (return to Phase N)
- Conditions and deadlines:
- Signed: <human name>, <date>
```

### 5.7 Decision log entry (`decisions.md`)

```markdown
- D-0031 | 2026-10-05 | Gate 5B | Issue #17 (Ch5: obiter treated as ratio in X v Y)
  Decision: fix | Reason: ... | Decided by: <human> | Backward move? no
```

### 5.8 AI-use log entry (`ai_use_log.md`)

```markdown
| Date | Phase / unit | Tool and model | Task given | Output used (path) | Human changes (summary) |
```

### 5.9 Case matrix row (`case_matrix.md`)

```markdown
| Case & citation | Court / bench | Facts (brief) | Issue | Holding (ratio) | Key reasoning | Obiter / dissent | Later treatment | Register ID |
```

---

## 6. Working Across a 300-Page Context

1. **Start-of-session routine** (every agent): read `00_doctrine.md`, `bible/style_guide.md`, `bible/glossary.md`, the latest `gate_log.md` entry and the current unit's brief. Nothing else is assumed.
2. **Registers, not recall.** Authorities, propositions and definitions live in files. Agents consult the register and the case matrix; they never rely on remembered case law.
3. **Summaries, not full texts.** Each finished chapter carries a one-page summary (propositions, terms, authorities). Later chapters read the summaries and open the full text only for cross-checks.
4. **Index by thread.** For integration, query by authority ID, term, RQ or claim ID.
5. **End-of-session routine**: update bible files and registers, log decisions, commit with a message like `phase-5B ch05 §5.3 draft - gate pending`.
6. **Parallelism rule.** Concurrent drafting only where the dependency graph allows it; each agent writes only its own chapter and *appends* to shared registers.

---

## 7. Roles

| Role | Who | Responsibilities |
| :--- | :--- | :--- |
| **Candidate (author)** | Human | Owns the thesis; rewrites in own voice; rules on every issue; sets `approved`; defends the work |
| **Supervisor(s)** | Human | Reviews Gates 1, 3, 4, 5, 7; accepts or overrules; confirms examinability |
| **Chair agent** | AI | Runs the gate protocol: round caps, stagnation test, Verification Summary, Dissent Register |
| **Research agent** | AI | Phase 2 and 4 authority location, case matrix, comparative extraction |
| **Authority-verification agent** | AI (separate from the drafter) | Opens sources, checks citations, pinpoints, quotations and currency |
| **Drafting agent** | AI | Phase 5 drafting under the Chapter Brief |
| **Reviewer agents** | AI (differentiated roles, ideally different models) | Blind review, cross-examination, fix verification |
| **Integration agent** | AI | Phase 6 audits and fixes |
| **Production agent** | AI | Phase 8 typesetting, tables of authorities, compliance pack |
| **Independent human reader** | Human legal scholar (not the supervisor) | Cold read at Gates 7 and 8 |

---

## 8. Lifecycle Rules Worth Repeating

1. One unit at a time. Stop at the gate.
2. No gate, no next phase. No spec, no drafting. No register entry, no citation.
3. Never state a case's holding without having read the judgment; never cite an authority you have not opened.
4. State the law as at a date; re-check currency at Gates 4, 6 and 8.
5. Agreement between agents is robustness evidence, never proof. The authorities settle the law.
6. Backward moves are legal and logged; hidden patching is not.
7. Only a human sets `status: approved`, and the human must be able to defend every page.
8. Disclose AI use and honour institutional policy.
9. If a database, report or translation is missing, **stop and report**: never reconstruct from memory.

---

## 9. Division of Labor: AI Agents vs. Human Experts

| Dimension | AI Agent Responsibility | Human Expert Responsibility |
| :--- | :--- | :--- |
| **Pacing & Speed** | Fast first drafts, outlines, case-matrix building, citation formatting, tables of authorities | Sets priorities, deadlines and gate dates |
| **Authorities & Synthesis** | Locating and extracting rules, comparing cases, mapping conflicts, tracking treatment and currency | Judges which authorities truly matter; weighs hierarchy, persuasive value and doctrinal significance; tacit knowledge of practice |
| **Argument & Voice** | Proposes structures, surfaces counter-arguments and alternative readings, drafts to the brief | Decides the thesis, owns the voice, makes normative judgments on what the law *should* be, defends at viva |
| **Review & Quality** | Independent blind review, cross-examination, citation and quotation verification | Final approval at every gate, overrules consensus when warranted, personal spot-check of authorities |
| **Process** | Chairs loops, applies round caps, maintains the Thesis Bible and registers | Approves the doctrine, sets stakes, decides what is at risk |
| **Integrity** | Flags unverified authorities, currency gaps, similarity | Final accountability for accuracy, ethics and disclosure |

---

## 10. Quick Reference: Phase and Gate Summary

| Phase | Output | Gate | Level | Core question the gate asks |
| :--- | :--- | :--- | :--- | :--- |
| 0 Doctrine | `00_doctrine.md` | G0 | Light | Do our rules, jurisdiction and access match the institution's? |
| 1 Intent | `01_intent.md` | G1 | Standard | Are the RQs original, bounded and answerable doctrinally? |
| 2 Authority Base | `02_authority_base.md` | G2 | Standard | Is every authority real, opened and current, and does the gap justify the RQs? |
| 3 Spec | `03_thesis_spec.md` | G3 | **Full** | Is the chain thesis -> RQ -> proposition -> authority -> chapter unbroken? |
| 4 Doctrinal Analysis | `04_doctrinal_analysis.md` | G4 | **Full** | Are ratios, quotations and treatment accurate, and do findings answer the RQs? |
| 5A Foundations | Ch 2, 3, 4 | G5A | **Full** | Do chapters meet briefs, with all authorities verified and current? |
| 5B Core doctrine | Ch 5, 6 | G5B | **Full** | Are the case-law and comparative chapters accurate to the sources? |
| 5C Critique & framing | Ch 7, 8, 1, 9, abstract | G5C | **Full** | Does the reform follow from the critique, and the introduction match the conclusion? |
| 6 Integration | `06_integration.md` | G6 | **Full** | Is it one thesis: consistent, current, cross-referenced and closed on every RQ? |
| 7 Adversarial | `07_adversarial_review.md` | G7 | **Full** | Would it survive examiners and the strongest counter-reading? |
| 8 Submission | `08_submission/` | G8 | Standard | Is it compliant, current as at the declared date and signed? |
| 9 Viva | `09_viva_and_revisions.md` | G9 | Light | Is every examiner comment resolved and re-verified? |
