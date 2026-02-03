/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel deployment
  // optimizeFonts: false, // Enable font optimization
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: false,
    domains: ['images.pexels.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: true,
};

module.exports = nextConfig;
