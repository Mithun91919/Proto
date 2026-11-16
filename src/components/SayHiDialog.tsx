"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CopyEmail } from "@/components/CopyEmail";
import { DotText } from "@/components/DotText";
import type { CSSProperties, PointerEvent } from "react";

const EMAIL = "mithraj14@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/mithunrajuk";
const INSTAGRAM = "https://www.instagram.com/the_humble_beee/";

/**
 * Each card leans toward the pointer and catches a little light there. Set as
 * custom properties on the card, so the resting tilt and the hover lift are
 * plain CSS. Does nothing under reduced motion.
 */
const tilt = {
  onPointerMove(event: PointerEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = event.currentTarget;
    const box = el.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    el.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * 12}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  },
  onPointerLeave(event: PointerEvent<HTMLElement>) {
    const el = event.currentTarget;
    el.style.removeProperty("--ry");
    el.style.removeProperty("--rx");
  },
};

/**
 * "Say hello", opened from the header button. A native dialog, so the browser
 * traps focus, closes it on Escape and returns focus to the button. Three
 * cards set like stationery, each tilted a degree or so and lifting on hover;
 * the tilt and the lift stop under reduced motion. The contact block on the
 * Home and About pages stays, so a link to it still lands somewhere.
 */
export function SayHiDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="say-hi"
      aria-labelledby="say-hi-title"
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop lands on the dialog element itself.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="say-hi-inner">
        <button type="button" className="say-hi-close" aria-label="Close" onClick={onClose}>
          <span aria-hidden>×</span>
        </button>
        {open ? (
          <div className="say-hi-dots" aria-hidden>
            <DotText aspect={1} pitch={8} text="Hi" decorative />
          </div>
        ) : null}
        <p className="eyebrow">Contact</p>
        <h2 id="say-hi-title" className="display-title display-section mt-3 text-[var(--ink)]">
          Say hello.
        </h2>
        <p className="mt-4 max-w-[48ch] text-[1.05rem] leading-8 text-[var(--ink-soft)]">
          Whether it’s about design, something you’re building, or a place you’ve discovered, I’d enjoy the
          conversation.
        </p>

        <ul className="say-hi-cards">
          <li>
            <Link href="/resume" className="say-hi-card say-hi-card-a" style={{ "--n": 0 } as CSSProperties} onClick={onClose} {...tilt}>
              <span className="say-hi-card-name display-title">Résumé</span>
              <span className="say-hi-card-desc">Hiring? Start here.</span>
              <span className="say-hi-card-go" aria-hidden>
                Read →
              </span>
            </Link>
          </li>
          <li>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="say-hi-card say-hi-card-b" style={{ "--n": 1 } as CSSProperties} {...tilt}>
              <span className="say-hi-card-name display-title">LinkedIn</span>
              <span className="say-hi-card-desc">Curious? Have a look.</span>
              <span className="say-hi-card-go" aria-hidden>
                Open ↗
              </span>
            </a>
          </li>
          <li>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="say-hi-card say-hi-card-c" style={{ "--n": 2 } as CSSProperties} {...tilt}>
              <span className="say-hi-card-name display-title">Instagram</span>
              <span className="say-hi-card-desc">Want to follow along?</span>
              <span className="say-hi-card-go" aria-hidden>
                Follow ↗
              </span>
            </a>
          </li>
          <li>
            <div className="say-hi-card say-hi-card-d" style={{ "--n": 3 } as CSSProperties} {...tilt}>
              <span className="say-hi-card-name display-title">Email</span>
              <span className="say-hi-card-desc">Want to talk? Write to me.</span>
              <a href={`mailto:${EMAIL}`} className="say-hi-card-desc say-hi-card-link">
                {EMAIL}
              </a>
              <CopyEmail address={EMAIL} className="say-hi-copy" />
            </div>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
