import type { Metadata } from "next";
import { AlternatingTextMedia } from "@/components/design-system/AlternatingTextMedia";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { ClipFigure } from "@/components/design-system/ClipFigure";
import { DotFlow } from "@/components/design-system/DotFlow";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";
import { ReframeBlock } from "@/components/design-system/ReframeBlock";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";

/**
 * FixIt — Store Support Platform, on the locked case-study template.
 *
 * Prose from `projects/fixit/web/fixit-web.md` (the path `projects.ts`
 * points at). Three things the draft predates, all read off the shipped
 * screens rather than invented: the taxonomy has five top-level groups,
 * asset-tag scanning is a first-class entry point, and the work-order
 * surface carries notes, photos, escalation and rating.
 *
 * The spine is the product's own argument, in four beats: one app for
 * anything that breaks; on a phone rather than the manager's desktop;
 * fix it yourself before raising a ticket; and a tracked loop after. The
 * four screen recordings carry those beats as S12 feature rows.
 *
 * The draft is explicit that ticket-volume and resolution-time claims
 * are unavailable, so the metric band stays captioned as scale, not as
 * proof the redesign resolved anything.
 */

export const metadata: Metadata = {
  title: "FixIt — the app store associates use when something breaks",
  description:
    "Redesigning frontline support so store associates can fix an issue themselves instead of raising a ticket — facilities and technology, on a phone, across a ~580K-device footprint.",
};

const OLD_PATH = ["Find a manager", "Fill a form", "Wait"];
const NEW_PATH = ["What happened?", "Try the fix", "Back to work"];

const CHAPTERS = [
  { id: "mobile", label: "On the floor" },
  { id: "report", label: "Ways in" },
  { id: "fixit", label: "FixIt" },
  { id: "loop", label: "The loop" },
  { id: "system", label: "The migration" },
  { id: "outcomes", label: "What changed" },
];

