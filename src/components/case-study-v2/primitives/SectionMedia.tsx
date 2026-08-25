import { MediaFrame } from "@/components/MediaFrame";
import { ProjectHero } from "@/components/ProjectHero";
import type { MediaRef } from "@/content/case-study-v2/types";

type SectionMediaProps = {
  media: MediaRef;
  className?: string;
};

/**
 * Picks the right existing media primitive for a `MediaRef`. Real media
 * (image or video) always renders through `ProjectHero`, borderless —
 * product evidence should fill the space it's given, not sit in a bordered
 * card. `MediaFrame`'s labelled placeholder card is reserved for the one
 * case that actually needs a container: telling the viewer a screen is
 * reconstructed rather than real.
 */
export function SectionMedia({ media, className }: SectionMediaProps) {
  const { mp4, webm, mov, poster, src, alt, caption, aspect, reconstructed } = media;

  if (reconstructed || (!mp4 && !webm && !mov && !src)) {
    return (
      <MediaFrame caption={caption}>
        <p>{alt ?? "Reconstructed with representative data to protect internal information."}</p>
      </MediaFrame>
    );
  }

  return (
    <ProjectHero
      mp4={mp4}
      webm={webm}
      mov={mov}
      poster={poster ?? src ?? ""}
      caption={caption}
      alt={alt}
      aspect={aspect}
      playOn="view"
      className={`cs-media-bleed${className ? ` ${className}` : ""}`}
    />
  );
}
