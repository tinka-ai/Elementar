import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { ELEMENTAR } from "@/lib/entity"

export const metadata: Metadata = {
  title: "Ghiduri educaționale pentru părinți și școli | ELEMENTAR",
  description:
    "Ghiduri educaționale despre activități pentru copii în Chișinău, excursii școlare, experiențe STEM și recomandări pentru părinți.",
  alternates: {
    canonical: `${ELEMENTAR.url}/ghiduri`,
  },
}

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return `${ELEMENTAR.url}/images/logo-elementara-new.png`
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export default function Page() {
  const pageUrl = `${ELEMENTAR.url}/ghiduri`
  const orgId = `${ELEMENTAR.url}/#organization`
  const primaryImage = absUrl(ELEMENTAR.images?.[0])

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: "Ghiduri educaționale ELEMENTAR",
    url: pageUrl,
    inLanguage: "ro-MD",
    description:
      "Colecție de ghiduri educaționale despre activități pentru copii, excursii școlare și experiențe STEM în Chișinău.",
    publisher: { "@type": "Organization", "@id": orgId },
    primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
    isPartOf: { "@type": "WebSite", name: ELEMENTAR.name, url: ELEMENTAR.url },

    // ✅ ItemList complet (2 pagini)
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: `${ELEMENTAR.url}/activitati-educative-copii-chisinau`,
          name: "Activități educative pentru copii în Chișinău",
        },
        {
          "@type": "ListItem",
          position: 2,
          url: `${ELEMENTAR.url}/excursii-scolare-chisinau`,
          name: "Excursii școlare în Chișinău",
        },
      ],
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${ELEMENTAR.url}/` },
      { "@type": "ListItem", position: 2, name: "Ghiduri", item: pageUrl },
    ],
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Script
        id="collection-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Script
        id="breadcrumbs-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb vizibil */}
      <nav className="text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-200">
          Acasă
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-200">Ghiduri</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl font-bold text-gray-200">Ghiduri educaționale pentru părinți și școli</h1>
        <p className="mt-4 text-lg text-gray-300">
          Aici găsești recomandări și explicații clare despre activități educative pentru copii în Chișinău, excursii
          școlare și experiențe interactive care dezvoltă curiozitatea și gândirea practică.
        </p>

        {/* ✅ Pasul 3: Ghiduri → Homepage (anchor strategic + entitate) */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
          <p>
            Pentru context complet despre locație, program și tarife, vezi pagina principală a{" "}
            <Link href="/" className="text-sky-400 hover:text-sky-300 font-semibold">
              Parcului de Știință și Curiozități în Chișinău
            </Link>
            .
          </p>
        </div>
      </header>

      <section className="mt-10 grid gap-6">
        {/* 1) Activități */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-gray-200">Activități educative pentru copii în Chișinău</h2>
          <p className="mt-3 text-gray-300">
            Ghid pentru părinți și profesori: experiențe interactive, experimente practice și idei pentru o vizită
            educațională reușită.
          </p>
          <Link
            href="/activitati-educative-copii-chisinau"
            className="inline-block mt-4 text-sky-400 hover:text-sky-300 font-semibold"
          >
            Citește ghidul →
          </Link>
        </div>

        {/* 2) Excursii */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-gray-200">Excursii școlare în Chișinău</h2>
          <p className="mt-3 text-gray-300">
            Pagina dedicată claselor și grupurilor organizate: structură de vizită, durată recomandată și format
            educațional prin experiment.
          </p>
          <Link
            href="/excursii-scolare-chisinau"
            className="inline-block mt-4 text-sky-400 hover:text-sky-300 font-semibold"
          >
            Vezi pagina →
          </Link>
        </div>
      </section>
    </main>
  )
}
