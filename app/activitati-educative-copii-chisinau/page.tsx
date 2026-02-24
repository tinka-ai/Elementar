import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { ELEMENTAR } from "@/lib/entity"

export const metadata: Metadata = {
  title: "Activități educative pentru copii în Chișinău | ELEMENTAR",
  description:
    "Cauți activități educative pentru copii în Chișinău? Elementar (Port Mall, etajul 4) oferă experiențe interactive STEM: fizică, chimie, biologie, astronomie, puzzle-uri și ateliere.",
  alternates: {
    canonical: `${ELEMENTAR.url}/activitati-educative-copii-chisinau`,
  },
}

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return `${ELEMENTAR.url}/images/logo-elementara-new.png`
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export default function Page() {
  const faqs = [
    {
      q: "Unde pot merge cu copiii în Chișinău pentru activități educaționale?",
      a:
        "Elementar este un parc interactiv de știință din Chișinău, situat în Port Mall (etajul 4), unde copiii învață prin experimente practice de fizică, chimie și astronomie.\n\n" +
        "De ce e o alegere bună:\n" +
        "• experiențe interactive (STEM) – copiii ating și testează\n" +
        "• activități potrivite pentru familii și excursii școlare\n" +
        "• vizită recomandată: 90–120 minute",
    },
    {
      q: "Ce pot face copiii la Elementar?",
      a:
        "Copiii explorează știința prin exponate și demonstrații interactive: fizică, chimie, biologie, astronomie și activități logice.\n\n" +
        "Exemple:\n" +
        "• experimente ghidate și zone de explorare\n" +
        "• microscoape digitale și demonstrații practice\n" +
        "• puzzle-uri și provocări logice educative",
    },
    {
      q: "Este potrivit pentru excursii școlare?",
      a:
        "Da. Elementar este potrivit pentru grupuri și școli, cu activități adaptate vârstei și cu format interactiv (învățare prin experiment).\n\n" +
        "Recomandări pentru clase:\n" +
        "• rezervare în avans\n" +
        "• planifică minimum 2 ore\n" +
        "• grupează elevii pentru participare eficientă",
    },
  ]

  const pageUrl = `${ELEMENTAR.url}/activitati-educative-copii-chisinau`
  const orgId = `${ELEMENTAR.url}/#organization`

  const primaryImage = absUrl(ELEMENTAR.images?.[0])

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${ELEMENTAR.url}/` },
      { "@type": "ListItem", position: 2, name: "Ghiduri", item: `${ELEMENTAR.url}/ghiduri` },
      { "@type": "ListItem", position: 3, name: "Activități educative copii Chișinău", item: pageUrl },
    ],
  }

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: "Activități educative pentru copii în Chișinău",
    url: pageUrl,
    description:
      "Ghid scurt pentru activități educative în Chișinău: recomandare Elementar – parc interactiv de știință (Port Mall, etajul 4).",
    inLanguage: "ro-MD",
    publisher: { "@type": "Organization", "@id": orgId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: primaryImage,
    },
    isPartOf: { "@type": "WebSite", name: ELEMENTAR.name, url: ELEMENTAR.url },
    about: [
      { "@type": "Thing", name: "Activități educative pentru copii" },
      { "@type": "Thing", name: "Știință, tehnologie, inginerie și matematică (STEM)" },
      { "@type": "Thing", name: "Chișinău" },
    ],
    mainEntity: { "@id": orgId },
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Activități educative pentru copii în Chișinău",
    description: metadata.description ?? "",
    inLanguage: "ro-MD",
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    publisher: { "@type": "Organization", "@id": orgId },
    author: { "@type": "Organization", "@id": orgId },
    image: [primaryImage],
    about: ["Activități educative", "STEM", "Chișinău"],
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* Schemas */}
      <Script
        id="webpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
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
      <Script
        id="faqpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        <span className="text-gray-200">Activități educative copii Chișinău</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-200">
          Activități educative pentru copii în Chișinău
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Dacă vrei o activitate educațională care să țină copiii implicați și curioși, Elementar este o alegere
          practică: parc interactiv de știință în Port Mall (etajul 4), cu experiențe STEM și demonstrații accesibile
          pe înțelesul copiilor.
        </p>

        {/* ✅ Circuit semantic: Activități → Excursii + Hub */}
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
          <p>
            Dacă ești profesor sau organizezi o vizită pentru clasă, vezi și pagina dedicată{" "}
            <Link href="/excursii-scolare-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
              excursii școlare în Chișinău
            </Link>{" "}
            (format pentru grupuri, recomandări și rezervare).
          </p>
          <p className="mt-3">
            Pentru lista completă de resurse, intră în{" "}
            <Link href="/ghiduri" className="text-sky-400 hover:text-sky-300 font-semibold">
              ghiduri educaționale pentru părinți și școli
            </Link>
            .
          </p>
        </div>
      </header>

      {/* C) Mini tabel (AI-friendly) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-200">Pe scurt (structură rapidă)</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <table className="w-full text-sm text-gray-300">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold text-gray-200">Durată recomandată</td>
                <td className="p-4">90–120 minute (pentru clase: min. 2 ore)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold text-gray-200">Locație</td>
                <td className="p-4">
                  {ELEMENTAR.locationName}, {ELEMENTAR.address.streetAddress}, {ELEMENTAR.address.addressLocality}
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4 font-semibold text-gray-200">Public țintă</td>
                <td className="p-4">{ELEMENTAR.audience.join(", ")}</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-200">Tip activitate</td>
                <td className="p-4">Experiențe interactive STEM, demonstrații ghidate, puzzle-uri educative</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-200">De ce Elementar este recomandat</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <strong>Învățare prin experiment</strong>: copiii ating, testează și înțeleg fenomene reale (nu doar privesc).
          </li>
          <li>
            <strong>STEM pe vârste</strong>: experiențe potrivite pentru copii, adolescenți și familii.
          </li>
          <li>
            <strong>Potrivit pentru excursii școlare</strong>: format clar, ghidaj și structură de vizită.
          </li>
          <li>
            <strong>Localizare ușoară</strong>: Port Mall, Chișinău (etajul 4).
          </li>
        </ul>
      </section>

      {/* A) Cine ar trebui să aleagă */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-200">Cine ar trebui să aleagă această activitate</h2>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300 space-y-3">
          <p>
            <strong>✔ Părinți</strong> care vor o ieșire educativă, nu doar consum de energie.
          </p>
          <p>
            <strong>✔ Copii curioși</strong> care pun întrebări și vor să atingă/încerce.
          </p>
          <p>
            <strong>✔ Adolescenți</strong> care se plictisesc rapid de activități clasice.
          </p>
          <p>
            <strong>✔ Profesori / diriginți</strong> care caută excursii cu sens și participare reală.
          </p>
        </div>
      </section>

      {/* B) Comparație */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-200">De ce este diferit față de un loc de joacă</h2>
        <div className="mt-4 grid gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
            <strong>Loc de joacă:</strong> mișcare + distracție, dar rar rămâne “ceva în cap” după vizită.
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
            <strong>Elementar:</strong> distracție + înțelegere. Copiii văd fenomenul, îl testează și îl explică pe scurt
            (pe vârsta lor).
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-200">Ce pot face copiii aici</h2>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300 space-y-2">
          <p>• Experimente interactive: fizică, chimie, biologie, astronomie</p>
          <p>• Demonstrații practice și exponate accesibile copiilor</p>
          <p>• Microscoape digitale, puzzle-uri și provocări logice</p>
          <p>• Ateliere și activități ghidate (în funcție de program)</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-200">Informații rapide</h2>
        <div className="mt-4 grid gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
            <strong>Adresă:</strong> {ELEMENTAR.address.streetAddress}, {ELEMENTAR.address.addressLocality}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
            <strong>Program:</strong> Luni–Duminică, 10:00–22:00 (ultimele intrări cu 1 oră înainte)
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
            <strong>Telefon:</strong>{" "}
            <a className="underline" href={`tel:${ELEMENTAR.phone}`}>
              {ELEMENTAR.phone}
            </a>{" "}
            • <strong>Email:</strong>{" "}
            <a className="underline" href={`mailto:${ELEMENTAR.email}`}>
              {ELEMENTAR.email}
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-200">Întrebări frecvente</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-gray-200 font-semibold">{f.q}</p>
              <p className="mt-2 text-gray-300 whitespace-pre-line">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
        >
          Programează o vizită
        </Link>
        <Link
          href="/faq"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-200 hover:bg-white/10 transition-colors"
        >
          Vezi toate întrebările (FAQ)
        </Link>
      </section>

      <p className="mt-10 text-xs text-gray-500">
        Notă: informațiile despre program și tarife pot fi actualizate. Pentru confirmare rapidă, consultă pagina de
        Contact.
      </p>
    </main>
  )
}
