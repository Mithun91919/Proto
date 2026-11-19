import type { ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Studio summary shows under its opener. Every line is the case
 * study's own wording, cut down.
 */
const SLIDES: ArtboardSlide[] = [
  {
    title: "Agents",
    route: "Wibey",
    src: "/work/ai-studio/workbench-agent-poster.jpg",
    mp4: "/work/ai-studio/workbench-agent.mp4",
    width: 1920,
    height: 1104,
    alt: "The agent workbench: a canvas showing an orchestrator and two connected agents, with the chat beside it.",
    caption: "A canvas shows an orchestrator and its connected agents, with controls to add sub-agents, MCP servers and tools.",
  },
  {
    title: "APIs",
    route: "Wibey",
    src: "/work/ai-studio/workbench-api-poster.jpg",
    mp4: "/work/ai-studio/workbench-api.mp4",
    width: 1920,
    height: 1104,
    alt: "The API workbench: endpoints, datatypes and responses in a structured view beside the chat.",
    caption: "Endpoints, datatypes and responses sit in a structured view beside the chat.",
  },
  {
    title: "MCPs",
    route: "Wibey",
    src: "/work/ai-studio/workbench-mcp-poster.jpg",
    mp4: "/work/ai-studio/workbench-mcp.mp4",
    width: 1920,
    height: 1104,
    alt: "The MCP workbench: a list of generated tools for review, with Playground, Validate and Publish in the toolbar.",
    caption: "The generated tools are listed for review, with a playground, validation and publishing in the toolbar.",
  },
  {
    title: "Skills",
    route: "Wibey",
    src: "/work/ai-studio/workbench-skill-poster.jpg",
    mp4: "/work/ai-studio/workbench-skill.mp4",
    width: 1920,
    height: 1104,
    alt: "The skill workbench: a tree of generated files beside the contents of the selected file.",
    caption: "The generated files sit in a tree beside their contents, to inspect, test and validate before publishing.",
  },
];

export function AiStudioSummary() {
  return (
    <SummaryStory
      slug="ai-studio"
      beats={[
        {
          label: "Why it mattered",
          lead: "Building an agent got easier. Taking one to production did not.",
          detail:
            "Data security and other limits made it hard to take work into production or share it, and teams built similar things separately.",
        },
        {
          label: "What we built",
          lead: "Discovery, creation, testing and publishing in one workflow.",
          detail: "Studio brings them together inside Wibey’s protection layer, with a workbench for each kind of artifact.",
        },
        {
          label: "What I did",
          lead: "I co-designed the workbenches and the conversation.",
          detail: "I worked with a staff designer, and delivered a coded prototype built over several iterations, which engineering built the product from.",
        },
      ]}
      results={[
        { value: "6K+", label: "monthly active users on Wibey", glyph: "field" },
        { value: "4K+", label: "skills published", glyph: "modules" },
        { value: "300+", label: "MCPs published", glyph: "ring" },
        { value: "100+", label: "agents published", glyph: "layers" },
      ]}
      caveat="Counts since launch. The 6K+ is monthly active users of Wibey; the rest are artifacts published since launch, all in use."
      carousel={{
        eyebrow: "The workbenches",
        title: "One Studio, different workbenches",
        description:
          "An agent, an API, an MCP and a skill do not share a structure, so each has its own workbench beside the chat.",
        label: "The workbenches for agents, APIs, MCPs and skills",
        slides: SLIDES,
      }}
    />
  );
}
