# Website Structure — Mithun Raju Portfolio

_Last updated: 11 August 2026_

## Website goal

Create a focused, editorial portfolio that helps a recruiter, design leader, product manager, or engineer quickly understand:

- the class of problems Mithun solves;
- the scale and complexity of the work;
- what he personally owned;
- how important decisions were made;
- what changed because of the work.

The site should feel like a senior product designer’s body of evidence, not a gallery of isolated UI screens.

## Recommended pages

| Route | Purpose | Launch priority |
|---|---|---|
| `/` | Positioning, featured work, short profile, contact | Required |
| `/work` | Curated project index | Required |
| `/work/[slug]` | Reusable long-form case-study page | Required |
| `/about` | Career story, working approach, capabilities, contact | Required |
| `/lab` | Public experiments and functional prototypes | Add after one strong experiment exists |
| `/resume.pdf` | Downloadable résumé | Required |

## Global navigation

Keep navigation simple:

- Mithun Raju or a restrained monogram;
- Work;
- About;
- Lab, once it has meaningful content;
- Résumé;
- Contact.

Use a lightweight sticky header on long case studies. Provide clear active states, keyboard focus, and a simple mobile menu.

## Home page

### 1. Hero

The first screen should establish positioning without requiring users to decode a long introduction.

**Role label**

Senior Product Designer and Creative Technologist

**Working headline**

> I turn fragmented enterprise workflows into unified, scalable product experiences.

**Supporting copy**

> I work across enterprise platforms, developer tools, consumer products, and emerging agentic experiences—combining research, systems thinking, interaction design, and functional prototyping.

**Actions**

- View selected work
- About me
- Download résumé

### 2. Featured work

Show four projects at launch rather than giving every project equal prominence.

Recommended order:

1. Current agentic enterprise product
2. Enterprise portfolio management platform
3. API lifecycle platform
4. Supply-chain operations platform

Each card should include:

- a strong problem-led title;
- a one- or two-sentence outcome-led summary;
- product/domain label;
- ownership label;
- one meaningful visual or interaction preview;
- confidentiality indicator when visuals are reconstructed.

### 3. Range and earlier work

Use a compact section to show consumer and mobile range without weakening the main enterprise story.

Possible entries:

- Dependency Management — developer governance and guided remediation;
- bigbasket subscription delivery;
- ratings and reviews;
- FixIt;
- internal developer portal;
- selected Hike and CREO mobile work.

### 4. Short profile

Use the short biography from `about.md`, followed by a link to the full About page.

### 5. Capabilities

Keep this brief and evidence-led:

- Enterprise product design
- Complex workflow and information architecture
- Agentic and conversational experiences
- Developer tools and technical UX
- Design systems
- Research and usability studies
- Functional prototyping and AI-assisted development

### 6. Contact

End with a direct invitation to discuss senior product-design roles involving enterprise systems, AI products, developer tools, or design technology.

## Work index

The Work page should be a curated index, not an unfiltered archive.

Useful filters may include:

- Enterprise platforms
- AI and agentic products
- Developer tools
- Consumer and mobile
- Research and experimentation

Ownership should remain metadata rather than a filter.

## About page

Use the full draft in `about.md` and organise it into readable sections:

1. Introduction
2. Career progression
3. How I approach product design
4. Current focus
5. Selected capabilities
6. Contact

Avoid generic claims such as “passionate problem solver” or “pixel-perfect designer.” Link working principles to project examples as those case studies become available.

## Case-study page

Case studies should preserve the strongest structure of their source document. Do not force every project into an identical process framework.

A reusable page should support:

- project title and concise summary;
- role, timeframe, platform, team, and status;
- scale or key evidence;
- clear narrative sections;
- full-width visuals and side-by-side comparisons;
- visual placeholders during drafting;
- quotations;
- metric and artefact tables;
- short videos or interactive prototypes;
- role-based user landscape and representative scenarios;
- ownership and collaboration;
- reflection and what would be done differently;
- confidentiality note;
- next-project navigation.

For the supply-chain project, use the complete document in `projects/supply-chain-operations/master/` as the evidence source and the shorter document in `projects/supply-chain-operations/web/` as the live-page copy. The web sequence is:

1. Outcome-led title and summary
2. At a glance
3. Who we designed for
4. The challenge
5. My role
6. Creating the information architecture
7. Comparing navigation models
8. Design-system adoption
9. The solution
10. Validation and VQA
11. Scale supported and design outcomes
12. Reflection
13. What I would do differently


