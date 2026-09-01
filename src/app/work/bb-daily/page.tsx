import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { AlternatingTextMedia } from "@/components/design-system/AlternatingTextMedia";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { ClipFigure } from "@/components/design-system/ClipFigure";
import { DotCadence } from "@/components/design-system/DotCadence";
import { DotFlow } from "@/components/design-system/DotFlow";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";
import { SceneBanner } from "@/components/design-system/SceneBanner";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudyOverview,
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
  title: "bb daily — Designing both sides of a recurring delivery service",
  description:
    "bb daily was a subscription service for everyday essentials. I worked across both the customer experience and the Android operations product behind each delivery.",
};

const FLOW = ["Customer subscription", "Procurement", "Inventory", "Shipment", "Delivery"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "product-model", label: "The product model" },
  { id: "customer-side", label: "The customer side" },
  { id: "operations", label: "The operations side" },
  { id: "operations-app", label: "The operations app" },
  { id: "delivery-work", label: "Delivery work" },
  { id: "reflection", label: "Reflection" },
];

export default function BbDailyPage() {
  // bb daily is last in the project order, so `next` is undefined. Wrap to the
  // first project rather than dead-ending the reader — handled here rather
  // than in `getAdjacentProjects`, which the five v1 case studies also use.
  const { next } = getAdjacentProjects("bb-daily");
  const onward = next ?? projects[0];

  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        src: "/work/bbdaily/8f79fb_20203531c98e4bd986f2bbf39a470197~mv2.avif",
        alt: "bb daily customer app and operations app as two sides of one service",
        eyebrow: "bb daily · bigbasket",
        headline: "Designing both sides of a recurring delivery service.",
        meta: [
          { label: "Role", value: "Research & UX Design" },
          { label: "Client", value: "bigbasket" },
          { label: "Year", value: "2019–2020" },
          {
            label: "Discipline",
            value: "Consumer commerce · Operations UX · Mobile",
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
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyOverview
            statement={
              <>
                A subscription service for{" "}
                <span className="text-[var(--accent-deep)]">everyday essentials</span>.
              </>
            }
            note="Milk, dairy, bakery, fruits, vegetables, and other frequently purchased products."
            body={[
              "The customer experience looked simple: choose what you need and have it arrive on a recurring schedule. Behind that promise was a tightly coordinated operation involving procurement, inventory, packing, shipment creation, and early-morning delivery.",
              "I worked across both sides of the service — the Android and iOS customer experience and an Android operations product used to coordinate the work behind each delivery.",
            ]}
          />
          <Reveal delay={80}>
            <div className="mt-12">
              <ProofStrip
                items={[
                  { value: "10+", label: "cities", glyph: "ring" },
                  { value: "1.5M+", label: "users", glyph: "field" },
                  {
                    value: "120K",
                    label: "average daily deliveries",
                    glyph: "bars",
                  },
                ]}
              />
              <p className="mt-4 text-sm leading-6" style={{ color: "var(--muted)" }}>
                Scale figures from the documented product period; they are not presented as outcomes caused by
                the design work.
              </p>
            </div>
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="product-model">
          <CaseStudyChapter
            eyebrow="The product model"
            heading="Recurring grocery shopping is not a checkout problem"
            body={[
              "Most grocery experiences are designed around a single order. bb daily needed to support a relationship that continued across days and weeks.",
              "Before designing the flows, we explored how the service should sit alongside the main bigbasket product: as a separate app, an integrated experience, or a subscription feature inside the parent product.",
              "The direction kept bb daily as a focused subscription experience while connecting it back to the broader bigbasket ecosystem.",
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
                    body: "A first-time customer needed help creating a recurring order. A returning customer was more likely to manage an existing routine or add something to an upcoming delivery. The home experience reflected those different states rather than giving everyone the same starting point.",
                    media: (
                      <ClipFigure
                        variant="beside"
                        width={982}
                        height={1830}
                        mov="/work/bbdaily/Screen%20Recording%202020-03-13%20at%203.43.15%20PM.mov"
                        alt="The bb daily customer home: search, offers, everyday essentials, and popular products with subscribe actions"
                      />
                    ),
                  },
                  {
                    title: "Starting a recurring order",
                    body: "Subscriptions could be scheduled daily, on alternate days, weekly, or on custom dates.",
                    media: (
                      <ClipFigure
                        variant="beside"
                        width={982}
                        height={1806}
                        mov="/work/bbdaily/Screen%20Recording%202020-03-13%20at%204.46.55%20PM.mov"
                        alt="Starting a recurring order: choosing a product, picking a schedule, and subscribing"
                      />
                    ),
                  },
                  {
                    title: "Upcoming deliveries by date",
                    body: "Customers could also review past and upcoming deliveries by date and add an item to a specific delivery without rebuilding the subscription.",
                    media: (
                      <ClipFigure
                        variant="beside"
                        width={982}
                        height={1886}
                        mov="/work/bbdaily/Screen%20Recording%202020-03-13%20at%206.37.25%20PM.mov"
                        alt="Reviewing orders by date, showing an upcoming delivery and its running total"
                      />
                    ),
                  },
                ]}
              />
            </div>
          </Reveal>

          {/* Serviceability keeps its sentence from the draft but has no beat
              of its own — three is the run's limit before the alternation
              starts reading as a template. */}
          <Reveal>
            <p className="body-text mt-16 md:mt-20">
              Serviceability was part of the experience too. Because delivery was available only to supported
              apartments and gated communities, customers could identify eligible locations, search manually,
              or register interest when their address was not yet supported.
            </p>
          </Reveal>
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
            heading="One operations app supported different jobs"
            body={[
              "The operational product brought those workflows into one Android application.",
              "Instead of making every role navigate the same interface, the experience changed according to the person's responsibilities after login. Each role could focus on the information and actions relevant to its part of the process while contributing to the same operational record.",
              "The app supported receiving and shipment creation, inventory movement, delivery execution, and payment tracking for delivery executives.",
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
                    caption: "Signing in — the app resolves which role's workspace to open",
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
            eyebrow="Designing for the job, not the screen"
            heading="Designing around the realities of delivery work"
            body={[
              "The delivery experience had to fit the physical job, not an idealised route on a screen.",
              "Executives worked within a narrow morning window, so the workflow supported the way they moved through buildings and completed many deliveries efficiently. Prototype testing focused on whether key tasks could be completed successfully, how long they took, and how usable the experience felt in the context of the job.",
            ]}
          />
          {/* No media here on purpose. All four screen recordings are of the
              customer app; there is no approved footage of the delivery
              workflow, and a customer clip captioned as delivery work would be
              a fabricated claim. The operations carousel above already carries
              this evidence. */}
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            eyebrow="Reflection"
            heading="What stayed with me"
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
