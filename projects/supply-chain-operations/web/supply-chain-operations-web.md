# Making 300+ supply-chain tools easier to find at enterprise scale

> **Public website draft:** Company and product names have been generalised. Usage figures, screenshots, quotations, and operational details must be approved before publishing. Where approval is unavailable, use reconstructed visuals and rounded figures.

I co-led the redesign of the navigation and landing experience for a global supply-chain operations platform used by hundreds of thousands of people every month. The platform had grown to host more than 300 tools, but its front door had not evolved with it. Users faced a flat grid of modules, no search, no meaningful hierarchy, and no personalisation.

The work created a shared information architecture, a scalable left-side navigation model, search, personalised shortcuts, a communication channel, and a new design-system foundation for the platform.

## At a glance

| | |
|---|---|
| **Role** | User Experience Designer — co-led with another designer who also acted as my mentor |
| **Focus** | Information architecture, navigation, landing page, personalisation, design-system adoption, UAT, and visual quality assurance |
| **Timeline** | Shipped September 2021 · VQA completed May 2022 |
| **Team** | Product design, product management, platform engineering, business operations, design systems, QA, and release teams |
| **Scale at launch** | 300+ modules · 255,000+ monthly users · 30+ engineering teams · multiple international markets |

> **Visual:** Open with an annotated before-and-after comparison of the original tile grid and the redesigned platform shell.

## The challenge: a platform that had outgrown its front door

The platform began as a small collection of internal tools for a focused operations audience. As new markets, business groups, and engineering teams joined, it expanded into the primary entry point for hundreds of supply-chain workflows.

The home page, however, remained a single grid of tiles. Every user saw the same experience regardless of role, location, device, or workflow. People often relied on memory, bookmarks, or direct links rather than using the platform home page.

The problems fell into three themes.

### Finding the right tool

There was no search, hierarchy, or coherent grouping across 300+ modules. New users could not discover tools they did not already know existed, while experienced users had to scan or scroll through a large undifferentiated list.

### Supporting very different users

Store associates, logistics teams, analysts, managers, and external partners all entered through the same interface. There was no way to prioritise frequently used tools, surface recent activity, or provide role-based defaults for users with tightly defined workflows.

### Creating a platform foundation that could scale

The platform lacked a consistent design language and a reliable channel for operational announcements. Every new module increased both navigation complexity and visual inconsistency. The redesign needed to solve the immediate usability problem while creating a foundation that could absorb future growth.

## My role

I co-led the work from problem framing through post-launch quality assurance. My contribution included:

- engaging 15+ business groups to understand module usage and role-based needs;
- facilitating whiteboarding sessions to create a shared module taxonomy;
- developing and evaluating left-navigation and top-navigation concepts;
- designing the high-fidelity navigation shell and landing experience;
- introducing search, pinning, recent modules, announcements, and market controls;
- supporting UAT with 152 participants across three sessions;
- leading a post-launch visual quality audit and tracking issues to resolution.

The central design question was not simply, “What should the new navigation look like?” It was:

> How might we make hundreds of tools easy to find for radically different users, without disrupting an operational platform used at very large scale?

## Creating a taxonomy 15+ teams could agree on

Before designing screens, we needed to solve the structural problem. The 300+ modules had been created by more than 30 teams and had never been organised into one coherent, user-facing taxonomy.

I facilitated collaborative whiteboarding sessions with representatives from major business areas including store operations, order management, inventory, transportation, customer care, fulfilment, returns, and supply-chain planning.

The goal was to organise tools around how people understood their work rather than around internal engineering ownership. This was difficult because domains overlapped, some modules belonged in more than one category, and each team had strong opinions about where its tools should appear.

Through iterative sessions, we established a shared hierarchy of top-level categories, parent and child modules, and alternate discovery pathways. Formal sign-off from module-owning teams gave the navigation an organisational foundation, not just a design rationale.

> **Visual:** Show the whiteboarding process followed by a simplified, reconstructed version of the final taxonomy.

## Choosing a navigation model that could scale past 300 modules

With the information architecture in place, I created two concepts for moderated comparative evaluation.

### Concept A — Left-side navigation

A persistent, collapsible panel containing hierarchical module groups, keyword search, pinned tools, market controls, and direct access from anywhere in the platform.

### Concept B — Top navigation

A horizontal navigation bar with category dropdowns, based on a familiar consumer-web pattern.

We reviewed the concepts with product owners, operations leads, and platform representatives across multiple markets and device contexts. The sessions focused on discoverability, efficiency, scalability, and usability for both desktop and store-device users.

The left-side model was preferred because it:

- handled deep category structures more naturally;
- could support sections containing 20+ modules without oversized dropdowns;
- remained available while users moved between tools;
- collapsed to preserve space for data-dense operational screens;
- created a natural home for search and pinned modules;
- was easier for store users to navigate reliably on tablets.

The rejected top-navigation concept still improved the final design. Feedback on that direction led us to consolidate market selection and account controls inside the navigation panel instead of leaving them scattered across the page header.

