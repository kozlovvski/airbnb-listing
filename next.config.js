const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.js', 'page.jsx', 'page.ts', 'page.tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
};

module.exports = withPWA(nextConfig);
