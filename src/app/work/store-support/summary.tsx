import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Store associate app summary shows under its opener. Every line is the case study's own wording, cut down.
 */
export function StoreSupportSummary() {
  return (
    <SummaryStory
      slug="store-support"
      beats={[
        {
          label: "Why it mattered",
          lead: "Reporting a fault meant finding a manager and a desktop.",
          detail: "An associate who found a cooler failing could not report it from the floor.",
        },
        {
          label: "What we built",
          lead: "One app for the building and the technology inside it.",
          detail: "One experience for associates supporting ~580K devices and for the central support teams receiving their tickets.",
        },
        {
          label: "What I did",
          lead: "I put guided resolution before the ticket form.",
          detail: "I made the fix step one of two when reporting, and let associates track, add to and escalate their work orders.",
        },
      ]}
      figureLabel="Before and after"
      figure={
        <BeforeAfterModel
              before={{
                heading: "Every issue became a ticket",
                body: "Find a manager, find a desktop, describe the fault from memory, and wait for someone to be sent. Nothing else was on offer, whether or not the fix was something the associate could have done.",
                stages: ["Issue", "Raise a ticket", "Wait"],
              }}
              after={{
                heading: "The ticket became the fallback, not the starting point",
                body: "The steps to clear it come first, and answering yes ends the journey. A ticket is raised only where they did not hold — and it carries the failed attempt with it.",
                stages: ["Issue", "Fix it", "Back to work"],
              }}
            />
      }
      results={[
                { from: "3 days", value: "1 day", label: "to close a ticket", glyph: "ring" },
                { value: "40%", label: "fewer tickets raised", glyph: "drop" },
                { from: "0", value: "40", label: "do-it-yourself fixes created", glyph: "ramp" },
              ]}
    />
  );
}
