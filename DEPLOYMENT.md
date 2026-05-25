# Deployment

## Cloudflare Pages

This project is a static Astro site. In Cloudflare Pages, let Pages upload the
generated `dist` directory directly.

- Framework preset: `Astro`
- Build command: `pnpm run build`
- Build output directory: `dist`
- Root directory: `/`
- Deploy command: leave empty

Do not use `npx wrangler deploy` for this static Pages project. Without a
committed Wrangler config, Wrangler will auto-detect the framework in CI and may
try to convert the site into a Worker/Pages Functions deployment.
