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

  // 📍 Locație clară pentru AI
  locationName: "Port Mall Chișinău, etajul 4",

  // 🔹 Adaugă coordonate reale dacă le confirmi din Google Maps
  // geo: {
  //   latitude: 47.XXXXXX,
  //   longitude: 28.XXXXXX,
  // },

  // 🔹 Link hartă direct Google Maps (opțional dar recomandat)
  // hasMap: "https://maps.app.goo.gl/N3kLzviesNELiM3s6",

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

  // ⭐ Google Reviews (valori reale din Google Maps)
 aggregateRating: { ratingValue: 4.8, reviewCount: 6 },

  priceRange: "200 MDL",

  slogan:
    "Locul unde joaca, arta și experimentul se transformă în descoperire.",

  foundingDate: "2023",

  serviceType: [
    "Parc interactiv de știință",
    "Activități educative pentru copii",
    "Excursii școlare STEM",
  ],
} as const
