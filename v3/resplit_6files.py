#!/usr/bin/env python3
"""Re-split 19 eras across 6 files, all under 200 KB."""
import re, os

v3dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(v3dir)

# Extract all eras from all 5 current files
all_eras = []
for fname in ['data-1.js', 'data-2.js', 'data-3.js', 'data-4.js', 'data-5.js']:
    with open(fname, 'r') as f:
        content = f.read()
    parts = re.split(r'(\n  \{ id:)', content)
    for i in range(1, len(parts), 2):
        prefix = parts[i]
        body = parts[i+1] if i+1 < len(parts) else ''
        block = (prefix + body).strip()
        if block.endswith('];'):
            block = block[:-2].strip()
        if block.endswith(']'):
            block = block[:-1].strip()
        if block.endswith(','):
            block = block[:-1].strip()
        all_eras.append(block)

print(f"Extracted {len(all_eras)} eras\n")

# Show sizes
for i, e in enumerate(all_eras):
    m = re.search(r"id:'(\S+)'.*?name:'([^']+)'", e)
    if m:
        print(f"  {i:2d}. {m.group(1):20s} {m.group(2):8s}  {len(e.encode('utf-8'))/1024:.0f} KB")

# New 6-file distribution
groups = [
    [0, 1, 2, 3, 4],       # 上古 夏 商 西周 春秋
    [5, 6, 7],              # 战国 秦 汉
    [8, 9, 10, 11],         # 三国 两晋 南北朝 隋
    [12, 13, 14],           # 唐 五代 宋
    [15, 16],               # 元 明
    [17, 18],               # 清 近现代
]

var_names = []
for idx, indices in enumerate(groups):
    chunk = [all_eras[i] for i in indices]
    varname = f'eras_part{idx+1}'
    var_names.append(varname)

    body = ',\n  '.join(chunk)
    file_content = f'const {varname} = [\n  {body}\n];\n'

    filename = f'data-{idx+1}.js'
    with open(filename, 'w') as f:
        f.write(file_content)
    size_kb = len(file_content.encode('utf-8')) / 1024
    status = 'OK' if size_kb < 200 else 'OVER!'
    print(f"  -> {filename}: {size_kb:.0f} KB ({len(indices)} eras) [{status}]")

# Update index.html
with open('index.html', 'r') as f:
    html = f.read()

# Replace script tags (5 -> 6)
old_scripts = '\n'.join([f'<script src="data-{i}.js"></script>' for i in range(1, 6)])
new_scripts = '\n'.join([f'<script src="data-{i}.js"></script>' for i in range(1, 7)])

if old_scripts in html:
    html = html.replace(old_scripts, new_scripts)
    print("Updated: 5 -> 6 script tags")
else:
    print("WARNING: old script tags not found")

# Update combine line
old_combine = 'const eras = [...eras_part1, ...eras_part2, ...eras_part3, ...eras_part4, ...eras_part5];'
new_combine = 'const eras = [...eras_part1, ...eras_part2, ...eras_part3, ...eras_part4, ...eras_part5, ...eras_part6];'
if old_combine in html:
    html = html.replace(old_combine, new_combine)
    print("Updated: combine line")
else:
    print("WARNING: old combine line not found")

with open('index.html', 'w') as f:
    f.write(html)

# Verify all files
print("\n=== Verification ===")
for fname in [f'data-{i}.js' for i in range(1, 7)]:
    result = os.system(f'node --check {fname} 2>&1')
    size = os.path.getsize(fname) / 1024
    print(f"  {fname}: {size:.0f} KB syntax {'OK' if result == 0 else 'FAIL'}")

total = sum(os.path.getsize(f'data-{i}.js') for i in range(1, 7)) / 1024
print(f"\nTotal: {total:.0f} KB across 6 files")

print("\nDone.")
