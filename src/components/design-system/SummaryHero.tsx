import type { ReactNode } from "react";
import { HeroScreenStack, type HeroStackScreen } from "./HeroScreenStack";
import { SpecList } from "./SpecList";

/** The facts the summary's opener carries: who, for whom, when. */
const MAIN_FACTS = ["Role", "Client", "Year"];

/**
 * The summary's own opener, in place of the case study's. The same dark band,
 * with less on it: the headline, a short summary, the main facts as a ruled
 * list, and one image. Only the summary view shows it; the case study keeps its
 * own opener.
 */
export function SummaryHero({
  headline,
  standfirst,
  meta,
  art,
  artRatio,
  label,
  readTime,
}: {
  headline: ReactNode;
  standfirst?: string;
  meta: { label: string; value: string }[];
  /** The one image: the page's lead screen. Omit and the copy takes the band. */
  art?: HeroStackScreen;
  artRatio?: number;
  /** Describes the image as a whole. */
  label?: string;
  /** "2 min read", set as a small label above the headline. */
  readTime?: string;
}) {
  const facts = MAIN_FACTS.flatMap((name) => meta.filter((item) => item.label === name));

  const copy = (
    <div>
      <span className="ds-pull-dots" aria-hidden />
      {readTime ? (
        <p className="ds-eyebrow mb-4" style={{ color: "#8fb3bc" }}>
          {readTime}
        </p>
      ) : null}
      <h1
        className={`display-title ${art ? "max-w-[22ch]" : "max-w-[24ch]"}`}
        style={{
          color: "var(--ds-dark-ink)",
          fontSize: art ? "clamp(1.9rem, 3.1vw, 2.7rem)" : "clamp(2rem, 4.2vw, 3.1rem)",
          lineHeight: 1.06,
          letterSpacing: "-0.015em",
        }}
      >
        {headline}
      </h1>
      {standfirst ? (
        <p className="mt-6 max-w-[46ch] text-base leading-7" style={{ color: "var(--ds-dark-muted)" }}>
          {standfirst}
        </p>
      ) : null}
      {facts.length ? (
        <div className="mt-8">
          <SpecList tone="dark" facts={facts} />
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="ds-pull ds-cs-hero ds-cs-summary-hero">
      <div className="ds-pull-inner">
        {art ? (
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.4fr] lg:gap-12">
            <div className="flex items-start">{copy}</div>
            <div className="relative flex items-center justify-center">
              <div style={{ width: "92%", maxWidth: "46rem" }}>
                <HeroScreenStack screens={[art]} ratio={artRatio} label={label ?? art.alt ?? ""} />
              </div>
            </div>
          </div>
        ) : (
          copy
        )}
      </div>
    </div>
  );
}
