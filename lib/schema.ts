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
      // elimină obiecte goale din array
      .filter((v) => !(typeof v === "object" && v && !Array.isArray(v) && Object.keys(v as any).length === 0))

    return (arr.length ? (arr as any) : undefined) as any
  }

  if (value && typeof value === "object") {
    const obj: AnyRecord = {}
    for (const [k, v] of Object.entries(value as AnyRecord)) {
      const cleaned = cleanDeep(v)
      if (cleaned === undefined || cleaned === null || cleaned === "") continue
      // elimină obiecte goale
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

export function getElementarJsonLd() {
  const orgId = `${ELEMENTAR.url}/#organization`

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

  const jsonLd: AnyRecord = {
    "@context": "https://schema.org",
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
    address: getPostalAddress(),

    // Locație (Place) — include și geo + hasMap (recomandat)
    location: ELEMENTAR.locationName
      ? {
          "@type": "Place",
          name: ELEMENTAR.locationName,
          address: getPostalAddress(),
          geo: geo || undefined,
          hasMap: hasMap || undefined,
        }
      : undefined,

    // (opțional) păstrăm și la root — nu strică, dar Place e cel mai important
    geo: geo || undefined,
    hasMap: hasMap || undefined,

    // Semantic
    areaServed: (ELEMENTAR as any).areaServed?.length ? (ELEMENTAR as any).areaServed : undefined,
    knowsAbout: ELEMENTAR.topics?.length ? ELEMENTAR.topics : undefined,
    audience: ELEMENTAR.audience?.length
      ? ELEMENTAR.audience.map((a) => ({ "@type": "Audience", name: a }))
      : undefined,

    // Social
    sameAs: ELEMENTAR.sameAs?.length ? ELEMENTAR.sameAs : undefined,

    // Opțional
    foundingDate: (ELEMENTAR as any).foundingDate || undefined,
    aggregateRating,
  }

  return cleanDeep(jsonLd)
}
