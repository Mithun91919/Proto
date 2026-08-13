# Replacing fragmented portfolio tools with one connected system of record

> **Public draft.** Product names, screenshots, internal programme names, financial figures, organisational structures, and current roadmap details should be reviewed before publication. Where approval is unavailable, use reconstructed visuals and generalised terminology while preserving the original design decisions.

## Overview

**Role:** UX Designer → Senior UX Designer  
**Platform:** Enterprise portfolio management platform  
**Focus:** 0-to-1 platform architecture, portfolio workflows, research, migration, governance, and strategic goal management  
**Active:** 2022–Present

Portfolio planning had become fragmented across several tools, spreadsheets, and approval processes. Product data lived in one place, people and allocation data in another, strategic initiatives somewhere else, and leaders routinely reconciled conflicting information before they could make decisions.

I joined the work at inception and helped shape the platform from the first whiteboarding sessions through multiple module launches, legacy-tool migrations, and the latest strategic goal-management experience.

The result is a six-module platform used by more than **6,000 monthly active users**, built to replace fragmented portfolio workflows with one connected operating model.

Rather than presenting six modules as six separate products, the platform can be understood through three jobs:

- **Understand the portfolio** — People, Products, and Initiatives;
- **Operate the portfolio** — Manager, Intake, approvals, and data-quality workflows;
- **Align the portfolio** — Goals, strategic roll-ups, and execution traceability.

> 📸 **[VISUAL: Before → After ecosystem map. Left: separate portfolio, workforce, roadmap, admin, and spreadsheet tools. Right: one platform organised into Understand / Operate / Align.]**

## The challenge

### The organisation had data, but not a shared operating model

The problem was bigger than outdated interfaces.

**There was no single source of truth.** Product, workforce, initiative, application, finance, and planning data lived in separate systems with different ownership models and inconsistent schemas.

**Planning required manual reconciliation.** Before a planning cycle, teams spent time comparing spreadsheets and tools instead of using the information to make decisions.

**Approval workflows were fragmented.** Creating or changing a product, team, or application could require coordination across several systems and inboxes, with limited status visibility.

**Portfolio visibility broke down at scale.** Leaders could inspect individual systems, but there was no reliable way to roll people, cost, delivery, and strategic work into one portfolio view.

**Data quality problems accumulated quietly.** Allocation and ownership errors were often discovered after the fact rather than prevented or surfaced in context.

The design challenge became:

> **How might we replace several disconnected portfolio tools with one coherent system without forcing every user and workflow into the same interface?**

## Who we designed for

The platform serves users who interact with the same underlying portfolio data for very different reasons.

### Engineering managers and portfolio operators

They create products and teams, manage allocations, submit requests, and keep organisational data current. They need fast, dependable workflows with clear status and recovery paths.

### Data-quality, finance, and controllership teams

They need to identify inaccurate records, understand cost and ownership relationships, review changes, and maintain auditability without managing everything through spreadsheets and email.

### Product and technology leaders

They need to understand how people, products, initiatives, and funding relate across a portfolio — from an individual team to a large business segment.

### Goal owners and senior leaders

They need to create, update, scan, and roll up strategic commitments across organisational levels, while maintaining a traceable relationship between strategy and execution.

The core UX tension was therefore not simply information density. It was **one data model serving different levels of responsibility, scale, and decision-making.**

> 📸 **[VISUAL: Four role cards showing Goal / Context / What the platform needed to provide. Avoid demographic personas.]**

## My role

I joined the platform at day zero and have worked across its evolution from problem framing to module architecture, detailed interaction design, pilot feedback, launch, migration, and continued iteration.

My work has included:

- mapping capabilities across the legacy-tool ecosystem;
- helping define the module architecture and shared platform shell;
- stakeholder interviews and workflow mapping across multiple user groups;
- 50+ research sessions and 45+ demos across the platform programme;
- end-to-end design across Manager, People, Products, Initiatives, Intake, and Goals;
- structured pilot feedback sessions before broader releases;
- design of approval, data-quality, migration, and decommission experiences;
- redesigns based on real product use rather than defending the first version;
- design-system and reusable-component work across the shared platform;
- newer AI-assisted experiences for search and content generation.

The important part of the story is not the number of screens. It is the platform architecture that allowed several previously disconnected workflows to become one system over time.

## 1. Designing the architecture before the interfaces

### Mapping the existing landscape

The work started with a whiteboard, not a dashboard.

Before deciding what the new platform should contain, I mapped the capabilities that already existed across the legacy systems and connected each capability to the people and decisions it served. This exposed both duplication and gaps: several tools were solving adjacent pieces of the same workflow while important cross-system needs were not covered at all.

> 📸 **[VISUAL: Simplified legacy capability map — tools across the top, user needs/capabilities beneath, with overlap highlighted.]**

