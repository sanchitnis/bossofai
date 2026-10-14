#!/usr/bin/env python3
"""
Advanced Markdown to HTML Presentation Converter (Sprint 2 - React App Compiler)
Converts hybrid markdown files with YAML front matter, admonitions, tabs, 
quizzes, and QR codes into data payloads, runs the React Vite app builder, 
and packages the final presentation output as a static web application.
"""

import re
import sys
import os
import json
import subprocess
import shutil
from pathlib import Path

try:
    import yaml
except ImportError:
    print("Please install PyYAML: pip install PyYAML")
    sys.exit(1)

# Try importing markdown2 for rich rendering; fall back to simple regex-based parser
try:
    import markdown2
    USE_MARKDOWN2 = True
except ImportError:
    USE_MARKDOWN2 = False

def parse_front_matter(content):
    """Extract YAML front matter from markdown."""
    pattern = r'^---\s*\n(.*?)\n---\s*\n'
    match = re.match(pattern, content, re.DOTALL)
    
    if match:
        try:
            front_matter = yaml.safe_load(match.group(1))
        except Exception as e:
            print(f"Warning: Failed to parse YAML front matter: {e}")
            front_matter = {}
        remaining = content[match.end():]
        return front_matter, remaining
    
    return {}, content

def extract_slides(content):
    """Split content into slides based on --- separator."""
    slides = re.split(r'\n---+ *\n', content)
    return [slide.strip() for slide in slides if slide.strip()]

def parse_admonitions(text):
    """Parse Docusaurus-style admonitions into custom callouts."""
    pattern = r':::(note|tip|info|caution|warning|danger|success)(?:\s+([^\n]+))?\n(.*?)\n:::'
    
    def replace_admonition(match):
        adm_type = match.group(1)
        title = match.group(2)
        content = match.group(3)
        
        icons = {
            'note': '📌',
            'tip': '💡',
            'info': 'ℹ️',
            'caution': '⚠️',
            'warning': '⚠️',
            'danger': '❌',
            'success': '✅'
        }
        
        display_title = title if title else adm_type.capitalize()
        icon = icons.get(adm_type, '📌')
        inner_html = render_markdown(content)
        
        color_maps = {
            'note': 'border-sky-500/20 bg-sky-500/5 text-sky-400 border-l-4 border-l-sky-500',
            'tip': 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400 border-l-4 border-l-emerald-500',
            'info': 'border-sky-500/20 bg-sky-500/5 text-sky-400 border-l-4 border-l-sky-500',
            'caution': 'border-amber-500/20 bg-amber-500/5 text-amber-400 border-l-4 border-l-amber-500',
            'warning': 'border-amber-500/20 bg-amber-500/5 text-amber-400 border-l-4 border-l-amber-500',
            'danger': 'border-rose-500/20 bg-rose-500/5 text-rose-400 border-l-4 border-l-rose-500',
            'success': 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400 border-l-4 border-l-emerald-500'
        }
        classes = color_maps.get(adm_type, 'border-slate-800 bg-slate-900 text-slate-100')
        
        return f'<div class="callout border p-4 rounded-lg my-4 {classes}"><strong>{icon} {display_title}</strong><div class="callout-body mt-2 text-slate-300">{inner_html}</div></div>'
    
    return re.sub(pattern, replace_admonition, text, flags=re.DOTALL)

