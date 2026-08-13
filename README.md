# Mithun Raju — Portfolio

Public portfolio site for [mithunraju.in](https://mithunraju.in).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Structured case studies in `src/content/case-studies/` (drafted from `projects/*/web/*.md`)
- Vercel-ready

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Content rules

- Approved drafts live in `projects/<name>/web/*.md` (source of truth for copy)
- Site renders from `src/content/case-studies/*.ts` + metadata in `src/content/projects.ts`
- Never publish files from `projects/<name>/master/`

## Deploy to Vercel + custom domain

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy.
5. In Vercel → Project → Settings → Domains, add `mithunraju.in` and `www.mithunraju.in`.
6. At your DNS provider, point the domain to Vercel (A/CNAME records Vercel shows).

Optional: add your PDF résumé at `public/resume.pdf`.

## Project map

```text
src/app/                   Routes (home, work, about, resume, case studies)
src/components/            UI components
src/content/projects.ts    Project registry / metadata
src/content/case-studies/  Structured public case-study narratives
src/styles/                Design tokens
projects/*/web/            Approved editorial drafts (not auto-imported)
projects/*/master/         Private working notes — do not publish
```
