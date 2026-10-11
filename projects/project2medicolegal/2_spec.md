---
project: project2medicolegal
stage: 2-design
artifact: spec
owner: Sanjay & Dr. Santosh Kakade
locked_date: ~
status: awaiting-human-approval
tags: [medaegis, medicolegal, cybersecurity, spec, stage-2, platform-architecture]
---

# Specification: MedAegis 360 — AI-Native Healthcare Medicolegal, Consent & Cyber-Resilience Platform

> **Status**: Draft Specification (Stage 2: Design) — Awaiting expert review, critique, and formal lock by Sanjay and Dr. Santosh Kakade before Stage 3 drafting begins.
>
> **Gate Requirement**: Proceeding strictly under **Mode 1 (Sequential Human-Gated)**. No prose drafting in `3_draft.md` until this spec outline, scope boundaries, and open architectural questions are signed off.

---

## 1. Document Architecture & Outline for Stage 3 (`3_draft.md`)

The Stage 3 deliverable shall be a comprehensive **Platform Masterplan & Venture Technical Specification Document** organized into 9 chapters:

### Chapter 1: Executive Thesis & Market Opportunity
- *Key question answered*: Why now, and why is this problem fatal to hospitals that fail to solve it?
- The clinical-legal-cyber triad and the cost of reactive posture.
- Macro catalysts: Bharatiya Sakshya Adhiniyam (BSA) 2023, Digital Personal Data Protection Act (DPDPA) 2023, National Medical Commission (NMC) RMP Regulations, CERT-In 6-hour cybersecurity mandate.
- Addressable market (TAM, SAM, SOM) across Indian corporate hospitals, mid-sized nursing homes, and international cross-over potential (GCC/SE Asia/US HIPAA).

### Chapter 2: High-Level Platform Architecture & Interoperability
- *Key question answered*: How does MedAegis 360 deploy without disrupting existing clinical workflows or replacing hospital EHRs?
- System topology: Cloud-native control plane with local hospital gateway (Edge agent for PACS/EHR isolation).
- Data pipeline: Interoperability layer connecting via HL7/FHIR, Ayushman Bharat Digital Mission (ABDM) M1/M2/M3 APIs, and legacy database connectors.
- Forensic Security Fabric: Cryptographic timestamping, SHA-256 hash chains, and immutable audit logs.

### Chapter 3: Pillar 1 Specification — InformedDefend (Digital Informed Consent Engine)
- *Key question answered*: How does the platform eliminate the #1 vulnerability in medical negligence court disputes?
- Procedural consent taxonomy: Pre-built, specialty-specific modules (Obstetrics, Orthopedics, General Surgery, Cardiology, Anesthesia).
- Patient workflow: Multilingual interactive video explanation -> Structured comprehension check -> Question-and-answer log.
- Verification & Execution: OTP / Aadhaar e-Sign / Biometric capture -> Cryptographic hash sealing.
- Evidentiary output: Instant auto-generated **Section 61/63 BSA Admissibility Certificate** containing system audit logs, timestamps, and device certificates ready for court submission.

### Chapter 4: Pillar 2 Specification — DoctorShield (Point-of-Care Medicolegal & Prescription Guard)
- *Key question answered*: How do we protect practicing doctors from inadvertent documentation omissions without adding administrative burden?
- Point-of-care workflow: Ambient scribe / EMR integration auditing in real time.
- Clinical-legal guardrails:
  - Off-label drug warning with prompt for clinical justification note.
  - High-risk drug-drug interaction & allergy flag with affirmative override logging.
  - Surgical safety checklist (WHO guidelines) verification prior to incision lock.
- NMC Code of Medical Ethics alignment (telemedicine records, generic drug notations).

### Chapter 5: Pillar 3 Specification — MedCyberVault (Healthcare Ransomware & Forensics Shield)
- *Key question answered*: How does a hospital survive a ransomware assault without endangering ICU patients or breaching the CERT-In 6-hour window?
- Healthcare-specific incident containment playbooks: Network isolation policies that keep life-critical IoMT networks functioning while walling off infected EMR/billing subnets.
- Tamper-proof PHI audit trail: Tracking every viewing, export, or edit of patient health information to detect insider leaks.
- Automated Regulatory Compliance Generator:
  - CERT-In 6-hour Incident Notice generator (pre-formatted with technical indicators).
  - DPDPA Data Protection Board breach disclosure dossier.

### Chapter 6: Pillar 4 Specification — CaseIntel (Medicolegal Intelligence & Dispute Early Warning)
- *Key question answered*: How can hospital leadership defuse grievances before they turn into consumer court notices?
- Early dispute sentinel: Natural language analysis of nursing handoffs and discharge disputes to flag litigious risk.
- Legal defense preparation engine: Automated chronological medical chart synthesis, standard-of-care protocol matching, and expert witness brief preparation.

