import { useState } from "react";
import Seo from "../components/Seo";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); // Solo demostrativo: no se envía a ningún servidor
  };

  return (
    <>
      <Seo
        title="Contacto"
        description="Escríbenos para resolver tus dudas sobre SEO y optimización de aplicaciones web con Next.js."
        path="/contacto"
      />

      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Contacto</p>
          <h1>Hablemos de tu proyecto</h1>
          <p className="hero-text">Déjanos un mensaje y te responderemos lo antes posible.</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
          {sent ? (
            <div className="success">
              <h2>¡Mensaje enviado!</h2>
              <p>Gracias por escribirnos, te responderemos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <label>
                Nombre
                <input type="text" required placeholder="Tu nombre" />
              </label>
              <label>
                Correo
                <input type="email" required placeholder="correo@ejemplo.com" />
              </label>
              <label>
                Mensaje
                <textarea rows="5" required placeholder="¿En qué podemos ayudarte?" />
              </label>
              <button type="submit" className="btn btn-primary">
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
