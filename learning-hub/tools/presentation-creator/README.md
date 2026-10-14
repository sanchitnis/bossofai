# Presentation Creator

A self-contained tool to convert hybrid markdown presentations into interactive, single-page HTML slides.

---

## File Structure

```text
tools/presentation-creator/
├── README.md               # Tool overview
├── QUICKSTART.md           # Instructions to test and run the tool
├── AGENTS.md               # Guidelines & prompt rules for AI agents
├── MANIFEST.md             # List of files, templates, and specs
├── MANIFEST                # Plain-text listing of the workspace files
├── convert.py              # Main Python conversion script
├── template-default.html   # HTML presentation fallback template
├── input-template.md       # Format specification for the hybrid markdown
└── renderer/               # Vite React project template used by convert.py
    ├── src/App.jsx
    ├── src/index.css
    └── src/presentation-data.json

Note: The presentation/syllabus source files are located in the sibling `CourseDesign` workspace folder:
CourseDesign/
├── sample-presentation/    # Sample presentation inputs & media
│   ├── sample-presentation.md
│   └── media/
├── physical-ai/            # Physical AI presentation source
│   └── physical-ai.md
└── ai-drivers-license/     # AI Driver's License & syllabus source
    ├── ai-drivers-license.md
    ├── syllabus-ai-drivers-license.md
    └── media/
```

## Running / Testing Locally

To convert a markdown presentation into static assets inside `static/presentations/`:
```bash
python tools/presentation-creator/convert.py ../CourseDesign/<course-name>/<filename>.md
```

For detailed steps, refer to [QUICKSTART.md](./QUICKSTART.md) and the comprehensive user guide [tl300-presentation-creator.md](../../docs/05-Tools/tl300-presentation-creator/tl300-presentation-creator.md).
