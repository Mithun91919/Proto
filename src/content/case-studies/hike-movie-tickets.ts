import type { CaseStudy } from "./types";

export const hikeMovieTicketsStudy: CaseStudy = {
  slug: "hike-movie-tickets",
  label: "Movie Ticket Booking",
  org: "Hike",
  timeframe: "2018",
  discipline: "Product Design · Mobile",
  title: "Designing a simpler path from choosing a movie to completing payment",
  subtitle:
    "Movie Tickets was an aggregator experience inside Hike Messenger designed to make discovering and booking cinema tickets easier while connecting transactions to Hike Wallet.",
  story:
    "Movie Tickets was an aggregator experience inside Hike Messenger designed to make discovering and booking cinema tickets easier while connecting transactions to Hike Wallet.",
  contributions: [
    "Booking flow design and simplification",
    "Theatre and showtime selection interface",
    "Seat selection interface and experience",
    "Payment integration and experience design",
    "Usability testing and iteration",
    "Cross-platform system integration",
  ],
  role: "Product Design",
  scope: [
    "UI/UX design",
    "Research and usability testing",
    "Movie discovery and filtering",
    "Ticketing system integration",
    "Payment flow design",
    "Confirmation and post-booking",
  ],
  metrics: [],
  chapters: [
    {
      number: "01",
      title: "Most people arrived ready to book",
      intro:
        "A short survey with 15 participants helped us understand how people approached movie-ticket apps. Many already had a movie in mind when they opened the product, while trust, nearby theatres, preferred seats, and available offers influenced where they completed the booking.",
      body: [
        "That shifted the focus away from making browsing the dominant experience and toward reducing friction in the path from intent to transaction.",
      ],
    },
    {
      number: "02",
      title: "The booking flow had to connect multiple systems without feeling fragmented",
      intro:
        "The experience brought together ticketing services through Just Tickets and INOX APIs while presenting the journey as one coherent product experience inside Hike.",
      body: [
        "The design work focused on simplifying the main booking path across movie selection, theatre and showtime choice, seat selection, and payment.",
      ],
    },
    {
      number: "03",
      title: "Payment was part of the experience, not a hand-off at the end",
      intro: "Hike Wallet created an opportunity to keep the transaction within the broader Hike ecosystem.",
      body: [
        "The payment experience was designed as a natural continuation of the booking flow rather than a separate utility, helping the journey remain consistent from choosing a ticket through completing the purchase.",
      ],
    },
    {
      number: "04",
      title: "We tested the flow before treating it as finished",
      intro:
        "The wireframed experience was turned into a prototype and evaluated with users to identify friction in the booking process. Findings were grouped into recurring patterns and used to refine the interface before moving further into the final design.",
      body: [
        "This helped keep the project focused on whether people could complete the task comfortably rather than only whether the screens looked polished.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Transaction experiences are often won or lost in transitions",
      body: "When discovery, external service integrations, seat selection, and payment all belong to one journey, the product has to make those underlying systems feel like a single continuous experience.",
    },
  ],
};
