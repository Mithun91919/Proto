# Studio

## One place to build, host and share AI skills, MCPs, agents, APIs and plugins

**Walmart Global Tech · 2026-Present · AI platform · Product design · Design in code**

Studio is part of an internal AI portal. People use it to create, manage, publish and share skills, MCPs, agents, APIs and plugins. Before it, the people who built these kept them on their own machines.

Studio was a shared project. I owned the entire experience of this version, from the first idea to a working front end in code, built in Cursor and VS Code.

**Role:** Senior UX Designer, owner of the entire experience
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

## Everything people build sits in one library, with a status

Each person has a private workspace, and teams have shared ones. Every asset in them shows its type, its status and its owner, so a person can filter to the skills or the MCPs and see whether one is a draft, in review or approved.

This replaced sharing by repo. An asset sits where the people in a workspace can see it, with its status beside it.

[SCREEN - library, from the coded prototype. Sample data; two workspace names blurred.]

## A person describes what they want, and Studio drafts it

Create New opens a chat. A person writes what they need, such as an agent that helps new teammates settle in, and Studio replies with what it will create: a name, what it does, its trigger and its tools. It offers next steps, such as adding error handling, and the result opens as a draft.

An agent then opens as a canvas of linked nodes: an orchestrator with sub-agents, each with a model, MCP servers and tools. A palette beside it adds a sub-agent, an MCP server, tools, a human handoff or a termination.

[SCREEN - agent canvas, from the coded prototype. Sample data.]

## Every type opens with the chat on the left and the asset on the right

An MCP opens as a set of generated files. Each tool is listed with its method, its endpoint and what it can change, and has a checkbox to keep or drop it.

An agent and an MCP end in the same actions: Save, Run and Publish. An MCP can also be validated, tested in its own playground and deployed.

[SCREEN - MCP review, from the coded prototype. Sample data.]

## I owned the entire experience

Studio was a shared project. I designed this version end to end, from the first idea to a working front end in code.

## The design was a working front end, not a set of screens

The scope called for something close to development. A set of Figma screens shows layout and visual direction, but not how an interface behaves while an AI agent runs.

So I built the front end in code, in Cursor and VS Code, in several versions, and hosted it on GitHub Pages so stakeholders and users could use it and tell me what to change.

Developers used it as their front-end reference. They did not have to interpret static screens, so they could spend their time on the backend and the integrations.

*Pending confirmation: whether the whole front end or a lightweight prototype was built in code, and how much developers reused.*

[CLIP - the coded prototype, an agent being opened and edited; 15 seconds, from the July recording. A better recording is coming.]

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
- Third source, a screen recording of the coded prototype (July, before launch, sample data), supplied by the author. Used for the library, creating, and one-layout chapters, the three screens and the clip. The author confirmed: this is the prototype, all five asset types are live, the data is sample data, and this version was owned end to end by the author. A better recording is coming.
- Seen in the recording but not on the page: asset types Prototype and PDLC (not in the author's five), a model name in the chat panel, and two workspace names that were blurred.
- Second source, the Studio product documentation, summarised by the author's tooling: the builder, gallery, agent patterns, attaching a registered MCP server, the two playgrounds, publish and export. Used for the "build, watch, publish" chapter only, with internal product and system names left out.
- That documentation covers building agents and attaching existing MCP servers only. The recording and the author show MCP creation and all five types, so the page follows them.
- Not used: the roadmap and the v0.1 use-case list (examples, not proof of what is live), the pattern examples as live use cases, and every internal system name.
- Facts from the author: shared project with a staff designer; started April, live since August; five asset types in; before Studio assets were local, not hosted, not shared, reached only through a repo shared by the owner; multiple iterations across UX, interactions and workflows; built in code with Cursor.
- Facts from the Confluence write-up the author pasted: Figma to coded prototype in Cursor and VS Code; hosted on GitHub Pages for feedback; developers used it as the front-end reference and focused on backend and integration.
- Not used: the Wibey-wide usage figures (active users, MCP servers, tool calls, plugin sub-agents). They are not Studio figures.
- Names: "Wibey", "Wibey Web", the LLM gateway and the deployment platforms are internal and are not named. Claude is not named.
