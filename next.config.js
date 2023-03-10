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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
}

module.exports = nextConfig
