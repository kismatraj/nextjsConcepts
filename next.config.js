/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
