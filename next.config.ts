import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { esmExternals: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
