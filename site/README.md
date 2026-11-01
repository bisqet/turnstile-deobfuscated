# Payload variability site

Source of https://bisqet.github.io/turnstile-deobfuscated/: a single self-contained `index.html` (React + inline CSS, no external requests), always in dark theme.

- `src/page.tsx`: content, data and interactions (sections, filters, tables).
- `src/components.tsx`, `src/styles.css`: small presentational components and styles.
- `build.mjs`: bundles everything with esbuild into `index.html`.

```sh
cd site
npm install
npm run build        # writes dist/index.html
cp dist/index.html index.html
```

The `gh-pages` branch holds `index.html` and `.nojekyll` only. Third-party licenses: `THIRD-PARTY-NOTICES.md`.
