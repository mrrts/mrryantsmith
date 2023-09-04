/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
