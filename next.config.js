/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
        pathname: "/v2/**",
      },
    ],
  },
};

module.exports = nextConfig;
