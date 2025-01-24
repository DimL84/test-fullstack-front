import { renderFile } from "../deps.ts";
import "./scripts.ts";
import { testimonials, getThreeTopTestimonials } from "./testimonials.ts";

// Fonction pour gérer les requêtes
async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    try {
      const body = await renderFile("views/index.html");
      return new Response(body, {
        headers: { "Content-Type": "text/html" },
        status: 200,
      });
    } catch (error) {
      console.error("Erreur de rendu EJS :", error);
      return new Response("Erreur interne du serveur", { status: 500 });
    }
  }

  // Implémentation de l'API "/api/testimonials/top"
  if (url.pathname === "/api/testimonials/top") {
    const topTestimonials = getThreeTopTestimonials(testimonials);
    return new Response(JSON.stringify(topTestimonials), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }

  return new Response("Page non trouvée", { status: 404 });
}

console.log("🚀 Serveur Deno en cours d'exécution : http://localhost:8000");
Deno.serve({ port: 8000 }, handler);
