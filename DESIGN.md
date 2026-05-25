---
version: alpha
name: Matt — UX Portfolio
description: >
  Type-led, monochrome-plus-one-accent visual system for a UX designer's portfolio.
  Built for agent consumption: tokens are the normative truth; prose explains intent.
colors:
  # Core surface + ink
  primary: "#0A0A0A"            # near-black ink, used for body/headlines on light surfaces
  on-primary: "#FFFFFF"          # ink for surfaces filled with primary
  neutral: "#FFFFFF"             # canvas
  on-neutral: "#0A0A0A"          # ink on neutral
  surface: "#FAFAFA"             # subtly off-white panels (cards, code blocks)
  on-surface: "#0A0A0A"
  surface-muted: "#F2F2F2"       # rule lines, dividers, hairlines
  muted: "#6B6B6B"               # secondary text (metadata, captions, dates)

  # Brand accent — the only chromatic color in the system
  accent: "#006B75"              # deep teal: links, CTAs, focus rings, single signature mark
  on-accent: "#FFFFFF"
  accent-hover: "#005A63"        # 10% darker for hover/active
  accent-soft: "#E5F2F3"         # accent-tinted background for callouts and tags

  # Semantic feedback (used sparingly — almost never appears on this portfolio)
  success: "#0E7C57"
  warning: "#B45309"
  danger:  "#B42318"

  # Optional dark-mode counterparts (engaged via the `.dark` class)
  primary-dark: "#FFFFFF"
  on-primary-dark: "#0A0A0A"
  neutral-dark: "#0B0B0B"
  on-neutral-dark: "#FAFAFA"
  surface-dark: "#141414"
  on-surface-dark: "#FAFAFA"
  surface-muted-dark: "#1F1F1F"
  muted-dark: "#A1A1A1"
  accent-dark: "#5BD3DE"          # tinted accent that retains ≥ 4.5:1 on dark neutral
  on-accent-dark: "#0A0A0A"

typography:
  # Display — Instrument Serif (free; editorial gravitas; used for hero + case-study titles only)
  display-xl:
    fontFamily: "Instrument Serif"
    fontSize: 5.5rem        # 88px
    lineHeight: 1.02
    letterSpacing: -0.02em
    fontWeight: 400
  display-lg:
    fontFamily: "Instrument Serif"
    fontSize: 4rem          # 64px
    lineHeight: 1.05
    letterSpacing: -0.02em
    fontWeight: 400
  display-md:
    fontFamily: "Instrument Serif"
    fontSize: 3rem          # 48px
    lineHeight: 1.1
    letterSpacing: -0.015em
    fontWeight: 400

  # Headings — Inter (UI sans; most-common typeface in surveyed modern designer portfolios)
  h1:
    fontFamily: Inter
    fontSize: 2.5rem        # 40px
    lineHeight: 1.15
    letterSpacing: -0.02em
    fontWeight: 600
  h2:
    fontFamily: Inter
    fontSize: 1.875rem      # 30px
    lineHeight: 1.2
    letterSpacing: -0.015em
    fontWeight: 600
  h3:
    fontFamily: Inter
    fontSize: 1.375rem      # 22px
    lineHeight: 1.3
    letterSpacing: -0.01em
    fontWeight: 600
  h4:
    fontFamily: Inter
    fontSize: 1.125rem      # 18px
    lineHeight: 1.35
    fontWeight: 600

  # Body — Inter
  body-lg:
    fontFamily: Inter
    fontSize: 1.1875rem     # 19px — comfortable long-form
    lineHeight: 1.6
    fontWeight: 400
  body-md:
    fontFamily: Inter
    fontSize: 1rem          # 16px — default UI body
    lineHeight: 1.55
    fontWeight: 400
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem      # 14px — supporting copy
    lineHeight: 1.5
    fontWeight: 400

  # Meta — tags, timestamps, kicker labels
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem       # 12px
    lineHeight: 1.4
    letterSpacing: 0.08em
    fontWeight: 500
    fontFeature: "ss01"

  # Mono — code, keyboard hints, version chips
  mono:
    fontFamily: "JetBrains Mono"
    fontSize: 0.8125rem     # 13px
    lineHeight: 1.5
    fontWeight: 400

