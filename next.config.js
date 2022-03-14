/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'images.ctfassets.net', 'mrryantsmith-strapi.s3.us-east-1.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
