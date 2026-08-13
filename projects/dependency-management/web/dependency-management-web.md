# Dependency Management

## Turning dependency governance into a clear path to action

Walmart Global Tech manages a large Java application ecosystem. Over time, applications had accumulated different library versions, legacy packages, and inconsistent upgrade paths. The technical data existed, but teams did not have a consistent way to understand dependency health, prioritise what mattered, or move from a compliance signal to a concrete fix.

I took ownership of the UX for **Dependency Management**, the internal portal that translates that underlying governance and dependency data into an experience for developers, engineering leaders, and platform administrators.

The core design problem was less about creating another dashboard and more about **turning abundant technical metadata into decision-ready information and guided action**.

> **At a glance**  
> **Role:** Senior UX Designer — design lead for the portal  
> **Timeline:** 2025–Present  
> **Product:** Developer governance / dependency health platform  
> **Scope:** Research, metric prioritisation, information architecture, repository and organisation views, onboarding, remediation, reporting  
> **Current evidence:** 148 repositories tracked in the pilot for the latest major standard-library baseline

> 📸 **[SYSTEM MAP: Fragmented dependency signals → prioritised health + guided remediation → clearer path to compliance]**

## The problem: teams had data, but not a usable decision model

Dependency health was difficult to manage consistently across a large engineering organisation.

Teams often discovered dependency debt during migrations, breakages, or security work rather than through proactive visibility. Tracking was informal, terminology was inconsistent, and engineering managers could not easily understand dependency health across a portfolio from repository-level logs.

At the same time, the platform backend could expose many technical signals: library-baseline versions, Java versions, onboarding state, security exposure, version drift, conflicts, and technical-debt categories.

Showing all of that equally would have created a technically complete interface that was difficult to act on.

Research revealed a more useful framing:

> **The problem was not a lack of data. The data was not yet structured around the decisions people needed to make.**

> 📸 **[VISUAL: Before-state diagram — repository logs / spreadsheets / informal coordination → no shared view of dependency health]**

## Designing for three different decisions

The portal serves people looking at the same underlying data from very different levels of responsibility.

### Developers and tech leads

Their first question is immediate:

**Is my repository compliant?**

If it is not, the next question is:

**What do I need to do first?**

For them, the experience needed an action-first repository view, clear status, plain language, and an explicit remediation path.

### Engineering managers and leaders

Their problem is comparative rather than diagnostic:

**Which teams are behind, and where should I focus attention?**

They needed aggregate health across a pillar or organisation, distribution patterns, progress over time, and a path to drill into the teams creating the risk.

### Platform and governance teams

Their view is analytical:

**What is the state of adoption and compliance across the organisation?**

They needed granular filtering, reporting, and export across organisational and product dimensions.

The same dependency data therefore could not simply be repeated on three pages. It needed to be **layered differently around each audience's decision**.

> 📸 **[VISUAL: Audience → first question → information needed. Three compact decision cards rather than personas.]**

## 1. Prioritising signals before designing the dashboard

One of the highest-leverage design decisions was deciding what **not** to show by default.

The backend could expose many metrics per repository, but users did not need to understand all of them at the same time. I mapped each signal against two questions:

1. **Who needs this information?**
2. **What decision does it help them make?**

That produced a layered information architecture.

For a developer, the entry point is a concise overall health/compliance state followed by the issues that require action. For a manager, the entry point is distribution and comparison across teams. For administrators, the interface progressively opens into the broader reporting model.

This prevented the product from becoming a generic enterprise dashboard where every metric competes for attention.

> 📸 **[VISUAL: Metric prioritisation matrix — signal × audience × decision × hierarchy level.]**

## 2. Making a compound health model understandable

Dependency freshness is not a single number. The portal evaluates multiple dimensions, including:

- the approved library-baseline / BOM version;
- Java version;
- freshness of feature libraries.

The UX challenge was communicating an overall state quickly without hiding the reason behind it.

The repository dashboard therefore uses a **composite status first, explanation second** model. A tech lead can understand the application's overall position in seconds, while an engineer planning an upgrade can expand the underlying dimensions and inspect the detailed technical signals.

This pattern became an important principle across the product:

> **Summary for orientation. Detail for diagnosis. Action for resolution.**

> 📸 **[VISUAL: Repository dashboard annotated in three layers — overall status → freshness dimensions → issue/remediation detail.]**

## 3. Turning onboarding into a guided technical journey

Repositories that are not yet aligned to the standard platform libraries need to move through a sequence of technical changes.

The underlying process includes steps such as updating enforcement rules, removing legacy libraries, upgrading Java, and adopting the current standard-library baseline. Each step can result in a code change or pull request.

A flat compliance checklist would tell an engineer what was wrong without helping them understand the order in which to fix it.

I designed onboarding as a **progressive journey** instead:

- the current step is explicit;
- dependencies between steps are visible;
- completed work remains visible as progress;
- each stage explains the expected action and outcome;
- automation is surfaced at the moment it can help create the required code change.

