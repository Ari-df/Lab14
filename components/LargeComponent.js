// Componente "pesado" que se carga con lazy loading (ver pages/index.js)
const checklist = [
  { title: "Meta tags únicos", text: "Título y descripción distintos en cada página." },
  { title: "Imágenes livianas", text: "Formato WebP y tamaño adecuado con next/image." },
  { title: "Sitemap actualizado", text: "Google descubre tus páginas nuevas más rápido." },
  { title: "Fuentes optimizadas", text: "Sin peticiones externas gracias a next/font." },
];

export default function LargeComponent() {
  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow eyebrow-light">Checklist</p>
        <h2>Lo que revisa Google antes de posicionarte</h2>
        <div className="grid grid-4">
          {checklist.map((item, i) => (
            <div key={item.title} className="check">
              <span className="check-num">0{i + 1}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
