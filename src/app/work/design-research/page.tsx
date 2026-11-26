import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";
import { STANDFIRST } from "./copy";
import { DesignResearchSummary } from "./summary";
import { MethodTabs } from "./MethodTabs";
import { PROTOTYPE_SLIDES } from "./prototype-slides";
import { FindingBlock, type Finding } from "./FindingBlock";

/**
 * An exploration of the Design research case study as a landing page: the
 * finding stated up front, then each finding as its own full section, one below
 * the other, each with what was heard, the survey beside it and what it means.
 * Unlisted. The wording is the case study's own and the readout's.
 */

export const metadata: Metadata = {
  title: "Discovery user research — How designers at Walmart are adopting AI",
  description:
    "A discovery study of how designers at Walmart are adopting AI in their work: 16 interviews and a survey of 38, what they showed leaders, and the decision that followed.",
  robots: caseStudyRobots,
};


/** A row of stages, each with a short note. */
function Stages({ label, items }: { label: string; items: { name: string; note?: string }[] }) {
  return (
    <ol aria-label={label} className="grid gap-3" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map((item, i) => (
        <li key={item.name}>
          <GlassPanel variant="soft" className="h-full rounded-2xl p-5">
            <p className="ds-eyebrow">{String(i + 1).padStart(2, "0")}</p>
            <p className="display-title mt-2" style={{ fontSize: "1.1rem", lineHeight: 1.25 }}>
              {item.name}
            </p>
            {item.note ? (
              <p className="mt-2 text-[0.88rem] leading-6" style={{ color: "var(--ink-soft)" }}>
                {item.note}
              </p>
            ) : null}
          </GlassPanel>
        </li>
      ))}
    </ol>
  );
}

const FINDINGS: Finding[] = [
  {
    id: "f1",
    n: "1",
    raised: 16,
    claim: "Designers move work between tools by hand, and lose context each time.",
    question: "Which AI-supported tasks do you actually return to, and which have not become part of your regular workflow?",
    heardTitle: "The workflow is a chain of tools held together by the designer.",
    heardPoints: [
      "Each tool helps with a specific task, but context is often recreated or re-explained as work moves between tools.",
      "Everyone we asked described the same chain.",
    ],
    stagesTitle: "The chain, by stage",
    stagesLabel: "The stages of a design project and the tools used at each",
    stages: [
      { name: "Understand and ideate", note: "FigJam, ChatGPT" },
      { name: "Create design", note: "Figma" },
      { name: "Prototype", note: "Builder.io, Wibey, Cursor" },
      { name: "Refine code", note: "Wibey, Cursor, VS Code" },
      { name: "Handoff", note: "Figma, GitHub, videos" },
    ],
    means: "Designers want help that appears inside the tool they’re already using, when they need it. They don’t want to leave their work to go and find it.",
    surveyPoints: ["The survey: 76% use three or more tools on a project.", "29% lose over an hour a day to switching between tools."],
    chart: 0,
  },
  {
    id: "f2",
    n: "2",
    raised: 15,
    claim: "Living Design alignment is where AI trust starts to break.",
    question: "At what point do you check whether a prototype aligns to Living Design and accessibility requirements, and how do you do that today?",
    term: {
      name: "Living Design",
      meaning: "is Walmart’s design system: the shared components, colours, spacing and patterns that Walmart products are built from.",
    },
    heardTitle: "Output can look right and still fail the trust check.",
    heardPoints: [
      "It fails if it does not use the right Walmart components, tokens or patterns.",
      "Designers manually review and correct it, which reduces confidence and slows review.",
      "For most, the check came late, and by hand.",
    ],
    stagesTitle: "How it goes wrong",
    stagesLabel: "Four ways AI output fails Living Design alignment",
    stages: [
      { name: "Non-Walmart components", note: "Generic interface suggestions instead of Living Design components" },
      { name: "Living Design mismatch", note: "Looks visually close, but does not map to the right component" },
      { name: "Token drift", note: "Colours, spacing, typography or states need manual fixes" },
      { name: "Late manual correction", note: "Issues are caught during review or handoff, not during generation" },
    ],
    means: "If the AI used Walmart’s own design components correctly, accessibility would come built in, and designers would stop fixing it by hand.",
    surveyPoints: ["The survey: 45% would add built-in Living Design components first, more than twice any other capability."],
    chart: 2,
  },
  {
    id: "f3",
    n: "3",
    raised: 14,
    claim: "AI helps first drafts, but confidence drops during refinement.",
    question: "Where do current prototyping tools limit your creativity, control, or ability to focus on the experience itself?",
    heardTitle: "AI is useful for first drafts, and the workflow breaks at refinement.",
    heardPoints: [
      "Designers find AI useful for ideation and first-pass prototypes.",
      "It breaks when they need to refine details, preserve quality or make the output review-ready.",
      "The deeper issue is controlled iteration. This question was reframed during the study, from creativity to control.",
    ],
    stagesTitle: "Where confidence holds, and where it drops",
    stagesLabel: "How designers rate AI at each point",
    stages: [
      { name: "Ideation", note: "Helpful" },
      { name: "First draft", note: "Useful" },
      { name: "Refinement", note: "Inconsistent" },
      { name: "Handoff", note: "Not trusted yet" },
    ],
    means: "AI is good enough for a prototype, but not for a design handoff like a Figma file.",
    surveyPoints: ["The survey: 74% somewhat trust AI prototypes but say they need significant review.", "Only 8% fully trust them."],
    chart: 1,
  },
  {
    id: "f4",
    n: "4",
    raised: 14,
    claim: "Handoff is where design intent is most vulnerable.",
    question: "How do you handle handoff today, and what usually changes or gets lost between prototype and developed experience?",
    heardTitle: "Prototypes work as demos, not yet as handoff artefacts.",
    heardPoints: [
      "Designers still rely on Figma links, GitHub links, recordings, walkthroughs and manual explanation to carry intent into engineering.",
      "Engineers often started again, so intent had to be explained twice.",
    ],
    stagesTitle: "From a demo to something engineering can reuse",
    stagesLabel: "The steps from a demo to a reusable handoff",
    stages: [
      { name: "Demo prototype", note: "Shows the concept, not reusable" },
      { name: "Reference artefact", note: "Inspires direction, needs a rebuild" },
      { name: "Review-ready prototype", note: "Usable for stakeholder review" },
      { name: "Reusable handoff", note: "Production-ready and Living Design aligned. This is the target." },
    ],
    means: "When a prototype is handed to engineers, they often start again, so the designer has to explain their intent a second time.",
    surveyPoints: ["The survey: 50% say less than 75% of their design intent survives the first developer build."],
    chart: { total: 2, lit: 1, label: "Half the designers say less than three quarters of their design intent survives the first build", note: "Half say less than 75% survives the first build: one lit dot of two." },
  },
];