rounded:
  none: 0px
  sm:   4px
  md:   8px
  lg:   12px
  xl:   20px
  pill: 999px

spacing:
  # Hybrid 4/8 raw ladder (per attached Spacing Design Guide §Recommended scale)
  "0":    0px
  "025":  2px
  "050":  4px
  "075":  6px
  "100":  8px
  "150":  12px
  "200":  16px
  "250":  20px
  "300":  24px
  "400":  32px
  "500":  40px
  "600":  48px
  "800":  64px
  "1000": 80px
  "1200": 96px
  "1600": 128px

components:
  # Page-level structural tokens (responsive aliases live in §Layout prose)
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"

  # Body link — accent + thin underline by default; bolder on hover
  link:
    textColor: "{colors.accent}"

  link-hover:
    textColor: "{colors.accent-hover}"

  # Primary CTA — filled, used only once per view (resume, contact)
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
    typography: "{typography.body-md}"

  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"

  # Secondary CTA — outlined, used for nav-level affordances
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    rounded: "{rounded.md}"
    padding: 12px
    typography: "{typography.body-md}"

  button-secondary-hover:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"

  # Tag / kicker chip
  tag:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: 6px
    typography: "{typography.label-caps}"

  # Work card on the home / index grid
  work-card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    rounded: "{rounded.lg}"
    padding: 24px

  # Soft callout used inside MDX case studies
  callout:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 16px

  # Nav bar
  nav:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    padding: 16px

  # Focus ring — used on every interactive element
  focus-ring:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"

  # Surface card — uses surface/on-surface for subtly lifted panels
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px

  # Feedback components — semantic colors used as accents on neutral
  feedback-success:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.success}"
    rounded: "{rounded.md}"
    padding: 12px

  feedback-warning:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.warning}"
    rounded: "{rounded.md}"
    padding: 12px

  feedback-danger:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.danger}"
    rounded: "{rounded.md}"
    padding: 12px

  # Dark-mode page surfaces (engaged via the `.dark` class on <html>)
  page-dark:
    backgroundColor: "{colors.neutral-dark}"
    textColor: "{colors.on-neutral-dark}"

  surface-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-surface-dark}"
    rounded: "{rounded.lg}"
    padding: 24px

  nav-dark:
    backgroundColor: "{colors.neutral-dark}"
    textColor: "{colors.on-neutral-dark}"
    padding: 16px

  link-dark:
    textColor: "{colors.accent-dark}"

  button-primary-dark:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.on-primary-dark}"
    rounded: "{rounded.md}"
    padding: 12px

  tag-dark:
    backgroundColor: "{colors.surface-muted-dark}"
    textColor: "{colors.muted-dark}"
    rounded: "{rounded.pill}"
    padding: 6px

  button-primary-dark-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.on-accent-dark}"
---

## Overview

**Architectural minimalism meets journalistic gravitas.** This portfolio is a calm, type-led space whose job is to make hiring managers and design leaders trust Matt within the first scroll. Two typographic voices, one accent color, and disciplined spacing carry the entire visual identity. Photography, screenshots, and case-study artwork supply all chromatic energy.

The system was designed by studying ~80 contemporary UX designer portfolios (see §References). Three patterns dominated and are encoded here:

1. **Monochrome canvas with a single accent.** Black ink on white paper, with one signature color — for this site, `#006B75` (deep teal). The accent never decorates; it always *acts* (links, primary affordances, focus rings, one wordmark glyph).
2. **Display serif + UI sans pairing.** A high-contrast serif (Instrument Serif) for hero and case-study titles supplies the editorial weight visible in portfolios like Bethany Heck's and Jon Yablonski's. A neutral geometric sans (Inter) — the most-common UI typeface across surveyed sites — handles everything else.
3. **Generous, responsive spacing on a 4/8 hybrid scale.** Raw spacing tokens are static and discrete; semantic aliases (page inset, section gap, card padding, prose measure) shift at breakpoints. Macro spacing breathes; micro spacing stays predictable.

