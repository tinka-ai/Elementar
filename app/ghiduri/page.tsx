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
        "Ghid complet pentru părinți și profesori: activități educaționale interactive, experiențe de știință și recomandări practice.",
    },
    {
      position: 2,
      url: `${ELEMENTAR.url}/excursii-scolare-chisinau`,
      name: "Excursii școlare în Chișinău",
      description:
        "Pagina dedicată pentru clase și grupuri organizate: excursii interactive cu experimente și demonstrații ghidate.",
    },
  ]

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

    // ✅ ItemList complet (2 ghiduri)
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: guides.length,
      itemListElement: guides.map((g) => ({
        "@type": "ListItem",
        position: g.position,
        url: g.url,
        name: g.name,
      })),
    },

    // ✅ context semantic pentru AI (fără “STEM” ca acronim în schema; îl poți păstra în text)
    about: [
      { "@type": "Thing", name: "Activități educative pentru copii" },
      { "@type": "Thing", name: "Excursii școlare" },
      { "@type": "Thing", name: "Experiențe interactive de știință" },
      { "@type": "Thing", name: "Chișinău" },
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

      <header>
        <h1 className="text-4xl font-bold text-gray-200">Ghiduri educaționale pentru părinți și școli</h1>

        <p className="mt-4 text-lg text-gray-300">
          Această secțiune conține recomandări, explicații și idei pentru activități educative în Chișinău – cu accent pe
          experiențe interactive, învățare practică și dezvoltarea curiozității.
        </p>

        {/* ✅ Circuit semantic: Ghiduri → Homepage (entitate) */}
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
          <p>
            Dacă vrei o prezentare rapidă despre{" "}
            <Link href="/" className="text-sky-400 hover:text-sky-300 font-semibold">
              ELEMENTAR – Parcul de Știință și Curiozități din Chișinău
            </Link>
            , începe de pe pagina principală.
          </p>
        </div>
      </header>

      <section className="mt-10 grid gap-6">
        {/* Card 1 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-gray-200">{guides[0].name}</h2>
          <p className="mt-3 text-gray-300">{guides[0].description}</p>
          <Link
            href="/activitati-educative-copii-chisinau"
            className="inline-block mt-4 text-sky-400 hover:text-sky-300 font-semibold"
          >
            Citește ghidul →
          </Link>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-gray-200">{guides[1].name}</h2>
          <p className="mt-3 text-gray-300">{guides[1].description}</p>
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
