# PLAN.md — UX Portfolio Site

> Executable plan for Codex. Read this top-to-bottom before any work.
> Follow the milestones in order. Each milestone has explicit acceptance criteria.
> When a milestone's gates are green, mark its checkbox, update the progress log, and continue.
> When ambiguity is reasonable, make the call and record it in the decision log. Otherwise, stop with one targeted blocker and one next action.

---

## 0 · Purpose

Build a fast, accessible, type-led UX design portfolio for **Matt** at the goal URL (Cloudflare Pages). The site exists to make hiring managers and design leaders quickly understand:

1. Who Matt is (UX designer, voice + role + location).
2. What Matt has shipped (3–6 anchor case studies).
3. Why that work matters (process, decisions, outcomes).
4. How to contact Matt.

The site is **content-first** (MDX case studies), **performance-budget-bound**, and **deploys on every push to `main`** via Cloudflare Pages with images served by Cloudflare Images.

When this plan completes, a visitor on a fresh laptop can: hit the homepage in under 1.0 s LCP on cable, scroll through 3+ case studies, open one full case study (MDX) with sharp images and smooth scroll, find the about page, and email Matt — and Lighthouse scores ≥ 95 across all four categories on mobile.

---

## 1 · Constraints (non-negotiables)

| Area | Decision | Rationale |
|---|---|---|
| Framework | **Astro 5+** with `output: "static"` | Zero-JS by default; ideal for content sites; Cloudflare Pages first-class. |
| Language | **TypeScript** strict | Catch token/type mismatches before runtime. |
| Content | **MDX** case studies under `src/content/work/` using Astro Content Collections + Zod | Type-safe frontmatter, MDX components, easy local editing. |
| Styling | **Tailwind v4** (`@theme` CSS variables) | Tokens align 1:1 with `DESIGN.md` export. |
| Hosting | **Cloudflare Pages** | Free TLS, edge CDN, preview deploys per branch. |
| Images | **Cloudflare Images** for case-study assets; local `astro:assets` allowed for tiny icons/SVG | Auto AVIF/WebP, variants, fast worldwide. |
| Fonts | **Inter Variable** (UI/body) + **Instrument Serif** (display) via self-hosted WOFF2 | Most popular pairing in modern designer portfolios (see DESIGN.md §References); self-hosting avoids Google Fonts FOUT and PII. |
| Palette | `#FFFFFF` background, `#0A0A0A` foreground, `#006B75` accent (single-accent system) | Per user spec; see DESIGN.md. |
| Motion | Subtle only; respect `prefers-reduced-motion` | Never block first paint. |
| A11y | WCAG 2.2 AA; 44 px+ touch targets; full keyboard path | Per Spacing Design Guide §Accessibility. |
| Perf budget | LCP ≤ 1.5 s (4G), CLS ≤ 0.05, INP ≤ 200 ms, total transfer ≤ 250 KB on home | Lighthouse mobile ≥ 95 all four categories. |
| Dependencies | Add only what's listed in §6. New deps require an entry in `DECISIONS.md`. | Avoid bloat. |
| Do-not | No client framework (React/Vue) — Astro islands only when essential; no third-party analytics other than Cloudflare Web Analytics; no Google Fonts CDN; no localStorage tracking. | Privacy + speed. |

---

## 2 · Repo layout (target)