The intent was to close the gap research repeatedly exposed between:

**“I know my application is behind”** and **“I know exactly what to do next.”**

> 📸 **[VISUAL: Guided onboarding / remediation flow from unregistered repository → sequential changes → compliant state.]**

## 4. One health model, different levels of scale

Repository health is useful to an individual team. It becomes a different design problem when hundreds of repositories need to be understood together.

For engineering leaders, I designed pillar and organisation views that aggregate freshness without forcing users into repository-by-repository inspection. The interface makes it possible to scan the distribution, identify areas that are lagging, and then drill down only where attention is needed.

For the governance team, the same model expands into a more analytical reporting surface with organisational, product, and status filters plus export.

This is the broader systems-design problem behind the product: **one underlying health model has to remain coherent as the interface moves from one repository to an organisational portfolio.**

> 📸 **[VISUAL: Same data at three levels — repository → pillar/org roll-up → governance reporting.]**

## 5. Designing for a product people may be required to use

Dependency Management sits in an unusual product category.

Compliance can be enforced through engineering processes, so some users arrive because they **need** to resolve an issue rather than because they chose the product.

That changes the UX standard.

When usage is mandatory, unclear terminology and dead ends are not adoption problems; they become operational friction for teams already trying to ship software.

Three design principles became especially important:

**Plain-language defaults.** Technical depth remains available, but the interface should not require every engineer to understand build-governance terminology before they can act.

**Progressive disclosure.** Conflict chains, version drift, and other deep technical data appear when they help diagnosis rather than dominating the default experience.

**Always pair status with a next step.** A red compliance state without a path forward simply transfers the governance problem to the user.

> 📸 **[VISUAL: Example of status-only communication vs status + explanation + next action.]**

### Post-launch iteration: when colour preference became a systems problem

After the portal went live, feedback sessions surfaced mixed preferences around the dashboard's colour treatment. There was no single palette that consistently worked for everyone, and continuing to adjust colours screen by screen would have created more inconsistency.

Rather than treating the feedback as a cosmetic change, we moved the solution into the design system. Components reference **semantic colour tokens rather than hard-coded values**, allowing a theme to be applied consistently across the platform while giving users a choice of visual treatment.

What started as subjective feedback about colour became a more durable systems decision: **user choice at the surface, consistency and maintainability underneath.**

> 📸 **[VISUAL: Same dashboard in 2–3 themes + simple diagram: component → semantic token → theme.]**

## Current outcomes

The portal is live and continues to evolve alongside the dependency-governance programme.

Current evidence includes:

- **148 repositories** tracked in the pilot for the latest major standard-library baseline;
- guided self-service onboarding replacing a process that previously required more manual coordination;
- dependency-health reporting available at **repository, pillar, organisation, and product level**, with each level designed around a different decision context.

Because the programme is still active, I would rather show verified adoption and workflow changes than manufacture a stronger-looking outcome metric. As more post-launch data becomes available, the most useful measures will be remediation completion, time to compliance, self-service success, and reduction in repeated support or coordination.

> 📸 **[VISUAL: Compact current-state metric strip + product evolution timeline. Mark active work clearly.]**

## What I learned

The most important lesson was that **technical completeness and product usefulness are not the same thing**.

The platform could generate more dependency data than most users needed. The design value came from deciding which signals mattered at each level, translating unfamiliar concepts into a usable vocabulary, and connecting every important status to an action.

The metric-prioritisation work therefore became more foundational than any individual screen. Once the information hierarchy was right, the repository dashboard, leadership roll-ups, reporting, and remediation flows could all inherit the same logic.

I also learned that compliance-driven products need a particularly high standard for recovery and guidance. When users cannot opt out of the workflow, the product has a responsibility to explain not only **what** is required but **why** and **what happens next**.

## What I would do differently

I would involve UX earlier in the platform data model. Some terminology and grouping decisions were already encoded into the system before the interface work began, which constrained later information-architecture options.

I would also run more co-design with teams while they were actively migrating complex repositories. That would expose edge cases such as custom build configurations and multi-module repositories earlier in the design cycle.

Finally, I would validate the vocabulary more formally. Research identified comprehension as a problem, but several terminology decisions were improved through design review and copy iteration rather than dedicated comprehension testing.

## Visual plan for the website

Use approximately **8–10 strong visuals**, not a gallery of dashboards:

1. System Map: fragmented signals → decision-ready health → remediation/compliance
2. Before-state dependency-management landscape
3. Audience / decision map
4. Metric-prioritisation framework
5. Annotated repository dashboard
6. Guided onboarding/remediation flow
7. Repository → pillar → organisation information hierarchy
8. Progressive-disclosure / plain-language example
9. Token-based theme system — same dashboard across themes + component → semantic token → theme
10. Current-state impact + active-work timeline

## Publication review

Before publishing, review internal product names, URLs, governance terminology, screenshots, repository information, technical enforcement details, and current adoption figures. Reconstruct product visuals with fictional repositories and sample dependency data where needed.
