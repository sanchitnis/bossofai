# Boss of AI — Agentic Academic Platform

> A Human-AI Collaborative System for AI-Era Curriculum Development, Portfolio-First Learning, Enterprising Student Formation, Srujana Pathway, Personalised Tutoring, Stakeholder Governance, and Institutional Excellence.

Welcome to the **Boss of AI Learning Hub**. This platform is a collaborative intelligence environment where human judgment, institutional wisdom, faculty expertise, industry insight, and student agency are the primary authors — and AI acts as the accelerator, quality mirror, and tireless first-draft partner.

## For AGENTS:
Currently focusing only on tools\presentation-creator. Refer to files in that folder only. Others are for future. This project is under construction.



## 🧠 Foundational Design Philosophy

1. **Human-AI Collaboration:** The platform is a scaffold for better human decisions, not a replacement for them. No curriculum decision, course approval, or assessment goes forward on AI output alone.
2. **The Enterprising Student:** The central output is a graduate who sees problems as opportunities, initiates action, collaborates, reasons ethically, adapts to change, and creates value.
3. **PEO Ambition in the AI Era:** Program Educational Objectives reflect raised ambition. Students are assessed on judgment, synthesis, creative application, and ethical reasoning, not on tasks that AI can do faster.

## 📁 Repository Structure

The core agentic infrastructure is housed in `.academic-agent/`, which includes:
- **`agents/`**: Specialist AI collaboration partners.
- **`skills/`**: Domain-specific knowledge modules loaded on demand (ADDIE, OBE-NBA, Pedagogy, etc.).
- **`workflows/`**: Human-AI collaborative procedures.
- **`validators/`**: Quality-gate scripts for compliance and integrity.

Additional platform components:
- **`.kiro/specs/`**: Feature specifications using requirements → design → tasks methodology
- **`docs/`**: Docusaurus-based documentation, guides, and course content
- **`examples/`**: Sample presentations, projects, and learning objects
- **`specification/`**: Platform architecture and design documents

*(For detailed agent definitions, see [AGENTS.md](./AGENTS.md). For complete architecture details, see `specification/architecture.md`)*

## 🎯 Core Platform Tools

### AI-Powered Presentation Creator

The **Presentation Creator** converts markdown-based course contents into modern, interactive React/Vite-based single-page presentations. 

**Key Features:**
* **Hybrid Markdown Parsing**: Renders standard Markdown along with interactive components (quizzes, H5P-style tabs/accordions/flashcards, and QR codes).
* **Flexible Compilation**: Outputs static web pages and assets that can be served independently or integrated directly into Docusaurus.
* **Portfolio-First**: Every slide deck compiled serves as a deployable and shareable portfolio artifact.
* **Phase 1 Static-Ready**: Interactive quizzes, H5P components, and navigations run entirely client-side, making them fully compatible with GitHub Pages hosting.

---

## 🛠️ Developer Setup & Integration

This project is organized as a unified monorepo where the main documentation portal is powered by Docusaurus, and presentations are integrated as static sub-pages.

### 1. Main Portal (Docusaurus) Setup

**Prerequisites:** Node.js ≥ 20 and npm.

1. **Install Root Dependencies:**
   ```bash
   npm install
   ```

2. **Run Local Dev Server:**
   ```bash
   npm start
   ```
   This starts the main portal preview at `http://localhost:3000/`.

3. **Build Main Portal:**
   ```bash
   npm run build
   ```
   Generates the optimized static distribution inside the `build/` directory.

---

### 2. Presentation Creator Setup & Output Reorganization

The presentation compiler has been restructured to output files directly into the Docusaurus asset pipeline.

1. **Install Python Prerequisites:**
   ```bash
   pip install -r tools/presentation-creator/requirements.txt
   ```

2. **Install Vite Renderer Dependencies:**
   ```bash
   cd tools/presentation-creator/renderer
   npm install
   cd ../../..
   ```

3. **Compile Presentations Directly to Docusaurus Static Folder:**
   To make a presentation publishable as part of the portal, compile it directly to the Docusaurus `static/presentations/` directory by providing it as the second command-line argument:
   ```bash
   # Usage: python tools/presentation-creator/convert.py <markdown-file> <output-directory>
   
   python tools/presentation-creator/convert.py tools/presentation-creator/project1/sample-presentation.md static/presentations/sample-presentation
   ```
   This will compile the presentation and output:
   * `static/presentations/sample-presentation/index.html`
   * `static/presentations/sample-presentation/assets/`

4. **Integration with Docusaurus Doc Pages:**
   Since Docusaurus publishes all files inside `static/` directly at the root, your presentation will be hosted at `/presentations/sample-presentation/`. You can link or embed it inside any Docusaurus Markdown document:
   
   * **Direct Link**:
     ```markdown
     [View Presentation](/presentations/sample-presentation/)
     ```
   
   * **Embedded Iframe**:
     ```html
     <iframe src="/presentations/sample-presentation/" width="100%" height="600px" style={{ border: 'none', borderRadius: '8px' }} allowFullScreen />
     ```

---

## 🚀 Deployment (GitHub Pages)

The main portal and all integrated presentations are deployed to **https://sanchitnis.github.io/learning-hub/** via GitHub Actions on every push to `main`.

### Automatic Deployment (CI/CD)

The workflow in `.github/workflows/deploy.yml`:
1. Triggers on push to `main` (ignoring changes to `legacy-portfolio/`, `.academic-agent/`, and `README.md`).
2. Builds the Docusaurus site with `npm run build` (which automatically bundle and copy all compiled presentations in `static/` to the build output).
3. Pushes the `build/` directory to the `gh-pages` branch.

**GitHub Pages Configuration:**
1. Go to **Settings → Pages** in the repository.
2. Under **Source**, select **Deploy from a branch**.
3. Select the **`gh-pages`** branch and **`/ (root)`** folder, then Save.

### Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| 404 on the site URL | `gh-pages` branch not yet created or Pages not configured | Run the CI workflow or `npm run deploy` once, then configure Pages in Settings |
| Build fails with "Minimum Node.js version not met" | Node.js version < 20 | Upgrade to Node.js ≥ 20 |
| Broken links error during build | A doc references a missing file or page | Fix or remove the broken link (see `onBrokenLinks: 'throw'` in `docusaurus.config.js`) |
