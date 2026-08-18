import type { NextConfig } from "next";
import path from "node:path";
import { projectSlugRedirects } from "./src/content/projects";

const nextConfig: NextConfig = {
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
