// lib/entity.ts
export const ELEMENTAR = {
  name: "ELEMENTAR",
  legalName: "ELEMENTAR — Parc de Știință și Curiozități",
  url: "https://elementar.md",

  descriptionShort:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor și excursiilor școlare, unde învățarea se realizează prin experimente practice de fizică, chimie și astronomie.",

  descriptionLong:
    "Elementar este un parc interactiv de știință din Chișinău, dedicat copiilor, familiilor și excursiilor școlare. Aici copiii explorează știința prin experiențe practice și demonstrații ghidate, cu teme din fizică, chimie și astronomie. Parcul este situat în Port Mall, etajul 4, și oferă activități STEM adaptate diferitelor grupe de vârstă.",

  phone: "+37379010277",
  email: "office@elementar.md",

  address: {
    streetAddress: "Strada Mihai Sadoveanu 42/6, Port Mall, etajul 4",
    addressLocality: "Chișinău",
    addressRegion: "Municipiul Chișinău",
    postalCode: "MD-2075",
    addressCountry: "MD",
  },

  openingHours: [
    // format Schema.org: "Mo-Su 10:00-22:00"
    "Mo-Su 10:00-22:00",
  ],

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
} as const
