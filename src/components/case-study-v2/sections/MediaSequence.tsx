import { SectionMedia } from "../primitives/SectionMedia";
import type { MediaSequenceSection } from "@/content/case-study-v2/types";

type MediaSequenceProps = { section: MediaSequenceSection };

/**
 * Shows behaviour or progression across 2–4 screens as a full-bleed,
 * horizontally scrollable filmstrip — large enough to actually read the UI,
 * not a row of small thumbnails. Labels overlay each item directly rather
 * than sitting in a caption bar underneath, so nothing boxes the media in.
 */
export function MediaSequence({ section }: MediaSequenceProps) {
  const { steps } = section;

  return (
    <div className="cs-carousel">
      {steps.map((step, index) => (
        <div key={index} className="cs-carousel-item">
          <SectionMedia media={step.media} />
          {step.label ? <p className="cs-carousel-label eyebrow">{step.label}</p> : null}
        </div>
      ))}
    </div>
  );
}