### Six modules, each owning a clear domain

Rather than rebuilding each legacy tool one-for-one, we reorganised the product around user and data domains:

| Platform module | Core job |
|---|---|
| **People** | Workforce, headcount, allocation, and org hierarchy |
| **Products** | Product, team, application, and portfolio intelligence |
| **Initiatives** | Strategic programmes, planning, allocation, and ownership |
| **Manager** | Entity creation, approvals, and administrative workflows |
| **Intake** | Structured requests and portfolio onboarding |
| **Goals / Align** | Strategic commitments, roll-ups, status, and accountability |

This separation gave each module a clear responsibility while allowing them to share the same underlying portfolio model.

It also enabled staged delivery. The platform did not need a risky big-bang replacement; modules could launch as they reached sufficient capability and gradually take over work from the systems they were replacing.

> 📸 **[VISUAL: Module architecture diagram with shared data/platform layer underneath all six modules.]**

## 2. Understand the portfolio — People, Products, and Initiatives

The first major product job is helping users understand what exists, who owns it, who is working on it, and how it contributes to a broader portfolio.

### People — workforce and allocation in context

People brings workforce and organisational data into one navigable hierarchy. Managers and leaders can inspect headcount, allocation, status, location, and data-quality signals without reconciling separate workforce tools.

The challenge was designing for multiple scales: a manager checking one team and a senior leader scanning a much larger organisation need the same underlying information but very different levels of density.

> 📸 **[VISUAL: People hierarchy at two levels of scale — team-level view and leadership roll-up.]**

### Products — one place for product intelligence

Products combines information that previously required several systems: product structure, teams, applications/services, budgets, cloud-cost context, ownership, and quality controls.

The module evolved substantially after launch. A later redesign improved navigation, performance, and information hierarchy as the amount of connected product data increased.

One newer capability uses GenAI to help create application/service descriptions. Internal reporting indicates the assisted flow reduced turnaround time for that task by approximately **60–70%**, largely by reducing repeated manual review cycles.

> 📸 **[VISUAL: Products before/after redesign, annotated around hierarchy, cross-domain information, and scanability.]**

### Initiatives — making allocation visible across strategy

Initiatives introduced top-down and bottom-up views of strategic work and headcount allocation over time.

A central design problem was serving radically different scales on the same surface: a senior leader may scan hundreds of people and programmes while a team lead may inspect one initiative. The hierarchy and filtering model had to scale without creating separate products for each level.

> 📸 **[VISUAL: Initiative hierarchy showing top-down and bottom-up views with allocation over time.]**

## 3. Operate the portfolio — Manager, Intake, approvals, and data quality

The second job is turning portfolio information into action.

### Manager — replacing cross-tool administration

Manager became the workflow layer for creating and updating products, teams, and related entities. Requests could move through structured review, approval, rejection, and notification states instead of being coordinated across multiple tools and messages.

The first live pilot exposed an important lesson. Internal reviews had missed issues such as broken draft recovery, technical error labels, inconsistent field validation, and browser-specific rendering problems.

Those findings changed the process as much as the interface. They led to a recurring live-feedback practice the team called **Break Dance**: structured pilot sessions with real users before broader releases.

> 📸 **[VISUAL: One Break Dance finding → revised design. Example: raw technical error state vs plain-language recovery state.]**

### Intake — making new work visible from the beginning

Intake replaced ad-hoc spreadsheet and ticket-based submission workflows with a structured request lifecycle. Users could submit new portfolio work, understand where it was in the process, and follow status without reconstructing the workflow from messages and spreadsheets.

### Data quality as a workflow, not a report

Data-quality features were introduced across the platform to surface allocation, ownership, and configuration problems at the level where people could act on them.

The platform's internal reporting shows allocation errors moving from approximately **4% to 2.2%** during the period in which these controls and broader data-quality work were introduced. For public use, this should be presented as a platform outcome rather than attributed to a single screen or feature.

> 📸 **[VISUAL: Data Quality Scanner — issue categories, bulk management, and resolution/audit flow.]**

## 4. Align the portfolio — turning strategy into something traceable

The Goals / Align module moved the platform beyond managing portfolio entities into managing strategic commitments.

At launch, it supported more than **1,400 goals** organised across **14 strategic themes**, with different goal types, status states, organisational roll-ups, and links to execution work.

The central tension was information density at scale.

A leader might need to scan hundreds of goals across multiple groups, while an individual contributor may simply need to submit one clear status update. Both are interacting with the same underlying goal model.

The design addressed that through:

- filterable goal dashboards for portfolio scanning;
- compact goal cards optimised for comparing many commitments;
- low-friction status updates for contributors;
- organisational roll-ups across leadership levels;
- explicit treatment of at-risk goals, including a required path-to-recovery narrative;
- links between strategic goals and execution work.

