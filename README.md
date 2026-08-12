# shadyueh.github.io

Personal CV/portfolio for Held Grijo, built with Vue 3 + Vite + TypeScript and Tailwind CSS v4.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # typecheck + build to dist/
npm run preview # serve the production build
```

## Deploy

Pushing to the `main` branch triggers the GitHub Actions workflow, which builds the app and publishes it to GitHub Pages (Pages source must be set to "GitHub Actions" in the repo settings). You can also trigger a deploy manually via the "Run workflow" button in the Actions tab.

## Content

CV data lives in per-locale files — [`src/data/en.ts`](src/data/en.ts) and [`src/data/pt-BR.ts`](src/data/pt-BR.ts) — typed as `Cv` and aggregated into `Record<Locale, Cv>` in [`src/data/cv.ts`](src/data/cv.ts).

## Internationalization

The site is available in English (`en`) and Brazilian Portuguese (`pt-BR`), using a lightweight composable (no i18n library).

- **UI messages** — [`src/i18n/locales/en.ts`](src/i18n/locales/en.ts) and [`src/i18n/locales/pt-BR.ts`](src/i18n/locales/pt-BR.ts), one file per language, typed against the `Messages` interface in [`src/i18n/messages.ts`](src/i18n/messages.ts).
- **Content** — one file per language under [`src/data/`](src/data/), as described above.
- **Runtime** — [`src/i18n/useI18n.ts`](src/i18n/useI18n.ts) exposes `t(key)` (type-checked keys), a reactive `content`, and `setLocale()`. The locale defaults to `en`, is persisted to `localStorage["lang"]`, and `setLocale` also updates the `<html lang>` attribute. The language toggle lives in the navbar (desktop and mobile menu).
- **Translation check** — `npm run check:i18n` compares the leaf keys of both languages (UI messages and CV content) and fails with exit code 1 on missing/extra keys, empty strings, or mismatched array lengths.

Adding a new language means: add the `Locale` value in `src/data/cv.ts`, create the matching `src/i18n/locales/<locale>.ts` and `src/data/<locale>.ts` files, and register both in the `Record`s.