def parse_h5p_directives(text, input_dir=None, glossary=None):
    """Parse all H5P-style custom directives, language tags, glossary tooltips, and visual elements."""
    # 0.0. Mermaid Diagrams
    mermaid_pattern = r'```mermaid\s*\n(.*?)\n```'
    def mermaid_repl(match):
        code = match.group(1).strip()
        code = code.replace('&gt;', '>').replace('&lt;', '<').replace('&amp;', '&')
        return f'\n<div class="mermaid text-center my-4 overflow-x-auto">{code}</div>\n'
    text = re.sub(mermaid_pattern, mermaid_repl, text, flags=re.DOTALL)

    # 1. Accordion
    accordion_pattern = r':::accordion\n(.*?)\n:::'
    def accordion_repl(match):
        content = match.group(1).strip()
        parts = re.split(r'^(?:#{2,3}|\*\*|\-\s*\*\*)\s*(.+?)(?:\*\*|\:)?$', content, flags=re.MULTILINE)
        if len(parts) < 3:
            return match.group(0)
        html_parts = ['<div class="h5p-accordion space-y-2.5 my-4 text-left">']
        for i in range(1, len(parts), 2):
            title = parts[i].strip().lstrip('#').strip()
            body = parts[i+1].strip() if i+1 < len(parts) else ""
            body_html = body.replace('\n', '<br />')
            html_parts.append(f'''  <details class="group border border-slate-800 rounded-xl p-3.5 bg-slate-900/50 hover:border-sky-500/30 transition-all">
    <summary class="font-semibold text-xs cursor-pointer text-sky-400 select-none flex justify-between items-center outline-none">
      <span>{title}</span>
      <span class="text-[10px] transition-transform group-open:rotate-180 text-slate-400">&#9662;</span>
    </summary>
    <div class="mt-2.5 text-xs text-slate-300 leading-relaxed pl-1 pt-2 border-t border-slate-800/60">{body_html}</div>
  </details>''')
        html_parts.append('</div>')
        return '\n'.join(html_parts)
    text = re.sub(accordion_pattern, accordion_repl, text, flags=re.DOTALL)

    # 2. Tabs
    tabs_pattern = r':::tabs\n(.*?)\n:::'
    def tabs_repl(match):
        content = match.group(1).strip()
        parts = re.split(r'^===\s+(.+)$', content, flags=re.MULTILINE)
        if len(parts) < 3:
            return match.group(0)
        jsx_tabs = ['<Tabs>']
        for i in range(1, len(parts), 2):
            label = parts[i].strip()
            body = parts[i+1].strip() if i+1 < len(parts) else ""
            jsx_tabs.append(f'<TabItem value="{label}" label="{label}">\n{body}\n</TabItem>')
        jsx_tabs.append('</Tabs>')
        return '\n'.join(jsx_tabs)
    text = re.sub(tabs_pattern, tabs_repl, text, flags=re.DOTALL)

    # 3. Flashcards
    flashcards_pattern = r':::flashcards\n(.*?)\n:::'
    def flashcards_repl(match):
        content = match.group(1).strip()
        matches = re.findall(r'Q:\s*(.*?)\nA:\s*(.*?)(?:\n|$)', content)
        if not matches:
            return match.group(0)
        html_parts = ['<div class="h5p-flashcards space-y-3 my-4 text-left">']
        for q, a in matches:
            html_parts.append(f'''  <div class="flashcard border border-slate-800 bg-slate-900/40 rounded-xl p-4 cursor-pointer hover:border-sky-400/30 transition-all" onclick="const b = this.querySelector(\'.card-back\'); b.style.display = b.style.display === \'none\' ? \'block\' : \'none\';">
    <div class="text-[9px] uppercase tracking-wider text-sky-400 font-mono font-bold mb-1">Question (Click to flip)</div>
    <div class="text-xs font-semibold text-slate-100">{q}</div>
    <div class="card-back mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-350" style="display:none;">
      <span class="text-emerald-400 font-bold block mb-1 text-[9px] uppercase font-mono tracking-wider">Answer</span>
      {a}
    </div>
  </div>''')
        html_parts.append('</div>')
        return '\n'.join(html_parts)
    text = re.sub(flashcards_pattern, flashcards_repl, text, flags=re.DOTALL)

    # 4. MCQ
    mcq_pattern = r':::mcq\n(.*?)\n:::'
    def mcq_repl(match):
        content = match.group(1).strip()
        q_match = re.search(r'question:\s*(.*?)(?=\n|$)', content)
        exp_match = re.search(r'explanation:\s*(.*?)(?=\n|$)', content)
        question = q_match.group(1).strip() if q_match else ""
        explanation = exp_match.group(1).strip() if exp_match else ""
        options_matches = re.findall(r'\[\s*(x?)\s*\]\s*(.*?)(?=\n|$)', content)
        quiz_str = "[quiz:type=mcq]\n"
        quiz_str += f"Question: {question}\n"
        correct_letter = "A"
        for idx, (is_correct, text_val) in enumerate(options_matches):
            letter = chr(65 + idx)
            quiz_str += f"{letter}) {text_val.strip()}\n"
            if is_correct:
                correct_letter = letter
        quiz_str += f"Correct: {correct_letter}\n"
        if explanation:
            quiz_str += f"Explanation: {explanation}\n"
        quiz_str += "[/quiz]"
        return quiz_str
    text = re.sub(mcq_pattern, mcq_repl, text, flags=re.DOTALL)

    # 5. True / False
    tf_pattern = r':::truefalse\n(.*?)\n:::'
    def tf_repl(match):
        content = match.group(1).strip()
        ans_match = re.search(r'answer:\s*(true|false)', content, re.IGNORECASE)
        exp_match = re.search(r'explanation:\s*(.*?)(?=\n|$)', content)
        statement = content
        if ans_match:
            statement = re.sub(r'answer:\s*(true|false)', '', statement, flags=re.IGNORECASE)
        if exp_match:
            statement = re.sub(r'explanation:\s*(.*?)(?=\n|$)', '', statement)
        statement = statement.strip()
        is_true = ans_match.group(1).lower() == 'true' if ans_match else True
        correct_letter = 'A' if is_true else 'B'
        explanation = exp_match.group(1).strip() if exp_match else ""
        quiz_str = "[quiz:type=mcq]\n"
        quiz_str += f"Question: {statement}\n"
        quiz_str += "A) True\nB) False\n"
        quiz_str += f"Correct: {correct_letter}\n"
        if explanation:
            quiz_str += f"Explanation: {explanation}\n"
        quiz_str += "[/quiz]"
        return quiz_str
    text = re.sub(tf_pattern, tf_repl, text, flags=re.DOTALL)

    # 6. Glossary & Blanks
    brackets_pattern = r'\[\[([^\]|:]+?)(?:\|([^\]]+?))?\]\]'
    def brackets_repl(match):
        term = match.group(1).strip()
        label = match.group(2).strip() if match.group(2) else term
        term_lower = term.lower()
        
        if glossary and term_lower in glossary:
            escaped_def = glossary[term_lower].replace("'", "\\'")
            return f'''<span class="glossary-term" data-definition="{escaped_def}">{label}<span class="invisible group-hover:visible absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-slate-950 text-slate-100 text-xs rounded-lg shadow-xl border border-slate-800 w-56 text-center leading-normal normal-case font-normal pointer-events-none">{glossary[term_lower]}</span></span>'''
            
        escaped_ans = label.replace("'", "\\'")
        return f'''<span class="inline-flex items-center mx-1">
  <input type="text" placeholder="fill blank..." class="bg-slate-950 border border-slate-800 rounded px-2 py-0.5 text-xs text-slate-100 font-mono focus:border-sky-400 outline-none w-28 text-center" onchange="if(window.checkBlank) window.checkBlank(this, \'{escaped_ans}\')" onkeydown="if(event.key===\'Enter\' && window.checkBlank) window.checkBlank(this, \'{escaped_ans}\')" />
</span>'''
    text = re.sub(brackets_pattern, brackets_repl, text)

    # 7. Matching
    matching_pattern = r':::matching\n(.*?)\n:::'
    def matching_repl(match):
        content = match.group(1).strip()
        pairs = []
        for line in content.split('\n'):
            if '=>' in line:
                src, target = line.split('=>', 1)
                pairs.append((src.strip(), target.strip()))
        if not pairs:
            return match.group(0)
        all_targets = sorted(list(set(p[1] for p in pairs)))
        html_parts = ['<div class="matching-activity space-y-3 border border-slate-800 rounded-xl p-4 bg-slate-900/30 my-4 text-left">',
                      '  <div class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">Matching Activity</div>']
        for src, target in pairs:
            options_html = ['<option value="">Select match...</option>']
            for t in all_targets:
                options_html.append(f'<option value="{t}">{t}</option>')
            html_parts.append(f'''  <div class="flex items-center justify-between gap-4 py-1.5 border-b border-slate-800/40">
    <span class="text-xs text-slate-200">{src}</span>
    <select class="bg-slate-950 border border-slate-800 rounded p-1 text-xs text-slate-300 outline-none focus:border-sky-400 w-44" onchange="if(this.value==='{target}'){{this.style.borderColor='#10b981';this.style.color='#34d399';}}else{{this.style.borderColor='#f43f5e';this.style.color='#fb7185';}}">
      {"".join(options_html)}
    </select>
  </div>''')
        html_parts.append('</div>')
        return '\n'.join(html_parts)
    text = re.sub(matching_pattern, matching_repl, text, flags=re.DOTALL)

    # 8. Sortable Sequence
    seq_pattern = r':::sequence\n(.*?)\n:::'
    def seq_repl(match):
        content = match.group(1).strip()
        steps = []
        for line in content.split('\n'):
            line = line.strip()
            if line:
                cleaned = re.sub(r'^\d+\.\s*', '', line)
                steps.append(cleaned)
        if not steps:
            return match.group(0)
        html_parts = ['<div class="sequence-activity space-y-3 border border-slate-800 rounded-xl p-4 bg-slate-900/30 my-4 text-left">',
                      f'  <div class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">Reorder Sequence (Assign Steps 1-{len(steps)})</div>']
        for idx, step in enumerate(steps):
            correct_pos = idx + 1
            options_html = ['<option value="">Position...</option>']
            for pos in range(1, len(steps) + 1):
                options_html.append(f'<option value="{pos}">Step {pos}</option>')
            html_parts.append(f'''  <div class="flex items-center justify-between gap-4 py-1.5 border-b border-slate-800/40">
    <span class="text-xs text-slate-200">{step}</span>
    <select class="bg-slate-950 border border-slate-800 rounded p-1 text-xs text-slate-300 outline-none focus:border-sky-400 w-32" onchange="if(this.value==='{correct_pos}'){{this.style.borderColor='#10b981';this.style.color='#34d399';}}else{{this.style.borderColor='#f43f5e';this.style.color='#fb7185';}}">
      {"".join(options_html)}
    </select>
  </div>''')
        html_parts.append('</div>')
        return '\n'.join(html_parts)
    text = re.sub(seq_pattern, seq_repl, text, flags=re.DOTALL)

    # 9. Timeline
    timeline_pattern = r':::timeline\n(.*?)\n:::'
    def timeline_repl(match):
        content = match.group(1).strip()
        height_match = re.search(r'^height:\s*(.*?)$', content, re.MULTILINE)
        orient_match = re.search(r'^orientation:\s*(.*?)$', content, re.MULTILINE)
        
        c_height = height_match.group(1).strip() if height_match else "auto"
        
        # Clean header lines
        content_clean = content
        if height_match:
            content_clean = re.sub(r'^height:\s*.*?$', '', content_clean, flags=re.MULTILINE)
        if orient_match:
            content_clean = re.sub(r'^orientation:\s*.*?$', '', content_clean, flags=re.MULTILINE)
        
        events = []
        raw_lines = [l.strip() for l in content_clean.split('\n') if l.strip()]
        # Filter out standalone pipe lines or separators
        lines = [l for l in raw_lines if l != '|' and l != '---' and l != '===']
        
        i = 0
        while i < len(lines):
            line = lines[i]
            clean_line = re.sub(r'^(?:===|#{2,3}|\-|\*)\s*', '', line).strip()
            if '|' in clean_line or ':' in clean_line:
                parts = re.split(r'[:|]', clean_line, maxsplit=1)
                date_val = parts[0].strip()
                title = parts[1].strip()
                desc = ""
                i += 1
                if i < len(lines):
                    next_clean = re.sub(r'^(?:===|#{2,3}|\-|\*)\s*', '', lines[i]).strip()
                    if '|' not in next_clean and ':' not in next_clean:
                        desc = lines[i]
                        i += 1
                events.append((date_val, title, desc))
            else:
                i += 1
                
        if not events:
            return match.group(0)
            
        html_parts = [f'<div class="timeline-container border-l-2 border-sky-400/40 pl-5 py-2 space-y-4 my-4 text-left relative" style="max-height:{c_height}; overflow-y:auto;">']
        for date_val, title, desc in events:
            desc_html = desc.replace('\n', '<br />') if desc else ''
            html_parts.append(f'''  <div class="relative group">
    <div class="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-sky-400 border-2 border-slate-950 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
    <div class="text-xs font-mono font-bold text-sky-400">{date_val} <span class="text-slate-400 mx-1">&bull;</span> <span class="text-slate-100 font-sans font-semibold">{title}</span></div>
    {f'<div class="text-xs text-slate-300 mt-1 leading-relaxed bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">{desc_html}</div>' if desc else ''}
  </div>''')
        html_parts.append('</div>')
        return '\n'.join(html_parts)
    text = re.sub(timeline_pattern, timeline_repl, text, flags=re.DOTALL)

    # 10. Image Hotspots
    hotspots_pattern = r':::hotspots\n(.*?)\n:::'
    def hotspots_repl(match):
        content = match.group(1).strip()
        img_match = re.search(r'image:\s*(.*?)(?=\n|$)', content)
        if not img_match:
            return match.group(0)
        img_src = img_match.group(1).strip()
        if input_dir:
            validate_media_assets(f'src="{img_src}"', input_dir)
        hotspot_entries = []
        nodes = re.split(r'\((.*?)\)', content)
        for i in range(1, len(nodes), 2):
            coords = nodes[i].strip()
            body = nodes[i+1].strip() if i+1 < len(nodes) else ""
            lines = body.split('\n')
            title = lines[0].strip() if lines else ""
            desc = '<br/>'.join(l.strip() for l in lines[1:] if l.strip())
            x_val, y_val = coords.split(',', 1)
            hotspot_entries.append((x_val.strip(), y_val.strip(), title, desc))
        html_parts = [f'<div class="hotspot-container relative inline-block my-4 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">',
                      f'  <img src="{img_src}" class="max-h-[300px] object-cover" />']
        for x, y, title, desc in hotspot_entries:
            html_parts.append(f'''  <div class="absolute group cursor-pointer" style="left:{x}%; top:{y}%;">
    <div class="h-4 w-4 rounded-full bg-sky-400 border-2 border-slate-950 animate-ping absolute"></div>
    <div class="h-4 w-4 rounded-full bg-sky-400 border-2 border-slate-950 relative z-10"></div>
    <div class="hidden group-hover:block absolute bg-slate-950/95 border border-slate-800 text-[10px] p-2.5 rounded-lg text-slate-200 w-44 z-50 shadow-2xl -translate-y-full -translate-x-1/2 mt-[-8px] text-left">
      <strong class="text-sky-400 block mb-0.5">{title}</strong>
      {desc}
    </div>
  </div>''')
        html_parts.append('</div>')
        return '\n'.join(html_parts)
    text = re.sub(hotspots_pattern, hotspots_repl, text, flags=re.DOTALL)

    # 11. Compare
    compare_pattern = r':::compare\n(.*?)\n:::'
    def compare_repl(match):
        content = match.group(1).strip()
        before_match = re.search(r'^before:\s*(.*?)$', content, re.MULTILINE)
        after_match = re.search(r'^after:\s*(.*?)$', content, re.MULTILINE)
        height_match = re.search(r'^height:\s*(.*?)$', content, re.MULTILINE)
        label_b_match = re.search(r'^labelBefore:\s*(.*?)$', content, re.MULTILINE)
        label_a_match = re.search(r'^labelAfter:\s*(.*?)$', content, re.MULTILINE)
        pos_match = re.search(r'^sliderPosition:\s*(.*?)$', content, re.MULTILINE)
        
        before = before_match.group(1).strip() if before_match else ""
        after = after_match.group(1).strip() if after_match else ""
        c_height = height_match.group(1).strip() if height_match else "300px"
        label_b = label_b_match.group(1).strip() if label_b_match else "Before"
        label_a = label_a_match.group(1).strip() if label_a_match else "After"
        pos = pos_match.group(1).strip() if pos_match else "50"
        
        if input_dir:
            validate_media_assets(f'src="{before}" src="{after}"', input_dir)
            
        return f'''<div class="h5p-compare-slider relative border border-slate-800 rounded-xl overflow-hidden my-4 select-none w-full" style="height:{c_height};">
  <!-- Before Layer (Background, Left) -->
  <div class="absolute inset-0">
    <img src="{before}" class="w-full h-full object-cover" />
    <span class="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] uppercase font-mono font-bold text-slate-400">{label_b}</span>
  </div>
  
  <!-- After Layer (Foreground, Right, Clipped dynamically) -->
  <div class="after-image-layer absolute inset-0 bg-slate-950" style="clip-path: polygon({pos}% 0, 100% 0, 100% 100%, {pos}% 100%);">
    <img src="{after}" class="w-full h-full object-cover" />
    <span class="absolute top-2 right-2 px-2 py-0.5 rounded bg-sky-500/80 text-[10px] uppercase font-mono font-bold text-slate-900">{label_a}</span>
  </div>
  
  <!-- Slider Range Control -->
  <input type="range" min="0" max="100" value="{pos}" class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" oninput="const val = this.value; const layer = this.parentElement.querySelector(\'.after-image-layer\'); layer.style.clipPath = \'polygon(\' + val + \'% 0, 100% 0, 100% 100%, \' + val + \'% 100%)\'; const handle = this.parentElement.querySelector(\'.slider-bar-handle\'); handle.style.left = val + \'%\';" />
  
  <!-- Visual Slider line separator handler bar -->
  <div class="slider-bar-handle absolute top-0 bottom-0 w-0.5 bg-sky-400 pointer-events-none z-10" style="left:{pos}%;">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-sky-400 text-slate-950 border border-slate-950 flex items-center justify-center font-bold text-xs shadow-lg shadow-sky-400/40">&#8646;</div>
  </div>
</div>'''
    text = re.sub(compare_pattern, compare_repl, text, flags=re.DOTALL)

    # 12. Quiz Group
    quiz_group_pattern = r':::quiz\n(.*?)\n:::'
    def quiz_group_repl(match):
        content = match.group(1).strip()
        return f'''<div class="quiz-group-container border border-purple-500/10 bg-purple-500/5 rounded-xl p-3 my-2 text-xs">
  {content}
</div>'''
    text = re.sub(quiz_group_pattern, quiz_group_repl, text, flags=re.DOTALL)

    # 13. Cards
    cards_pattern = r':::cards\n(.*?)\n:::'
    def cards_repl(match):
        content = match.group(1).strip()
        items = []
        for line in content.split('\n'):
            line = line.strip()
            if line.startswith('Card:'):
                title = line.replace('Card:', '').strip()
                items.append([title, []])
            elif line and items:
                items[-1][1].append(line)
        html_parts = ['<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">']
        for title, desc_lines in items:
            desc = ' '.join(desc_lines)
            html_parts.append(f'''  <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-sky-400/40 transition-colors text-left">
    <div class="text-xs font-bold text-sky-400 mb-1">{title}</div>
    <div class="text-xs text-slate-350 leading-relaxed">{desc}</div>
  </div>''')
        html_parts.append('</div>')
        return '\n'.join(html_parts)
    text = re.sub(cards_pattern, cards_repl, text, flags=re.DOTALL)

    # 14. Explicit Semantic Blocks (Mnemonic, Analogy, Definition, Example)
    mnemonic_pattern = r':::mnemonic(?:\s+([^\n]+))?\n(.*?)\n:::'
    def mnemonic_repl(match):
        title = match.group(1).strip() if match.group(1) else "Mnemonic Memory Aid"
        content = match.group(2).strip()
        inner_html = render_markdown(content)
        return f'''<div class="mnemonic-block">
    <div class="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">🧠 {title}</div>
    <div class="text-xs text-slate-350 leading-relaxed pl-1">{inner_html}</div>
  </div>'''
    text = re.sub(mnemonic_pattern, mnemonic_repl, text, flags=re.DOTALL)

    analogy_pattern = r':::analogy(?:\s+([^\n]+))?\n(.*?)\n:::'
    def analogy_repl(match):
        title = match.group(1).strip() if match.group(1) else "Real-World Analogy"
        content = match.group(2).strip()
        inner_html = render_markdown(content)
        return f'''<div class="analogy-block">
    <div class="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">⚖️ {title}</div>
    <div class="text-xs text-slate-350 leading-relaxed pl-1">{inner_html}</div>
  </div>'''
    text = re.sub(analogy_pattern, analogy_repl, text, flags=re.DOTALL)

    definition_pattern = r':::definition(?:\s+([^\n]+))?\n(.*?)\n:::'
    def definition_repl(match):
        title = match.group(1).strip() if match.group(1) else "Formal Definition"
        content = match.group(2).strip()
        inner_html = render_markdown(content)
        return f'''<div class="definition-block">
    <div class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">📖 {title}</div>
    <div class="text-xs text-slate-350 leading-relaxed pl-1">{inner_html}</div>
  </div>'''
    text = re.sub(definition_pattern, definition_repl, text, flags=re.DOTALL)

    example_pattern = r':::example(?:\s+([^\n]+))?\n(.*?)\n:::'
    def example_repl(match):
        title = match.group(1).strip() if match.group(1) else "Math / Code Example"
        content = match.group(2).strip()
        inner_html = render_markdown(content)
        return f'''<div class="example-block">
    <div class="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">📝 {title}</div>
    <div class="text-xs text-slate-350 leading-relaxed pl-1">{inner_html}</div>
  </div>'''
    text = re.sub(example_pattern, example_repl, text, flags=re.DOTALL)

    # 15. I18n Multi-Language Parser
    lang_pattern = r':::lang\s+(\w+)\n(.*?)\n:::'
    def lang_repl(match):
        locale = match.group(1).strip()
        body = match.group(2).strip()
        return f'<div class="lang-block" data-lang="{locale}">\n{body}\n</div>'
    text = re.sub(lang_pattern, lang_repl, text, flags=re.DOTALL)

    inline_lang_pattern = r'\[\[([a-z]{2}):(.*?)\]\]'
    def inline_lang_repl(match):
        locale = match.group(1)
        translation = match.group(2)
        return f'<span class="lang-inline" data-lang="{locale}">{translation}</span>'
    text = re.sub(inline_lang_pattern, inline_lang_repl, text)

    # 16. Interactive Book chapter separator
    text = text.replace('---chapter---', '<hr class="border-dashed border-slate-800 my-8" />')
    return text

