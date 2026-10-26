"use client"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, FlaskConical, Puzzle, Sparkles, Waves, Link2, BadgeCheck } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

/* ————— Generare determinista a decorurilor Halloween (~4x mai multe, culori/marimi variate) —————
   Foloseste o functie pseudo-aleatoare bazata pe index (nu Math.random), ca server si client
   sa randeze exact aceleasi pozitii — altfel React ar arunca eroare de hydration mismatch. */
function seeded(i: number) {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

const BAT_COLORS = ["text-orange-300/60", "text-purple-300/55", "text-pink-300/50", "text-amber-200/55", "text-sky-200/45", "text-white/45", "text-rose-300/50", "text-violet-300/50"]
const PUMPKIN_COLORS = ["text-orange-400/60", "text-orange-500/55", "text-amber-400/55", "text-red-400/50", "text-yellow-400/50"]
const STAR_COLORS = ["text-amber-200/70", "text-orange-200/65", "text-yellow-200/70", "text-white/60", "text-pink-200/55", "text-purple-200/55"]
const GHOST_COLORS = ["text-purple-100/30", "text-violet-200/28", "text-indigo-100/25", "text-pink-100/25", "text-white/25"]
const SIZES = ["h-3 w-3", "h-4 w-4", "h-5 w-5", "h-6 w-6", "h-7 w-7", "h-8 w-8", "h-10 w-10", "h-12 w-12", "h-14 w-14"]
const ANIMS = ["animate-drift-y", "animate-drift-x"]

function genDecor(
  Icon: (p: { className?: string; style?: React.CSSProperties }) => React.JSX.Element,
  count: number,
  colors: string[],
  seedOffset: number,
) {
  return Array.from({ length: count }, (_, i) => {
    const n = seedOffset + i
    const top = seeded(n * 4 + 1) * 94 + 2
    const onLeft = seeded(n * 4 + 2) > 0.5
    const side = seeded(n * 4 + 3) * 40 + 1
    const duration = (seeded(n * 4 + 4) * 6 + 4).toFixed(1) + "s"
    const delay = (seeded(n * 4 + 1.5) * 3).toFixed(1) + "s"
    return {
      Icon,
      color: colors[Math.floor(seeded(n * 3 + 1) * colors.length)],
      size: SIZES[Math.floor(seeded(n * 3 + 2) * SIZES.length)],
      anim: ANIMS[Math.floor(seeded(n * 3 + 3) * ANIMS.length)],
      duration,
      delay,
      pos: {
        top: `${top.toFixed(1)}%`,
        ...(onLeft ? { left: `${side.toFixed(1)}%` } : { right: `${side.toFixed(1)}%` }),
      } as React.CSSProperties,
    }
  })
}

const HALLOWEEN_DECOR = [
  ...genDecor(HalloweenBat, 24, BAT_COLORS, 0),
  ...genDecor(HalloweenPumpkin, 12, PUMPKIN_COLORS, 100),
  ...genDecor(HalloweenStar, 16, STAR_COLORS, 200),
  ...genDecor(HalloweenGhost, 8, GHOST_COLORS, 300),
  ...genDecor(HalloweenSpider, 4, BAT_COLORS, 400),
]

export default function Page() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playVideo, setPlayVideo] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined") return
    const isDesktop = window.innerWidth >= 1024
    if (isDesktop) {
      setPlayVideo(true)
      videoRef.current?.play().catch(() => {})
      return
    }
    const timer = setTimeout(() => {
      setPlayVideo(true)
      videoRef.current?.play().catch(() => {})
    }, 1200)
    return () => clearTimeout(timer)
  }, [])
  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  return (
    <>
      {/* VIDEO LOGO RESPONSIV */}
      <section className="relative w-full bg-black py-4 mt-24 md:mt-0 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-center">
          {!playVideo && (
            <Image
              src="/logo-elementara-new-one.png"
              alt="Elementar – logo animat"
              width={420}
              height={160}
              priority
              className="pointer-events-none select-none"
              aria-hidden={playVideo}
            />
          )}
          <video
            ref={videoRef}
            className={`w-full max-w-6xl h-auto object-contain rounded-2xl transition-opacity duration-500 ${
              playVideo ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/elementar_animated_logo.webm" type="video/webm" />
          </video>
        </div>
      </section>
      {/* POSTER — Marea Deschidere 24 octombrie, prioritizat pentru mobil */}
      <section className="relative w-full overflow-hidden bg-black py-6 sm:py-10 border-b border-white/5">
        {/* Fundal viu de Halloween — doar pe desktop (md+); pe mobil ramane simplu (negru) */}
        <div className="hidden md:block absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-purple-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(249,115,22,0.35),transparent_42%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.4),transparent_40%),radial-gradient(circle_at_50%_95%,rgba(234,88,12,0.3),transparent_50%)]" />

          <HalloweenMoon className="absolute top-6 right-[12%] h-16 w-16 text-orange-200/50" />
          <HalloweenSpiderweb className="absolute -top-2 -left-2 h-24 w-24 text-white/20" />
          <HalloweenSpiderweb className="absolute -top-3 -right-3 h-20 w-20 text-white/15 -scale-x-100" />

          {HALLOWEEN_DECOR.map((d, i) => (
            <d.Icon
              key={i}
              className={`absolute ${d.size} ${d.color} ${d.anim}`}
              style={{ ...d.pos, animationDuration: d.duration, animationDelay: d.delay }}
            />
          ))}
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 flex flex-col items-center">
          <OpeningCountdown />
        </div>
      </section>
      <main>
        {/* HERO */}
        <section id="acasa" className="relative overflow-hidden border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center py-8 sm:py-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                  <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden />
                  {t("hero.badge")}
                </div>
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                  {t("hero.title")}
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">{t("hero.description")}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className={`bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
                    <Link href="/domenii" aria-label={t("aria.home")}>
                      {t("hero.ctaPrimary")}
                      <ArrowRight className="ms-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className={`border-sky-700/60 text-sky-300 hover:bg-sky-500/10 bg-transparent ${fx}`}
                  >
                    <Link href="/domenii" aria-label={t("hero.ctaSecondary")}>
                      {t("hero.ctaSecondary")}
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.18),transparent_60%)]" />
                <Image
                  src="/images/Portret-copil-cu-halou-luminos.webp"
                  alt="Copil curios cu nimb luminos, simbol al descoperirii și al științei"
                  width={880}
                  height={700}
                  className="w-full h-auto rounded-2xl object-cover select-none pointer-events-none"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
        {/* ✅ AI HUB LINKS — mutat imediat dupa Hero, inainte era ingropat sub Pricing */}
        <section className="py-12 sm:py-16 border-b border-white/5" aria-labelledby="resurse-educationale">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 id="resurse-educationale" className="text-2xl sm:text-3xl font-semibold text-gray-200">
              ELEMENTAR – parc de știință în Chișinău (Mircea cel Bătrân 20/1)
            </h2>
            <p className="mt-4 text-gray-300">
              ELEMENTAR este un parc interactiv de știință din Chișinău, situat pe Mircea cel Bătrân 20/1, unde copiii și
              adolescenții învață prin experimente practice de fizică, chimie, biologie și astronomie. Pentru planificare
              rapidă, vezi{" "}
              <Link href="/ghiduri" className="text-sky-400 hover:text-sky-300 font-semibold">
                ghidurile educaționale
              </Link>
              , recomandarea noastră de{" "}
              <Link href="/activitati-educative-copii-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
                activități educative pentru copii în Chișinău
              </Link>{" "}
              și pagina dedicată{" "}
              <Link href="/excursii-scolare-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
                excursiilor școlare în Chișinău
              </Link>
              .
            </p>
            <p className="mt-4 text-gray-300">
              Descoperă{" "}
              <Link href="/ghiduri" className="text-sky-400 hover:text-sky-300 font-semibold">
                ghiduri educative pentru părinți și profesori
              </Link>{" "}
              despre activități interactive, excursii școlare și experiențe de știință pentru copii în Chișinău.
            </p>
            <p className="mt-4 text-gray-300">
              Vezi recomandarea noastră pentru{" "}
              <Link href="/activitati-educative-copii-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
                activități educative pentru copii în Chișinău
              </Link>{" "}
              și planifică o vizită la ELEMENTAR.
            </p>
            <p className="mt-4 text-gray-300">
              Pentru clase și grupuri, ai și pagina dedicată:{" "}
              <Link href="/excursii-scolare-chisinau" className="text-sky-400 hover:text-sky-300 font-semibold">
                excursii școlare în Chișinău
              </Link>
              .
            </p>
          </div>
        </section>
        {/* FEATURES */}
        <section id="experiente" className="py-12 sm:py-16 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle title={t("features.title")} />
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Feature fx={fx} icon={<Puzzle className="h-6 w-6" />} title={t("features.items.puzzles.title")} text={t("features.items.puzzles.description")} link="/domenii" learnMore={t("features.learnMore")} />
              <Feature fx={fx} icon={<Waves className="h-6 w-6" />} title={t("features.items.sensory.title")} text={t("features.items.sensory.description")} link="/domenii" learnMore={t("features.learnMore")} />
              <Feature fx={fx} icon={<Eye className="h-6 w-6" />} title={t("features.items.illusions.title")} text={t("features.items.illusions.description")} link="/domenii" learnMore={t("features.learnMore")} />
              <Feature fx={fx} icon={<FlaskConical className="h-6 w-6" />} title={t("features.items.workshops.title")} text={t("features.items.workshops.description")} link="/domenii" learnMore={t("features.learnMore")} />
            </ul>
          </div>
        </section>
        {/* VALUES */}
        <section className="py-12 sm:py-16 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <SectionKicker>{t("values.kicker")}</SectionKicker>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-300">{t("values.title")}</h2>
              <p className="text-gray-300">{t("values.description")}</p>
              <div className="flex items-center gap-6">
                <Donut value={79} label={t("values.stats.growth")} />
                <div>
                  <p className="text-4xl font-extrabold text-gray-300">370+</p>
                  <p className="text-sm text-gray-400">{t("values.stats.hours")}</p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-gray-300">239+</p>
                  <p className="text-sm text-gray-400">{t("values.stats.experiments")}</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/interactive-physics-experiment.webp"
                alt="Copil experimentează pendulul lui Newton la un stand"
                width={880}
                height={620}
                className={`w-full h-auto rounded-2xl object-cover ${fx}`}
                priority={false}
                sizes="(max-width: 1024px) 100vw, 880px"
              />
            </div>
          </div>
        </section>
        {/* SKILLS */}
        <section className="py-12 sm:py-16 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="/images/optical-illusions-science-exhibit.webp"
                alt="Copii și adulți explorează iluziile optice într-o sală interactivă cu modele geometrice colorate"
                width={880}
                height={620}
                className={`w-full h-auto rounded-2xl object-cover ${fx}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="space-y-6">
              <SectionKicker>{t("skills.kicker")}</SectionKicker>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-300">{t("skills.title")}</h2>
              <p className="text-gray-300">{t("skills.description")}</p>
              <Progress label={t("skills.progress.understanding")} value={75} />
              <Progress label={t("skills.progress.application")} value={86} />
            </div>
          </div>
        </section>
        {/* PRICING */}
        <section className="py-12 sm:py-16 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionKicker>TARIFE</SectionKicker>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-300">
              Tarife de acces – Parcul de Științe „Elementar”
            </h2>
            <p className="mt-4 text-gray-300">
              Excursii din oră în oră: zilnic, între{" "}
              <span className="font-semibold text-gray-200">10:00</span> și{" "}
              <span className="font-semibold text-gray-200">20:00</span> (ultima la 19:00).
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <PricingCard
                fx={fx}
                title="Pachet Individual"
                price=""
                perks={[
                  "Copil (4–17 ani) – 200 lei",
                  "Adult (18+) – 150 lei",
                  "Excursia cu ghid este inclusă pentru copii",
                ]}
              />
              <PricingCard
                fx={fx}
                title="Pachet Familie"
                price=""
                highlight
                badge="Cel mai ales"
                perks={[
                  "1 adult + 1 copil – 300 lei",
                  "1 adult + 2 copii – 500 lei",
                  "2 adulți + 1 copil – 400 lei",
                  "Acces complet + ghidaj inclus",
                ]}
              />
              <PricingCard
                fx={fx}
                title="Pachet Prieteni (12–17 ani)"
                price="150 lei / persoană"
                perks={[
                  "Grup minim 3 persoane",
                  "450 lei pentru 3 persoane",
                  "Achitat pe același bon",
                  "Acces complet",
                ]}
              />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300">
                <h3 className="text-lg font-semibold text-gray-200">Gratuități</h3>
                <div className="mt-3 space-y-3">
                  <p className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-sky-400" />
                    Copiii sub 4 ani beneficiază de acces gratuit.
                  </p>
                  <p className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-sky-400" />
                    Seniorii cu vârsta peste 80 ani beneficiază de acces gratuit.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300">
                <h3 className="text-lg font-semibold text-gray-200">Reguli și siguranță</h3>
                <p className="mt-3 flex items-start gap-2">
                  <BadgeCheck className="mt-0.5 h-4 w-4 text-sky-400" />
                  Copiii sub 9 ani trebuie să fie însoțiți și supravegheați permanent de un adult.
                </p>
              </div>
            </div>
            <p className="mt-6 pt-3 text-center text-sm text-gray-400 border-t border-white/10">
              Tarifele sunt valabile până la{" "}
              <span className="font-medium text-gray-300">30 septembrie 2026</span> (inclusiv).
            </p>
          </div>
        </section>
        {/* FAQ */}
        <section id="faq" className="py-12 sm:py-16 border-b border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <SectionKicker>{t("faq.kicker")}</SectionKicker>
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="f1" className={`border-b border-white/10 ${fx}`}>
                <AccordionTrigger className="text-left">{t("faq.items.audience.question")}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{t("faq.items.audience.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="f2" className={`border-b border-white/10 ${fx}`}>
                <AccordionTrigger className="text-left">{t("faq.items.duration.question")}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{t("faq.items.duration.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="f3" className={`border-b border-white/10 ${fx}`}>
                <AccordionTrigger className="text-left">{t("faq.items.booking.question")}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{t("faq.items.booking.answer")}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </>
  )
}
/* ————— Numărătoare inversă — Marea Deschidere, 24 octombrie, ora 11:00 (Chișinău, UTC+3) ————— */
const OPENING_DATE = "2026-10-24T11:00:00+03:00"

function useCountdown(targetIso: string) {
  const [left, setLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null)
  const [done, setDone] = useState(false)
  useEffect(() => {
    const target = new Date(targetIso).getTime()
    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) {
        setDone(true)
        setLeft({ d: 0, h: 0, m: 0, s: 0 })
        return
      }
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetIso])
  return { left, done }
}

function OpeningCountdown() {
  const { left, done } = useCountdown(OPENING_DATE)

  if (done) {
    return (
      <div className="mb-6 w-full max-w-sm sm:max-w-md text-center rounded-2xl border border-orange-400/40 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-orange-500/20 px-4 py-5 animate-pulse">
        <p className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
          🎉 NE-AM REDESCHIS!!! 🎉
        </p>
        <p className="mt-2 text-sm text-gray-300">Te așteptăm la Mircea cel Bătrân 20/1</p>
      </div>
    )
  }

  return (
    <div className="mb-6 w-full max-w-sm sm:max-w-md text-center">
      <p className="text-sm font-semibold text-orange-300 tracking-wide">
        ⏳ Mai sunt până la Marea Deschidere:
      </p>
      <div className="mt-3 grid grid-cols-4 gap-2" aria-live="polite">
        <CountdownUnit value={left?.d} label="zile" />
        <CountdownUnit value={left?.h} label="ore" />
        <CountdownUnit value={left?.m} label="min" />
        <CountdownUnit value={left?.s} label="sec" />
      </div>
    </div>
  )
}

function CountdownUnit({ value, label }: { value: number | undefined; label: string }) {
  return (
    <div className="rounded-xl border border-orange-400/30 bg-black/40 py-2">
      <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-b from-orange-300 to-purple-300 bg-clip-text text-transparent tabular-nums">
        {value === undefined ? "–" : String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] uppercase tracking-wider text-gray-400">{label}</div>
    </div>
  )
}

/* ————— Sub-componente ————— */
function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sky-300">
      <span className="inline-block h-1 w-1 rounded-full bg-sky-400" />
      {children}
    </span>
  )
}
function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
      {title}
    </h2>
  )
}
function Feature({
  fx,
  icon,
  title,
  text,
  link,
  learnMore,
}: {
  fx: string
  icon: React.ReactNode
  title: string
  text: string
  link: string
  learnMore: string
}) {
  return (
    <li className={`p-5 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-white/8 text-sky-400">{icon}</div>
        <p className="font-semibold text-gray-300">{title}</p>
      </div>
      <p className="mt-2 text-sm text-gray-300">{text}</p>
      <Link href={link} className="mt-3 inline-flex items-center gap-2 text-sky-300 text-sm hover:text-white transition-colors">
        <Link2 className="h-4 w-4" />
        {learnMore}
      </Link>
    </li>
  )
}
function Donut({ value, label }: { value: number; label: string }) {
  const rotation = (value / 100) * 360
  return (
    <div className="relative grid place-items-center">
      <div
        className="h-20 w-20 rounded-full"
        style={{
          background:
            "conic-gradient(rgb(56,189,248) 0deg, rgb(168,85,247) " +
            rotation +
            "deg, rgba(255,255,255,0.08) " +
            rotation +
            "deg 360deg)",
        }}
        aria-hidden
      />
      <div className="absolute text-center">
        <div className="text-xl font-bold text-gray-300">{value}%</div>
        <div className="text-[10px] text-gray-400">{label}</div>
      </div>
    </div>
  )
}
function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-300 font-medium">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
function PricingCard({
  fx,
  title,
  price,
  perks,
  highlight = false,
  badge,
  cta = false,
}: {
  fx: string
  title: string
  price: string
  perks: string[]
  highlight?: boolean
  badge?: string
  cta?: boolean
}) {
  return (
    <div
      className={`relative p-6 rounded-xl border ${highlight ? "border-sky-400/60" : "border-white/10"} bg-white/5 ${fx}`}
      aria-label={`Plan ${title}`}
    >
      {badge && (
        <span className="absolute -top-3 right-4 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {badge}
        </span>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-300">{title}</h3>
        {price && <div className="text-2xl font-extrabold text-gray-300">{price}</div>}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-300">
        {perks.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <BadgeCheck className="mt-0.5 h-4 w-4 text-sky-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      {cta && (
        <div className="mt-6">
          <Button asChild className="w-full bg-sky-500 text-white hover:bg-sky-400">
            <Link href="/contact">Rezervă vizita</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

/* ————— Decoruri Halloween, stil line-art (doar desktop, vezi sectiunea posterului) ————— */

function HalloweenBat({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M12 7c-1-2-3-3.3-5.2-3-1 1.7 0 3.4 1 4.6C5 8 2.5 9 1 10.8c1.8 0 3.6.4 5.1 1.3-1.5.6-2.8 1.6-3.7 2.9 1.8-.3 3.6-.9 5.1-1.9-.1 1.5.2 3 .8 4.4.7-1.2 1.2-2.6 1.4-4 .6 1.3 1 2.7 1.3 4.1.5-1.4.7-2.9.6-4.4 1.5 1 3.3 1.6 5.1 1.9-1-1.3-2.3-2.3-3.8-2.9 1.6-.9 3.4-1.3 5.2-1.3-1.5-1.8-3.9-2.8-6.3-2.4 1.2-1.1 2.2-2.9 1.2-4.6C15 3.6 13 4.9 12 7Z" />
      <circle cx="12" cy="8.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function HalloweenPumpkin({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M11 2v2.2" />
      <path d="M9.5 4.6c1.6-.8 3.4-.8 5 0" />
      <ellipse cx="12" cy="12.5" rx="7" ry="8.5" />
      <path d="M9 5.5c-2.4 1.7-3.6 4.4-3.6 7 0 1.5.3 3 .9 4.3M15 5.5c2.4 1.7 3.6 4.4 3.6 7 0 1.5-.3 3-.9 4.3" />
      <path d="M9.8 9.5c.5 1.3.5 2.9 0 4.2M14.2 9.5c-.5 1.3-.5 2.9 0 4.2" />
    </svg>
  )
}

function HalloweenMoon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M20.7 14.6A9 9 0 1 1 9.4 3.3a7 7 0 0 0 11.3 11.3Z" />
    </svg>
  )
}

function HalloweenStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d="M12 2l1.8 6.3L20 10l-6.2 1.7L12 18l-1.8-6.3L4 10l6.2-1.7L12 2Z" />
    </svg>
  )
}

function HalloweenGhost({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <path d="M5 20V11a7 7 0 0 1 14 0v9l-2.3-1.8L14.7 20l-2.3-1.8L10.1 20l-2.4-1.8L5 20Z" />
      <circle cx="9.5" cy="11" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="11" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

function HalloweenSpider({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <ellipse cx="12" cy="13" rx="2.6" ry="3.2" />
      <circle cx="12" cy="8.3" r="1.6" />
      <path d="M9 11.5 3.5 9M9 13.5l-6 .5M9.8 16l-5 3M15 11.5l5.5-2.5M15 13.5l6 .5M14.2 16l5 3" />
    </svg>
  )
}

function HalloweenSpiderweb({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className={className} style={style} aria-hidden="true">
      <path d="M0 0 100 0M0 0 65 25M0 0 40 55M0 0 25 90M0 0 0 100" />
      <path d="M48 2a65 65 0 0 0-46 46M68 4a85 85 0 0 0-64 64M86 8a97 97 0 0 0-78 78" />
    </svg>
  )
}
