# AGENTS.md

Personal CV/portfolio for Held Grijo, deployed on GitHub Pages. Vue 3 SPA.

## Key facts

- **Vue 3 + Vite + TypeScript** SPA. Node 20+ required (`.nvmrc`).
- **Tailwind CSS v4** is a real build dependency (`@tailwindcss/vite` plugin, `@import "tailwindcss"` in `src/assets/main.css`). Theme tokens and fonts live in `@theme` in that file; dark mode is class-based (`.dark` on `<html>`, toggled via `src/composables/useTheme.ts`).
- **Source of truth is the `main` branch.** `master`, `tailwind`, and every other branch (`clean_theme`, `solid_state`, `next-js`, …) hold older static/Jekyll themes — do not treat them as current. The old static CV is preserved in `tailwind`.
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) runs on push to `main`, builds `dist/`, and publishes via `actions/deploy-pages`. Pages source must be set to **"GitHub Actions"** in repo settings (manual step). You can also trigger it manually via the "Run workflow" button in the Actions tab.

## Commands

- `npm install` / `npm ci` — install deps
- `npm run dev` — Vite dev server
- `npm run build` — `vue-tsc -b` typecheck + Vite build to `dist/`
- `npm run preview` — preview the production build locally

## File map

- `src/data/*.ts` — CV content per locale (`en.ts`, `pt-BR.ts`), aggregated into `src/data/cv.ts`; UI strings in `src/i18n/locales/*.ts`. Edit content per language.
- `src/components/` — NavBar, Hero, TerminalWindow (reusable "terminal card"), About, Experience, Education, Skills, Contact, Footer. One-page layout with anchor nav.
- `src/composables/useTheme.ts` — dark/light mode state, persisted to `localStorage`.
- `src/assets/main.css` — Tailwind entry + `@theme` tokens + base styles.
- `public/` — static assets (hero `background.jpg`, favicons).
- `index.html` — Vite entry (root `<div id="app">`).

## Conventions

- Commit messages are in **Portuguese**, using Conventional-Commits style prefixes (`feat:`, `refactor:`, `style:`).
- Content lives in `src/data/` per locale (`en.ts` / `pt-BR.ts`) and UI strings in `src/i18n/locales/`; components should stay presentational and consume `useI18n()`.

## Preview

`npm run dev` for development; `npm run build && npm run preview` to verify the production bundle before pushing.
