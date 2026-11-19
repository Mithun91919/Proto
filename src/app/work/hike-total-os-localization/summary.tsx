import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Total OS summary shows under its opener. Every line is the case study's own wording, cut down.
 */
export function TotalOsSummary() {
  return (
    <SummaryStory
      slug="hike-total-os-localization"
      beats={[
        {
          label: "Why it mattered",
          lead: "Translation is not localisation.",
          detail: "Converting English word for word would have preserved the words and lost the intent.",
        },
        {
          label: "What we had to do",
          lead: "Build a repeatable process across eight languages.",
          detail: "A repeatable path had to exist from English source copy through translation, review, implementation and validation on the handset itself.",
        },
        {
          label: "What I did",
          lead: "I ran the research and the process itself.",
          detail: "I established the path each string took and checked it on device, so the intent survived the trip rather than only the words.",
        },
      ]}
      figureLabel="The same screens in Hindi"
      figure={
        <ArtboardFigure
              src="/work/total-os/hindi-screens.jpg"
              width={2000}
              height={1800}
              alt="Four TOTAL screens in Hindi: on-boarding, the launcher, single sign-on with a numeric keypad, and messaging"
              caption="On-boarding, the launcher, single sign-on and messaging in Hindi"
            />
      }
      results={[
                { value: "23+", label: "participants, across age groups and languages", glyph: "field" },
                { value: "8", label: "Indian languages", glyph: "layers" },
                { value: "5", label: "stages from English copy to a device build", glyph: "ramp" },
              ]}
      caveat="Hike’s own figures from 2017 press, not audited. They describe the platform at the time, not results caused by the design."
    />
  );
}