```
.
├── AGENTS.md                 # short, durable rules (this row + §10 mirror)
├── PLAN.md                   # this file — current execution plan
├── DESIGN.md                 # Google DESIGN.md format — single source of design truth
├── DECISIONS.md              # append-only decision log
├── astro.config.mjs
├── tailwind.config.ts        # imports tokens from DESIGN.md export
├── tsconfig.json
├── package.json
├── public/
│   ├── fonts/                # Inter + Instrument Serif WOFF2 (self-hosted)
│   ├── favicon.svg
│   └── og-default.png
├── src/
│   ├── content/
│   │   ├── config.ts         # Zod schemas for work
│   │   ├── work/             # MDX case studies
│   │   │   ├── _template.mdx
│   │   │   └── example-case.mdx
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── WorkCard.astro
│   │   ├── CaseHeader.astro
│   │   ├── Figure.astro      # Cloudflare Images wrapper
│   │   ├── Prose.astro
│   │   └── ThemeToggle.astro # optional dark mode
│   ├── layouts/
│   │   ├── Base.astro        # head, fonts, meta, theme vars
│   │   └── Case.astro        # MDX wrapper
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── work/
│   │   │   ├── index.astro       # all case studies
│   │   │   └── [...slug].astro   # MDX render
│   │   ├── sitemap.xml.ts (auto via @astrojs/sitemap)
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css        # @theme block exported from DESIGN.md + base styles
│   ├── lib/
│   │   └── cf-image.ts       # Cloudflare Images URL builder
│   └── env.d.ts
├── scripts/
│   ├── sync-tokens.mjs       # designmd export → src/styles/tokens.css
│   └── check-perf.mjs        # lighthouse-ci wrapper (CI)
└── .github/workflows/
    └── ci.yml                # typecheck, build, design-md lint, lighthouse, deploy
```

---

## 3 · Context & orientation

- **Run dev:** `pnpm dev` → http://localhost:4321
- **Build:** `pnpm build` → `dist/`
- **Preview build:** `pnpm preview`
- **Sync design tokens:** `pnpm tokens` (runs `designmd export` → CSS)
- **Lint design tokens:** `pnpm design:lint` (`designmd lint DESIGN.md`)
- **Typecheck:** `pnpm typecheck` (`astro check`)
- **Tests:** `pnpm test` (vitest where it applies, mostly content schema)
- **Lighthouse:** `pnpm lh` (against `pnpm preview`)
- **Add a case study:** copy `src/content/work/_template.mdx` → fill frontmatter → drop hero image into Cloudflare Images, paste image ID in frontmatter.

---

## 4 · Design grounding (read DESIGN.md before any UI work)

The full visual system, tokens, type, spacing, components, do's-and-don'ts, and the rationale for every decision live in **`DESIGN.md`** at the repo root, in Google Labs' open DESIGN.md format. Do not invent colors, fonts, sizes, or spacing values — pull from `DESIGN.md` via the exported Tailwind theme.

Three things to internalize before building components:

1. **Type-led, monochrome + one accent.** Large display headings carry the page; `#006B75` appears only on interactive affordances and one signature mark.
2. **Hybrid 4/8 spacing with responsive semantic aliases.** Use the aliases (`inset-page`, `pad-card`, `gap-section`, `measure-prose`) rather than raw px.
3. **WCAG 2.2 AA, always.** Run `pnpm design:lint` before merging.

---

## 5 · Milestones

> Mark each box only when **all** gates in §7 for that milestone are green.

- [ ] **M0** — Scaffolding & tooling
- [ ] **M1** — Design tokens wired (DESIGN.md → Tailwind → components)
- [ ] **M2** — Layout primitives (`Base`, `Nav`, `Footer`, `Prose`, `Figure`)
- [ ] **M3** — Home page (hero + selected work grid + contact CTA)
- [ ] **M4** — Content collections + work index + case study route
- [ ] **M5** — About + Contact pages
- [ ] **M6** — Reserved
- [ ] **M7** — Cloudflare Images integration + responsive `<Figure>`
- [ ] **M8** — A11y + performance hardening
- [ ] **M9** — CI/CD on Cloudflare Pages + custom domain
- [ ] **M10** — Launch checklist + smoke test

### M0 — Scaffolding & tooling

**Files to create/change:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `src/env.d.ts`, `.gitignore`, `.editorconfig`, `.nvmrc`, `pnpm-workspace.yaml` (if needed)

