import fs from "fs";
import path from "path";

// Simulamos una base de datos con un archivo JSON.
// Si luego se usa MySQL o un CMS, solo hay que cambiar estas dos funciones.
const filePath = path.join(process.cwd(), "data", "posts.json");

export function getPosts() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function getPostBySlug(slug) {
  return getPosts().find((post) => post.slug === slug) || null;
}