For the API lifecycle project, use the complete document in `projects/api-lifecycle-manager/master/` as the evidence source and the shorter document in `projects/api-lifecycle-manager/web/` as the live-page copy. The website should make three product pillars visually obvious rather than presenting every feature as an equal chapter:

1. Outcome-led title and overview
2. The fragmented lifecycle
3. Who we designed for
4. My role
5. **Marketplace** — discovery, evaluation, subscription, and AI-assisted discovery
6. **Design Studio** — dual editors, linting, quality, duplication checks, versioning, collaboration, imports, and code generation
7. **Testing** — mocking, API testing, sharing, and security handoff
8. Designing for adoption through 60+ engineering sessions
9. Evolution from useful product to engineering infrastructure
10. Impact and scale
11. Reflection and what I would do differently

The three-pillar model should also drive the project-card copy, diagrams, and visual storytelling so the breadth reads as a coherent platform rather than a long feature list.


For the Clipper enterprise portfolio project, use the complete document in `projects/clipper/master/` as the evidence source and the shorter document in `projects/clipper/web/` as the live-page copy. The website should avoid treating all six modules as equal feature chapters. Use the simpler three-job model:

1. Outcome-led title and overview
2. The fragmented portfolio landscape
3. Who we designed for
4. My role and multi-year ownership
5. Designing the module architecture
6. **Understand the portfolio** — People, Products, and Initiatives
7. **Operate the portfolio** — Manager, Intake, approvals, and data quality
8. **Align the portfolio** — Goals, strategic roll-ups, and execution traceability
9. Designing staged migrations and decommissions
10. Continuous research through pilot / Break Dance sessions
11. Impact separated into reach, operational outcomes, and business impact
12. Reflection and what I would do differently

Use the six-module architecture as supporting evidence under those three jobs, not as six equally weighted sections. The most important visual story should be the transformation from fragmented tools to one platform, followed by module architecture, migration over time, and the progression from system of record to strategic execution.


For the Dependency Management project, use `projects/dependency-management/master/` as the complete evidence source and `projects/dependency-management/web/` as the public editorial draft. The web story should avoid becoming a generic dashboard walkthrough and instead centre on the translation from technical metadata to action:

1. Outcome-led title and overview
2. The problem: data existed, but it was not decision-ready
3. Three audiences and the different decisions they need to make
4. Metric prioritisation and layered information architecture
5. Composite dependency-health model
6. Guided onboarding and remediation
7. Repository → pillar/org → governance reporting at different levels of scale
8. Designing for mandatory / compliance-driven usage
9. Current outcomes and active-work status
10. Reflection and what I would do differently

Use the key principle **Summary for orientation → Detail for diagnosis → Action for resolution** as a recurring interaction model.

## How UI and UX should be shown

Modern product portfolios should explain behaviour, decisions, and evidence—not only final screens.

Use a mix of:

- before-and-after comparisons;
- annotated flows;
- information-architecture diagrams;
- alternative concepts and trade-offs;
- short interaction recordings;
- functional prototypes;
- edge cases and states;
- design-system components in context;
- implementation and VQA comparisons;
- outcomes, quotations, and research evidence.

Static device mockups should be used sparingly and only when they help explain the product.

## Visual direction — Editorial Systems / Digital Product Lab

The site should feel like a cross between a high-end design publication and a sophisticated software system: calm, precise, technical, and highly intentional. The work should provide most of the colour and complexity.

### Core visual language

- Use a light-first warm-neutral or off-white base with near-black typography.
- Introduce selected dark sections for contrast rather than making the entire site dark.
- Use one restrained primary accent; project pages may introduce a secondary accent derived from their own visual material.
- Make typography the main brand device: large editorial headlines, highly readable body type, and selective monospace for metadata.
- Use generous whitespace, thin rules, subtle grids, project numbering, technical labels, and small status/metadata markers.
- Avoid a fake-terminal aesthetic, excessive gradients, glowing AI effects, decorative 3D objects, cursor followers, and animation for its own sake.

### Recurring visual signature: System Map

Each flagship project should open with a compact visual model showing the transformation:

**Before → Design intervention → After**

Examples:

- Clipper: disconnected portfolio systems → unified module architecture → one portfolio operating platform.
- API Lifecycle Manager: fragmented API lifecycle → Marketplace / Design Studio / Testing → connected developer platform.
- Dependency Management: fragmented dependency signals → prioritised health + guided remediation → clearer path to compliance.
- FixIt: issue occurs → diagnose / self-resolve / escalate → better support context.
- Agentic work: user intent → agent actions → human control → outcome.

