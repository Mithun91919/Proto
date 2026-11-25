import type { Metadata } from "next";
import Image from "next/image";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { ArtboardCarousel, type ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { EvidenceTabs, type EvidencePanel } from "./EvidenceTabs";
import { MethodTabs } from "./MethodTabs";
import { SurveyCharts } from "./SurveyCharts";

/**
 * Design research for AI prototyping, from projects/design-research/web/.
 *
 * A research case study, so it has no screens: the evidence is the method and
 * what it found. The prototype that followed is a concept, and the page says
 * so. No names, quotes, internal links or competitor figures are used.
 */

export const metadata: Metadata = {
  title: "Design research — How designers use AI to prototype",
  description:
    "Research with 54 participants, 16 interviewed and 38 surveyed, across India and the US, on how designers at Walmart use AI to prototype, where it breaks, and what leaders decided to build.",
  robots: caseStudyRobots,
};

/** A survey number, and the reason the interviews gave for it. */
const NUMBERS_AND_REASONS: { figure: string; claim: string; reason: string }[] = [
  {
    figure: "76%",
    claim: "use three or more tools on a project",
    reason: "All 16 interviewees described a chain of tools held together by hand, with context re-explained at each step.",
  },
  {
    figure: "74%",
    claim: "need significant review before trusting AI output",
    reason:
      "Output could look right and still use the wrong components or tokens, so it was corrected late and by hand. 15 of 16 raised it.",
  },
  {
    figure: "45%",
    claim: "would add built-in Living Design components first",
    reason: "Without them, AI suggested generic interface parts instead of Walmart’s own, which is why they asked for the real ones.",
  },
  {
    figure: "50%",
    claim: "say less than 75% of design intent survives the first build",
    reason: "Prototypes worked as demos, but engineers often started again, so intent had to be explained twice. 14 of 16 raised it.",
  },
];

/** The four themes that reached saturation, how many of the 16 raised each, and the short learning. */
const THEMES: { theme: string; count: number; learning: string }[] = [
  {
    theme: "Designers join the tools together themselves",
    count: 16,
    learning: "A chain of tools held together by hand, with context re-explained at each step",
  },
  {
    theme: "Living Design is checked by hand, and too late",
    count: 15,
    learning: "Output looked right but used the wrong components or tokens",
  },
  {
    theme: "AI output isn’t trusted enough to hand off",
    count: 14,
    learning: "Good for first drafts, and confidence drops during refinement",
  },
  {
    theme: "Handoff is where design intent is most vulnerable",
    count: 14,
    learning: "Prototypes worked as demos, then engineers often started again",
  },
];

function Photo({ src, alt, sizes, ratio }: { src: string; alt: string; sizes: string; ratio: string }) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)]" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

