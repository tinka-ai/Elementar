/** @type {import('next').NextConfig} */ 
const nextConfig = {
  // NU folosi 'i18n' aici pentru App Router
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}

export default nextConfig
