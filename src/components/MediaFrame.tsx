import type { ReactNode } from "react";

export function MediaFrame({ children }: { children: ReactNode }) {
  return (
    <figure className="texture-card glass-panel mt-10 overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
        <span className="eyebrow">Visual placeholder</span>
        <span className="eyebrow">Reconstructed</span>
      </div>
      <div className="relative z-[1] px-5 py-8 text-[0.98rem] leading-7 text-[var(--ink-soft)] [&_p]:m-0 [&_strong]:text-[var(--ink)]">
        {children}
      </div>
    </figure>
  );
}
