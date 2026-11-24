import type { NextConfig } from "next";
import { join } from "node:path";

/**
 * Edición de operador: una app Next.js aparte que reutiliza las lecciones y los componentes de ../src.
 * Se construye con `npm run build:operador` y se prueba con `npm run dev:operador` (puerto 3001).
 */
const dev = process.env.NODE_ENV !== "production";

// Política de seguridad del contenido: todo es propio. Sin vídeos externos, sin simulaciones de terceros y sin nube
// (el progreso se queda en el navegador).
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "frame-src 'none'",
  `connect-src 'self'${dev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  // Los componentes compartidos miran esta variable para los pocos detalles que cambian (src/lib/edicion.ts)
  env: { NEXT_PUBLIC_EDICION: "operador" },
  // Las lecciones y los componentes viven fuera de esta carpeta, en ../src
  experimental: { externalDir: true },
  outputFileTracingRoot: join(__dirname, ".."),
  // Las fotos se sirven tal cual desde /media (ya están reescaladas, unos 95 KB de media), como los pictogramas,
  // sin pasar por el optimizador de imágenes de Vercel: en la primera publicación no se veían a través de él.
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
