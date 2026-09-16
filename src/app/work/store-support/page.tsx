import type { Metadata } from "next";
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
  CaseStudyOverview,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";

/**
 * Store Support Platform — on the locked case-study template.
 *
 * Prose from `projects/fixit/web/fixit-web.md` (the path `projects.ts`
 * actually points at; an earlier comment here cited the wrong draft).
 *
 * Two things the draft predates and the screens confirm: the taxonomy
 * shipped with five top-level groups, not four, and asset-tag scanning
 * and the work-order surface are part of the journey. Both are described
 * from the product itself rather than invented.
 *
 * The draft is explicit that ticket-volume and resolution-time claims are
 * unavailable, so the metric band is captioned to keep three large
 * figures reading as scale rather than as proof the redesign resolved
 * issues.
 */

export const metadata: Metadata = {
  title: "Store Support Platform — Diagnose and resolve before raising a ticket",
  description:
    "Redesigning frontline support around resolution rather than reporting — facilities and technology, for store associates across a ~580K-device footprint.",
};

const OLD_PATH = ["Choose category", "Fill form", "Submit"];
const NEW_PATH = ["What happened?", "Guided checks", "Resolved"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "tickets", label: "The old path" },
  { id: "classification", label: "Ways in" },
  { id: "alarms", label: "Detection" },
  { id: "resolution", label: "Resolution first" },
  { id: "search", label: "Search" },
  { id: "handoff", label: "The handoff" },
  { id: "system", label: "The migration" },
  { id: "outcomes", label: "What changed" },
];

