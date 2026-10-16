# The Store: Credential Connections prototypes

Live prototypes published with GitHub Pages. The owner is a designer, not a developer: explain things in plain language and preview changes before publishing.

## How pages get here
- The prototype pages (`*.dc.html`, `index.html`) are **exports from Claude Design**. Each one is a self-contained bundle; the real HTML sits JSON-encoded inside `<script type="__bundler/template">`.
- Don't hand-edit these exports. Changes are made in Claude Design and re-exported. Edits made here would be overwritten by the next export.
- `emails/` holds plain HTML email templates, which can be edited directly.

## Design system (source of truth)
- `design-system/tokens.css`: the canonical token values (colors, type, spacing, radius, shadows). Every export should carry exactly this set.
- `design-system/components.css`: the standard recipes for buttons (36/40/44), inputs, badges, cards and links.
- `styleguide.html`: the living style guide, rendered from the two files above. It is published on GitHub Pages at `/styleguide.html`.
- `design-system/drift-allowlist.json`: non-token colors that are allowed (partner brands, third-party buttons). Each entry has a note.

## Before publishing a new export
Run the drift check and summarize the results for the owner in plain language:

```
python3 tools/drift_check.py
```

Errors mean something differs from the system; warnings mean it works but should use a token or a standard size. If a token value changes on purpose, update `tokens.css` to match.

## Previewing
Pages that load `design-system/*.css` must be served over HTTP, not opened as files. Use the `site` launch configuration, which runs `python3 -m http.server 8000`.
