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

Pushing to the `vue` branch triggers the GitHub Actions workflow, which builds the app and publishes it to GitHub Pages (Pages source must be set to "GitHub Actions" in the repo settings).

## Content

All CV data lives in [`src/data/cv.ts`](src/data/cv.ts).
