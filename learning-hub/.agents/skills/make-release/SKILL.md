---
name: make-release
description: Syncs and updates the README.md, AGENTS.md, MANIFEST.md, QUICKSTART.md, input-template.md, and tl300-presentation-creator.md files with all current feature specifications.
---

# Make Release Skill

This skill is invoked to synchronize and update the main documentation and training materials for the `tools/presentation-creator` tool. It ensures that the Docusaurus user guides, developer specifications, quickstarts, and agent instructions remain completely in sync with the parsing and rendering capabilities implemented in `convert.py` and the React player.

## Sync Instructions

When this skill is invoked, update the following files to ensure consistency:

1. **`tools/presentation-creator/input-template.md`**:
   - Must document all YAML frontmatter variables.
   - Must show correct examples of all H5P-style directives (`:::accordion`, `:::tabs`, `:::flashcards`, `:::mcq`, `:::truefalse`, `[[blank]]`, `:::matching`, `:::sequence`, `:::timeline`, `:::hotspots`, `:::compare`, `:::cards`).
   - Must document the new semantic elements (`:::definition`, `:::mnemonic`, `:::analogy`, `:::example`).
   - Must document the multi-language directives (`:::lang en`, `:::lang hi`) and inline locales (`[[en:text]][[hi:पाठ]]`).
   - Must document the `:::glossary` dictionary lookup block structure.

2. **`docs/05-Tools/tl300-presentation-creator/tl300-presentation-creator.md`**:
   - Serves as the primary user-facing training guide for educators and faculty.
   - Explain the "Single-Source, Dual-View" Docusaurus & standalone compiler architecture.
   - Provide copy-pasteable markdown snippets of all elements from `input-template.md` with explanations of their visual styling and behaviour (e.g. how local storage tracks started/completed dates, language selectors, and glossary hover tooltips).

3. **`tools/presentation-creator/QUICKSTART.md`**:
   - Provide up-to-date CLI usage guides for `convert.py` showing the source and static destinations:
     `python tools/presentation-creator/convert.py ../CourseDesign/<course-name>/<file>.md`
   - Document prerequisites and manual verification steps.

4: **`tools/presentation-creator/README.md`** & **`tools/presentation-creator/MANIFEST.md`**:
   - Sync file listings, folder locations, and describe the current course-based directory layout in `CourseDesign` workspace (e.g. `sample-presentation/`, `physical-ai/`, `ai-drivers-license/`).

5. **`tools/presentation-creator/AGENTS.md`**:
   - Document conventions for AI agents writing slides content to guarantee full compatibility.

6. **Docusaurus Presentation Route Links**:
   - If any course folder is added, renamed, or deleted, scan and update all hardcoded presentation links (e.g., `pathname:///presentations/<course-name>/`) in `src/pages/index.js` and `docs/intro.md` to prevent broken links, ensuring spaces are properly URL-encoded (e.g. `%20`).
