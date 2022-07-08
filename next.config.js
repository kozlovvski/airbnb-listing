const withPWA = require('next-pwa');
const {
  GRAPHQL_REWRITE_PATH,
} = require('./services/graphql/graphql.constants');

const mongoGraphQlEndpoint = process.env.MONGO_GRAPHQL_ENDPOINT;

if (!mongoGraphQlEndpoint) {
  throw Error('MONGO_GRAPHQL_ENDPOINT is not defined');
}

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
  rewrites() {
    return [
      { source: GRAPHQL_REWRITE_PATH, destination: mongoGraphQlEndpoint },
    ];
  },
};

module.exports = withPWA(nextConfig);
