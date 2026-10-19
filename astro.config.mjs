// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nicolasmateos.com',
  trailingSlash: 'always',
  // 'preserve' keeps src/pages/en/404.astro as dist/en/404.html, which Cloudflare serves for /en/* misses.
  build: { format: 'preserve' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
