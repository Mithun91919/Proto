# Unifying the API lifecycle for a large engineering organisation

> **Public draft.** Product names, internal programme names, organisational metrics, screenshots, quotations, and governance details should be reviewed before publication. Where approval is unavailable, use reconstructed visuals and generalised terminology.

## Overview

**Role:** Senior UX Designer  
**Platform:** Enterprise API lifecycle platform  
**Focus:** Product discovery, API marketplace, design studio, testing, governance, collaboration, versioning, and AI-assisted discovery  
**Active:** 2022–Present

API development had become fragmented across documentation pages, source repositories, testing tools, messages, and manual approval processes. Engineers could build APIs, but discovering what already existed, designing contracts consistently, getting access, and keeping documentation trustworthy required moving across disconnected systems.

I have worked on the platform from its early definition through multiple phases of delivery and adoption. The goal was bigger than replacing individual tools: **create one coherent experience for designing, discovering, testing, governing, and evolving APIs across a large engineering organisation.**

> 📸 **[VISUAL: Before-state ecosystem map — documentation, repositories, testing tools, messaging, and manual subscription steps converging into one lifecycle platform.]**

## The challenge

### A fragmented lifecycle created waste at every stage

The problems were connected rather than isolated.

**Discovery was unreliable.** Without a central catalogue, engineers depended on institutional knowledge to find existing APIs. Teams could spend time building capabilities that already existed elsewhere.

**API design and documentation were separated from development.** Specifications were often written manually or documented after implementation, making it difficult to establish an API-first workflow or keep documentation current.

**Quality and governance happened too late.** Naming, documentation, response patterns, and lifecycle standards varied between teams. Problems were often discovered during review or integration instead of while the contract was being designed.

**Consumption was manual.** Finding an owner, requesting access, understanding policy, and testing an API required separate tools and conversations.

The design problem was therefore not "build an API catalogue." It was **how to turn a fragmented set of activities into one understandable lifecycle without oversimplifying the work of experienced engineers.**

## Who we designed for

### API providers

Engineers and teams creating and maintaining APIs needed to design contracts, document them, validate quality, publish changes, and manage consumers.

Their experience ranged from engineers comfortable editing OpenAPI specifications directly to developers who benefited from a more guided interface.

### API consumers

Engineers integrating APIs needed to discover whether a capability already existed, evaluate whether it fit their use case, test it, understand ownership and policy, and request access without tracking people down manually.

### Product owners and solution architects

Architecture and product leaders needed visibility across the API landscape: what existed, who owned it, where standards were weak, and where teams might be duplicating capabilities.

The same product therefore had to support **creation, consumption, and governance** without turning any one of those experiences into an overloaded admin tool.

> 📸 **[VISUAL: Three-role lifecycle diagram showing Providers → Platform → Consumers, with governance spanning the workflow.]**

## My role

I have been the lead UX designer across the product's evolution, working from early discovery and product definition through feature delivery, iteration, adoption, and platform integration.

My work has included:

- discovery research and journey mapping;
- the API Marketplace and subscription experience;
- the API Design Studio and its visual and code-based editors;
- linting, quality scoring, and duplicate detection;
- mocking, API testing, imports, and code generation;
- collaboration and review workflows;
- API versioning and lifecycle states;
- AI-assisted API discovery;
- onboarding and service-catalog evolution;
- ongoing adoption sessions with engineering teams.

The product has evolved continuously, so the design work has also involved revisiting earlier decisions when usage data and feedback showed they could be improved.

## 1. Designing one lifecycle instead of another standalone tool

Early research made two complementary needs clear: engineers needed a place to **discover and consume APIs**, and a place to **design and govern them**.

That led to two connected product surfaces:

- **Marketplace** — discovery, evaluation, documentation, ownership, and subscription;
- **Design Studio** — contract creation, editing, validation, and publishing.

Treating these as two sides of the same lifecycle was an important architectural decision. An API designed by a provider should become understandable and actionable for a consumer without requiring a second documentation workflow.

### Search first for consumers

The Marketplace prioritised search because consumers typically arrived with a need rather than an interest in browsing. Service cards surfaced enough information to judge relevance without forcing users into every detail page.

### Guided subscription instead of a long form

Access requests were turned into a structured journey that captured the information providers needed to make a decision while giving consumers clear status and next steps.

> 📸 **[VISUAL: Marketplace search → service detail → subscription journey.]**

## 2. Supporting beginners and experts in the same Design Studio

One of the earliest tensions was the editor itself.

