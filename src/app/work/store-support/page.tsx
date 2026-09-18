import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { AlternatingTextMedia } from "@/components/design-system/AlternatingTextMedia";
import { ClipFigure } from "@/components/design-system/ClipFigure";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
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
 * Store associate app — Walmart Global Tech, on the locked case-study template.
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
  title: "Store associate app — fix everything that breaks",
  description:
    "Redesigning frontline support so store associates can fix an issue themselves instead of raising a ticket — facilities and technology, on a phone, across a ~580K-device footprint.",  robots: caseStudyRobots,
};


const CHAPTERS = [
  { id: "mobile", label: "On the floor" },
  { id: "report", label: "What the data said" },
  { id: "fixit", label: "Fix it first" },
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
              Redesign frontline support <span className="ds-accent-deep-text">for a phone on the floor</span>.
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
            Store associate app: fix{" "}
            <span style={{ color: "var(--ds-mint)" }}>everything that breaks</span>.
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
          "A cooler, a forklift, a handheld, the network — reported and fixed mid-shift, on the floor. Built for the people who find the fault, for new starters still learning their way around, and for the support desks receiving what they send.",
        alt: "Three screens from the app: the home screen with refrigeration alarms, the work-order calendar and submitted issues; the submit-an-issue screen with its five categories; and the refrigeration alarms list.",
        figureNote: "The interface is as it shipped. I have replaced the data and some product names, because the work is internal.",
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
          mark="distribute"
          eyebrow="The reframe"
          heading="Support used to start at the manager’s desk"
          body="Raising an issue meant finding a manager and finding a computer — so the person who discovered the problem was rarely the person who reported it. Detail was lost in the retelling, and the report waited for someone to be free. Putting support on a phone puts it in the hands of whoever is standing in front of the broken thing, at the moment they find it."
        />
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="report" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            eyebrow="What the data said"
            heading="Two in five tickets did not need a technician"
            body={[
              "I sat with store associates and managers and went through the ticket record with them. Around 40% of what was raised could have been resolved by the person who raised it* — a setting, a reset, a step someone already knew if they had been told it.",
              "Every one of those became a technician visit the company paid for. And because reporting ran on a desktop, away from the fault, what was documented was thin: a report written from memory, minutes or hours after the thing was seen.",
              "So the product answers with a fix before it answers with a form. A Fix it button on the alarm opens the steps to clear it; only if those do not hold does a ticket exist at all.",
            ]}
            footnote="* Reviewed with store and support teams during discovery. It describes the tickets that existed before the redesign, not an effect of it."
          />
        </CaseStudySection>

        <CaseStudySection id="fixit">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The submit flow"
            heading="A ticket is the fallback, not the first move"
            body={[
              "The change that mattered sits between identifying a problem and submitting a ticket.",
              "The flow runs in two steps, and the numbering is the argument: step one is the resolution, step two is the ticket.",
              "An associate gets the likely fix and a plain question — did that resolve your issue? — before any form appears. If it worked, they go back to the floor and no ticket exists at all. If it did not, step two collects the photos and contacts, and the ticket carries the failed attempt with it.",
              "That moves friction to the right place: a known fix tried early, and a better-quality escalation when a person is genuinely needed.",
            ]}
          />
          <CaseStudyFigure rule label="The shortest path, before and after">
            <BeforeAfterModel
              before={{
                heading: "Every issue became a ticket",
                body: "Find a manager, find a desktop, describe the fault from memory, and wait for someone to be sent. Nothing else was on offer, whether or not the fix was something the associate could have done.",
                stages: ["Issue", "Raise a ticket", "Wait"],
              }}
              after={{
                heading: "The ticket is what is left over",
                body: "The steps to clear it come first, and answering yes ends the journey. A ticket is raised only where they did not hold — and it carries the failed attempt with it.",
                stages: ["Issue", "Fix it", "Back to work"],
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      {/* S12 · the two halves of self-service. Portrait shape so each phone
          clip takes only the width it needs and the text keeps the
          flexible column. */}
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8 mt-14 md:mt-16">
        <AlternatingTextMedia
          numbered
          mediaShape="portrait"
          align="start"
          rows={[
            {
              eyebrow: "Fix it",
              title: "The alarm carries its own way out",
              body:
                "An associate opens the refrigeration alarm and the next control is Fix it, not Report. It answers with the steps to clear that alarm — photographic where the repair is physical, so the associate matches a picture to the case in front of them rather than translating a sentence into a piece of equipment. Where the steps cannot clear it, the work order is raised automatically with the technician already dispatched.",
              media: (
                <ClipFigure
                  variant="beside"
                  mp4="/work/store-support/refrigeration-alarms.mp4"
                  poster="/work/store-support/refrigeration-alarms-poster.jpg"
                  width={716}
                  height={1432}
                  alt="A refrigeration alarm opening into photographic troubleshooting steps showing the case and its temperature display, then into a dispatched work order showing the assigned technician."
                  caption="The alarm, the Fix it steps, and — where they cannot clear it — a work order raised with the technician already dispatched."
                />
              ),
            },
            {
              eyebrow: "Step 2 of 2",
              title: "The ticket only exists if the fix did not hold",
              body:
                "Where an associate starts from scratch rather than from an alarm, the same order applies: say what happened, get the resolution, and answer one question — did that resolve your issue? Yes ends it. No opens step two, which collects the photographs and contacts, and carries the failed attempt with it so the technician arrives knowing what has already been tried. The five categories it starts from came out of card sorts I ran with associates afterwards, grouping problems by where they occur rather than by which team receives them.",
              media: (
                <ClipFigure
                  variant="beside"
                  mp4="/work/store-support/submit-resolution.mp4"
                  poster="/work/store-support/submit-resolution-poster.jpg"
                  width={704}
                  height={1432}
                  alt="The submit flow: a problem-details form giving way to a Resolution step labelled 1 of 2 with numbered instructions and the question “Did the above resolve your issue?”, then Step 2 of 2 collecting photographs and contact details."
                  caption="Step 1 is the fix. Step 2 is the ticket, and only if the fix did not hold."
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
          numbered
          startIndex={2}
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
          mark="rebase"
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
              "The scale at the top of this page is what the experience reached during the documented period, and the growing role of search and self-service in it. It is not what the redesign achieved.",
              "Ticket volume, resolution time and store downtime would be the right measures, and I would rather leave them out than claim them without approved post-launch data.",
            ]}
          />
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
