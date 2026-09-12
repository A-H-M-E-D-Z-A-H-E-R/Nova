import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactCompiler: true,
  devIndicators: false,

  allowedDevOrigins: ["192.168.100.2"],
};

export default nextConfig;