/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['streamcoimg-a.akamaihd.net'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'streamcoimg-a.akamaihd.net',
      port: '',
      pathname: '/000/**',
    }],
    unoptimized: true,
  },
  distDir: 'dist',
  exportPathMap: () => ({
    '/': { page: '/index' },
  }),
}

module.exports = nextConfig
