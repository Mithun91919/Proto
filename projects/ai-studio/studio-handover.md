# Studio: the earlier case-study page, word for word

This is the Studio page as it stood before the cleanup (commit `6d07f0b^`), in
page order, with the wording unchanged. Screens and recordings are listed under
each section by their file names in `public/work/ai-studio/` (each recording has
an `.mp4` and a `-poster.jpg`).

---

## Title and description

**Title:** Studio — Taking AI capabilities from an idea towards production

**Description:** Studio is the part of Wibey, Walmart’s internal AI platform, where builders find what already exists, build what doesn’t, test it and publish it for others.

## Hero

**Headline:** Studio: taking AI capabilities from an idea towards production.

**Standfirst:** In Wibey, Walmart’s internal AI platform, builders find what already exists, build what doesn’t, test it and publish it for others. I co-designed the workbenches and the conversation.

| | |
| --- | --- |
| Role | Senior UX Designer, with a staff designer |
| Client | Walmart Global Tech |
| Year | 2026–Present |
| Discipline | AI platform · Product design · Design in code |

Hero screens: `hero-home.jpg` (Studio's home: the list of agents in a workspace, with the workspaces down the left), `workbench-agent-poster.jpg` (the agent workbench), `workbench-mcp-poster.jpg` (the MCP workbench).

## The three beats under the hero

**Why it mattered.** Building an agent got easier. Taking one to production, and reusing it, did not.
Security and other limits made it hard to take what people built into production, or to let other teams use it. Teams also built similar things on their own, so similar capabilities piled up.

**What we built.** Discovery, creation, testing and publishing in one workflow.
Studio brings discovery, creation, testing and publishing together inside Wibey’s protection layer. People create by chatting, edit by hand in a workbench, and find existing work in the same conversation.

**What I did.** I co-designed the workbenches and the conversation.
I worked with a staff designer on the workbenches and the conversation, and with developers on the whole experience. The deliverable was a coded prototype, built over several iterations in Cursor and VS Code, and engineering built the product from it.

---

## Where this started

*With AI, anyone can start to build. Shipping and publishing are still the hard part.*

Security and other limits kept what people built from reaching production, or from being usable by other teams.

---

## Wibey

### First, what is Wibey?

Wibey is Walmart’s internal AI platform for builders. They use it for everyday work, such as designing REST API endpoints, summarising release notes or refining an onboarding workflow. They can also build capabilities for their teams: agents, skills, MCP servers and APIs, which I call artifacts.

Screen: `wibey-chat.jpg`. Caption: Wibey: conversations on the right, grouped into workspaces on the left.

Three callouts on it:
- **Work grouped into workspaces.** Conversations sit under named workspaces, each with a count and, where it is shared, the people in it.
- **Suggested next steps.** After an answer, Wibey offers follow-up options, so the next step is one click rather than a new prompt.
- **Tools and model, at the message box.** Tools and the model are chosen where the message is written.

---

## The problem

### The problem extended beyond creation

Before Studio, builders could use tools available in the market to build these artifacts. Those tools could only work on mock data, because real data sources and APIs stay behind Wibey’s protection layer.

**Two problems after building.** First, work was hard to take into production or share, because of data security and other limits. Second, teams built similar things separately, so it was hard to see what already existed and which to use.

**What Studio needed to do.** Take work from an idea towards production inside Wibey’s protection layer. Make existing work easy to find and reuse, so not every request became a new build.

---

## Who it is for

### Engineers, and now everyone who builds

AI has made building possible for anyone, not only engineers. Studio is for engineers, and for the builders who now work alongside them. Anyone can describe what they want in conversation, and Studio walks them through building it.

**Engineers.** Build capabilities for their teams: agents, skills, MCP servers and APIs.
- Want: See what the AI generated, and work with it directly. Test it and know it is ready before others use it.
- Friction: Data security and other limits made it hard to take what they built into production. An open-ended chat did not gather the details a useful artifact needs. An agent, an API and an MCP do not share a structure, so one generic view did not fit.

**Builders.** Anyone else who can now build with AI, without being an engineer. (Designer, Product manager)
- Want: Take an idea to something that works. Know it is safe and ready before others use it. Publish it for others to use.
- Friction:
  - Hard to know whether what they built was safe or ready → the playgrounds
  - No way to inspect what was built → the workbenches
  - No path to publish it for others → a chat that follows a sequence
  - Did not know what already existed → the chat checks the registry first

*How these were defined:* Drawn from conversations with users.

---

## The approach

### Connect discovery, creation and reuse

We made the chat the hero. In one conversation a builder can make anything, and the AI opens the workbench that suits what they need. These are the pieces it works with, and how they fit together.

*One possible way these building blocks can work together* (a diagram of agent, skill, MCP and API)

For example, an agent helping with onboarding could use a skill for its instructions and an MCP tool to retrieve information from another system. That tool may rely on an API to access the service. This is one possible composition, not an inheritance hierarchy or a required recipe: agents can use different combinations of skills and tools, and APIs can also be used independently.

---

## The conversation

### Give the conversation a clearer path

Starting with a prompt is convenient, but an open-ended conversation may not gather all the information needed to produce a useful artifact. We needed the interaction to remain conversational while asking for the details that matter.

I worked with the staff designer and developers to refine these workflows so the session followed a more directed path. The assistant would ask relevant questions as the user progressed, helping establish context and reduce the risk of hallucinations.

The conversation also gave users a way to continue refining their work. Suggestions in the prototype offered possible next steps, such as adding error handling or tests. The builder could guide the outcome through chat and inspect the artifact in the adjacent workbench.

Recordings:
1. **Check what already exists** (`conversation-1-check`). Before building, the assistant looks for similar agents and lists the matches. The builder chooses to clone and modify one, or to start from scratch.
2. **Ask for the details that matter** (`conversation-2-questions`). It asks about the stuck threshold, how reminders are sent, the language and the schedule, then sets out a plan and offers to create the agent.
3. **Inspect it in the workbench** (`conversation-3-workbench`). The agent opens as a flow beside the chat, where the builder can inspect it and keep refining it through conversation.

---

## Workbenches

### One Studio, different workbenches

An agent, an API and an MCP do not all have the same structure. We therefore designed dedicated workbenches that shared a conversational approach but presented the details relevant to each type of artifact.

Across these experiences, the common idea was to make the result of the conversation tangible. Builders needed to see what they were creating and have ways to work with it directly.

Recordings:
1. **Agents: see the pieces working together** (`workbench-agent`). A canvas shows an orchestrator and its connected agents, with their models, MCP servers and tools. A menu adds a sub-agent, an MCP server, tools, a human handoff or a termination.
2. **APIs: work with the contract directly** (`workbench-api`). Endpoints, datatypes and responses sit in a structured view beside the chat, so the builder can inspect each detail and move towards review.
3. **MCPs: review the generated tools** (`workbench-mcp`). The generated tools are listed for review, each with its description and annotations. MCP Playground, Validate, Publish and Deploy are in the toolbar.
4. **Skills: inspect the generated files** (`workbench-skill`). The generated files sit in a tree beside their contents. The builder can inspect them, then test and validate before publishing.

---

## Testing

### Testing was part of building

Creation was only one step in the journey. Builders needed to understand how an artifact behaved, refine its output and assess whether it was ready for use.

We designed playgrounds to support testing and iteration, as well as evaluations intended to help teams assess technical and security requirements. Review and publishing actions helped connect that work to the next stage of making a capability available to others.

Recordings:
1. **Agents: run a task and follow each step** (`testing-agent`). The agent playground keeps sessions, runs a task, and shows the steps the agent took and when the task completed.
2. **MCPs: connect to the server and run a tool** (`testing-mcp`). The MCP playground connects to a server, lists its tools, and runs one with its inputs, showing that it executed successfully.
3. **APIs: send a request and read the response** (`testing-api`). The API playground sends a request with its parameters and shows the response, whether it succeeds or fails.
4. **Skills: try it with a prompt** (`testing-skill`). The skill playground offers quick test prompts, and shows how the skill responds to the one chosen.

---

## Workspaces

### As the work grew, context needed a home

The workbench addressed an individual artifact. But as users created more artifacts and returned to them across multiple conversations, another need became clear: related work needed to stay together.

Workspaces, which shipped, group artifacts and sessions around a shared context. A builder returning to improve a capability, or starting something related, could pick up work with relevant context available instead of repeatedly explaining it from the beginning.

Workspaces also gave us a structure for collaboration and access: who could view the work, who could modify it, and how a team could organise the artifacts and conversations it shared.

Recordings:
1. **Related work stays together** (`workspaces-1-projects`). A workspace opens into its projects, and each project lists the artifacts it holds, in the sidebar and in the main view.
2. **Set one up in five steps** (`workspaces-3-create`). Creating a workspace takes five steps: its name and purpose, its members, the repositories and tools it can use, its rules, and a review before it is created.
3. **Who is in it, and what they can do** (`workspaces-4-members`). The Members tab lists the people who can see the workspace and the role each has, owner or editor, and adds a member from the same screen.

---

## The prototype

### The design delivery was a coded prototype.

Built over several iterations in Cursor and VS Code, it became a shared source of truth for key decisions.

---

## What changed

### What people have built since launch

Wibey has 6K+ monthly active users. These are the artifacts published since Studio launched, and every one is in use.

- 6K+ monthly active users on Wibey
- 4K+ skills published
- 300+ MCPs published
- 100+ agents published

---

## What I learned

1. **Design the whole journey around what AI generates.** Finding related work, providing context, inspecting what was generated, testing it and preparing it for others to use.
2. **Prototype in code.** Working in code let me explore and communicate an evolving interaction, and bring designers, developers and stakeholders into the same experience as we made decisions.

## What I believe now

When everyone can build, the workflow around what they build matters most.

---

*The page's scroll-story summary is in git: `git show 6d07f0b^:src/app/work/ai-studio/summary.tsx`. The page itself: `git show 6d07f0b^:src/app/work/ai-studio/page.tsx`.*