def parse_tabs(text):
    """Parse Docusaurus-style Tabs and TabItems into interactive tabs."""
    text = re.sub(r'import\s+Tabs\s+from\s+[\'"]@theme/Tabs[\'"];?', '', text)
    text = re.sub(r'import\s+TabItem\s+from\s+[\'"]@theme/TabItem[\'"];?', '', text)
    
    tab_group_idx = [0]
    
    def replace_tabs(tabs_match):
        tab_group_idx[0] += 1
        content = tabs_match.group(1)
        
        tab_items = re.findall(r'<TabItem\s+value="([^"]+)"\s+label="([^"]+)"( default)?>\n(.*?)\n</TabItem>', content, re.DOTALL)
        
        if not tab_items:
            return tabs_match.group(0)
            
        headers_html = []
        bodies_html = []
        
        for i, (val, label, is_default, body_content) in enumerate(tab_items):
            active_class = "active border-sky-400 text-sky-400 bg-sky-500/10" if is_default or (not any(x[2] for x in tab_items) and i == 0) else "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
            display_style = "" if "active" in active_class else 'style="display:none;"'
            
            headers_html.append(f'<button class="tab-btn px-4 py-2 border-b-2 font-medium transition-all {active_class}" onclick="switchTab(this, \'tab-body-{tab_group_idx[0]}-{val}\')">{label}</button>')
            inner_body_html = render_markdown(body_content)
            bodies_html.append(f'<div id="tab-body-{tab_group_idx[0]}-{val}" class="tab-body p-4 {active_class if "active" in active_class else ""}" {display_style}>{inner_body_html}</div>')
            
        return f'''<div class="tabs-container border border-slate-850 rounded-lg overflow-hidden my-4 bg-slate-900/30">
            <div class="tabs-header flex border-b border-slate-800 bg-slate-955/40">
                {" ".join(headers_html)}
            </div>
            <div class="tabs-content">
                {" ".join(bodies_html)}
            </div>
        </div>'''
        
    pattern = r'<Tabs.*?>\n(.*?)\n</Tabs>'
    return re.sub(pattern, replace_tabs, text, flags=re.DOTALL)

