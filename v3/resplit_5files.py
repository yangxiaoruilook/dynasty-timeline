#!/usr/bin/env python3
"""Re-split 19 eras across 5 files with balanced sizes."""
import re, os

v3dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(v3dir)

# Read all 4 current data files and extract era blocks
all_eras = []
for fname in ['data-1.js', 'data-2.js', 'data-3.js', 'data-4.js']:
    with open(fname, 'r') as f:
        content = f.read()
    # Split by era boundaries: "\n  { id:"
    parts = re.split(r'(\n  \{ id:)', content)
    # parts[0] = header, parts[1]=prefix, parts[2]=body, parts[3]=prefix, ...
    for i in range(1, len(parts), 2):
        prefix = parts[i]       # "\n  { id:"
        body = parts[i+1] if i+1 < len(parts) else ''
        block = prefix + body
        # Strip trailing content after the era's closing "}"
        # Each era block ends with "},\n  " (comma before next era)
        # or "}\n];\n" (last era in file, has array closing)
        # We only want the era object itself: find the last "}" that
        # belongs to the era and strip everything after it.
        # The era object ends with "}" followed by either "," or "];"
        # Simple approach: rstrip, then remove trailing "," or "];" or "]"
        # Clean the block: strip leading "\n  " from prefix and
        # trailing ",\n  " or "];\n" from the end
        block = block.strip()
        if block.endswith('];'):
            block = block[:-2].strip()
        if block.endswith(']'):
            block = block[:-1].strip()
        if block.endswith(','):
            block = block[:-1].strip()
        all_eras.append(block)

print(f"Extracted {len(all_eras)} eras total")
for e in all_eras:
    m = re.search(r"id:'(\S+)'.*?name:'([^']+)'", e)
    if m:
        size = len(e.encode('utf-8'))
        print(f"  {m.group(1):22s} {m.group(2):10s}  {size/1024:.1f} KB")

# New distribution: 5 files, ~3-4 eras each, 100-140KB per file
groups = [
    [0, 1, 2, 3, 4],      # 上古 夏 商 西周 春秋
    [5, 6, 7],             # 战国 秦 汉
    [8, 9, 10, 11],        # 三国 两晋 南北朝 隋
    [12, 13, 14, 15],      # 唐 五代 宋 元
    [16, 17, 18],          # 明 清 近现代
]

var_names = []
for idx, indices in enumerate(groups):
    chunk = [all_eras[i] for i in indices]
    varname = f'eras_part{idx+1}'
    var_names.append(varname)

    # Join with ",\n  " between eras
    body = ',\n  '.join(chunk)
    file_content = f'const {varname} = [\n  {body}\n];\n'

    filename = f'data-{idx+1}.js'
    with open(filename, 'w') as f:
        f.write(file_content)
    size_kb = len(file_content.encode('utf-8')) / 1024
    print(f"  -> {filename}: {size_kb:.1f} KB ({len(indices)} eras)")

# Update index.html
with open('index.html', 'r') as f:
    html = f.read()

old_scripts = '\n'.join([f'<script src="data-{i}.js"></script>' for i in range(1, 5)])
new_scripts = '\n'.join([f'<script src="data-{i}.js"></script>' for i in range(1, 6)])

if old_scripts in html:
    html = html.replace(old_scripts, new_scripts)
    print("Updated: 4 -> 5 script tags")
else:
    print("WARNING: old script tags not found, trying alternative...")
    # Try replacing in context
    html = html.replace(
        '<script src="data-1.js"></script>\n<script src="data-2.js"></script>\n<script src="data-3.js"></script>\n<script src="data-4.js"></script>',
        '<script src="data-1.js"></script>\n<script src="data-2.js"></script>\n<script src="data-3.js"></script>\n<script src="data-4.js"></script>\n<script src="data-5.js"></script>'
    )

old_combine = 'const eras = [...eras_part1, ...eras_part2, ...eras_part3, ...eras_part4];'
new_combine = 'const eras = [...eras_part1, ...eras_part2, ...eras_part3, ...eras_part4, ...eras_part5];'
if old_combine in html:
    html = html.replace(old_combine, new_combine)
    print("Updated: combine line")
else:
    print("WARNING: old combine line not found")

with open('index.html', 'w') as f:
    f.write(html)

print("\nDone.")
