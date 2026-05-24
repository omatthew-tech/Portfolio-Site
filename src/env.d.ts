/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CF_IMAGES_HASH?: string;
  readonly PUBLIC_CF_WEB_ANALYTICS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