The System Map should use a consistent visual grammar across projects and become a recognisable portfolio motif.

### Project-specific art direction

Keep the global shell consistent while allowing each project to have its own visual character:

- **Clipper:** architecture, hierarchy, migration, connected modules, operating-model diagrams.
- **API Lifecycle Manager:** technical structure, editor views, lifecycle diagrams, quality signals, API nodes.
- **Dependency Management:** dependency health, layered metrics, compliance paths, remediation progress, repository-to-org scale.
- **Agentic product:** orchestration, agent states, decision paths, trust and human-control moments.
- **FixIt:** mobile workflows, operational context, service journeys, frontline interactions.
- **Supply chain:** information architecture, navigation models, module discovery, platform shell.

### Case-study art direction

Case studies should feel like long-form product articles, not UX process reports. Avoid repeating a generic Research → Define → Ideate → Prototype → Test template. Let the project-specific decisions become the chapter structure.

Prefer 7–10 strong visuals per flagship case study over large screenshot dumps. Use diagrams, annotated product views, before/after comparisons, prototypes, and evidence to carry the narrative.

### Motion

Motion should explain behaviour rather than decorate the site. Good uses include:

- interface previews that play when in view;
- system diagrams that reveal connections;
- before/after comparisons;
- restrained project-card hover states;
- sticky chapter navigation;
- short interaction demonstrations for search, pinning, testing, or agent behaviour.

Respect reduced-motion settings and avoid making every section animate on entry.

## Accessibility and quality

- Meet WCAG AA contrast requirements.
- Support keyboard navigation and visible focus.
- Respect reduced-motion settings.
- Use semantic headings and landmarks.
- Add meaningful alternative text.
- Optimise images and video.
- Keep reading width comfortable on long case studies.
- Test desktop, tablet, and mobile layouts.

## Technical recommendation

### Recommended stack

Build the portfolio as a small coded product rather than using a template-first website builder:

- current stable **Next.js App Router** with TypeScript;
- local **MDX** for public case-study content;
- CSS variables plus a lightweight styling layer for layout, type, spacing, and responsive behaviour;
- a small custom component system rather than a large UI kit;
- GitHub for source control;
- Vercel for preview and production deployments;
- the existing `mithunraju.in` domain;
- no CMS in version one.

The approved file in each project’s `web/` folder remains the editorial source of truth. During implementation it can be converted to MDX without rewriting the narrative or inventing missing data. The full `master/` document should never be published automatically.

Useful reusable components will likely include:

- `ProjectHero`;
- `SystemMap`;
- `MetricStrip`;
- `DecisionBlock`;
- `MediaFrame`;
- `BeforeAfter`;
- `PrototypeEmbed`;
- `ChapterNav`;
- `ProjectNext`.

### Recommended build workflow: Claude Code + Cursor

Use **Claude Code as the primary implementation agent** and **Cursor as the editing environment** if a visual IDE is useful. Claude Code can run inside Cursor, so these do not need to be competing workflows.

Recommended division of responsibility:

- **Figma:** establish the homepage art direction, type scale, spacing system, project-card language, and one representative case-study layout. Do not fully mock every page before coding.
- **Claude Code:** scaffold the Next.js project, create the component architecture, convert approved web Markdown to MDX, build responsive behaviour, run checks, and handle multi-file implementation tasks.
- **Cursor:** inspect and manually tune the UI, review diffs, make small code edits, browse the codebase, and work interactively with Claude Code inside the editor.
- **GitHub:** commit after stable milestones so visual experiments are reversible.
- **Vercel:** use preview deployments for reviewing the real responsive site before merging to production.

If only one AI coding tool is desired, choose **Claude Code** and use VS Code or Cursor purely as the editor. Avoid running two autonomous agents against the same files at the same time.

Before implementation begins, create a root `CLAUDE.md` with the visual brief, content-source rules, accessibility expectations, component conventions, and a rule that project facts/metrics must come only from the approved `web/` documents.

### Why this stack fits the portfolio

The portfolio needs editorial typography and layout, but it also benefits from interactive diagrams, prototypes, before/after components, and project-specific motion. A coded Next.js/MDX site gives enough freedom for those interactions while keeping the written case studies simple to maintain as files.

## Version-one build order

1. Global layout and typography
2. Home page
3. Reusable case-study template
4. Clipper case-study implementation
5. Work index
6. About page
7. Responsive and accessibility review
8. Domain connection and launch
9. Lab page after a strong public prototype is ready
