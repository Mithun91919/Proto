import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
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
  title: "Movie Ticket Booking — An end-to-end booking app built on Hike Messenger",
  description:
    "An end-to-end movie ticket booking app built on Hike Messenger: showtimes, seats, Hike Wallet payment and the ticket, in one place.",
  robots: caseStudyRobots,
};

/** The booking, from the first decision to the ticket. */
const BOOKING_FLOW = ["Movie in mind", "Theatre", "Showtime", "Seats", "Payment", "Ticket"];

const CHAPTERS = [
  { id: "intent", label: "Research" },
  { id: "one-flow", label: "The booking" },
  { id: "wallet", label: "Payment" },
  { id: "reflection", label: "Reflection" },
];

export default function MovieTicketsPage() {
  return (
    <CaseStudyShell
      slug="hike-movie-tickets"
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              Most people arrived <span className="ds-accent-text">already knowing the film</span>.
            </>
          ),
          detail:
            "A survey with 15 participants found the decision was usually made before the app opened. Nearby theatres, preferred seats, trust and available offers then decided where the booking completed.",
        },
        {
          label: "The task",
          lead: (
            <>
              Build the booking <span className="ds-accent-text">end to end</span>.
            </>
          ),
          detail:
            "Everything from choosing a theatre to holding the ticket had to work inside Hike Messenger, which had almost 100 million monthly active users in India in 2017 (TelecomTalk, July 2017). The design problem was less about browsing and more about removing friction between deciding and paying.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I designed the booking <span className="ds-accent-text">from first screen to ticket</span>.
            </>
          ),
          detail:
            "I put theatre, showtime, seat and wallet payment in one flow, instead of handing off between a ticketing service and a payment one. It shipped as a microservice inside Hike Messenger.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        artMode: "backdrop" as const,
        src: "/work/hike-movie-tickets/Movie_Banner_2.jpg",
        alt: "The Hike movie ticketing experience over a wall of film posters: a browse screen listing showings in Bengaluru beside a booked ticket with its QR code",
        standfirst:
          "People could find a film, pick a theatre, showtime and seats, pay from Hike Wallet and get the ticket without leaving Hike Messenger.",
        headline: (
          <>
            Movie Ticket Booking: <span style={{ color: "var(--ds-mint)" }}>an end-to-end booking app</span>, built on Hike Messenger.
          </>
        ),
        meta: [
          { label: "Role", value: "Product Designer" },
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
            heading="A survey of 15 people showed the decision came first"
            body={[
              "A short survey with 15 participants showed that many users already had a movie in mind when they opened a ticketing app. Nearby theatres, preferred seats, trust, and available offers then influenced where they completed the transaction.",
              "That made the core design problem less about encouraging endless browsing and more about reducing friction between deciding and paying.",
            ]}
          />
          {/* The draft's own placeholder asks for this chain, not a screenshot —
              so it reconstructs in the dot language rather than being omitted. */}
          <CaseStudyFigure rule label="The booking, start to finish">
            <DotFlow stages={BOOKING_FLOW} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="one-flow">
          <CaseStudyChapter
            eyebrow="The integration"
            heading="Ticketing, seats and payment worked as one app"
            body={[
              "The app brought together ticketing through Just Tickets and INOX APIs, seat selection and payment, and presented them as one product inside Hike.",
              "Each step leads to the next: choosing a movie, selecting a theatre and showtime, picking seats, paying, and receiving the ticket.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="60rem"
              src="/work/hike-movie-tickets/Screens_JT.png"
              width={2000}
              height={2250}
              alt="Six screens from the booking: browsing showings, theatre showtimes, the seat map, booking summary, wallet payment, and the resulting ticket"
              caption="The booking from browse to ticket: separate services behind it, one transaction in front of it"
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
                  title: "Payment stays inside the app",
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
            heading="Wallet payment stayed inside the app"
            body={[
              "Hike Wallet let people pay inside Hike, without a hand-off to a separate payment screen.",
              "The booking flow was then prototyped and evaluated with users to identify friction. Findings were grouped into recurring patterns and used to refine the experience before the final design.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reflection"
            heading="A booking app works only if every step leads to the next"
            body={[
              "Booking was released as a microservice inside Hike Messenger. I had left Hike by then, so I have no usage figures to share.",
              "Showtimes, seats and payment came from separate services. I put them in one flow, so choosing a seat and paying felt like one step.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      {/* Open steps, filled joins — the claim is about the gaps, not the steps. */}
      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="Where it is decided" mark="seam">
            Each step was simple. The work was in what joined them.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
