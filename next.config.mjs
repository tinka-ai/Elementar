/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ro', 'en', 'ru'],
    defaultLocale: 'ro',
    localeDetection: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