def extract_quiz(content):
    """Extract quiz blocks from content."""
    quiz_pattern = r'\[quiz:type=(\w+)\](.*?)\[/quiz\]'
    quizzes = []
    
    def replace_quiz(match):
        quiz_type = match.group(1)
        quiz_content = match.group(2).strip()
        
        lines = quiz_content.split('\n')
        question = ""
        options = []
        correct = ""
        
        for line in lines:
            line = line.strip()
            if line.startswith('Question:'):
                question = line.replace('Question:', '').strip()
            elif line.startswith(('A)', 'B)', 'C)', 'D)')):
                options.append(line)
            elif line.startswith('Correct:'):
                correct = line.replace('Correct:', '').strip()
        
        quizzes.append({
            'type': quiz_type,
            'question': question,
            'options': options,
            'correct': correct
        })
        return f'<!-- QUIZ_{len(quizzes)-1} -->'
        
    content = re.sub(quiz_pattern, replace_quiz, content, flags=re.DOTALL)
    return content, quizzes

def extract_qr_codes(content):
    """Extract QR code markers from content."""
    qr_pattern = r'\[qr:url=([^:]+):text="([^"]+)"\]'
    qr_codes = []
    
    def replace_qr(match):
        qr_codes.append({
            'url': match.group(1),
            'text': match.group(2)
        })
        return f'<!-- QR_{len(qr_codes)-1} -->'
        
    content = re.sub(qr_pattern, replace_qr, content)
    return content, qr_codes

