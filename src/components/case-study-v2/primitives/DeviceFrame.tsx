import type { ReactNode } from "react";

type DeviceFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Flat, editorial mobile-device chrome — a thin bezel and a notch, not a
 * skeuomorphic 3D device render. Just enough to read "this is a phone
 * screen" without competing with the product UI inside it.
 */
export function DeviceFrame({ children, className }: DeviceFrameProps) {
  return (
    <div className={`device-frame${className ? ` ${className}` : ""}`}>
      <span className="device-frame-notch" aria-hidden />
      <div className="device-frame-screen">{children}</div>
    </div>
  );
}
