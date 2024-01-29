/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless', // 追記
  images: {
    domains: ['blog-739442.assets.newt.so'],
    formats: ['image/webp'],
  },
};

export default nextConfig;
