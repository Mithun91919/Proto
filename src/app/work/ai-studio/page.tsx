import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
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
 * Prose from `projects/ai-studio/web/ai-studio-web.md`. This is a first
 * draft: there are no captures yet, so every screen is a stated placeholder
 * (`MediaPlaceholder`), and there are no figures, because the counts of what
 * has been created and published are still to be confirmed.
 */

export const metadata: Metadata = {
  title:
    "Studio — One place to build, host and share AI skills, MCPs, agents, APIs and plugins",
  description:
    "A place inside an internal AI portal to create, manage, publish and share AI skills, MCPs, agents, APIs and plugins, with a front end designed in code.",
  robots: caseStudyRobots,
};

const CHAPTERS = [
  { id: "problem", label: "Before Studio" },
  { id: "assets", label: "Five kinds of asset" },
  { id: "team", label: "Two designers" },
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
              One place to{" "}
              <span className="ds-accent-text">build, host and share</span>{" "}
              them.
            </>
          ),
          detail:
            "Studio sits inside the internal AI portal. People create, manage and publish all five kinds of asset there: skills, MCPs, agents, APIs and plugins.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I <span className="ds-accent-text">defined the experience</span>{" "}
              with a staff designer.
            </>
          ),
          detail:
            "We set the point of view together, each took a field of the product, and each refined part of the flow or all of it. We built the front end in code, and developers used it as their reference.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "The part of the internal AI portal where people create, manage, publish and share the skills, MCPs, agents, APIs and plugins that make an AI assistant useful at a job.",
        headline: (
          <>
            Studio: <span style={{ color: "var(--ds-mint)" }}>one place</span>{" "}
            to build, host and share AI skills, MCPs, agents, APIs and plugins.
          </>
        ),
        meta: [
          { label: "Role", value: "Senior UX Designer" },
          { label: "With", value: "A staff designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2026–Present" },
          {
            label: "Discipline",
            value: "AI platform · Product design · Design in code",
          },
        ],
      }}
      next={
        next
          ? {
              href: `/work/${next.slug}`,
              number: next.number,
              label: next.label,
              title: next.title,
            }
          : {
              href: "/work",
              number: "—",
              label: "All work",
              title: "See the rest of the work.",
            }
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
            A skill teaches an AI assistant how to do one job. An MCP (a
            connector for AI tools) lets it use another system. An agent carries
            out a task in steps.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection
          id="problem"
          boundary={false}
          className="pt-14 md:pt-20"
        >
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

        <CaseStudySection id="assets">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="One product"
            heading="Skills, MCPs, agents, APIs and plugins are all in Studio"
            body={[
              "A person creates, manages and publishes each of the five kinds of asset from the same place.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="image"
              ratio={16 / 10}
              needs="A Studio screen showing the five kinds of asset, from a real anonymised capture."
              source="Studio, as built"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="team">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="How it was made"
            heading="Two designers defined the experience together"
            body={[
              "I worked on Studio with a staff designer. We defined the experience point of view together. We each took a field of the product, and each of us refined part of the flow or all of it.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="Why it was built in code" mark="seam">
            A screen shows what an interface looks like. Code shows what it
            does.
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
              "So we built the front end in code, in Cursor and VS Code, in several versions, and hosted it on GitHub Pages so stakeholders and users could use it and tell us what to change.",
              "Developers used it as their front-end reference. They did not have to interpret static screens, so they could spend their time on the backend and the integrations.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="video"
              ratio={16 / 10}
              needs="A short clip of the working front end: building a workflow and running it."
              source="Studio front end, recorded"
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
          <PullStatement
            eyebrow="Why Studio exists"
            mark="exchange"
            note={<ConfidentialNote />}
          >
            Work that can only be shared by passing a repo stays with the person
            who built it.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
