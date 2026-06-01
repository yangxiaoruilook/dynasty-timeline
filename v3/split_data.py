#!/usr/bin/env python3
"""Split data.js into 4 smaller files to prevent CDN truncation."""
import re

with open('data.js', 'r') as f:
    content = f.read()

# Extract the content between 'const eras = [' and the final '];'
match = re.search(r'const eras = \[(.*)\];', content, re.DOTALL)
if not match:
    print("ERROR: Could not parse data.js")
    exit(1)

era_content = match.group(1)

# Split by era objects - each starts with '{ id:' (possibly with leading whitespace)
# Split while preserving the delimiter
eras = re.split(r'(\n  \{ id:)', era_content)
# eras[0] is before first era (just whitespace)
# eras[1] = '\n  { id:', eras[2] = 'ancient...', eras[3] = '\n  { id:', eras[4] = 'xia...', etc.

# Recombine: for i in range(1, len(eras), 2): prefix+content = full era block
era_blocks = []
for i in range(1, len(eras), 2):
    prefix = eras[i]  # '\n  { id:'
    content = eras[i+1] if i+1 < len(eras) else ''
    era_blocks.append(prefix + content)

print(f"Found {len(era_blocks)} eras")

# Split into 4 groups
chunk_size = 5  # roughly 5 eras per file
files = []
for i in range(0, len(era_blocks), chunk_size):
    chunk = era_blocks[i:i+chunk_size]
    files.append(chunk)

print(f"Splitting into {len(files)} files: {[len(f) for f in files]}")

# Write each file
var_names = []
for idx, chunk in enumerate(files):
    varname = f'eras_part{idx+1}'
    var_names.append(varname)

    # Join era blocks with proper formatting
    body = ','.join(chunk)  # no extra newline since chunk already has \n prefix

    file_content = f'const {varname} = [{body}\n];\n'

    filename = f'data-{idx+1}.js'
    with open(filename, 'w') as f:
        f.write(file_content)
    print(f"  {filename}: {len(file_content)} bytes")

# Update index.html to load split files + combine
with open('index.html', 'r') as f:
    html = f.read()

old_script = '<script src="data.js"></script>'
new_scripts = '\n'.join([f'<script src="data-{i+1}.js"></script>' for i in range(len(files))])
new_scripts += f'\n<script>const eras = [{"...".join(var_names)}];</script>'

html = html.replace(old_script, new_scripts)

with open('index.html', 'w') as f:
    f.write(html)

print(f"Updated index.html: new script tags inserted")
print("Done!")
