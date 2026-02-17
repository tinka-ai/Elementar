"use client"

import Link from "next/link"
import Script from "next/script"
import { ELEMENTAR } from "@/lib/entity"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, HelpCircle, Clock, Users, MapPin } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FAQPage() {
  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxLink =
    "relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-sky-400 after:to-violet-500 after:transition-all after:duration-300"

  const faqCategories = [
    {
      title: "Informații generale",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          q: "Pentru cine este parcul?",
          a: "Parcul nostru este destinat copiilor, adolescenților și adulților curioși de toate vârstele. Zonele sunt împărțite pe niveluri de vârstă pentru a oferi experiențe potrivite fiecărui vizitator.",
        },
        {
          q: "Ce tipuri de experimente pot face?",
          a: "Oferim experimente interactive în fizică, chimie, biologie, astronomie și matematică. De la bobina Tesla la microscoape digitale, de la planetariu la puzzle-uri logice, fiecare vizitator găsește ceva fascinant.",
        },
        {
          q: "Este sigur pentru copii?",
          a: "Da. Toate exponatele și experimentele sunt testate și supravegheate de educatori. Respectăm standarde înalte de siguranță și oferim echipament de protecție atunci când este necesar.",
        },
        {
          q: "Pot veni cu întreaga familie?",
          a: "Da. Parcul este conceput pentru familii. Avem activități pentru toate vârstele, iar părinții pot participa alături de copii la majoritatea experimentelor.",
        },
      ],
    },
    {
      title: "Programare și vizite",
      icon: <Clock className="h-6 w-6" />,
      questions: [
        {
          q: "Cât durează o vizită?",
          a: "O vizită standard durează între 90 și 120 de minute, în funcție de ritmul de explorare și de atelierele alese. Recomandăm să vă rezervați cel puțin 2 ore pentru o experiență completă.",
        },
        {
          q: "Este nevoie de rezervare?",
          a: "Recomandăm rezervarea online, mai ales pentru weekend și sărbători. Grupurile și școlile trebuie să facă rezervare. Pentru vizite individuale în timpul săptămânii, puteți veni și fără rezervare.",
        },
        {
          q: "Care este programul de funcționare?",
          a: "Suntem deschiși Luni–Duminică, 10:00–22:00. Ultimele intrări se fac cu o oră înainte de închidere. În zilele de sărbătoare, programul poate fi modificat.",
        },
        {
          q: "Pot reprograma vizita?",
          a: "Da, puteți reprograma vizita cu cel puțin 24 de ore înainte. Pentru grupuri, reprogramarea se poate face cu 48 de ore înainte fără costuri suplimentare.",
        },
      ],
    },
    {
      title: "Tarife și plăți",
      icon: <Users className="h-6 w-6" />,
      questions: [
        {
          q: "Care sunt tarifele?",
          a: "Biletul individual costă 200 MDL și include accesul la toate zonele. Pentru grupuri și școli, tariful este 180 MDL/persoană.",
        },
        {
          q: "Ce metode de plată acceptați?",
          a: "Acceptăm plata cu cardul, numerar și transfer bancar. Pentru rezervările online, plata se poate face cu cardul bancar prin sistemul nostru securizat.",
        },
        {
          q: "Pot returna biletele?",
          a: "Biletele pot fi returnate cu până la 24 de ore înainte de vizită pentru o rambursare completă. Pentru anulări în aceeași zi, se percepe o taxă de 20%.",
        },
        {
          q: "Oferiți vouchere cadou?",
          a: "Da. Voucherele cadou pot fi cumpărate online sau la recepție și sunt valabile 6 luni de la data emiterii.",
        },
      ],
    },
    {
      title: "Facilități și servicii",
      icon: <MapPin className="h-6 w-6" />,
      questions: [
        {
          q: "Unde vă aflați?",
          a: `Ne găsiți în Port Mall Chișinău: ${ELEMENTAR.address.streetAddress}, ${ELEMENTAR.address.postalCode}. Avem parcare și suntem ușor accesibili cu transportul public.`,
        },
        {
          q: "Aveți facilități pentru persoane cu dizabilități?",
          a: "Da. Parcul este accesibil pentru persoane cu dizabilități: rampe, ascensor și toalete adaptate. Exponatele sunt plasate la înălțimi accesibile.",
        },
        {
          q: "Pot aduce mâncare și băuturi?",
          a: "Nu permitem introducerea de alimente din exterior, dar există cafenea în incintă cu opțiuni pentru copii și adulți. Apa este disponibilă gratuit la fântânile din parc.",
        },
        {
          q: "Aveți magazin de suveniruri?",
          a: "Da. Magazinul include jocuri educative, experimente pentru acasă, cărți de știință și suveniruri tematice, selectate pentru valoarea lor educativă.",
        },
        {
          q: "Pot face fotografii?",
          a: "Da. Fotografiile pentru uz personal sunt permise. Pentru fotografii comerciale sau filmări, vă rugăm să ne contactați în prealabil.",
        },
      ],
    },
  ]

  // --- JSON-LD (Schema.org FAQPage) generat din întrebările existente ---
  const allQAs = faqCategories.flatMap((c) => c.questions)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQAs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  return (
    <div className="min-h-dvh bg-black text-gray-200 antialiased pb-20">
      {/* FAQ Schema (GEO / AI-ready) */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center space-y-6">
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 ${fx}`}
              >
                <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                {"Întrebări Frecvente"}
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                {"Răspunsuri la întrebările tale"}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Găsește răspunsuri la cele mai frecvente întrebări despre parcul nostru, experiențele oferite și
                modalitățile de vizitare.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ CATEGORII */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-md bg-white/8 text-sky-400">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-300">{category.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className={`border border-white/10 bg-white/5 rounded-lg ${fx}`}
                      >
                        <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                          <span className="text-gray-300 font-medium">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT RAPID */}
        <section className="py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-6">Nu ai găsit răspunsul?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Echipa noastră este gata să răspundă la orice întrebare suplimentară pe care o ai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className={`bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
                <Link href="/contact">
                  Contactează-ne
                  <ArrowRight className="ms-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`border-sky-700/60 text-sky-300 hover:bg-sky-500/10 bg-transparent ${fx}`}
              >
                <a href={`tel:${ELEMENTAR.phone}`}>Sună acum</a>
              </Button>
            </div>
          </div>
        </section>

        {/* PAGINI CONEXE */}
        <section className="py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-8 text-center">Informații suplimentare</h2>

            <div className="grid gap-6 justify-items-center sm:grid-cols-2 md:grid-cols-3">
              <Link
                href="/domenii"
                className={`w-full p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Domenii</h3>
                <p className="text-gray-400 text-sm">Explorează domeniile științifice</p>
              </Link>

              <Link
                href="/galerie"
                className={`w-full p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Galerie</h3>
                <p className="text-gray-400 text-sm">Vezi imagini din parcul nostru</p>
              </Link>

              <Link
                href="/contact"
                className={`w-full p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Contact</h3>
                <p className="text-gray-400 text-sm">Programează vizita ta</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
