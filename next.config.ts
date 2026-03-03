import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your Next.js configuration options go here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;