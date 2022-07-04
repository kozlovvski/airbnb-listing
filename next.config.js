/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.js', 'page.jsx', 'page.ts', 'page.tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
