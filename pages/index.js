import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import PostCard from "../components/PostCard";
import { getPosts } from "../lib/posts";

// Lazy loading: este componente se descarga después de que carga la página
const LargeComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
  loading: () => <p className="container loading">Cargando checklist...</p>,
});

export default function Home({ latestPosts }) {
  return (
    <>
      <Seo
        title="Aprende SEO y rendimiento web con Next.js"
        description="Guías simples para mejorar el posicionamiento y la velocidad de tu sitio con Next.js: meta tags, sitemap, imágenes y fuentes."
        path="/"
      />

      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">Next.js · SEO · Rendimiento</p>
            <h1>Haz que tu web cargue rápido y se encuentre en Google</h1>
            <p className="hero-text">
              Aprende a optimizar tu aplicación con meta tags dinámicos, sitemaps,
              imágenes livianas y fuentes bien cargadas.
            </p>
            <div className="hero-actions">
              <Link href="/blog" className="btn btn-primary">
                Ver el blog
              </Link>
              <Link href="/contacto" className="btn btn-outline">
                Contáctanos
              </Link>
            </div>
          </div>

          {/* priority: la imagen principal se carga de inmediato */}
          <Image
            src="/images/seo-image.png"
            width={1200}
            height={630}
            alt="Ilustración sobre optimización SEO en Next.js"
            priority
            className="hero-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Últimos artículos</p>
          <h2>Lo más reciente del blog</h2>
          <div className="grid grid-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <LargeComponent />
    </>
  );
}

// Se ejecuta en el servidor al compilar: aquí leemos los datos
export async function getStaticProps() {
  const latestPosts = getPosts()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return { props: { latestPosts } };
}
