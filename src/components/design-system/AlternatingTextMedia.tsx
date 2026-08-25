import { MediaFrameChrome } from "./MediaFrameChrome";

type MediaRow = {
  eyebrow: string;
  title: string;
  body: string;
  route: string;
};

type AlternatingTextMediaProps = {
  /**
   * Odd rows (index 0, 2, …) read text-first; every consecutive row flips.
   * The order is enforced here, not left to the caller, per the guide's
   * own rule: a run of chapters should never fall into a column.
   */
  rows: MediaRow[];
};

/** S12 · Alternating text / preview — row 1 is text-left, every row after it flips. */
export function AlternatingTextMedia({ rows }: AlternatingTextMediaProps) {
  return (
    <div className="flex flex-col">
      {rows.map((row, index) => {
        const mediaFirst = index % 2 === 1;
        const text = (
          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em]" style={{ color: "var(--ds-accent)" }}>
              {row.eyebrow} · {mediaFirst ? "media left" : "text left"}
            </p>
            <h3 className="display-title mt-3.5 max-w-[20ch]" style={{ fontSize: "1.75rem", lineHeight: 1.18 }}>
              {row.title}
            </h3>
            <p className="mt-4 max-w-[48ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
              {row.body}
            </p>
          </div>
        );
        const media = <MediaFrameChrome route={row.route} />;

        return (
          <div key={row.title} className="grid grid-cols-1 items-center gap-10 py-9 md:gap-16" style={{ gridTemplateColumns: mediaFirst ? "1.15fr 1fr" : "1fr 1.15fr" }}>
            {mediaFirst ? (
              <>
                {media}
                {text}
              </>
            ) : (
              <>
                {text}
                {media}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