The deliberate restraint is a UX statement in itself: the portfolio demonstrates that the designer can hold a system, ship to a budget, and let the work speak.

## Colors

The palette is intentionally austere. There are exactly three "real" colors a visitor will perceive: paper white, ink black, and the teal accent. Everything else is a near-neighbor used for hierarchy.

- **`primary` (`#0A0A0A`).** Near-black ink. Used for body copy, headlines, primary CTA fill, and any element that needs to read as definite. Avoid pure `#000` — it reads heavier than the rest of the system and creates jarring contrast in dark mode flips.
- **`neutral` (`#FFFFFF`).** The page canvas. Cards and overlays use `surface` (`#FAFAFA`) so they read as gently lifted rather than identical to the page.
- **`accent` (`#006B75`).** Deep teal — the sole brand color. Contrast on white is **6.25 : 1**, comfortably AA for normal text. Use it for:
  - All text links inside prose.
  - The single primary CTA on each page (e.g., "Email me", "View case study").
  - The focus ring on every interactive element.
  - One signature mark (wordmark dot, period after the name, etc.). Choose one, not all.
- **`accent-hover` (`#005A63`).** ~10% darker than the accent. Used only on hover/active states for the primary CTA and links. Do not use as a default color.
- **`accent-soft` (`#E5F2F3`).** A tinted background for callouts and selected tags. Provides accent presence without competing with photography.
- **`muted` (`#6B6B6B`).** Secondary text such as case-study metadata (year, role, company), captions under figures, and timestamps. Contrast on neutral is **5.33 : 1** — AA for normal text.
- **`surface-muted` (`#F2F2F2`).** Hairline borders, divider rules between sections, the default tag pill background. Never use as the only signal — pair with spacing.

### Contrast budget (WCAG 2.2 AA, normal text 4.5 : 1, large text 3 : 1)

| Foreground | Background | Ratio | Verdict |
|---|---|---:|---|
| `primary` `#0A0A0A` | `neutral` `#FFFFFF` | 19.80 : 1 | AAA |
| `muted` `#6B6B6B`   | `neutral` `#FFFFFF` | 5.33 : 1  | AA normal text |
| `accent` `#006B75`  | `neutral` `#FFFFFF` | 6.25 : 1  | AA normal text |
| `on-accent` `#FFFFFF` | `accent` `#006B75` | 6.25 : 1 | AA normal text |
| `accent-hover` `#005A63` | `neutral` `#FFFFFF` | 7.95 : 1 | AAA |
| `primary` `#0A0A0A` | `accent-soft` `#E5F2F3` | 17.28 : 1 | AAA |
| `on-neutral-dark` `#FAFAFA` | `neutral-dark` `#0B0B0B` | 18.86 : 1 | AAA |
| `accent-dark` `#5BD3DE` | `neutral-dark` `#0B0B0B` | 11.08 : 1 | AAA |
| `muted-dark` `#A1A1A1` | `neutral-dark` `#0B0B0B` | 7.62 : 1 | AAA |

Run `npx @google/design.md lint DESIGN.md` before every release. The CLI verifies contrast for every defined component pair.

### Don't

- Don't introduce a fourth color "just for variety." If you feel the urge, switch to a different photograph instead.
- Don't use `accent` as a background for body text on prose. It works at chip and CTA scale; it dilutes long copy.
- Don't pair `accent` (`#006B75`) with `primary` (`#0A0A0A`) as text-on-background — the 3.17 : 1 ratio fails AA for normal text (passes only AA-Large at ≥ 24 px / 18.66 px bold).

## Typography

Two families. Self-hosted as WOFF2. No Google Fonts CDN.

