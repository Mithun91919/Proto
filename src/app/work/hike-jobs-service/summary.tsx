import type { ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Job Discovery summary shows under its opener. Every line is the case study's own wording, cut down.
 */
const SLIDES: ArtboardSlide[] = [
  {
    title: "Onboarding",
    src: "/work/hike-jobs-service/On-Boarding.jpg",
    width: 2000,
    height: 940,
    alt: "The onboarding sequence collecting job preferences before the feed is personalised",
    caption: "Onboarding collects preferences before the first feed is ever shown",
    hotspots: [
                {
                  x: 18,
                  y: 55,
                  title: "Status before anything else",
                  detail:
                    "Fresher (just starting out) or experienced changes which roles are worth surfacing at all, so it is the first thing asked.",
                },
                {
                  x: 50,
                  y: 55,
                  title: "Categories, not a blank search box",
                  detail:
                    "Picking fields people recognise gives the feed something to work from before they have typed a single query.",
                },
                {
                  x: 82,
                  y: 55,
                  title: "You can pick several cities",
                  detail:
                    "Someone open to several cities shouldn’t have to run the same search again and again.",
                },
              ],
  },
  {
    title: "Home",
    src: "/work/hike-jobs-service/Home.jpg",
    width: 2000,
    height: 2700,
    alt: "The job discovery home screen with recommendations, categories, and search",
    caption: "Several ways in, depending on how specific the intent already is",
    hotspots: [
                {
                  x: 18.9,
                  y: 18,
                  title: "Recommendations on first run",
                  detail:
                    "The preferences collected during onboarding mean the first screen already carries relevant roles instead of an empty feed.",
                },
                {
                  x: 81,
                  y: 18,
                  title: "Type to find a specific role",
                  detail:
                    "Someone who already knows the role they want gets there by typing, without working through categories first.",
                },
                {
                  x: 50,
                  y: 51,
                  title: "Narrowing after the fact",
                  detail:
                    "Job type and freshness filters sit on the results, so a broad search can be tightened rather than restarted.",
                },
                {
                  x: 50,
                  y: 84,
                  title: "Coming back without starting over",
                  detail:
                    "Recent searches and saved jobs give a returning user their thread back — job hunting is rarely a one-session task.",
                },
              ],
  },
  {
    title: "Resume builder",
    src: "/work/hike-jobs-service/Resume_Builder.jpg",
    width: 2000,
    height: 1800,
    alt: "The resume builder flow, from an empty profile through to a completed resume",
    caption: "Resume creation sits inside the application journey, not beside it",
    hotspots: [
                {
                  x: 32,
                  y: 29.8,
                  title: "An empty profile that says what to add",
                  detail:
                    "The first-run state names each section and offers the action, so someone without a resume can see the whole shape of one before starting.",
                },
                {
                  x: 68,
                  y: 27.8,
                  title: "Structured fields, not a blank document",
                  detail:
                    "Degree, institution, and dates are separate inputs, so the resume is assembled from answers rather than written from nothing.",
                },
                {
                  x: 32,
                  y: 80.6,
                  title: "Entries build up over time",
                  detail:
                    "Education and experience accumulate as repeatable entries, so the profile can be filled in across sessions.",
                },
                {
                  x: 68,
                  y: 77.8,
                  title: "It ends as a file they can send",
                  detail:
                    "A preview and a PDF export close the gap between finding a relevant role and being ready to act on it.",
                },
              ],
  },
];

export function JobDiscoverySummary() {
  return (
    <SummaryStory
      slug="hike-jobs-service"
      beats={[
        {
          label: "Why it mattered",
          lead: "Finding a job is only half of applying.",
          detail: "A generic feed surfaced opportunities without knowing what someone wanted.",
        },
        {
          label: "What we had to do",
          lead: "Take someone from discovery to ready to apply.",
          detail: "The product had to carry someone from a set of suggestions worth reading through to an application they were ready to send.",
        },
        {
          label: "What I did",
          lead: "I started the product with intent, not a feed.",
          detail: "Onboarding collected preferences so recommendations could be relevant, then search, categories and keywords gave people different ways in.",
        },
      ]}
      carousel={{
        eyebrow: "The product",
        title: "From preferences to a resume",
        description:
          "Three screens take someone from onboarding, through the listings, to the resume builder.",
        label: "Job Discovery and Resume Builder",
        scrollable: false,
        slides: SLIDES,
      }}
    />
  );
}
