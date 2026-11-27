# Archivio Giovanni Bianco — sito Astro

Sito statico dedicato allo scultore Giovanni Bianco (Sersale, 1942–1995), convertito in
[Astro](https://astro.build) dalla pagina WordPress originale conservata in
`../sito-wordpress/`.

- Sito pubblicato: <https://archiviogiovannibianco.github.io/>
- Repository: <https://github.com/archiviogiovannibianco/archiviogiovannibianco.github.io>

## Sviluppo

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # genera dist/
```

## Pubblicazione su GitHub Pages

Il repository è di tipo *utente* (`archiviogiovannibianco.github.io`), quindi il sito viene
servito dalla radice del dominio e non da una sottocartella.

1. Collega il remote e pubblica:

   ```bash
   git remote add origin https://github.com/archiviogiovannibianco/archiviogiovannibianco.github.io.git
   git push -u origin main
   ```

2. Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Ogni push su `main` esegue `.github/workflows/deploy.yml`: build con `bun`, base path
   letto da `actions/configure-pages`, pubblicazione su
   `https://archiviogiovannibianco.github.io/`.

Il workflow funziona anche per un repository di progetto (sito servito da `/<repo>/`), senza
modifiche al codice: `actions/configure-pages` fornisce base path e dominio corretti.

## Struttura

- `src/pages/index.astro` — la pagina: hero, storia, temi, opere, mostre, opere rubate, memoria, contatti.
- `src/data/opere.ts` — le 11 schede delle opere (titolo, dati, testo, immagine, alt).
- `src/styles/global.css` — il foglio di stile originale, con gli stili limitati a `.gb-page`.
- `public/images/` — le 22 fotografie ottimizzate per il web.

Le fotografie provengono da un archivio privato: la pubblicazione richiede l'autorizzazione
della famiglia Bianco e dei proprietari delle opere in collezioni private.
