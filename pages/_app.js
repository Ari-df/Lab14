import { Inter, Fraunces } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/globals.css";

// next/font descarga las fuentes al compilar, no hay peticiones a Google al visitar el sitio
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-title" });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${fraunces.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
