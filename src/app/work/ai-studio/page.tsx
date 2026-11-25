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
    title: "Related work stays together",
    route: "Wibey",
    src: "/work/ai-studio/workspaces-1-projects-poster.jpg",
    mp4: "/work/ai-studio/workspaces-1-projects.mp4",
    width: 1920,
    height: 1104,
    alt: "The sidebar opening a workspace into its projects, and a project listing the work it holds.",
    caption:
      "A workspace opens into its projects, and each project lists the artifacts it holds, in the sidebar and in the main view.",
  },
  {
    title: "Set one up in five steps",
    route: "Wibey",
    src: "/work/ai-studio/workspaces-3-create-poster.jpg",
    mp4: "/work/ai-studio/workspaces-3-create.mp4",
    width: 1920,
    height: 1102,
    alt: "Creating a workspace in five steps: its name and purpose, its members and their roles, the repositories and tools it can use, its rules, and a review before it is created.",
    caption:
      "Creating a workspace takes five steps: its name and purpose, its members, the repositories and tools it can use, its rules, and a review before it is created.",
  },
  {
    title: "Who is in it, and what they can do",
    route: "Wibey",
    src: "/work/ai-studio/workspaces-4-members-poster.jpg",
    mp4: "/work/ai-studio/workspaces-4-members.mp4",
    width: 1920,
    height: 1102,
    alt: "A workspace's Members tab listing the people who can see it and their role, an owner or an editor, with a form to add a member.",
    caption:
      "The Members tab lists the people who can see the workspace and the role each has, owner or editor, and adds a member from the same screen.",
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
  const onward = getProject("api-lifecycle");

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
              I co-designed Studio, working out of a <span className="ds-accent-text">single repo</span>.
            </>
          ),
          detail:
            "I co-designed Studio with a staff designer, working out of a single repository and sharing the responsibilities. I designed its workspaces and the chat conversation that creates an artifact, and we built the coded prototype together. Engineering built the product from it.",
        },
      ]}
      hero={{
        standfirst:
          "In Wibey, Walmart’s internal AI platform, builders find what already exists, build what doesn’t, test it and publish it for others. I co-designed Studio with a staff designer, working out of a single repository.",
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
        alt: "Studio in Wibey: its home, and its workspaces",
        stackRatio: 1920 / 1104,
        stack: [
          {
            src: "/work/ai-studio/hero-home.jpg",
            width: 1920,
            height: 1104,
            name: "Studio home",
            alt: "Studio's home: the list of work in a workspace, with the workspaces down the left",
            route: "Wibey",
            focus: "top",
          },
          {
            src: "/work/ai-studio/workspaces-1-projects-poster.jpg",
            width: 1920,
            height: 1104,
            name: "a workspace and its projects",
            alt: "The sidebar opening a workspace into its projects, and a project listing the work it holds",
            route: "Wibey",
            focus: "top",
          },
          {
            src: "/work/ai-studio/workspaces-3-create-poster.jpg",
            width: 1920,
            height: 1102,
            name: "creating a workspace",
            alt: "Creating a workspace in five steps: its name and purpose, its members, the repositories and tools it can use, its rules, and a review",
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
            heading="Connect discovery, creation and reuse"
            body={[
              "We made the chat the hero. In one conversation a builder can make anything. These are the pieces it works with, and how they fit together.",
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

        <CaseStudySection id="workspaces">
          <ArtboardCarousel
            layout="split"
            label="Workspaces: their projects, how one is set up, and who is in it"
            eyebrow="Workspaces"
            title="As the work grew, context needed a home"
            description={[
              "As users created more artifacts and returned to them across multiple conversations, a need became clear: related work needed to stay together.",
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
