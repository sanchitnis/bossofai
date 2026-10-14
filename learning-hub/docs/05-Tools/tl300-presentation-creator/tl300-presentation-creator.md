# AI-Powered Presentation Creator & Interactive Presentation Specification (IPS)

The Presentation Creator is part of the **Learning Hub**—a Human-AI collaborative platform for curriculum design and interactive learning. This tool compiles single-file Markdown presentations into modern, responsive, and highly interactive slideshow applications.

---

## 🚀 1. Architecture: Single-Source, Dual-View

This tool decouples educational content (Markdown) from the presentation layer (React + Vite). 

* **Source Location**: All source `.md` files and their local assets (e.g. `media/` folder) live under the sibling `CourseDesign` workspace folder (e.g. `../CourseDesign/physical-ai/`, `../CourseDesign/sample-presentation/`, `../CourseDesign/ai-drivers-license/`).
* **Static Output Location**: Running the compiler outputs the compiled slideshow assets directly to `static/presentations/<course-name>/` (copying the `index.html`, javascript bundles, and local `media` folder). This folder is served automatically by Docusaurus.

```text
/CourseDesign/<course-name>/ (Markdown Source in sibling workspace)
         ↓  [Runs: python tools/presentation-creator/convert.py]
/static/presentations/<course-name>/ (Compiled HTML slideshow + copied media assets in learning-hub)
```

---

## 🛠️ 2. Getting Started & Compilation

### Compilation Command
To compile a presentation, run `convert.py` from the root of `learning-hub` folder, passing the path to the source Markdown file in the sibling `CourseDesign` workspace folder:
```bash
python tools/presentation-creator/convert.py ../CourseDesign/<course-name>/<file-name>.md
```
*Example:*
```bash
python tools/presentation-creator/convert.py ../CourseDesign/sample-presentation/sample-presentation.md
```
This automatically compiles the presentation, bundles the React runtime via Vite, copies the build artifacts and any source `media/` files to `static/presentations/sample-presentation/`, and outputs `index.html`.

---

## 📖 3. Markdown Syntax & Presentation Specifications

Every presentation Markdown file contains a **global frontmatter block**, followed by **slides separated by `---` dividers**, and a **glossary dictionary block** at the end.

### A. Global Frontmatter
At the very top of the markdown file:
```markdown
---
specVersion: 1.0
title: "Introduction to AI-Era Education"
subtitle: "Strategic Roadmap"
author: "Dr. Sanjay Chitnis"
affiliation: "Boss of AI"
theme: "default"
date: "2025"
aspectRatio: "16:9"
description: "How AI transforms learning pipelines and pedagogy."
tags: [ai, pedagogy]
---
```

### B. Slide Structure & Layouts
Slides are separated using a horizontal rule (`---`) with inline YAML frontmatter defining slide-level configurations:
```markdown
---
slideId: slide-001
layout: content
purpose: explain
duration: 90
importance: critical
learningObjective:
  - Grasp presentation layout vocabulary
interactionLevel: high
---

## Slide Title

Slide body content goes here.
```
* **Supported Layouts**: `hero` (title slide), `title`, `section` (divider slide), `agenda`, `content`, `summary`, `thankyou`, `two-column`, `three-column`, `quote`, `timeline`, `roadmap`, `chart-insights`, `swot`, `pestle`.

---

## 🎨 4. H5P-Style Interactive Components

You can write simple Markdown directives (`:::component-name`) that compile into full-fledged interactive elements:

### 1. Accordion
```markdown
:::accordion
## Topic 1
Content here.
## Topic 2
More content here.
:::
```

### 2. Tabs
```markdown
:::tabs
=== Category A
Content for tab A.
=== Category B
Content for tab B.
:::
```

### 3. Flashcards
```markdown
:::flashcards
Q: What is OOP?
A: Object-Oriented Programming.
:::
```

### 4. Multiple Choice Questions (MCQ)
```markdown
:::mcq
question: Which is a primary color?
[x] Red
[ ] Green
[ ] Black
explanation: Red is a primary color.
:::
```

### 5. True / False Check
```markdown
:::truefalse
answer: true
The Earth revolves around the Sun.
explanation: Earth orbits the Sun every year.
:::
```

### 6. Fill in the Blanks
Use double-brackets around the correct answer inline:
```markdown
React was created by [[Facebook]].
```

### 7. Matching Activity
```markdown
:::matching
HTML => Structure
CSS => Styling
JavaScript => Behavior
:::
```

### 8. Sortable Sequence
```markdown
:::sequence
1. Requirements
2. Design
3. Development
4. Testing
:::
```

### 9. Interactive Timeline
```markdown
:::timeline
height: 320px
orientation: vertical

1995 | JavaScript Released
Created for Netscape.
2013 | React
Frontend UI library released.
:::
```

### 10. Image Hotspots
Select coordinates on a graphic to reveal tooltips:
```markdown
:::hotspots
image: media/architecture.png
(30,40)
Database
Stores application data.
:::
```

