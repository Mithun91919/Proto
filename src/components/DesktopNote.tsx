"use client";

/**
 * A short note for anyone on a phone: the site is designed for a desktop, and
 * says so rather than leaving a visitor to wonder why it feels cramped. It is
 * shown by CSS alone below 768px (see `.desktop-note` in globals.css), so it
 * costs nothing on a desktop and needs no script to appear. Dismissing it is
 * remembered for the visit: the choice is written to the root element, like the
 * case-study view, and the layout restores it before first paint.
 */
export function DesktopNote() {
  return (
    <div className="desktop-note" role="note">
      <p>This site is best viewed on a desktop.</p>
      <button
        type="button"
        aria-label="Dismiss this note"
        onClick={() => {
          document.documentElement.dataset.desktopNote = "dismissed";
          try {
            window.sessionStorage.setItem("desktop-note", "dismissed");
          } catch {
            // Not remembered; it stays dismissed on this page.
          }
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
