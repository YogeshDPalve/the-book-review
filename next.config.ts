import type { NextConfig } from "next";
 

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "static.wixstatic.com", protocol: "https" }],
  },
};

export default nextConfig;
