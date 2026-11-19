import { BeforeAfterSlider } from "@/components/design-system/BeforeAfterSlider";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Supply Chain summary shows under its opener. Every line is the case study's own wording, cut down.
 */
export function SupplyChainSummary() {
  return (
    <SummaryStory
      slug="supply-chain-operations"
      beats={[
        {
          label: "Why it mattered",
          lead: "Finding a tool meant remembering where it lived.",
          detail: "Tools had been added over time with no structure around them.",
        },
        {
          label: "What we built",
          lead: "One front door: shared structure, search, and shortcuts to what you use.",
          detail: "Across 139 modules, against one goal: less time finding a tool, more time using it.",
        },
        {
          label: "What I did",
          lead: "I fixed the structure before the navigation.",
          detail: "We regrouped the platform into Category, Module and Sub-module, then added pins, recent modules and search so the few tools most people rely on are a short trip away.",
        },
      ]}
      figureLabel="The landing page, before and after"
      figure={
        <BeforeAfterSlider
              label="The platform landing page, before and after the redesign"
              before={{
                src: "/work/supply-chain-operations/old-dashboard.png",
                width: 1914,
                height: 1242,
                alt: "Before: a long, flat grid of module tiles with little grouping.",
              }}
              after={{
                src: "/work/supply-chain-operations/new-dashboard-cmp.png",
                width: 2560,
                height: 1661,
                alt: "After: grouped categories, pinned and recent modules, and search.",
              }}
            />
      }
      results={[
                { value: "62%", label: "less time spent on the landing page", glyph: "drop" },
                { value: "10–30 min", label: "a visit to it used to take", glyph: "ring" },
                { value: "~39%", label: "of platform visits now route through it", glyph: "funnel" },
              ]}
      caveat="Less time on the landing page was the goal here — it is a route into the work, not a place to hold people."
    />
  );
}
