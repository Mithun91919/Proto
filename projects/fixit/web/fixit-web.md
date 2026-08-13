# Designing self-service support for store associates under time pressure

> **Public website draft:** Company, product, design-system names, internal operating details, and all screenshots should be reviewed before publishing. Where approval is unavailable, use reconstructed visuals and generalised terminology.

I redesigned a store-associate support experience used to report and track technology issues on the retail floor. The existing app made users guess where problems belonged, offered little help before creating a ticket, and felt disconnected from the rest of the company’s internal product ecosystem.

The redesign reworked the experience across mobile and web: a research-led information architecture, guided troubleshooting before ticket creation, more useful search, contextual onboarding, more precise location capture, structured feedback, and migration to the organisation’s new enterprise design system.

## At a glance

| | |
|---|---|
| **Role** | User Experience Designer |
| **Focus** | End-to-end mobile redesign, web dashboard redesign, information architecture, self-service flows, design-system migration |
| **Timeline** | 2020–2021 |
| **Users** | Store associates, new associates, and centralised support teams |
| **Team** | Product, engineering, store associates, and the previous product designer during transition |

> **Visual:** Open with a before-and-after comparison of the original home/ticket flow and the redesigned experience.

## The challenge: getting help should not create more work

Store associates use the support app when something in the store is not working: a handheld device, printer, pharmacy system, kiosk, network connection, or another operational tool. These are usually interruptions to the work they were already trying to complete, so the experience needs to be fast, clear, and forgiving.

The existing product had three broad problems.

### Finding the right support path

Associates started from a flat list of issue categories with little guidance. Users who did not already understand the system’s structure had to guess where their problem belonged. Search returned an unstructured list and did not provide a useful next step when results were insufficient.

### Creating a ticket too early

The app moved directly from “I have a problem” to “create a ticket.” There was no self-service layer for common issues that might be resolved through a known troubleshooting step, and the product did not help users learn those steps over time.

### A fragmented end-to-end experience

There was no first-use guidance for new associates, location information lacked aisle-level precision, post-resolution feedback was shallow, and the support team’s web dashboard had not evolved with the mobile experience. The product was also built on a third-party UI library while the organisation was introducing a new enterprise design system.

The redesign therefore had to improve more than a set of screens. It needed to make the whole support journey easier for the person reporting an issue and more useful for the team receiving it.

## Who we designed for

### Store-floor associates

Their primary goal was simple: get something working again and return to the job they were doing. They needed a fast path to the right issue type, useful guidance before escalation, and a way to communicate the problem clearly from a busy store environment.

### New associates

They were more likely to be unfamiliar with both the store and its internal tools. They needed guidance without being forced through a long introductory tour before they could get help.

### Centralised support teams

They needed tickets with enough context to triage and resolve the issue efficiently. Mis-categorised requests and imprecise location information created additional work before resolution could even begin.

> **Visual:** Use three compact role cards showing goal, context, and the design response. Avoid demographic personas.

## My role

I owned the UX work across the redesign, including:

- card sorting with store associates to rethink the information architecture;
- a guided troubleshooting and ticket-creation decision tree;
- search structure and inline how-to guidance;
- contextual onboarding for first-time users;
- aisle-level location selection;
- feedback and alarm-history redesigns;
- migration from the existing UI library to the new enterprise design system;
- web-dashboard concepts to align the receiving side of the support workflow;
- prototype reviews and engineering handoff.

The central design question was:

> How might we help associates resolve or report an issue quickly without requiring them to understand the support organisation behind the product?

## Designing the information architecture around associate mental models

Before redesigning the ticket flow, I wanted to understand how store associates naturally grouped the problems they encountered.

I ran card-sorting sessions using common issue types and asked participants to group and label them while explaining their reasoning. The resulting mental model differed from the existing flat category structure and led to four clearer top-level groups:

- **Store department / area**
- **Digital tools, apps, and store devices**
- **Wireless / store network**
- **Personnel and training**

This taxonomy became the foundation for the redesigned support journey. The interface could now start from categories that reflected how associates thought about the problem rather than how support teams or backend systems happened to be organised.

> **Visual:** Show a simplified card-sort output followed by the final category structure.

## Adding self-resolution before ticket creation

The most important structural decision was to introduce a guided troubleshooting path before escalation.

Instead of moving directly from issue selection to a ticket form, the redesigned flow could present relevant troubleshooting steps first. If the problem was resolved, the user could return to work. If not, they could continue into ticket creation having already completed the obvious checks.

The intent was not simply to add more steps. It was to move friction to the right place: help users try a known resolution when it was useful, while giving support teams better context when human intervention was still needed.

