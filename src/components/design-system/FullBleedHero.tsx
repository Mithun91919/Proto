type HeroMetaItem = { label: string; value: string };

type FullBleedHeroProps = {
  number: string;
  label: string;
  headline: string;
  meta: HeroMetaItem[];
};

/**
 * S11 · Full-bleed hero — the case-study opener. Product media runs edge to
 * edge; the dot field overlays it so the hero stays inside the system even
 * with no glass or card in sight. In a real case study the media ground is
 * a real `ProjectHero` clip; this reference uses the same diagonal-stripe
 * placeholder as S13 since there's no real footage to show here.
 */
export function FullBleedHero({ number, label, headline, meta }: FullBleedHeroProps) {
  return (
    <div className="ds-media-ground flex min-h-[420px] items-end rounded-sm">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(6,17,21,0.94) 0%, rgba(6,17,21,0.72) 38%, rgba(6,17,21,0.22) 100%)" }}
      />
      <div className="relative w-full p-12">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]" style={{ color: "#8fb3bc" }}>
          <span style={{ color: "var(--ds-mint)" }}>{number}</span> / {label}
        </p>
        <h3 className="display-title mt-5 max-w-[17ch]" style={{ fontSize: "2.75rem", lineHeight: 1.04, color: "var(--ds-dark-ink)" }}>
          {headline}
        </h3>
        <div className="mt-9 flex flex-wrap gap-10 border-t pt-6" style={{ borderColor: "rgba(234,243,245,.18)" }}>
          {meta.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em]" style={{ color: "#7c99a3" }}>
                {m.label}
              </p>
              <p className="mt-1.5 text-sm" style={{ color: "var(--ds-dark-ink)" }}>
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
