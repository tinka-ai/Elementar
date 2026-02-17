// lib/entity.ts
export const ELEMENTAR = {
  name: "ELEMENTAR",
  legalName: "ELEMENTAR — Parc de Știință și Curiozități",
  url: "https://elementar.md",

  logo: "/images/logo-elementara-new.png",
  images: [
    "/images/interactive-physics-experiment.png",
    "/images/interactive-biology-microscope.png",
    "/images/astronomie-planetariu-tehnologie.png",
    "/images/optical-illusions-science-exhibit.png",
  ],

  // Locația (uman + AI)
  locationName: "Port Mall Chișinău, etajul 4",

  // Coordonate reale (din Google Maps)
  geo: { latitude: 47.0706168, longitude: 28.8885452 },

  // Link hartă (Google Maps)
  hasMap:
    "https://www.google.com/maps/place/ELEMENTAR/@47.0706204,28.8859703,17z/data=!3m1!4b1!4m6!3m5!1s0x40c97dd06a999bb7:0xd85eaf85ec5f5afc!8m2!3d47.0706168!4d28.8885452!16s%2Fg%2F11xyyqhxd8?entry=tts",

  descriptionShort:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor și excursiilor școlare, unde învățarea se realizează prin experimente practice de fizică, chimie și astronomie.",

  descriptionLong:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor, familiilor și excursiilor școlare. Aici copiii explorează știința prin experiențe practice și demonstrații ghidate, cu teme din fizică, chimie și astronomie. Parcul este situat în Port Mall, etajul 4, și oferă activități STEM adaptate diferitelor grupe de vârstă.",

  phone: "+37379010277",
  email: "office@elementar.md",

  address: {
    streetAddress: "Strada Mihai Sadoveanu 42/6",
    addressLocality: "Chișinău",
    addressRegion: "Municipiul Chișinău",
    postalCode: "MD-2075",
    addressCountry: "MD",
  },

  openingHours: ["Mo-Su 10:00-22:00"],

  sameAs: [
    "https://facebook.com/elementara.ro",
    "https://instagram.com/elementara.ro",
  ],

  audience: ["Copii", "Adolescenți", "Familii", "Școli și grupuri organizate"],

  topics: ["Fizică", "Chimie", "Biologie", "Astronomie", "Matematică", "STEM"],

  areaServed: ["Chișinău", "Republica Moldova"],

  // ✅ completări importante pentru AI
  priceRange: "100–400 MDL", // (în acord cu tarifele tale actuale)
  slogan: "Știință pe care o atingi. Curiozități pe care le înțelegi.",
  serviceType: [
    "Parc interactiv de știință",
    "Activități educative STEM pentru copii",
    "Excursii școlare ghidate",
    "Ateliere și demonstrații științifice",
  ],

  // opțional (doar dacă vrei): foundingDate: "2025-01-01",
} as const