> **Visual:** Place the two concepts side by side and annotate the trade-offs that led to the final decision.

## Using the platform shell to accelerate design-system adoption

The project coincided with the introduction of a new enterprise design system. Rather than rebuilding the navigation on the existing third-party UI library, I proposed using the new system as the foundation for the shared platform shell.

That decision created leverage beyond the landing page. Because the shell wrapped every module, new tools could inherit consistent components, typography, colour, spacing, accessibility patterns, and navigation behaviour without asking every engineering team to redesign independently.

The redesign therefore became both a usability improvement and a practical migration path toward platform-wide consistency.

> **Visual:** Show the final shell with annotations linking navigation, tiles, announcements, and layout patterns to the design system.

## The solution

The released experience combined structure, discoverability, and lightweight personalisation.

### Searchable left-side navigation

Users could search across all modules and move between tools from anywhere in the platform. The hierarchy reflected the cross-team taxonomy, while the panel could collapse to give screen space back to operational content.

### Pinned modules

Most users regularly relied on only five or six tools. Pinning allowed them to create a personal shortlist that could change as their responsibilities changed. For users who could not configure their own experience, role-based pre-pinned defaults created a ready-to-use starting point.

### Recently visited modules

The home page surfaced recent tools without requiring setup. Returning users could quickly resume work even when they had not created a pinned list.

### Platform-wide announcements

A dedicated announcement area gave the platform a direct channel for incidents, releases, training updates, and operational notices. The design also considered users whose devices could not open external links.

### Consolidated market and account controls

Market switching and account actions moved into one predictable navigation area, reducing scattered controls across the platform header.

> **Visual:** Use a short interaction recording to show search, pinning, recent modules, and the collapsing navigation rather than explaining each only through static screens.

## Validating and protecting the release

The redesign could not be introduced as a sudden replacement for such a large operational audience. We used moderated group reviews and UAT sessions to gather feedback, identify interaction issues, and build confidence across business groups.

UAT included 152 participants across three sessions representing store operations, order management, supply chain, customer care, and platform teams.

Two useful feedback themes were:

> The left navigation made switching between modules feel easier and more predictable.

> Store users needed role-based pre-pinned modules so their starting experience matched their operational responsibilities.

The sessions also exposed detailed interaction issues, including flyout and hover behaviour, which were resolved before or immediately after launch.

After release, I led a formal Visual Quality Assurance process. I compared the production experience against the approved designs, documented gaps, and tracked them through engineering resolution and final UX sign-off. This helped establish design fidelity as a quality gate and contributed to a broader expectation of design review for new modules.

> **Visual:** Show one compact VQA example: approved design, implemented version, logged issue, and resolved state.

## Impact

### Scale the architecture has supported

| Evidence | Scale |
|---|---|
| Modules available through the shared experience | 300+ |
| Monthly users at launch | 255,000+ |
| Engineering teams on the platform | 30+ |
| Business groups aligned through IA work | 15+ |
| UAT participants | 152 |
| Full-year sessions supported in FY26 | 33.9M |

These figures demonstrate the scale the navigation architecture has continued to support. They are not presented as proof that the redesign caused platform-traffic growth.

### Outcomes of the design

- **A shared information architecture:** More than 300 modules were organised into a coherent taxonomy agreed across owning teams.
- **Improved discoverability:** Search and hierarchy reduced dependence on bookmarks and institutional knowledge.
- **Useful personalisation:** Pinned, pre-pinned, and recent modules helped different users reach a small set of frequently used tools quickly.
- **A central communication channel:** Operational notices gained a reliable home inside the platform.
- **A scalable design-system foundation:** The shared shell gave new modules a consistent visual and interaction baseline.
- **Stronger design governance:** UAT and post-launch VQA created a repeatable model for implementation quality and design review.

## Reflection

This project taught me that platform design is as much about organisational alignment as interface design. A navigation system for hundreds of modules only works when teams agree on the language, structure, and ownership behind it.

The whiteboarding sessions were therefore some of the hardest and most valuable parts of the work. Reaching agreement across 15+ groups required facilitation, negotiation, and repeated clarification, but it meant the final architecture launched with shared understanding.

I am also proud that the project used the platform shell as a leverage point for design-system adoption. Improving the element every user encountered on every session created a path toward consistency that individual module redesigns could not have achieved as quickly.

Finally, the VQA reinforced an important principle in my practice: shipping the design is not the end of the UX responsibility. Closing the gap between design intent and implementation is part of delivering the experience.

## What I would do differently

I would involve store associates earlier in concept evaluation rather than waiting until UAT. Their device constraints and task urgency were materially different from those of office-based users, and earlier participation could have sharpened both the taxonomy and interaction model.

I would also add a lightweight usability test of the taxonomy before final sign-off. The cross-team alignment process was rigorous, but it primarily validated stakeholder agreement rather than user comprehension.

---

> **Public-release checklist:** Approve or anonymise company and product names, usage figures, direct quotations, internal terminology, and all visual artefacts before this file is converted into the live site.
