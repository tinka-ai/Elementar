// lib/schema.ts
import { ELEMENTAR } from "./entity"

type AnyRecord = Record<string, any>

/**
 * Curăță recursiv:
 * - elimină undefined / null / "" (string gol)
 * - elimină array-uri goale
 * - elimină obiecte goale
 */
function cleanDeep<T>(value: T): T {
  if (Array.isArray(value)) {
    const arr = value
      .map((v) => cleanDeep(v))
      .filter((v) => v !== undefined && v !== null && v !== "")
      .filter((v) => !(typeof v === "object" && v && !Array.isArray(v) && Object.keys(v as any).length === 0))

    return (arr.length ? (arr as any) : undefined) as any
  }

  if (value && typeof value === "object") {
    const obj: AnyRecord = {}
    for (const [k, v] of Object.entries(value as AnyRecord)) {
      const cleaned = cleanDeep(v)
      if (cleaned === undefined || cleaned === null || cleaned === "") continue
      if (typeof cleaned === "object" && cleaned && !Array.isArray(cleaned) && Object.keys(cleaned).length === 0) continue
      obj[k] = cleaned
    }
    return (Object.keys(obj).length ? (obj as any) : undefined) as any
  }

  return value
}

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return undefined
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

function getPostalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: ELEMENTAR.address.streetAddress,
    addressLocality: ELEMENTAR.address.addressLocality,
    addressRegion: ELEMENTAR.address.addressRegion,
    postalCode: ELEMENTAR.address.postalCode || undefined,
    addressCountry: ELEMENTAR.address.addressCountry,
  }
}

function getGeoCoordinates() {
  const geo = (ELEMENTAR as any).geo
  if (!geo?.latitude || !geo?.longitude) return undefined
  return {
    "@type": "GeoCoordinates",
    latitude: Number(geo.latitude),
    longitude: Number(geo.longitude),
  }
}

function getAreaServed() {
  // mai complet: Chișinău + Republica Moldova
  return [
    { "@type": "City", name: "Chișinău" },
    { "@type": "Country", name: "Republica Moldova" },
  ]
}

export function getElementarJsonLd() {
  const base = ELEMENTAR.url
  const orgId = `${base}/#organization`
  const businessId = `${base}/#localbusiness`

  const geo = getGeoCoordinates()
  const hasMap = absUrl((ELEMENTAR as any).hasMap)

  const aggregateRating =
    (ELEMENTAR as any).aggregateRating?.ratingValue && (ELEMENTAR as any).aggregateRating?.reviewCount
      ? {
          "@type": "AggregateRating",
          ratingValue: Number((ELEMENTAR as any).aggregateRating.ratingValue),
          reviewCount: Number((ELEMENTAR as any).aggregateRating.reviewCount),
        }
      : undefined

  const services: string[] = Array.isArray((ELEMENTAR as any).serviceType) ? (ELEMENTAR as any).serviceType : []

  const audience =
    Array.isArray((ELEMENTAR as any).audience) && (ELEMENTAR as any).audience.length
      ? (ELEMENTAR as any).audience.map((a: string) => ({ "@type": "Audience", name: a }))
      : undefined

  // Service graph (corect și fără warnings)
  const serviceGraph = services.map((s, idx) => ({
    "@type": "Service",
    "@id": `${base}/#service-${idx + 1}`,
    name: s,
    serviceType: s,
    provider: { "@id": orgId },
    areaServed: getAreaServed(),
    audience,
  }))

  const jsonLd: AnyRecord = {
    "@context": "https://schema.org",
    "@graph": [
      // 1) Organization
      {
        "@type": "Organization",
        "@id": orgId,
        name: ELEMENTAR.legalName,
        alternateName: ELEMENTAR.name,
        url: base,
        description: ELEMENTAR.descriptionShort,
        logo: absUrl(ELEMENTAR.logo),
        sameAs: ELEMENTAR.sameAs?.length ? ELEMENTAR.sameAs : undefined,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: ELEMENTAR.phone || undefined,
          email: ELEMENTAR.email || undefined,
          contactType: "customer support",
        },
        foundingDate: (ELEMENTAR as any).foundingDate || undefined,
      },

      // 2) LocalBusiness
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: ELEMENTAR.name,
        url: base,
        description: ELEMENTAR.descriptionLong || ELEMENTAR.descriptionShort,
        parentOrganization: { "@id": orgId },

        telephone: ELEMENTAR.phone || undefined,
        email: ELEMENTAR.email || undefined,

        priceRange: (ELEMENTAR as any).priceRange || undefined,
        slogan: (ELEMENTAR as any).slogan || undefined,

        image: (ELEMENTAR.images || []).map(absUrl).filter(Boolean),
        logo: absUrl(ELEMENTAR.logo),

        openingHours: ELEMENTAR.openingHours?.length ? ELEMENTAR.openingHours : undefined,

        address: getPostalAddress(),
        geo: geo || undefined,
        hasMap: hasMap || undefined,

        areaServed: getAreaServed(),
        knowsAbout: ELEMENTAR.topics?.length ? ELEMENTAR.topics : undefined,

        aggregateRating,
      },

      // 3) Place
      ELEMENTAR.locationName
        ? {
            "@type": "Place",
            "@id": `${base}/#place`,
            name: ELEMENTAR.locationName,
            address: getPostalAddress(),
            geo: geo || undefined,
            hasMap: hasMap || undefined,
          }
        : undefined,

      // 4) Services
      ...serviceGraph,
    ],
  }

  return cleanDeep(jsonLd)
}