const CHAPTERS = [
  { id: "method", label: "How I ran it" },
  { id: "short", label: "The short version" },
  { id: "f1", label: "Finding 1" },
  { id: "f2", label: "Finding 2" },
  { id: "f3", label: "Finding 3" },
  { id: "f4", label: "Finding 4" },
  { id: "direction", label: "Presenting it" },
  { id: "prototype", label: "The prototype" },
  { id: "outcome", label: "What changed" },
  { id: "limits", label: "Limits" },
];

export default function DesignResearchLandingPage() {
  const onward = getProject("api-lifecycle");

  return (
    <CaseStudyShell
      slug="design-research"
      chapters={CHAPTERS}
      summary={{
        title: "Discovery user research",
        standfirst: STANDFIRST,
        body: <DesignResearchSummary />,
        ownOpener: true,
      }}
      evidence={[
        {
          label: "Why it mattered",
          lead: (
            <>
              Leaders <span className="ds-accent-text">judged</span> designers by how developers use AI.
            </>
          ),
          detail:
            "AI was only just becoming part of designers’ work, and nobody had mapped how. Leaders needed to see it before deciding what to build.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I <span className="ds-accent-text">led</span> the research, with a staff designer helping.
            </>
          ),
          detail:
            "I ran the study with 16 interviewees and 38 survey respondents in India and the US, and presented what it showed to stakeholders and reviewers.",
        },
        {
          label: "What changed",
          lead: (
            <>
              Leaders chose to invest in AI <span className="ds-accent-text">skills and agents</span> for designers.
            </>
          ),
          detail:
            "The team behind Walmart’s design system, Living Design, then created a kit that designers can use to build prototypes on any platform.",
        },
      ]}
      hero={{
        standfirst: STANDFIRST,
        headline: (
          <>
            Discovery user research: how designers at Walmart are adopting <span style={{ color: "var(--ds-mint)" }}>AI</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "Senior UX Designer, research lead" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2026" },
          { label: "Discipline", value: "User research · Discovery · AI tooling" },
        ],
        alt: "Screens from the study: the interview question slide, and the concept prototype’s launchpad and Living Design check",
        stackRatio: 1742 / 978,
        stack: [
          {
            src: "/work/design-research/question-slide.jpg",
            width: 1742,
            height: 978,
            name: "the interview question",
            alt: "The first slide of the interview guide, titled Hypothesis 1, asking which AI-supported tasks designers return to.",
            focus: "center",
          },
          {
            src: "/work/design-research/prototype-poster-1.jpg",
            width: 2664,
            height: 1809,
            name: "the prototype launchpad",
            alt: "The concept prototype’s launchpad with a prompt typed in for a People Manager workspace.",
            route: "Wibey Design",
            focus: "top",
          },
          {
            src: "/work/design-research/prototype-poster-4.jpg",
            width: 2664,
            height: 1809,
            name: "the Living Design check",
            alt: "The concept prototype’s Living Design panel, showing a compliance summary for a selected chart.",
            route: "Wibey Design",
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
      <CaseStudyColumn>
        <CaseStudySection id="method">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="How I ran it"
            fullWidth
            heading="Methods I built to suit the study"
            body={[
              "I built the parts of this study myself: the survey, the synthesis skill and the readout, the document I presented. Interviews gave depth and a short survey gave scale. Here is each one on its own, and then how I put them together.",
            ]}
          />
          <CaseStudyFigure>
            <MethodTabs />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div id="short" className="mt-16 scroll-mt-28 md:mt-24">
        <Reveal>
          <PullStatement
            eyebrow="The short version"
            mark="connection"
            note="Designers were already getting first drafts quickly. What broke was knowing the output was right: across tools, against Living Design, through refinement and into handoff."
          >
            Designers are adopting AI, and trust is what holds them back.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <Reveal>
          <div className="mt-14 md:mt-20">
            <p className="eyebrow">How the findings were chosen</p>
            <p className="body-text mt-3" style={{ maxWidth: "none" }}>
              Nine themes were tracked. Four reached saturation: the same themes kept coming up, with 14 to 16 of the 16
              interviewees raising them. Those are the findings below. The other five were strong, emerging or low, and are
              not claimed as findings.
            </p>
          </div>
        </Reveal>
        {FINDINGS.map((f) => (
          <FindingBlock key={f.id} f={f} />
        ))}
      </CaseStudyColumn>

      <CaseStudyColumn>

        <CaseStudySection id="direction">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Presenting it"
            fullWidth
            heading="I took the learnings to leadership, and they decided what to build for designers."
            body={[
              "I presented the readout to design, product and engineering leadership. The learnings were clear that designers want AI to help them move faster, but only if the output stays trustworthy, controllable and aligned to Walmart standards.",
            ]}
          />
          <CaseStudyFigure>
            <div className="grid items-stretch gap-3" style={{ gridTemplateColumns: "1fr 5rem 1fr" }}>
              <GlassPanel variant="soft" className="rounded-2xl p-7">
                <p className="ds-eyebrow">What I presented</p>
                <p className="display-title mt-3" style={{ fontSize: "1.4rem", lineHeight: 1.25 }}>
                  Four findings from 16 interviews and 38 survey responses.
                </p>
                <p className="mt-3 text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
                  And a recommendation in two steps. Now: help designers get from a requirement to a first prototype. Next: from a final design to a handoff that has been checked.
                </p>
              </GlassPanel>
              <div aria-hidden="true" className="flex flex-col items-center justify-center gap-1">
                <span className="ds-eyebrow">led to</span>
                <span className="ds-arrow">→</span>
              </div>
              <GlassPanel variant="base" className="rounded-2xl p-7" style={{ borderLeft: "3px solid var(--ds-accent)" }}>
                <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>The decision</p>
                <p className="display-title mt-3" style={{ fontSize: "1.4rem", lineHeight: 1.25 }}>
                  Leadership chose to invest in AI skills and agents that help designers build prototypes.
                </p>
                <p className="mt-3 text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
                  Packaged instructions, and assistants that complete a task.
                </p>
              </GlassPanel>
            </div>
          </CaseStudyFigure>
          <p className="body-text mt-8" style={{ maxWidth: "none" }}>
            I asked leadership to agree the direction, confirm the evidence was enough to start scoping the first version,
            and name Living Design and engineering partners to validate early.
          </p>
        </CaseStudySection>

        <CaseStudySection id="prototype">
          <ArtboardCarousel
            layout="split"
            label="The concept: from a prompt to screens checked against Living Design"
            eyebrow="The prototype"
            title="A concept: describe it, watch it build, check it"
            description={[
              "The research also fed a concept for creating a prototype by chat. A designer describes a workspace in a prompt, and the screens are built in stages from Living Design patterns, then checked against the design system as they are made, not afterwards.",
              "It is a concept, not a product in production, and the data in it is fictional. I built it by prompting Cursor, an AI coding tool, and refining what it produced.",
            ]}
            slides={PROTOTYPE_SLIDES}
          />
        </CaseStudySection>

        <CaseStudySection id="outcome">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="What changed"
            fullWidth
            heading="Leaders saw designers differently, and chose what to build"
            body={["I presented the research, and three things followed."]}
          />
          <CaseStudyFigure>
            <Stages
              label="Three things that followed the research"
              items={[
                { name: "A different lens", note: "Leaders understood how designers use AI, and stopped treating them through the same lens as a developer using it." },
                { name: "A decision to invest", note: "Leadership chose to invest in AI skills and agents, which are packaged instructions and assistants that complete a task, to help designers build prototypes." },
                { name: "A kit to build with", note: "The Living Design team created a kit that can be used to build on any platform." },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div id="limits" className="mt-16 scroll-mt-28 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="Limits"
            mark="rhythm"
            note="As a discovery study, it maps what designers do today. It does not test a solution. I recruited by direct message, so people who agreed may differ from those who didn’t, and some took part in both the interviews and the survey. The skill sorted quotes into themes using AI, so the counts reflect its assignments."
          >
            This is a snapshot of early 2026, from Walmart designers only, so it may not hold elsewhere or now.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
