# Paper credential authentication

The page someone sees after scanning the SuretyLock QR code printed on a paper credential. It confirms the paper copy is authentic, shows the credential's details, and sends the credential owner into the store.

This is step 1 of the paper authentication flow:

1. **Authenticate paper credential** (this page)
2. Log in to the store (existing auth flow)
3. Verify identity (existing 6-digit code)
4. Land on this credential in the store

- **Stakeholder prototype:** `credential-authentication.dc.html` (Claude Design export)
- **Developer reference:** this folder. It's plain HTML and CSS with no build step. Preview it from the repo root with `python3 -m http.server 8000`, then open `http://localhost:8000/handoff/paper-authentication/`.

## Files

| File | What it is |
|---|---|
| `index.html` | Page markup with sample data |
| `styles.css` | Page layout. Everything else comes from the design system. |
| `assets/paradigm-logo.svg` | Header logo |
| `assets/vhu-logo.svg` | Institution logo (sample: Virginia Hanock University) |
| `assets/surety-corner.svg` | Decorative SuretyLock corner art on the card |

Design system: `design-system/tokens.css` (tokens) and `design-system/components.css` (`cc-badge`, `cc-card`, `cc-btn`). Use these classes or your framework's equivalents. Don't copy hex values.

## Dynamic content

Everything in the credential card and the timestamp is sample data.

| Element | Source | Notes |
|---|---|---|
| Institution logo | Issuing institution | Height 36px, width auto. `alt` is the institution name. |
| Card left border color | Issuing institution's brand color | `--institution-accent`. The sample is `#0086C4`. |
| Institution | Credential record | |
| Recipient | Credential record | Long names wrap. They're never cut off. |
| Conferral date | Credential record | `MM/DD/YYYY`, in a `<time datetime>` element |
| Publisher | Credential record | |
| Accessed on | Time of this scan | `Mon, October 12th 2026 at 9:20 AM`, in the viewer's local time |

## Behavior

- **Access my credentials** goes to login (step 2). After login and verification, the user lands on **this** credential (step 4), not the credentials list. The prototype link (`auth-flow.dc.html?state=expired&src=scan&open=first`) passes this as `src=scan` and `open=first`. In production, pass the credential ID through as a return URL.
- The button opens in the same tab. The arrow icon is part of the design, not a new-tab signal.
- The page is public: anyone holding the paper credential can see it. Show only the four fields above. Never show contact details or any other personal information.
- **Not covered yet** (design to follow): a QR code that fails verification, a revoked credential, and a failed lookup.

## Responsive

Based on the width of the page content, not the device type.

| Width | Layout |
|---|---|
| < 520px | Each label sits above its value. Corner art is 120px. |
| 520–559px | Label and value side by side (116px label column) |
| ≥ 560px | 140px label column, 175px corner art |
| ≤ 400px | Tighter side padding, 24px heading |

Must work at 320px wide without horizontal scrolling (WCAG 1.4.10).

## Accessibility (WCAG 2.2 AA)

- One `h1` (the page title) and one `h2` (Credential details). Details are a `<dl>`.
- The badge says "Authenticated" in text, not just green (1.4.1). The lock icon is decorative (`aria-hidden`).
- The corner art is decorative: `alt=""`.
- The button is 40px tall and uses the 2px `--ring-focus` keyboard focus ring (2.4.7, 2.5.8).
- The timestamp uses `--gray-600`. `--gray-500` on the `--gray-50` page background is about 4.4:1, which is below the 4.5:1 minimum (1.4.3).