- **Instrument Serif** — display only. Hero name, case-study cover titles, the occasional pull-quote. Tracking is tightened slightly (`-0.02em`) at large sizes to keep the serif feeling intentional rather than archaic. Never used below 30 px / `display-md`.
- **Inter Variable** — everything else. Headings, body, UI, navigation, labels. Inter is the most-common typeface across the surveyed portfolio set; it carries no genre and gets out of the way of the content.
- **JetBrains Mono** — code blocks, keyboard hints, version chips inside case studies. Used sparingly.

### Type scale (desktop defaults)

| Token | Family | Size | Line height | Weight | Use |
|---|---|---:|---:|---:|---|
| `display-xl` | Instrument Serif | 88 / 5.5 rem | 1.02 | 400 | Home hero name only |
| `display-lg` | Instrument Serif | 64 / 4 rem | 1.05 | 400 | Case-study cover title |
| `display-md` | Instrument Serif | 48 / 3 rem | 1.10 | 400 | Section openers in long cases |
| `h1` | Inter | 40 / 2.5 rem | 1.15 | 600 | Page titles (About, Contact, Work index) |
| `h2` | Inter | 30 / 1.875 rem | 1.2 | 600 | In-page section heading |
| `h3` | Inter | 22 / 1.375 rem | 1.3 | 600 | Subsection / card title |
| `h4` | Inter | 18 / 1.125 rem | 1.35 | 600 | Inline subhead inside long copy |
| `body-lg` | Inter | 19 / 1.1875 rem | 1.6 | 400 | Long-form case-study body |
| `body-md` | Inter | 16 / 1 rem | 1.55 | 400 | UI default |
| `body-sm` | Inter | 14 / 0.875 rem | 1.5 | 400 | Captions, footnotes |
| `label-caps` | Inter | 12 / 0.75 rem | 1.4 | 500 | UPPERCASE kickers, tags, year stamps |
| `mono` | JetBrains Mono | 13 / 0.8125 rem | 1.5 | 400 | Code, keys, version chips |

### Fluid behavior

Headings and display use a `clamp()`-based reduction below the `tablet` breakpoint (under 48 rem):

- `display-xl` reduces to a minimum of `3.5rem` (56 px).
- `display-lg` reduces to a minimum of `2.75rem` (44 px).
- `display-md` reduces to a minimum of `2.25rem` (36 px).
- `h1` reduces to a minimum of `2rem` (32 px).

Body sizes do **not** fluid-shrink — small body type damages readability before it saves any space.

### Measure and rhythm

- Prose `max-width` (`measure-prose`): **62 ch** mobile → **68 ch** tablet → **72 ch** desktop. This range follows Butterick's 45–90-CPL guidance and Fluent's manuscript-grid advice (Spacing Design Guide §Recommended responsive semantic aliases).
- Default body `line-height` is 1.55. This survives WCAG text-spacing overrides (1.5 ×) without breakage.
- Use single line breaks for paragraphs in MDX; the prose stylesheet supplies the inter-paragraph spacing via tokens.

### Don't

- Don't use Instrument Serif for body or UI. It is unreadable below ~24 px and loses its character.
- Don't mix weights in Instrument Serif — it only ships at 400.
- Don't apply `letter-spacing` to body or small text; it is reserved for `display-*` (tighten) and `label-caps` (loosen).

## Layout

The layout system uses **static raw spacing tokens** with **responsive semantic aliases**. Raw tokens never change across breakpoints; aliases do. This is the dual-layer pattern recommended in the attached Spacing Design Guide and used by Carbon, Atlassian, Polaris, Fluent, Primer, and Codex.

### Breakpoints

| Alias | Min width | Use |
|---|---:|---|
| `mobile` | 0 | default |
| `tablet` | 48 rem (768 px) | two-column work cards become possible |
| `desktop` | 80 rem (1280 px) | full work grid + wider hero |
| `wide` | 96 rem (1536 px) | optional editorial bleed for hero photography only |

### Containers

