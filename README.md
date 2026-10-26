# syntropysciences.in

Corporate website for Syntropy Sciences Private Limited, operator of [Kyros Clinic](https://kyrosclinic.com).

Vite + React 18 + TypeScript. Pages are **prerendered at build time**, so the full text ships in the
HTML: crawlers and automated checks (AWS Activate) see the content without running JavaScript.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck → client build → SSR build → prerender into dist/
npm run preview    # serve dist/ locally
npm run deploy     # build and upload dist/ to Cloudflare Pages (project: syntropy-sciences)
```

## Where things live

| What | File |
|---|---|
| Company facts (CIN, address, email) and JSON-LD | `src/company.ts` |
| Page sections | `src/components/` |
| Styles and colour tokens (light + dark) | `src/styles.css` |
| Head metadata (title, description, OG, canonical) | `index.html` |
| 404 page | `404.html`, `src/NotFound.tsx` |
| favicon, robots.txt, sitemap.xml | `public/` |
| Prerender step | `scripts/prerender.mjs`, `src/entry-server.tsx` |

Company facts must match the MCA record exactly. Change them only from the certificate of incorporation.

## Content rules

No medical claims, outcomes, testimonials, statistics, prices, booking forms or data collection.
Any wording that describes clinical services needs founder / compliance sign-off before it ships.

## Hosting

Cloudflare Pages, custom domain `syntropysciences.in`. Every push to `main` builds and deploys via
`.github/workflows/deploy.yml` (needs the `CLOUDFLARE_API_TOKEN` repository secret). `npm run deploy`
still works for a manual deploy. Keep **Bot Fight Mode** and "Under Attack"
mode off for this zone, and keep any WAF challenge off the site, so automated verification checks are not blocked.