Experienced API designers were comfortable working directly in YAML or JSON. Less experienced users benefited from a visual interface that explained the structure of an API contract.

Instead of choosing one model, I designed for both:

**Basic / visual editor**  
A guided interface for creating a specification through structured fields and progressive disclosure.

**Advanced / code editor**  
A direct YAML/JSON editing environment for engineers who preferred working with the specification itself.

Users could move between the two modes, with warnings where a transition could affect formatting or unsupported content. The objective was to preserve expert efficiency without making OpenAPI knowledge a prerequisite for getting started.

> 📸 **[VISUAL: Side-by-side or short interaction showing Basic ↔ Advanced editor switching.]**

### Linting as guidance, not punishment

Quality checks were integrated directly into the design experience. Rather than waiting until review or deployment, the linter surfaced issues while the contract was being written, with explanations and a path to correction.

The interaction principle was important: **governance should feel like a knowledgeable reviewer helping early, not a gate appearing late.**

## 3. Moving governance earlier in the workflow

As the product matured, several features extended that principle.

### Duplicate detection

Potential overlaps are surfaced while a new service is being created, giving teams an opportunity to investigate an existing API before implementation work begins.

### API quality scoring

Quality signals show where documentation or standards need attention, explain why the score exists, and give providers an actionable route to improvement.

### Versioning and lifecycle communication

Providers can manage Published, Deprecated, and Retired states, attach change logs, and communicate what changed between versions. API lifecycle management becomes a communication workflow rather than only a technical status.

### Approval and deployment integration

Later integrations connected API documentation and contract quality with broader engineering-governance workflows. This changed the UX stakes: when a platform becomes part of the development process rather than an optional utility, errors and ambiguity can block real teams under deadline pressure.

The design priority became increasingly clear: **surface what is wrong, why it matters, and how to fix it before the user reaches a hard gate.**

> 📸 **[VISUAL: Governance progression — linting during design → quality signal → review/approval → deployment readiness.]**

## 4. Expanding from design and discovery into everyday developer work

Real adoption exposed the gaps between an API catalogue and a complete developer workflow.

### Design Studio revamp

Usage and feedback from the first version led to a ground-up redesign of the creation experience. The revamp improved hierarchy, navigation between specification sections, progressive disclosure, and overall coherence with the broader developer platform.

Internal product reporting indicated that teams using the revamped Design Studio saw **approximately a 40% reduction in API contract design time** compared with the previous version.

> 📸 **[VISUAL: Design Studio before / after, annotated around hierarchy, navigation, and editing focus.]**

### Built-in API testing

The API Tester brought common testing tasks into the same platform: request configuration, authentication, variables, scripting, response inspection, GraphQL support, collection sharing, code snippets, and security-testing handoff.

The design challenge was not to reproduce every feature of a specialist testing product. It was to make the most common internal workflows immediately usable in the context where engineers were already designing and discovering APIs.

### Imports and code generation

Existing APIs could enter the platform from multiple sources rather than forcing teams to recreate work. Code generation then helped providers and consumers move from a validated contract toward implementation with less setup.

> 📸 **[VISUAL: Import → validate → test → generate code workflow.]**

## 5. Designing for adoption, not only delivery

When the first Marketplace and Design Studio experiences launched, the team learned an important lesson: **solving a real problem does not guarantee adoption.**

Engineers already had established habits and tools. Rather than wait for organic discovery, I worked with product and engineering colleagues on more than **60 team sessions** across engineering groups and business areas.

The sessions were tailored to the context of each team. A team focused on customer-facing APIs heard a different story from one managing internal services or portfolio-wide governance.

These sessions became a feedback loop as much as an adoption activity. Questions and resistance surfaced missing use cases, confusing interactions, and assumptions that could be fed back into the product.

> 📸 **[VISUAL: Brown-bag / onboarding material with confidential identifiers removed.]**

## 6. Adding AI where it reduces discovery friction

The GenAI API Explorer introduced natural-language discovery into the Marketplace. Instead of knowing the exact service name or terminology, a consumer can describe the capability they are looking for and receive relevant API suggestions.

The design challenge was not simply adding a chat box. The experience had to connect an AI-generated answer back to concrete, inspectable API information so the user could evaluate the result and take action.

That meant thinking about:

- how AI results coexist with conventional search;
- how confidence and uncertainty are communicated;
- how a conversational answer leads into documentation, testing, and subscription;
- how to avoid presenting generated output as authoritative when the underlying service information is what matters.