def strip_html_comments(text):
    """Strip HTML comments that are not slide identifiers or quiz/qr placeholders."""
    def comment_replacer(match):
        comment = match.group(0)
        if 'QUIZ_' in comment or 'QR_' in comment or 'SLIDE' in comment:
            return comment
        return ""
    return re.sub(r'<!--.*?-->', comment_replacer, text, flags=re.DOTALL)

def render_markdown(text):
    """Render basic markdown to HTML."""
    if USE_MARKDOWN2:
        html = markdown2.markdown(text, extras=["tables", "fenced-code-blocks", "break-on-newline"])
        html = html.replace('<table>', '<table class="w-full border-collapse border border-slate-800 rounded-lg overflow-hidden my-4 text-sm">')
        html = html.replace('<th>', '<th class="bg-slate-900/60 p-3 text-left font-semibold border-b border-slate-800 text-sky-400">')
        html = html.replace('<td>', '<td class="p-3 border-b border-slate-800/40 text-slate-300">')
        html = html.replace('<blockquote>', '<blockquote class="border-l-4 border-sky-400 pl-4 italic my-4 text-slate-300">')
        
        # Convert language-mermaid blocks to <div class="mermaid">...</div>
        mermaid_pattern = r'<pre><code class="language-mermaid">(.*?)</code></pre>'
        def mermaid_repl(match):
            code = match.group(1).strip()
            # Decode HTML entities (like &gt;, &lt;, &amp;) back to raw characters for Mermaid parser
            code = code.replace('&gt;', '>').replace('&lt;', '<').replace('&amp;', '&').replace('&quot;', '"').replace('&#x27;', "'")
            return f'<div class="mermaid">{code}</div>'
        html = re.sub(mermaid_pattern, mermaid_repl, html, flags=re.DOTALL)
        return html
        
    # Fallback Parser
    text = re.sub(r'^# (.+)$', r'<h1 class="text-4xl font-bold font-serif mb-4 text-sky-400">\1</h1>', text, flags=re.MULTILINE)
    text = re.sub(r'^## (.+)$', r'<h2 class="text-2xl font-semibold font-serif mb-3 text-sky-400 border-l-4 border-sky-400 pl-3">\1</h2>', text, flags=re.MULTILINE)
    text = re.sub(r'^### (.+)$', r'<h3 class="text-xl font-medium mb-2 text-sky-400">\1</h3>', text, flags=re.MULTILINE)
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong class="text-white font-semibold">\1</strong>', text)
    text = re.sub(r'\*(.+?)\*', r'<em class="italic">\1</em>', text)
    text = re.sub(r'`([^`]+)`', r'<code class="font-mono bg-slate-900 px-1.5 py-0.5 rounded text-sky-400 text-sm">\1</code>', text)
    text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2" class="text-sky-400 hover:text-white underline">\1</a>', text)
    
    lines = text.split('\n')
    in_list = False
    result = []
    
    for line in lines:
        if line.strip().startswith('- '):
            if not in_list:
                result.append('<ul class="list-disc pl-6 mb-4 space-y-1.5 text-slate-300">')
                in_list = True
            result.append(f'<li>{line.strip()[2:]}</li>')
        elif line.strip().startswith(('1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.')):
            if not in_list:
                result.append('<ol class="list-decimal pl-6 mb-4 space-y-1.5 text-slate-300">')
                in_list = 'ol'
            result.append(f'<li>{line.strip().split(".", 1)[1].strip()}</li>')
        else:
            if in_list:
                if in_list == 'ol':
                    result.append('</ol>')
                else:
                    result.append('</ul>')
                in_list = False
            if line.strip() and not line.strip().startswith('<'):
                result.append(f'<p class="mb-4 text-slate-300 leading-relaxed">{line}</p>')
            elif line.strip().startswith('<'):
                result.append(line)
    
    if in_list:
        if in_list == 'ol':
            result.append('</ol>')
        else:
            result.append('</ul>')
            
    return '\n'.join(result)

def parse_slide_front_matter(slide_content):
    """Parse slide-level local YAML frontmatter block if it exists."""
    if '\n---' in slide_content:
        parts = slide_content.split('\n---', 1)
        meta_part = parts[0].strip()
        body_part = parts[1].strip()
        
        # If the meta part has no H1 or H2 slide titles, it is likely local metadata
        if not any(line.strip().startswith('#') for line in meta_part.split('\n')):
            try:
                slide_meta = yaml.safe_load(meta_part)
                if isinstance(slide_meta, dict):
                    return slide_meta, body_part
            except Exception:
                pass
    return {}, slide_content



