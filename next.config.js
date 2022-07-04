/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.js', 'page.jsx', 'page.ts', 'page.tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    PUBLIC_URL: process.env.VERCEL_URL || 'localhost:3000',
  },
};

module.exports = nextConfig;
