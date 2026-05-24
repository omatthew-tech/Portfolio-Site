# DECISIONS.md

Append-only decisions for the UX portfolio implementation.

| Date       | Decision                                                                     | Rationale                                                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-05-23 | Use the Tailwind v4 Vite plugin instead of `@astrojs/tailwind`.              | Tailwind v4 is CSS-token-first and matches the `@theme` export expected by `DESIGN.md`.                                                                          |
| 2026-05-23 | Provide local SVG placeholder covers when `PUBLIC_CF_IMAGES_HASH` is absent. | The Cloudflare Images account hash was not provided, and the local build should remain usable while preserving the same `Figure` API for production assets.      |
| 2026-05-23 | Use placeholder contact endpoints in `src/lib/site.ts`.                      | The plan requires mailto and LinkedIn links, but Matt's final email and profile URL were not supplied.                                                           |
| 2026-05-23 | Run the Design.md CLI through its Node entrypoint in package scripts.        | The installed package exposes `design.md`; invoking the generated shim hung in this PowerShell sandbox, while the same CLI entrypoint worked directly with Node. |
