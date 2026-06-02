#!/usr/bin/env python3
"""Fix stray ASCII double quotes and missing single quotes in all data files."""
import os, glob

v3dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(v3dir)

for fname in sorted(glob.glob('data-*.js')):
    with open(fname, 'rb') as f:
        content = f.read()
    orig = content

    # Pattern 1: 。"}\n  — ASCII " before }, missing closing ' and comma
    # Fix:  。'},\n
    pattern1 = b'\xe3\x80\x82\x22\x7d'  # 。"}
    replacement1 = b'\xe3\x80\x82\x27\x7d\x2c'  # 。'},
    c1 = content.count(pattern1)
    if c1:
        content = content.replace(pattern1, replacement1)
        print(f"{fname}: fixed {c1} instances of 。\"}} (missing closing quote)")

    # Pattern 2: 。'"},\n  — ASCII " between closing ' and },
    # Fix: 。'},\n
    pattern2 = b'\xe3\x80\x82\x27\x22\x7d\x2c'  # 。'"},
    replacement2 = b'\xe3\x80\x82\x27\x7d\x2c'  # 。'},
    c2 = content.count(pattern2)
    if c2:
        content = content.replace(pattern2, replacement2)
        print(f"{fname}: fixed {c2} instances of 。'\"}} (stray ASCII double quote)")

    # Pattern 3: generic — any Chinese char + "'" + U+0022 + "}," where the " is ASCII
    # that appears at the end of a field value. Check for \x27\x22\x7d\x2c = '"},\n
    # But be careful - only fix where it's at end of field, not in middle of text.
    # For now, just report other potential issues.
    c3 = content.count(b"\x27\x22\x7d\x2c")
    if c3 > c2:
        print(f"{fname}: WARNING: {c3 - c2} additional instances of '\"}}, may need review")

    if content != orig:
        with open(fname, 'wb') as f:
            f.write(content)

print("\nDone.")
