# Studio

## One place to build, host and share AI skills, MCPs, agents, APIs and plugins

**Walmart Global Tech · 2026-Present · AI platform · Product design · Design in code**

Studio is part of an internal AI portal. People use it to create, manage, publish and share skills, MCPs, agents, APIs and plugins. Before it, the people who built these kept them on their own machines.

I worked on it with a staff designer. We defined the experience point of view together, each took a field of the product, and each of us refined part of the flow or all of it. We built the front end in code, in Cursor and VS Code.

**Role:** Senior UX Designer, with a staff designer
**Status:** Started in April, live since August

> **At a glance**
> **Five kinds of asset in one place** · **Live since August** · Counts of what has been created and published: **pending**

[MEDIA - HERO: pending. A screen of Studio showing the five kinds of asset. Needs real, anonymised captures.]

## What the assets are

A skill teaches an AI assistant how to do one job. An MCP (a connector for AI tools) lets it use another system. An agent carries out a task in steps. Plugins bundle these for others to install, and APIs let other software use what they do.

*Pending confirmation: the plain definitions of plugin and API as used in the portal.*

## Useful work stayed on the machine it was built on

People were building agents, skills and MCPs for themselves and their teams. Each one lived on its owner's machine. None was hosted, shared across the company or open to anyone else.

The only way to use one was through a repo its owner chose to share. The owner decided who could reach it.

Studio sits inside the AI portal and hosts all five kinds of asset. A person creates, manages and publishes them there.

[VISUAL - BEFORE: local files shared by repo -> AFTER: one hosted place]

## Five kinds of asset, one product

Skills, MCPs, agents, APIs and plugins are all in. A person creates, manages and publishes each of them from the same place.

[MEDIA - pending. The Studio home or asset list showing the five kinds.]

*Pending: the one or two design decisions that mattered most, with the screen for each.*

## A person assembles an agent team, watches it run, then publishes it

The builder is visual. A person drags components into a team, or writes the configuration as JSON. A gallery lists pre-built agents, models and other components to start from.

Each agent in the team has a name, a description, a system message and a model. An MCP server that is already registered can be attached to an agent from a panel, and the agent then has the tools that server offers.

A team can run three ways: in a fixed order, with one agent choosing who acts next, or with explicit handoffs from one agent to another.

[MEDIA - pending. The builder with a team of agents on the canvas and one agent's settings open.]

## A playground shows which agent is acting while the team runs

Before publishing, a person runs the team in a playground. It streams the messages between agents and draws a graph of which agent has control, so the person can see the work move from one to the next. A run can be paused or stopped.

The tool-call trace shows whether the intended tool was called. A separate playground tests MCP servers on their own.

A finished agent can be published and deployed through a production-ready starter kit, or exported as a configuration to run elsewhere.

[MEDIA - pending. The playground mid-run: the messages between agents and the graph of which agent is acting.]

## Two designers, one point of view

I worked on Studio with a staff designer. We defined the experience point of view together. We each took a field of the product, and each of us refined part of the flow or all of it.

*Pending: the one or two parts I led myself, so the page says who did what.*

## The design was a working front end, not a set of screens

The scope called for something close to development. A set of Figma screens shows layout and visual direction, but not how an interface behaves while an AI agent runs.

So we built the front end in code, in Cursor and VS Code, in several versions, and hosted it on GitHub Pages so stakeholders and users could use it and tell us what to change.

Developers used it as their front-end reference. They did not have to interpret static screens, so they could spend their time on the backend and the integrations.

*Pending confirmation: whether the whole front end or a lightweight prototype was built in code, and how much developers reused.*

[MEDIA - pending. A short clip of the working front end: building a workflow and running it.]

> A screen shows what an interface looks like. Code shows what it does.

## It went through several versions

The front end changed over many versions, in three groups: the UX, the interactions and the workflows. Versions were shared with stakeholders and users for feedback.

[MEDIA - pending. Two or three before/after pairs: an early and a later screen of the same view, with the feedback that changed it.]

## Live since August

Work began in April and Studio has been live since August.

Counts of what people have created and published in Studio are not on this page yet.

*Pending: the counts, with what each one counts, the dates and who owns the figure. The Wibey-wide usage figures are not Studio's and are not used.*

## Closing

> Work that can only be shared by passing a repo stays with the person who built it.

*Confidential internal work. Product names are generic.*

---

Source notes (not for the page)
- Second source, the Studio product documentation, summarised by the author's tooling: the builder, gallery, agent patterns, attaching a registered MCP server, the two playgrounds, publish and export. Used for the "build, watch, publish" chapter only, with internal product and system names left out.
- CONFLICT TO RESOLVE: that documentation describes building agents and attaching existing MCP servers. It does not describe creating skills, MCP servers, APIs or plugins in Studio, and says Skills are documented separately. The page currently says all five kinds of asset are in Studio, as the author told me. Confirm which is right before this goes further.
- Not used: the roadmap and the v0.1 use-case list (examples, not proof of what is live), the pattern examples as live use cases, and every internal system name.
- Facts from the author: shared project with a staff designer; started April, live since August; five asset types in; before Studio assets were local, not hosted, not shared, reached only through a repo shared by the owner; multiple iterations across UX, interactions and workflows; built in code with Cursor.
- Facts from the Confluence write-up the author pasted: Figma to coded prototype in Cursor and VS Code; hosted on GitHub Pages for feedback; developers used it as the front-end reference and focused on backend and integration.
- Not used: the Wibey-wide usage figures (active users, MCP servers, tool calls, plugin sub-agents). They are not Studio figures.
- Names: "Wibey", "Wibey Web", the LLM gateway and the deployment platforms are internal and are not named. Claude is not named.
