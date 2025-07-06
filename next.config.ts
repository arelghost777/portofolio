import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   typescript: {
    ignoreBuildErrors: true, // À éviter en production
  },
};

export default nextConfig;
