import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { ELEMENTAR } from "@/lib/entity"

export const metadata: Metadata = {
  title: "Excursie școlară STEM în Chișinău | Program, durată, rezervare | ELEMENTAR",
  description:
    "Cauți o excursie școlară STEM în Chișinău? La ELEMENTAR (Port Mall, etajul 4) elevii învață prin experimente practice. Durată 90–120 min, recomandări pentru clase și rezervare.",
  alternates: {
    canonical: `${ELEMENTAR.url}/excursie-scolara-stem-chisinau`,
  },
}

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return `${ELEMENTAR.url}/images/logo-elementara-new.png`
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export default function Page() {
  const pageUrl = `${ELEMENTAR.url}/excursie-scolara-stem-chisinau`
  const orgId = `${ELEMENTAR.url}/#organization`
  const primaryImage = absUrl(ELEMENTAR.images?.[0])

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${ELEMENTAR.url}/` },
      { "@type": "ListItem", position: 2, name: "Ghiduri", item: `${ELEMENTAR.url}/ghiduri` },
      { "@type": "ListItem", position: 3, name: "Excursie școlară STEM în Chișinău", item: pageUrl },
    ],
  }

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Excursie școlară STEM în Chișinău",
    description:
      "Ghid scurt pentru organizarea unei excursii școlare STEM în Chișinău, cu recomandări practice și trimitere către pagina completă de excursii școlare.",
    inLanguage: "ro-MD",
    publisher: { "@type": "Organization", "@id": orgId },
    mainEntity: { "@id": orgId },
    isPartOf: { "@type": "WebSite", name: ELEMENTAR.name, url: ELEMENTAR.url },
    primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Excursie școlară STEM în Chișinău (program scurt, clar)",
    description: metadata.description ?? "",
    inLanguage: "ro-MD",
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    publisher: { "@type": "Organization", "@id": orgId },
    author: { "@type": "Organization", "@id": orgId },
    image: [primaryImage],
    about: ["Excursie școlară", "STEM", "Chișinău", "Experimente pentru elevi"],
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* Schemas */}
      <Script
        id="webpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <Script
        id="article-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
        <Link href="/ghiduri" className="hover:text-gray-200">
          Ghiduri
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-200">Excursie STEM</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-200">Excursie școlară STEM în Chișinău</h1>
        <p className="mt-4 text-lg text-gray-300">
          Dacă vrei o excursie care să fie și distractivă, și educativă, formatul STEM e cea mai sigură alegere:
          elevii învață prin experimente, demonstrații și implicare directă. La ELEMENTAR (Port Mall, etajul 4),
          excursiile sunt gândite pentru clase și grupuri organizate.
        </p>

        {/* Linkuri contextuale (circuit semantic) */}
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
          <p>
            Vezi pagina completă pentru{" "}
            <Link href="/excursii-scolare-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
              excursii școlare în Chișinău
            </Link>{" "}
            (structură, recomandări, rezervare).
          </p>
          <p className="mt-3">
            Pentru familii și vizite libere, recomandarea noastră este{" "}
            <Link href="/activitati-educative-copii-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
              activități educative pentru copii în Chișinău
            </Link>
            .
          </p>
          <p className="mt-3">
            Toate resursele sunt în{" "}
            <Link href="/ghiduri" className="text-sky-400 hover:text-sky-300 font-semibold">
              ghiduri educaționale
            </Link>
            .
          </p>
        </div>
      </header>

      {/* Structură rapidă (AI-friendly) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-200">Program recomandat (90–120 min)</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <table className="w-full text-sm text-gray-300">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold text-gray-200">1) Introducere</td>
                <td className="p-4">Reguli simple + obiective (ce descoperim azi)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold text-gray-200">2) Demonstrații STEM</td>
                <td className="p-4">Experimente practice (fizică/chimie/astronomie) pe înțelesul clasei</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold text-gray-200">3) Explorare ghidată</td>
                <td className="p-4">Exponate interactive + întrebări scurte pentru fixare</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-200">4) Concluzie</td>
                <td className="p-4">Ce au învățat elevii + fotografii + pași pentru revenire</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Recomandări pentru profesori */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-200">Recomandări pentru profesori</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-300 space-y-2">
          <li>Rezervare în avans (mai ales pentru weekend / ore de vârf).</li>
          <li>Planifică minimum 2 ore (transport + organizare + activitate).</li>
          <li>Grupare pe echipe mici pentru participare mai bună.</li>
          <li>Stabilește 2–3 obiective clare: „ce vrem să înțeleagă elevii după vizită”.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
        >
          Rezervă excursie (Contact)
        </Link>
        <Link
          href="/excursii-scolare-chisinau"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-200 hover:bg-white/10 transition-colors"
        >
          Vezi pagina completă „Excursii”
        </Link>
      </section>

      <p className="mt-10 text-xs text-gray-500">
        Notă: programul și disponibilitatea se pot schimba. Pentru confirmare rapidă, folosește pagina de Contact.
      </p>
    </main>
  )
}
