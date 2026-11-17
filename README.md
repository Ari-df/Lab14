# mi-proyecto-seo (GLAB-S14 · Optimización y SEO)

Proyecto Next.js (Pages Router) con meta tags dinámicos, sitemap dinámico, next/image, lazy loading y next/font.

## Cómo ejecutarlo
```
npm install
npm run dev
```
Abrir http://localhost:3000 (necesita internet la primera vez para descargar las fuentes de Google).

## Dónde está cada parte del laboratorio
| Paso | Archivo |
|------|---------|
| Meta tags dinámicos | `components/Seo.js` (usado en `pages/index.js`, `pages/blog/index.js`, `pages/blog/[slug].js`, `pages/contacto.js`) |
| Sitemap dinámico | `pages/api/sitemap.js` (también en http://localhost:3000/sitemap.xml) |
| "Base de datos" del sitemap | `data/posts.json` + `lib/posts.js` |
| robots.txt | `public/robots.txt` |
| next/image | `pages/index.js` (imagen con `priority`) |
| Lazy loading | `pages/index.js` + `components/LargeComponent.js` |
| Fuentes | `pages/_app.js` |

## Pruebas para las capturas
- F12 → Elements → `<head>` para ver los meta tags.
- http://localhost:3000/api/sitemap para ver el XML (aparecen los 5 artículos del blog).
- F12 → Network → Img para ver la imagen en formato WebP.
- Agrega un artículo en `data/posts.json`, recarga el sitemap y verás la nueva URL.

## Para Google Search Console
Define el dominio real al publicar (por ejemplo en Vercel) con la variable `NEXT_PUBLIC_SITE_URL=https://tu-dominio.com`
y cambia la línea `Sitemap:` de `public/robots.txt`. Luego envía `/sitemap.xml` en Search Console.
