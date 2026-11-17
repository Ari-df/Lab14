import Link from "next/link";

export default function PostCard({ post }) {
  // Formatea la fecha en español, ej: 2 de noviembre de 2026
  const date = new Date(post.date + "T00:00:00").toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="card">
      <p className="card-meta">
        {date} · {post.readTime}
      </p>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.description}</p>
      <Link href={`/blog/${post.slug}`} className="card-link">
        Leer artículo →
      </Link>
    </article>
  );
}
