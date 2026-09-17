import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { DotFlow } from "@/components/design-system/DotFlow";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";

/**
 * Movie Ticket Booking — third project on the locked case-study template.
 *
 * Prose is verbatim from
 * `projects/hike-movie-tickets/web/hike-movie-tickets-web.md`.
 *
 * No metrics band: the draft reports one research figure (15 participants)
 * and no outcome metrics, so that number stays in the prose where its
 * qualifier travels with it rather than becoming a headline.
 *
 * The draft marks four media beats but the folder holds two assets. The
 * `[VISUAL - MOVIE IN MIND -> THEATRE -> ...]` placeholder is the one that
 * reconstructs honestly — it asks for a flow diagram, not a screenshot, so
 * `DotFlow` draws it. The remaining two placeholders are omitted rather than
 * filled with invented screens.
 */

export const metadata: Metadata = {
  title: "Movie Ticket Booking — Turning intent into one continuous transaction",
  description:
    "An aggregator ticketing experience inside Hike Messenger, connecting cinema ticketing services with Hike Wallet payments.",
};

/** The journey the draft names, in the order it names it. */
const BOOKING_FLOW = ["Movie in mind", "Theatre", "Showtime", "Seats", "Payment"];

const CHAPTERS = [
  { id: "intent", label: "Arriving ready" },
  { id: "one-flow", label: "One flow" },
  { id: "wallet", label: "Wallet" },
  { id: "reflection", label: "Reflection" },
];

export default function MovieTicketsPage() {
  return (
    <CaseStudyShell
      slug="hike-movie-tickets"
      evidence={[
        {
          label: "Problem",
          lead: (
            <>
              Most people arrived <span className="ds-accent-deep-text">already knowing the film</span>.
            </>
          ),
          detail:
            "A survey with 15 participants found the decision was usually made before the app opened. Nearby theatres, preferred seats, trust and available offers then decided where the booking completed.",
        },
        {
          label: "Task",
          lead: (
            <>
              Close the gap between <span className="ds-accent-deep-text">intent and purchase</span>.
            </>
          ),
          detail:
            "Less about encouraging browsing, more about removing friction between the moment someone decides and the moment they pay.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I made booking <span className="ds-accent-deep-text">one continuous transaction</span>.
            </>
          ),
          detail:
            "Showtime, seat and wallet payment in a single flow, rather than a hand-off between a ticketing service and a payment one.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        artMode: "backdrop" as const,
        src: "/work/hike-movie-tickets/Movie_Banner_2.jpg",
        alt: "The Hike movie ticketing experience over a wall of film posters: a browse screen listing showings in Bengaluru beside a booked ticket with its QR code",
        standfirst:
          "Cinema ticketing inside Hike Messenger, connected to Hike Wallet so choosing a seat and paying for it happened in one place.",
        headline: (
          <>
            Movie Ticket Booking: turning intent into <span style={{ color: "var(--ds-mint)" }}>one continuous transaction</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "Product Design" },
          { label: "Client", value: "Hike" },
          { label: "Year", value: "2018" },
          { label: "Discipline", value: "Consumer product design" },
        ],
      }}
      next={{
        href: "/work/bigbasket-ratings-reviews",
        number: "07",
        label: "bigbasket",
        title: "Ratings & Reviews: one feedback system across mobile and web.",
      }}
    >
      <CaseStudyColumn>

        <CaseStudySection id="intent">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The research"
            heading="Most people arrived ready to book"
            body={[
              "A short survey with 15 participants showed that many users already had a movie in mind when they opened a ticketing app. Nearby theatres, preferred seats, trust, and available offers then influenced where they completed the transaction.",
              "That made the core design problem less about encouraging endless browsing and more about reducing friction between intent and purchase.",
            ]}
          />
          {/* The draft's own placeholder asks for this chain, not a screenshot —
              so it reconstructs in the dot language rather than being omitted. */}
          <CaseStudyFigure rule label="The path from intent to purchase">
            <DotFlow stages={BOOKING_FLOW} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="one-flow">
          <CaseStudyChapter
            eyebrow="The integration"
            heading="Multiple systems needed to feel like one flow"
            body={[
              "The experience brought together ticketing through Just Tickets and INOX APIs, seat selection, and payment while presenting the journey as one coherent product inside Hike.",
              "The design focused on making each transition feel expected: choosing a movie, selecting a theatre and showtime, picking seats, paying, and receiving confirmation.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="60rem"
              src="/work/hike-movie-tickets/Screens_JT.png"
              width={2000}
              height={2250}
              alt="Six screens from the booking journey: browsing showings, theatre showtimes, the seat map, booking summary, wallet payment, and the resulting ticket"
              caption="The booking journey end to end — separate services behind it, one transaction in front of it"
              hotspots={[
                {
                  x: 50.1,
                  y: 24,
                  title: "Showtimes grouped by theatre, with distance",
                  detail:
                    "Nearby theatres influenced where people completed the transaction, so distance sits on the same row as the times rather than a screen away.",
                },
                {
                  x: 79.7,
                  y: 23,
                  title: "Seat state and running total together",
                  detail:
                    "Availability, selection, and the price so far share one screen, so choosing seats and understanding the cost is a single decision.",
                },
                {
                  x: 20.4,
                  y: 72.8,
                  title: "Payment stays inside the journey",
                  detail:
                    "The wallet balance and the bill appear in the booking flow, so paying does not read as a hand-off to a separate utility.",
                },
                {
                  x: 79.7,
                  y: 67.5,
                  title: "The ticket is where the booking ends",
                  detail:
                    "Confirmation and booking history share one place, so a completed transaction has somewhere to live rather than only an email.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="wallet">
          <CaseStudyChapter
            eyebrow="Payment"
            heading="Wallet payment stayed inside the journey"
            body={[
              "Hike Wallet allowed payment to continue within the broader Hike ecosystem rather than feeling like a hand-off to a separate utility.",
              "The booking flow was then prototyped and evaluated with users to identify friction. Findings were grouped into recurring patterns and used to refine the experience before the final design.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reflection"
            heading="What stayed with me"
            body={[
              "When discovery, external integrations, seat selection, and payment belong to one task, the product has to make the underlying systems feel like one continuous experience.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      {/* Open steps, filled joins — the claim is about the gaps, not the steps. */}
      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="Where it is decided" mark="seam">
            Transaction experiences are often won or lost between steps.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
