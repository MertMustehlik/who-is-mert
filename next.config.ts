import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  basePath: process.env.NODE_ENV === "production" ? "/who-is-mert" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