- `container.standard`: fluid → max **1280 px** at desktop. Used for every page.
- `container.wide`: fluid → max **1440 px** at desktop. Used only for full-bleed hero imagery on case studies.

### Responsive semantic aliases

> Use these aliases, not raw `space.*` tokens, for any layout decision.

| Alias | Mobile | Tablet | Desktop | Purpose |
|---|---:|---:|---:|---|
| `inset.page` | 16 | 24 | 32 | Page-side padding for app surfaces |
| `gutter.grid` | 16 | 24 | 24 | Multi-column grids (work index) |
| `pad.card` | 16 | 20 | 24 | Cards, panels, tiles |
| `gap.stack.tight` | 8 | 8 | 12 | Dense stacks, labels, helper text |
| `gap.stack.default` | 12 | 16 | 16 | Most vertical stacks |
| `gap.form.group` | 16 | 20 | 24 | Between related form controls |
| `gap.content.block` | 24 | 32 | 40 | Between paragraphs-and-media blocks in case studies |
| `gap.section` | 40 | 48 | 64 | Between major page sections |
| `gap.hero` | 48 | 64 | 80 | Hero-to-body transition |
| `measure.prose` | 62 ch | 68 ch | 72 ch | Long-form reading width |

### Usage bands (which range belongs to which layer)

| UI layer | Raw range | Examples |
|---|---|---|
| Optical / micro | 2–6 px | Icon-label gaps, focus-ring offset, hairline borders |
| Component interior | 8–16 px | Input/button padding, chip interiors, list rows |
| Component separation | 20–32 px | Between cards in a row, between form groups |
| Section structure | 40–64 px | Between major page regions |
| Hero / editorial bands | 80–128 px | Marketing headers, page-intro, case-study cover bleed |

### Grid

- Home and Work index use a CSS grid with `--gutter-grid` gap.
- Work cards: 1 column mobile, 2 columns from `tablet`, optionally 1 column "showcase" rows on desktop when a card has `span: 2`.
- Case-study MDX content sits inside `measure.prose`; figures may break out to `container.standard` with `data-bleed="wide"`.

### Touch targets and density

- Every interactive element has a minimum hit area of **44 × 44 px** (per Apple HIG and Codex). Visual size may be smaller, but padding pads the hit area up to 44 px.
- Form controls inherit `body-md` to keep typography and target size aligned.

## Elevation & Depth

The system is intentionally **flat**. Depth is communicated through spacing, type weight, and slight surface tint — not shadows. Use shadows only when they carry information.

| Token | Use |
|---|---|
| `elev-0` | Default — no shadow. The system's default. |
| `elev-1` (`0 1px 2px rgba(10,10,10,0.06)`) | Lifted card on hover only — never as default state. |
| `elev-2` (`0 8px 24px rgba(10,10,10,0.08)`) | Floating modal / drawer overlays. |
| `elev-focus` (`0 0 0 3px rgba(0,107,117,0.45)`) | Focus ring — the **only** chromatic shadow in the system. |

### Don't

- Don't apply `elev-1` or `elev-2` as a default card state. The card defines itself with hairline rule + padding.
- Don't stack shadows. Pick one elevation per element.

## Shapes

Rounding is reserved and consistent. A single page should not feature more than two distinct radii.

| Token | Value | Use |
|---|---:|---|
| `rounded.none` | 0 px | Section dividers, full-bleed images |
| `rounded.sm` | 4 px | Tag chips, kbd, code |
| `rounded.md` | 8 px | Buttons, inputs, callouts |
| `rounded.lg` | 12 px | Cards, image thumbnails |
| `rounded.xl` | 20 px | Modal containers, large feature panels |
| `rounded.pill` | 999 px | Pill tags, avatars |

### Don't

- Don't round case-study hero photography. Full-bleed images stay at `rounded.none` to preserve editorial weight.
- Don't pair `rounded.xl` and `rounded.lg` in the same row.

## Components

