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

## Shared tokens on live pages
Every export is linked to `design-system/tokens.css`: `tools/link_tokens.py` adds one `<link data-cc-shared-tokens>` right after the export's own token block, so the shared file wins and the built-in copy is only a fallback. Changing a token value in `tokens.css` and publishing updates every linked page. Components are still built into each export, so component changes need a re-export from Claude Design.

Other prototype repos (in `~/Documents/GitHub`) are linked to the same file by its full web address, `https://pricetn3.github.io/The-Store/design-system/tokens.css`, so a token change pushed here updates them too:
- `CC-External-Prototype`: `external.html`, `internal.html` (`index.html` is a plain menu page, not an export)

`CC-Internal-Prototype` and `The-Store-Viewer` are retired (2026-10-16): their content now lives in the prototypes above. Don't update them.

After a new export in one of those repos, link it by path: `python3 tools/link_tokens.py <path to page>`. That repo then needs its own push.

The focus ring standard is the 2px solid `--ring-focus` (the owner chose it over the older 4px soft halo for accessibility).

The master is the Credential Connections Design System in Claude Design. Change tokens there first, then mirror the change in `tokens.css`. Don't make token changes only in the repo.

## After every new export, before publishing
1. Link it to the shared tokens (skips pages already linked):
   ```
   python3 tools/link_tokens.py
   ```
2. Run the drift check and summarize the results for the owner in plain language:
   ```
   python3 tools/drift_check.py
   ```
   Errors mean something differs from the system (including an unlinked export); warnings mean it works but should use a token or a standard size.

## Publishing
This terminal has no GitHub sign-in (company-managed Mac, no admin rights, so GitHub CLI can't be installed). Commit on a branch, merge it into `main`, then ask the owner to click **Push origin** in GitHub Desktop. GitHub Pages goes live about 30 seconds later.

## Previewing
Pages that load `design-system/*.css` must be served over HTTP, not opened as files. Use the `site` launch configuration, which runs `python3 -m http.server 8000`.