### Chapter 7: Regulatory Admissibility & Compliance Matrix
- *Key question answered*: How does each feature map directly to statutory legal protections?
- Clause-by-clause mapping to:
  - Bharatiya Sakshya Adhiniyam, 2023 (Sections 61, 62, 63).
  - Digital Personal Data Protection Act, 2023 (Sections 7, 8, 9).
  - CERT-In Directions under Section 70B (IT Act 2000).
  - NABH Digital Health Standards (2nd Edition).
  - NMC Registered Medical Practitioner Regulations, 2023.

### Chapter 8: Commercial Strategy, Unit Economics & GTM
- *Key question answered*: How does MedAegis 360 build a venture-scale, profitable SaaS business?
- Target customer tiers:
  - *Tier 1 (Nursing Homes & Day-care Centers 15–50 beds)*: Out-of-the-box cloud SaaS.
  - *Tier 2 (Mid-size & Tertiary Hospitals 50–300 beds)*: Hybrid deployment with EMR integration.
  - *Tier 3 (Large Hospital Networks 300+ beds)*: Enterprise enterprise license with dedicated SOC/forensics connector.
- Value-based pricing: Pricing tied to bed count and procedural volume; ROI demonstrated through reduced malpractice insurance premiums and avoided regulatory fines.
- Strategic distribution: Partnerships with Professional Indemnity Insurers, Medical Associations (IMA, FOGSI, ASI), and hospital accreditation consultants.

### Chapter 9: MVP Roadmap & Stage-Gate Implementation Plan
- *Key question answered*: What is the precise chronological build sequence?
- **Gate 1 (MVP Phase 1 — Months 1–4)**: InformedDefend (Core Consent Engine + BSA Evidence Certificate) piloted in 2 surgical departments.
- **Gate 2 (MVP Phase 2 — Months 5–8)**: MedCyberVault (DPDPA Audit Trail + CERT-In Reporter) deployed in pilot hospital.
- **Gate 3 (Full Platform — Months 9–14)**: DoctorShield & CaseIntel integrated into comprehensive suite.

---

## 2. Voice, Tone & Reading Level

- **Tone**: Clinically authoritative, forensically unassailable, enterprise SaaS grade, and legally grounded.
- **Reading Level**: Hospital Directors, Medical Superintendents, Chief Medical Officers (CMOs), Chief Information Security Officers (CISOs), Health-Tech Investors, and Senior Legal Counsel.
- **Target Deliverable Length**: 25–35 pages for the full Stage 3 Masterplan.
- **Document Scaffolding**: Each chapter will open with a concise *Executive Takeaway* and *Regulatory Reference Box*.

---

## 3. Explicit Non-Goals

1. **Not an EHR/HIS Replacement**: MedAegis 360 does NOT attempt to replace existing hospital management software (TrakCare, Epic, Cerner, Practo, KareXpert). It operates as a pluggable medicolegal & cyber defense overlay.
2. **Not an Automated Diagnostic Tool**: The platform does NOT recommend diagnoses or initiate treatments; it provides procedural, documentation, and compliance guardrails.
3. **Not a Law Firm / Legal Practice**: The platform does NOT provide legal advice or legal representation; it equips hospitals with automated evidentiary proof, statutory compliance workflows, and digital defense tools.
4. **No Proprietary Data Lock-In**: All patient health data must remain strictly compliant with ABDM standards (FHIR profiles) to enable seamless patient portability.

---

## 4. Open Architectural Questions Before Locking

We seek feedback from **Dr. Santosh Kakade** and **Sanjay** on these 5 key questions:

1. **Initial Beachhead Pillar**:
   - Should Phase 1 go to market with **InformedDefend** (high acute pain for surgeons, easy adoption, clear ROI on negligence prevention), OR **MedCyberVault / DPDPA Compliance** (driven by hospital C-suite panic over ₹250 Cr penalties)?
2. **Deployment Topology**:
   - For mid-sized Indian hospitals, will a pure Multi-Tenant Cloud SaaS be accepted, or is a Hybrid model (local edge appliance for patient identity/records + cloud intelligence) mandatory due to data privacy hesitation?
3. **Primary High-Risk Specialty for Pilot**:
   - In Dr. Kakade's experience, which specialty is most eager to pay immediately:
     - Obstetrics & Gynecology (highest malpractice claim payouts)?
     - Orthopedics & Spine Surgery (frequent disputes over implant consent and post-op outcomes)?
     - Intensive Care / Critical Care (high mortality, acute family distress, cyber/IoMT vulnerability)?
4. **Aadhaar e-Sign vs. Biometric vs. OTP Verification**:
   - For patient consent under BSA 2023, what is the most frictionless authentication mechanism that holds up 100% in a contested court cross-examination?
5. **Insurer Partnership Mechanics**:
   - Would medical indemnity insurance providers offer discounted premiums to hospitals using MedAegis 360, similar to cyber insurance discounts for MFA/EDR adoption?
