import Image from "next/image";

export type HeroScreen = {
  src: string;
  /** True pixel dimensions — same discipline as `ArtboardFigure`, nothing cropped. */
  width: number;
  height: number;
  alt: string;
};

type SceneBannerFigureProps = {
  /**
   * The redesigned screens, rebuilt with placeholder data and the visual
   * system intact. Drop the exports in `public/work/<project>/` and reference
   * them here. With none supplied the band renders a plain pending note, so
   * the page ships honestly until the assets land.
   */
  screens?: HeroScreen[];
  /** Mono footnote, e.g. "Reconstructed · placeholder data". */
  note?: string;
};

/**
 * Product screens arranged on the hero's dark dot ground, standing in for a
 * marketing photo composite. Built for NDA work: per CLAUDE.md these are
 * reconstructed visuals — the real redesign with dummy content — never a
 * screenshot passed off as live.
 *
 * One lead screen holds the frame; a second, if given, sits behind it at an
 * angle for depth. Everything bleeds off the right and bottom edges the way
 * the real composites do, leaving the left of the band to the headline.
 */
export function SceneBannerFigure({ screens = [], note }: SceneBannerFigureProps) {
  if (screens.length === 0) {
    return (
      <div className="ds-scene-figure ds-scene-figure-pending">
        <p className="ds-scene-banner-pending">Reconstruction pending</p>
      </div>
    );
  }

  const [lead, behind] = screens;

  return (
    <div className="ds-scene-figure">
      <div className="ds-scene-figure-stack">
        {behind ? (
          <Image
            className="ds-scene-figure-shot is-behind"
            src={behind.src}
            width={behind.width}
            height={behind.height}
            alt={behind.alt}
            sizes="(max-width: 900px) 55vw, 26vw"
          />
        ) : null}
        <Image
          className="ds-scene-figure-shot is-lead"
          src={lead.src}
          width={lead.width}
          height={lead.height}
          alt={lead.alt}
          priority
          sizes="(max-width: 900px) 80vw, 40vw"
        />
      </div>
      {note ? <p className="ds-scene-figure-note">{note}</p> : null}
    </div>
  );
}