**Behavior:**
- Init Astro 5 with TypeScript strict.
- Add integrations: `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/tailwind` (or Tailwind v4 Vite plugin), `astro-icon`.
- Add devDeps: `@google/design.md`, `typescript`, `prettier`, `prettier-plugin-astro`, `prettier-plugin-tailwindcss`, `vitest`, `@lhci/cli`.
- Configure `pnpm` scripts listed in §3.
- Set Node version to current LTS (≥ 20).

**Commands:** `pnpm install && pnpm typecheck && pnpm build`
**Done when:** `pnpm build` produces a `dist/` with a minimal Astro page; typecheck clean.

### M1 — Design tokens wired

**Files to create/change:** `DESIGN.md` (already authored — do not modify casually), `scripts/sync-tokens.mjs`, `src/styles/tokens.css`, `src/styles/global.css`, `tailwind.config.ts`

**Behavior:**
- `pnpm tokens` runs `designmd export --format css-tailwind DESIGN.md > src/styles/tokens.css`.
- `global.css` imports `tokens.css` and applies base resets, font-face declarations, and `prefers-reduced-motion` guards.
- Tailwind reads its theme from the CSS variables produced above (v4 `@theme`).
- Confirm `designmd lint DESIGN.md` exits 0 with no errors.

**Commands:** `pnpm tokens && pnpm design:lint && pnpm build`
**Done when:** Token names from `DESIGN.md` are usable as Tailwind classes (e.g., `bg-neutral`, `text-primary`, `text-accent`).

### M2 — Layout primitives

**Files:** `src/layouts/Base.astro`, `src/components/Nav.astro`, `src/components/Footer.astro`, `src/components/Prose.astro`, `src/components/Figure.astro`

**Behavior:**
- `Base.astro` sets `<html lang="en">`, `<meta>`, preloads two WOFF2 files (Inter, Instrument Serif), sets theme color, injects Cloudflare Web Analytics beacon.
- `Nav.astro`: sticky-on-scroll, simple — `Work`, `About`, `Contact`. 44 px touch targets.
- `Footer.astro`: email, social, "©︎ Matt {year}", colophon line referencing the stack.
- `Prose.astro`: wraps MDX content with `measure-prose` width, headings type scale from DESIGN.md, no `prose` plugin (we own the styles).
- `Figure.astro`: `<picture>` + sources for Cloudflare Images variants, eager-loaded only for above-the-fold hero, lazy for the rest.

**Done when:** A blank page using `<Base>` shows correct fonts, no CLS on font load, dark/light parity if dark mode is enabled, Lighthouse a11y ≥ 95 on an empty page.

### M3 — Home page

**Files:** `src/pages/index.astro`, `src/components/Hero.astro`, `src/components/WorkCard.astro`, `src/components/ContactCTA.astro`

**Behavior:**
- Hero: name + one-line role + location (pattern observed across surveyed designers — see DESIGN.md §References). Two CTAs: "Selected Work" anchor + "Email Matt" `mailto:`.
- Selected Work: pulls top N case studies (`featured: true` in frontmatter, sorted by `order`). Numbered `01 / 02 / 03` like Sanjeev Sriram, Bethany Heck.
- Contact CTA section near footer.
- No carousels, no autoplay video.

**Done when:** Home renders 3+ work cards from MDX, hero respects type scale, every link is keyboard-reachable, `aria-current` set correctly on nav.

### M4 — Content collections + case study route

**Files:** `src/content/config.ts`, `src/content/work/_template.mdx`, `src/content/work/example-case.mdx`, `src/pages/work/index.astro`, `src/pages/work/[...slug].astro`, `src/layouts/Case.astro`, `src/components/CaseHeader.astro`

**Behavior:**
- Define `work` collection with Zod schema:
  ```ts
  z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    company: z.string().optional(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    cover: z.object({ id: z.string(), alt: z.string() }), // Cloudflare Images ID
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
    nda: z.boolean().default(false),
  })
  ```
- `CaseHeader`: cover image, title, role, company, year, tags, "← All work" back-link.
- `Case.astro` wraps MDX with `Prose`. Provide MDX components: `Figure`, `Callout`, `Compare`, `Quote`.
- Drafts excluded from build in production; included in `pnpm dev`.
- `/work` index lists all non-draft cases newest-first.

