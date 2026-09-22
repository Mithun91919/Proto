import type { Metadata } from "next";
import localFont from "next/font/local";
import { DotGridBackground } from "@/components/DotGridBackground";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

// Self-hosted so type never silently falls back when fonts.googleapis.com is
// unreachable, and so builds work without network access.
const display = localFont({
  src: [{ path: "../fonts/sora-variable.woff2", weight: "100 800", style: "normal" }],
  variable: "--font-display",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const sans = localFont({
  src: [
    {
      path: "../fonts/instrument-sans-variable.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/instrument-sans-variable-italic.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const mono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mithunraju.in"),
  title: {
    default: "Mithun Raju, Designer",
    template: "%s · Mithun Raju",
  },
  description:
    "Senior UX designer for enterprise platforms, developer tools, and agentic workflows. Based in Bengaluru.",
  openGraph: {
    title: "Mithun Raju, Designer",
    description:
      "I turn fragmented enterprise workflows into unified, scalable product experiences.",
    url: "https://mithunraju.in",
    siteName: "Mithun Raju",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="site-shell font-[family-name:var(--font-sans)]"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <DotGridBackground />
        <SiteHeader />
        {/* `scroll-mt-[71px]` matches the sticky header's height. Two things
            scroll to this element and both landed it underneath the header:
            the skip link, and the App Router's own focus handling after a
            client-side navigation — `main` carries tabIndex -1, and focusing
            an element scrolls it to the top of the viewport. Clicking a card
            on the home page arrived at scrollY 72 with the back link hidden
            behind the header. The margin stops the scroll short instead. */}
        <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-[71px] outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