> Variant naming convention: `<component>` defines the default; `<component>-<state>` defines hover / active / focus / disabled. Component tokens reference `{colors.*}` and `{rounded.*}` to stay in sync with theme changes.

### Nav

Sticky on scroll, transparent background that picks up a hairline `surface-muted` border once scrolled. Three to five items max: **Work · About · Contact**. Logo or initials on the left, links on the right. Active page receives `aria-current="page"` plus a 2 px `accent` underline.

### Hero (home page)

A single-screen, type-driven block. The pattern observed across surveyed designer portfolios:

> **\<role\> @ \<company\>**  (label-caps, muted)
> **Hi, I'm Matt** — *display-xl, primary, Instrument Serif*
> **\<one-sentence value proposition\>** — body-lg, muted
> **\[See selected work →\]** + **\[Resume↗\]** — button-primary + button-secondary

No carousel, no autoplay video, no rotating word. Confidence comes from stillness.

### Work card (home + work index)

- 1-column mobile, 2-column from tablet.
- Each card: cover image (`rounded.lg`, 16:10 ratio), kicker (`year · role · company`, label-caps muted), title (`h3`), one-sentence summary (`body-md`), "View case study →" affordance.
- Optional `01 · 02 · 03` numeric label in `label-caps muted` — a pattern recurring in surveyed sites (Sanjeev Sriram, Bethany Heck).
- Hover: subtle `elev-1` lift + accent-colored arrow. Respect `prefers-reduced-motion`.

### Case study page

Four canonical regions, in order:

1. **Cover** — full-bleed image (`container.wide`), `display-lg` title overlaid or below, metadata strip beneath (role, year, company, tags).
2. **Overview** — three short rows: Context, My role, Outcome. Body-lg.
3. **Body** — MDX with `<Figure>`, `<Callout>`, `<Compare>`, `<Quote>` components. All copy sits inside `measure.prose`; figures may break out.
4. **Footer** — "Next case study →" + back to /work.

### Figure

Wraps Cloudflare Images. Always supplies `width`, `height`, `alt`. Uses `loading="lazy"` by default; hero figures get `fetchpriority="high"`. Caption uses `body-sm muted`.

### Callout

`accent-soft` background, `accent` left rule (3 px), `rounded.md`. Used inside MDX to flag a key decision, a constraint, or a measured result.

### Quote

`display-md` Instrument Serif, primary color, no quote marks (use real typographic punctuation in the copy itself). Attribution below in `body-sm muted` with an em-dash.

### Tag

Pill-shaped `surface-muted` background, `muted` text, `label-caps` typography. Selected/active tag swaps to `accent-soft` background + `accent` text.

### Buttons

- **Primary** — filled `primary`, white text, `rounded.md`. One per view. On hover, the fill flips to `accent`. This single swap is the system's signature gesture.
- **Secondary** — outlined `surface-muted`, `primary` text. Used for resume, secondary nav, social.
- **Link** — `accent` text + 1 px underline at `text-underline-offset: 3px`. On hover, color shifts to `accent-hover` and underline thickens to 2 px.

### Forms

Not used by default — the contact page is a `mailto:` link. If a form is ever added (newsletter, inquiry), inputs share `body-md` typography, 44 px min height, `rounded.md`, `surface-muted` border that becomes `accent` on focus, and an `elev-focus` ring.

### Focus ring

`0 0 0 3px rgba(0,107,117,0.45)` on every interactive element. Never removed. Required for keyboard a11y.

## Do's and Don'ts

**Do**

- Treat `DESIGN.md` as the single source of truth. Run `npx @google/design.md lint DESIGN.md` in CI and fix any errors or warnings before merge.
- Use the responsive semantic aliases (`inset.page`, `pad.card`, `gap.section`, `measure.prose`) for layout decisions. Drop to raw `space.*` tokens only for component-internal padding.
- Keep accent usage rare. One CTA per view. One signature mark. Body links inherit accent automatically.
- Maintain WCAG 2.2 AA contrast for every text + background pair shipped.
- Respect `prefers-reduced-motion`: disable hover transforms, parallax, autoplay.
- Preload exactly the two font families. Subset to Latin if possible. Show fallback chain (`Inter, system-ui, sans-serif` / `"Instrument Serif", Georgia, serif`).
- Validate every new component pair through the linter. The CLI catches contrast regressions you'd otherwise miss.

