# Mithun Raju Portfolio — Build Instructions

## Content source rules

- Public case-study copy comes only from `projects/<project>/web/*.md`.
- Never publish or auto-import `projects/<project>/master/*`.
- Do not invent metrics, quotes, company names, or impact claims.
- If a figure is missing from the web draft, omit it or mark it as pending approval.
- Visual placeholders in the source Markdown should become `MediaFrame` / reconstructed visuals — never pretend screenshots are real.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4 with CSS variables
- Structured case-study content in `src/content/case-studies/` (rendered by `CaseStudyView`)
- `projects/<project>/web/*.md` remains the approved source drafts — not auto-imported at runtime
- Vercel for hosting on `mithunraju.in`
- No CMS in v1

## Visual brief

Editorial Systems / Digital Product Lab:

- Light-first cool stone / off-white base, near-black type
- One restrained accent (ink teal)
- Typography-led brand: serif display + readable sans + mono metadata
- System Map motif: Before → Intervention → After
- No purple gradients, glow effects, fake-terminal aesthetic, or animation for its own sake
- Respect `prefers-reduced-motion`

## Accessibility

- WCAG AA contrast
- Keyboard navigation and visible focus
- Semantic landmarks and headings
- Meaningful alt text on media

## Component conventions

Prefer small custom components: `SiteHeader`, `SiteFooter`, `FeaturedWorkCard`, `MediaFrame`, `Reveal`, `DotGridBackground`, `CaseStudyView`.
Keep project facts in `src/content/projects.ts`; public case-study narratives live in `src/content/case-studies/*.ts`, drafted from `projects/<project>/web/*.md`.
