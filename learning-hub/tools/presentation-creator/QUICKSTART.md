# Quick Start - Presentation Creator

This quick start guide explains how to run, test, and verify the presentation creator tool locally.

## Prerequisites

Ensure you have Python installed, along with the required dependencies:

```bash
pip install -r tools/presentation-creator/requirements.txt
```
*(Dependencies: `pyyaml`, `markdown2`)*

Ensure Node.js is installed to support the React renderer build environment.

---

## Local Conversion Workflow

Every presentation has its own folder containing a source markdown input file (located in the sibling `CourseDesign` workspace folder). The `convert.py` script parses this file, compiles the React payload, triggers the Vite builder, and writes the output HTML structure to the public `static/presentations/` directory.

### 1. Run the Conversion

To convert a specific course's markdown presentation, run the compiler from the root of the `learning-hub` repository:
```bash
python tools/presentation-creator/convert.py ../CourseDesign/<course-name>/<filename>.md
```

*Example compiling the sample presentation:*
```bash
python tools/presentation-creator/convert.py ../CourseDesign/sample-presentation/sample-presentation.md
```

### 2. View the Output

The compiled HTML files and assets are written directly to Docusaurus's static folder:
```text
static/presentations/<course-name>/index.html
```

You can view them locally by running the main Docusaurus site server:
```bash
npm run start
```
And navigate to:
`http://localhost:3000/presentations/<course-name>/index.html` (e.g. `http://localhost:3000/presentations/sample-presentation/`)

---

## Supported Features in Input Markdown
Refer to [input-template.md](./input-template.md) for full details on formatting specifications, including:
- YAML Front Matter fields (`title`, `author`, `affiliation`, etc.)
- Slide delimiters (`---` with surrounding blank lines)
- Interactive H5P components (`:::accordion`, `:::tabs`, `:::mcq`, `:::truefalse`, `:::matching`, `:::sequence`, `:::timeline`, `:::hotspots`, `:::compare`, `:::cards`)
- Semantic visual blocks (`:::definition`, `:::mnemonic`, `:::analogy`, `:::example`)
- Multi-language toggles (`:::lang en` / `:::lang hi`)
- Glossary double-brackets tooltips (`[[term]]` lookup blocks)
