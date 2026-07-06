# Eagle Home Improvement VA — Website

A modern, fast, mobile-responsive marketing site for **Eagle Home Improvement VA**, a Class A licensed general contractor serving Hampton Roads and Richmond, Virginia. Built to replace [eaglehimva.com](https://eaglehimva.com) with the same business identity (name, branding, services, contact info) on a faster, more accessible, better-SEO'd foundation.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- Static export, deployed to **GitHub Pages**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All business facts (name, address, phone numbers, emails, hours, service area, services, and projects) live in `src/data/*.ts` as the single source of truth, used across the header, footer, JSON-LD structured data, and every page. **Search that folder for `TODO` comments** — a few facts weren't visible on the source site and are marked as placeholders that should be confirmed before launch:

- Real business hours (`src/data/site.ts`)
- ZIP code (`src/data/site.ts`)
- Facebook/Instagram profile URLs (`src/data/site.ts`)
- Contact form endpoint — create a free [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) form and paste its endpoint into `contactFormEndpoint` (`src/data/site.ts`)
- The logo (`src/components/Logo.tsx`) is a simplified SVG recreation of the original oval badge, since no source logo file was available — swap in real artwork if the client supplies it.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds the static export and publishes it to GitHub Pages on every push to `main`.

One-time setup in the GitHub repo:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

By default the site is served from `https://<org>.github.io/<repo>/` (the build config in `next.config.mjs` automatically adds that path prefix in CI). To use the real `eaglehimva.com` domain instead:

1. Add a `public/CNAME` file containing just the domain, e.g. `eaglehimva.com`.
2. Point the domain's DNS at GitHub Pages ([GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. In `next.config.mjs`, set `basePath` to `""` unconditionally (a custom domain serves from the root, not a `/repo-name` subpath). Confirm `siteConfig.url` in `src/data/site.ts` matches the final domain.

## Local static-export check

```bash
npm run build
npx serve out
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production static export (outputs to `out/`)
- `npm run lint` — ESLint
