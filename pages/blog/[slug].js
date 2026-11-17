import Link from "next/link";
import Seo from "../../components/Seo";
import { getPosts, getPostBySlug } from "../../lib/posts";

export default function Post({ post }) {
  return (
    <>
      {/* Cada artículo tiene sus propios meta tags */}
      <Seo
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
      />

      <article className="section">
        <div className="container article">
          <Link href="/blog" className="back">
            ← Volver al blog
          </Link>
          <p className="card-meta">
            {post.date} · {post.readTime}
          </p>
          <h1>{post.title}</h1>
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </>
  );
}

// Le dice a Next.js qué rutas /blog/[slug] debe generar
export async function getStaticPaths() {
  const paths = getPosts().map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}
