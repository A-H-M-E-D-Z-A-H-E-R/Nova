
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Nova",
  reactCompiler: true,
  devIndicators: false,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.100.2"],
};

export default nextConfig;

