# How to Create Content in the Learning Hub

This guide explains how educators and content developers can write documentation, course materials, and interactive slide presentations for the Boss of AI Learning Hub.

---

## 1. Creating Standard Course Material

Standard course pages are written in **MDX** (Markdown with React support). Place these files under the appropriate folder in the `docs/` directory (e.g., `docs/csu101-intro-ai/`).

### Basic Markdown Rules:
*   Use headings logically (`#` for page title, `##` for main sections, `###` for sub-sections).
*   Add frontmatter metadata at the very top of the file:
    ```markdown
    ---
    sidebar_position: 2
    ---
    ```

---

## 2. Creating Interactive Slideshows (Path 3)

With our **Single Source, Dual View** architecture, you can write a document that serves as both a readable textbook page and a presentation slide deck.

### Step 1: Add Frontmatter Metadata
To tell the system this file is a presentation, include the `is_presentation: true` property in the YAML frontmatter:
```markdown
---
title: "Introduction to AI-Era Education"
author: "Dr. Sanjay Chitnis"
is_presentation: true
---
```

### Step 2: Use Slide Separators
Split your content into slides using a horizontal rule (`---`) on a line by itself, surrounded by blank lines:
```markdown
# Slide 1: Welcome

This is the content for the first slide.

---

## Slide 2: Core Pillars

* Pillar 1
* Pillar 2
```

### Step 3: Embed Interactive Widgets
You can place interactive widgets directly in your slides or documents without importing them. Here are the available components:

#### A. Metric Display
Showcases high-impact numbers and trend percentages.
```mdx
<Metric label="Active Learners" value="45,000" trend="+15%" />
```

#### B. Skill Achievement Simulator
Lets learners interact with training sliders to estimate NAAC/NBA outcome competency.
```mdx
<SimulationEngine />
```

#### C. Enrollment Growth Predictor
Renders a dynamic line chart showing projected growth statistics.
```mdx
<EnrollmentCalculator />
```

#### D. Ask AI Tutor
Provides an interactive text input where students can prompt a mock reflection tutor.
```mdx
<AskAI />
```

#### E. Reflective AI Tutor Chat
Engages the learner in a reflective dialogue about course outcomes.
```mdx
<AITutor />
```

#### F. Custom Chart
Visualizes internal datasets. Supported types: `bar` or `line`.
```mdx
<Chart type="bar" dataset="student-data" x="year" y="count" />
```

#### G. Interactive Roadmap Timeline
Shows curriculum stages dynamically.
```mdx
<InteractiveTimeline />
```

---

## 3. Reviewing and Testing Locally

1.  Start the development server:
    ```bash
    npm run start
    ```
2.  Open the website in your browser (defaults to `http://localhost:3000`).
3.  Navigate to your page.
4.  If the file has `is_presentation: true`, you will see a **"🖥️ Open Slideshow"** button at the top-right. Click it to preview the slide deck!
