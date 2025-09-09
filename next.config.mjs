/** @type {import('next').NextConfig} */
const nextConfig = {
  // NU folosi 'i18n' aici pentru App Router
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  // ✅ redirecționări pentru URL-uri scrise cu literă mare / vechi
  async redirects() {
    return [
      { source: '/Contact',  destination: '/contact',  permanent: true },
      { source: '/Contact/', destination: '/contact',  permanent: true },
      { source: '/Domenii',  destination: '/domenii',  permanent: true },
      { source: '/Domenii/', destination: '/domenii',  permanent: true },
      // poți adăuga oricâte rute similare mai ai nevoie
    ]
  },
}

export default nextConfig
