"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
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

  return (
    <main className="min-h-dvh bg-black text-gray-200 antialiased pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center space-y-6">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 ${fx}`}
            >
              <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
              Domenii Științifice
            </div>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              Explorează toate domeniile
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              De la fizică la biologie, de la chimie la astronomie — descoperă fascinanta lume a științei prin
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
              image="/images/interactive-physics-experiment.png"
              color="from-blue-400 to-cyan-400"
            />
            <DomainCard
              fx={fx}
              icon={<Beaker className="h-10 w-10" />}
              title="Chimie"
              description="Explorează lumea atomilor și moleculelor prin reacții spectaculoase și experimente interactive sigure."
              topics={["Reacții chimice", "Structura atomică", "Chimie organică", "Cristalografie", "Electrochimie"]}
              image="/images/colorful-chemistry-experiments.png"
              color="from-green-400 to-emerald-400"
            />
            <DomainCard
              fx={fx}
              icon={<Microscope className="h-10 w-10" />}
              title="Biologie"
              description="Pătrunde în secretele vieții, de la celule microscopice la ecosisteme complexe."
              topics={["Biologia celulară", "Genetică", "Ecologie", "Anatomie", "Microbiologie"]}
              image="/images/interactive-biology-microscope.png"
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
              image="/images/astronomie-planetariu-tehnologie.png"
              color="from-indigo-400 to-purple-400"
            />
            <DomainCard
              fx={fx}
              icon={<Calculator className="h-10 w-10" />}
              title="Matematică"
              description="Descoperă frumusețea matematicii prin puzzle-uri, jocuri logice și demonstrații vizuale."
              topics={["Geometrie", "Algebră", "Statistică", "Logică", "Matematică aplicată"]}
              image="/images/provocari-logice-puzzle-stiinta.png"
              color="from-orange-400 to-red-400"
            />
            <DomainCard
              fx={fx}
              icon={<Brain className="h-10 w-10" />}
              title="Psihologie și Percepție"
              description="Înțelege cum funcționează mintea umană prin experimente cu iluzii optice și cognitive."
              topics={["Iluzii optice", "Percepția senzorială", "Memoria", "Atenția", "Procesarea informației"]}
              image="/images/optical-illusions-science-exhibit.png"
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
                <Bullet title="Biochimie" text="Unde biologia întâlnește chimia" />
                <Bullet title="Astrofizică" text="Fizica aplicată în cosmos" />
                <Bullet title="Biomatematică" text="Modelarea matematică a proceselor biologice" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hands-on-science-experiment.png"
                alt="Experimente interdisciplinare"
                width={600}
                height={400}
                className={`w-full h-auto rounded-2xl object-cover ${fx}`}
                priority={false}
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
    </main>
  )
}

/* ————— Sub-componente ————— */

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
      {title}
    </h2>
  )
}

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-2 w-2 rounded-full bg-sky-400 mt-2" />
      <div>
        <h4 className="font-semibold text-gray-300">{title}</h4>
        <p className="text-sm text-gray-400">{text}</p>
      </div>
    </div>
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
      <div className="mb-4 relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover rounded-lg"
          priority={false}
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