def format_layout_content(layout, html_content, email='', social='', author=''):
    """Enhance parsed slide HTML content based on its layout specification."""
    if layout == 'two-column':
        parts = re.split(r'(?=<h3)', html_content)
        if len(parts) >= 3:
            cols = []
            for p in parts[1:]:
                cols.append(f'<div class="flex-1 p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">{p}</div>')
            return f'{parts[0]}<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">{"".join(cols)}</div>'
            
    elif layout == 'three-column':
        parts = re.split(r'(?=<h3)', html_content)
        if len(parts) >= 4:
            cols = []
            for p in parts[1:4]:
                cols.append(f'<div class="flex-1 p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">{p}</div>')
            return f'{parts[0]}<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">{"".join(cols)}</div>'
            
    elif layout == 'swot':
        parts = re.split(r'(?=<h3)', html_content)
        if len(parts) >= 3:
            cols = []
            colors = [
                "border-emerald-500/20 bg-emerald-500/5 text-emerald-400 border-l-4 border-l-emerald-500",
                "border-amber-500/20 bg-amber-500/5 text-amber-400 border-l-4 border-l-amber-500",
                "border-sky-500/20 bg-sky-500/5 text-sky-400 border-l-4 border-l-sky-500",
                "border-rose-500/20 bg-rose-500/5 text-rose-400 border-l-4 border-l-rose-500"
            ]
            for idx, p in enumerate(parts[1:]):
                color = colors[idx % len(colors)]
                cols.append(f'<div class="p-4 rounded-xl border {color}">{p}</div>')
            return f'{parts[0]}<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">{"".join(cols)}</div>'
            
    elif layout == 'quote':
        return f'<div class="text-center max-w-2xl mx-auto my-8 italic text-slate-300 border-l-4 border-sky-400 pl-4">{html_content}</div>'
        
    elif layout == 'thankyou':
        contact_html = ''
        if email or social:
            contact_html += '<div class="mt-8 pt-8 border-t border-slate-800 max-w-md mx-auto text-center space-y-2">'
            if author:
                contact_html += f'<div class="text-sm font-semibold text-slate-350">{author}</div>'
            if email:
                contact_html += f'<div class="text-xs text-slate-400">📧 <a href="mailto:{email}" class="text-sky-400 hover:underline">{email}</a></div>'
            if social:
                contact_html += f'<div class="text-xs text-slate-400">🔗 <a href="{social}" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:underline">{social}</a></div>'
            contact_html += '</div>'
        return f'<div class="text-center py-12">{html_content}{contact_html}</div>'
        
    return html_content

def normalize_jsx_components(text):
    """Normalize standard JSX tags to standard bracketed delimiters for easy pipeline processing."""
    # 1. Normalize QRCode JSX: <QRCode url="X" text="Y" /> or multiline
    qr_pattern = r'<QRCode\s+url="([^"]+)"\s+text="([^"]+)"\s*/?>'
    def qr_repl(match):
        return f'[qr:url={match.group(1)}:text="{match.group(2)}"]'
    text = re.sub(qr_pattern, qr_repl, text)
    
    qr_pattern_multi = r'<QRCode\s+([^>]+)\s*/?>'
    def qr_repl_multi(match):
        attrs = match.group(1)
        url_match = re.search(r'url="([^"]+)"', attrs)
        text_match = re.search(r'text="([^"]+)"', attrs)
        if url_match and text_match:
            return f'[qr:url={url_match.group(1)}:text="{text_match.group(2)}"]'
        return match.group(0)
    text = re.sub(qr_pattern_multi, qr_repl_multi, text)

    # 2. Normalize Quiz JSX: <Quiz type="X" question="Q" a="A" b="B" ... />
    quiz_pattern = r'<Quiz\s+([^>]+)\s*/?>'
    def quiz_repl(match):
        attrs = match.group(1)
        type_match = re.search(r'type="([^"]+)"', attrs)
        q_match = re.search(r'question="([^"]+)"', attrs)
        correct_match = re.search(r'correct="([^"]+)"', attrs)
        
        if type_match and q_match and correct_match:
            q_type = type_match.group(1)
            q_text = q_match.group(1)
            correct_val = correct_match.group(1)
            
            options = []
            for letter in ['a', 'b', 'c', 'd']:
                opt_match = re.search(fr'{letter}="([^"]+)"', attrs)
                if opt_match:
                    options.append(f"{letter.upper()}) {opt_match.group(1)}")
            
            quiz_str = f'[quiz:type={q_type}]\nQuestion: {q_text}\n'
            for opt in options:
                quiz_str += f'{opt}\n'
            quiz_str += f'Correct: {correct_val.upper()}\n[/quiz]'
            return quiz_str
        return match.group(0)
    text = re.sub(quiz_pattern, quiz_repl, text)
    
    return text

def parse_metric_components(text):
    """Parse standard MDX Metric tags to premium styled HTML cards."""
    # Match both standard <Metric ... /> and escaped &lt;Metric ... /&gt; or &lt;Metric ... &gt;
    metric_pattern = r'(?:<Metric|&lt;Metric)\s+([^>;&]+?)(?:/?>|/&gt;|&gt;)'
    def metric_repl(match):
        attrs = match.group(1)
        # Normalize escaped quotes &quot; to "
        attrs = attrs.replace('&quot;', '"').replace('&#x27;', "'")
        
        label_match = re.search(r'label="([^"]+)"', attrs)
        value_match = re.search(r'value="([^"]+)"', attrs)
        trend_match = re.search(r'trend="([^"]+)"', attrs)
        
        label = label_match.group(1) if label_match else ""
        value = value_match.group(1) if value_match else ""
        trend = trend_match.group(1) if trend_match else ""
        
        trend_color = "text-emerald-400" if "+" in trend else "text-rose-400" if "-" in trend else "text-slate-400"
        
        return f'''<div class="metric-card p-5 rounded-2xl border border-slate-800 bg-slate-950/40 relative overflow-hidden my-4 flex-1 animate-fade-up">
<div class="text-[10px] uppercase tracking-wider font-mono font-bold text-slate-500 mb-1">{label}</div>
<div class="text-3xl font-extrabold text-slate-100 font-sans tracking-tight">{value}</div>
{f'<div class="text-xs font-mono font-bold {trend_color} mt-2 flex items-center gap-1">{trend}</div>' if trend else ''}
</div>'''
    return re.sub(metric_pattern, metric_repl, text)