const EVIDENCE_PANELS: EvidencePanel[] = [
  {
    id: "interviews",
    label: "Interviews",
    content: (
      <div className="grid items-start gap-x-14 gap-y-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <h3 className="display-title" style={{ fontSize: "1.7rem", lineHeight: 1.2 }}>
            The interviews told me why
          </h3>
          <p className="body-text mt-4">
            I interviewed 16 people across India and the US, with a staff designer helping. Nine themes were tracked, and
            these four reached saturation.
          </p>
          <ul className="mt-6 flex flex-col">
            {THEMES.map((q, i) => (
              <li key={q.theme} className={`grid grid-cols-[4.25rem_minmax(0,1fr)] items-start gap-5 py-5 ${i > 0 ? "ds-rule" : ""}`}>
                <div>
                  <p className="display-title" style={{ fontSize: "2.1rem", lineHeight: 1, color: "var(--ds-accent)" }}>
                    {q.count}
                  </p>
                  <p className="ds-eyebrow mt-1.5">of 16</p>
                </div>
                <div>
                  <p className="display-title" style={{ fontSize: "1.25rem", lineHeight: 1.25 }}>
                    {q.theme}
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-6" style={{ color: "var(--muted)" }}>
                    {q.learning}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <figure className="m-0">
          <div className="flex flex-col gap-3">
            <Photo
              src="/work/design-research/question-slide.jpg"
              alt="The first slide of the interview guide, titled Hypothesis 1, asking which AI-supported tasks designers return to and which have not become part of their regular workflow."
              sizes="(min-width: 1024px) 560px, 100vw"
              ratio="16 / 9"
            />
            <div className="grid grid-cols-2 gap-3">
              <Photo
                src="/work/design-research/session-interview.jpg"
                alt="An interview in progress: a participant seated at a table with a laptop, facing the interviewer."
                sizes="(min-width: 1024px) 275px, 50vw"
                ratio="16 / 9"
              />
              <Photo
                src="/work/design-research/session-room.jpg"
                alt="A group session in a meeting room, with five people around a table with laptops."
                sizes="(min-width: 1024px) 275px, 50vw"
                ratio="16 / 9"
              />
            </div>
          </div>
          <figcaption className="ds-media-caption">The interview guide’s first question, and two of the sessions.</figcaption>
        </figure>
      </div>
    ),
  },
  {
    id: "survey",
    label: "Survey",
    content: (
      <div>
        <div className="grid gap-x-14 gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <h3 className="display-title" style={{ fontSize: "1.7rem", lineHeight: 1.2 }}>
            The survey told me how widespread it was
          </h3>
          <div>
            <p className="body-text">
              Of 38 designers, 76% used three or more tools on a project, 74% somewhat trusted AI prototypes but said
              they needed significant review, and 45% named built-in Living Design components as the one capability they
              wanted most.
            </p>
            <p className="body-text mt-4">
              Partway through I replaced three questions about prototyping with ones about the wider design process. I
              treat those answers separately, and I leave them out of what I report.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <SurveyCharts />
        </div>
      </div>
    ),
  },
  {
    id: "together",
    label: "Together",
    content: (
      <div>
        <div className="grid gap-x-14 gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <h3 className="display-title" style={{ fontSize: "1.7rem", lineHeight: 1.2 }}>
            The survey said what. The interviews said why.
          </h3>
          <p className="body-text">
            Either alone would have been easy to dismiss. Side by side, each number had a reason behind it.
          </p>
        </div>
        <ul className="mt-6 flex flex-col">
          {NUMBERS_AND_REASONS.map((row, i) => (
            <li
              key={row.figure}
              className={`grid items-start gap-6 py-6 ${i > 0 ? "ds-rule" : ""}`}
              style={{ gridTemplateColumns: "8rem minmax(0, 1fr) minmax(0, 1.2fr)" }}
            >
              <p className="display-title" style={{ fontSize: "2.2rem", lineHeight: 1, color: "var(--ds-accent)" }}>
                {row.figure}
              </p>
              <p className="display-title" style={{ fontSize: "1.15rem", lineHeight: 1.3 }}>
                {row.claim}
              </p>
              <p className="text-[0.98rem] leading-7" style={{ color: "var(--ink-soft)" }}>
                {row.reason}
              </p>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

/** Stills from a screen recording of the concept, with the demo data as it was recorded (it is fictional). */
const PROTOTYPE_SLIDES: ArtboardSlide[] = [
  {
    title: "Describe it, then check the brief",
    route: "Wibey Design",
    src: "/work/design-research/prototype-poster-1.jpg",
    mp4: "/work/design-research/prototype-clip-1.mp4",
    width: 2664,
    height: 1809,
    alt: "The Wibey Design launchpad with a prompt typed in for a People Manager workspace, followed by a prototype brief listing the requirement, the audience, the goals and the proposed screens.",
    caption:
      "A designer describes a People Manager workspace for store leadership. Before anything is built, it becomes a brief to confirm.",
  },
  {
    title: "Watch it build",
    route: "Wibey Design",
    src: "/work/design-research/prototype-poster-2.jpg",
    mp4: "/work/design-research/prototype-clip-2.mp4",
    width: 2664,
    height: 1809,
    alt: "The prototype being built in stages, with a progress note for each step and a list of the two screens, My Profile and People Overview.",
    caption: "The screens are built in stages, with a progress note for each one: layout, then sections, then the next screen.",
  },
  {
    title: "Tweak any part",
    route: "Wibey Design",
    src: "/work/design-research/prototype-poster-3.jpg",
    mp4: "/work/design-research/prototype-clip-3.mp4",
    width: 2664,
    height: 1809,
    alt: "A finished People Overview screen in Tweak mode with a chart selected, and a panel showing its properties and mapped component, beside suggested prompts such as Improve Living Design alignment and Prepare for review and handoff.",
    caption:
      "In Tweak, selecting a part shows its properties and its mapped component, beside suggested prompts to improve alignment and prepare for handoff.",
  },
  {
    title: "Check it against Living Design",
    route: "Wibey Design",
    src: "/work/design-research/prototype-poster-4.jpg",
    mp4: "/work/design-research/prototype-clip-4.mp4",
    width: 2664,
    height: 1809,
    alt: "The Living Design panel for a selected chart, showing its status, a compliance summary and a list of components with options to map to or replace with a Living Design component.",
    caption:
      "The Living Design tab shows each component's status and a compliance summary, with options to map or replace a component.",
  },
];

const CHAPTERS = [
  { id: "problem", label: "Why it mattered" },
  { id: "role", label: "What I did" },
  { id: "methodology", label: "How I ran it" },
  { id: "evidence", label: "The evidence" },
  { id: "presenting", label: "Presenting it" },
  { id: "prototype", label: "The prototype" },
  { id: "limits", label: "Limits" },
  { id: "outcome", label: "What changed" },
];

export default function DesignResearchPage() {
  const onward = getProject("api-lifecycle");

  return (
    <CaseStudyShell
      slug="design-research"
      chapters={CHAPTERS}
      evidence={[
        {
          label: "Why it mattered",
          lead: (
            <>
              Leaders <span className="ds-accent-text">judged</span> designers by how developers use AI.
            </>
          ),
          detail:
            "AI was only just becoming part of designers’ work. Leaders needed to see how, and where it let them down, before deciding what to build.",
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
        standfirst:
          "I led research with 54 participants, 16 interviewed and 38 surveyed, across India and the US, on how designers at Walmart use AI to prototype, and where it lets them down. It showed leaders that designers are not developers using AI, and led to a decision to build skills and agents for them.",
        headline: (
          <>
            Design research: how designers really use <span style={{ color: "var(--ds-mint)" }}>AI</span> to prototype.
          </>
        ),
        meta: [
          { label: "Role", value: "Senior UX Designer, research lead" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2026" },
          { label: "Discipline", value: "UX research · AI tooling" },
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
      <div className="mt-14 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="Where this started"
            mark="connection"
            note="AI was only just becoming part of designers’ work. The question was where it helped, and where it broke."
          >
            Designers do not use AI the way developers do, and the tools were not built around them.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="problem" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The problem"
            fullWidth
            heading="Nobody had looked closely at how designers use AI"
            body={[
              "Designers had begun using AI tools to ideate, build first drafts and prepare work for engineering. Leaders had a view of AI adoption, but it was shaped by how developers use it.",
              "I ran the study early in 2026, when AI was only just becoming part of the workflow, so what follows is a snapshot of that moment. The tools and habits have moved quickly since.",
              "Before deciding what to build, we needed to see the designer’s workflow as it is: which tools, in what order, and where trust breaks.",
            ]}
          />
          <CaseStudyFigure>
            <BeforeAfterModel
              before={{
                heading: "How designers were seen",
                body: "Through the same lens as a developer using AI, so tools and priorities were set as if the workflow were the same.",
              }}
              after={{
                heading: "What the research was for",
                body: "A clear picture of how designers use AI, where it fails them, and what would earn their trust.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="role">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="What I did"
            fullWidth
            heading="I led the study, from the first message to the leadership readout"
            body={[
              "I invited every interviewee myself, by direct message. I designed and built the survey, held the interviews with a staff designer’s help, made sense of what came back, and presented it to design, product and engineering leadership.",
            ]}
          />
          <p className="body-text mt-6">
            In all, 54 took part: 16 were interviewed and 38 answered the survey. Some people did both. The two asked
            different questions, for different purposes.
          </p>
        </CaseStudySection>

        <CaseStudySection id="methodology">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="How I ran it"
            fullWidth
            heading="Methods I built to suit the study"
            body={[
              "I built the parts of this study myself: the survey, the synthesis skill and the readout. Interviews gave depth and a short survey gave scale. Here is each one on its own, and then how I put them together.",
            ]}
          />
          <CaseStudyFigure>
            <MethodTabs />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="evidence">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The evidence"
            fullWidth
            heading="Interviews for the why, a survey for the scale"
            body={[
              "The two sources asked different questions for different purposes, so I read each on its own, and then side by side.",
            ]}
          />
          <CaseStudyFigure>
            <EvidenceTabs label="The evidence, one source at a time" panels={EVIDENCE_PANELS} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="presenting">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Presenting it"
            fullWidth
            heading="Designers are ready to adopt AI. The gap is control over what it produces."
            body={[
              "I presented the readout to design, product and engineering leadership. The message was that designers want AI to help them move faster, but only if the output stays trustworthy, controllable and aligned to Walmart standards. The opportunity was prototypes built from the right components and checked before they reach engineers, not just faster ones.",
            ]}
          />
          <CaseStudyFigure label="Two connected needs, as stages in one journey">
            <div className="grid items-stretch gap-3" style={{ gridTemplateColumns: "1fr 5rem 1fr" }}>
              <GlassPanel variant="base" className="rounded-2xl p-7">
                <p className="ds-eyebrow">Stage one · support now</p>
                <p className="display-title mt-3" style={{ fontSize: "1.35rem", lineHeight: 1.25 }}>
                  From a requirement to a first prototype
                </p>
                <p className="mt-3 text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
                  Early directions designers can discuss with product managers and stakeholders.
                </p>
              </GlassPanel>
              <div aria-hidden="true" className="flex flex-col items-center justify-center gap-1">
                <span className="ds-eyebrow">then</span>
                <span className="ds-arrow">→</span>
              </div>
              <GlassPanel variant="base" className="rounded-2xl p-7">
                <p className="ds-eyebrow">Stage two · the destination</p>
                <p className="display-title mt-3" style={{ fontSize: "1.35rem", lineHeight: 1.25 }}>
                  From a final design to a checked handoff
                </p>
                <p className="mt-3 text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
                  A Living Design-checked, review-ready prototype that keeps design intent. The evidence was strongest here.
                </p>
              </GlassPanel>
            </div>
          </CaseStudyFigure>
          <CaseStudyFigure label="What I asked leadership for">
            <ul className="grid gap-3 md:grid-cols-3">
              {[
                { n: "01", title: "Direction", text: "Agree the direction: support ideation now, and make a checked handoff to engineering the destination." },
                { n: "02", title: "Confidence", text: "Confirm the evidence is enough to start scoping the first version." },
                { n: "03", title: "Partnership", text: "Name Living Design and engineering partners to validate early." },
              ].map((ask) => (
                <GlassPanel key={ask.n} as="li" variant="soft" className="rounded-2xl p-6">
                  <p className="font-mono text-[0.78rem]" style={{ color: "var(--ds-accent)" }}>
                    {ask.n}
                  </p>
                  <p className="display-title mt-3" style={{ fontSize: "1.2rem" }}>
                    {ask.title}
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-6" style={{ color: "var(--ink-soft)" }}>
                    {ask.text}
                  </p>
                </GlassPanel>
              ))}
            </ul>
          </CaseStudyFigure>
        </CaseStudySection>

      </CaseStudyColumn>

      <CaseStudyColumn>
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
            <ul className="grid gap-3 md:grid-cols-3">
              {[
                {
                  title: "A different lens",
                  text: "Leaders understood how designers use AI, and stopped treating them through the same lens as a developer using it.",
                },
                {
                  title: "A decision to invest",
                  text: "Leadership chose to invest in AI skills and agents, which are packaged instructions and assistants that complete a task, to help designers build prototypes.",
                },
                {
                  title: "A kit to build with",
                  text: "The Living Design team created a kit that can be used to build on any platform.",
                },
              ].map((item) => (
                <GlassPanel key={item.title} as="li" variant="base" className="rounded-2xl p-6">
                  <p className="display-title" style={{ fontSize: "1.2rem", color: "var(--ds-accent)" }}>
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-6" style={{ color: "var(--ink-soft)" }}>
                    {item.text}
                  </p>
                </GlassPanel>
              ))}
            </ul>
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div id="limits" className="mt-16 scroll-mt-28 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="Limits"
            mark="rhythm"
            note="I recruited by direct message, so people who agreed may differ from those who didn’t, and some took part in both the interviews and the survey. The skill sorted quotes into themes using AI, so the counts reflect its assignments."
          >
            This is a snapshot of early 2026, from Walmart designers only, so it may not hold elsewhere or now.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
