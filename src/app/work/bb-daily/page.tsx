import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { AlternatingTextMedia } from "@/components/design-system/AlternatingTextMedia";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { ClipFigure } from "@/components/design-system/ClipFigure";
import { DotCadence } from "@/components/design-system/DotCadence";
import { DotFlow } from "@/components/design-system/DotFlow";
import { HeroThumbnailRail } from "@/components/design-system/HeroThumbnailRail";
import { PullStatement } from "@/components/design-system/PullStatement";
import { SceneBanner } from "@/components/design-system/SceneBanner";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getAdjacentProjects, projects } from "@/content/projects";

/**
 * bb daily — the reference implementation of the case-study template.
 *
 * Prose is verbatim from `projects/bb-daily/web/bb-daily-web.md`, the approved
 * public draft. Nothing is invented, and where the draft calls for a visual
 * with no approved asset the visual is omitted rather than substituted.
 *
 * A static route, so it takes precedence over /work/[slug]; the other five
 * studies stay on CaseStudyView until each is migrated in turn.
 */

export const metadata: Metadata = {
  title: "bb daily — Both sides of a recurring delivery service",
  description:
    "bb daily was a subscription service for everyday essentials. I worked across both the customer experience and the Android operations product behind each delivery.",  robots: caseStudyRobots,
};

const FLOW = ["Customer subscription", "Procurement", "Inventory", "Shipment", "Delivery"];

const CHAPTERS = [
  { id: "product-model", label: "The product model" },
  { id: "customer-side", label: "The customer side" },
  { id: "reach", label: "Where it could reach" },
  { id: "operations", label: "The operations side" },
  { id: "operations-app", label: "The operations app" },
  { id: "delivery-work", label: "In the dark stores" },
  { id: "reflection", label: "What I believe now" },
];

