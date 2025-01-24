"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFile = exports.serve = void 0;

/**
 * Use this script to import deps
 * Finally, we just have to `deno cache deps.ts` for the entire application
 */
const { serve } = require("https://deno.land/std@0.223.0/http/server.ts");
exports.serve = serve;

const { renderFile } = require("https://deno.land/x/deno_ejs@v0.3.1/mod.ts");
exports.renderFile = renderFile;
