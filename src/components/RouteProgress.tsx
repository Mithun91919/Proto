"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * A dotted line that fills across the top while a page loads, so a slow
 * navigation has some feedback. It only appears if the load outlasts 200ms;
 * a fast one shows nothing at all. The App Router has no navigation-start
 * event, so a click on an internal link starts it and the new pathname ends it.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "active" | "done">("idle");
  const delay = useRef<number | null>(null);
  const finish = useRef<number | null>(null);
  const pending = useRef(false);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      pending.current = true;
      if (delay.current) window.clearTimeout(delay.current);
      delay.current = window.setTimeout(() => {
        if (pending.current) setState("active");
      }, 200);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    // The pathname changed: the page has arrived.
    pending.current = false;
    if (delay.current) window.clearTimeout(delay.current);
    const frame = window.requestAnimationFrame(() =>
      setState((current) => (current === "active" ? "done" : "idle")),
    );
    finish.current = window.setTimeout(() => setState("idle"), 420);
    return () => {
      window.cancelAnimationFrame(frame);
      if (finish.current) window.clearTimeout(finish.current);
    };
  }, [pathname]);

  return (
    <div
      className={`route-progress${state === "active" ? " is-active" : ""}${state === "done" ? " is-active is-done" : ""}`}
      aria-hidden="true"
    >
      <div className="route-progress-fill" />
    </div>
  );
}
