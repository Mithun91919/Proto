import type { ReactNode } from "react";
import Link from "next/link";
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
  action,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  /** A link in the right-hand slot, on the title's baseline, in place of a
      lede. Gives the empty space a job: the way on to the rest of the work. */
  action?: { href: string; label: string };
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
      <div className={`section-head mt-3 ${lede ? "section-head-split" : action ? "section-head-action" : ""}`}>
        <h2 className={`section-head-title display-title display-section${dark ? "" : " text-[var(--ink)]"}`}>
          {title}
        </h2>
        {lede ? (
          <p className="lede" style={dark ? { color: "var(--ds-dark-muted)" } : undefined}>
            {lede}
          </p>
        ) : action ? (
          <Link
            href={action.href}
            className="section-head-link text-[1.05rem] font-semibold underline underline-offset-4"
            style={{ color: dark ? "var(--ds-mint)" : "var(--ink)" }}
          >
            {action.label}
          </Link>
        ) : null}
      </div>
    </Reveal>
  );
}