def parse_chart_components(text):
    """Parse standard MDX Chart tags to hydration markers for React component mounting."""
    # Match both standard <Chart ... /> and escaped &lt;Chart ... /&gt; or &lt;Chart ... &gt;
    chart_pattern = r'(?:<Chart|&lt;Chart)\s+([^>;&]+?)(?:/?>|/&gt;|&gt;)'
    def chart_repl(match):
        attrs = match.group(1)
        attrs = attrs.replace('&quot;', '"').replace('&#x27;', "'")
        
        type_match = re.search(r'type="([^"]+)"', attrs)
        dataset_match = re.search(r'dataset="([^"]+)"', attrs)
        x_match = re.search(r'x="([^"]+)"', attrs)
        y_match = re.search(r'y="([^"]+)"', attrs)
        
        c_type = type_match.group(1) if type_match else "line"
        c_dataset = dataset_match.group(1) if dataset_match else ""
        c_x = x_match.group(1) if x_match else ""
        c_y = y_match.group(1) if y_match else ""
        
        return f'<div class="chart-hydration-marker" data-chart-type="{c_type}" data-dataset="{c_dataset}" data-x="{c_x}" data-y="{c_y}"></div>'
    return re.sub(chart_pattern, chart_repl, text)

def validate_media_assets(text, input_dir):
    """Check if media paths referenced in Markdown/HTML exist next to input directory and print warnings if missing."""
    media_paths = []
    # 1. Markdown image syntax: ![Alt](media/filename.jpg)
    md_matches = re.findall(r'!\[.*?\]\((media/[^)]+)\)', text)
    media_paths.extend(md_matches)
    # 2. HTML src attribute syntax: src="media/filename.mp4"
    src_matches = re.findall(r'src=["\'](media/[^"\']+)["\']', text)
    media_paths.extend(src_matches)
    
    for path in set(media_paths):
        full_path = Path(input_dir) / path
        if not full_path.exists():
            print(f"Warning: Media file '{full_path.relative_to(full_path.parents[2]) if len(full_path.parents) > 2 else full_path}' referenced in slide does not exist.")

def generate_react_payload(front_matter, slides, input_dir=None, glossary=None):
    """Compile presentation slides list to JSON structured model."""
    title = front_matter.get('title', 'Presentation')
    author = front_matter.get('author', 'Author')
    affiliation = front_matter.get('affiliation', 'Institution')
    date_str = front_matter.get('date', '2025')
    tagline = front_matter.get('description', 'Transforming learning through human-AI collaboration')
    email = front_matter.get('email', '')
    social = front_matter.get('social', '')
    version = str(front_matter.get('version', ''))
    aiTutorUrl = front_matter.get('aiTutorUrl', '')
    aiVivaUrl = front_matter.get('aiVivaUrl', '')
    
    slide_metadata = []
    numbered_count = 0
    current_topic_idx = -1
    
    i = 0
    while i < len(slides):
        slide_content = slides[i].strip()
        if not slide_content:
            i += 1
            continue
            
        # Parse local metadata block if present
        slide_meta = {}
        if ':' in slide_content and '\n' in slide_content:
            if not any(line.strip().startswith('#') for line in slide_content.split('\n')):
                try:
                    parsed = yaml.safe_load(slide_content)
                    if isinstance(parsed, dict) and ('slideId' in parsed or 'layout' in parsed or 'purpose' in parsed):
                        slide_meta = parsed
                        i += 1  # Advance to the actual content segment
                        if i < len(slides):
                            slide_content = slides[i].strip()
                        else:
                            slide_content = ""
                except Exception:
                    pass

        if not slide_content:
            i += 1
            continue

        h1_match = re.search(r'^#\s+(.+)$', slide_content, re.MULTILINE)
        h2_match = re.search(r'^##\s+(.+)$', slide_content, re.MULTILINE)
        
        out_idx = len(slide_metadata)
        
        if h1_match:
            title_text = h1_match.group(1).strip()
            is_major = True
            label = ""
            current_topic_idx = out_idx
        elif h2_match:
            title_text = h2_match.group(1).strip()
            is_major = False
            numbered_count += 1
            label = f"{numbered_count:02d}"
        else:
            title_text = f"Slide {out_idx + 1}"
            is_major = False
            numbered_count += 1
            label = f"{numbered_count:02d}"
            
        # Run pre-processing of H5P directives, standard JSX tags and metadata validators
        slide_content_parsed = parse_h5p_directives(slide_content, input_dir, glossary)
        slide_content_parsed = normalize_jsx_components(slide_content_parsed)
        
        if input_dir:
            validate_media_assets(slide_content_parsed, input_dir)
            
        slide_content_parsed = parse_admonitions(slide_content_parsed)
        slide_content_parsed = parse_tabs(slide_content_parsed)
        slide_content_parsed, quizzes = extract_quiz(slide_content_parsed)
        slide_content_parsed, qr_codes = extract_qr_codes(slide_content_parsed)
        slide_content_parsed = strip_html_comments(slide_content_parsed)
        slide_html = render_markdown(slide_content_parsed)
        
        # Inject HTML Quizzes
        for idx, quiz in enumerate(quizzes):
            quiz_html = f'''<div class="quiz border border-slate-800 bg-slate-900/50 rounded-lg p-3 my-2 border-l-4 border-l-purple-500 text-xs">
                        <div class="quiz-question font-semibold text-slate-100 text-sm mb-2">{quiz["question"]}</div>\n'''
            for option in quiz['options']:
                opt_letter = option[0] if option else ""
                quiz_html += f'                        <div class="quiz-option p-2 bg-slate-950/40 border border-slate-800 rounded-lg cursor-pointer transition-all my-1.5 font-mono text-xs" onclick="checkAnswer(this, \'{opt_letter}\', \'{quiz["correct"]}\')">{option}</div>\n'
            quiz_html += '                </div>\n'
            slide_html = slide_html.replace(f'<!-- QUIZ_{idx} -->', quiz_html)
            
        # Inject HTML QR Codes
        for idx, qr in enumerate(qr_codes):
            qr_html = f'''<div class="qr-code text-center my-6">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={qr['url']}" alt="QR Code" class="inline-block bg-white p-2 rounded-lg shadow-lg">
                        <div class="qr-text text-sm text-slate-400 mt-2 font-medium">{qr['text']}</div>
                    </div>\n'''
            slide_html = slide_html.replace(f'<!-- QR_{idx} -->', qr_html)

        # Parse metrics and charts on output HTML to avoid escaping issues
        slide_html = parse_metric_components(slide_html)
        slide_html = parse_chart_components(slide_html)

        slide_layout = slide_meta.get('layout', 'hero' if is_major and out_idx == 0 else 'content')
        slide_html = format_layout_content(slide_layout, slide_html, email, social, author)

        slide_metadata.append({
            'title': title_text,
            'is_major': is_major,
            'label': label,
            'topic_idx': current_topic_idx if current_topic_idx != -1 else 0,
            'content': slide_html,
            'layout': slide_layout,
            'purpose': slide_meta.get('purpose', 'explain'),
            'duration': slide_meta.get('duration', 60),
            'importance': slide_meta.get('importance', 'normal'),
            'learningObjective': slide_meta.get('learningObjective', []),
            'interactionLevel': slide_meta.get('interactionLevel', 'none'),
            'ai': slide_meta.get('ai', {})
        })
        i += 1
        
    subtitle = front_matter.get('subtitle', '')
    description = front_matter.get('description', '')

    return {
        "title": title,
        "subtitle": subtitle,
        "description": description,
        "author": author,
        "affiliation": affiliation,
        "date": date_str,
        "tagline": subtitle or description or tagline,
        "email": email,
        "social": social,
        "version": version,
        "aiTutorUrl": aiTutorUrl,
        "aiVivaUrl": aiVivaUrl,
        "slides": slide_metadata
    }

