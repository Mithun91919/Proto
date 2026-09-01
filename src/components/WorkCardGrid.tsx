import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";

export type WorkCard = {
  id: string;
  /** Shown in the media badge alongside the first tag — matches the
      `{number} · {label}` pill on `FeaturedWorkCard`. */
  number: string;
  org: string;
  body: string;
  tags: string[];
  image?: string;
  /** Omitted when no page exists yet — the card then renders unlinked. */
  slug?: string;
};

/**
 * The earlier-work set, as a static grid.
 *
 * Replaces a carousel that paged three at a time. That was reasonable while
 * these cards were dead ends, but every one of them now opens a full case
 * study on the same template as the featured work — so hiding half the set
 * behind a "next" control costs the reader something real.
 *
 * Brought onto the same card language as `FeaturedWorkCard` (picked at
 * /work/layout-options for the homepage grid) rather than staying the
 * plain-image card this listing carried before that comparison: the same
 * dark number badge over the media, the same title/summary type scale, the
 * same two-tag-plus-arrow footer. These entries carry no metrics, so the
 * card simply ends one section earlier — nothing is stretched to fill a
 * slot that isn't there.
 */
export function WorkCardGrid({ items }: { items: WorkCard[] }) {
  return (
    <div className="ds-scope mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const card = (
          <GlassPanel
            variant="lift"
            hoverLift={Boolean(item.slug)}
            className="flex h-full flex-col overflow-hidden rounded-2xl"
          >
            {item.image ? (
              /* Cropping is correct here: a card thumbnail sets a scene, it is
                 not evidence anyone reads. Every source is landscape, so a
                 16/10 slot — the same ratio FeaturedWorkCard uses — trims
                 almost nothing. */
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em]"
                  style={{ background: "var(--ds-dark)", color: "var(--ds-mint)" }}
                >
                  {item.number} · {item.tags[0]}
                </span>
              </div>
            ) : null}

            <div className="flex flex-1 flex-col p-7">
              {!item.image ? (
                <p
                  className="font-mono text-[0.7rem] uppercase tracking-[0.14em]"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {item.number} · {item.tags[0]}
                </p>
              ) : null}
              <h3
                className={`display-title text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)] ${!item.image ? "mt-2" : ""}`}
                style={{ fontSize: "1.6rem" }}
              >
                {item.org}
              </h3>
              <p className="body-sm mt-2.5 max-w-[46ch] flex-1 text-[var(--ink-soft)]">{item.body}</p>

              {item.slug ? (
                <div className="mt-5 flex items-center justify-between">
                  <ul className="tag-list">
                    {item.tags.slice(0, 2).map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="ds-arrow text-xl" style={{ color: "var(--accent-deep)" }}>
                    →
                  </span>
                </div>
              ) : (
                <ul className="tag-list mt-5">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </GlassPanel>
        );

        return (
          <Reveal key={item.id} delay={index * 60}>
            {item.slug ? (
              <Link href={`/work/${item.slug}`} className="group block h-full no-underline">
                {card}
              </Link>
            ) : (
              card
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
