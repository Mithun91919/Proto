import type { MetadataRoute } from "next";

const baseUrl = "https://mithunraju.in";

export default function sitemap(): MetadataRoute.Sitemap {
  // /components is the design system, linked from the footer as a
  // colophon. It is a real page a reader may want to find, so it belongs
  // here now that something points at it.
  const staticRoutes = ["", "/work", "/about", "/resume", "/components"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // Case studies are deliberately absent. They carry `noindex` (see
  // `content/seo.ts`), and listing a URL in a sitemap is a request to index
  // it — the two would be arguing with each other. `/work` stays, so the
  // work is still discoverable; the individual studies are for people who
  // have the link.
  return staticRoutes;
}
