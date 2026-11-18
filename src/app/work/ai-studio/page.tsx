import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArtboardCarousel, type ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { CompositionDiagram } from "@/components/design-system/CompositionDiagram";
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
import { getProject } from "@/content/projects";

/**
 * Studio, from the new brief: a co-designed experience inside Wibey that takes
 * an engineer's AI capability from an idea towards production, with the coded
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
    "Studio is the part of Wibey, Walmart’s internal AI platform, where engineers find what already exists, build what doesn’t, test it and publish it for others.",
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
      "Before building, the assistant looks for similar agents and lists the matches. The engineer chooses to clone and modify one, or to start from scratch.",
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
      "The agent opens as a flow beside the chat, where the engineer can inspect it and keep refining it through conversation.",
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
      "Endpoints, datatypes and responses sit in a structured view beside the chat, so the engineer can inspect each detail and move towards review.",
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
      "The generated files sit in a tree beside their contents. The engineer can inspect them, then test and validate before publishing.",
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

const CHAPTERS = [
  { id: "wibey", label: "What is Wibey" },
  { id: "problem", label: "The problem" },
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
            "Data security and other limitations made it difficult to take what engineers built into production, or to make it consumable by other teams. Teams also worked on similar needs independently, so similar capabilities accumulated.",
        },
        {
          label: "The solution",
          lead: (
            <>
              One workflow, from <span className="ds-accent-text">an idea towards production</span>.
            </>
          ),
          detail:
            "Studio brings discovery, conversational creation, hands-on editing, testing and publishing together inside Wibey’s protection layer, and makes existing work part of the conversation.",
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
      hero={{
        standfirst:
          "In Wibey, Walmart’s internal AI platform, engineers find what already exists, build what doesn’t, test it and publish it for others. I co-designed the workbenches and the conversation.",
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
        alt: "Studio in Wibey: the agent workbench, the MCP workbench and the API workbench",
        stackRatio: 1920 / 1104,
        stack: [
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
          {
            src: "/work/ai-studio/workbench-api-poster.jpg",
            width: 1920,
            height: 1104,
            name: "the API workbench",
            alt: "The API workbench: an overview of a service with its endpoints in a structured view beside the chat",
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
            note="Security and other limits kept engineers’ work from reaching production, or from being usable by other teams."
          >
            Building was the easy part. Shipping and sharing were not.
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
                "Wibey is Walmart’s internal AI platform for engineers. They use it for everyday work, such as designing REST API endpoints, summarising release notes or refining an onboarding workflow. They can also build capabilities for their teams: agents, skills, MCP servers and APIs, which I call artifacts.",
              ]}
            />
            <CaseStudyFigure>
              <BrowserMockup
                route="Wibey"
                src="/work/ai-studio/wibey-chat.webp"
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
              "Before Studio, engineers could use tools available in the market to build these artifacts.",
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

        <CaseStudySection id="approach">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The approach"
            fullWidth
            heading="Connect discovery, creation and reuse"
            body={[
              "An engineer rarely builds just one artifact. We designed Studio around how they fit together, from describing a need to preparing it for publishing.",
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
              "The conversation also gave users a way to continue refining their work. Suggestions in the prototype offered possible next steps, such as adding error handling or tests. The engineer could guide the outcome through chat and inspect the artifact in the adjacent workbench.",
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
              "Across these experiences, the common idea was to make the result of the conversation tangible. Engineers needed to see what they were creating and have ways to work with it directly.",
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
              "Creation was only one step in the journey. Engineers needed to understand how an artifact behaved, refine its output and assess whether it was ready for use.",
              "We designed playgrounds to support testing and iteration, as well as evaluations intended to help teams assess technical and security requirements. Review and publishing actions helped connect that work to the next stage of making a capability available to others.",
            ]}
            slides={TESTING_SLIDES}
          />
        </CaseStudySection>

        <CaseStudySection id="workspaces">
          <CaseStudyChapter
            eyebrow="Workspaces"
            heading="As the work grew, context needed a home"
            body={[
              "The workbench addressed an individual artifact. But as users created more artifacts and returned to them across multiple conversations, another need became clear: related work needed to stay together.",
              "Workspaces, which shipped, group artifacts and sessions around a shared context. An engineer returning to improve a capability, or starting something related, could pick up work with relevant context available instead of repeatedly explaining it from the beginning.",
              "Workspaces also gave us a structure for collaboration and access: who could view the work, who could modify it, and how a team could organise the artifacts and conversations it shared.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="video"
              needs="A workspace in use: artifacts and sessions grouped around a shared context, and who can view or modify the work."
              source="Fresh recording to come."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="prototype">
          <CaseStudyChapter
            eyebrow="The prototype"
            heading="A coded prototype became the shared reference"
            body={[
              "This was my first project where the final design delivery was a coded prototype. We created multiple iterations using Cursor and VS Code, bringing together the conversation, the workbenches and the transitions between them.",
              "Because the experience depended on more than a fixed sequence of screens, the prototype helped us communicate how an engineer would move through discovery, creation, inspection and refinement. We used it for stakeholder reviews, testing and developer handoff; it became a shared source of truth for key decisions.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="video"
              needs="The coded prototype in use, moving through discovery, creation, inspection and refinement."
              source="Fresh recording to come."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="learned">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Reflection"
            heading="What I learned"
            body={[
              "This project changed how I thought about designing AI-assisted experiences. A successful workflow needed to support the full journey around an artifact: finding related work, providing context, inspecting what was generated, testing it and preparing it for others to use.",
              "It also changed how I approached prototyping. Working in code gave me a way to explore and communicate an evolving interaction, and to bring designers, developers and stakeholders into the same experience as we made decisions.",
            ]}
          />
        </CaseStudySection>

        {/* Numbers to come. Their place is left open on purpose: nothing is
            stated here until the figures, what each measures and who owns it
            are supplied. */}
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="seam" note={<ConfidentialNote />}>
            A successful workflow supports the full journey around what it generates.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
