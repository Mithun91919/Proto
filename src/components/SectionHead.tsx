import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

/**
 * One header shape for every page section — eyebrow above, title baseline-
 * aligned with its lede in a wide-left/narrow-right split (`.section-head-
 * split`) rather than the lede stacking full-width beneath the title.
 *
 * Extracted from the /work page, which was the only place this actually
 * existed — the homepage's own section headers had drifted onto an older,
 * plain stacked layout in the meantime. One shared component now, so the
 * two pages can't drift apart the same way again.
 */
export function SectionHead({
  eyebrow,
  title,
  lede,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  /** Set on a `.ds-env-dark` background — swaps the hardcoded light-mode
      ink tokens for the dark-safe equivalents used elsewhere in the v6
      dark sections (`ChapterTransition`, `ClosingCTA`). */
  dark?: boolean;
}) {
  return (
    <Reveal>
      <p className="eyebrow" style={dark ? { color: "var(--ds-mint)" } : undefined}>
        {eyebrow}
      </p>
      <div className={`section-head mt-3 ${lede ? "section-head-split" : ""}`}>
        <h2 className={`section-head-title display-title display-section${dark ? "" : " text-[var(--ink)]"}`}>
          {title}
        </h2>
        {lede ? (
          <p className="lede" style={dark ? { color: "var(--ds-dark-muted)" } : undefined}>
            {lede}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
