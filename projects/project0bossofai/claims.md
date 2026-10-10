---
project: project0bossofai
artifact: claims
---

# Claims Register: Project 0

Statuses: verified / unverified / assumption / disputed / removed.

| ID | Claim (as written) | Where used | Source | Status | Checked by / date | Note |
|---|---|---|---|---|---|---|
| C-001 | Current AI-readiness efforts focus on tools and technical skills more than judgment, ethics and collaboration | intent §1a | none yet | unverified | | Needs a cited survey or removal |
| C-002 | AI capability and access have grown faster than institutions can absorb them | intent §2 | none yet | unverified | | Needs a source |
| C-003 | Comparable offerings exist (government, platform, vendor, university, community) | intent §2 | none yet | unverified | | Spec section 2 requires a sourced benchmark |
| C-004 | The repo records no legal entity, no named independent experts or partners, and no cost plan | intent §1b | `data/mentors.json`, repo search | verified (by reading the repo) | agent, 2026-10-09 | Re-check before publishing |
| C-005 | The site states 10X is a target, not a result | intent K8 | `web/src/pages/Roles.tsx` lines ~95, 125 | verified (read) | agent, 2026-10-09 | Wording was added in the AI-agent role page |
| C-006 | The join form collects sign-ups without an age check or recorded consent; no retention rule is documented | intent K5 | `web/src/pages/Join.tsx`, `supabase/schema.sql` | verified for Join.tsx (no age or consent field found by search); schema not re-read | agent, 2026-10-09 | Safety page (`Info.tsx` ~241) promises separate review for child programmes |
