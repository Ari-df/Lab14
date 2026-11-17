import { SITE_URL } from "../../lib/site";
import { getPosts } from "../../lib/posts";

export default function handler(req, res) {
  // Páginas fijas del sitio
  const staticUrls = ["/", "/blog", "/contacto"];

  // Páginas dinámicas: una por cada publicación de la "base de datos"
  const posts = getPosts();

  const staticXml = staticUrls
    .map((url) => `<url><loc>${SITE_URL}${url}</loc></url>`)
    .join("");

  const postsXml = posts
    .map(
      (post) =>
        `<url><loc>${SITE_URL}/blog/${post.slug}</loc><lastmod>${post.date}</lastmod></url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticXml}${postsXml}</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
