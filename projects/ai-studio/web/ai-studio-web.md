# Studio

## One place to build, host and share AI skills, MCPs, agents, APIs and plugins

**Walmart Global Tech · 2026-Present · AI platform · Product design · Design in code**

Studio is part of Wibey, Walmart's internal AI portal. Engineers use it to create, manage, publish and share artifacts: skills, MCPs, agents, APIs and plugins. Before it, the people who built these kept them on their own machines.

It was my first agentic product. Studio was a shared project, and I owned the entire experience of this version, from the first idea to a working front end in code, built in Cursor and VS Code.

**Role:** Senior UX Designer, owner of the entire experience
**Status:** Started in April, live since August

> **At a glance**
> **Five kinds of artifact in one place** · **Live since August** · Counts of what has been created and published: **pending**

[MEDIA - HERO: pending. A screen of Studio. The coded prototype screens are used for now.]

## What the artifacts are

Engineers build artifacts here. A skill teaches an AI assistant how to do one job. An MCP (a connector for AI tools) lets it use another system. An agent carries out a task in steps. Plugins bundle these for others to install, and APIs let other software use what they do.

*Pending confirmation: the plain definitions of plugin and API as used in the portal.*

## AI became part of everyday work, so Walmart built its own place for it

As AI tools became part of how engineers work, data security and compliance became a concern. Walmart restricted the use of outside tools such as Cursor, Claude and Bolt on personal licences, which had also become a higher cost.

So Walmart built an internal AI portal for its engineers, Wibey. It is built on Claude, and it keeps the work inside the company so company data stays secure.

Studio is a section on the left panel of Wibey, for the engineers who build artifacts: agents, skills and MCPs. It is where they build, host and share them.

## A chat can do almost anything, so the interface has to add what it can't

Until Studio, the products I designed did what a person told them, one step at a time. Studio is different. A person can ask a chat for almost anything, and an agent will do it.

So my question changed. It was no longer which screens a person needs, but what a chat can't give them: a way to see how the agent works, to change it, and to test it before anyone relies on it.

## Useful work stayed on the machine it was built on

People were building agents, skills and MCPs for themselves and their teams. Each one lived on its owner's machine. None was hosted, shared across the company or open to anyone else.

The only way to use one was through a repo its owner chose to share. The owner decided who could reach it.

[VISUAL - BEFORE: files on one machine, shared by repo -> AFTER: one hosted place]

## An agent is a workflow a person can see, edit and test

The agent builder uses the node-based style of workflow tools such as n8n. An agent is not a block of settings. It is an orchestrator with sub-agents, and each one shows its model, its MCP servers and its tools.

A person builds the agent as a workflow, runs it, sees the result straight away, and tweaks it as often as they need. That is the control a chat does not give them on its own.

[SCREEN - agent canvas, from the coded prototype. Sample data.]

## I had the chat in the wrong place

We first built an elaborate interface and treated the chat as one item in it, like any other panel. That is how interfaces have always been built.

We soon saw it the other way round. Building by conversation is the new way, so the chat leads, and the preview shows the person what the AI built for them.

[MEDIA - pending. The first version, with the chat as one panel among others, beside the later version where the chat leads and the preview shows what was built.]

## A person could build an agent in the chat alone. Engineers still need the preview.

Technically, a person can create an agent without ever leaving the chat. But engineers need a container where they can see the thing as it is built, so they can make decisions as it takes shape.

So the preview stays, and the chat feeds it. For an MCP, it lists each generated tool with what it can change, and a box to keep or drop it.

[SCREEN - MCP review, from the coded prototype. Sample data.]

## I assumed one owner. It became a team's artifact.

I assumed each agent or MCP would belong to one person, and that any team could build agents on any MCP. Neither held. An agent or an MCP quickly becomes a team's shared artifact, and only the teams that own the APIs and MCPs can publish an approved agent.

So the shared registry holds only verified agents. Anyone can build whatever they like in their own playground or on their own machine, but they can't publish it there.

[SCREEN - library, from the coded prototype. Sample data; two workspace names blurred.]

> A chat can do almost anything. The interface is what lets a person see it, change it and trust it.

## In code, everything can be clicked, so I built the path for a reviewer to follow

I came from Figma, where everything is frozen in time. A coded interface was new to me: everything can be clicked and tried. So I built demo flows and orchestrated flows that walk a reviewer along the happy path, for stakeholder and user reviews.

I built the front end in Cursor and VS Code, in several versions, and hosted it on GitHub Pages so people could use it and tell me what to change. Developers used it as their front-end reference, so they could spend their time on the backend and the integrations.

To keep the screens consistent, I taught Cursor a design system: a set of guides and common elements. Visual polish was the hardest part. Getting things to look right took many rounds.

[CLIP - the coded prototype, an agent being opened and edited; 15 seconds, from the July recording. A better recording is coming.]

## I would prove the flows in HTML first, and write down the context

I would build an HTML prototype first and get every flow right before moving to React.

And I would write more of the context in markdown files, so the AI does not make things up, and I spend my time designing instead of explaining an idea it finds hard to follow.

## Live since August

Work began in April and Studio has been live since August.

Counts of what people have created and published in Studio are not on this page yet.

*Pending: the counts, with what each one counts, the dates and who owns the figure. The Wibey-wide usage figures are not Studio's and are not used.*

## Closing

> Work that can only be shared by passing a repo stays with the person who built it.

*Confidential internal work. Product names are generic.*

---

Source notes (not for the page)
- The author's own answers (November 2026): what was new about designing for an agent; the chat placed as one panel first and then leading; why the preview stays for engineers; the wrong assumption about single ownership and who can publish; building in code after Figma, demo and orchestrated flows for stakeholder and user reviews, teaching Cursor a design system, visual polish as the hardest part; what to do differently (HTML first, markdown context files). The agent builder follows the node-based style of workflow tools such as n8n.
- Facts from the author earlier: started in April, live since August; five artifact types live; before Studio artifacts were local, not hosted, not shared, reached only through a repo shared by the owner; multiple iterations across UX, interactions and workflows; built in code with Cursor; owned the entire experience of this version.
- Facts from the Confluence write-up: hosted on GitHub Pages for feedback; developers used it as the front-end reference and focused on backend and integration.
- Screens come from a screen recording of the coded prototype (July, before launch, sample data). A better recording and an early screen of the first version are coming.
- Seen in the recording but not on the page: artifact types Prototype and PDLC, a model name in the chat panel, and two workspace names that were blurred.
- Not used: the Wibey-wide usage figures; the roadmap and the v0.1 use-case list; every internal system name.

- Names, updated: Wibey is public (Walmart Global Tech announced it in 2025, with press coverage), so it is named. The author confirmed it is built on Claude and that it can be said. Internal systems behind it (the LLM gateway, registries, deployment platforms) stay unnamed. "Artifacts" is the term the prototype uses, defined once as agents, skills and MCPs (and APIs and plugins).
- Context facts from the author: the company restricted personal licences for outside tools such as Cursor, Claude and Bolt, which had also become a higher cost, and the portal keeps company data secure; the main users are engineers; Studio is on the left panel of the portal.