The flow also created an opportunity for embedded learning. An associate who successfully followed a troubleshooting path once could begin to recognise the standard resolution for similar problems in the future.

> **Visual:** Use one annotated decision tree showing a self-resolution branch and an escalation branch.

## Making search a path forward, not a dead end

Search previously returned an unstructured list. I redesigned it so that results could help users understand what information was available and what to do next.

The new structure separated different result types, surfaced how-to guidance directly in the flow, and provided a clear route to ticket creation when self-service did not resolve the issue. The search query could carry forward into the support flow rather than forcing the user to start again.

> **Visual:** Show the result hierarchy, inline guidance, and escalation entry point on one screen.

## Guiding new users in context

Instead of a large first-run product tour, I designed progressive guidance that appeared when a feature was first encountered.

The principle was simple: explain ticket creation when the associate first reaches ticket creation; explain search when they first use search. This reduced the amount of information a new user had to absorb before they could do anything useful.

Prototypes were created in InVision and reviewed with new-associate proxies before engineering handoff.

> **Visual:** Show two or three onboarding states in sequence rather than a full-screen tour.

## Improving the quality of information sent to support teams

Several redesign decisions were aimed at improving the context that travelled with a ticket.

The map experience was extended to support **aisle-level location selection**, allowing users to communicate a more precise store location. The feedback flow moved beyond a star rating to collect structured qualitative context after resolution. Alarm-history screens were reorganised so active and resolved events were easier to distinguish.

I also designed web-dashboard concepts for the central support team so that the receiving side of the workflow used the same terminology, information hierarchy, and visual language as the mobile experience.

> **Visual:** Pair the mobile location/ticket view with the corresponding web ticket detail to show the end-to-end information flow.

## Using the redesign to migrate the product system

The project coincided with the organisation introducing a new enterprise design system. Rather than treating the redesign and migration as separate efforts, I rebuilt the areas I touched on the new system.

This created three benefits:

- a visual language consistent with the other internal tools associates used;
- a more accessible component foundation;
- a cleaner baseline for future features, avoiding continued investment in the legacy UI layer.

The important point was not that the old library was inherently poor. It was that the product needed to belong to a larger ecosystem, and continuing to diverge would create more design debt over time.

> **Visual:** Use one strong before-and-after comparison that shows the structural and design-system changes together.

## The redesigned experience

The resulting 2.0 direction brought the support journey into one coherent system:

- **Research-led categories** based on how associates grouped their own problems;
- **guided troubleshooting** before escalation;
- **search with answers and a next step** instead of an unstructured result list;
- **contextual onboarding** for first-time use;
- **aisle-level location capture** to provide more precise ticket context;
- **structured feedback** after resolution;
- **mobile and web alignment** across the two sides of the ticket workflow;
- **enterprise design-system adoption** across the redesigned experience.

## What changed — and what still needs evidence

The project materially changed the structure of the experience: how issues were categorised, how users moved from problem to resolution, what information was captured, and how mobile and web related to one another.

For the public portfolio, I would avoid claiming reductions in ticket volume, resolution time, support calls, or store downtime unless we can recover approved post-launch data. Those would be excellent outcome measures, but they should only appear if we can support them.

The evidence we can already show is the design transformation itself: research outputs, the revised taxonomy, the decision-tree logic, search and onboarding flows, before-and-after screens, cross-platform consistency, and the design-system migration.

## Reflection

This project changed how I think about designing for users under time pressure. Store associates are not exploring a product for its own sake; they are trying to recover from an interruption and get back to their actual work. Every extra decision therefore needs to justify itself.

The card sorting was especially valuable because it showed how easily a redesign can preserve the wrong structure if the team starts from the system rather than the user’s mental model.

The decision tree was the most interesting trade-off. Adding a step can look like increased friction at the screen level, but it can reduce friction across the whole service when that step helps someone resolve a problem immediately or creates a better-quality escalation.

The design-system migration was also a long-term decision. Treating it as part of the redesign meant future work could start from a more consistent foundation instead of carrying the old visual layer forward.

## What I would do differently

I would bring true first-day associates into the decision-tree and onboarding work earlier. Much of the available feedback came from experienced users who had already learned workarounds and internal terminology. Earlier new-user research would have provided a sharper test of whether the redesigned guidance was genuinely self-explanatory.

I would also explore progressive personalisation in troubleshooting. If an experienced associate has repeatedly demonstrated that they know the resolution path for a particular issue type, the product could adapt rather than forcing them through the same guidance every time.

---

> **Public-release checklist:** Confirm the role title, project and company names, design-system name, internal operating details, research artefacts, and screenshots before publication. Do not add performance claims unless approved evidence is available.