def auto_update_intro_md(front_matter, output_dir):
    """Automatically index new interactive presentations and course docs in docs/intro.md."""
    try:
        presentation_slug = output_dir.name
        title = front_matter.get('title', presentation_slug)
        tagline = front_matter.get('description', front_matter.get('subtitle', 'Interactive microlearning presentation.'))
        author = front_matter.get('author', '')
        desc_text = f"{tagline} (by {author})" if author and author not in tagline else tagline
        
        script_dir = Path(__file__).parent.absolute()
        workspace_root = script_dir.parent.parent
        intro_md = workspace_root / 'docs' / 'intro.md'
        
        if not intro_md.exists():
            return
            
        with open(intro_md, 'r', encoding='utf-8') as f:
            intro_content = f.read()
            
        pres_link = f"pathname:///presentations/{presentation_slug}/"
        
        # 1. Update Interactive Presentations section if not already present
        if pres_link not in intro_content:
            pres_section_regex = r'(## 🖥️ Interactive Presentations \{#interactive-presentations\}\s*\n\s*Explore the interactive slide decks compiled using the presentation creator:\n)'
            if re.search(pres_section_regex, intro_content):
                intro_content = re.sub(
                    pres_section_regex,
                    rf'\1*   [{title}]({pres_link}) - {desc_text}\n',
                    intro_content
                )
            
        # 2. Check if a matching doc file exists under docs/{presentation_slug}/
        doc_folder = workspace_root / 'docs' / presentation_slug
        doc_file = doc_folder / f"{presentation_slug}.md"
        if doc_file.exists():
            doc_link = f"./{presentation_slug}/{presentation_slug}.md"
            if doc_link not in intro_content:
                course_code = front_matter.get('course_code', '')
                code_prefix = f"{course_code}: " if course_code else ""
                courses_section_regex = r'(## 🚀 Explore Our Courses \{#explore-our-courses\}\s*\n\s*Use the sidebar or the links below to navigate through the available courses:\n)'
                if re.search(courses_section_regex, intro_content):
                    intro_content = re.sub(
                        courses_section_regex,
                        rf'\1*   **[{code_prefix}{title}](./{presentation_slug}/{presentation_slug}.md)** - {tagline}\n',
                        intro_content
                    )
                
        with open(intro_md, 'w', encoding='utf-8') as f:
            f.write(intro_content)
        print(f"Automatically updated index in {intro_md}")
    except Exception as e:
        print(f"Note: Automatic indexing in intro.md skipped: {e}")

def main():
    if len(sys.argv) < 2:
        print("Usage: python convert.py <markdown-file> [output-directory]")
        sys.exit(1)
    
    input_file = sys.argv[1]
    
    # Check for optional output directory override
    output_dir_override = None
    if len(sys.argv) >= 3:
        output_dir_override = Path(sys.argv[2]).absolute()
    
    if not os.path.exists(input_file):
        print(f"Error: File '{input_file}' not found")
        sys.exit(1)

    # 0. Validate input file against IPS specification
    try:
        from validate import validate_presentation_markdown
        if not validate_presentation_markdown(input_file):
            print("\n[CONVERTER ABORTED] Input file failed IPS specification validation.")
            print("Please fix the non-conforming input markdown rather than altering convert.py.")
            sys.exit(1)
    except ImportError:
        pass
        
    script_dir = Path(__file__).parent.absolute()
    renderer_dir = script_dir / 'renderer'
    
    if not renderer_dir.exists():
        print(f"Error: React renderer template directory '{renderer_dir}' not found.")
        sys.exit(1)
        
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    front_matter, content = parse_front_matter(content)
    # Parse glossary
    glossary = {}
    glossary_match = re.search(r':::glossary\n(.*?)\n:::', content, re.DOTALL)
    if glossary_match:
        glossary_block = glossary_match.group(1).strip()
        for line in glossary_block.split('\n'):
            line = line.strip()
            if ']]:' in line:
                term_match = re.search(r'\[\[(.*?)\]\]:\s*(.*)', line)
                if term_match:
                    term_key = term_match.group(1).strip().lower()
                    term_def = term_match.group(2).strip()
                    glossary[term_key] = term_def
        content = content.replace(glossary_match.group(0), '')
        
    slides = extract_slides(content)
    
    if not slides:
        print("Error: No slides found")
        sys.exit(1)
        
    input_path = Path(input_file).absolute()
    
    # 1. Compile slides to JSON data asset
    payload = generate_react_payload(front_matter, slides, input_path.parent, glossary)
    
    json_path = renderer_dir / 'src' / 'presentation-data.json'
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"Slide deck payload written to {json_path}")
    
    # 2. Build the React application
    print("Building dynamic presentation via Vite compiler...")
    try:
        # Use shell=True for windows compatibility
        subprocess.run("npm run build", shell=True, cwd=str(renderer_dir), check=True)
    except subprocess.CalledProcessError as e:
        print(f"Compilation Error during Vite compile: {e}")
        sys.exit(1)
        
    # 3. Package output to target directory
    if output_dir_override:
        output_dir = output_dir_override
    else:
        course_name = input_path.parent.name
        workspace_root = script_dir.parent.parent
        output_dir = workspace_root / 'static' / 'presentations' / course_name
        
    # Ensure output directory exists
    output_dir.mkdir(parents=True, exist_ok=True)
    
    dist_dir = renderer_dir / 'dist'
    if not dist_dir.exists():
        print("Error: Vite compilation did not produce 'dist' folder.")
        sys.exit(1)
        
    # Remove old index.html and assets in output folder
    out_html = output_dir / 'index.html'
    out_assets = output_dir / 'assets'
    
    if out_html.exists():
        os.remove(out_html)
    if out_assets.exists():
        shutil.rmtree(out_assets)
        
    # Copy build artifacts
    shutil.copy(dist_dir / 'index.html', out_html)
    shutil.copytree(dist_dir / 'assets', out_assets)
    
    # Copy any local media folders if they exist next to the source markdown
    source_media = input_path.parent / 'media'
    if source_media.exists():
        dest_media = output_dir / 'media'
        if dest_media.exists():
            shutil.rmtree(dest_media)
        shutil.copytree(source_media, dest_media)
        print(f"Copied source media assets to {dest_media}")
        
    print(f"\nPresentation successfully compiled and packaged!")
    print(f"Output files written to: {output_dir}")
    print(f"   - {out_html.name}")
    print(f"   - {out_assets.name}/")

    # Automatically update docs/intro.md index
    auto_update_intro_md(front_matter, output_dir)

if __name__ == '__main__':
    main()

