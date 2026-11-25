import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages project sites are served from /<repository-name>.
  // Leave this empty for deployments mounted at a domain root.
  basePath: process.env.SITE_BASE_PATH ?? "",
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
