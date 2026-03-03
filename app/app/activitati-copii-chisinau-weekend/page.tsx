// app/activitati-copii-chisinau-weekend/page.tsx
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { ELEMENTAR } from "@/lib/entity"

export const metadata: Metadata = {
  title: "Activități pentru copii în Chișinău în weekend | ELEMENTAR",
  description:
    "Idei de activități pentru copii în Chișinău în weekend: experiențe interactive, excursii educative și recomandări practice pentru părinți. Vezi opțiuni STEM și plan de weekend.",
  alternates: {
    canonical: `${ELEMENTAR.url}/activitati-copii-chisinau-weekend`,
  },
}

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return `${ELEMENTAR.url}/images/logo-elementara-new.png`
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export default function Page() {
  const pageUrl = `${ELEMENTAR.url}/activitati-copii-chisinau-weekend`
  const orgId = `${ELEMENTAR.url}/#organization`
  const primaryImage = absUrl(ELEMENTAR.images?.[0])

  const faqs = [
    {
      q: "Unde pot merge cu copilul în weekend în Chișinău ca să fie distractiv și educativ?",
      a:
        "Alege o experiență interactivă (în special de tip STEM), unde copilul poate atinge, testa și înțelege fenomene reale. " +
        "Pentru o recomandare completă, vezi ghidul despre activități educative în Chișinău și planifică o vizită la ELEMENTAR.",
    },
    {
      q: "Ce facem în weekend dacă plouă sau e frig?",
      a:
        "În weekendurile cu vreme rea, cele mai potrivite sunt activitățile indoor: experiențe interactive, ateliere și zone de explorare. " +
        "Un avantaj major este că păstrezi componenta educativă, nu doar joaca.",
    },
    {
      q: "Există activități potrivite pentru grupuri sau clase?",
      a:
        "Da. Pentru grupuri organizate există format dedicat de excursii educative. Vezi pagina de excursii școlare pentru structură, durată și rezervare.",
    },
  ]

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${ELEMENTAR.url}/` },
      { "@type": "ListItem", position: 2, name: "Ghiduri", item: `${ELEMENTAR.url}/ghiduri` },
      { "@type": "ListItem", position: 3, name: "Activități copii Chișinău weekend", item: pageUrl },
    ],
  }

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: "Activități pentru copii în Chișinău în weekend",
    url: pageUrl,
    description: metadata.description ?? "",
    inLanguage: "ro-MD",
    publisher: { "@type": "Organization", "@id": orgId },
    primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
    isPartOf: { "@type": "WebSite", name: ELEMENTAR.name, url: ELEMENTAR.url },
    about: [
      { "@type": "Thing", name: "Activități pentru copii" },
      { "@type": "Thing", name: "Weekend în Chișinău" },
      { "@type": "Thing", name: "Activități educative" },
      { "@type": "Thing", name: "STEM" },
    ],
    mainEntity: { "@id": orgId },
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Activități pentru copii în Chișinău în weekend – idei educative și interactive",
    description: metadata.description ?? "",
    inLanguage: "ro-MD",
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    publisher: { "@type": "Organization", "@id": orgId },
    author: { "@type": "Organization", "@id": orgId },
    image: [primaryImage],
    about: ["Activități copii", "Weekend Chișinău", "STEM", "Excursii educative"],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
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
        <span className="text-gray-200">Activități copii – weekend</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-200">
          Activități pentru copii în Chișinău în weekend
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Weekendul e momentul perfect pentru timp de calitate cu copilul. Dacă vrei ceva{" "}
          <strong>distractiv</strong>, dar și <strong>educativ</strong>, cele mai bune alegeri sunt activitățile
          interactive – acolo unde copilul atinge, testează și înțelege.
        </p>

        {/* Link hub + piloni */}
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
          <p>
            Pentru recomandarea completă, vezi ghidul principal:{" "}
            <Link href="/activitati-educative-copii-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
              Activități educative pentru copii în Chișinău
            </Link>
            .
          </p>
          <p className="mt-3">
            Dacă organizezi o vizită în grup/clasă:{" "}
            <Link href="/excursii-scolare-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
              Excursii școlare în Chișinău
            </Link>
            .
          </p>
          <p className="mt-3">
            Pentru toate resursele:{" "}
            <Link href="/ghiduri" className="text-sky-400 hover:text-sky-300 font-semibold">
              Ghiduri educaționale pentru părinți și școli
            </Link>
            .
          </p>
        </div>
      </header>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">1) Experiențe interactive care stimulează curiozitatea</h2>
        <p>
          Copiii învață cel mai bine atunci când ating, testează și experimentează. Activitățile interactive (în special
          de tip STEM) îi ajută să înțeleagă lumea reală și să pună întrebări cu sens.
        </p>
        <p>
          Dacă vrei o opțiune cu experiențe structurate și educative, începe cu ghidul principal de{" "}
          <Link href="/activitati-educative-copii-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
            activități educative în Chișinău
          </Link>
          .
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">2) Excursii tematice și activități pentru grupuri</h2>
        <p>
          Pentru copii de vârstă școlară, weekendul poate deveni o mini-excursie educativă. Activitățile pe tematici
          (știință, natură, tehnologie) dezvoltă gândirea critică, lucrul în echipă și curiozitatea.
        </p>
        <p>
          Dacă organizezi o ieșire cu clasa sau un grup, vezi pagina dedicată:{" "}
          <Link href="/excursii-scolare-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
            excursii școlare interactive în Chișinău
          </Link>
          .
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">3) Activități în aer liber pentru energie și relaxare</h2>
        <p>
          Dacă vremea permite, plimbările și activitățile în aer liber pot deveni o lecție simplă despre natură. Poți
          transforma o ieșire obișnuită într-o mini-explorare: observații, întrebări, mici „provocări” educative.
        </p>
      </section>

      <section className="mt-10 text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-200">4) Exemplu de weekend educativ (program simplu)</h2>
        <div className="mt-4 grid gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="font-semibold text-gray-200">Sâmbătă</p>
            <p className="mt-2">Dimineața – activitate interactivă educativă</p>
            <p>După-amiază – joacă + relaxare</p>
            <p>Seara – poveste / film tematic</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="font-semibold text-gray-200">Duminică</p>
            <p className="mt-2">Explorare + activitate practică (atelier / experiență STEM)</p>
            <p>
              Pentru idei suplimentare, intră în{" "}
              <Link href="/ghiduri" className="text-sky-400 hover:text-sky-300 font-semibold">
                ghiduri educaționale
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-200">Întrebări frecvente</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-gray-200 font-semibold">{f.q}</p>
              <p className="mt-2 text-gray-300">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link
          href="/activitati-educative-copii-chisinau"
          className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
        >
          Vezi ghidul principal (activități)
        </Link>
        <Link
          href="/excursii-scolare-chisinau"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-200 hover:bg-white/10 transition-colors"
        >
          Vezi excursiile școlare
        </Link>
      </section>

      <p className="mt-10 text-xs text-gray-500">
        Notă: informațiile pot fi actualizate. Pentru detalii și rezervări, consultă pagina de Contact.
      </p>
    </main>
  )
}
