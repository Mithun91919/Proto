# Mithun Raju - Portfolio Plan

_Last updated: 19 August 2026_

## Purpose

Build a public portfolio for **mithunraju.in** that is easy to understand without internal company context.

The portfolio should show a clear progression from visual and consumer product work into enterprise platforms, developer products, systems thinking, and newer AI-assisted interaction models.

The public site is a curated story, not an archive of every artefact or every UX activity.

## Public positioning

**Mithun Raju. Product designer across digital products, platforms & AI.**

Supporting direction:

> I turn fragmented tools, data, and workflows into connected products that scale - from 0-to-1 platforms to large-scale transformations.

Based in Bengaluru.

## Naming rule

Internal product names are not the primary public-facing labels.

Use this hierarchy:

1. **Public label** - what the product actually is.
2. **Case-study headline** - the transformation or problem solved.
3. **Internal name** - optional supporting context only.

Current public labels:

- Portfolio Management Platform - internal name: Clipper
- API Lifecycle Platform - internal name: API Lifecycle Manager / APILM
- Dependency Health Platform - internal/supporting name: Dependency Management
- Store Support Platform - internal name: FixIt
- Supply Chain Operations Platform - internal name: GSCOPE

## Homepage hierarchy

The homepage is a curated edit with four featured projects:

1. **Portfolio Management Platform** - replacing five portfolio tools with one connected platform.
2. **API Lifecycle Platform** - creating one platform for engineers to discover, design, test, and govern APIs.
3. **Dependency Health Platform** - turning dependency compliance data into clear actions developers can take.
4. **Store Support Platform** - helping store associates diagnose and resolve technical issues before raising a ticket.

Use **Supply Chain Operations Platform** in More Work / the Work page rather than forcing a fifth featured homepage card.

Current agentic work should be added later when the source material is ready; do not retrofit AI into every older project.

## Project tiers

### Flagship public case studies

- Portfolio Management Platform
- API Lifecycle Platform
- Dependency Health Platform
- Store Support Platform
- Supply Chain Operations Platform

Target public read time: roughly 3-5 minutes.

### Strong earlier product story

- bb daily - customer subscription + operations as one connected service story

Target read time: roughly 3 minutes.

### Compact earlier work

- Ratings & Reviews
- Hike - TOTAL OS Localization
- Hike - Jobs Service
- Hike - Movie Tickets
- CREO - Mark 1

Target read time: roughly 1-2 minutes each. These should be visually led and should not imitate full flagship case studies.

## Public case-study rhythm

Do not force every project into the same UX-process template. Keep a shared editorial rhythm:

**What is it? -> Why did it matter? -> What decisions did I make? -> What changed? -> What did I learn / believe now?**

For flagship stories:

1. Public product label + transformation headline
2. Short context and role
3. 2-3 proof points
4. The problem / tension
5. 2-3 important design decisions
6. Outcome / current evidence
7. Short point of view
8. Optional protected deep dive

Avoid public sections titled Discover, Define, Ideate, Wireframes, Personas, Affinity Mapping, or Style Guide unless the artefact itself is central to the decision being explained.

## Tone

Write like an editorial product story, not a UX process report.

- Use declarative section headings.
- Keep paragraphs short.
- Explain why a decision mattered, not only what activity happened.
- Use first person for actual ownership.
- Separate personal contribution from team contribution.
- Prefer concrete product language over UX jargon.
- Use metrics only when their meaning is clear.
- Do not imply causation when the evidence only shows scale or correlation.
- End with a small reflective point of view rather than a generic list of lessons.

## Visual evidence

Use the rule:

**Show the product. Animate the behaviour. Diagram the system.**

For enterprise/internal work, use public-safe reconstructions with fictional data unless original material is explicitly approved.

The recurring flagship visual grammar should be:

**Before -> design intervention -> after / outcome**

Do not use AI-generated marketing imagery as evidence when a product UI, reconstructed interaction, or system diagram can tell the story better.

## Public vs protected deep dive

The public page should be enough to evaluate the work in a few minutes.

The protected deep dive is an interview companion for evidence such as:

- detailed research artefacts;
- original/reconstructed iterations;
- taxonomy and information architecture;
- full flows and edge cases;
- migration and implementation detail;
- VQA and design-system work;
- approved technical architecture;
- quotations and detailed evidence.

Password protection does not create permission to disclose confidential information. Restricted material should not be uploaded at all.

## Work-page role

Homepage = curated proof.

Work page = body of work and career evolution.

Case-study pages = individual product stories.

The Work page should keep the career timeline compact and let projects remain the main event.

Career progression language:

**Digital & web -> Consumer mobile -> Commerce & delivery -> Enterprise products & platforms**

Formal designations can remain subtle. Case studies should state the actual project role / ownership more clearly than the job title.

## Project status

| Project | Public label | Web status |
|---|---|---|
| Clipper | Portfolio Management Platform | Standardised public draft ready |
| API Lifecycle Manager | API Lifecycle Platform | Standardised public draft ready |
| Dependency Management | Dependency Health Platform | Standardised public draft ready |
| FixIt | Store Support Platform | Standardised public draft ready |
| GSCOPE | Supply Chain Operations Platform | Standardised public draft ready |
| bb daily | bb daily | Unified customer + operations public draft ready |
| Ratings & Reviews | Ratings & Reviews | Compact public draft ready |
| TOTAL OS Localization | Multilingual Mobile Experience | Compact public draft ready |
| Jobs Service | Job Discovery & Resume Builder | Compact public draft ready |
| Movie Tickets | Movie Ticket Booking | Compact public draft ready |
| CREO Mark 1 | Smartphone Brand & Digital Experience | Visual-first public draft ready |

## Build rule

The public page sources are:

- `home.md` for the homepage;
- `work.md` for the Work landing page;
- `about.md` for the About page;
- `projects/*/web/` for individual project stories.


Master files should remain source/evidence archives and should not be shortened to match the public page.

When implementing in MDX, preserve the wording of the approved web files. Use layout components for media, metrics, comparisons, quotes, and deep-dive links rather than rewriting project copy inside components.