export default function StoreSupportPage() {
  const onward = getProject("supply-chain-operations");

  return (
    <CaseStudyShell
      slug="store-support"
      evidenceCaveat="Scale of the experience during the documented period — not a resolution claim."
      evidence={[
        {
          label: "Problem",
          lead: (
            <>
              Reporting a fault meant finding{" "}
              <span className="ds-accent-deep-text">a manager and a desktop</span>.
            </>
          ),
          detail:
            "An associate who found a cooler failing could not report it from the floor. There was little troubleshooting guidance, search returned an unstructured list with no next step, and the form came before anyone had tried the obvious fix.",
        },
        {
          label: "Task",
          lead: (
            <>
              Redesign frontline support across <span className="ds-accent-deep-text">mobile and web</span>.
            </>
          ),
          detail:
            "One experience covering both the building and the technology inside it, for associates supporting ~580K devices and for the central support teams receiving their tickets.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I put guided resolution <span className="ds-accent-deep-text">before the ticket form</span>.
            </>
          ),
          detail:
            "I rebuilt the issue taxonomy from card sorts with associates, made resolution step one of two in the submit flow, and gave work orders a loop they could track, annotate and escalate.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        headline: (
          <>
            FixIt: the app store associates use <span style={{ color: "var(--ds-mint)" }}>when something breaks</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "UX Designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2020–2021" },
          { label: "Discipline", value: "Frontline operations" },
        ],
        // height was 1389 here against a 2188px file — stale since the
        // composite was rebuilt taller, so the reserved box was the wrong
        // shape until the image loaded.
        src: "/work/store-support/hero-composite.png",
        width: 2400,
        height: 2188,
        standfirst:
          "A cooler, a forklift, a handheld, the store network — associates report and fix it here, mid-shift and on the floor. Built for them, for new starters still learning the store, and for the central support desks receiving what they send.",
        alt: "Three FixIt screens: the home screen with refrigeration alarms, the work-order calendar and submitted issues; the submit-an-issue screen with its five categories; and the refrigeration alarms list.",
        figureNote: "Reconstructed · placeholder data",
      }}
      next={
        onward
          ? { href: `/work/${onward.slug}`, number: onward.number, label: onward.label, title: onward.title }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      {/* Beat two: the surface change that makes the rest possible. */}
      <div id="mobile" className="mt-14 md:mt-20">
        <ReframeBlock
          bleed
          eyebrow="The reframe"
          heading="Support used to start at the manager’s desk"
          body="Raising an issue meant finding a manager and finding a computer — so the person who discovered the problem was rarely the person who reported it. Detail was lost in the retelling, and the report waited for someone to be free. Putting support on a phone puts it in the hands of whoever is standing in front of the broken thing, at the moment they find it."
        />
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="report" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            eyebrow="Ways in"
            heading="We reorganised support around how people describe problems"
            body={[
              "The old structure reflected the support organisation more than the mental model of someone standing in a store trying to fix something, so anyone who had not already learned it had to guess where their issue belonged.",
              "I ran card-sorting sessions with associates using common issue types, asking them to group and label the problems and explain their reasoning. What came back grouped the floor by where a problem lives — a department, a device, broken equipment, the network, a person or a process — rather than by which team would receive the ticket.",
              "Equipment also carries an asset tag, so the scanner became a way in of its own: point the phone at the cooler and the request opens against the right asset, with its type, location and history already attached. It removes the least useful part of reporting a fault — describing the object you are already standing in front of.",
              "Search became a third way in rather than an afterthought. Results are separated by type, how-to guidance can appear directly in the flow, and the query carries forward into a request instead of making someone start again.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="21rem"
              src="/work/store-support/submit-issue.png"
              width={824}
              height={1462}
              alt="The submit-an-issue screen: a search field reading “Search by name or scan an asset tag”, five category cards — store department or area, digital tools and store devices, maintenance and repair, wireless and store network, personnel and training — and a Scan asset tag button."
              caption="Five starting points in the associate’s own language, each with an example underneath, and the scanner always within reach. Reconstructed with placeholder data."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="fixit">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The idea the product is named after"
            heading="A ticket is the fallback, not the first move"
            body={[
              "The biggest shift was not visual. It was what happened between identifying a problem and submitting a ticket.",
              "The submit flow runs in two steps, and the numbering is the argument: step one is the resolution, step two is the ticket. The associate gets the likely fix and a plain question — did that resolve it? — before any form appears. If it worked, they go back to the floor and no ticket exists at all. If it did not, step two collects the photos and contacts, and the ticket carries the failed attempt with it.",
              "The intent was not to add steps. It was to move friction to the right place: a known fix tried early, and a better-quality escalation when a person is genuinely needed.",
            ]}
          />
          <CaseStudyFigure rule label="The shortest path, before and after">
            {/* Two flows in one figure need to say which is which — DotFlow
                takes only stages, so the labels sit here rather than in the
                shared component. */}
            <div className="flex flex-col gap-9">
              <div>
                <p className="ds-eyebrow mb-3">Before</p>
                <DotFlow stages={OLD_PATH} />
              </div>
              <div>
                <p className="ds-eyebrow mb-3" style={{ color: "var(--accent-deep)" }}>
                  After
                </p>
                <DotFlow stages={NEW_PATH} />
              </div>
            </div>
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      {/* S12 · the two halves of self-service. Portrait shape so each phone
          clip takes only the width it needs and the text keeps the
          flexible column. */}
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8 mt-14 md:mt-16">
        <AlternatingTextMedia
          mediaShape="portrait"
          align="start"
          rows={[
            {
              eyebrow: "Step 1 of 2",
              title: "Try the fix before you file anything",
              body:
                "Choose what happened and the product answers with the resolution rather than a form — short, numbered, and ending in a question it is willing to lose: did that resolve your issue? Answering yes closes the journey there.",
              media: (
                <ClipFigure
                  variant="beside"
                  mp4="/work/store-support/scan-asset-tag.mp4"
                  poster="/work/store-support/scan-asset-tag-poster.jpg"
                  width={704}
                  height={1432}
                  alt="The submit journey: choosing a category, then a Resolution step labelled Step 1 of 2 with numbered instructions and the question “Did the above resolve your issue?”, and only then Step 2 of 2 collecting photos and contact details."
                  caption="Step 1 of 2 is the fix. The ticket is step 2, and only if the fix did not hold."
                />
              ),
            },
            {
              eyebrow: "Show, don’t tell",
              title: "When the fix is physical, the instructions are photographs",
              body:
                "A software fix gets numbered steps beside a drawing of the screen to look for. Where the repair is physical, the guidance turns photographic instead — the refrigeration case, the shelf, the display reading its own alarm state — so the associate matches a picture to what is in front of them rather than translating a sentence into a piece of equipment.",
              media: (
                <ClipFigure
                  variant="beside"
                  mp4="/work/store-support/refrigeration-alarms.mp4"
                  poster="/work/store-support/refrigeration-alarms-poster.jpg"
                  width={716}
                  height={1432}
                  alt="A refrigeration alarm opening into photographic troubleshooting steps showing the case and its temperature display, then into a dispatched work order showing the assigned technician."
                  caption="An alarm, the steps to clear it, and — where it cannot be cleared — an automated work order with the technician already dispatched."
                />
              ),
            },
          ]}
        />
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="loop" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="flow"
            eyebrow="The loop"
            heading="And when it does need a person, the associate keeps hold of it"
            body={[
              "Self-service only earns trust if the fallback is good. Everything after the ticket is built so the person who raised it can still see it, add to it, and push on it.",
              "That extends to what travels with the report. The map went to aisle-level selection, so a location reads as somewhere a technician can walk to rather than a store number.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8 mt-10 md:mt-12">
        <AlternatingTextMedia
          mediaShape="portrait"
          align="start"
          rows={[
            {
              eyebrow: "Track and escalate",
              title: "A work order you can follow, annotate and push on",
              body:
                "A raised issue becomes a work order carrying its trade, equipment, problem code and status — and for an alarm it can be raised automatically, with priority and affected units already attached. The associate can see it scheduled and who is coming, add photographs and notes as things change, and when a repair does not hold there is a named way back: recall the technician, escalate through the help desk, or call facilities — rather than a second ticket that loses the first one’s history.",
              media: (
                <ClipFigure
                  variant="beside"
                  mp4="/work/store-support/work-orders.mp4"
                  poster="/work/store-support/work-orders-poster.jpg"
                  width={704}
                  height={1432}
                  alt="A work order opened from the list — trade, equipment, problem code, and status — then notes added with attached photographs, and an escalate screen offering to recall the technician, escalate through the help desk, or call facilities."
                  caption="Tracking a work order, adding photographs to it, and the routes out when a repair does not hold."
                />
              ),
            },
            {
              eyebrow: "Rate and close",
              title: "Feedback that asks more than how many stars",
              body:
                "Scheduled work is laid out by day, so an associate can see what is coming to the store rather than only what they personally raised. After resolution, feedback moved past a star rating to ask whether the work was actually complete and to specification, with room for comments — so the support organisation learns what the fix was worth, not only that it happened.",
              media: (
                <ClipFigure
                  variant="beside"
                  mp4="/work/store-support/rate-work-orders.mp4"
                  poster="/work/store-support/rate-work-orders-poster.jpg"
                  width={704}
                  height={1432}
                  alt="The work-order calendar showing scheduled jobs by day, then the rating screen — stars, a yes/no question on whether the work was complete to specification, and a comments field."
                  caption="Scheduled work by day, and feedback that asks more than a star rating."
                />
              ),
            },
          ]}
        />
      </div>

      <div id="system" className="mt-16 md:mt-20">
        <ReframeBlock
          bleed
          eyebrow="The migration"
          heading="The redesign was also a migration"
          body="The product ran on a third-party UI library while the organisation was introducing its own enterprise design system. Rather than treat the redesign and the migration as two projects, I rebuilt the areas I touched on the new system — so the product belonged to the ecosystem associates already used, on a more accessible component foundation, instead of paying down more design debt later."
        />
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="outcomes" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="flow"
            eyebrow="What changed"
            heading="From “which form?” to “what happened?”"
            body={[
              "During the documented period, the product reached ~5.9K daily users across a device footprint of ~580K, with 7K+ support searches each week.",
              "Those figures show the scale of the experience and the growing role of search and self-service. They are not presented as proof that the redesign resolved issues — ticket volume, resolution time, and store downtime would be the right measures, and I would rather leave them out than claim them without approved post-launch data.",
            ]}
          />
          <CaseStudyFigure rule label="Scale of the experience — not a resolution claim">
            <ProofStrip
              items={[
                { value: "~5.9K", label: "daily users", glyph: "field" },
                { value: "~580K", label: "device footprint", glyph: "bars" },
                { value: "7K+", label: "weekly support searches", glyph: "ring" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What I believe now" mark="exchange">
          Sometimes the most useful thing a product can do is help someone avoid entering the support system at
          all.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
