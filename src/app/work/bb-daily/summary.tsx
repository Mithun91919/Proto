import type { ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the bb daily summary shows under its opener. Every line is the case study's own wording, cut down.
 */
const SLIDES: ArtboardSlide[] = [
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
                          "Each line carries what was expected next to what actually arrived, so a shortfall shows up while someone is still counting.",
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
                          "Each drop point carries its own total, so what belongs at a building is countable before the delivery executive leaves the vehicle.",
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
                          "Both timeframes use one layout, so checking a day and checking a month read the same way.",
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
                          "The breakdown is per date and totalled at the foot, so a delivery executive can check the figure against their own count of the work.",
                      },
                    ],
                  },
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
                          "Every field on the way in takes digits, so the keypad opens straight onto numbers.",
                      },
                    ],
                  },
];

export function BbDailySummary() {
  return (
    <SummaryStory
      slug="bb-daily"
      beats={[
        {
          label: "Why it mattered",
          lead: "Recurring groceries are not a checkout problem.",
          detail: "Behind the promise, buying, stock, packing, shipments and an early-morning delivery window all had to stay coordinated.",
        },
        {
          label: "What we built",
          lead: "The customer’s subscription, and the operations behind it.",
          detail: "The work covered the customer app on Android and iOS, and an Android app the operations teams used to coordinate each delivery.",
        },
        {
          label: "What I did",
          lead: "I worked the customer app and the operations app together.",
          detail: "I ran research and UX across both sides, so what the customer app promised matched what the operations app had to coordinate.",
        },
      ]}
      carousel={{
        eyebrow: "The operations app",
        title: "Each role opens its own work",
        description:
          "Four screens from the operations app, one for each part of a delivery round: receiving, delivering, payments and signing in.",
        label: "Operations app workflows",
        scrollable: false,
        slides: SLIDES,
      }}
      caveat="These figures describe the product when I worked on it, not results caused by the design."
    />
  );
}
