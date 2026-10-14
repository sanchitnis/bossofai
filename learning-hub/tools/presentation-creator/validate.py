#!/usr/bin/env python3
"""
Interactive Presentation Specification (IPS) Validator
Strictly checks presentation markdown slide decks (-slides.md) against IPS rules.
"""

import sys
import re
import yaml
from pathlib import Path

REQUIRED_FRONTMATTER_KEYS = {"title", "author", "affiliation", "date"}
VALID_LAYOUTS = {
    "hero", "concept", "content", "two-column", "three-column", 
    "swot", "process", "comparison", "timeline", "section", "thankyou", "summary", "quiz"
}
KNOWN_H5P_DIRECTIVES = {
    "timeline", "compare", "accordion", "tabs", "flashcards", 
    "mcq", "truefalse", "sequence", "matching", "hotspots", "cards", "quiz"
}

def validate_presentation_markdown(file_path):
    path = Path(file_path)
    if not path.exists():
        print(f"[ERROR] File not found: {file_path}")
        return False

    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    errors = []
    warnings = []

    # 1. Check YAML Frontmatter
    if not content.startswith("---"):
        errors.append("File must start with YAML frontmatter delimiter '---'.")
    else:
        parts = content.split("---", 2)
        if len(parts) < 3:
            errors.append("Invalid YAML frontmatter block. Closing '---' missing.")
        else:
            fm_text = parts[1].strip()
            try:
                fm = yaml.safe_load(fm_text)
                if not isinstance(fm, dict):
                    errors.append("YAML frontmatter must parse to a key-value dictionary.")
                else:
                    missing_keys = REQUIRED_FRONTMATTER_KEYS - set(fm.keys())
                    if missing_keys:
                        errors.append(f"Missing required YAML frontmatter keys: {', '.join(sorted(missing_keys))}")
            except Exception as e:
                errors.append(f"YAML frontmatter syntax error: {str(e)}")

    # 2. Check H5P Directive Delimiters & Block Closing (:::)
    lines = content.splitlines()
    open_h5p = []
    in_mermaid = False
    mermaid_start_line = 0

    for idx, line in enumerate(lines, start=1):
        line_str = line.strip()

        # Check mermaid blocks
        if line_str.startswith("```mermaid"):
            if in_mermaid:
                errors.append(f"Line {idx}: Nested ```mermaid block opened while previous block at line {mermaid_start_line} was not closed.")
            else:
                in_mermaid = True
                mermaid_start_line = idx
        elif line_str == "```" and in_mermaid:
            in_mermaid = False

        # Check H5P directives
        if line_str.startswith(":::") and len(line_str) > 3:
            directive_name = line_str[3:].split()[0].split('\n')[0].strip()
            if directive_name not in KNOWN_H5P_DIRECTIVES and not directive_name.startswith("callout"):
                warnings.append(f"Line {idx}: Unknown directive ':::{directive_name}'.")
            open_h5p.append((directive_name, idx))
        elif line_str == ":::":
            if not open_h5p:
                errors.append(f"Line {idx}: Found closing ':::' without any open H5P directive.")
            else:
                open_h5p.pop()

    if open_h5p:
        for directive_name, line_num in open_h5p:
            errors.append(f"Line {line_num}: Directive ':::{directive_name}' was never closed with ':::'.")

    if in_mermaid:
        errors.append(f"Line {mermaid_start_line}: ```mermaid block was never closed with ```.")

    # 3. Check Slide Metadata Blocks
    raw_slides = content.split("\n---")
    for s_idx, raw_slide in enumerate(raw_slides):
        slide_text = raw_slide.strip()
        if not slide_text or s_idx == 0:
            continue
            
        # Parse local metadata if present
        if slide_text.startswith("slideId:") or "layout:" in slide_text.split("\n")[0]:
            try:
                meta_lines = []
                for l in slide_text.split("\n"):
                    if l.strip() == "---":
                        break
                    meta_lines.append(l)
                meta_dict = yaml.safe_load("\n".join(meta_lines))
                if isinstance(meta_dict, dict) and "layout" in meta_dict:
                    layout_val = meta_dict["layout"]
                    if layout_val not in VALID_LAYOUTS:
                        warnings.append(f"Slide block {s_idx}: Unknown layout '{layout_val}'. Valid layouts: {', '.join(sorted(VALID_LAYOUTS))}")
            except Exception:
                pass

    # Print summary diagnostics
    print(f"\n==========================================")
    print(f"IPS Specification Validation: {path.name}")
    print(f"==========================================")
    
    if warnings:
        for w in warnings:
            print(f"[WARNING] {w}")

    if errors:
        for e in errors:
            print(f"[ERROR] {e}")
        print(f"\n[FAIL] Found {len(errors)} IPS specification error(s) in {path.name}.")
        return False
    else:
        print(f"[SUCCESS] 0 errors. File is 100% compliant with IPS Specification.")
        return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python validate.py <path_to_slides_markdown>")
        sys.exit(1)
    
    success = validate_presentation_markdown(sys.argv[1])
    sys.exit(0 if success else 1)
