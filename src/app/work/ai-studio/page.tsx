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
 * Prose from `projects/ai-studio/web/ai-studio-web.md`. First draft, built
 * from a screen recording of the coded prototype (July, before launch), so
 * the screens are the prototype's, with sample data. A better recording is
 * coming. The versions chapter still has a stated placeholder, and there are
 * no figures, because the counts of what has been created and published are
 * still to be confirmed.
 */

export const metadata: Metadata = {
  title: "Studio — One place to build, host and share AI skills, MCPs, agents, APIs and plugins",
  description:
    "A place inside an internal AI portal to create, manage, publish and share AI skills, MCPs, agents, APIs and plugins, with a front end designed in code.",
  robots: caseStudyRobots,
};

const CHAPTERS = [
  { id: "problem", label: "Before Studio" },
  { id: "library", label: "One library" },
  { id: "create", label: "Creating" },
  { id: "layout", label: "One layout" },
  { id: "owner", label: "My part" },
  { id: "code", label: "Built in code" },
  { id: "versions", label: "Versions" },
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
            "Studio sits inside the internal AI portal. People create, manage and publish all five kinds of asset there: skills, MCPs, agents, APIs and plugins.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I <span className="ds-accent-text">owned the entire experience</span>, and built it in code.
            </>
          ),
          detail:
            "Studio was a shared project. I designed this version end to end, from the first idea to a working front end in code, and developers used it as their reference.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "The part of the internal AI portal where people create, manage, publish and share the skills, MCPs, agents, APIs and plugins that make an AI assistant useful at a job.",
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
            A skill teaches an AI assistant how to do one job. An MCP (a connector for AI tools) lets it use another
            system. An agent carries out a task in steps.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="problem" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Before Studio"
            heading="Useful work stayed on the machine it was built on"
            body={[
              "People were building agents, skills and MCPs for themselves and their teams. Each one lived on its owner’s machine. None was hosted, shared across the company or open to anyone else.",
              "The only way to use one was through a repo its owner chose to share. The owner decided who could reach it.",
            ]}
          />
          <CaseStudyFigure rule label="Where an asset lived">
            <BeforeAfterModel
              before={{
                heading: "Files on one machine, shared by repo",
                body: "Each asset stayed on its builder’s machine and reached other people only through a repo its owner shared.",
              }}
              after={{
                glyph: "funnel",
                heading: "One hosted place",
                body: "Studio hosts all five kinds of asset in the AI portal, where a person creates, manages and publishes them.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="library">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="One library"
            heading="Everything people build sits in one library, with a status"
            body={[
              "Each person has a private workspace, and teams have shared ones. Every asset in them shows its type, its status and its owner, so a person can filter to the skills or the MCPs and see whether one is a draft, in review or approved.",
              "This replaced sharing by repo. An asset sits where the people in a workspace can see it, with its status beside it.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              src="/work/ai-studio/library.jpg"
              width={2400}
              height={1385}
              alt="A workspace library: filters by type, then cards for each asset showing its type, a status of draft, in review or approved, and its owner"
              caption="A workspace in the coded prototype. Sample data; two workspace names are blurred."
              hotspots={[
                {
                  x: 25.3,
                  y: 16.7,
                  title: "Filter by type",
                  detail: "Every asset has a type, so a person can narrow the library to the kind they came for.",
                },
                {
                  x: 47.5,
                  y: 26.2,
                  title: "A status on every asset",
                  detail: "Draft, in review or approved, beside the asset, so its state is clear before it is opened.",
                },
                {
                  x: 9.3,
                  y: 18.3,
                  title: "Mine, recent and shared",
                  detail: "A private workspace, the recent list and what others have shared sit side by side on the left.",
                },
                {
                  x: 77.9,
                  y: 7.9,
                  title: "Create New",
                  detail: "One button starts any kind of asset.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="create">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Creating"
            heading="A person describes what they want, and Studio drafts it"
            body={[
              "Create New opens a chat. A person writes what they need, such as an agent that helps new teammates settle in, and Studio replies with what it will create: a name, what it does, its trigger and its tools. It offers next steps, such as adding error handling, and the result opens as a draft.",
              "An agent then opens as a canvas of linked nodes: an orchestrator with sub-agents, each with a model, MCP servers and tools. A palette beside it adds a sub-agent, an MCP server, tools, a human handoff or a termination.",
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
                  x: 13.6,
                  y: 20.6,
                  title: "It says what it will create",
                  detail: "A name, what it does, its trigger and its tools, before anything is built.",
                },
                {
                  x: 15.1,
                  y: 49.3,
                  title: "Next steps to pick from",
                  detail: "Suggestions such as adding error handling or changing the trigger, so the next move is one click.",
                },
                {
                  x: 47.3,
                  y: 25.2,
                  title: "An orchestrator and its sub-agents",
                  detail: "Each agent shows its model, its MCP servers and its tools in one card.",
                },
                {
                  x: 34.1,
                  y: 81.9,
                  title: "Add a part",
                  detail: "A sub-agent, an MCP server, tools, a human handoff or a termination.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="layout">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="One layout"
            heading="Every type opens with the chat on the left and the asset on the right"
            body={[
              "An MCP opens as a set of generated files. Each tool is listed with its method, its endpoint and what it can change, and has a checkbox to keep or drop it.",
              "An agent and an MCP end in the same actions: Save, Run and Publish. An MCP can also be validated, tested in its own playground and deployed.",
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
                  x: 30.4,
                  y: 14,
                  title: "Generated files",
                  detail: "Tools, overview, structure and endpoints are listed on the left, and install, clients and integrations below them.",
                },
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

        <CaseStudySection id="owner">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="My part"
            heading="I owned the entire experience"
            body={[
              "Studio was a shared project. I designed this version end to end, from the first idea to a working front end in code.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="Why it was built in code" mark="seam">
            A screen shows what an interface looks like. Code shows what it does.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="code" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Built in code"
            heading="The design was a working front end, not a set of screens"
            body={[
              "The scope called for something close to development. A set of Figma screens shows layout and visual direction, but not how an interface behaves while an AI agent runs.",
              "So I built the front end in code, in Cursor and VS Code, in several versions, and hosted it on GitHub Pages so stakeholders and users could use it and tell me what to change.",
              "Developers used it as their front-end reference. They did not have to interpret static screens, so they could spend their time on the backend and the integrations.",
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

        <CaseStudySection id="versions">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Versions"
            heading="It went through several versions, from the layout to the workflow"
            body={[
              "The front end changed over many versions, in three groups: the UX, the interactions and the workflows. Versions were shared with stakeholders and users for feedback.",
            ]}
          />
          <CaseStudyFigure label="An early and a later version of the same view">
            <MediaPlaceholder
              kind="image"
              ratio={16 / 8}
              needs="Two or three before and after pairs: an early and a later screen of the same view, with the feedback that changed it."
              source="Studio, early and later versions"
            />
          </CaseStudyFigure>
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
