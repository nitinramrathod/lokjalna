/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

    images: {
        remotePatterns: process.env.NEXT_PUBLIC_IMAGE_PATTERNS
      ? process.env.NEXT_PUBLIC_IMAGE_PATTERNS.split(',').map((domain) => ({
        protocol: 'https',
        hostname: domain.trim(),
      }))
      : [],
    unoptimized: true
    }
};

export default nextConfig;
