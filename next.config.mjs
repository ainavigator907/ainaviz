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
  async redirects() {
    return [
      { source: "/case-studies", destination: "/articles", permanent: true },
      { source: "/guides", destination: "/articles", permanent: true },
      { source: "/reviews", destination: "/articles", permanent: true },
      { source: "/reviews/:slug", destination: "/articles", permanent: true },
      { source: "/tools", destination: "/lab", permanent: true },
    ];
  },
  // i18n is handled via defaultLocale in App Router
  experimental: {},
};

export default nextConfig;