**Done when:** Visiting `/work/example-case` renders the MDX with correct type, image, and metadata; `pnpm typecheck` passes including content schema.

### M5 — About + Contact

**Files:** `src/pages/about.astro`, `src/pages/contact.astro`, optionally `src/content/about.mdx`

**Behavior:**
- About: short bio, current role, brief CV table (year + role + company), optional photo, link to PDF resume in `/public/resume.pdf`.
- Contact: `mailto:` primary, secondary LinkedIn, optional Calendly link. No form (avoids server functions and spam).

**Done when:** Both pages typecheck and pass Lighthouse a11y ≥ 95.

### M6 — Reserved

No scope currently assigned.

### M7 — Cloudflare Images integration

**Files:** `src/lib/cf-image.ts`, `src/components/Figure.astro`, `.env.example`, `astro.config.mjs`

**Behavior:**
- `cf-image.ts` exports `cfImage(id, { w, h, fit, format })` returning `https://imagedelivery.net/<accountHash>/<id>/<variant>` or a `w=`-based URL.
- `Figure` emits `srcset` for `[640, 960, 1280, 1920]` widths, `sizes` based on container, `loading="lazy"` by default and `fetchpriority="high"` for hero.
- `accountHash` from `PUBLIC_CF_IMAGES_HASH` env. Fail build if missing.
- Add `.env.example` with documented vars.

**Done when:** Case study images load AVIF/WebP, no layout shift, ≤ 150 KB per hero on cable.

### M8 — A11y + performance hardening

**Tasks:**
- Keyboard pass: tab order, focus rings (visible, theme-aware), skip link to `<main>`.
- Color contrast: re-run `designmd lint` and a separate axe-core run via `@axe-core/cli` against `pnpm preview`.
- Reduced motion: disable hover transforms, parallax, autoplaying media.
- Lighthouse mobile ≥ 95 in **Performance, Accessibility, Best Practices, SEO**.
- Total page weight budget enforced: 250 KB home, 600 KB case study (excluding hero image).
- Preload exactly two fonts; subset to Latin if possible.

**Done when:** All gates green per §7.

### M9 — CI/CD + deploy

**Files:** `.github/workflows/ci.yml`, `wrangler.toml` (only if using Pages Functions; skip otherwise), Cloudflare Pages project linked to repo.

**Behavior:**
- CI runs: `pnpm install --frozen-lockfile && pnpm design:lint && pnpm typecheck && pnpm build && pnpm lh`.
- Cloudflare Pages builds on push to `main` (production) and on PR (preview).
- Custom domain attached; `dnssec`/HSTS verified.
- `robots.txt` allows all; sitemap submitted via Cloudflare or Search Console once.

**Done when:** A push to `main` deploys to production; a PR creates a preview URL; CI red on any failed gate.

### M10 — Launch checklist + smoke test

- [ ] Three real case studies live (or two + one "case study coming" stub).
- [ ] About + Contact filled in with Matt's real bio.
- [ ] Resume PDF uploaded.
- [ ] OG default + per-case OG images render (test with opengraph.xyz).
- [ ] 404 page styled.
- [ ] Lighthouse mobile ≥ 95 across the board on home + one case study.
- [ ] Manual smoke path: open site → click first case → scroll to end → back → about → email link opens mail client → resume link downloads PDF.
- [ ] Cross-browser: latest Chrome, Safari, Firefox, mobile Safari, mobile Chrome.

---

## 6 · Dependencies (allowlist)

Runtime:
- `astro`
- `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/check`
- `tailwindcss` (v4)
- `astro-icon`, `@iconify-json/lucide` (icon set — minimal subset only)

Dev:
- `typescript`, `@types/node`
- `@google/design.md`
- `prettier`, `prettier-plugin-astro`, `prettier-plugin-tailwindcss`
- `vitest`
- `@lhci/cli`, `@axe-core/cli`