> 📸 **[VISUAL: Natural-language query → suggested APIs → inspectable service details.]**

## Impact and scale

The strongest evidence is a combination of adoption, workflow improvement, and the platform's increasing role in the software-development lifecycle.

### Product adoption

| Signal | Evidence |
| --- | --- |
| API Marketplace monthly active users | ~800 in FY24 |
| Design Studio monthly active users | ~600 in FY24 |
| Services onboarded | ~500 by FY24 Q3 |
| Adoption sessions | 60+ across FY23–FY24 |
| API contract design time | ~40% reduction for teams using the revamped Design Studio |

The adoption sessions were an important part of building awareness and gathering feedback. They should be viewed as one contributor to product adoption rather than the sole cause of the usage figures.

### Platform role

Over subsequent phases, the platform expanded from a product teams could choose to use into infrastructure connected to onboarding, API documentation quality, service governance, security testing, and deployment workflows.

That progression is important because it demonstrates that the design had to scale beyond a collection of features. The product became a system engineers needed to understand and trust as part of everyday delivery.

### Design outcomes

- A unified provider-to-consumer API lifecycle replaced multiple disconnected interaction patterns.
- API discovery became searchable and structured rather than dependent on institutional knowledge.
- Quality feedback moved closer to the moment an API contract is designed.
- Guided subscription and lifecycle states created a consistent model for access and change communication.
- Dual editing modes allowed the same product to support different levels of API expertise.
- Built-in testing, imports, and code generation reduced context switching across common workflows.
- AI-assisted discovery created a lower-friction entry point while still grounding users in inspectable service information.

## Reflection

Working on the product from inception has made the compounding effect of early design decisions very visible. Information architecture, mental models, and interaction patterns become foundations that later features inherit.

The dual-editor decision is a good example. Supporting both visual and code-based creation required more design effort, but it allowed the platform to serve a much broader range of engineers without forcing either group into an unnatural workflow.

The adoption phase also changed how I think about enterprise-product design. Shipping the interface was only part of the job. Teams needed to understand why changing an established workflow was worth the effort, and the conversations required to earn that trust often exposed product issues faster than another internal review would have.

The Design Studio revamp reinforced the value of revisiting earlier work without being defensive about it. Real usage made it possible to see where the original experience had become too dense or difficult to navigate, and the right response was to improve it rather than preserve it because it had already shipped.

Finally, the platform's move into governance and deployment changed the consequences of UX decisions. When a tool is optional, friction hurts adoption. When it becomes part of the development pipeline, friction can block delivery. That requires a much higher bar for clarity, recovery, and explanation.

## What I would do differently

I would establish a standing developer advisory group from the beginning: a small cross-section of providers, consumers, architects, and engineers with different levels of API expertise who could participate continuously rather than only at major milestones.

The product eventually developed strong feedback loops through onboarding and adoption work, but building that relationship earlier could have exposed some assumptions before they became established patterns.

I would also connect product adoption and governance signals earlier in the product strategy. The later organisational integrations showed how powerful it is when good API practices are reinforced by the systems engineers already use to understand engineering health.

## Visual plan for the website

The case study should be visualised around the lifecycle rather than showing every feature as an individual screenshot.

1. **Before-state ecosystem map** — disconnected tools and handoffs.
2. **Provider / consumer / governance lifecycle** — who the platform serves.
3. **Marketplace journey** — search → evaluate → subscribe.
4. **Dual-editor interaction** — visual editor ↔ YAML/JSON.
5. **Governance shift-left diagram** — linting → quality → review → deployment readiness.
6. **Design Studio before / after** — why the FY24 revamp mattered.
7. **Integrated workflow** — import → design → mock/test → publish → discover/subscribe.
8. **AI Explorer interaction** — natural language → suggested services → inspectable result.
9. **Evolution timeline** — product launch → depth → power tools → AI → platform governance.
10. **Impact panel** — adoption, 60+ sessions, ~40% design-time reduction, and platform integrations.

## Publication review

Before publishing, confirm approval for:

- the company and internal product names;
- current and historical usage metrics;
- internal programme, governance, platform, and deployment-system names;
- screenshots, architecture diagrams, Figma artefacts, and recorded demos;
- direct quotations and named team evaluations;
- claims that the platform is mandatory, a deployment gate, or an organisational source of truth;
- future-looking AI and service-catalog capabilities that may not yet be public.

Where approval is unavailable, generalise terminology and reconstruct visuals while preserving the original product problem, design decisions, and interaction model.
