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

  const guides = [
    {
      position: 1,
      url: `${ELEMENTAR.url}/activitati-educative-copii-chisinau`,
      name: "Activități educative pentru copii în Chișinău",
      description:
        "Ghid pentru părinți și profesori: activități educaționale interactive în Chișinău, experiențe STEM, experimente practice și recomandări pentru excursii școlare.",
    },
    // aici adaugi următoarele ghiduri (pozițiile 2, 3, 4...) pe măsură ce le publici
  ]

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${ELEMENTAR.url}/` },
      { "@type": "ListItem", position: 2, name: "Ghiduri", item: pageUrl },
    ],
  }

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    url: pageUrl,
    name: "Ghiduri educaționale pentru părinți și școli",
    description:
      "Colecție de ghiduri educaționale despre activități pentru copii în Chișinău, excursii școlare și experiențe STEM.",
    inLanguage: "ro-MD",
    publisher: { "@type": "Organization", "@id": orgId },
    isPartOf: { "@type": "WebSite", name: ELEMENTAR.name, url: ELEMENTAR.url },
    primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },

    // ✅ un singur mainEntity (ItemList) — fără suprascrieri
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((g) => ({
        "@type": "ListItem",
        position: g.position,
        url: g.url,
        name: g.name,
      })),
    },
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
          Aici găsești ghiduri și recomandări despre activități educative în Chișinău – cu accent pe experiențe
          interactive, învățare practică și dezvoltare STEM.
        </p>

        {/* ✅ Circuit semantic: Ghiduri → Homepage (entitate) + Excursii (cluster) */}
        <p className="mt-4 text-gray-300">
          Pentru prezentarea completă a parcului, vezi pagina{" "}
          <Link href="/" className="text-sky-400 hover:text-sky-300 font-semibold">
            ELEMENTAR – Parc de Știință și Curiozități în Chișinău
          </Link>
          . Dacă planifici o vizită cu elevii, intră și pe{" "}
          <Link href="/excursii-scolare-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
            excursii școlare în Chișinău
          </Link>
          .
        </p>
      </header>

      <section className="mt-10 grid gap-6">
        {guides.map((g) => (
          <div key={g.url} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-gray-200">{g.name}</h2>
            <p className="mt-3 text-gray-300">{g.description}</p>
            <Link href={g.url.replace(ELEMENTAR.url, "")} className="inline-block mt-4 text-sky-400 hover:text-sky-300 font-semibold">
              Citește ghidul →
            </Link>
          </div>
        ))}
      </section>
    </main>
  )
}
