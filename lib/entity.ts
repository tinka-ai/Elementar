// lib/entity.ts
export const ELEMENTAR = {
  name: "ELEMENTAR",
  legalName: "ELEMENTAR — Parc de Știință și Curiozități",
  url: "https://elementar.md",

  logo: "/images/logo-elementara-new.webp",
  images: [
    "/images/interactive-physics-experiment.webp",
    "/images/interactive-biology-microscope.webp",
    "/images/astronomie-planetariu-tehnologie.webp",
    "/images/optical-illusions-science-exhibit.webp",
  ],

  // 📍 Locație clară pentru AI
  locationName: "Mircea cel Bătrân 20/1, Chișinău",

  // Coordonate confirmate de client (2026-11-22), extrase din link-ul oficial
  // de Waze al locației (waze.com/ul/hu8ke9ktzu -> ll.47.047555,28.891146).
  geo: { latitude: 47.047555, longitude: 28.891146 } as { latitude: number; longitude: number } | undefined,

  // Link Google Maps dat de client (share link al locației exacte, nu cautare text)
  hasMap: "https://maps.app.goo.gl/91UhYR7RvMjckLzy5",

  descriptionShort:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor și excursiilor școlare, unde învățarea se realizează prin experimente practice de fizică, chimie și astronomie.",

  descriptionLong:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor, familiilor și excursiilor școlare. Aici copiii explorează știința prin experiențe practice și demonstrații ghidate, cu teme din fizică, chimie și astronomie. Parcul este situat pe Mircea cel Bătrân 20/1, Chișinău, și oferă activități STEM adaptate diferitelor grupe de vârstă.",

  phone: "+37379010277",
  email: "contact@elementar.md",

  address: {
    streetAddress: "Mircea cel Bătrân 20/1",
    addressLocality: "Chișinău",
    addressRegion: "Municipiul Chișinău",
    // ⚠️ Cod poștal estimat (interval 2-22 pe stradă) — de confirmat.
    postalCode: "MD-2044",
    addressCountry: "MD",
  },

  openingHours: ["Tu-Su 10:00-20:00"],

  // Verificate manual (2026-09-28): profilul de Instagram confirmat "elementar.md";
  // link-ul de Facebook e cel folosit si in footer (share-link verificat, redirectioneaza
  // catre pagina reala "Element Ar | Chisinau").
  sameAs: [
    "https://www.facebook.com/share/1BrBpvo3o1/",
    "https://www.instagram.com/elementar.md/",
  ],

  audience: [
    "Copii",
    "Adolescenți",
    "Familii",
    "Școli și grupuri organizate",
  ],

  topics: [
    "Fizică",
    "Chimie",
    "Biologie",
    "Astronomie",
    "Matematică",
    "STEM",
  ],

  areaServed: ["Chișinău", "Republica Moldova"],

  // ⭐ Google Reviews (valori reale)
  aggregateRating: {
    ratingValue: 4.8,
    reviewCount: 6,
  },

  priceRange: "100-400 MDL",

  slogan:
    "Locul unde joaca, arta și experimentul se transformă în descoperire.",

  foundingDate: "2023",

  serviceType: [
    "Parc interactiv de știință",
    "Activități educative pentru copii",
    "Excursii școlare STEM",
  ],
} as const
