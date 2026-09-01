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
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className={`section-head mt-3 ${lede ? "section-head-split" : ""}`}>
        <h2 className="section-head-title display-title display-section text-[var(--ink)]">{title}</h2>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </Reveal>
  );
}
