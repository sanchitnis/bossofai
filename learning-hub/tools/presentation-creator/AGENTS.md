# Agent Instructions - Presentation Creator

This document provides context, instructions, and constraints for AI agents implementing or refining the Presentation Creator.

## Agent Role & Goal

You are tasked with maintaining and improving the conversion pipeline in `convert.py` and the React player in `renderer/src/App.jsx`. Your primary focus is translating hybrid markdown files (structured according to `input-template.md`) into dynamic slideshow web pages (designed similarly to the React player layout).

---

## Technical Constraints & Requirements

1. **Course Directory and Output Convention**:
   - Source files live in course/presentation-specific folders inside the sibling `CourseDesign` workspace directory (e.g., `../CourseDesign/sample-presentation`, `../CourseDesign/physical-ai`, `../CourseDesign/ai-drivers-license`).
   - The compiled output HTML and bundled assets must be output to the public static directory:
     `static/presentations/<course-name>/`
   - Local `media` folders in the source directory must be copied automatically to `static/presentations/<course-name>/media/`.

2. **Parser Features**:
   - Parse YAML front matter at the top of the file to extract metadata.
   - Support `---` as a slide separator.
   - Render H5P interactive elements (`:::accordion`, `:::tabs`, `:::flashcards`, `:::mcq`, `:::truefalse`, `:::matching`, `:::sequence`, `:::timeline`, `:::hotspots`, `:::compare`, `:::cards`).
   - Render explicit semantic visual blocks (`:::definition`, `:::mnemonic`, `:::analogy`, `:::example`).
   - Support block-level language tagging (`:::lang en`, `:::lang hi`) and inline translations (`[[en:text]][[hi:पाठ]]`).
   - Parse `:::glossary` dictionary lookup blocks at the bottom of the markdown files to compile `[[term]]` or `[[term|label]]` instances into hoverable CSS tooltips.
   - Track learning states (`startedAt`, `completedAt`, `visitedSlides`) in browser `localStorage`.
