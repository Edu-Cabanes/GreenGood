/** @type {import('next').NextConfig} */
const nextConfig = {
  // Direct turbopack config with absolute path
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
