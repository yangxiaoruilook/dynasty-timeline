#!/usr/bin/env python3
"""Fix stray double quote issue in data-2.js line 74."""
with open('data-2.js', 'r') as f:
    content = f.read()

# The impact text of 郡县制雏形 ends with 对比。 not with a Chinese quote
# Fix: remove the stray character between 对比。 and },
old = '对比。”'"},'
new = '对比。'},'
if old in content:
    content = content.replace(old, new)
    print("Fixed")
else:
    print("old pattern not found, looking for variants...")
    # Search for 对比。 plus anything up to },
    import re
    for m in re.finditer(r'对比。.{0,10}', content):
        print(f"Found: {repr(m.group())}")

with open('data-2.js', 'w') as f:
    f.write(content)
