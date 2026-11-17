import Seo from "../../components/Seo";
import PostCard from "../../components/PostCard";
import { getPosts } from "../../lib/posts";

export default function Blog({ posts }) {
  return (
    <>
      <Seo
        title="Blog de SEO y optimización web"
        description="Artículos para principiantes sobre meta tags, sitemaps, imágenes y rendimiento en Next.js."
        path="/blog"
      />

      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Artículos sobre SEO y rendimiento</h1>
          <p className="hero-text">Guías cortas y prácticas para mejorar tu sitio web paso a paso.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = getPosts().sort((a, b) => b.date.localeCompare(a.date));
  return { props: { posts } };
}
