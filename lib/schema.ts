// lib/schema.ts
import { ELEMENTAR } from "./entity";

function clean<T extends Record<string, any>>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function getElementarJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],

    name: ELEMENTAR.legalName,
    alternateName: ELEMENTAR.name,
    url: ELEMENTAR.url,
    description: ELEMENTAR.descriptionShort,

    address: {
      "@type": "PostalAddress",
      streetAddress: ELEMENTAR.address.streetAddress,
      addressLocality: ELEMENTAR.address.addressLocality,
      addressRegion: ELEMENTAR.address.addressRegion,
      postalCode: ELEMENTAR.address.postalCode || undefined,
      addressCountry: ELEMENTAR.address.addressCountry,
    },

    telephone: ELEMENTAR.phone || undefined,
    email: ELEMENTAR.email || undefined,

    openingHours: ELEMENTAR.openingHours?.length ? ELEMENTAR.openingHours : undefined,
    sameAs: ELEMENTAR.sameAs?.length ? ELEMENTAR.sameAs : undefined,
  };

  return clean(jsonLd);
}
