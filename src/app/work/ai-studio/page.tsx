import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { AiStudioSummary } from "./summary";
import { ArchetypeSection } from "@/components/design-system/ArchetypeSection";
import type { Archetype } from "@/components/design-system/ArchetypeFigure";
import { ArtboardCarousel, type ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { EditorialNumberedRows } from "@/components/design-system/EditorialNumberedRow";
import { CompositionDiagram } from "@/components/design-system/CompositionDiagram";
import { ConfidentialNote } from "@/components/design-system/ConfidentialNote";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";

/**
 * Studio, from the new brief: a co-designed experience inside Wibey that takes
 * a builder's AI capability from an idea towards production, with the coded
 * prototype as the deliverable.
 *
 * The prose is the brief's own. Every screen and recording is a stated
 * placeholder until the fresh recordings arrive, and there are no figures yet:
 * the numbers are to come, and the page leaves their place open rather than
 * stating any. It is listed on Home and Work while the recordings are pending.
 */

export const metadata: Metadata = {
  title: "Studio — Taking AI capabilities from an idea towards production",
  description:
    "Studio is the part of Wibey, Walmart’s internal AI platform, where builders find what already exists, build what doesn’t, test it and publish it for others.",
  robots: caseStudyRobots,
};

const CONVERSATION_SLIDES: ArtboardSlide[] = [
  {
    title: "Check what already exists",
    route: "Wibey",
    src: "/work/ai-studio/conversation-1-check-poster.jpg",
    mp4: "/work/ai-studio/conversation-1-check.mp4",
    width: 1920,
    height: 1104,
    alt: "A request in Wibey chat to build an agent that monitors Jira tickets stuck in review and sends Slack reminders. Wibey checks its registry, lists three similar agents, and asks whether to clone and modify one or create from scratch.",
    caption:
      "Before building, the assistant looks for similar agents and lists the matches. The builder chooses to clone and modify one, or to start from scratch.",
  },
  {
    title: "Ask for the details that matter",
    route: "Wibey",
    src: "/work/ai-studio/conversation-2-questions-poster.jpg",
    mp4: "/work/ai-studio/conversation-2-questions.mp4",
    width: 1920,
    height: 1104,
    alt: "Wibey asking questions about the stuck threshold, how Slack reminders are sent, the language and the scheduling, then setting out a plan with two sub-agents and offering to create the agent.",
    caption:
      "It asks about the stuck threshold, how reminders are sent, the language and the schedule, then sets out a plan and offers to create the agent.",
  },
  {
    title: "Inspect it in the workbench",
    route: "Wibey",
    src: "/work/ai-studio/conversation-3-workbench-poster.jpg",
    mp4: "/work/ai-studio/conversation-3-workbench.mp4",
    width: 1920,
    height: 1104,
    alt: "The agent open as a flow in the workbench, an orchestrator with two sub-agents, with the chat in a narrow panel beside it.",
    caption:
      "The agent opens as a flow beside the chat, where the builder can inspect it and keep refining it through conversation.",
  },
];

const WORKBENCH_SLIDES: ArtboardSlide[] = [
  {
    title: "Agents: see the pieces working together",
    route: "Wibey",
    src: "/work/ai-studio/workbench-agent-poster.jpg",
    mp4: "/work/ai-studio/workbench-agent.mp4",
    width: 1920,
    height: 1104,
    alt: "The agent workbench: a canvas showing an orchestrator and two connected agents, with a menu to add a sub-agent, an MCP server, tools, a human handoff or a termination, and the chat beside it.",
    caption:
      "A canvas shows an orchestrator and its connected agents, with their models, MCP servers and tools. A menu adds a sub-agent, an MCP server, tools, a human handoff or a termination.",
  },
  {
    title: "APIs: work with the contract directly",
    route: "Wibey",
    src: "/work/ai-studio/workbench-api-poster.jpg",
    mp4: "/work/ai-studio/workbench-api.mp4",
    width: 1920,
    height: 1104,
    alt: "The API workbench: an overview of a service with its endpoints, datatypes and responses in tabs, a form for the selected endpoint, and the chat beside it.",
    caption:
      "Endpoints, datatypes and responses sit in a structured view beside the chat, so the builder can inspect each detail and move towards review.",
  },
  {
    title: "MCPs: review the generated tools",
    route: "Wibey",
    src: "/work/ai-studio/workbench-mcp-poster.jpg",
    mp4: "/work/ai-studio/workbench-mcp.mp4",
    width: 1920,
    height: 1104,
    alt: "The MCP workbench: a list of generated tools, each with its method, name, description and annotations, and a toolbar with MCP Playground, Validate, Publish and Deploy.",
    caption:
      "The generated tools are listed for review, each with its description and annotations. MCP Playground, Validate, Publish and Deploy are in the toolbar.",
  },
  {
    title: "Skills: inspect the generated files",
    route: "Wibey",
    src: "/work/ai-studio/workbench-skill-poster.jpg",
    mp4: "/work/ai-studio/workbench-skill.mp4",
    width: 1920,
    height: 1104,
    alt: "The skill workbench: a tree of generated files beside the contents of the selected file, with Save, Validate, Test and Publish in the toolbar.",
    caption:
      "The generated files sit in a tree beside their contents. The builder can inspect them, then test and validate before publishing.",
  },
];

const TESTING_SLIDES: ArtboardSlide[] = [
  {
    title: "Agents: run a task and follow each step",
    route: "Wibey",
    src: "/work/ai-studio/testing-agent-poster.jpg",
    mp4: "/work/ai-studio/testing-agent.mp4",
    width: 1920,
    height: 1104,
    alt: "The agent playground: a list of sessions on the left, and a task that has been run, with the agent's steps and a Task completed result.",
    caption:
      "The agent playground keeps sessions, runs a task, and shows the steps the agent took and when the task completed.",
  },
  {
    title: "MCPs: connect to the server and run a tool",
    route: "Wibey",
    src: "/work/ai-studio/testing-mcp-poster.jpg",
    mp4: "/work/ai-studio/testing-mcp.mp4",
    width: 1920,
    height: 1104,
    alt: "The MCP playground: connecting to an MCP server, choosing one of its tools, running it, and seeing that it executed successfully.",
    caption:
      "The MCP playground connects to a server, lists its tools, and runs one with its inputs, showing that it executed successfully.",
  },
  {
    title: "APIs: send a request and read the response",
    route: "Wibey",
    src: "/work/ai-studio/testing-api-poster.jpg",
    mp4: "/work/ai-studio/testing-api.mp4",
    width: 1920,
    height: 1104,
    alt: "The API playground: a request with its parameters, and the response below it, first with a body and then as a failed request.",
    caption:
      "The API playground sends a request with its parameters and shows the response, whether it succeeds or fails.",
  },
  {
    title: "Skills: try it with a prompt",
    route: "Wibey",
    src: "/work/ai-studio/testing-skill-poster.jpg",
    mp4: "/work/ai-studio/testing-skill.mp4",
    width: 1920,
    height: 1104,
    alt: "The skill playground: quick test prompts to choose from, and the skill's response to the one selected.",
    caption:
      "The skill playground offers quick test prompts, and shows how the skill responds to the one chosen.",
  },
];

const WHO: Archetype[] = [
  {
    name: "Engineers",
    behaviour: "Build capabilities for their teams: agents, skills, MCP servers and APIs.",
    wants: [
      "See what the AI generated, and work with it directly",
      "Test it and know it is ready before others use it",
    ],
    friction: [
      "Data security and other limits made it hard to take what they built into production",
      "An open-ended chat did not gather the details a useful artifact needs",
      "An agent, an API and an MCP do not share a structure, so one generic view did not fit",
    ],
  },
  {
    name: "Builders",
    sparkle: true,
    behaviour: "Anyone else who can now build with AI, without being an engineer.",
    roles: ["Designer", "Product manager"],
    wants: [
      "Take an idea to something that works",
      "Know it is safe and ready before others use it",
      "Publish it for others to use",
    ],
    friction: [
      "Hard to know whether what they built was safe or ready",
      "No way to inspect what was built",
      "No path to publish it for others",
      "Did not know what already existed",
    ],
  },
];

const WORKSPACE_SLIDES: ArtboardSlide[] = [
  {
    title: "Related work stays together",
    route: "Wibey",
    src: "/work/ai-studio/workspaces-1-projects-poster.jpg",
    mp4: "/work/ai-studio/workspaces-1-projects.mp4",
    width: 1920,
    height: 1104,
    alt: "The sidebar opening a workspace into its projects, and a project listing the agents it holds.",
    caption:
      "A workspace opens into its projects, and each project lists the artifacts it holds, in the sidebar and in the main view.",
  },
  {
    title: "A space for a team",
    route: "Wibey",
    src: "/work/ai-studio/workspaces-2-shared-poster.jpg",
    mp4: "/work/ai-studio/workspaces-2-shared.mp4",
    width: 1920,
    height: 1104,
    alt: "A team workspace with the people in it shown beside its name, listing the agents the team works on.",
    caption:
      "A team workspace shows who is in it beside its name, and lists the artifacts the team works on together.",
  },
];

const CHAPTERS = [
  { id: "wibey", label: "What is Wibey" },
  { id: "problem", label: "The problem" },
  { id: "builder", label: "Who it is for" },
  { id: "approach", label: "The approach" },
  { id: "path", label: "The conversation" },
  { id: "workbenches", label: "Workbenches" },
  { id: "testing", label: "Testing" },
  { id: "workspaces", label: "Workspaces" },
  { id: "prototype", label: "The prototype" },
  { id: "learned", label: "What I learned" },
];

export default function AiStudioPage() {
  const onward = getProject("api-lifecycle");

  return (
    <CaseStudyShell
      slug="ai-studio"
      chapters={CHAPTERS}
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              Building an agent got easier. Taking one to production, and{" "}
              <span className="ds-accent-text">reusing it</span>, did not.
            </>
          ),
          detail:
            "Data security and other limitations made it difficult to take what builders built into production, or to make it consumable by other teams. Teams also worked on similar needs independently, so similar capabilities accumulated.",
        },
        {
          label: "The solution",
          lead: (
            <>
              Discovery, creation, testing and publishing in <span className="ds-accent-text">one workflow</span>.
            </>
          ),
          detail:
            "Studio brings them together inside Wibey’s protection layer, with conversational creation and hands-on editing, and makes existing work part of the conversation.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I co-designed the <span className="ds-accent-text">workbenches and the conversation</span>.
            </>
          ),
          detail:
            "I worked with a staff designer on the workbenches and the conversational workflows, and with developers on the end-to-end experience. The deliverable was a coded prototype, built through multiple iterations in Cursor and VS Code.",
        },
      ]}
      summary={{
        title: "Studio",
        standfirst:
          "In Wibey, Walmart’s internal AI platform, I co-designed Studio, where builders and builders find what exists, build what doesn’t, test it and publish it for others.",
        body: <AiStudioSummary />,
      }}
      hero={{
        standfirst:
          "In Wibey, Walmart’s internal AI platform, builders find what already exists, build what doesn’t, test it and publish it for others. I co-designed the workbenches and the conversation.",
        headline: (
          <>
            Studio: taking AI capabilities from an <span style={{ color: "var(--ds-mint)" }}>idea</span> towards{" "}
            <span style={{ color: "var(--ds-mint)" }}>production</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "Senior UX Designer, with a staff designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2026–Present" },
          { label: "Discipline", value: "AI platform · Product design · Design in code" },
        ],
        alt: "Studio in Wibey: its home, the agent workbench and the MCP workbench",
        stackRatio: 1920 / 1104,
        stack: [
          {
            src: "/work/ai-studio/hero-home.jpg",
            width: 1920,
            height: 1104,
            name: "Studio home",
            alt: "Studio's home: the list of agents in a workspace, with the workspaces down the left",
            route: "Wibey",
            focus: "top",
          },
          {
            src: "/work/ai-studio/workbench-agent-poster.jpg",
            width: 1920,
            height: 1104,
            name: "the agent workbench",
            alt: "The agent workbench: a canvas showing an orchestrator and two connected agents, with the chat beside it",
            route: "Wibey",
            focus: "top",
          },
          {
            src: "/work/ai-studio/workbench-mcp-poster.jpg",
            width: 1920,
            height: 1104,
            name: "the MCP workbench",
            alt: "The MCP workbench: a list of generated tools for review, with Playground, Validate and Publish in the toolbar",
            route: "Wibey",
            focus: "top",
          },
        ],
      }}
      next={
        onward
          ? { href: `/work/${onward.slug}`, number: onward.number, label: onward.label, title: onward.title }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      <div className="mt-14 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="Where this started"
            mark="connection"
            note="Security and other limits kept what people built from reaching production, or from being usable by other teams."
          >
            With AI, anyone can build. Shipping and publishing are still the hard part.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="wibey" boundary={false} className="pt-14 md:pt-20">
          <div className="ds-cs-split" style={{ "--split-copy": "18rem" } as CSSProperties}>
            <CaseStudyChapter
              layout="flow"
              eyebrow="Wibey"
              heading="First, what is Wibey?"
              body={[
                "Wibey is Walmart’s internal AI platform for builders. They use it for everyday work, such as designing REST API endpoints, summarising release notes or refining an onboarding workflow. They can also build capabilities for their teams: agents, skills, MCP servers and APIs, which I call artifacts.",
              ]}
            />
            <CaseStudyFigure>
              <BrowserMockup
                route="Wibey"
                src="/work/ai-studio/wibey-chat.jpg"
                width={2000}
                height={1156}
                alt="Wibey: a list of workspaces and conversations on the left, and on the right a chat in which the assistant has answered a request and offers three follow-up options above the message box"
                caption="Wibey: conversations on the right, grouped into workspaces on the left."
                hotspots={[
                  {
                    x: 15,
                    y: 35.4,
                    title: "Work grouped into workspaces",
                    detail: "Conversations sit under named workspaces, each with a count and, where it is shared, the people in it.",
                  },
                  {
                    x: 61,
                    y: 74,
                    title: "Suggested next steps",
                    detail: "After an answer, Wibey offers follow-up options, so the next step is one click rather than a new prompt.",
                  },
                  {
                    x: 46,
                    y: 88,
                    title: "Tools and model, at the message box",
                    detail: "Tools and the model are chosen where the message is written.",
                  },
                ]}
              />
            </CaseStudyFigure>
          </div>
        </CaseStudySection>

        <CaseStudySection id="problem">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The problem"
            fullWidth
            heading="The problem extended beyond creation"
            body={[
              "Before Studio, builders could use tools available in the market to build these artifacts.",
            ]}
          />
          <CaseStudyFigure>
            <BeforeAfterModel
              before={{
                heading: "Two problems after building",
                body: "First, work was hard to take into production or share, because of data security and other limits. Second, teams built similar things separately, so it was hard to see what already existed and which to use.",
              }}
              after={{
                heading: "What Studio needed to do",
                body: "Take work from an idea towards production inside Wibey’s protection layer. Make existing work easy to find and reuse, so not every request became a new build.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="builder">
          <ArchetypeSection
            heading="Engineers, and now everyone who builds"
            intro="AI has made building possible for anyone, not only engineers. Studio is for engineers, and for the builders who now work alongside them."
            archetypes={WHO}
            basisLabel="How these were defined"
            basis="Drawn from conversations with users."
            variant="cards"
          />
        </CaseStudySection>

        <CaseStudySection id="approach">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The approach"
            fullWidth
            heading="Connect discovery, creation and reuse"
            body={[
              "A builder rarely builds just one artifact. We designed Studio around how they fit together, from describing a need to preparing it for publishing.",
            ]}
          />
          <CaseStudyFigure label="One possible way these building blocks can work together">
            <CompositionDiagram />
            <p className="ds-media-caption">
              For example, an agent helping with onboarding could use a skill for its instructions and an MCP tool to
              retrieve information from another system. That tool may rely on an API to access the service. This is one
              possible composition, not an inheritance hierarchy or a required recipe: agents can use different
              combinations of skills and tools, and APIs can also be used independently.
            </p>
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="path">
          <ArtboardCarousel
            layout="split"
            label="The conversation, from a request to the agent in its workbench"
            eyebrow="The conversation"
            title="Give the conversation a clearer path"
            description={[
              "Starting with a prompt is convenient, but an open-ended conversation may not gather all the information needed to produce a useful artifact. We needed the interaction to remain conversational while asking for the details that matter.",
              "I worked with the staff designer and developers to refine these workflows so the session followed a more directed path. The assistant would ask relevant questions as the user progressed, helping establish context and reduce the risk of hallucinations.",
              "The conversation also gave users a way to continue refining their work. Suggestions in the prototype offered possible next steps, such as adding error handling or tests. The builder could guide the outcome through chat and inspect the artifact in the adjacent workbench.",
            ]}
            slides={CONVERSATION_SLIDES}
          />
        </CaseStudySection>

        <CaseStudySection id="workbenches">
          <ArtboardCarousel
            layout="split"
            label="The workbenches for agents, APIs, MCPs and skills"
            eyebrow="Workbenches"
            title="One Studio, different workbenches"
            description={[
              "An agent, an API and an MCP do not all have the same structure. We therefore designed dedicated workbenches that shared a conversational approach but presented the details relevant to each type of artifact.",
              "Across these experiences, the common idea was to make the result of the conversation tangible. Builders needed to see what they were creating and have ways to work with it directly.",
            ]}
            slides={WORKBENCH_SLIDES}
          />
        </CaseStudySection>

        <CaseStudySection id="testing">
          <ArtboardCarousel
            layout="split"
            label="The playgrounds for agents, MCPs, APIs and skills"
            eyebrow="Testing"
            title="Testing was part of building"
            description={[
              "Creation was only one step in the journey. Builders needed to understand how an artifact behaved, refine its output and assess whether it was ready for use.",
              "We designed playgrounds to support testing and iteration, as well as evaluations intended to help teams assess technical and security requirements. Review and publishing actions helped connect that work to the next stage of making a capability available to others.",
            ]}
            slides={TESTING_SLIDES}
          />
        </CaseStudySection>

        <CaseStudySection id="workspaces">
          <ArtboardCarousel
            layout="split"
            label="Workspaces, from their projects to a shared team space"
            eyebrow="Workspaces"
            title="As the work grew, context needed a home"
            description={[
              "The workbench addressed an individual artifact. But as users created more artifacts and returned to them across multiple conversations, another need became clear: related work needed to stay together.",
              "Workspaces, which shipped, group artifacts and sessions around a shared context. A builder returning to improve a capability, or starting something related, could pick up work with relevant context available instead of repeatedly explaining it from the beginning.",
              "Workspaces also gave us a structure for collaboration and access: who could view the work, who could modify it, and how a team could organise the artifacts and conversations it shared.",
            ]}
            slides={WORKSPACE_SLIDES}
          />
        </CaseStudySection>

      </CaseStudyColumn>

      {/* The prototype is a breaker band, not a chapter with a clip: the
          recordings above are the prototype in use, so another would repeat
          them. The band has to sit outside the reading column to reach the
          edges, so the column closes here and reopens for the reflection. */}
      <div id="prototype" className="mt-16 scroll-mt-28 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="The prototype"
            mark="exchange"
            note="Built over several iterations in Cursor and VS Code, it became a shared source of truth for key decisions."
          >
            The design delivery was a coded prototype.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="outcomes">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="What changed"
            heading="What people have built since launch"
            fullWidth
            body={[
              "Wibey has 6K+ monthly active users. These are the artifacts created in Studio since it launched.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "6K+", label: "monthly active users on Wibey", glyph: "field" },
                { value: "4K+", label: "skills created", glyph: "modules" },
                { value: "300+", label: "MCPs created", glyph: "ring" },
                { value: "100+", label: "agents created", glyph: "layers" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="learned">
          <Reveal>
            <div className="[&>h2]:max-w-[26ch]">
              <p className="eyebrow">Reflection</p>
              <h2 className="display-title display-section mt-3 text-[var(--ink)]">What I learned</h2>
            </div>
          </Reveal>
          <div className="mt-6">
            <Reveal delay={80}>
              <EditorialNumberedRows
                rows={[
                  {
                    number: "01",
                    title: "Design the whole journey around what AI generates",
                    detail:
                      "Finding related work, providing context, inspecting what was generated, testing it and preparing it for others to use.",
                  },
                  {
                    number: "02",
                    title: "Prototype in code",
                    detail:
                      "Working in code let me explore and communicate an evolving interaction, and bring designers, developers and stakeholders into the same experience as we made decisions.",
                  },
                ]}
              />
            </Reveal>
          </div>
        </CaseStudySection>

      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="seam" note={<ConfidentialNote />}>
            When everyone can build, the workflow around what they build matters most.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