### 11. Before / After Image Comparison
Compare two images using a slider handle:
```markdown
:::compare
before: media/before.jpg
after: media/after.jpg
height: 280px
labelBefore: Old Campus
labelAfter: New Campus
sliderPosition: 50
:::
```

### 12. Quiz Group
Combine multiple MCQs and True/False questions:
```markdown
:::quiz
:::mcq
question: What is CSS?
[x] Stylesheet
[ ] Script
:::
:::truefalse
answer: false
HTML is a programming language.
:::
:::
```

### 13. Information Cards Grid
```markdown
:::cards
Card: Encapsulation
Protects internal state.
Card: Inheritance
Supports reuse.
:::
```

### 14. Interactive Book
Divide content into chapters in a single slide using the `---chapter---` divider:
```markdown
# Chapter 1: Introduction
Text...
---chapter---
# Chapter 2: Advanced Topics
Text...
```

---

## 🧪 5. Custom MDX React Widgets

Inject pre-registered React widgets into any slide:

* **ROI Calculator**: `<ROIWidget />`
* **Student Growth Predictor**: `<EnrollmentCalculator />`
* **AI Conversational Tutor**: `<AskAI />`
* **Outcome Competency Simulator**: `<SimulationEngine />`
* **Interactive Roadmap Timeline**: `<InteractiveTimeline />`
* **Reflection Assistant Chat**: `<AITutor />`
* **Dynamic Metric Cards**:
  ```mdx
  <Metric label="Active Learners" value="45,000" trend="+15%" />
  ```
* **Dynamic Line & Bar Charts**:
  ```mdx
  <Chart type="line" dataset="student-data" x="year" y="count" />
  ```

---

## 🧠 6. Semantic Elements, I18n, Glossary & Progress Tracking

The Presentation Creator contains four advanced pedagogical features designed to aid memory retention, language accessibility, vocabulary definition, and student tracking:

### 1. Explicit Semantic Visual Blocks
Tag slide content with explicit learning contexts to render them with colored highlight borders and specific memory helper icons:
* **Definition Block**:
  ```markdown
  :::definition Object-Oriented Programming (OOP)
  A programming paradigm based on the concept of "objects".
  :::
  ```
* **Mnemonic Block**:
  ```markdown
  :::mnemonic TRACK Framework
  **T**eaching, **R**esearch, **A**dministration, **C**onsulting, **K**aizen.
  :::
  ```
* **Analogy Block**:
  ```markdown
  :::analogy Polymorphism
  Polymorphism is like a single button on different devices—a power button turns on a phone, a TV, or a PC, but each performs the action differently.
  :::
  ```
* **Example Block**:
  ```markdown
  :::example Code Example
  `public class Main { ... }`
  :::
  ```

### 2. Multi-Language Support (I18n)
Provide English and Hindi translations directly in the same file. The student switches languages using a dropdown menu in the slideshow header.
* **Block-Level Languages**:
  ```markdown
  :::lang en
  This slide explains attention mechanisms.
  :::
  :::lang hi
  यह स्लाइड अटेंशन मैकेनिज्म को समझाती है।
  :::
  ```
* **Inline Translation Tokens**:
  ```markdown
  This is the [[en:Attention Weight]][[hi:अटेंशन वेट]] dashboard.
  ```

### 3. Glossary Double-Bracket Tooltips
Words enclosed in double brackets (`[[term]]` or `[[term|custom label]]`) automatically render as hoverable tooltips. The definitions are extracted from a glossary block placed at the bottom of the presentation markdown file:
```markdown
The model uses [[self-attention]] to weigh inputs. We implement [[polymorphism|many forms]] in Java.

:::glossary
[[self-attention]]: A mechanism mapping queries to key-value pairs to determine context.
[[polymorphism]]: The ability of a message or function to be displayed in more than one form.
:::
```

### 4. Local Student Progress Tracker
The slideshow player maintains learner state in browser `localStorage`.
* **Tracked State**: Starts date/time, completion date/time (set when the last slide is visited), visited slides list, and quiz scores.
* **Progress Panel**: Displays a completion bar (e.g. `Progress: 45%`) and dates inside the left navigation sidebar.
* **Certificate Export**: Allows students to download their locally saved progress logs as a signed JSON progress certificate which can be emailed or submitted to the instructor.

### 5. LaTeX Math & Mermaid Diagrams Support
Faculty can incorporate mathematical models and flowcharts directly into their slide decks:
* **LaTeX Equations**:
  - Use inline math by wrapping standard LaTeX code in single dollar signs: `$E = mc^2$`.
  - Use block equations by enclosing code in double dollar signs:
    ```markdown
    $$
    f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi)\,e^{2 \pi i \xi x}\,d\xi
    $$
    ```
* **Mermaid Flowcharts**:
  - Draw diagrams directly inside slides using standard Mermaid syntax enclosed in a fenced code block marked with `mermaid`:
    ````markdown
    ```mermaid
    graph TD
        A[Problem Definition] --> B[AI Prompt Formulation]
        B --> C[Verify Output Accuracy]
    ```
    ````
