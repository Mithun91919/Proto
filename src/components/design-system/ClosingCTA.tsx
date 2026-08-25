import Link from "next/link";

type ClosingCTAProps = {
  heading: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

/**
 * S10 · Closing CTA. Reuses the site's existing `.button-primary` /
 * `.button-secondary` — those already carry the gradient/shadow treatment,
 * so this pattern doesn't need its own one-off button styling.
 */
export function ClosingCTA({ heading, primary, secondary }: ClosingCTAProps) {
  return (
    <div className="ds-env-tint rounded-sm p-12 md:p-16">
      <h2 className="display-title max-w-[16ch]" style={{ fontSize: "2.75rem", lineHeight: 1.06 }}>
        {heading}
      </h2>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href={primary.href} className="button button-primary">
          {primary.label}
        </Link>
        <Link href={secondary.href} className="button button-secondary">
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}
