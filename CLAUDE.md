# The Store: Credential Connections prototypes

Live prototypes published with GitHub Pages. The owner is a designer, not a developer: explain things in plain language and preview changes before publishing.

## How pages get here
- The prototype pages (`*.dc.html`, `index.html`) are **exports from Claude Design**. Each one is a self-contained bundle; the real HTML sits JSON-encoded inside `<script type="__bundler/template">`.
- Don't hand-edit these exports. Changes are made in Claude Design and re-exported. Edits made here would be overwritten by the next export.
- `emails/` holds plain HTML email templates, which can be edited directly.
- `handoff/` holds hand-written developer versions of finalized pages. The developers use **React**, so each page folder has:
  - a TypeScript component (`Name.tsx`) that takes the real data as props
  - a CSS Module (`Name.module.css`) that uses only tokens, plus the global `cc-*` component classes
  - an `assets/` folder
  - a `README.md` spec (props, behavior, responsive, accessibility)
  - an `index.html` preview that runs the component in the browser with no build step (React, ReactDOM and Babel from unpkg, with sample props), so it works on GitHub Pages

  Handoff files can be edited directly. There is no Node on this Mac, so check components with the preview. The Claude Design export stays the stakeholder prototype. When an export changes, update the matching handoff component to match.
- The drift check only reads tokens built into a page, so it wrongly says handoff pages have "no design tokens." To check one, run it on the page's CSS combined with `tokens.css` and `components.css` from the design system repo.

## Accessibility standard
Everything here must meet the **most recent WCAG version at level AA**. Today that's **WCAG 2.2 AA**. When a newer WCAG version is published, adopt it, check the design system and prototypes against it, and update this note (and the same section in `CC-Design-System/CLAUDE.md`), the style guide badge, and the drift check.

It applies to tokens, components, the style guide, every prototype, and every review or suggestion you make. Criteria that come up most often here:
- **Contrast (1.4.3, 1.4.11):** 4.5:1 for body text; 3:1 for large text (18px+, or 14px+ bold), icons, input borders, and focus indicators.
- **Focus (2.4.7, 2.4.11):** a visible focus ring on every interactive element (`--ring-focus`, 2px solid), never hidden behind sticky headers or overlays.
- **Target size (2.5.8):** interactive targets at least 24 × 24px. The smallest button is xs at 32px.
- **Not color alone (1.4.1):** status badges pair color with a text label.
- **Reflow (1.4.10):** layouts work at 320px wide without horizontal scrolling.

When something in the system or a prototype doesn't meet the standard, flag it to the owner in plain language with the criterion number, even when it wasn't asked about.

## Design system
The design system lives in its own repo, **`~/Documents/GitHub/CC-Design-System`** (https://pricetn3.github.io/CC-Design-System/). Its `CLAUDE.md` has the full workflow. Nothing design-system related lives in this repo any more.
- Every export here loads the shared tokens from `https://pricetn3.github.io/CC-Design-System/tokens.css` (one `<link data-cc-shared-tokens>` added after the export's own token block). A token change pushed to CC-Design-System updates these pages with no push here.
- `styleguide.html` here only forwards to the new style guide address.
- The master is the Credential Connections Design System in Claude Design. The repo mirrors it.
- The focus ring standard is the 2px solid `--ring-focus`.

## After every new export, before publishing
Run these from the CC-Design-System repo. They cover every page in this repo through its `prototypes.json`:
1. `python3 tools/link_tokens.py` links new exports to the shared tokens.
2. `python3 tools/drift_check.py` checks them; summarize the results for the owner in plain language.

## Publishing
This terminal has no GitHub sign-in (company-managed Mac, no admin rights, so GitHub CLI can't be installed). Commit on a branch, merge it into `main`, then ask the owner to click **Push origin** in GitHub Desktop. GitHub Pages goes live about 30 seconds later.

## Previewing
Serve pages over HTTP rather than opening them as files. Use the `site` launch configuration, which runs `python3 -m http.server 8000`.
