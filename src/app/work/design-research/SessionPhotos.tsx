import Image from "next/image";

/** A photo from a session, set beside the method's opening paragraph. */

const PHOTOS = [
  {
    src: "/work/design-research/session-room.jpg",
    alt: "A research session in a meeting room, with the team around a table with laptops.",
    caption: "A session in the room",
  },
];

export function SessionPhotos() {
  return (
    <div className="flex flex-wrap gap-4 md:justify-end">
      {PHOTOS.map((p) => (
        <figure key={p.src} className="m-0 w-full max-w-[26rem]">
          <Image
            src={p.src}
            alt={p.alt}
            width={1400}
            height={792}
            sizes="416px"
            className="h-auto w-full rounded-xl border"
            style={{ borderColor: "var(--line)" }}
          />
          <figcaption className="ds-eyebrow mt-3">{p.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
