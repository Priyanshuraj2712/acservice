/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Helps with static hosting on GoDaddy
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