> 📸 **[VISUAL: Goal dashboard + one goal card + status update panel, showing leader scan mode versus contributor action mode.]**

This module represents an important shift in the product's evolution: from consolidating existing workflows to helping shape how strategic accountability itself is structured and communicated.

## 5. Designing the migration, not only the destination

Replacing enterprise tools is not complete when the new screen ships.

Each module had to coexist with a legacy system for some period of time. Users needed to know which system was authoritative, what had moved, what still remained, and what would happen to existing data.

Migration therefore became part of the UX work:

- feature-parity mapping;
- migration and decommission messaging;
- coexistence periods;
- data-transition states;
- change communication and demos;
- launch feedback and recovery paths.

The platform has retired several major legacy workflows over time, with the remaining workforce-tool migration still progressing in the current programme.

> 📸 **[VISUAL: Migration timeline — legacy systems gradually replaced by module launches, rather than a single cutover.]**

This is one of the most important lessons from the project: **in enterprise transformation, the bridge between old and new is part of the product.**

## Research as a continuous operating rhythm

Research was not isolated to a discovery phase. Across the programme, the team ran more than **50 research sessions and 45 demos** with portfolio, engineering, finance, data-quality, and leadership users.

The Break Dance pilot model became a recurring feedback loop: put realistic work in front of real users, observe where the design failed, and feed those findings into the next release.

That mattered because many of the most useful findings were small but consequential: recovery from an invalid form, terminology that exposed backend logic, or the point where information density made a leadership view hard to scan.

> 📸 **[VISUAL: Research loop — Design → Pilot → Break Dance → Iterate → GA → Observe → Next module.]**

## Impact and scale

The platform's value should be separated into **reach**, **operational outcomes**, and **business impact** rather than implying that every metric was caused directly by UX work.

### Reach

- **6,253+ monthly active users**, with a reported peak above 6,400;
- six major product modules;
- **50+ research sessions** and **45+ demos**;
- more than **1,400 live goals** across 14 strategic themes;
- adoption across portfolio, engineering, finance, controllership, and leadership workflows.

### Operational outcomes from internal reporting

- support-ticket volume reduced by approximately **50%** and sustained across two reporting periods;
- allocation-error rate improved from roughly **4% to 2.2%**;
- some data reconciliation moved from a multi-day lag to **under 24 hours**;
- AI-assisted description work reported **60–70% faster turnaround**;
- hundreds of hours of weekly manual reconciliation were reported as removed or automated as the platform matured.

### Business impact reported across FY25–FY26

Internal programme reporting records more than **$2.65M in combined cost and automation savings** and more than **5,500 days of manual effort eliminated** across the two fiscal periods.

These figures describe the value of the broader platform transformation — product, engineering, operations, migration, and adoption together — rather than the isolated effect of individual design decisions.

> 📸 **[VISUAL: Three-column impact block: Reach / Operational / Business. Avoid a single oversized “$2.65M saved by design” claim.]**

## Reflection

This project changed how I think about 0-to-1 enterprise platforms.

The hardest design work was often not an individual interface. It was deciding how several disconnected systems should become one mental model, and then helping thousands of users move from the old model to the new one without disrupting active planning cycles.

The module architecture was one of the most consequential decisions. A one-to-one recreation of the old tools would have preserved the fragmentation under a new brand. Organising around clear data and workflow domains created a foundation that could grow over several years.

The Break Dance sessions reinforced another principle: internal design review is not a substitute for live contact with users. Small implementation details — error language, state recovery, browser behaviour — can determine whether a workflow feels trustworthy.

The Goals work introduced a different challenge again. Earlier modules improved work users already did. Goals required the platform to influence how strategic commitments were structured, rolled up, and reviewed. That shift from workflow consolidation to organisational behaviour change is what makes this project particularly meaningful to me.

## What I would do differently

I would establish the recurring pilot-feedback rhythm earlier for every module. In some faster delivery periods, design moved ahead of live validation and issues that could have been identified in prototype form surfaced later than they should have.

I would also create one cross-platform onboarding journey rather than allowing each module to evolve its onboarding independently. As the platform grew, the biggest question for some users was no longer “how do I use this screen?” but “where in this platform should I start?”

Finally, I would move more data-quality guidance to the point of entry. Batch scanners are useful for remediation, but preventing an incorrect value when it is entered is usually better than asking someone to clean it up later.

---

> **Public-release checklist:** Verify the internal product name, tool names, exact savings figures, workforce and goal metrics, business-unit references, current roadmap items, screenshots, research artefacts, and AI/architecture details before publication. The master source contains planned and in-progress work that should not automatically be exposed on the public site.
