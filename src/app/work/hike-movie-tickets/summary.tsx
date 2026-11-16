import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Movie Tickets summary shows under its opener. Every line is the case study's own wording, cut down.
 */
export function MovieTicketsSummary() {
  return (
    <SummaryStory
      slug="hike-movie-tickets"
      beats={[
        {
          label: "The problem",
          lead: "Most people arrived already knowing the film.",
          detail: "A survey with 15 participants found the decision was usually made before the app opened.",
        },
        {
          label: "The task",
          lead: "Build the booking end to end.",
          detail: "Everything from choosing a theatre to holding the ticket had to work inside Hike Messenger.",
        },
        {
          label: "What I did",
          lead: "I designed the booking from first screen to ticket.",
          detail: "I put theatre, showtime, seat and wallet payment in one flow, instead of handing off between a ticketing service and a payment one.",
        },
      ]}
      figureLabel="The booking, from browse to ticket"
      figure={
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
                    "Theatres near you influenced where people booked, so distance sits on the same row as the times, not a screen away.",
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
                    "The wallet balance and the bill appear in the booking flow, so paying does not feel like a hand-off to a separate payment screen.",
                },
                {
                  x: 79.7,
                  y: 67.5,
                  title: "The ticket is where the booking ends",
                  detail:
                    "Confirmation and booking history share one place, so a finished booking has somewhere to live, not only an email.",
                },
              ]}
            />
      }
    />
  );
}
