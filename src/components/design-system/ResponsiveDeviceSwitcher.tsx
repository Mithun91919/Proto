"use client";

import { useState } from "react";
import Image from "next/image";

export type DeviceKey = "mobile" | "tablet" | "desktop";

export type DeviceShot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  route?: string;
};

type ResponsiveDeviceSwitcherProps = {
  shots: Record<DeviceKey, DeviceShot>;
  label: string;
};

const ORDER: DeviceKey[] = ["mobile", "tablet", "desktop"];
const DEVICE_LABEL: Record<DeviceKey, string> = { mobile: "Mobile", tablet: "Tablet", desktop: "Desktop" };

/**
 * M10 · Responsive device switcher — tabs swap both the chrome (phone
 * bezel, tablet bezel, browser chrome) and the screenshot, so responsive
 * craft is something a reader clicks through rather than a claim in the
 * copy above three static frames.
 */
export function ResponsiveDeviceSwitcher({ shots, label }: ResponsiveDeviceSwitcherProps) {
  const [device, setDevice] = useState<DeviceKey>("desktop");
  const shot = shots[device];

  return (
    <div role="group" aria-label={label}>
      <div className="ds-device-tabs" role="tablist" aria-label={`${label} — device`}>
        {ORDER.map((d) => (
          <button
            key={d}
            type="button"
            role="tab"
            aria-selected={device === d}
            className={`ds-device-tab${device === d ? " is-active" : ""}`}
            onClick={() => setDevice(d)}
          >
            {DEVICE_LABEL[d]}
          </button>
        ))}
      </div>

      <div className={`ds-device-stage ds-device-${device}`}>
        <div className="ds-frame">
          {shot.route ? (
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
                {shot.route}
              </span>
            </div>
          ) : null}
          <div className="ds-framebody">
            <Image
              key={shot.src}
              src={shot.src}
              width={shot.width}
              height={shot.height}
              alt={shot.alt}
              sizes="(max-width: 700px) 90vw, 40rem"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
