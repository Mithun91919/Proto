import { SectionMedia } from "./SectionMedia";
import type { MediaRef } from "@/content/case-study-v2/types";

const RATIO_COLUMNS: Record<"35/65" | "40/60" | "50/50", string> = {
  "35/65": "md:grid-cols-[35fr_65fr]",
  "40/60": "md:grid-cols-[40fr_60fr]",
  "50/50": "md:grid-cols-[50fr_50fr]",
};

type MediaTwoUpProps = {
  mode: "pair" | "before-after";
  weighting: "35/65" | "40/60" | "50/50";
  a: MediaRef & { label?: string };
  b: MediaRef & { label?: string };
};

/**
 * Shared base for `MediaPair` and `BeforeAfter` — two media panes at a
 * configurable weighting. `before-after` mode applies the site's existing
 * shift-from/shift-to ink treatment (muted "before", full-ink "after") so
 * the after state reads as the evidence, not just a second equal option.
 */
export function MediaTwoUp({ mode, weighting, a, b }: MediaTwoUpProps) {
  const isBeforeAfter = mode === "before-after";

  return (
    <div className={`grid grid-cols-1 gap-6 md:gap-8 ${RATIO_COLUMNS[weighting]}`}>
      <div>
        {a.label ? (
          <p className={`eyebrow mb-3 ${isBeforeAfter ? "shift-from" : ""}`}>{a.label}</p>
        ) : null}
        <SectionMedia media={a} />
      </div>
      <div>
        {b.label ? (
          <p className={`eyebrow mb-3 ${isBeforeAfter ? "shift-to" : ""}`}>{b.label}</p>
        ) : null}
        <SectionMedia media={b} />
      </div>
    </div>
  );
}
