# Credential Connections — Design System

A reusable design system for **Credential Connections**, a Paradigm product. CC is a B2B platform used by both internal Paradigm staff and external clients (universities, registrars, learners) to **order and manage diplomas, certificates, micro-credentials, signatures, and other client documents**. It is an enterprise SaaS dashboard: lots of tables, order pipelines, organization profile data, document review queues, and shipping/billing workflows.

## Sources of truth

| Source | Role |
|---|---|
| `❖ Design System.fig` (mounted Figma — full library) | **primary source.** 87 pages: Foundations, Components, Application Pages (Home / Org-Tab / Orders / Reports / Users / Signatures / Client-Docs) |
| `assets/logos/cc-wordmark.svg`, `cc-icon.svg` | Lifted directly from `/Logos/Logo` in the Figma |
| `assets/logos/cc-logo-darkblue.png` | The dark-blue "CC" mark used as a square app/favicon style logo |
| `assets/logos/harvard-university.png`, `harvard-law.png` | Customer logos used throughout the Figma's example screens — kept so prototypes look real |

No GitHub repository or external codebase was provided — everything in this system is derived from the Figma library plus its sample application pages.

## Index

| File | What it is |
|---|---|
| `README.md` | This file. Brand context, content rules, visual rules, iconography. |
| `colors_and_type.css` | All design tokens (CSS variables) + semantic `.cc-*` type classes. **Import this on every page.** |
| `SKILL.md` | Agent-skill frontmatter so this folder can be dropped into Claude Code. |
| `assets/logos/` | Wordmark, icon mark, and the Harvard customer logos used in sample screens. |
| `assets/icons/` | Inline copy of the [Lucide](https://lucide.dev) icon set we proxy to (see *Iconography*). |
| `preview/` | One small HTML card per token group — these are what the project's Design System tab renders. |
| `ui_kits/credential-connections-app/` | The actual product UI: home, orders, org tab, place-order flow. `index.html` is a click-thru prototype; the JSX files are the building blocks. |

## Quick-start in HTML

```html
<link rel="stylesheet" href="../colors_and_type.css">
<h1 class="cc-display-sm">Welcome back, Olivia</h1>
<button style="
  background: var(--blue-600); color: #fff;
  font: var(--fw-medium) 14px/20px var(--font-body);
  border: none; border-radius: var(--radius-md);
  padding: 10px 14px;
  box-shadow: var(--shadow-button-primary);
">New order</button>
```

---

## Content fundamentals

The product copy is **terse, neutral, and instruction-first.** It speaks to two audiences (Paradigm internal staff and university clients) so it avoids cute language entirely. There is no marketing voice here, only operational voice.

**Tone & voice**

- **Direct and operational.** Verbs lead button labels: `New order`, `Add organization`, `Invite user`, `Switch dashboard`, `Place order`, `View`, `Submit signature`, `Release hold`. Never "Let's…" or "Get started by…".
- **Second-person addressed sparingly.** Headlines use the user's name ("Welcome back, Olivia"; "Welcome, Taylor") rather than "Welcome to your dashboard."
- **No exclamation marks. No emoji. No idioms.** This is registrar-grade software.
- **Numbers are first-class.** "3 of 4 sections complete", "Page 1 of 4", "vs last 30 days", "8.6%", "75%". Numerals over words, even under ten.
- **Status verbs over status adjectives.** `Processing`, `Cancelled`, `On hold`, `Complete`, `Pending`, `Scheduled`, `Expired`. Past- or present-progressive, never "active/inactive".

**Casing**

- **Sentence case everywhere.** Buttons, headings, table column headers, nav items. (`Order overview`, not `Order Overview` — though our Home dashboard's "Order Overview" / "Order breakdown" headings use Title Case for the *one* card heading-row pattern. We keep that.)
- **Proper nouns kept**: org names ("Harvard University", "Harvard Law"), product names ("Diplomas & Certificates", "Micro-credentials").
- **Sections in the sidebar use Title Case** ("Diplomas & Certificates") — they're labels, not sentences.

**I vs. you**

- We speak as the platform to the user: "you / your". The product itself is "the platform" or it is named directly ("Credential Connections"). Avoid "we" outside of system errors.

**Punctuation**

- En-dash for ranges (`Jan 1 – Jan 31`), not "to".
- Ampersand `&` is fine in nav labels (`Diplomas & Certificates`) but not in body copy.
- No Oxford-comma religion either way — match the surrounding string.

**Examples lifted from the file**

> "Welcome back, Olivia"  
> "16 January, 2025"  
> "Switch dashboard" · "New order" · "Invite user" · "Add organization"  
> "Order Overview" · "Order breakdown" · "Processing orders"  
> "8.6% vs last 30 days"  
> "3 of 4 sections complete"  
> "Profile completion" · "Shipping" · "Billing" · "Contacts" · "Punctuation data"  
> "Quick actions" · "Products" · "1 active"

---

## Visual foundations

The library is a careful adaptation of **Untitled UI** for a credentialing context. It keeps Untitled's restraint and density but pulls every accent toward a single blue (`--blue-600 #0B6CB7`) anchored by a navy wordmark (`--cc-navy #29334A`). The look is *registrar / institutional / official* — not playful, not trendy.

**Color**

- **One brand blue, no gradients.** Every CTA, every link, every focus ring is a tint of the same blue ramp (`--blue-25` through `--blue-900`). The primary action color is `--blue-600`; link text uses `--blue-800`; the sidebar tint is `--blue-25`. There are no purple/teal accent colors and the palette never mixes warms (no orange + blue duotones).
- **Warm-neutral gray.** The grays lean slightly warm (Untitled UI "gray-iron" family). Hairlines are `--gray-200`, secondary text `--gray-600`, primary text `--gray-900` (almost-black, not pure).
- **Semantic colors are reserved for status.** Success / warning / error each ship in a 3-step pair (50 background, 200 border, 500/700 fg). They show up in badges, hold-state pills, validation, and the trend deltas on metric cards. They are *never* used decoratively.
- **Backgrounds.** The internal admin canvas is pure `#ffffff`. The external client canvas is `--gray-50` (`rgb(250,250,250)`). The left sidebar is `--blue-25`. That contrast is the only structural color move.

**Type**

- **Inter, every weight, every size.** No serif, no display face. Body sits at 14/20 medium for UI and 16/24 regular for prose. Headings are 18→30px semibold in app surfaces; display sizes (36→72px) are for marketing/empty-state moments only.
- **Negative letter-spacing on display sizes** (`-2%`) tightens larger headings. Body is unchanged.
- **Numerals are proportional** (not tabular by default) — switch to `font-variant-numeric: tabular-nums` inside tables and metric KPIs.

**Spacing**

- **4-pt base.** All spacing values are multiples of 4 (with a 2 and a 6 and a 10 sneaking in). Cards are padded 20–24; sections gap 24–32; page edges are 32 on desktop. Density is intentionally medium — neither airy marketing nor cramped admin.

**Backgrounds & imagery**

- **No hand-illustrated scenes, no AI imagery, no gradients.** Empty states use a single thin-stroke icon at 48px, centered. The marketing surfaces (404 page, login) include a subtle full-bleed photograph (educational settings — graduation, books, campus). Photography is warm-cool neutral, never heavily filtered. The Figma file ships a `Background-elements` page with a soft *grid* and *radial* pattern — used very sparingly behind hero blocks, never on app surfaces.
- **No repeating textures.** No mesh gradients.

**Animation**

- **Conservative.** Transitions are 150–200ms `cubic-bezier(0.2, 0.6, 0.2, 1)`. Common moves: color/opacity fades on hover, 1px translate on press, drawer/modal slide-in 240ms. No bounces, no scale-pop, no Lottie. Loading indicators are the spinner from `/Loading-indicators` (a 4-segment ring) or a striped linear bar.

**Hover & press states**

- **Hover = next-step-darker bg, no lift.** Primary button hover swaps `--blue-600` → `--blue-700`. Secondary hover tints the white surface to `--gray-50`. Link hover deepens text color one step.
- **Press = inset shadow, no scale.** Buttons keep the `inset 0 -2px 0 rgba(10,13,18,0.05)` "weight" shadow always; on press the inset deepens, the button does *not* shrink.
- **Focus = 4px ring.** `0 0 0 4px rgba(56, 136, 197, 0.24)` outside, white halo inside (see `--ring-focus`). Always visible — accessibility-first.

**Borders**

- **1px hairline, `--gray-200`** (`rgb(233,234,235)`) for almost everything. `--gray-300` for inputs and stronger separators. Borders almost never go heavier than 1px. Cards use border *plus* `--shadow-xs`, not shadow alone.

**Shadows**

- **`--shadow-xs` does 90% of the work.** It's `0 1px 2px 0 rgba(10,13,18,0.05)`. Cards, buttons, badges all use it. Heavier elevations (`md`, `lg`, `xl`) only appear under modals, dropdowns, slideouts.
- **Inset shadow is a brand tic.** Primary buttons carry `inset 0 0 0 1px rgba(0,0,0,0.2)` for a subtle "extruded" look. Secondary buttons carry `inset 0 -2px 0 0 rgba(10,13,18,0.05)`. Inputs use `inset 0 0 0 1px` borders so they don't blur with shadow.
- **No outer glows.** Even error/warning highlights use a colored border, not a colored shadow.

**Corner radii**

- **Components: 8px (`--radius-md`).** Buttons, inputs, badges-as-pills.
- **Cards & containers: 10–12px (`--radius-lg` / `--radius-xl`).**
- **Badge-square: 6px (`--radius-sm`).** Badge-pill: full.
- **No 16px+ "soft" radii on UI chrome.** Bigger radii (16, 20, 24) exist as tokens for marketing surfaces only.

**Transparency & blur**

- **Used only to soften imagery, never for UI surfaces.** No frosted-glass nav, no glassmorphism cards. The overlay behind modals is `rgba(10,13,18,0.40)` flat, no backdrop blur.
- **Subtle inset whites** (`rgba(255,255,255,0.12)`, `0.5`, `0.8`) appear on dark hero/footer treatments only.

**Layout rules**

- **Sidebar nav is fixed at 270px** (open) / **64px** (slim). Light-blue background, content nudged inside `padding: 24px 12px`.
- **App content frame is fluid** within a 1080–1144px content column.
- **Top of every app page has a `Page header`** (avatar, name, date, primary CTAs on right) followed by a tabs+date-picker strip, then the content cards.
- **Mobile: sidebar collapses to a 64px topbar with hamburger.**

**Cards (what they look like)**

```
background:    #ffffff
border:        1px solid var(--gray-200)
border-radius: 12px
shadow:        var(--shadow-xs)
padding:       20–24px
heading row:   14px/20 bold gray-900, with 12px top / 8px bottom padding
```

Cards never have a colored left border, a colored heading bar, or a gradient. They lean on whitespace + a hairline.

---

## Iconography

The library uses the **Untitled UI icon set** — which is functionally a re-skin of **Lucide** (1.5px stroke, square caps, 24×24 grid, two-tone where icons need depth). 7000+ icons live under `/Icons/` in the Figma file, organized into `General`, `Arrows`, `Files`, `Communication`, `Charts`, `Time`, `Users`, `Education`, etc.

**For our purposes we proxy to Lucide via CDN** and substitute icon by name. This is a near-pixel-perfect match (Lucide is the open-source spine of the Untitled set) and saves us from copying ~7000 SVGs.

```html
<!-- Inline SVG, by name -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="file-text" style="color: var(--gray-700); width: 20px; height: 20px;"></i>
<script>lucide.createIcons();</script>
```

> **Flag:** the Figma's icons are *the* Untitled UI set. Lucide is the closest free equivalent and visually indistinguishable at UI sizes; if absolute fidelity matters, swap in licensed Untitled UI SVGs and drop them into `assets/icons/`.

**Sizing**

- 16px in dense table rows / button-icons next to 12px text
- 20px in body buttons + sidebar nav items (the most common)
- 24px in card headers
- 32–48px in empty states (gray-400 stroke)

**Color rules**

- Nav & button icons inherit `currentColor` from the text beside them.
- Status icons (check / alert / x-circle) carry their semantic color directly: `--success-500`, `--warning-500`, `--error-500`.
- Decorative icons in feature cards or empty states use `--gray-400`.

**No emoji. No unicode glyphs.** Emoji appear nowhere in the library. The only non-icon-font glyphs we use are:
- Math symbols inside data (`%`, `+`, `−`)
- The ampersand `&` in nav labels

**No raster icons.** Everything is SVG. The only PNGs in `assets/` are full-color logos (CC mark + customer logos).

---

## Caveats

- **No production codebase was attached** — every component decision is derived from the Figma library. Spacing values and exact pixel measurements come from the JSX pseudocode; some per-character text styling, gradient stops, and noise effects may differ from a real implementation.
- **Lucide ≠ Untitled UI icons** at the SVG level even though they share stroke vocabulary. Visual swap is safe; legal/license swap requires Untitled UI licensing.
- **Inter is loaded from Google Fonts**, not embedded. If you need fully-offline assets, drop `.woff2` files into `fonts/` and switch the `@import` in `colors_and_type.css` to a local `@font-face`.
- **No marketing-site UI kit** was built — the Figma includes a marketing-website folder, but the product itself is the application, so the UI kit focuses there.
