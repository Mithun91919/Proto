import { ProjectHero } from "@/components/ProjectHero";
import type { ProductMotionSection } from "@/content/case-study-v2/types";

type ProductMotionProps = { section: ProductMotionSection };

/** A short looping product interaction — demonstrates behaviour, not decoration. */
export function ProductMotion({ section }: ProductMotionProps) {
  const { media, caption } = section;

  return (
    <ProjectHero
      mp4={media.mp4}
      webm={media.webm}
      mov={media.mov}
      poster={media.poster ?? media.src ?? ""}
      caption={caption ?? media.caption}
      alt={media.alt}
      aspect={media.aspect}
      playOn="view"
      className="cs-media-bleed"
    />
  );
}