No React, no Vue, no Svelte, no client-side router. Islands only if a future component genuinely needs interactivity.

---

## 7 · Validation & acceptance (every milestone)

| Gate | Command | Threshold |
|---|---|---|
| Typecheck | `pnpm typecheck` | exit 0 |
| Build | `pnpm build` | exit 0 |
| Design lint | `pnpm design:lint` | 0 errors, 0 warnings (info ok) |
| Format | `pnpm format:check` | exit 0 |
| Unit | `pnpm test` | exit 0 (only where present) |
| A11y scan | `pnpm test:a11y` (axe against `pnpm preview`) | 0 serious/critical |
| Lighthouse | `pnpm lh` (mobile) | Perf ≥ 95, A11y ≥ 95, BP ≥ 95, SEO ≥ 95 |
| Page weight | reported by Lighthouse | ≤ 250 KB home, ≤ 600 KB case study (sans hero image) |
| Visual smoke | open `pnpm preview` and walk the M10 smoke path | passes |

If any gate fails after the implementation step, **stop** and either fix or open a blocker entry in §9.

---

## 8 · Rollback & idempotence

- Every milestone is one PR. Reverting that PR removes the milestone.
- Cloudflare Pages keeps prior deploys; rollback = "Rollback to this deployment" in dashboard.
- No database, no migrations — content is in git.
- `pnpm tokens` is idempotent: regenerating produces identical CSS if `DESIGN.md` is unchanged.
- Cloudflare Images IDs are referenced, not embedded; deleting an image fails the build (good — surfaces broken refs).

---

## 9 · Progress log (append-only)

> Add an entry every milestone or when something surprises you. Keep it terse.

| Date | Milestone | Note |
|---|---|---|
| YYYY-MM-DD | — | initial plan written |
| 2026-05-23 | M0-M7 implementation pass | Scaffolded Astro/Tailwind/MDX portfolio from DESIGN.md, added layout primitives, work/about/contact routes, Cloudflare Images wrapper with local placeholders, and CI skeleton. Build/typecheck/design lint/format/test pass locally. |
| 2026-08-08 | MattyOphotos archive | Moved the case-study source and public media into a tracked archive so production emits no page, sitemap entry, reference, or asset; restoration steps are documented with the archive. |

### Surprises & discoveries
- *(none yet)*

### Blockers
- 2026-05-23: Local axe/Lighthouse gates are not green because the installed Chrome crashes before WebDriver/headless Chrome can start. Browser route smoke passed through the Codex in-app browser, and CLI gates passed except axe/LH.
- 2026-08-08: Local-only Lighthouse completes, but the existing site remains below the performance and page-weight budgets: home 88/565 KB and Test4Test 86-87/664 KB. Accessibility, best practices, and SEO are all 100. The MattyOphotos archive reduces deployed content and does not cause this baseline issue.

---

## 10 · Mirror to AGENTS.md (short form)

When `AGENTS.md` is created in M0, copy this concise block in:

```md
# AGENTS.md
- Stack: Astro 5 (static) + TS strict + MDX + Tailwind v4 + Cloudflare Pages + Cloudflare Images
- Single source of design truth: DESIGN.md (Google DESIGN.md format). Never hardcode colors/fonts/spacing — use exported Tailwind tokens.
- Commands: `pnpm dev | build | preview | typecheck | tokens | design:lint | test | lh`
- Never add React/Vue/Svelte. Islands only on real interactivity need.
- A11y: WCAG 2.2 AA, 44px touch min, full keyboard path, `prefers-reduced-motion` respected.
- Perf budgets: home ≤ 250 KB, case ≤ 600 KB (sans hero); LCP ≤ 1.5s mobile.
- Content lives in `src/content/work` as MDX with Zod-validated frontmatter.
- Images: Cloudflare Images via `<Figure>`; never raw `<img>` for case-study assets.
- Definition of done: all gates in PLAN.md §7 green.
```
