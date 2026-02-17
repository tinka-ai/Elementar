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

    // ✅ Identitate stabilă (evită duplicările / ajută AI-ul să "lege" informațiile)
    "@id": `${ELEMENTAR.url}/#organization`,

    name: ELEMENTAR.legalName,
    alternateName: ELEMENTAR.name,
    url: ELEMENTAR.url,
    description: ELEMENTAR.descriptionShort,

    // ✅ Branding (ideal cu URL absolut)
    logo: absUrl(ELEMENTAR.logo) || absUrl("/images/logo-elementara-new.png"),
    image: (ELEMENTAR.images?.length ? ELEMENTAR.images : [
      "/images/interactive-physics-experiment.png",
      "/images/interactive-biology-microscope.png",
      "/images/astronomie-planetariu-tehnologie.png",
    ]).map(absUrl),

    // ✅ Contact
    telephone: ELEMENTAR.phone || undefined,
    email: ELEMENTAR.email || undefined,

    // ✅ Adresă
    address: {
      "@type": "PostalAddress",
      streetAddress: ELEMENTAR.address.streetAddress,
      addressLocality: ELEMENTAR.address.addressLocality,
      addressRegion: ELEMENTAR.address.addressRegion,
      postalCode: ELEMENTAR.address.postalCode || undefined,
      addressCountry: ELEMENTAR.address.addressCountry,
    },

    // ✅ "Port Mall, etajul 4" ca semnal de locație (fără să inventăm)
    location: ELEMENTAR.locationName
      ? {
          "@type": "Place",
          name: ELEMENTAR.locationName, // ex: "Port Mall Chișinău, etajul 4"
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

    // ✅ Program (dacă ai deja ca string list – păstrăm)
    openingHours: ELEMENTAR.openingHours?.length ? ELEMENTAR.openingHours : undefined,

    // ✅ Coordonate (DOAR dacă sunt reale și existente)
    geo:
      ELEMENTAR.geo?.latitude && ELEMENTAR.geo?.longitude
        ? {
            "@type": "GeoCoordinates",
            latitude: ELEMENTAR.geo.latitude,
            longitude: ELEMENTAR.geo.longitude,
          }
        : undefined,

    // ✅ Hartă (dacă ai link)
    hasMap: ELEMENTAR.hasMap || undefined,

    // ✅ Social
    sameAs: ELEMENTAR.sameAs?.length ? ELEMENTAR.sameAs : undefined,

    // ✅ Relevanță conversațională (GEO)
    areaServed: ELEMENTAR.areaServed?.length ? ELEMENTAR.areaServed : ["Chișinău", "Republica Moldova"],
    knowsAbout: ELEMENTAR.knowsAbout?.length
      ? ELEMENTAR.knowsAbout
      : [
          "activități educaționale pentru copii",
          "experimente științifice interactive",
          "STEM pentru copii",
          "fizică",
          "chimie",
          "biologie",
          "astronomie",
          "puzzle-uri logice",
          "excursii școlare",
        ],
  }

  return clean(jsonLd)
}
