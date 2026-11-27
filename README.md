# Archivio Giovanni Bianco — sito Astro

Sito statico dedicato allo scultore Giovanni Bianco (Sersale, 1942–1995), convertito in
[Astro](https://astro.build) dalla pagina WordPress originale conservata in
`../sito-wordpress/`.

## Sviluppo

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # genera dist/
```

## Pubblicazione su GitHub Pages

1. Crea un repository su GitHub e collegalo:

   ```bash
   git remote add origin git@github.com:<utente>/<repo>.git
   git push -u origin main
   ```

2. Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Ogni push su `main` esegue `.github/workflows/deploy.yml`: build con `bun`, base path
   letto da `actions/configure-pages`, pubblicazione su
   `https://<utente>.github.io/<repo>/`.

Il workflow funziona sia per un repository di progetto (`/<repo>/`) sia per un repository
utente (`<utente>.github.io`, base `/`), senza modifiche al codice.

## Struttura

- `src/pages/index.astro` — la pagina: hero, storia, temi, opere, mostre, opere rubate, memoria, contatti.
- `src/data/opere.ts` — le 11 schede delle opere (titolo, dati, testo, immagine, alt).
- `src/styles/global.css` — il foglio di stile originale, con gli stili limitati a `.gb-page`.
- `public/images/` — le 22 fotografie ottimizzate per il web.

Le fotografie provengono da un archivio privato: la pubblicazione richiede l'autorizzazione
della famiglia Bianco e dei proprietari delle opere in collezioni private.
