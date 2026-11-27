import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio canonico del sito: in locale (senza variabili) serve per canonical,
// Open Graph e sitemap, così gli URL generati puntano sempre al sito pubblicato.
const SITE_FALLBACK = 'https://archiviogiovannibianco.github.io';

// Su GitHub Pages il sito vive in https://<utente>.github.io/<repo>/:
// il workflow di deploy passa SITE e BASE_PATH letti da actions/configure-pages.
// In locale, senza variabili, il sito viene servito dalla radice.
function normalizeBase(value) {
  if (!value || value === '/') return '/';
  return `/${value.replace(/^\/+|\/+$/g, '')}/`;
}

export default defineConfig({
  site: process.env.SITE || SITE_FALLBACK,
  base: normalizeBase(process.env.BASE_PATH),
  output: 'static',
  integrations: [sitemap()],
});
