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

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return `${ELEMENTAR.url}/images/logo-elementara-new.png`
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export default function Page() {
  const pageUrl = `${ELEMENTAR.url}/excursii-scolare-chisinau`
  const orgId = `${ELEMENTAR.url}/#organization`
  const primaryImage = absUrl(ELEMENTAR.images?.[0])

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Excursii școlare în Chișinău",
    description:
      "Excursii școlare interactive în Chișinău la ELEMENTAR – experiențe educaționale pentru elevi, prin experimente și demonstrații ghidate.",
    inLanguage: "ro-MD",
    publisher: { "@type": "Organization", "@id": orgId },
    mainEntity: { "@id": orgId },
    isPartOf: { "@type": "WebSite", name: ELEMENTAR.name, url: ELEMENTAR.url },
    primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    url: pageUrl,
    name: "Excursii școlare interactive în Chișinău",
    serviceType: "Excursii școlare / programe educaționale",
    provider: { "@type": "Organization", "@id": orgId },
    areaServed: [
      { "@type": "City", name: "Chișinău" },
      { "@type": "Country", name: "Republica Moldova" },
    ],
    description:
      "Programe educaționale interactive pentru școli și grupuri organizate, cu experimente practice și demonstrații ghidate adaptate vârstei.",
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceUrl: `${ELEMENTAR.url}/contact`,
        availableLanguage: ["ro-MD"],
      },
      {
        "@type": "ServiceChannel",
        servicePhone: {
          "@type": "ContactPoint",
          telephone: ELEMENTAR.phone,
          contactType: "customer support",
          availableLanguage: ["ro-MD"],
        },
      },
    ],
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${ELEMENTAR.url}/` },
      { "@type": "ListItem", position: 2, name: "Ghiduri", item: `${ELEMENTAR.url}/ghiduri` },
      { "@type": "ListItem", position: 3, name: "Excursii școlare în Chișinău", item: pageUrl },
    ],
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
      <Script
        id="breadcrumbs-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
        <h1 className="text-4xl font-bold text-gray-200">Excursii școlare în Chișinău</h1>
        <p className="mt-4 text-lg text-gray-300">
          ELEMENTAR oferă excursii școlare interactive în Chișinău, dedicate elevilor care învață prin experiment și
          descoperire. Situat în Port Mall (etajul 4), parcul de știință combină demonstrații practice de fizică, chimie
          și astronomie cu activități educative adaptate vârstei.
        </p>

        {/* ✅ Circuit semantic: Excursii → Ghiduri (link contextual) */}
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
          <p>
            Pentru resurse și recomandări (pentru părinți și școli), vezi hub-ul de{" "}
            <Link href="/ghiduri" className="text-sky-400 hover:text-sky-300 font-semibold">
              ghiduri educaționale pentru părinți și școli
            </Link>
            .
          </p>
        </div>
      </header>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">Ce includ excursiile</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Experimente interactive de fizică, chimie și astronomie</li>
          <li>Demonstrații ghidate adaptate nivelului clasei</li>
          <li>Activități de tip STEM: știință, tehnologie, inginerie și matematică</li>
          <li>Durată recomandată: 90–120 minute</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">Pentru cine este potrivit</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Școli primare și gimnazii</li>
          <li>Licee</li>
          <li>Grupuri organizate</li>
          <li>Programe educaționale tematice</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">Informații rapide</h2>
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
