/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "scontent.fccu2-3.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
