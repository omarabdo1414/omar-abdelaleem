import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    return config;
  },
  // Add empty turbopack config to silence the warning
  // We use webpack for react-pdf compatibility
  turbopack: {},
};

export default nextConfig;
