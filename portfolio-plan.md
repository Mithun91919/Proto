# Mithun Raju — Portfolio Plan

_Last updated: 11 August 2026_

## Purpose

Build a public portfolio for **mithunraju.in** that presents Mithun as a senior product designer who simplifies fragmented enterprise systems, standardises complex workflows, and increasingly designs agentic experiences.

The portfolio is not an archive of every project. It is a curated story built around ownership, decisions, scale, collaboration, and impact.

## Positioning

**Senior Product Designer and Creative Technologist focused on enterprise platforms, developer tools, and agentic workflows.**

Working statement:

> I turn fragmented enterprise workflows and disconnected tools into unified, scalable product experiences.

Supporting statement:

> I combine systems thinking, research, interaction design, design systems, and functional prototyping to make complex products easier to understand and use.

## Portfolio story

The strongest projects share a consistent theme: complex ecosystems had grown across multiple tools, teams, and workflows, and the design work created a clearer operating model.

Each flagship project should prove a different aspect of that capability:

- **Agentic enterprise product:** intelligent workflows, trust, guidance, and human control.
- **Enterprise portfolio management:** consolidation, information architecture, planning, and end-to-end ownership.
- **API lifecycle platform:** developer experience organised around Marketplace, Design Studio, and Testing, with governance and adoption layered across the lifecycle.
- **Dependency Management:** turning technical dependency metadata into decision-ready health signals, layered leadership views, and guided remediation.
- **Supply-chain operations platform:** platform-scale navigation, personalisation, design-system adoption, and implementation quality.

Consumer and mobile work from bigbasket, Hike, and CREO provides contrast and demonstrates range.

## Project hierarchy

| Priority | Project | Portfolio purpose | Status |
|---|---|---|---|
| Flagship | Current agentic enterprise product | AI workflows, trust, human control, current relevance | Raw capture |
| Flagship | Clipper — enterprise portfolio management platform | 0-to-1 platform architecture, consolidation, portfolio workflows, migration, goals, and multi-year ownership | Master captured; web draft refined; 5 legacy systems retired |
| Flagship | API lifecycle platform | Marketplace, Design Studio, Testing, governance, adoption, and multi-year product evolution | Master captured and web draft refined |
| Featured / Current | Dependency Management | Developer governance, metric prioritisation, progressive disclosure, compliance UX, and guided remediation | Master captured; web draft created; active work |
| Featured | Supply-chain operations platform | Navigation architecture, comparative concept testing, personalisation, design-system migration, VQA | Master and web drafts complete |
| Featured contrast | bigbasket subscription delivery | Consumer mobile UX, subscriptions, research, product outcomes | Not started |
| Featured | FixIt | Frontline operational UX, research-led IA, self-service support, mobile-to-web consistency | Master captured and web draft complete |
| Supporting | Internal developer portal | Platform thinking and co-ownership | Not started |
| Supporting | Internal conversational AI platform | AI-product collaboration | Not started |
| Supporting | Ratings and reviews | Focused consumer feature and trust | Not started |
| Earlier work | Hike and CREO collection | Mobile breadth, bilingual products, visual craft | Not started |

## How projects should be presented

Projects should be organised by the problem they solved, not by labels such as “end-to-end,” “co-owned,” or “A/B testing.” Ownership should be shown transparently on each project card and inside each case study.

Recommended ownership labels:

- End-to-end design owner
- Primary design owner
- Co-led with another designer
- Co-owned with the design team
- Focused feature ownership
- Research-led engagement

## Case-study writing principles

- Preserve the strongest source narrative instead of forcing every project into the same template.
- Lead with the problem, stakes, role, and outcome.
- Show the few decisions that materially changed the product.
- Use accurate research terminology.
- Separate personal contribution from team contribution.
- Explain internal concepts in language a general audience can understand.
- Use real evidence where it is approved; never invent impact metrics.
- Keep long-form case studies readable with clear headings, visual placeholders, quotations, tables, and short paragraphs.

## Confidentiality rules

Enterprise work should be documented here in a private working form, then reviewed before anything is published.

Before public use, confirm approval for:

- company and internal product names;
- participant names and direct quotations;
- screenshots, research artefacts, Figma files, technical diagrams, and source code;
- store counts, user counts, financial figures, growth figures, and current analytics;
- internal architecture, URLs, credentials, roadmap details, or security information.

When approval is unavailable, use reconstructed visuals, fictional names, dummy data, and simplified terminology while preserving the original design problem and decisions.

Suggested disclosure for reconstructed work:

> Visuals, names, and data have been reconstructed to protect confidential information while preserving the original design problem, decisions, and interaction model.

## Working process

1. Capture one project at a time in plain language.
2. Preserve the original story and evidence.
3. Format it as a readable long-form case study in the project’s `master/` folder.
4. Correct only confirmed factual issues.
5. Add visual placeholders where evidence or reconstruction is needed.
6. Create a shorter, decision-led public version in the project’s `web/` folder.
7. Review confidentiality, claims, metrics, and public-safe wording.
8. Convert the approved `web/` Markdown into the website’s MDX content.
9. Build the site only after the project stories are stable.

## Workspace files

- `portfolio-plan.md` — strategy, project hierarchy, working rules, and status.
- `website-structure.md` — website information architecture and build guidance.
- `about.md` — About-page and short-profile copy.
- `projects/<project>/master/` — the complete working source, evidence, quotations, metrics, artefacts, and publication-review notes.
- `projects/<project>/web/` — a shorter, public-facing case-study draft designed for the live website.

## Build handoff

The recommended implementation path is **Figma for the initial visual system → Claude Code as the primary build agent → Cursor as the optional IDE/editor → GitHub → Vercel**. Use current stable Next.js with TypeScript and local MDX for case-study pages.

When the core content and visual direction are ready, prepare a root `CLAUDE.md` containing technical build instructions, visual-system rules, accessibility expectations, and strict content-source rules. The case-study files should remain the source rather than being rewritten into implementation notes.

See `website-structure.md` for the full Editorial Systems / Digital Product Lab visual brief and implementation guidance.