export default function BbDailyPage() {
  // bb daily is last in the project order, so `next` is undefined. Wrap to the
  // first project rather than dead-ending the reader — handled here rather
  // than in `getAdjacentProjects`, which the five v1 case studies also use.
  const { next } = getAdjacentProjects("bb-daily");
  const onward = next ?? projects[0];

  return (
    <CaseStudyShell
      slug="bb-daily"
      evidenceCaveat="Scale from the documented product period — not outcomes caused by the design work."
      evidence={[
        {
          label: "Problem",
          lead: (
            <>
              Recurring groceries are <span className="ds-accent-deep-text">not a checkout problem</span>.
            </>
          ),
          detail:
            "The customer promise was simple: choose what you need and have it arrive. Behind it sat procurement, inventory, packing, shipment creation and an early-morning delivery window that all had to stay coordinated.",
        },
        {
          label: "Task",
          lead: (
            <>
              Design <span className="ds-accent-deep-text">both sides</span> of one service.
            </>
          ),
          detail:
            "The work covered both halves: the Android and iOS customer experience, and an Android operations product the teams used to coordinate the work behind each delivery.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I worked the customer app and <span className="ds-accent-deep-text">the operations app</span> together.
            </>
          ),
          detail:
            "I ran research and UX across both sides, so the promise made in the customer app matched what the operations app actually had to coordinate.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        artMode: "backdrop" as const,
        src: "/work/bbdaily/8f79fb_20203531c98e4bd986f2bbf39a470197~mv2.avif",
        alt: "bb daily customer app and operations app as two sides of one service",
        standfirst:
          "A bigbasket subscription for everyday essentials — milk, dairy, bakery, fruit and vegetables — arriving on a recurring schedule, and the operations app that made each delivery happen.",
        headline: (
          <>
            bb daily: <span style={{ color: "var(--ds-mint)" }}>both sides</span> of a recurring delivery service.
          </>
        ),
        meta: [
          { label: "Role", value: "Research & UX Design" },
          { label: "Client", value: "bigbasket" },
          { label: "Year", value: "2019–2020" },
          {
            label: "Discipline",
            value: "Consumer commerce · Operations UX",
          },
        ],
      }}
      next={{
        href: `/work/${onward.slug}`,
        number: onward.number,
        label: onward.label,
        title: onward.title,
      }}
    >
      <CaseStudyColumn>

        <CaseStudySection id="product-model">
          <CaseStudyChapter
            eyebrow="The product model"
            heading="Recurring grocery shopping is not a checkout problem"
            body={[
              "Most grocery experiences are designed around a single order. bb daily needed to support a relationship that continued across days and weeks.",
              "bigbasket and bb daily were not the same product for the same person. One is a grocery run. The other is a standing arrangement for a household that has already decided what it needs each week. We looked at three placements: a separate app, an integrated experience, or a subscription feature inside bigbasket.",
              "We built it separately, and the deciding argument was reversibility. A focused app could be folded back into bigbasket once we understood how subscription behaviour actually worked. A feature buried inside bigbasket could not be pulled back out. Building separately kept the cheaper move available.",
            ]}
          />
          <Reveal delay={80}>
            <div className="mt-12">
              <DotCadence
                before={{
                  heading: "One-time shopping",
                  body: "A basket assembled from scratch, checked out, and forgotten until the next trip.",
                  days: [1, 5],
                  note: "Irregular · rebuilt each time",
                }}
                after={{
                  heading: "A recurring routine",
                  body: "A standing schedule the customer adjusts, pauses, or adds to as the week changes.",
                  days: [0, 1, 2, 3, 4, 5, 6],
                  note: "Daily · alternate days · weekly · custom",
                }}
              />
            </div>
          </Reveal>
        </CaseStudySection>
      </CaseStudyColumn>

      {/* Full-bleed, so outside the column. */}
      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="The constraint" mark="rhythm">
            The product had to make repetition feel convenient without making customers feel locked into a
            routine.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        {/* The title stands alone, then each clip gets its own alternating
            beat beside the sentence it evidences (S12). */}
        <CaseStudySection id="customer-side">
          <Reveal>
            <p className="eyebrow">The customer side</p>
            <h2 className="display-title display-section mt-3 max-w-[26ch] text-[var(--ink)]">
              On the customer side, we designed around the routine
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-14 md:mt-16">
              <AlternatingTextMedia
                numbered
                mediaShape="portrait"
                align="start"
                rows={[
                  {
                    title: "The home experience",
                    body: "A first-time customer needed help creating a recurring order. A returning customer was more likely to be managing an existing routine, or adding something to a delivery already on its way. The home experience reflected those different states rather than giving everyone the same starting point — offers and categories for someone still browsing, and the running subscription close to hand for someone who had already committed to one.",
                    media: (
                      <ClipFigure
                        variant="beside"
                        width={704}
                        height={1322}
                        mp4="/work/bbdaily/home-experience.mp4"
                        poster="/work/bbdaily/home-experience-poster.jpg"
                        alt="The bb daily customer home: search, offers, everyday essentials, and popular products with subscribe actions"
                        caption="The deal of the day, then everyday essentials and rewards — a returning customer's routine is never more than a scroll from the top."
                      />
                    ),
                  },
                  {
                    title: "Starting a recurring order",
                    body: "The product page offers two different commitments side by side: subscribe, or buy once. Choosing to subscribe opens a schedule rather than a checkout — daily, alternate days, weekly, or days picked by hand — and sets the first delivery date before anything is confirmed. A customer sees exactly what they are agreeing to while they are still deciding whether to agree to it.",
                    media: (
                      <ClipFigure
                        variant="beside"
                        width={704}
                        height={1294}
                        mp4="/work/bbdaily/recurring-order.mp4"
                        poster="/work/bbdaily/recurring-order-poster.jpg"
                        alt="Starting a recurring order: choosing a product, picking a schedule, and subscribing"
                        caption="One product, then the schedule: daily, alternate days, weekly or chosen days, with the first delivery set before anything is confirmed."
                      />
                    ),
                  },
                  {
                    title: "Upcoming deliveries by date",
                    body: "Deliveries are grouped by the day they arrive, each showing what is coming and what it costs. That grouping matters for a subscription: a customer rarely wants to change the arrangement, they want to change Tuesday. Adding an item to one delivery leaves the recurring order untouched, so a one-off stays a one-off instead of becoming a renegotiation of the routine.",
                    media: (
                      <ClipFigure
                        variant="beside"
                        width={704}
                        height={1352}
                        mp4="/work/bbdaily/upcoming-deliveries.mp4"
                        poster="/work/bbdaily/upcoming-deliveries-poster.jpg"
                        alt="Reviewing orders by date, showing an upcoming delivery and its running total"
                        caption="Deliveries grouped by date, each with what is coming and what it costs, so a change lands on one day rather than the whole subscription."
                      />
                    ),
                  },
                ]}
              />
            </div>
          </Reveal>

        </CaseStudySection>

        {/* Serviceability was the operating model showing through the UI, not a
            feature — so it gets a chapter rather than a trailing sentence. */}
        <CaseStudySection id="reach">
          <CaseStudyChapter
            eyebrow="Where it could reach"
            heading="The delivery model decided who was allowed to subscribe"
            body={[
              "bb daily ran on batch delivery. A society or gated community with twenty to thirty subscriptions could be served on a single round. An individual household could only be reached if a van was already going somewhere nearby.",
              "That is an operational constraint, but it lands on the first screen a customer sees. Letting someone build a subscription and then discover their address was unserviceable would have spent the one moment they were willing to commit.",
              "So eligibility came first rather than at checkout, and an address outside the rounds got a way to register interest instead of a dead end \u2014 a record of demand where delivery did not yet go.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      {/* The turn from the customer half to the operational half, carried by
          the one photographic asset rather than another heading on paper. */}
      <div className="mt-20 md:mt-28">
        <SceneBanner
          fullBleed
          src="/work/bbdaily/Artboard%20Copy%2011.jpg"
          alt="Operations-app cards for receiving stock, counting crates, and confirming deliveries, over a warehouse photograph"
          eyebrow="The operations side"
          headline="Every subscription created work in the physical world."
          standfirst="The customer experience was only one half of the product."
        />
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="operations" boundary={false}>
          {/* The breaker above already carries "the customer experience was
              only one half of the product", so it isn't repeated here. */}
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
              <p className="body-text">
                Behind every recurring order, six operational roles coordinated goods arriving from vendors,
                inventory being sorted and packed, shipments moving to delivery locations, and executives
                completing doorstep deliveries within a narrow morning window.
              </p>
              <p className="body-text">
                Field visits showed how much of that process depended on paperwork and manual handoffs. When
                inventory moved between people and locations, it was difficult to maintain an accurate picture
                of what had arrived, what had been packed, and what still needed to move.
              </p>
            </div>
          </Reveal>
          <CaseStudyFigure rule label="One subscription, five stages of work">
            <DotFlow stages={FLOW} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="operations-app">
          <CaseStudyChapter
            eyebrow="The operations app"
            heading="Six roles shared one app, and none of them saw the same one"
            body={[
              "The operational product brought those workflows into one Android application \u2014 but not into one interface.",
              "The alternative was a common experience with everything in it, navigated differently by each role. I argued against it. After login the app resolved to the person’s own work, so someone receiving stock and someone completing doorstep deliveries used the same operational record and almost none of the same screens.",
              "Each flow was built around the activity that person actually performs, in the terms they already use for it, rather than a shared vocabulary none of them would have chosen.",
            ]}
          />
          {/* One slot, paged by dots — a shift in the order it actually runs. */}
          <Reveal>
            <div className="mt-14">
              <ArtboardCarousel
                label="Operations app workflows"
                slides={[
                  {
                    src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2010.jpg",
                    width: 4581,
                    height: 2340,
                    alt: "Operations app login: welcome screen, OTP entry, and signing in as a customer experience executive",
                    caption: "Signing in — the app resolves which role’s workspace to open",
                    hotspots: [
                      {
                        x: 25.9,
                        y: 54.9,
                        title: "A password is not always the fastest way in",
                        detail:
                          "An OTP route sits beside the password field, because a shared handset at 4am is a different sign-in problem from a desk login.",
                      },
                      {
                        x: 49.8,
                        y: 36.9,
                        title: "The code is timed and re-sendable",
                        detail:
                          "The countdown and resend sit together, so a delayed message does not become a dead end at the start of a shift.",
                      },
                      {
                        x: 18.3,
                        y: 74.9,
                        title: "Six roles, one app",
                        detail:
                          "Signing in as a customer experience executive is offered as its own route, so the app opens the workspace for the job rather than a shared home screen.",
                      },
                      {
                        x: 49.8,
                        y: 77.3,
                        title: "Numeric-first input",
                        detail:
                          "Every field on the way in takes digits, so the keypad opens directly rather than through a full keyboard.",
                      },
                    ],
                  },
                  {
                    src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2011.jpg",
                    width: 4581,
                    height: 2340,
                    alt: "Operations app shipment receiving: milk shipment intake, reconciliation against expected crates, and completion",
                    caption: "Receiving — reconciling what arrived against what was expected",
                    hotspots: [
                      {
                        x: 18.3,
                        y: 41,
                        title: "Both directions start in one place",
                        detail:
                          "Receiving stock and sending a shipment are the same job in opposite directions, so they open from the same screen rather than separate parts of the app.",
                      },
                      {
                        x: 48.8,
                        y: 37.2,
                        title: "Expected and received on the same row",
                        detail:
                          "Each line carries what was expected next to what actually arrived, so a shortfall is visible while counting rather than found against a second document later.",
                      },
                      {
                        x: 56.8,
                        y: 58.7,
                        title: "A discrepancy is raised at the item",
                        detail:
                          "Flagging sits on the line being counted, at the moment the count is made — the point where paperwork and manual handoffs used to lose the detail.",
                      },
                      {
                        x: 81,
                        y: 39.5,
                        title: "The handoff carries the count",
                        detail:
                          "Missing and received totals are summarised on completion, so the next person inherits an accurate picture of what moved.",
                      },
                    ],
                  },
                  {
                    src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2012.jpg",
                    width: 4581,
                    height: 2340,
                    alt: "Operations app deliveries: delivery count, bag-ID search by drop point, and per-flat order detail",
                    caption: "Delivering — working down a drop point, flat by flat",
                    hotspots: [
                      {
                        x: 18.3,
                        y: 50.9,
                        title: "The round has three modes",
                        detail:
                          "Counting what is loaded, running the delivery, and reviewing what was completed are separated, because they happen at different points in the morning.",
                      },
                      {
                        x: 49.8,
                        y: 24.5,
                        title: "Find a bag without reading the list",
                        detail:
                          "Bag ID search and a scanner sit above the list, so a specific bag is reachable without working down every drop point.",
                      },
                      {
                        x: 49.8,
                        y: 76.1,
                        title: "Grouped by drop point, with a bag count",
                        detail:
                          "Each drop point carries its own total, so what belongs at a building is countable before the executive leaves the vehicle.",
                      },
                      {
                        x: 81.1,
                        y: 24.5,
                        title: "Floor and flat before the items",
                        detail:
                          "The address detail leads the order screen, matching the way the job actually runs — find the door first, then check the contents.",
                      },
                    ],
                  },
                  {
                    src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2013.jpg",
                    width: 4581,
                    height: 2340,
                    alt: "Operations app payments: today's earnings, monthly earnings, and a per-day breakdown table",
                    caption: "Payments — earnings a delivery executive can check against their own record",
                    hotspots: [
                      {
                        x: 18.3,
                        y: 36.5,
                        title: "Today and this month, same shape",
                        detail:
                          "Both timeframes use one layout, so checking a day and checking a month is the same reading task rather than two different screens.",
                      },
                      {
                        x: 22.5,
                        y: 55.8,
                        title: "Quality sits beside the count",
                        detail:
                          "On-time delivery and exception counts appear next to the order totals, so earnings are never shown without the record behind them.",
                      },
                      {
                        x: 54,
                        y: 46.7,
                        title: "The month is a total, not a new model",
                        detail:
                          "Monthly earnings reuse the daily structure, so nothing has to be re-learned to read a longer period.",
                      },
                      {
                        x: 81,
                        y: 48.9,
                        title: "A day-by-day record to check against",
                        detail:
                          "The breakdown is per date and totalled at the foot, so an executive can reconcile the figure against their own count of the work.",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="delivery-work">
          <CaseStudyChapter
            eyebrow="In the dark stores"
            heading="I designed the role flows after standing in them"
            body={[
              "None of that split was obvious from a process diagram. I spent time in the dark stores and went out on deliveries with the agents before designing any of it.",
              "Reading a process gives you the order of the steps. Standing in it gives you what a person is holding while they take them, and how much attention they have left over. Delivery executives worked a narrow morning window and moved through buildings continuously, which is a different design problem from a route drawn on a screen.",
              "Prototype testing then checked the obvious things \u2014 whether key tasks completed, how long they took, how the experience held up in the context of the job.",
            ]}
            footnote="My own photographs from the field visits. Faces are out of frame — the people in them were at work, not presenting."
          />
          <Reveal delay={80}>
            <div className="mt-14 md:mt-16">
              <HeroThumbnailRail
                label="Field visits"
                screens={[
                  {
                    src: "/work/bbdaily/field-paper-slip.jpg",
                    width: 1500,
                    height: 630,
                    alt: "A delivery agent kneeling on the ground at night, reading a paper slip beside a crate of milk sachets and a sack",
                    title: "The paper slip",
                    description:
                      "A round being sorted on the ground against a printed docket. This is the process the operations app was built to replace.",
                  },
                  {
                    src: "/work/bbdaily/field-dark-store.jpg",
                    width: 1200,
                    height: 1376,
                    alt: "Stacked dairy crates filled with milk sachets inside a dark store, lit by a single fluorescent tube",
                    title: "The dark store",
                    description: "Crates filled and stacked against the shutter before a round goes out.",
                  },
                  {
                    src: "/work/bbdaily/field-loaded-van.jpg",
                    width: 1200,
                    height: 1056,
                    alt: "The open back of a delivery van loaded with colour-coded crates stacked in columns",
                    title: "One van, one round",
                    description: "Loaded crate by crate. The crate, not the order, was the unit the delivery model worked in.",
                  },
                  {
                    src: "/work/bbdaily/field-doorstep.jpg",
                    width: 1200,
                    height: 1248,
                    alt: "An insulated delivery bag hanging on a door handle with a single milk sachet inside",
                    title: "The last doorstep",
                    description: "One insulated bag on one door, holding a single household\u2019s order.",
                  },
                ]}
              />
            </div>
          </Reveal>
          {/* No media here on purpose. All four screen recordings are of the
              customer app; there is no approved footage of the delivery
              workflow, and a customer clip captioned as delivery work would be
              a fabricated claim. The operations carousel above already carries
              this evidence. */}
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            eyebrow="What I believe now"
            heading="A customer action is an instruction to someone else"
            body={[
              "Working across both sides of bb daily changed how I thought about end-to-end product design.",
              "A customer action on one screen could create work for several people in the physical world. Designing the service meant understanding that whole chain — from setting a recurring delivery to the operational system required to fulfil it.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What it came down to" mark="connection">
            The interface was only one part of the experience. The product was the connection between the
            promise and the operation behind it.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
