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

// Fallback “real” (din linkul tău Google Maps)
const FALLBACK_GEO = { latitude: 47.0706168, longitude: 28.8885452 }
const FALLBACK_HAS_MAP =
  "https://www.google.com/maps/place/ELEMENTAR/@47.0706204,28.8859703,17z/data=!4m6!3m5!1s0x40c97dd06a999bb7:0xd85eaf85ec5f5afc!8m2!3d47.0706168!4d28.8885452!16s%2Fg%2F11xyyqhxd8"

export function getElementarJsonLd() {
  const geoFromEntity = (ELEMENTAR as any).geo
  const hasMapFromEntity = (ELEMENTAR as any).hasMap

  const lat =
    typeof geoFromEntity?.latitude === "number" ? geoFromEntity.latitude : FALLBACK_GEO.latitude
  const lng =
    typeof geoFromEntity?.longitude === "number" ? geoFromEntity.longitude : FALLBACK_GEO.longitude

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "EducationalOrganization"],
    "@id": `${ELEMENTAR.url}/#organization`,

    name: ELEMENTAR.legalName,
    alternateName: ELEMENTAR.name,
    url: ELEMENTAR.url,
    description: ELEMENTAR.descriptionShort,

    // Branding
    logo: absUrl((ELEMENTAR as any).logo) || absUrl("/images/logo-elementara-new.png"),
    image: ((ELEMENTAR as any).images?.length ? (ELEMENTAR as any).images : []).map(absUrl),

    // Contact
    telephone: ELEMENTAR.phone || undefined,
    email: ELEMENTAR.email || undefined,

    // Adresă (NAP)
    address: {
      "@type": "PostalAddress",
      streetAddress: ELEMENTAR.address.streetAddress,
      addressLocality: ELEMENTAR.address.addressLocality,
      addressRegion: ELEMENTAR.address.addressRegion,
      postalCode: ELEMENTAR.address.postalCode || undefined,
      addressCountry: ELEMENTAR.address.addressCountry,
    },

    // “Port Mall, etajul 4” ca Place (dacă ai locationName în entity)
    location: (ELEMENTAR as any).locationName
      ? {
          "@type": "Place",
          name: (ELEMENTAR as any).locationName,
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

    // Geo (mereu prezent, cu fallback)
    geo:
      typeof lat === "number" && typeof lng === "number"
        ? { "@type": "GeoCoordinates", latitude: lat, longitude: lng }
        : undefined,

    // Hartă (mereu prezent, cu fallback)
    hasMap: hasMapFromEntity || FALLBACK_HAS_MAP,

    // Relevanță conversațională (AI / GEO)
    areaServed: (ELEMENTAR as any).areaServed?.length ? (ELEMENTAR as any).areaServed : undefined,
    knowsAbout: (ELEMENTAR as any).topics?.length ? (ELEMENTAR as any).topics : undefined,
    audience: (ELEMENTAR as any).audience?.length
      ? (ELEMENTAR as any).audience.map((a: string) => ({ "@type": "Audience", name: a }))
      : undefined,

    // Social
    sameAs: ELEMENTAR.sameAs?.length ? ELEMENTAR.sameAs : undefined,
  }

  return clean(jsonLd)
}
