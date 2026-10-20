# Ashish Sharma — Portfolio

Single-page portfolio built with React, TypeScript, Tailwind CSS v4 and Vite. Static output, no backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Requires Node 18+.

## Edit content

Everything on the page comes from `src/data.ts` (profile, links, stats, experience, work, skills, education).
Section copy for About and the hero lives in `src/components/About.tsx` and `src/components/Hero.tsx`.

## CV download

The CV button points to `public/Ashish_Sharma_CV.pdf`. Replace that file (keep the name) to update it.

## Deploy

`npm run build` produces a static `dist/` folder that works on any static host.

- **Vercel / Netlify / Cloudflare Pages:** import the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** build, then publish `dist/` (if served from a sub-path, set `base` in `vite.config.ts`).
- **Own server (Nginx):** copy `dist/` to the web root.

## Design notes

- Fonts: Fraunces (display), Inter (body), JetBrains Mono (details), loaded from Google Fonts in `index.html`.
- Colours are tokens in `src/index.css` under `@theme`.
- Scroll animations respect `prefers-reduced-motion`.
