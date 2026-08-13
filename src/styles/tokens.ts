/**
 * JS mirror of `tokens.css` for docs / quick theme play.
 * Prefer CSS variables in components; edit primitives here AND in tokens.css together,
 * or treat tokens.css as the source of truth for runtime styling.
 */
export const colorPrimitives = {
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344",
  },
  neutral: {
    0: "#ffffff",
    50: "#f4fafb",
    100: "#e8f4f6",
    200: "#d5e8ec",
    300: "#b7d4db",
    700: "#3d5660",
    800: "#243942",
    900: "#0c171c",
    950: "#071015",
  },
} as const;

/** Semantic roles — remap these to try alternate themes quickly */
export const colorSemantics = {
  paper: "#f7fbfc",
  paperDeep: "#f1f7f9",
  ink: "var(--neutral-900)",
  inkSoft: "var(--neutral-800)",
  muted: "var(--neutral-700)",
  accent: "var(--cyan-500)",
  accentHover: "var(--cyan-400)",
  accentDeep: "var(--cyan-700)",
  accentDeeper: "var(--cyan-800)",
  accentSoft: "var(--cyan-100)",
  onAccent: "var(--neutral-0)",
} as const;

/** Dot-grid background controls (also in tokens.css) */
export const backgroundTokens = {
  base: "var(--bg-base)",
  dotColor: "var(--dot-color)",
  dotSize: "var(--dot-size)",
  dotGap: "var(--dot-gap)",
} as const;

/** Glass card / panel tokens */
export const glassTokens = {
  fill: "var(--glass-fill)",
  border: "var(--glass-border)",
  borderStrong: "var(--glass-border-strong)",
  blur: "var(--glass-blur)",
  shadow: "var(--glass-shadow)",
  shadowHover: "var(--glass-shadow-hover)",
  radius: "var(--glass-radius)",
} as const;

/** Button tokens — use .button.button-primary / .button-secondary in UI */
export const buttonTokens = {
  height: "var(--button-height)",
  heightSm: "var(--button-height-sm)",
  radius: "var(--button-radius)",
  primaryBg: "var(--button-primary-bg)",
  primaryFg: "var(--button-primary-fg)",
  secondaryBg: "var(--button-secondary-bg)",
  secondaryFg: "var(--button-secondary-fg)",
  secondaryBorder: "var(--button-secondary-border)",
} as const;

/**
 * Apply a temporary theme override in the browser console:
 *   import { applyThemePreview } from '@/styles/tokens'
 *   applyThemePreview({ accent: '#22d3ee', accentDeep: '#0e7490' })
 */
export function applyThemePreview(overrides: {
  accent?: string;
  accentHover?: string;
  accentDeep?: string;
  accentDeeper?: string;
  accentSoft?: string;
  paper?: string;
  paperDeep?: string;
  dotColor?: string;
  dotSize?: string;
  dotGap?: string;
}) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const map: Record<string, string | undefined> = {
    "--color-accent": overrides.accent,
    "--color-accent-hover": overrides.accentHover,
    "--color-accent-deep": overrides.accentDeep,
    "--color-accent-deeper": overrides.accentDeeper,
    "--color-accent-soft": overrides.accentSoft,
    "--color-paper": overrides.paper,
    "--color-paper-deep": overrides.paperDeep,
    "--bg-base": overrides.paper,
    "--dot-color": overrides.dotColor,
    "--dot-size": overrides.dotSize,
    "--dot-gap": overrides.dotGap,
  };

  for (const [key, value] of Object.entries(map)) {
    if (value) root.style.setProperty(key, value);
  }
}

export function clearThemePreview() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  [
    "--color-accent",
    "--color-accent-hover",
    "--color-accent-deep",
    "--color-accent-deeper",
    "--color-accent-soft",
    "--color-paper",
    "--color-paper-deep",
  ].forEach((key) => root.style.removeProperty(key));
}
