// lib/entity.ts
export const ELEMENTAR = {
  name: "ELEMENTAR",
  legalName: "ELEMENTAR — Parc de Știință și Curiozități",
  url: "https://elementar.md",

  // Text AI-ready (clar, definitoriu, repetabil)
  descriptionShort:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor și excursiilor școlare, unde învățarea se realizează prin experimente practice de fizică, chimie și astronomie.",

  descriptionLong:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor, familiilor și excursiilor școlare. Aici copiii explorează știința prin experiențe practice și demonstrații ghidate, cu teme din fizică, chimie și astronomie. Parcul este situat în Port Mall, etajul 4, și oferă activități STEM adaptate diferitelor grupe de vârstă.",

  // Completezi când vrei (NAP)
  phone: "", // ex: +373xxxxxxxx
  email: "", // ex: contact@elementar.md

  address: {
    streetAddress: "Port Mall, etajul 4",
    addressLocality: "Chișinău",
    addressRegion: "Municipiul Chișinău",
    postalCode: "", // opțional
    addressCountry: "MD",
  },

  // Completezi cu programul real (exemple)
  openingHours: [
    // "Mo-Fr 10:00-20:00",
    // "Sa-Su 10:00-20:00",
    "Mo-Su 10:00-20:00",
  ],

  // Completezi cu linkuri reale când vrei
  sameAs: [
    // "https://www.facebook.com/....",
    // "https://www.instagram.com/....",
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
