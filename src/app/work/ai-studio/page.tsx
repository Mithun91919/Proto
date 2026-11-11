import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { ClipFigure } from "@/components/design-system/ClipFigure";
import { ConfidentialNote } from "@/components/design-system/ConfidentialNote";
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
  title: "Studio — One place to build, host and share AI skills, MCPs, agents, APIs and plugins",
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
              A useful skill could only be shared by{" "}
              <span className="ds-accent-text">passing someone a repo</span>.
            </>
          ),
          detail:
            "People built agents, skills and MCPs on their own machines. None was hosted, shared across the company or open. To use one, you needed its owner to share the repo with you.",
        },
        {
          label: "The solution",
          lead: (
            <>
              One place to <span className="ds-accent-text">build, host and share</span> them.
            </>
          ),
          detail:
            "Studio sits inside Wibey, Walmart’s internal AI portal. Engineers create, manage and publish all five kinds of artifact there: skills, MCPs, agents, APIs and plugins.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I designed what <span className="ds-accent-text">a chat can’t do</span>, and built it in code.
            </>
          ),
          detail:
            "My first agentic product. A chat can do almost anything, so I owned the entire experience around it: a workflow a person can see, edit and test. Developers used the coded front end as their reference.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "The part of Wibey, Walmart’s internal AI portal, where engineers create, manage, publish and share artifacts: the skills, MCPs, agents, APIs and plugins that make an AI assistant useful at a job.",
        headline: (
          <>
            Studio: <span style={{ color: "var(--ds-mint)" }}>one place</span> to build, host and share AI skills, MCPs,
            agents, APIs and plugins.
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
              "As AI tools became part of how engineers work, data security and compliance became a concern. Walmart restricted the use of outside tools such as Cursor, Claude and Bolt on personal licences, which had also become a higher cost.",
              "So Walmart built an internal AI portal for its engineers, Wibey. It is built on Claude, and it keeps the work inside the company so company data stays secure.",
              "Studio is a section on the left panel of Wibey, for the engineers who build artifacts: agents, skills and MCPs. It is where they build, host and share them.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="new">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="What was new"
            heading="A chat can do almost anything, so the interface has to add what it can’t"
            body={[
              "Until Studio, the products I designed did what a person told them, one step at a time. Studio is different. A person can ask a chat for almost anything, and an agent will do it.",
              "So my question changed. It was no longer which screens a person needs, but what a chat can’t give them: a way to see how the agent works, to change it, and to test it before anyone relies on it.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="problem">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Before Studio"
            heading="Useful work stayed on the machine it was built on"
            body={[
              "People were building agents, skills and MCPs for themselves and their teams. Each one lived on its owner’s machine. None was hosted, shared across the company or open to anyone else.",
              "The only way to use one was through a repo its owner chose to share. The owner decided who could reach it.",
            ]}
          />
          <CaseStudyFigure rule label="Where an artifact lived">
            <BeforeAfterModel
              before={{
                heading: "Files on one machine, shared by repo",
                body: "Each artifact stayed on its builder’s machine and reached other people only through a repo its owner shared.",
              }}
              after={{
                glyph: "funnel",
                heading: "One hosted place",
                body: "Studio hosts all five kinds of artifact in Wibey, where an engineer creates, manages and publishes them.",
              }}
            />
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
            ]}
          />
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
            heading="A person could build an agent in the chat alone. Engineers still need the preview."
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
              "So the shared registry holds only verified agents. Anyone can build whatever they like in their own playground or on their own machine, but they can’t publish it there.",
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
            heading="In code, everything can be clicked, so I built the path for a reviewer to follow"
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
            Work that can only be shared by passing a repo stays with the person who built it.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
