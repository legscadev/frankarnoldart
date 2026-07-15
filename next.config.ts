import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Preview/staging use only — artwork imagery is copyright the artist.
    // The upstream WP host rejects requests without a browser User-Agent
    // (returns 406), so we skip Next's optimizer and let the browser fetch
    // the images directly. Flip this off (and move assets to /public or a
    // real CDN) before production.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frankarnoldart.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
