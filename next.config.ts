/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ This allows production builds even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ This allows builds even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
