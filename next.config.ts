import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/FAQ",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
