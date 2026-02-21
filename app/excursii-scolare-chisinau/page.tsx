import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { ELEMENTAR } from "@/lib/entity"

export const metadata: Metadata = {
  title: "Excursii școlare în Chișinău | ELEMENTAR",
  description:
    "Excursii școlare interactive în Chișinău la ELEMENTAR – parc de știință din Port Mall. Experimente practice de fizică, chimie și astronomie pentru clase și grupuri organizate.",
  alternates: {
    canonical: `${ELEMENTAR.url}/excursii-scolare-chisinau`,
  },
}

export default function Page() {
  const pageUrl = `${ELEMENTAR.url}/excursii-scolare-chisinau`
  const orgId = `${ELEMENTAR.url}/#organization`

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Excursii școlare în Chișinău",
    description:
      "Excursii școlare interactive în Chișinău la ELEMENTAR – experiențe STEM pentru elevi.",
    inLanguage: "ro-MD",
    publisher: { "@type": "Organization", "@id": orgId },
    mainEntity: { "@id": orgId },
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Excursii școlare interactive",
    provider: { "@type": "Organization", "@id": orgId },
    areaServed: {
      "@type": "City",
      name: "Chișinău",
    },
    description:
      "Programe educaționale interactive pentru școli și grupuri organizate, cu experimente practice și demonstrații ghidate.",
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Script
        id="webpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <Script
        id="service-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <nav className="text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-200">
          Acasă
        </Link>
        <span className="mx-2">/</span>
        <Link href="/ghiduri" className="hover:text-gray-200">
          Ghiduri
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-200">Excursii școlare</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl font-bold text-gray-200">
          Excursii școlare în Chișinău
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          ELEMENTAR oferă excursii școlare interactive în Chișinău,
          dedicate elevilor care învață prin experiment și descoperire.
          Situat în Port Mall (etajul 4), parcul de știință combină
          demonstrații practice de fizică, chimie și astronomie cu
          activități educative adaptate vârstei.
        </p>
      </header>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">
          Ce includ excursiile
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Experimente interactive de fizică, chimie și astronomie</li>
          <li>Demonstrații ghidate adaptate nivelului clasei</li>
          <li>Activități STEM (știință, tehnologie, inginerie, matematică)</li>
          <li>Durată recomandată: 90–120 minute</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">
          Pentru cine este potrivit
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Școli primare și gimnazii</li>
          <li>Licee</li>
          <li>Grupuri organizate</li>
          <li>Programe educaționale tematice</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">
          Informații rapide
        </h2>
        <p>
          Locație: {ELEMENTAR.locationName}, {ELEMENTAR.address.streetAddress}
        </p>
        <p>
          Telefon:{" "}
          <a className="underline" href={`tel:${ELEMENTAR.phone}`}>
            {ELEMENTAR.phone}
          </a>
        </p>
      </section>

      <section className="mt-12 flex gap-3">
        <Link
          href="/contact"
          className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
        >
          Rezervă excursie
        </Link>
      </section>
    </main>
  )
}
