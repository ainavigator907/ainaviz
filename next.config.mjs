/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Cloudflare Pages doesn't support Next.js image optimization out of the box
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // i18n is handled via defaultLocale in App Router
  experimental: {},
};

export default nextConfig;
