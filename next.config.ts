import type { NextConfig } from "next";
import path from "node:path";
import { projectSlugRedirects } from "./src/content/projects";

const nextConfig: NextConfig = {
  images: {
    // In development only, serve the original files. Next resizes images with
    // `sharp`, which is not installed on a machine that cannot reach the npm
    // registry, and its fallback stalls on large screenshots: a request for one
    // size can hang for good and the frame stays blank. Production builds are
    // unaffected and still optimise every image.
    unoptimized: process.env.NODE_ENV !== "production",
  },
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return Object.entries(projectSlugRedirects).map(([from, to]) => ({
      source: `/work/${from}`,
      destination: `/work/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
