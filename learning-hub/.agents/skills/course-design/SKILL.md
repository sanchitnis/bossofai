---
name: course-outline-writer
description: Generates a full course outline including AI-augmented Course Outcomes (COs), unit breakdown, certification linkages, portfolio expectations, and Srujana stage indicators based on the course descriptor template.
---

# `course-outline-writer` Skill

## Overview
This skill is used by the `course-designer` agent to draft an AI-augmented course outline. It ensures that the generated curriculum aligns with the the institutional vision, incorporating modern pedagogical structures, portfolio-first deliverables, and specific linkages to the Srujana progression pathway.

## Process

When invoked, this skill follows these steps:

1. **Context & Needs Integration:**
   - Analyze the target audience and course prerequisites.
   - Integrate industry-driven competencies into the subject matter.

2. **AI-Augmented Course Outcomes (COs):**
   - Formulate COs ensuring higher-order thinking (Bloom's taxonomy).
   - Embed the assumption that students will be working *alongside* AI tools (i.e., assessing judgment, synthesis, and ethical reasoning rather than rote tasks).

3. **Unit / Module Breakdown:**
   - Sequence modules progressively.
   - Allocate teaching hours (duration) and define specific learning outcomes for each unit.
   - Outline key concepts and assessment alignments (Internal Assessments, Labs, End Semester).

4. **Srujana Pathway Integration:**
   - Identify the appropriate Srujana stage (Foundation, Application, Creation, Enterprise) for each unit.
   - Map explicit evidence types (e.g., solved problems, lab submissions, open-source contributions) that feed into the student's portfolio.

## Expected Output Format

The output **MUST** strictly adhere to the `course-descriptor.md` template located in `.academic-agent/templates/`. 

Your generated output should include the following sections exactly:

1. **YAML Frontmatter**: Including course code, name, stream, semester, credits, instructor, language, wiki level, notebooklm sources, textbooks, and references.
2. **Course Overview**: 3-5 sentences describing what the course is, why it matters, and what the student can do after completing it.
3. **Unit Breakdown**: For each unit, provide:
   - Duration (Weeks and lectures)
   - Learning outcomes (1-4 points)
   - Key concepts (as checklist items)
   - Assessment alignment
4. **Assessment Blueprint**: A markdown table showing Component, Weight, and Coverage. Include a note on Lab problems/portfolio evidence.
5. **Srujana Evidence Mapping**: A markdown table mapping Units to Srujana Stages and Evidence types.
6. **Faculty Notes Area**: Placeholder for faculty tips and common misconceptions.
