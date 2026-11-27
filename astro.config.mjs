import { defineConfig } from 'astro/config';

// Su GitHub Pages il sito vive in https://<utente>.github.io/<repo>/:
// il workflow di deploy passa SITE e BASE_PATH letti da actions/configure-pages.
// In locale, senza variabili, il sito viene servito dalla radice.
function normalizeBase(value) {
  if (!value || value === '/') return '/';
  return `/${value.replace(/^\/+|\/+$/g, '')}/`;
}

export default defineConfig({
  site: process.env.SITE || undefined,
  base: normalizeBase(process.env.BASE_PATH),
  output: 'static',
});
