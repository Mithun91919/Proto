"use client";

import { useState } from "react";

/**
 * Copies the address and says so. A mailto link does nothing on a machine
 * with no mail client, which is exactly the locked-down work laptop a
 * reviewer is likely to be on.
 */
export function CopyEmail({ address, className = "button button-secondary" }: { address: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${address}`;
    }
  };

  return (
    <button type="button" onClick={copy} className={className} aria-live="polite">
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