**Don't**

- Don't add a new color. Replace, don't extend.
- Don't use Instrument Serif below 30 px.
- Don't introduce drop shadows as decoration; shadows are reserved for genuine elevation (`elev-1` hover) and focus rings.
- Don't tile background images or use stock textures. Photography lives inside `<Figure>` only.
- Don't break the four-region case-study layout (Cover → Overview → Body → Footer). Visitors should be able to predict where they are.
- Don't ship a page without passing `pnpm design:lint`, `pnpm typecheck`, `axe` a11y scan, and Lighthouse ≥ 95 on mobile across all four categories.
- Don't add a client-side framework (React, Vue, Svelte) to render static content. Use Astro islands only when interactivity is genuinely required.

---

## References

This system synthesizes two source documents and a ~80-site survey of contemporary UX designer portfolios.

### Source documents (provided)

- *Spacing Design Guide Deep Research* — basis for the raw 4/8 spacing ladder, responsive semantic aliases, prose measure band, and touch-target minimums. Material, Carbon, Atlassian, Polaris, Fluent, Primer, Codex, MUI, Chakra were the comparative baseline.
- *Agent Ready App Plans for Codex and Claude* — basis for the executable-plan pattern in `PLAN.md`, the separation of durable repo rules (`AGENTS.md`) from current-initiative plans, and the gate-driven verification model.

### Portfolio survey — patterns encoded in this system

Sampled across ~80 designer portfolios spanning new-grads through principals (Sanjeev Sriram, Brittney Nguyen, Tyler Jordan, Tara Caverly, Matt Ahrens, Austin Knight, Bethany Heck, Jon Yablonski, Claudio Guglieri, Buzz Usborne, Aaron James, Bill Horan, Jonathan Patterson, Ryan Scott, Karolis Kosas, Frances Tung, Ryan Wagner, Shuqi Yan, Samrudha Malandkar, Darshan Munkur, Urvesh Patel, and many more). The patterns that recurred and are therefore encoded above:

1. **Type-led hero with personal voice.** "Hi, I'm \<name\>" / "I design \<thing\>" — universal across the sample.
2. **Three-to-five-item top nav.** Work · About · Resume · Contact. Persistent and predictable.
3. **Selected Work grid of 3–6 case studies.** Each card carries cover, title, role/company, summary, CTA. Numbered prefixes (`01 · 02 · 03`) appeared often enough to make optional here.
4. **Monochrome canvas plus a single accent.** Cream/white + ink + one chromatic color was overwhelmingly the dominant palette pattern. Multi-color palettes were a small minority.
5. **Inter (or Inter-class neutral sans) as the UI default**, paired with a serif (Instrument Serif, PP Editorial, Tiempos, GT Super) for hero/case-study display type. Inter was the most-common UI typeface across the surveyed sample.
6. **Generous whitespace, single-column or two-column layouts, sticky nav, long-form scroll** — no paginated portfolios, no infinite carousels.
7. **Case-study structure** of Cover → Overview (role/year/team) → Process/decisions → Outcome — consistently applied even by senior designers (Austin Knight, Ryan Scott, Bill Horan, Buzz Usborne).
8. **Contact-as-mailto + LinkedIn**, "Get in touch" CTA before the footer, resume linked externally — almost universal.
9. **Subtle motion only.** Hover lifts, occasional marquee, reduced-motion respected. No autoplay video heroes outside marketing-led portfolios.

The aesthetic decision to lean *more* restrained than the median surveyed site (single accent, no decorative shadows, no chromatic gradients) is deliberate: it differentiates by reduction, and it puts the case-study screenshots — which carry their own color — in unchallenged focus.
