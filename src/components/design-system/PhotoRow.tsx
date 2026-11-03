import Image from "next/image";
import { ClipFigure } from "./ClipFigure";

export type PhotoRowItem =
  | { kind: "image"; src: string; alt: string; caption: string }
  | { kind: "clip"; mp4: string; poster: string; alt: string; caption: string };

/** Every item is cropped to this portrait frame, so the row reads as one set. */
const WIDTH = 720;
const HEIGHT = 960;

/**
 * M15 · Photo row — a short row of photographs and at most one clip, all in the
 * same portrait frame with a caption beneath. For personal pages, where the
 * pictures are the point; case studies use the artboard and clip figures.
 * The clip is a `ClipFigure`, so it plays muted while on screen and holds its
 * poster under reduced motion.
 */
export function PhotoRow({ items }: { items: PhotoRowItem[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-5">
      {items.map((item) => (
        <li key={item.kind === "image" ? item.src : item.mp4}>
          {item.kind === "image" ? (
            <figure className="m-0">
              <Image
                src={item.src}
                alt={item.alt}
                width={WIDTH}
                height={HEIGHT}
                className="block h-auto w-full rounded-[var(--radius-lg)]"
              />
              <figcaption className="ds-media-caption text-center">
                {item.caption}
              </figcaption>
            </figure>
          ) : (
            <ClipFigure
              mp4={item.mp4}
              poster={item.poster}
              alt={item.alt}
              caption={item.caption}
              width={WIDTH}
              height={HEIGHT}
              variant="fill"
            />
          )}
        </li>
      ))}
    </ul>
  );
}
