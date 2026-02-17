// lib/schema.ts
import { ELEMENTAR } from "./entity"

function clean<T extends Record<string, any>>(obj: T): T {
  // elimină câmpurile undefined / null (prin JSON stringify/parse)
  return JSON.parse(JSON.stringify(obj))
}

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return undefined
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export function getElementarJsonLd() {
  const orgId = `${ELEMENTAR.url}/#organization`

  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    // Organization + LocalBusiness + EducationalOrganization (entitate completă pentru AI)
    "@type": ["Organization", "LocalBusiness", "EducationalOrganization"],
    "@id": orgId,

    name: ELEMENTAR.legalName,
    alternateName: ELEMENTAR.name,
    url: ELEMENTAR.url,
    description: ELEMENTAR.descriptionShort,

    logo: absUrl(ELEMENTAR.logo),
    image: (ELEMENTAR.images || []).map(absUrl).filter(Boolean),

    telephone: ELEMENTAR.phone || undefined,
    email: ELEMENTAR.email || undefined,

    // Prețuri / poziționare
    priceRange: (ELEMENTAR as any).priceRange || undefined,
    slogan: (ELEMENTAR as any).slogan || undefined,
    serviceType: (ELEMENTAR as any).serviceType?.length ? (ELEMENTAR as any).serviceType : undefined,

    // Program
    openingHours: ELEMENTAR.openingHours?.length ? ELEMENTAR.openingHours : undefined,

    // Adresă
    address: {
      "@type": "PostalAddress",
      streetAddress: ELEMENTAR.address.streetAddress,
      addressLocality: ELEMENTAR.address.addressLocality,
      addressRegion: ELEMENTAR.address.addressRegion,
      postalCode: ELEMENTAR.address.postalCode || undefined,
      addressCountry: ELEMENTAR.address.addressCountry,
    },

    // “Port Mall, etajul 4” + adresă (Place)
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

    // Coordonate reale
    geo: (ELEMENTAR as any).geo?.latitude && (ELEMENTAR as any).geo?.longitude
      ? {
          "@type": "GeoCoordinates",
          latitude: (ELEMENTAR as any).geo.latitude,
          longitude: (ELEMENTAR as any).geo.longitude,
        }
      : undefined,

    // Harta Google
    hasMap: (ELEMENTAR as any).hasMap ? absUrl((ELEMENTAR as any).hasMap) : undefined,

    // Relevanță conversațională / semantică
    areaServed: (ELEMENTAR as any).areaServed?.length ? (ELEMENTAR as any).areaServed : undefined,
    knowsAbout: ELEMENTAR.topics?.length ? ELEMENTAR.topics : undefined,
    audience: ELEMENTAR.audience?.length
      ? ELEMENTAR.audience.map((a) => ({ "@type": "Audience", name: a }))
      : undefined,

    // Social
    sameAs: ELEMENTAR.sameAs?.length ? ELEMENTAR.sameAs : undefined,

    // Opțional: foundingDate (dacă îl adaugi în entity.ts)
    foundingDate: (ELEMENTAR as any).foundingDate || undefined,

    // Opțional: aggregateRating (dacă îl adaugi în entity.ts)
    aggregateRating: (ELEMENTAR as any).aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: (ELEMENTAR as any).aggregateRating.ratingValue,
          reviewCount: (ELEMENTAR as any).aggregateRating.reviewCount,
        }
      : undefined,
  }

  return clean(jsonLd)
}
