"use client";

import { useState } from "react";
import Image from "next/image";
import { PagingArrows } from "./PagingArrows";

export type DualRole = {
  route: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  roleLabel: string;
};

export type DualLink = {
  leftX: number;
  leftY: number;
  rightX: number;
  rightY: number;
  label: string;
};

type SyncedDualViewProps = {
  left: DualRole;
  right: DualRole;
  links: DualLink[];
  label: string;
};

/**
 * M9 · Synced dual view — two roles of one product, side by side, with a
 * marker on each screen and a caption tying them together. Built for the
 * two-sided products where a single screenshot only ever tells half the
 * story (a customer action and its operational consequence): stepping
 * through moves both markers together rather than showing one side at a
 * time and asking the reader to hold the connection in their head.
 */
export function SyncedDualView({ left, right, links, label }: SyncedDualViewProps) {
  const [active, setActive] = useState(0);
  const link = links[active];
  const stepBy = (delta: number) => setActive((a) => (a + delta + links.length) % links.length);

  const role = (
    side: DualRole,
    marker: { x: number; y: number },
  ) => (
    <div>
      <div className="ds-frame">
        <div className="ds-framebar">
          <span className="flex gap-1.5" aria-hidden>
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
          </span>
          <span
            className="flex-1 truncate rounded-md border px-2.5 py-1 font-mono text-[0.6rem]"
            style={{ borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)", color: "var(--muted)" }}
          >
            {side.route}
          </span>
        </div>
        <div className="ds-framebody relative">
          <Image
            key={side.src}
            src={side.src}
            width={side.width}
            height={side.height}
            alt={side.alt}
            sizes="(max-width: 700px) 90vw, 34rem"
            className="block h-auto w-full"
          />
          <span className="ds-dual-marker" style={{ top: `${marker.y}%`, left: `${marker.x}%` }} aria-hidden />
        </div>
      </div>
      <p className="ds-eyebrow mt-3" style={{ color: "var(--muted)" }}>
        {side.roleLabel}
      </p>
    </div>
  );

  return (
    <div role="group" aria-label={label}>
      <div className="ds-dual-grid">
        {role(left, { x: link.leftX, y: link.leftY })}
        <span className="ds-dual-connector" aria-hidden>
          →
        </span>
        {role(right, { x: link.rightX, y: link.rightY })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <p className="ds-note max-w-[50ch]">{link.label}</p>
        <PagingArrows onPrev={() => stepBy(-1)} onNext={() => stepBy(1)} label="connection" />
      </div>
    </div>
  );
}
