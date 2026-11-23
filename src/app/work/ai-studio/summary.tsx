import { DotNodes, type DotNode } from "@/components/design-system/DotNodes";
import { StorySummary, StoryDots, StoryClip, StoryScreen, StoryVisual, StoryWords } from "@/components/design-system/StorySummary";
import type { StoryStep } from "@/components/design-system/ScrollStory";

/**
 * The Studio summary: the case study told by scrolling, down the path a builder
 * takes from saying what they want to publishing what they made. Every line is the
 * case study's own wording; the only new words are the notes under the dots.
 * The screens are the case study's own recordings, played while their step shows.
 * See the design system, section N, for the conditions.
 */

const PATH: DotNode[] = ["Intent", "Build", "Inspect", "Test", "Publish"].map((label) => ({ label }));

/** A step along the path: the path with one dot lit, and the recording of that step under it. */
function pathVisual(active: number, clip: { mp4: string; poster: string; alt: string }) {
  return (
    <StoryVisual dots={<DotNodes nodes={PATH} state="connected" active={active} label={`Step ${active + 1} of the path: ${PATH[active].label}`} />}>
      <StoryClip {...clip} />
    </StoryVisual>
  );
}

const STEPS: StoryStep[] = [
  {
    label: "Why it mattered",
    text: (
      <StoryWords
        eyebrow="Why it mattered"
        title="Building an agent got easier. Taking one to production did not."
        points={[
          "Real data stays behind Wibey’s protection layer, so tools on the market only worked on mock data.",
          "Data security and other limits made it hard to take work into production or share it.",
          "Teams built similar things separately, so it was hard to see what already existed.",
        ]}
      />
    ),
    visual: <StoryDots nodes={PATH} state="scattered" label="The five stages of building an agent, with nothing joining them" note="Each dot is a stage of the work. Nothing joined them." />,
  },
  {
    label: "What we built",
    text: (
      <StoryWords
        eyebrow="What we built"
        title="One workflow, from intent to publishing."
        points={[
          "Studio brings discovery, creation, testing and publishing together inside Wibey’s protection layer.",
          "People create by chatting, edit by hand in a workbench, and find existing work in the same conversation.",
        ]}
      />
    ),
    visual: <StoryDots nodes={PATH} state="connected" label="The five stages of building an agent, joined from intent to publishing" note="The same five stages, now linked from intent to publishing." />,
  },
  {
    label: "Intent",
    text: (
      <StoryWords
        eyebrow="Intent"
        title="Say what you want to build. Wibey checks if it already exists."
        points={[
          "Ask for an agent and Wibey searches its registry first.",
          "It lists the similar ones it finds.",
          "From there you can reuse one as it is, clone and modify one, or start from scratch.",
        ]}
      />
    ),
    visual: pathVisual(0, {
      mp4: "/work/ai-studio/conversation-1-check.mp4",
      poster: "/work/ai-studio/conversation-1-check-poster.jpg",
      alt: "A request in Wibey chat to build an agent that reminds people about stuck Jira tickets. Wibey checks its registry, lists three similar agents, and asks whether to clone and modify one or create from scratch.",
    }),
  },
  {
    label: "Build",
    text: (
      <StoryWords
        eyebrow="Build"
        title="Ask for the details that matter."
        points={[
          "An open chat did not collect what a useful agent needs, so the assistant asks follow-up questions.",
          "The answers give it context and cut the risk of made-up answers.",
          "It then sets out a plan and offers to create the agent.",
        ]}
      />
    ),
    visual: pathVisual(1, {
      mp4: "/work/ai-studio/conversation-2-questions.mp4",
      poster: "/work/ai-studio/conversation-2-questions-poster.jpg",
      alt: "Wibey asking questions about the stuck threshold, how reminders are sent, the language and the schedule, then setting out a plan with two sub-agents and offering to create the agent.",
    }),
  },
  {
    label: "Inspect",
    text: (
      <StoryWords
        eyebrow="Inspect"
        title="Every kind of thing gets its own workbench."
        points={[
          "An agent, an API, an MCP (a connector that lets an agent use a tool) and a skill do not share a structure, so each has its own view beside the chat.",
          "The builder sees what the AI made and can edit it by hand.",
        ]}
      />
    ),
    visual: pathVisual(2, {
      mp4: "/work/ai-studio/workbench-agent.mp4",
      poster: "/work/ai-studio/workbench-agent-poster.jpg",
      alt: "The agent workbench: a canvas showing an orchestrator and two connected agents, with a menu to add a sub-agent, an MCP server, tools, a human handoff or a termination, and the chat beside it.",
    }),
  },
  {
    label: "Test",
    text: (
      <StoryWords
        eyebrow="Test"
        title="Test it before anyone else uses it."
        points={[
          "Playgrounds let you run a task, call a tool or send a request, and see what happens.",
          "Evaluations are meant to help teams check technical and security needs.",
        ]}
      />
    ),
    visual: pathVisual(3, {
      mp4: "/work/ai-studio/testing-agent.mp4",
      poster: "/work/ai-studio/testing-agent-poster.jpg",
      alt: "The agent playground: a list of sessions on the left, and a task that has been run, with the agent’s steps and a Task completed result.",
    }),
  },
  {
    label: "Publish",
    text: (
      <StoryWords
        eyebrow="Publish"
        title="Publish it so other teams can use it."
        points={[
          "Validate, Publish and Deploy sit in each workbench’s toolbar.",
          "Workspaces group related artifacts and conversations, and set who can view or change them.",
        ]}
      />
    ),
    visual: pathVisual(4, {
      mp4: "/work/ai-studio/workbench-mcp.mp4",
      poster: "/work/ai-studio/workbench-mcp-poster.jpg",
      alt: "The MCP workbench: a list of generated tools, each with its method, name, description and annotations, and a toolbar with MCP Playground, Validate, Publish and Deploy.",
    }),
  },
  {
    label: "What I did",
    text: (
      <StoryWords
        eyebrow="What I did"
        title="I co-designed the workbenches and the conversation."
        points={[
          "I worked with a staff designer on the workbenches and the conversation, and with developers on the whole experience.",
          "The deliverable was a coded prototype, built over several iterations in Cursor and VS Code.",
          "Engineering built the product from it.",
        ]}
      />
    ),
    visual: (
      <StoryVisual dots={<DotNodes nodes={PATH} state="connected" label="The five stages of building an agent, joined from intent to publishing" />}>
        <StoryScreen
          src="/work/ai-studio/hero-home.jpg"
          alt="Studio’s home: the list of agents in a workspace, with the workspaces down the left"
          wide
        />
      </StoryVisual>
    ),
  },
];

export function AiStudioSummary() {
  return (
    <StorySummary
      slug="ai-studio"
      title="Studio"
      standfirst="In Wibey, Walmart’s internal AI platform, I co-designed Studio, where builders find what exists, build what doesn’t, test it and publish it for others."
      introAlt="Studio in Wibey: its home, the agent workbench and the MCP workbench"
      storyLabel="Studio, told step by step"
      steps={STEPS}
      results={{
        title: "What people have built since launch.",
        points: [
          "The 6K+ is monthly active users of Wibey.",
          "The rest are artifacts published since Studio launched, and every one is in use.",
        ],
        items: [
          { value: "6K+", label: "monthly active users on Wibey", glyph: "field" },
          { value: "4K+", label: "skills published", glyph: "modules" },
          { value: "300+", label: "MCPs published", glyph: "ring" },
          { value: "100+", label: "agents published", glyph: "layers" },
        ],
      }}
    />
  );
}
