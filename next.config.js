/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return {
      "Access-Control-Allow-Origin": ["http://172.16.21.63:5001/api/v1"],
      "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"],
    };
  },
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
