"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CopyEmail } from "@/components/CopyEmail";

const EMAIL = "mithraj14@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/mithunrajuk";

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
            <Link href="/resume" className="say-hi-card say-hi-card-a" onClick={onClose}>
              <span className="say-hi-card-label">Résumé</span>
              <span className="say-hi-card-title">One page, as a web page and a PDF</span>
              <span className="say-hi-card-go" aria-hidden>
                Read →
              </span>
            </Link>
          </li>
          <li>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="say-hi-card say-hi-card-b">
              <span className="say-hi-card-label">LinkedIn</span>
              <span className="say-hi-card-title">in/mithunrajuk</span>
              <span className="say-hi-card-go" aria-hidden>
                Open ↗
              </span>
            </a>
          </li>
          <li>
            <div className="say-hi-card say-hi-card-c">
              <span className="say-hi-card-label">Email</span>
              <a href={`mailto:${EMAIL}`} className="say-hi-card-title say-hi-card-link">
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
