/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com'],
  },
  webpack: (config, { buildId, dev, isServer, webpack }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': './src',
        '@/lib': './src/lib',
        '@/components': './src/components'
      }
    };
    return config;
  }
}

module.exports = nextConfig
