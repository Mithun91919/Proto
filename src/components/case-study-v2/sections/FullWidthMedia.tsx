import { SectionMedia } from "../primitives/SectionMedia";
import type { FullWidthMediaSection } from "@/content/case-study-v2/types";

type FullWidthMediaProps = { section: FullWidthMediaSection };

/** The product is the strongest evidence — give it the full container width. */
export function FullWidthMedia({ section }: FullWidthMediaProps) {
  return <SectionMedia media={{ ...section.media, caption: section.caption ?? section.media.caption }} />;
}
