import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArchetypeSection } from "@/components/design-system/ArchetypeSection";
import type { Archetype } from "@/components/design-system/ArchetypeFigure";
import { ArtboardCarousel, type ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { EditorialNumberedRows } from "@/components/design-system/EditorialNumberedRow";
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
import { WorkspaceDiagram } from "./WorkspaceDiagram";

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

const WHO: Archetype[] = [
  {
    name: "Engineers",
    behaviour: "Build AI capabilities for their teams.",
    wants: [
      "See what the AI generated, and work with it directly",
      "Test it and know it is ready before others use it",
    ],
    friction: [
      "Data security and other limits made it hard to take what they built into production",
      "An open-ended chat did not gather the details a useful artifact needs",
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
    title: "Everything in one place",
    route: "Wibey",
    src: "/work/ai-studio/workspaces-new-1-poster.jpg",
    mp4: "/work/ai-studio/workspaces-new-1.mp4",
    width: 2800,
    height: 1609,
    alt: "A person's own workspace listing their artifacts, with filters by type and their chat sessions beside it, then the Recents view gathering work from every workspace.",
    caption:
      "A person's own workspace holds their artifacts, filtered by type, with their chat sessions beside it. Recents and Shared with me gather work from every workspace.",
  },
  {
    title: "A workspace, its people and its work",
    route: "Wibey",
    src: "/work/ai-studio/workspaces-new-2-poster.jpg",
    mp4: "/work/ai-studio/workspaces-new-2.mp4",
    width: 2800,
    height: 1609,
    alt: "A shared workspace with its members, sharing it with collaborators, and creating a new workspace by naming it, inviting people and choosing which artifacts to add.",
    caption:
      "A workspace has its own members and its own artifacts. It can be shared with collaborators, and a new one is made by naming it, inviting people and choosing the artifacts to add.",
  },
  {
    title: "Find anything across workspaces",
    route: "Wibey",
    src: "/work/ai-studio/workspaces-new-3-poster.jpg",
    mp4: "/work/ai-studio/workspaces-new-3.mp4",
    width: 2800,
    height: 1609,
    alt: "The Recents view across all workspaces, filtered by artifact type: agents, APIs, MCPs, PDLC, prototypes and skills.",
    caption:
      "Recents lists everything across workspaces, and the type filters narrow it to agents, APIs, MCPs, PDLC items, prototypes or skills.",
  },
];

const CHAPTERS = [
  { id: "wibey", label: "What is Wibey" },
  { id: "problem", label: "Why it mattered" },
  { id: "builder", label: "Who it is for" },
  { id: "approach", label: "The approach" },
  { id: "workspaces", label: "Workspaces" },
  { id: "prototype", label: "The prototype" },
  { id: "learned", label: "What I learned" },
];

export default function AiStudioPage() {
  const onward = getProject("design-research");

  return (
    <CaseStudyShell
      slug="ai-studio"
      chapters={CHAPTERS}
      evidence={[
        {
          label: "Why it mattered",
          lead: (
            <>
              Building with AI got easier. Taking it to production, and{" "}
              <span className="ds-accent-text">reusing it</span>, did not.
            </>
          ),
          detail:
            "Security and other limits made it hard to take what people built into production, or to let other teams use it. Teams also built similar things on their own, so similar capabilities piled up.",
        },
        {
          label: "What we built",
          lead: (
            <>
              Discovery, creation, testing and publishing in <span className="ds-accent-text">one workflow</span>.
            </>
          ),
          detail:
            "Studio brings discovery, creation, testing and publishing together inside Wibey’s protection layer. People create by chatting and find existing work in the same conversation.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I co-led Studio’s design, working out of a <span className="ds-accent-text">single repo</span>.
            </>
          ),
          detail:
            "I co-led Studio’s design with a staff designer, working out of a single repository and sharing the responsibilities. I designed its workspaces and the chat conversation that creates an artifact, and we built the coded prototype together. Engineering built the product from it.",
        },
      ]}
      hero={{
        standfirst:
          "In Wibey, Walmart’s internal AI platform, builders find what already exists, build what doesn’t, test it and publish it for others. I co-led Studio’s design with a staff designer, working out of a single repository.",
        headline: (
          <>
            Studio: taking AI capabilities from an <span style={{ color: "var(--ds-mint)" }}>idea</span> towards{" "}
            <span style={{ color: "var(--ds-mint)" }}>production</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "Senior UX Designer, co-lead" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2026–Present" },
          { label: "Discipline", value: "AI platform · Product design · Design in code" },
        ],
        alt: "Studio in Wibey: its home, and its workspaces",
        stackRatio: 1920 / 1104,
        stack: [
          {
            src: "/work/ai-studio/studio-new-220.jpg",
            width: 2000,
            height: 1378,
            name: "Recents across workspaces",
            alt: "Recents: every artifact across all workspaces, with filters for agents, APIs, MCPs, PDLC items, prototypes and skills",
            route: "Wibey",
            focus: "top",
          },
          {
            src: "/work/ai-studio/studio-new-219.jpg",
            width: 2000,
            height: 1379,
            name: "a person's workspace",
            alt: "A person's own workspace listing their artifacts, with their chat sessions beside it",
            route: "Wibey",
            focus: "top",
          },
          {
            src: "/work/ai-studio/workspaces-new-2-poster.jpg",
            width: 2800,
            height: 1609,
            name: "a shared workspace",
            alt: "A shared workspace with its members and the artifacts it holds, filtered by type",
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
            With AI, anyone can start to build. Shipping and publishing are still the hard part.
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
                "Wibey is Walmart’s internal AI platform for builders. They use it for everyday work, such as designing REST API endpoints, summarising release notes or refining an onboarding workflow. They can also build capabilities for their teams, which I call artifacts.",
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
              "Before Studio, builders could use tools available in the market to build these artifacts. Those tools could only work on mock data, because real data sources and APIs stay behind Wibey’s protection layer.",
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
            intro="AI has made building possible for anyone, not only engineers. Studio is for engineers, and for the builders who now work alongside them. Anyone can describe what they want in conversation, and Studio walks them through building it."
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
            heading="A workspace that brings it all together"
            body={[
              "We made the workspace the hero. It holds the agents, skills, MCPs and APIs a builder makes and finds, with the chat sessions that made them, so nothing has to be explained twice.",
            ]}
          />
          <CaseStudyFigure label="A workspace holds the chats, the artifacts and the people">
            <WorkspaceDiagram />
            <p className="ds-media-caption">
              The artifacts can work together. For example, an agent helping with onboarding could use a skill for its
              instructions and an MCP tool to retrieve information from another system, and that tool may rely on an API.
              This is one possible composition, not a required recipe.
            </p>
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="workspaces">
          <ArtboardCarousel
            layout="split"
            label="Workspaces: their projects, how one is set up, and who is in it"
            eyebrow="Workspaces"
            title="As the work grew, context needed a home"
            description={[
              "As builders came back to their artifacts across many conversations, they had to explain the context again each time. Workspaces, which shipped, keep that context with the work.",
              "They also gave teams a way to share it: who can view the work, who can modify it, and how a team organises the artifacts and conversations it shares.",
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
              "Wibey has 6K+ monthly active users. These are the artifacts published since Studio launched, and every one is in use.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "6K+", label: "monthly active users on Wibey", glyph: "field" },
                { value: "4K+", label: "skills published", glyph: "modules" },
                { value: "300+", label: "MCPs published", glyph: "ring" },
                { value: "100+", label: "agents published", glyph: "layers" },
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
