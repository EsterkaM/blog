import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/blog' : '';

const nextConfig: NextConfig = {
  basePath: basePath,
  env: {
    basePath
  },
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts'
  },
  reactStrictMode: true,
};

export default nextConfig;
