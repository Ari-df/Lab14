/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Permite abrir /sitemap.xml (lo que Google espera) y que use el endpoint /api/sitemap
  async rewrites() {
    return [{ source: "/sitemap.xml", destination: "/api/sitemap" }];
  },
};

module.exports = nextConfig;
