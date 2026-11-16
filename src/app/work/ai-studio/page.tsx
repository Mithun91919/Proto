import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { ClipFigure } from "@/components/design-system/ClipFigure";
import { ConfidentialNote } from "@/components/design-system/ConfidentialNote";
import { DotFlow } from "@/components/design-system/DotFlow";
import { CompactNumeral } from "@/components/design-system/CompactNumeral";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { MediaPlaceholder } from "@/components/design-system/MediaPlaceholder";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getAdjacentProjects } from "@/content/projects";

/**
 * Studio — on the locked case-study template.
 *
 * Prose from `projects/ai-studio/web/ai-studio-web.md`, written from the
 * designer's own account of it: the first agentic product they designed.
 * Every chapter is a question an agent raises that a screen never did, and
 * what was decided. The screens are from a recording of the coded prototype
 * (July, before launch), with sample data; a better recording is coming. The
 * early version of the chat is a stated placeholder, and there are no figures,
 * because the counts of what has been created and published are to be confirmed.
 */

export const metadata: Metadata = {
  title: "Studio — From agents on one engineer’s machine to one place to build, host and share them",
  description:
    "My first agentic product: a place inside Wibey, Walmart’s internal AI portal, to build, host and share agents, MCPs and skills, designed around what a chat can’t do, and built in code.",
  robots: caseStudyRobots,
};

const CHAPTERS = [
  { id: "context", label: "The context" },
  { id: "new", label: "What was new" },
  { id: "problem", label: "Before Studio" },
  { id: "workflow", label: "The controls" },
  { id: "chat", label: "The chat" },
  { id: "preview", label: "The preview" },
  { id: "shared", label: "Who owns it" },
  { id: "artifacts", label: "Five editors" },
  { id: "code", label: "Built in code" },
  { id: "next", label: "Next time" },
  { id: "live", label: "Live" },
];

