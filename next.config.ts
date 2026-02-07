import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/semrush-wizard",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
