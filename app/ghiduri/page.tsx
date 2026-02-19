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

export default function Page() {
  const pageUrl = `${ELEMENTAR.url}/ghiduri`
  const orgId = `${ELEMENTAR.url}/#organization`

  // ✅ imagine principală robustă (url absolut)
  const primaryImage = `${ELEMENTAR.url}${ELEMENTAR.images?.[0] ?? "/images/logo-elementara-new.png"}`

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: "Ghiduri educaționale ELEMENTAR",
    url: pageUrl,
    inLanguage: "ro-MD",
    description:
      "Colecție de ghiduri educaționale despre activități pentru copii, excursii școlare și experiențe STEM în Chișinău.",

    // ✅ completări cerute (AI)
    publisher: { "@type": "Organization", "@id": orgId },
    primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
    isPartOf: { "@type": "WebSite", name: ELEMENTAR.name, url: ELEMENTAR.url },
    mainEntity: { "@id": orgId },

    // ✅ lista ghidurilor din hub
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: `${ELEMENTAR.url}/activitati-educative-copii-chisinau`,
          name: "Activități educative pentru copii în Chișinău",
        },
      ],
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

      <header>
        <h1 className="text-4xl font-bold text-gray-200">
          Ghiduri educaționale pentru părinți și școli
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Această secțiune conține recomandări, explicații și idei pentru
          activități educative în Chișinău – cu accent pe experiențe interactive,
          învățare practică și dezvoltare STEM.
        </p>
      </header>

      <section className="mt-10 grid gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-gray-200">
            Activități educative pentru copii în Chișinău
          </h2>
          <p className="mt-3 text-gray-300">
            Ghid complet pentru părinți și profesori care caută activități
            educaționale interactive în Chișinău, inclusiv experiențe STEM,
            experimente practice și recomandări pentru excursii școlare.
          </p>
          <Link
            href="/activitati-educative-copii-chisinau"
            className="inline-block mt-4 text-sky-400 hover:text-sky-300 font-semibold"
          >
            Citește ghidul →
          </Link>
        </div>
      </section>
    </main>
  )
}
