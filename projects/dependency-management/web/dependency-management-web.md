# Dependency Health Platform

## Turning dependency compliance data into clear actions developers can take

**Walmart Global Tech · 2025-Present · Developer platform · Product design**

Large Java application ecosystems generate a lot of dependency data: standard-library versions, Java versions, security signals, conflicts, version drift, onboarding state, and technical debt.

The data existed. The harder problem was helping developers and engineering leaders understand **what mattered, why it mattered, and what to do next**.

I own the UX for a dependency-health platform that translates those technical signals into repository health, organisation-level visibility, and guided remediation.

**Role:** Senior UX Designer; end-to-end UX owner

> **At a glance**  
> **Repository -> Pillar -> Organisation visibility** · **148 repositories in the initial major-version pilot** · **Self-service onboarding and remediation**

[MEDIA - HERO: REPOSITORY HEALTH -> DIAGNOSIS -> ACTION]

## The problem was not a lack of data

Teams often discovered dependency debt during migrations, breakages, or security work rather than through proactive visibility.

At the same time, exposing every available technical signal would have created a complete but overwhelming dashboard.

Research pointed to a more useful framing:

> **The data needed to be organised around the decisions people were trying to make.**

A developer asks: **Is my repository healthy, and what should I fix first?**

A manager asks: **Which teams are falling behind?**

A platform administrator asks: **What is the state of adoption and compliance across the organisation?**

The same underlying data needed a different hierarchy at each level.

[VISUAL - AUDIENCE -> FIRST QUESTION -> INFORMATION NEEDED]

## We turned technical signals into a decision model

The highest-leverage design work happened before the dashboard.

I mapped signals such as the approved library baseline, Java version, feature-library freshness, conflicts, and version drift against two questions:

**Who needs this?**

**What decision does it help them make?**

That produced a layered health model rather than a wall of metrics.

For a repository, the experience begins with a concise overall state and the issues requiring attention. Detail opens progressively for diagnosis. The next action remains close to the status that created the question.

The interaction principle became:

**Summary for orientation -> Diagnosis for understanding -> Action for resolution**

[VISUAL - OVERALL HEALTH -> UNDERLYING SIGNALS -> REMEDIATION]

## Compliance became a guided path, not a warning state

Repositories that are behind may need several technical changes in sequence: updating enforcement, removing legacy libraries, upgrading Java, or adopting the current standard-library baseline.

A red status can tell an engineer something is wrong without helping them understand how to recover.

I designed onboarding and remediation as a progressive journey. The current step is explicit, completed work remains visible, dependencies between steps are clear, and each stage explains the expected action and outcome.

Where automation can help create the required code change, it appears at the point of action rather than as a disconnected capability.

The goal is to close the gap between:

**"I know my repository is behind"**

and

**"I know what to do next."**

[MEDIA - GUIDED ONBOARDING / REMEDIATION FLOW]

## The same health model had to work at different levels of scale

Repository health is useful to an individual team. It becomes a different design problem when leaders need to understand hundreds of repositories together.

Pillar and organisation views aggregate the same health model for comparison and prioritisation, while governance reporting opens into deeper filtering and analysis.

The product therefore uses one underlying language across different decision contexts rather than inventing a new dashboard at every level.

[VISUAL - REPOSITORY -> PILLAR -> ORGANISATION -> REPORTING]

## Post-launch feedback became a systems problem

After launch, developers had different preferences for how dashboard states should be represented visually.

Instead of hard-coding alternate colours into individual components, we moved the product toward **semantic design tokens and theme-level control**. The same meaning could remain consistent while presentation changed across themes.

That turned a local preference request into a more maintainable platform decision.

[VISUAL - COMPONENT -> SEMANTIC TOKEN -> THEME]

## Current evidence

The product is live and continues to evolve. The initial major-version pilot covered **148 repositories**, and the platform now supports dependency-health visibility from individual repositories through pillar and organisation views, alongside self-service onboarding and remediation.

Because the programme is active, I would rather show verified adoption and workflow changes than invent a stronger-looking outcome metric.

## What I believe now

### Technical completeness and product usefulness are not the same thing.

The platform can generate more data than most people need. The design value comes from deciding which signals matter at which moment.

### A compliance state should always explain the path forward.

When people are required to resolve an issue, the product has a responsibility to explain not only what is wrong, but why it matters and what happens next.


## Want to go deeper?

The protected deep dive can hold the detailed research, iterations, implementation evidence, and technical context used during interviews.

**View design deep dive [locked]**

<!-- INTERNAL: Public label is Dependency Health Platform. Dependency Management is internal/supporting terminology only. Reconstruct screenshots with fictional repositories and dependency data. Review governance terminology, enforcement details, repository names, URLs, current adoption figures and architecture before publication. -->
