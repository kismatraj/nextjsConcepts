/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseApiUri: "http://172.16.21.63:5001/api/v1",
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "http://172.16.21.63:5001/api/v1:path*", // Proxy to Backend
      },
    ];
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/v1/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://172.16.21.63:5001",
          }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
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
