# Restoring MattyOphotos

The MattyOphotos case study is archived here so Astro does not include its page
or media in production builds.

From the repository root, restore it with PowerShell:

```powershell
Move-Item -LiteralPath 'archive\case-studies\mattyophotos\src-content\mattyophotos.mdx' -Destination 'src\content\work\mattyophotos.mdx'
Move-Item -LiteralPath 'archive\case-studies\mattyophotos\public-assets\MattyOphotos' -Destination 'public\images\cases\MattyOphotos'
```

Then run `pnpm build` and deploy the rebuilt site. The existing MattyOphotos
entries in `src/lib/cf-image.ts` are intentionally retained for restoration.
