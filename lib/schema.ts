// lib/schema.ts
import { ELEMENTAR } from "./entity"

function clean<T extends Record<string, any>>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return undefined
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export function getElementarJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "EducationalOrganization"],
    "@id": `${ELEMENTAR.url}/#organization`,

    name: ELEMENTAR.legalName,
    alternateName: ELEMENTAR.name,
    url: ELEMENTAR.url,
    description: ELEMENTAR.descriptionShort,

    logo: absUrl(ELEMENTAR.logo) || absUrl("/images/logo-elementara-new.png"),
    image: (ELEMENTAR.images?.length ? ELEMENTAR.images : []).map(absUrl),

    telephone: ELEMENTAR.phone || undefined,
    email: ELEMENTAR.email || undefined,

    address: {
      "@type": "PostalAddress",
      streetAddress: ELEMENTAR.address.streetAddress,
      addressLocality: ELEMENTAR.address.addressLocality,
      addressRegion: ELEMENTAR.address.addressRegion,
      postalCode: ELEMENTAR.address.postalCode || undefined,
      addressCountry: ELEMENTAR.address.addressCountry,
    },

    // “Port Mall, etajul 4”
    location: ELEMENTAR.locationName
      ? {
          "@type": "Place",
          name: ELEMENTAR.locationName,
          address: {
            "@type": "PostalAddress",
            streetAddress: ELEMENTAR.address.streetAddress,
            addressLocality: ELEMENTAR.address.addressLocality,
            addressRegion: ELEMENTAR.address.addressRegion,
            postalCode: ELEMENTAR.address.postalCode || undefined,
            addressCountry: ELEMENTAR.address.addressCountry,
          },
        }
      : undefined,

    // Program
    openingHours: ELEMENTAR.openingHours?.length ? ELEMENTAR.openingHours : undefined,

    // Coordonate reale (opțional)
    geo:
      (ELEMENTAR as any).geo?.latitude && (ELEMENTAR as any).geo?.longitude
        ? {
            "@type": "GeoCoordinates",
            latitude: (ELEMENTAR as any).geo.latitude,
            longitude: (ELEMENTAR as any).geo.longitude,
          }
        : undefined,

    // Harta (opțional)
    hasMap: (ELEMENTAR as any).hasMap || undefined,

    // Relevanță conversațională
    areaServed: (ELEMENTAR as any).areaServed?.length ? (ELEMENTAR as any).areaServed : undefined,
    knowsAbout: ELEMENTAR.topics?.length ? ELEMENTAR.topics : undefined,
    audience: ELEMENTAR.audience?.length
      ? ELEMENTAR.audience.map((a) => ({ "@type": "Audience", name: a }))
      : undefined,

    sameAs: ELEMENTAR.sameAs?.length ? ELEMENTAR.sameAs : undefined,
  }

  return clean(jsonLd)
}
