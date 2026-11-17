import Head from "next/head";
import { SITE_URL, SITE_NAME } from "../lib/site";

// Meta tags reutilizables: cada página solo pasa su título, descripción y ruta
export default function Seo({ title, description, path = "/", type = "website" }) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}/images/seo-image.png`; // Open Graph pide URL absoluta

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph: vista previa en Facebook, WhatsApp, LinkedIn */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="google-site-verification" content="-dkYT47ZdQAWTq1vWgkIOuseJFbQPu25aUEb_hn1RtQ" />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
