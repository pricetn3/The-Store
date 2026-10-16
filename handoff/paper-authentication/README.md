# Paper credential authentication

The page someone sees after scanning the SuretyLock QR code printed on a paper credential. It confirms the paper copy is authentic, shows the credential's details, and sends the credential owner into the store.

This is step 1 of the paper authentication flow:

1. **Authenticate paper credential** (this page)
2. Log in to the store (existing auth flow)
3. Verify identity (existing 6-digit code)
4. Land on this credential in the store

- **Stakeholder prototype:** `credential-authentication.dc.html` (Claude Design export)
- **Developer reference:** this folder. It holds a React component (TypeScript, CSS Modules).
- **Live preview:** `handoff/paper-authentication/` on GitHub Pages. To run it locally, start `python3 -m http.server 8000` from the repo root and open `http://localhost:8000/handoff/paper-authentication/`.

## Files

| File | What it is |
|---|---|
| `PaperAuthentication.tsx` | The component |
| `PaperAuthentication.module.css` | Page layout. Everything else comes from the design system. |
| `assets/paradigm-logo.svg` | Header logo |
| `assets/surety-corner.svg` | Decorative SuretyLock corner art on the card |
| `assets/vhu-logo.svg` | Sample institution logo. In production it comes from the institution's data. |
| `index.html` | Preview only. It runs the component in the browser without a build step. Don't copy it into the app. |

## Using it

The component needs the design system stylesheets loaded once, globally (for example in your root layout):

```ts
import 'path/to/design-system/tokens.css';      // tokens: colors, type, spacing, radius, shadows
import 'path/to/design-system/components.css';  // cc-badge, cc-card, cc-btn
```

Inter (weights 400–700) also needs to be loaded.

```tsx
import { PaperAuthentication } from './PaperAuthentication';

<PaperAuthentication
  institution={{ name: 'Virginia Hanock University', logoUrl: '/logos/vhu.svg', accentColor: '#0086C4' }}
  recipientName="Maya Wright"
  conferralDate="2026-03-16"
  publisher="Paradigm, Inc."
  accessedAt={scan.timestamp}
  accessHref={`/login?returnTo=/credentials/${credential.id}`}
/>
```

The `.svg` imports and the CSS Module work with the default setup of Vite, Next.js and Create React App. TypeScript projects need the usual `*.svg` / `*.module.css` type declarations, which these setups already include.

If the app already has a shared header and footer, keep the parts of the component inside `<main>` and drop its own header and footer.

## Props

| Prop | Type | Notes |
|---|---|---|
| `institution.name` | `string` | Shown as Institution, and used as the logo's alt text |
| `institution.logoUrl` | `string` | Shown 36px tall, width auto |
| `institution.accentColor` | `string` | The card's left border. Sample: `#0086C4`. |
| `recipientName` | `string` | Long names wrap. They're never cut off. |
| `conferralDate` | `string` | ISO date (`2026-03-16`), shown as `03/16/2026`. Formatted from the string, so it never shifts with time zones. |
| `publisher` | `string` | |
| `accessedAt` | `Date` | The time of the scan, shown as `Mon, October 12th 2026 at 9:20 AM` in the viewer's local time. Pass it in rather than creating it in the component, so server and browser renders match. |
| `accessHref` | `string` | Login URL that carries the credential ID (see Behavior) |

## Behavior

- **Access my credentials** goes to login (step 2). After login and verification, the user lands on **this** credential (step 4), not the credentials list, so `accessHref` has to carry the credential ID through as a return URL. The prototype does this with `src=scan&open=first`.
- The button opens in the same tab. The arrow icon is part of the design, not a new-tab signal.
- The page is public: anyone holding the paper credential can see it. Show only the four fields above. Never show contact details or any other personal information.
- **Not covered yet** (design to follow): a QR code that fails verification, a revoked credential, and a failed lookup.

## Responsive

| Viewport width | Layout |
|---|---|
| < 520px | Each label sits above its value. Corner art is 120px. |
| 520–559px | Label and value side by side (116px label column) |
| ≥ 560px | 140px label column, 175px corner art |
| ≤ 400px | Tighter side padding, 24px heading |

Must work at 320px wide without horizontal scrolling (WCAG 1.4.10).

## Accessibility (WCAG 2.2 AA)

- One `h1` (the page title) and one `h2` (Credential details). Details are a `<dl>`, and dates use `<time dateTime>`.
- The badge says "Authenticated" in text, not just green (1.4.1). The lock icon is decorative (`aria-hidden`).
- The corner art is decorative: `alt=""`.
- The button is 40px tall and uses the 2px `--ring-focus` keyboard focus ring (2.4.7, 2.5.8).
- The timestamp uses `--gray-600`. `--gray-500` on the `--gray-50` page background is about 4.4:1, which is below the 4.5:1 minimum (1.4.3).
