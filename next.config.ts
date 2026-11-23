import type { NextConfig } from "next";

const dev = process.env.NODE_ENV !== "production";

// Política de seguridad del contenido: solo se carga lo propio, los vídeos de YouTube sin cookies, sus miniaturas,
// las simulaciones PhET (Universidad de Colorado)
// y la nube de Supabase. Next necesita scripts y estilos en línea; en desarrollo, además, eval para recargar en caliente.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://i.ytimg.com",
  "font-src 'self'",
  "frame-src https://www.youtube-nocookie.com https://phet.colorado.edu",
  `connect-src 'self' https://*.supabase.co wss://*.supabase.co${dev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
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