export default function StoreSupportPage() {
  const onward = getProject("supply-chain-operations");

  return (
    <CaseStudyShell
      slug="store-support"
      chapters={CHAPTERS}
      hero={{
        eyebrow: "Store Support Platform · Walmart Global Tech",
        headline: "Redesigning IT support so store associates can diagnose and resolve issues before raising a ticket.",
        meta: [
          { label: "Role", value: "UX Designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2020–2021" },
          { label: "Discipline", value: "Frontline operations · Mobile product" },
        ],
      }}
      next={
        onward
          ? { href: `/work/${onward.slug}`, number: onward.number, label: onward.label, title: onward.title }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyOverview
            statement={
              <>
                Resolution <span className="text-[var(--accent-deep)]">before escalation</span>.
              </>
            }
            note="Facilities and technology support, on the store floor."
            body={[
              "Store associates depend on the floor working — coolers and boilers, forklifts and printers, handhelds and self-checkout, the store network, and the applications they sign into every shift.",
              "A failure is almost never the job someone came to do. It is an interruption to it, which means the support experience has to be fast, clear, and forgiving of a person working under time pressure.",
              "When something stopped working, the existing experience was largely built around reporting the problem. I worked on redesigning that journey around a different question: can we help someone understand and resolve the issue before they need to raise a ticket?",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="18rem"
              src="/work/store-support/home.png"
              width={824}
              height={2522}
              alt="The redesigned home screen: refrigeration alarms, a work-order calendar, work orders to rate, and separate queues for work orders and technology tickets."
              caption="One home for both halves of the job — equipment work orders and technology tickets, alongside the alarms that arrive on their own. Reconstructed with placeholder data."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="tickets">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Straight to a form"
            heading="The product was good at collecting tickets, less good at preventing them"
            body={[
              "The existing experience gave associates a way to report technical problems, but several things made that harder than it needed to be.",
              "Issues sat in a flat list of broad categories that did not always match how associates described a problem, so anyone who had not already learned the system’s structure had to guess where their issue belonged. Search returned an unstructured list with no useful next step, troubleshooting guidance was limited, and unresolved tickets often still required support teams to gather context later.",
              "The shortest path through the product was straight to a form.",
            ]}
          />
          <CaseStudyFigure rule label="The old shortest path">
            <DotFlow stages={OLD_PATH} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="classification">
          <CaseStudyChapter
            eyebrow="Ways in"
            heading="We reorganised support around how people described problems"
            body={[
              "One of the first challenges was classification. The system reflected the support organisation more than the mental model of someone standing in a store trying to fix something.",
              "I ran card-sorting sessions with associates using common issue types, asking them to group and label the problems and explain their reasoning. The structure that came back grouped the floor by where a problem lives — a department, a device, broken equipment, the network, a person or a process — rather than by which team would receive the ticket.",
              "The goal was simple: let people begin with what they recognised rather than asking them to understand the support structure first.",
            ]}
          />
          {/* Five parallel starting points, so no connector implying an
              order — the screen itself shows them better than a flow would. */}
          <CaseStudyChapter
            layout="flow"
            eyebrow="Scan the thing itself"
            heading="The fastest way to describe a problem is to point at it"
            body={[
              "Equipment on the floor carries an asset tag. Rather than make someone identify a cooler or a forklift from a list, the scanner reads the tag and the request opens against the right asset — its type, its location, its history.",
              "It removes the least useful part of reporting a fault: describing the object you are already standing in front of.",
            ]}
          />
          {/* One screen covers both beats above — the five cards, and the
              scanner in the search field and as the standing action. */}
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

        <CaseStudySection id="alarms">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Detection"
            heading="Not every problem waits to be reported"
            body={[
              "Refrigeration is monitored continuously, and a case drifting out of range reaches the floor as an alarm rather than waiting for someone to notice the product is at risk.",
              "Alerts are grouped by what they actually mean — emergency, multi-case, high temperature — and each one carries the sensors behind it, so an associate can tell a single failing case from a rack-wide problem before deciding what to do.",
              "Because the stakes here are food safety rather than convenience, the alert leads with the action: protect the product, process a loss where one has occurred, and either resolve the alarm or raise the work order.",
            ]}
          />
          <CaseStudyFigure>
            <ClipFigure
              mp4="/work/store-support/refrigeration-alarms.mp4"
              poster="/work/store-support/refrigeration-alarms-poster.jpg"
              width={720}
              height={1432}
              alt="A refrigeration alarm opening into photographic troubleshooting steps, then into a dispatched work order showing the assigned technician."
              caption="An alarm, the steps to clear it, and — where it cannot be cleared — an automated work order with the technician already dispatched. Reconstructed with placeholder data."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="resolution">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The shift"
            heading="Then we put resolution before escalation"
            body={[
              "The biggest shift was not visual. It was what happened between identifying a problem and submitting a ticket.",
              "The submit flow runs in two steps, and the numbering is the argument: step one is the resolution, step two is the ticket. The associate gets the likely fix and a plain question — did that resolve it? — before any form appears. If it worked, they go back to the floor and no ticket exists. If it did not, step two collects the photos and contacts, and the ticket carries the attempt with it.",
              "How that guidance is presented depends on what is actually broken. Where the fix is a software or process change, it stays written — short numbered steps. Where the fix is physical, it becomes photographic: the refrigeration flow shows the case, the shelf, and the display reading its own alarm state, so the associate matches a picture to what is in front of them rather than translating a sentence into a piece of equipment.",
              "The intent was not to add steps. It was to move friction to the right place — a known fix tried early, and a better-quality escalation when a person is genuinely needed.",
            ]}
          />
          <CaseStudyFigure rule label="The new path">
            <DotFlow stages={NEW_PATH} />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <ClipFigure
              variant="beside"
              mp4="/work/store-support/scan-asset-tag.mp4"
              poster="/work/store-support/scan-asset-tag-poster.jpg"
              width={720}
              height={1432}
              alt="The submit journey: choosing a category, then a Resolution step labelled Step 1 of 2 with numbered instructions and the question “Did the above resolve your issue?”, and only then Step 2 of 2 collecting photos and contact details."
              caption="Step 1 of 2 is the fix. The ticket is step 2, and only if the fix did not hold. Reconstructed with placeholder data."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="search">
          <CaseStudyChapter
            eyebrow="Search"
            heading="Search became another way into the same support journey"
            body={[
              "Not everyone thinks in categories. Experienced associates often already knew the device, application, or issue they were looking for.",
              "Search therefore became a second entry point rather than an afterthought. Results were separated by type so it was clear what kind of help was on offer, how-to guidance could appear directly in the flow, and the query carried forward into a support request instead of making someone start again if self-service did not resolve it.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="handoff">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The handoff"
            heading="What travels with the ticket matters as much as the ticket"
            body={[
              "Several decisions were aimed at the quality of information reaching the people who resolve the issue. The map was extended to aisle-level selection, so a location reads as somewhere a technician can walk to rather than a store number.",
              "A raised issue becomes a work order carrying its trade, equipment, problem code, and status — and, for an alarm, it can be raised automatically with the priority and affected units already attached. The associate can see it scheduled and who is coming, which is the question they actually have once a fault is out of their hands.",
              "The record stays open to the person who raised it. They can attach photographs and a note to a work order as things change, and when a repair does not hold there is a named way back — recall the technician, escalate through the help desk, or call facilities — rather than a second ticket that loses the first one’s history.",
              "The loop closes after resolution. Feedback moved past a star rating to ask whether the work was actually complete and to specification, with room for comments — so the support organisation learns what the fix was worth rather than only whether it happened.",
            ]}
          />
          {/* Two halves of the same loop — dispatch and then feedback — so
              they read as a pair rather than as two stacked clips leaving
              most of the column width empty. `beside` sizes each to ~23vw,
              which is what makes a two-up fit. */}
          <CaseStudyFigure>
            <div className="flex flex-wrap items-start justify-center gap-8 md:gap-12">
              <ClipFigure
                variant="beside"
                mp4="/work/store-support/work-orders.mp4"
                poster="/work/store-support/work-orders-poster.jpg"
                width={720}
                height={1432}
                alt="A work order opened from the list — trade, equipment, problem code, and status — then notes added with attached photographs, and an escalate screen offering to recall the technician, escalate through the help desk, or call facilities."
                caption="Tracking a work order, adding photographs to it, and the routes out when a repair does not hold."
              />
              <ClipFigure
                variant="beside"
                mp4="/work/store-support/rate-work-orders.mp4"
                poster="/work/store-support/rate-work-orders-poster.jpg"
                width={720}
                height={1432}
                alt="The work-order calendar showing scheduled jobs by day, then the rating screen — stars, a yes/no question on whether the work was complete to specification, and a comments field."
                caption="Scheduled work by day, and feedback that asks more than a star rating. Reconstructed with placeholder data."
              />
            </div>
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

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
