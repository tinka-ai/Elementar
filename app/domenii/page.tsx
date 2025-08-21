"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Facebook,
  Instagram,
  Sparkles,
  Microscope,
  Calculator,
  Telescope,
  Zap,
  Beaker,
  Brain,
} from "lucide-react"

export default function DomeniiPage() {
  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxIcon =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45),0_0_18px_4px_rgba(168,85,247,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxLink =
    "relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-sky-400 after:to-violet-500 after:transition-all after:duration-300"

  return (
    <div className="min-h-dvh bg-black text-gray-200 antialiased pb-20">
      <Header fx={fx} fxIcon={fxIcon} fxLink={fxLink} />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center space-y-6">
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 ${fx}`}
              >
                <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                {"Domenii Științifice"}
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                {"Explorează toate domeniile"}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                De la fizică la biologie, de la chimie la astronomie - descoperă fascinanta lume a științei prin
                experiențe interactive în toate domeniile majore.
              </p>
            </div>
          </div>
        </section>

        {/* DOMENII PRINCIPALE */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle title="Domeniile noastre de expertiză" />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <DomainCard
                fx={fx}
                icon={<Zap className="h-10 w-10" />}
                title="Fizică"
                description="Descoperă legile fundamentale ale universului prin experimente cu electricitate, magnetism, mecanică și optică."
                topics={[
                  "Electricitate și magnetism",
                  "Mecanica clasică",
                  "Optică și lumină",
                  "Termodinamică",
                  "Fizica modernă",
                ]}
                image="/interactive-physics-experiment.png"
                color="from-blue-400 to-cyan-400"
              />
              <DomainCard
                fx={fx}
                icon={<Beaker className="h-10 w-10" />}
                title="Chimie"
                description="Explorează lumea atomilor și moleculelor prin reacții spectaculoase și experimente interactive sigure."
                topics={["Reacții chimice", "Structura atomică", "Chimie organică", "Cristalografie", "Electrochimie"]}
                image="/colorful-chemistry-experiments.png"
                color="from-green-400 to-emerald-400"
              />
              <DomainCard
                fx={fx}
                icon={<Microscope className="h-10 w-10" />}
                title="Biologie"
                description="Pătrunde în secretele vieții, de la celule microscopice la ecosisteme complexe."
                topics={["Biologia celulară", "Genetică", "Ecologie", "Anatomie", "Microbiologie"]}
                image="/interactive-biology-microscope.png"
                color="from-purple-400 to-violet-400"
              />
              <DomainCard
                fx={fx}
                icon={<Telescope className="h-10 w-10" />}
                title="Astronomie"
                description="Călătorește prin cosmos și descoperă misterele universului în planetariul nostru interactiv."
                topics={[
                  "Sistemul solar",
                  "Stelele și galaxiile",
                  "Cosmologie",
                  "Explorarea spațială",
                  "Astrobiologie",
                ]}
                image="/astronomie-planetariu-tehnologie.png"
                color="from-indigo-400 to-purple-400"
              />
              <DomainCard
                fx={fx}
                icon={<Calculator className="h-10 w-10" />}
                title="Matematică"
                description="Descoperă frumusețea matematicii prin puzzle-uri, jocuri logice și demonstrații vizuale."
                topics={["Geometrie", "Algebră", "Statistică", "Logică", "Matematică aplicată"]}
                image="/provocari-logice-puzzle-stiinta.png"
                color="from-orange-400 to-red-400"
              />
              <DomainCard
                fx={fx}
                icon={<Brain className="h-10 w-10" />}
                title="Psihologie și Percepție"
                description="Înțelege cum funcționează mintea umană prin experimente cu iluzii optice și cognitive."
                topics={["Iluzii optice", "Percepția senzorială", "Memoria", "Atenția", "Procesarea informației"]}
                image="/optical-illusions-science-exhibit.png"
                color="from-pink-400 to-rose-400"
              />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-6">Gata să explorezi toate domeniile?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Fiecare domeniu oferă experiențe unice și captivante pentru toate vârstele.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className={`bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
                <Link href="/galerie">
                  Vezi galeria
                  <ArrowRight className="ms-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`border-sky-700/60 text-sky-300 hover:bg-sky-500/10 bg-transparent ${fx}`}
              >
                <Link href="/contact">Programează vizita</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ABORDAREA INTERDISCIPLINARĂ */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <SectionTitle title="Abordare interdisciplinară" />
                <p className="text-lg text-gray-300">
                  Știința nu există în compartimente separate. La ELEMENTAR, conectăm domeniile pentru a oferi o
                  înțelegere holistică a lumii din jurul nostru.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-sky-400 mt-2" />
                    <div>
                      <h4 className="font-semibold text-gray-300">Biochimie</h4>
                      <p className="text-sm text-gray-400">Unde biologia întâlnește chimia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-sky-400 mt-2" />
                    <div>
                      <h4 className="font-semibold text-gray-300">Astrofizică</h4>
                      <p className="text-sm text-gray-400">Fizica aplicată în cosmos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-sky-400 mt-2" />
                    <div>
                      <h4 className="font-semibold text-gray-300">Biomatematică</h4>
                      <p className="text-sm text-gray-400">Modelarea matematică a proceselor biologice</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/hands-on-science-experiment.png"
                  alt="Experimente interdisciplinare"
                  width={600}
                  height={400}
                  className={`w-full h-auto rounded-2xl object-cover ${fx}`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAME EDUCAȚIONALE */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle title="Programe educaționale pe domenii" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <ProgramCard
                fx={fx}
                title="Exploratori Juniori"
                age="6-10 ani"
                description="Introducere în toate domeniile științifice prin experimente simple și jocuri educative."
                duration="45 min"
              />
              <ProgramCard
                fx={fx}
                title="Cercetători Tineri"
                age="11-14 ani"
                description="Aprofundarea conceptelor științifice cu experimente mai complexe și proiecte practice."
                duration="60 min"
              />
              <ProgramCard
                fx={fx}
                title="Viitori Oameni de Știință"
                age="15+ ani"
                description="Programe avansate cu focus pe metodologia științifică și cercetarea independentă."
                duration="90 min"
              />
            </div>
          </div>
        </section>

        {/* PAGINI CONEXE */}
        <section className="py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-8 text-center">Continuă explorarea</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/galerie"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Galerie Foto</h3>
                <p className="text-gray-400 text-sm">Vezi imagini din fiecare domeniu științific</p>
              </Link>
              <Link
                href="/faq"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Întrebări Frecvente</h3>
                <p className="text-gray-400 text-sm">Răspunsuri la întrebările despre domenii</p>
              </Link>
              <Link
                href="/contact"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Programează Vizita</h3>
                <p className="text-gray-400 text-sm">Rezervă-ți locul pentru o experiență completă</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer fx={fx} fxIcon={fxIcon} />
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
            <Link href="/domenii" className={`${fxLink} text-sky-400`}>
              Domenii
            </Link>
            <Link href="/galerie" className={fxLink}>
              Galerie
            </Link>
            <Link href="/faq" className={fxLink}>
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

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
      {title}
    </h2>
  )
}

function DomainCard({
  fx,
  icon,
  title,
  description,
  topics,
  image,
  color,
}: {
  fx: string
  icon: React.ReactNode
  title: string
  description: string
  topics: string[]
  image: string
  color: string
}) {
  return (
    <div className={`p-6 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
      <div className="mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={240}
          className="w-full h-48 object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className={`grid h-12 w-12 place-items-center rounded-md bg-gradient-to-r ${color} text-white`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-300">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="space-y-2 mb-4">
        <h4 className="font-semibold text-gray-300 text-sm">Subiecte acoperite:</h4>
        <ul className="grid grid-cols-1 gap-1">
          {topics.map((topic, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <div className="h-1 w-1 rounded-full bg-sky-400" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/galerie"
        className="inline-flex items-center gap-2 text-sky-300 text-sm hover:text-white transition-colors"
      >
        <ArrowRight className="h-4 w-4" />
        Vezi galeria
      </Link>
    </div>
  )
}

function ProgramCard({
  fx,
  title,
  age,
  description,
  duration,
}: {
  fx: string
  title: string
  age: string
  description: string
  duration: string
}) {
  return (
    <div className={`p-6 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-300">{title}</h3>
        <span className="text-sm text-sky-400 font-medium">{age}</span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="text-sm text-gray-400">
        <span>⏱️ Durată: {duration}</span>
      </div>
    </div>
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
