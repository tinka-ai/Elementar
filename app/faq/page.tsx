"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Instagram, Sparkles, HelpCircle, Clock, Users, MapPin } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FAQPage() {
  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxIcon =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45),0_0_18px_4px_rgba(168,85,247,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxLink =
    "relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-sky-400 after:to-violet-500 after:transition-all after:duration-300"

  const faqCategories = [
    {
      title: "Informații generale",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          q: "Pentru cine este parcul?",
          a: "Parcul nostru este destinat copiilor, adolescenților și adulților curioși de toate vârstele. Zonele sunt împărțite pe niveluri de vârstă pentru a oferi experiențe potrivite fiecărui vizitator. Vezi toate experiențele disponibile în secțiunea Experiențe.",
        },
        {
          q: "Ce tipuri de experimente pot face?",
          a: "Oferim experimente interactive în fizică, chimie, biologie, astronomie și matematică. De la bobina Tesla la microscoape digitale, de la planetariu la puzzle-uri logice - fiecare vizitator găsește ceva fascinant.",
        },
        {
          q: "Este sigur pentru copii?",
          a: "Absolut! Toate exponatele și experimentele sunt testate și supravegheate de educatori calificați. Respectăm cele mai înalte standarde de siguranță și oferim echipament de protecție când este necesar.",
        },
        {
          q: "Pot veni cu întreaga familie?",
          a: "Da! Parcul este conceput pentru familii. Avem activități pentru toate vârstele, iar părinții pot participa alături de copii la majoritatea experimentelor.",
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
          a: "Recomandăm rezervarea online, mai ales pentru weekend și sărbători. Grupurile și școlile trebuie să facă rezervare obligatoriu. Pentru vizite individuale în timpul săptămânii, puteți veni și fără rezervare.",
        },
        {
          q: "Care este programul de funcționare?",
          a: "Suntem deschisi Luni - Duminică, 10:00 - 22:00. Ultimele intrări se fac cu o oră înainte de închidere. În zilele de sărbătoare, programul poate fi modificat.",
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
          a: "Acceptăm plata cu cardul, numerar și transfer bancar. Pentru rezervările online, plata se poate face cu cardul bancar în siguranță prin sistemul nostru securizat.",
        },
        {
          q: "Pot returna biletele?",
          a: "Biletele pot fi returnate cu până la 24 de ore înainte de vizită pentru o rambursare completă. Pentru anulări în aceeași zi, se percepe o taxă de 20%.",
        },
        {
          q: "Oferim vouchere cadou?",
          a: "Da! Voucherele cadou sunt perfecte pentru cadouri și pot fi cumpărate online sau la recepție. Sunt valabile 6 luni de la data emiterii.",
        },
      ],
    },
    {
      title: "Facilități și servicii",
      icon: <MapPin className="h-6 w-6" />,
      questions: [
        {
          q: "Unde vă aflați?",
          a: "Ne găsiți în Port Mall Chișinău, la adresa Strada Mihai Sadoveanu 42/6, MD-2075. Avem parcare gratuită și suntem ușor accesibili cu transportul public.",
        },
        {
          q: "Aveți facilități pentru persoane cu dizabilități?",
          a: "Da, parcul nostru este complet accesibil pentru persoane cu dizabilități. Avem rampe, ascensor și toalete adaptate. Toate exponatele sunt la înălțimi accesibile.",
        },
        {
          q: "Pot aduce mâncare și băuturi?",
          a: "Nu permitem introducerea de alimente din exterior, dar avem un cafenea în incintă cu meniuri pentru copii și adulți. Apa este disponibilă gratuit la fântânile din parc.",
        },
        {
          q: "Aveți magazin de suveniruri?",
          a: "Da! Magazinul nostru oferă jocuri educative, experimente pentru acasă, cărți de știință și suveniruri tematice. Toate produsele sunt selectate pentru valoarea lor educativă.",
        },
        {
          q: "Pot face fotografii?",
          a: "Fotografiile pentru uz personal sunt permise și încurajate! Pentru fotografii comerciale sau filmări, vă rugăm să contactați administrația în prealabil.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-dvh bg-black text-gray-200 antialiased pb-20">
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
                <a href="tel:+37379010277">Sună acum</a>
              </Button>
            </div>
          </div>
        </section>

        {/* PAGINI CONEXE (fără „Experiențe”, centrat pe mijloc) */}
        <section className="py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-8 text-center">Informații suplimentare</h2>

            {/* Grilă 1/2/3 coloane, container îngustat și centrat */}
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

/* ————— Sub‑componente ————— */

function Header({ fx, fxIcon, fxLink }: { fx: string; fxIcon: string; fxLink: string }) {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Acasă">
            <img
              src="/images/logo-elementara.png"
              alt="Logo ELEMENTAR — Parc de Știință și Curiozități"
              className="h-8 sm:h-9 md:h-10 w-auto select-none pointer-events-none"
            />
            <span className="sr-only">Parcul de Știință și Curiozități</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className={fxLink}>
              Acasă
            </Link>
            <Link href="/experiente" className={fxLink}>
              Experiențe
            </Link>
            <Link href="/domenii" className={fxLink}>
              Domenii
            </Link>
            <Link href="/galerie" className={fxLink}>
              Galerie
            </Link>
            <Link href="/faq" className={`${fxLink} text-sky-400`}>
              FAQ
            </Link>
            <Link href="/contact" className={fxLink}>
              Contact
            </Link>
          </nav>
          <Button asChild className={`hidden md:inline-flex bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
            <Link href="/contact">
              Programează o vizită
              <ArrowRight className="ms-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function Footer({ fx, fxIcon }: { fx: string; fxIcon: string }) {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-gray-300 font-medium">Contact</p>
            <p className="text-sm text-gray-300">Port Mall, Chișinău MD — Strada Mihai Sadoveanu 42/6, MD-2075</p>
            <p className="text-sm text-gray-300">+373 79 010 277 • office@elementar.md</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/elementara.ro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`grid h-10 w-10 place-items-center rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white ${fxIcon}`}
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/elementara.ro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`grid h-10 w-10 place-items-center rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white ${fxIcon}`}
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500 flex items-center justify-between">
          <div>
            <p>© {new Date().getFullYear()} ELEMENTAR — Parc de Știință și Curiozități.</p>
            <p className="mt-1">powered by TINKA AI</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +373 79 010 277
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                />
              </svg>
              office@elementar.md
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
