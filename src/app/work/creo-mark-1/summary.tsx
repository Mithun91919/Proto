import type { ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Mark 1 brand summary shows under its opener. Every line is the case study's own wording, cut down.
 */
const SLIDES: ArtboardSlide[] = [
  {
                  title: "A new phone, every month",
                  src: "/work/creo/campaign-light.jpg",
                  width: 1200,
                  height: 628,
                  alt: "Mark 1 campaign: a phone with a plume of orange ink rising from its screen, the line “A New Phone, Every Month.” and Available on Flipkart",
                  caption: "The standing line, on a light ground, with where to buy it.",
                },
  {
                  title: "The same line, on dark",
                  src: "/work/creo/campaign-dark.jpg",
                  width: 1200,
                  height: 628,
                  alt: "Mark 1 campaign: a phone with a plume of pink and blue ink rising from its screen, the line “A New Phone, Every Month.” on a dark ground",
                  caption: "The same line and the same phone, with the colour of the month changed.",
                },
  {
                  title: "Coming soon",
                  src: "/work/creo/coming-soon.jpg",
                  width: 1024,
                  height: 512,
                  alt: "Mark 1 teaser: the back of the phone with the line “A new phone, every month”, Coming Soon on Flipkart and creosense.com, and the Runs on Fuel mark",
                  caption: "A teaser ahead of sales, carrying the Runs on Fuel mark.",
                },
  {
                  title: "Sales open",
                  src: "/work/creo/sales-open.png",
                  width: 880,
                  height: 440,
                  alt: "Mark 1 announcement: Sales open on 19 April at 12:00 AM, available on Flipkart and creosense.com, with the first 2,000 customers getting free engraving and a phone cover",
                  caption: "A date and a time, with the product at an angle.",
                },
  {
                  title: "A feature, in use",
                  src: "/work/creo/feature-sense.jpg",
                  width: 1024,
                  height: 512,
                  alt: "Mark 1 feature post: a hand holding the phone with a search for “food” open, headed Sense, double tap for anything",
                  caption: "A software feature shown on a real screen in a hand, under the same mark.",
                },
  {
                  title: "A different subject",
                  src: "/work/creo/skyline.webp",
                  width: 1024,
                  height: 512,
                  alt: "A night skyline in dark blue with lit windows, the CREO mark at the bottom left and the Runs on Fuel mark at the bottom right",
                  caption: "No phone at all, and still recognisably the same brand.",
                },
];

export function CreoMark1Summary() {
  return (
    <SummaryStory
      slug="creo-mark-1"
      beats={[
        {
          label: "The problem",
          lead: "The product changed every month.",
          detail: "Announcing each release on its own terms would have left the brand as a run of unrelated campaigns with nothing holding them together.",
        },
        {
          label: "The task",
          lead: "Build one visual language across every surface.",
          detail: "One visual system had to carry every channel and still absorb a change of subject each month.",
        },
        {
          label: "What I did",
          lead: "I kept the phone at the centre.",
          detail: "Large product imagery, high-contrast typography and a fixed set of supporting elements kept the phone and its software the dominant thing wherever it appeared.",
        },
      ]}
      carousel={{
        eyebrow: "The campaigns",
        title: "Six messages, one system",
        description:
          "The same visual language across six different messages, from the standing line to a subject with no phone in it.",
        label: "Mark 1 campaign creative",
        scrollable: false,
        slides: SLIDES,
      }}
    />
  );
}
