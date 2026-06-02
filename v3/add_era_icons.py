#!/usr/bin/env python3
"""Add icon field to all 19 eras."""
import os, re

v3dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(v3dir)

ICONS = {
    'shanggu': '🔥',
    'xia': '🏯',
    'shang': '🐢',
    'western-zhou': '🏛️',
    'spring-autumn': '📜',
    'warring-states': '⚔️',
    'qin': '🗿',
    'han': '🐎',
    'three-kingdoms': '⚔️',
    'jin': '🖌️',
    'northern-southern': '🛕',
    'sui': '🌊',
    'tang': '🏮',
    'five-dynasties': '⚔️',
    'song': '🏺',
    'yuan': '🏹',
    'ming': '⛵',
    'qing': '🐉',
    'modern': '🚀',
}

for fn in sorted(f for f in os.listdir('.') if f.startswith('data-') and f.endswith('.js')):
    with open(fn, 'r') as f:
        content = f.read()

    modified = False
    for era_id, icon in ICONS.items():
        # Find the era entry
        pattern = r"\{ id:'" + era_id + r"', name:'([^']+)',"
        m = re.search(pattern, content)
        if not m:
            continue

        # Check if icon already exists
        if "icon:'" in m.group(0):
            continue

        era_name = m.group(1)
        old = f"{{ id:'{era_id}', name:'{era_name}',"
        new = f"{{ id:'{era_id}', name:'{era_name}', icon:'{icon}',"
        if old in content:
            content = content.replace(old, new)
            modified = True
            print(f'  [{fn}] {era_name} → {icon}')

    if modified:
        with open(fn, 'w') as f:
            f.write(content)

print('\nDone.')
