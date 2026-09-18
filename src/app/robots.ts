import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // Deliberately no `disallow` for /work/*. The case studies are kept out
    // of search with `noindex` on the pages themselves, and a crawler has to
    // be allowed to fetch a page to read that. Disallowing them would stop
    // the fetch, leave the directive unread, and still let a URL found
    // through a link be listed bare.
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mithunraju.in/sitemap.xml",
  };
}
