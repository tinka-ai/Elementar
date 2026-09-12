/** @type {import('next').NextConfig} */
const nextConfig = {
  // NU folosi 'i18n' aici pentru App Router
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // Duplicat aici, nu doar in netlify.toml: @netlify/plugin-nextjs serveste
  // paginile HTML prin functia Next.js, iar regulile [[headers]] din
  // netlify.toml se aplica doar fisierelor statice servite direct din CDN
  // (imagini, CSS, JS) — nu si paginilor randate dinamic. Definirea lor aici
  // ii asigura ca Next.js insusi le ataseaza la fiecare raspuns.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "geolocation=(), camera=(), microphone=()" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'",
          },
        ],
      },
    ]
  },
}

export default nextConfig
