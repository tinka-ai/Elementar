// lib/entity.ts
export const ELEMENTAR = {
  name: "Elementar",
  legalName: "Elementar – Parc de Știință și Curiozități",
  url: "https://elementar.md",

  // Text AI-ready (identic peste tot)
  descriptionShort:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor și excursiilor școlare, unde învățarea se realizează prin experimente practice de fizică, chimie și astronomie.",

  descriptionLong:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor, familiilor și excursiilor școlare. Aici copiii explorează știința prin experiențe practice și demonstrații ghidate, cu teme din fizică, chimie și astronomie. Parcul este situat în Port Mall, etajul 4, și oferă activități STEM adaptate diferitelor grupe de vârstă.",

  address: {
    streetAddress: "Port Mall, etajul 4",
    addressLocality: "Chișinău",
    addressRegion: "Municipiul Chișinău",
    postalCode: "", // opțional
    addressCountry: "MD",
  },

  phone: "", // ex: +373...
  email: "", // ex: contact@...
  openingHours: [
    // completezi exact cu programul real
    "Mo-Su 10:00-20:00",
  ],

  sameAs: [
    // pui linkurile reale când vrei
    // "https://www.facebook.com/...",
    // "https://www.instagram.com/...",
  ],

  audience: [
    "Copii 5–14 ani",
    "Familii",
    "Clase primare și gimnaziale",
    "Profesori și instituții de învățământ",
  ],

  topics: [
    "Fizică",
    "Chimie",
    "Astronomie",
    "Electricitate",
    "Optică",
    "Magnetism",
    "STEM",
  ],
} as const;
