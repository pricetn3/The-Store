#!/usr/bin/env python3
"""Link exported prototype pages to the shared design tokens.

Each Claude Design export carries its own copy of the tokens. This script adds
one <link> to design-system/tokens.css right after that copy, so the shared
file wins: change a token there, publish, and every linked page picks it up.
The page's own copy stays in place as a fallback if the shared file can't load.

Run it after every new export (it skips pages that are already linked):

    python3 tools/link_tokens.py            # link every export
    python3 tools/link_tokens.py --check    # only report which pages are linked
    python3 tools/link_tokens.py --unlink   # undo, restoring the original exports
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOKENS = "design-system/tokens.css"
MARKER = "data-cc-shared-tokens"
TEMPLATE_RE = re.compile(r'(<script type="__bundler/template">\s*)(".*?")(\s*</script>)', re.S)
LINK_RE = re.compile(r'\n?<link rel="stylesheet" href="[^"]*" ' + MARKER + r'>')


def encode(template):
    # Same encoding Claude Design uses, so untouched parts of a page stay byte-identical.
    return json.dumps(template, ensure_ascii=False).replace("</", "<\\u002F")


def process(path, mode):
    with open(path, encoding="utf-8") as f:
        page = f.read()
    m = TEMPLATE_RE.search(page)
    if not m:
        return "not a Claude Design export, skipped"
    template = json.loads(m.group(2))
    linked = MARKER in template

    if mode == "check":
        return "linked" if linked else "NOT linked"
    if mode == "unlink":
        if not linked:
            return "not linked"
        template = LINK_RE.sub("", template)
        result = "unlinked"
    else:
        if linked:
            return "already linked"
        root = template.find(":root")
        close = template.find("</style>", root) if root != -1 else -1
        if close == -1:
            return "no token block found, skipped"
        # Relative to the page, so it works on GitHub Pages and in local previews.
        depth = os.path.relpath(path, ROOT).count(os.sep)
        href = "../" * depth + TOKENS
        at = close + len("</style>")
        template = template[:at] + f'\n<link rel="stylesheet" href="{href}" {MARKER}>' + template[at:]
        result = "linked"

    page = page[:m.start(2)] + encode(template) + page[m.end(2):]
    with open(path, "w", encoding="utf-8") as f:
        f.write(page)
    return result


def main(argv):
    mode = "check" if "--check" in argv else "unlink" if "--unlink" in argv else "link"
    files = [a for a in argv if not a.startswith("--")]
    pages = [os.path.join(ROOT, p) for p in files] if files else sorted(glob.glob(os.path.join(ROOT, "*.html")))
    pages = [p for p in pages if os.path.basename(p) != "styleguide.html"]
    for p in pages:
        print(f"{os.path.relpath(p, ROOT):38} {process(p, mode)}")


if __name__ == "__main__":
    main(sys.argv[1:])
