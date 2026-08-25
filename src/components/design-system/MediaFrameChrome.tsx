import type { ReactNode } from "react";

type MediaFrameChromeProps = {
  route?: string;
  children?: ReactNode;
  caption?: string;
};

/**
 * S3 · Media frame — browser-chrome presentation for real or reconstructed
 * interfaces. Per anti-pattern L, this is one option among several
 * (frame / crop / sequence / annotation / full-bleed anchor) — don't
 * default every screenshot into browser chrome just because it exists.
 */
export function MediaFrameChrome({ route = "product / route", children, caption }: MediaFrameChromeProps) {
  return (
    <div>
      <div className="ds-frame max-w-[620px]">
        <div className="ds-framebar">
          <span className="flex gap-1.5">
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
          </span>
          <span
            className="flex-1 rounded-md border px-2.5 py-1 font-mono text-[0.6rem]"
            style={{ borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)", color: "var(--muted)" }}
          >
            {route}
          </span>
        </div>
        <div className="ds-framebody flex items-center justify-center" style={{ aspectRatio: "16 / 10" }}>
          {children ?? (
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
              Product UI goes here
            </span>
          )}
        </div>
      </div>
      {caption ? (
        <p className="mt-3 font-mono text-[0.65rem]" style={{ color: "var(--muted)" }}>
          {caption}
        </p>
      ) : null}
    </div>
  );
}
