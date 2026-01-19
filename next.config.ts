import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  // This helps if you have nested folders/lockfiles
  outputFileTracingRoot: "../../", 
  // Helps handle heavy framer-motion/component libraries
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;