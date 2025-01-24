"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const deps_ts_1 = require("../deps.ts");
require("../src/scripts.ts");
function handler(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL(req.url);
        if (url.pathname === "/") {
            try {
                const body = yield (0, deps_ts_1.renderFile)("views/index.html");
                return new Response(body, {
                    headers: { "Content-Type": "text/html" },
                    status: 200,
                });
            }
            catch (error) {
                console.error("Erreur de rendu EJS :", error);
                return new Response("Erreur interne du serveur", { status: 500 });
            }
        }
        // Implémenter la requête api "/api/testimonials/top"
        return new Response("Page non trouvée", { status: 404 });
    });
}
console.log(`🚀 Serveur Deno en cours d'exécution : http://localhost:8000`);
Deno.serve(handler);
