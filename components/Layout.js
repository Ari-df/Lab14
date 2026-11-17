import Link from "next/link";
import { useRouter } from "next/router";
import { SITE_NAME } from "../lib/site";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Layout({ children }) {
  const router = useRouter();

  // Marca como activo el link de la sección actual (también /blog/algo)
  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <span className="logo-mark">&lt;/&gt;</span>
            {SITE_NAME}
          </Link>
          <nav className="nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "nav-link active" : "nav-link"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 {SITE_NAME} · Laboratorio de Optimización y SEO con Next.js</p>
        </div>
      </footer>
    </>
  );
}
