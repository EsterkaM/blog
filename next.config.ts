import type { NextConfig } from "next";

export const basePath = '';

const nextConfig: NextConfig = {
  env: {
    basePath
  },
  output: 'export',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
};

export default nextConfig;
