# Portfolio Website Structure

## Navigation

Use a small sticky navigation:

- `Mithun.` -> `/`
- `Work` -> `/work`
- `About` -> `/about`
- `Say Hi` -> contact / email

Do not add a separate Story item. Resume can live on About and in the footer.

## Visual direction

The site should feel like an **Editorial Systems / Digital Product Lab**: a high-end editorial portfolio combined with the precision of a sophisticated software interface.

Use:

- warm off-white / neutral background;
- near-black typography;
- one restrained accent;
- large editorial headlines;
- generous whitespace;
- thin rules and subtle grids;
- monospace metadata sparingly;
- real or reconstructed product UI as the primary visual identity;
- subtle motion that explains behaviour.

Avoid:

- neon AI styling;
- glassmorphism;
- fake 3D product art;
- Behance-style card grids;
- generic UX-process diagrams;
- decorative motion without explanatory value.

## Homepage

### Hero

Recommended direction:

# Mithun Raju. Product designer across digital products, platforms & AI.

I turn fragmented tools, data, and workflows into connected products that scale - from 0-to-1 platforms to large-scale transformations. Based in Bengaluru.

### Selected work

Use four featured projects:

1. Portfolio Management Platform
2. API Lifecycle Platform
3. Dependency Health Platform
4. Store Support Platform

Each card should contain:

- small public product label;
- large transformation headline;
- short context line;
- dominant real/reconstructed UI or short loop;
- 2-3 proof points;
- restrained capability tags;
- case-study CTA.

Do not use internal product names as the primary card title.

### More work

Supply Chain Operations Platform can appear here in a quieter treatment and should also live on the Work page.

### Closing

Use a short point of view / About teaser and a direct contact CTA rather than adding more portfolio categories.

## Work page

The Work page should feel like a landing page for the body of work rather than a project database.

Recommended sequence:

1. Work introduction
2. Compact career evolution
3. `Different products. Similar transformations.`
4. Selected work
5. More work
6. Earlier product work
7. Closing reflection / About CTA

Career evolution should stay compact:

**Digital & web -> Consumer mobile -> Commerce & delivery -> Enterprise products & platforms**

Avoid repeating long employer descriptions already visible in project cards.

## About page

The About page should not repeat the Work page or resume.

Recommended sequence:

1. Hero + existing portrait
2. Career narrative: interface -> product -> workflow -> system
3. How Mithun thinks about complex products today
4. Three working principles
5. Short personal section
6. Education, current role, resume, LinkedIn, email
7. Say Hi CTA

Keep education quiet near the bottom.

## Public case-study pages

Public case studies should read like short product stories, not UX-process documentation.

A reusable layout should support:

- public product label;
- transformation headline;
- context + role;
- proof strip;
- large product media;
- 2-3 decision chapters;
- system diagrams;
- short loops / behaviour demos;
- impact / current evidence;
- reflective ending;
- optional protected deep-dive CTA.

Do not force every project into identical headings. The shared mental model is:

**What is it? -> Why did it matter? -> What decisions did I make? -> What changed? -> What do I believe now?**

### Flagship word count

Aim for roughly **900-1,200 words** with strong visuals.

### Earlier work word count

Aim for roughly **250-500 words**. bb daily can be longer because it combines customer and operations work into one service story.

## Public project routes

Prefer descriptive routes:

- `/work/portfolio-management`
- `/work/api-lifecycle`
- `/work/dependency-health`
- `/work/store-support`
- `/work/supply-chain-operations`
- `/work/bb-daily`

Earlier work can use similarly understandable slugs.

## Confidentiality

Use reconstructed visuals for internal work unless explicit external-use approval exists.

Reconstruct both before and after states using representative content. Preserve the hierarchy, density, interaction model, and design decisions while replacing:

- internal category and module names;
- user names and IDs;
- URLs;
- store / market identifiers;
- internal team names;
- operational data;
- private terminology;
- security or architecture details.

Suggested caption when useful:

> Interface reconstructed with representative data to protect internal information.

## Visual rule

Across flagship case studies:

**Show the product. Animate the behaviour. Diagram the system.**

Use a consistent system-map grammar for transformation visuals, but make the composition project-specific:

- Portfolio Management Platform - converge
- API Lifecycle Platform - connect
- Dependency Health Platform - translate
- Store Support Platform - resolve
- Supply Chain Operations Platform - organise

This creates a recognisable portfolio system without making every project look identical.

## Content source files

Use these files as the build-ready public copy source:

- `home.md` -> `/`
- `work.md` -> `/work`
- `about.md` -> `/about`
- `projects/*/web/*.md` -> individual project routes

Do not duplicate or independently rewrite project copy inside page components. Layout components should handle media, metrics, diagrams, comparisons, quotes, and navigation around the approved copy.