export default function AiStudioPage() {
  const { next } = getAdjacentProjects("ai-studio");

  return (
    <CaseStudyShell
      slug="ai-studio"
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              An agent one engineer built{" "}
              <span className="ds-accent-text">stayed on their machine</span>.
            </>
          ),
          detail:
            "Engineers built agents, skills and MCPs for themselves and their teams. None was hosted or open to the rest of the company. To use one, a colleague needed its owner to share the repo.",
        },
        {
          label: "The solution",
          lead: (
            <>
              One place in Wibey to <span className="ds-accent-text">build, host and share</span> them.
            </>
          ),
          detail:
            "Engineers describe what they need in a chat and see what the AI built. Teams publish verified artifacts to a shared registry, so others can use them without asking for a repo.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I designed <span className="ds-accent-text">what a chat can’t do</span>, and built it in code.
            </>
          ),
          detail:
            "My first agentic product, and I owned the entire experience. I designed the workflow an engineer can see, edit and test around the chat, and built the front end in code. Developers used it as their reference.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "Studio is the part of Wibey, Walmart’s internal AI portal, where engineers create, manage, publish and share artifacts: agents, skills, MCPs, APIs and plugins.",
        headline: (
          <>
            Studio: from agents on one engineer’s machine to <span style={{ color: "var(--ds-mint)" }}>one place</span> to
            build, host and share them.
          </>
        ),
        figureNote: "Confidential internal work. Screens are from the coded prototype, with sample data.",
        meta: [
          { label: "Role", value: "Senior UX Designer" },
          { label: "Ownership", value: "The entire experience" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2026–Present" },
          { label: "Discipline", value: "AI platform · Product design · Design in code" },
        ],
      }}
      next={
        next
          ? { href: `/work/${next.slug}`, number: next.number, label: next.label, title: next.title }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      {/* The terms first, before the problem, as the API page does with
          "API": a reader who does not work with AI tools should know what a
          skill, an MCP and an agent are before being told where they lived. */}
      <div className="mt-14 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="What people build here"
            mark="connection"
            note="Plugins bundle these for others to install, and APIs let other software use what they do."
          >
            Engineers build artifacts here. A skill teaches an AI assistant how to do one job. An MCP (a connector for AI
            tools) lets it use another system. An agent carries out a task in steps.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="context" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The context"
            heading="AI became part of everyday work, so Walmart built its own place for it"
            body={[
              "As AI tools became part of how engineers work, data security and compliance became a concern. Walmart restricted outside tools such as Cursor, Claude and Bolt on personal licences, which had also become a higher cost.",
              "So Walmart built an internal AI portal for its engineers, Wibey. It is built on Claude, and it keeps the work inside the company so company data stays secure.",
              "Studio is a section on the left panel of Wibey, for the engineers who build artifacts: agents, skills and MCPs. It is where they build, host and share them.",
            ]}
          />
          <CaseStudyFigure rule label="What the design had to work with">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  title: "Company data stays inside",
                  note: "Walmart restricted outside AI tools on personal licences, and the portal keeps the work inside the company.",
                },
                {
                  title: "A new kind of builder",
                  note: "Engineers who build artifacts, meaning agents, skills and MCPs, as well as code.",
                },
                {
                  title: "Five artifacts, five ways of working",
                  note: "Agents, MCPs, skills, APIs and plugins differ in how they are built, tested and trusted.",
                },
                {
                  title: "Only some teams can publish",
                  note: "Only the teams that own the APIs and MCPs can publish an approved agent, so the registry holds only verified ones.",
                },
              ].map((item, i) => (
                <GlassPanel key={item.title} className="rounded-2xl p-7">
                  <CompactNumeral value={String(i + 1)} />
                  <h4 className="display-title mt-5" style={{ fontSize: "1.35rem" }}>
                    {item.title}
                  </h4>
                  <p className="ds-note">{item.note}</p>
                </GlassPanel>
              ))}
            </div>
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="new">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="What was new"
            heading="A chat can do almost anything, so the interface has to add what it can’t"
            body={[
              "Until Studio, the products I designed did what a person told them, one step at a time. Studio is different: a person asks a chat for almost anything, and an agent does it.",
              "So my question changed. It was no longer which screens a person needs, but what a chat can’t give them: a way to see how the agent works, to change it, and to test it before anyone relies on it.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="problem">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Before Studio"
            heading="An agent that worked for one engineer stayed on that engineer’s machine"
            body={[
              "Engineers were building agents, skills and MCPs for themselves and their teams. Each one lived on its owner’s machine. None was hosted, and none was open to the rest of the company.",
              "To use one, a colleague needed the owner to share its repo. The owner decided who could reach it, one repo at a time.",
            ]}
          />
          <CaseStudyFigure rule label="Where an artifact lived">
            <BeforeAfterModel
              before={{
                heading: "A repo, shared by hand",
                body: "Each artifact stayed on its builder’s machine and reached other engineers only when its owner shared the repo.",
              }}
              after={{
                glyph: "funnel",
                heading: "One hosted place in Wibey",
                body: "Studio hosts all five kinds of artifact, where an engineer creates, manages and publishes them, and others can find the verified ones.",
              }}
            />
          </CaseStudyFigure>
          <CaseStudyFigure rule label="The path an artifact takes in Studio">
            <DotFlow stages={["Built in chat", "Tested", "Reviewed", "Published", "Found in the registry"]} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="workflow">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The controls"
            heading="An agent is a workflow a person can see, edit and test"
            body={[
              "The agent builder uses the node-based style of workflow tools such as n8n. An agent is not a block of settings. It is an orchestrator with sub-agents, and each one shows its model, its MCP servers and its tools.",
              "A person builds the agent as a workflow, runs it, sees the result straight away, and tweaks it as often as they need. That is the control a chat does not give them on its own.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              src="/work/ai-studio/agent-canvas.jpg"
              width={2400}
              height={1385}
              alt="An agent open in Studio: the chat on the left proposing what it will create, and on the right a canvas with an orchestrator agent, two sub-agents and a palette of components"
              caption="An agent in the coded prototype. Sample data."
              hotspots={[
                {
                  x: 47.3,
                  y: 25.2,
                  title: "An orchestrator and its sub-agents",
                  detail: "Each agent shows its model, its MCP servers and its tools in one card, so how it works is visible.",
                },
                {
                  x: 34.1,
                  y: 81.9,
                  title: "Add a part",
                  detail: "A sub-agent, an MCP server, tools, a human handoff or a termination.",
                },
                {
                  x: 94.3,
                  y: 3.1,
                  title: "Run it and see",
                  detail: "Run, Save and Publish sit together at the top, so testing the workflow is one click.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="chat">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="A change of mind"
            heading="I had the chat in the wrong place"
            body={[
              "We first built an elaborate interface and treated the chat as one item in it, like any other panel. That is how interfaces have always been built.",
              "We soon saw it the other way round. Building by conversation is the new way, so the chat leads, and the preview shows the person what the AI built for them.",
              "In the demo flow below, an engineer asks for an agent that watches Jira tickets stuck in review and sends Slack reminders. Before creating anything, the chat checks the Meta Registry, the marketplace where engineers find artifacts, for agents that already do something similar, and offers to clone one. If none fits, it asks a few short questions that can be skipped, decides what to build (an agent here, not a single command or a skill) and opens the draft on a canvas. The same chat starts every kind of artifact.",
            ]}
          />
          <CaseStudyFigure label="A demo flow: asking the chat for an agent">
            <ClipFigure
              mp4="/work/ai-studio/chat-create.mp4"
              poster="/work/ai-studio/chat-create-poster.jpg"
              alt="A recording of the coded prototype: a request for an agent, the chat checking the registry and offering three similar agents, a short form of questions, then the new agent opening on a canvas"
              caption="Scripted for the prototype, to show how the chat helps with creation."
              width={1600}
              height={912}
              variant="fill"
            />
          </CaseStudyFigure>
          <CaseStudyFigure label="The first version, and the one that replaced it">
            <MediaPlaceholder
              kind="image"
              ratio={16 / 8}
              needs="The first version, with the chat as one panel among others, beside the later version where the chat leads and the preview shows what was built."
              source="Studio, early and later versions"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="preview">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="A decision I would defend"
            heading="The chat could build an agent alone. Engineers still need the preview."
            body={[
              "Technically, a person can create an agent without ever leaving the chat. But engineers need a container where they can see the thing as it is built, so they can make decisions as it takes shape.",
              "So the preview stays, and the chat feeds it. For an MCP, it lists each generated tool with what it can change, and a box to keep or drop it.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              src="/work/ai-studio/mcp-review.jpg"
              width={2400}
              height={1385}
              alt="An MCP open in Studio: the chat on the left, and on the right the generated tools, each with its method, endpoint, description and what it can change"
              caption="An MCP in the coded prototype. Sample data."
              hotspots={[
                {
                  x: 45.9,
                  y: 26.6,
                  title: "What each tool can change",
                  detail: "Read only, idempotent or not, beside each tool, so a person knows what it does before keeping it.",
                },
                {
                  x: 97.7,
                  y: 14.2,
                  title: "Keep or drop",
                  detail: "A checkbox on every tool, with select all and deselect all above.",
                },
                {
                  x: 86.4,
                  y: 3.1,
                  title: "Test, validate, publish, deploy",
                  detail: "The playground, validation, publishing and deployment sit in one row at the top.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="shared">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="An assumption that was wrong"
            heading="I assumed one owner. It became a team’s artifact."
            body={[
              "I assumed each agent or MCP would belong to one person, and that any team could build agents on any MCP. Neither held. An agent or an MCP quickly becomes a team’s shared artifact, and only the teams that own the APIs and MCPs can publish an approved agent.",
              "So the Meta Registry, the marketplace where engineers find artifacts, holds only verified agents. Anyone can build whatever they like in their own playground or on their own machine, but they can’t publish it there.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              src="/work/ai-studio/library.jpg"
              width={2400}
              height={1385}
              alt="A workspace library: filters by type, then cards for each artifact showing its type, a status of draft, in review or approved, and its owner"
              caption="A workspace in the coded prototype. Sample data; two workspace names are blurred."
              hotspots={[
                {
                  x: 47.5,
                  y: 26.2,
                  title: "A status on every artifact",
                  detail: "Draft, in review or approved, beside the artifact, so its state is clear before it is opened.",
                },
                {
                  x: 25.3,
                  y: 16.7,
                  title: "Filter by type",
                  detail: "Every artifact has a type, so a person can narrow the library to the kind they came for.",
                },
                {
                  x: 9.3,
                  y: 18.3,
                  title: "Mine, recent and shared",
                  detail: "A private workspace, the recent list and what others have shared sit side by side on the left.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="artifacts">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Five artifacts"
            heading="One frame, and a different editor for each artifact"
            body={[
              "Every artifact opens with the chat on the left and the artifact on the right, with a status and the same Save, Run and Publish.",
              "What changes is the editor, because each kind of artifact is built, tested and trusted in its own way.",
            ]}
          />
          <Reveal>
            <ArtboardCarousel
              label="The editors for each kind of artifact"
              slides={[
                {
                  title: "Agent",
                  src: "/work/ai-studio/agent-slide.jpg",
                  width: 2400,
                  height: 1368,
                  alt: "An agent as a workflow: an orchestrator card linked to two sub-agent cards, each showing its model, MCP servers and tools",
                  caption:
                    "A workflow of linked nodes: an orchestrator, its sub-agents, and each one’s model, MCP servers and tools. An engineer runs it and sees the result before publishing.",
                  hotspots: [
                    {
                      x: 33.7,
                      y: 28.2,
                      title: "An orchestrator and its sub-agents",
                      detail: "The orchestrator lists its model and its sub-agents, so how the work is divided is visible.",
                    },
                    {
                      x: 72,
                      y: 35,
                      title: "Each sub-agent has its own model",
                      detail: "Every agent card shows its model, MCP servers and tools.",
                    },
                    {
                      x: 73,
                      y: 72.1,
                      title: "Drop in an MCP server",
                      detail: "An empty slot for an MCP server or tools sits on every agent.",
                    },
                  ],
                },
                {
                  title: "MCP",
                  src: "/work/ai-studio/mcp-slide.jpg",
                  width: 2400,
                  height: 1368,
                  alt: "Generated MCP tools, each with its method and endpoint, a description, a read only and idempotent label, and a checkbox",
                  caption:
                    "A set of generated tools, each shown with its method, its endpoint and what it can change, with a box to keep or drop it. It has its own playground, validation and deploy.",
                  hotspots: [
                    {
                      x: 6.2,
                      y: 19.2,
                      title: "Generated files",
                      detail: "Tools, overview, structure and endpoints, then install, clients and integrations.",
                    },
                    {
                      x: 27.1,
                      y: 36.3,
                      title: "What each tool can change",
                      detail: "Read only, idempotent or not, beside each tool.",
                    },
                    {
                      x: 97.1,
                      y: 19.5,
                      title: "Keep or drop",
                      detail: "A checkbox on every tool, with select all and deselect all above.",
                    },
                    {
                      x: 81.7,
                      y: 4.2,
                      title: "Test, validate, publish, deploy",
                      detail: "The playground, validation, publishing and deployment sit in one row at the top.",
                    },
                  ],
                },
                {
                  title: "Skill",
                  src: "/work/ai-studio/skill-review.jpg",
                  width: 2400,
                  height: 1368,
                  alt: "A skill open in Studio: the chat on the left, and on the right a tree of generated files, with the instruction file open and buttons to regenerate, approve all, validate, test and publish",
                  caption:
                    "A set of generated files: the instruction file, its code and its tests. An engineer reviews them, can regenerate them or approve them all, then validates, tests and publishes.",
                  hotspots: [
                    {
                      x: 32.8,
                      y: 34.1,
                      title: "The generated files",
                      detail: "The instruction file, the code behind it and its tests, each marked new.",
                    },
                    {
                      x: 91.1,
                      y: 9.3,
                      title: "Review before it counts",
                      detail: "Regenerate the files, or approve them all.",
                    },
                    {
                      x: 90.6,
                      y: 3.4,
                      title: "Validate, test, publish",
                      detail: "The checks and the way out sit together at the top.",
                    },
                  ],
                },
                {
                  title: "API",
                  src: "/work/ai-studio/api-editor.jpg",
                  width: 2400,
                  height: 1368,
                  alt: "An API open in Studio: the chat on the left, and on the right an overview of its owner, domain and status, a list of endpoints with their methods, and a form for the selected endpoint, with a Submit for Review button",
                  caption:
                    "An overview of the API’s owner, domain, consumers, status and version, with its endpoints, datatypes and responses as a form or as JSON. Unlike the others, an API goes to review before it is published.",
                  hotspots: [
                    {
                      x: 35,
                      y: 24.6,
                      title: "Who owns it, and where it stands",
                      detail: "Owner, domain, consumers, status and version, before any endpoint.",
                    },
                    {
                      x: 57.8,
                      y: 42.5,
                      title: "Run an endpoint from the editor",
                      detail: "A run control beside every endpoint.",
                    },
                    {
                      x: 94.3,
                      y: 3.3,
                      title: "Submit for review",
                      detail: "An API is submitted for review, and is published after it.",
                    },
                  ],
                },
              ]}
            />
          </Reveal>
          <CaseStudyFigure rule label="Plugin">
            <MediaPlaceholder
              kind="image"
              ratio={16 / 8}
              needs="The plugin editor: what a plugin bundles, and how an engineer assembles and publishes one."
              source="Studio, as built"
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I take from it" mark="seam">
            A chat can do almost anything. The interface is what lets a person see it, change it and trust it.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="code" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Built in code"
            heading="Everything could be clicked, so I built a path for reviewers to follow"
            body={[
              "I came from Figma, where everything is frozen in time. A coded interface was new to me: everything can be clicked and tried. So I built demo flows and orchestrated flows that walk a reviewer along the happy path, for stakeholder and user reviews.",
              "I built the front end in Cursor and VS Code, in several versions, and hosted it on GitHub Pages so people could use it and tell me what to change. Developers used it as their front-end reference, so they could spend their time on the backend and the integrations.",
              "To keep the screens consistent, I taught Cursor a design system: a set of guides and common elements. Visual polish was the hardest part. Getting things to look right took many rounds.",
            ]}
          />
          <CaseStudyFigure label="The coded prototype, an agent being opened and edited">
            <ClipFigure
              mp4="/work/ai-studio/prototype.mp4"
              poster="/work/ai-studio/prototype-poster.jpg"
              alt="A recording of the coded prototype: an agent open with its chat and canvas, then its menu of rename, copy and version history"
              width={1600}
              height={923}
              variant="fill"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="next">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Next time"
            heading="I would prove the flows in HTML first, and write down the context"
            body={[
              "I would build an HTML prototype first and get every flow right before moving to React.",
              "And I would write more of the context in markdown files, so the AI does not make things up, and I spend my time designing instead of explaining an idea it finds hard to follow.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="live">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Now"
            heading="Live since August"
            body={[
              "Work began in April and Studio has been live since August.",
              "Counts of what people have created and published in Studio are not on this page yet.",
            ]}
            footnote="The counts will say what each one measures, the dates it covers and who owns it."
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="Why Studio exists" mark="exchange" note={<ConfidentialNote />}>
            An agent is only useful to the company once another engineer can find it, trust it and use it.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
