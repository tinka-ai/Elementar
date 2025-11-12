"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Download, Share2, Play } from "lucide-react"

type BaseItem = {
  id: string
  title: string
  alt: string
  category: "Iluzii Optice" | "Hărți & Explorare" | "Experimente Practice" | "Curse Auto" | "Welcome" | "Video"
}

type ImageItem = BaseItem & {
  type: "image"
  src: string
}

type VideoItem = BaseItem & {
  type: "video"
  src: string
  poster?: string
}

type GalleryItem = ImageItem | VideoItem

const galleryItems: GalleryItem[] = [
  // ILUZII OPTICE
  {
    id: "bigtable",
    type: "image",
    src: "/images/bigtable.webp",
    category: "Iluzii Optice",
    title: "Iluzie optică cu masă și scaune uriașe la ELEMENTAR",
    alt: "Iluzie optică cu masă și scaune uriașe în parcul de știință ELEMENTAR, unde adulții par miniaturizați.",
  },
  {
    id: "head_on_table",
    type: "image",
    src: "/images/head_on_tablle.webp",
    category: "Iluzii Optice",
    title: "Iluzie optică la ELEMENTAR cu capul așezat pe masă",
    alt: "Iluzie optică la ELEMENTAR unde capul unei persoane pare a fi așezat pe o masă într-un decor alb-negru.",
  },

  // HĂRȚI & EXPLORARE
  {
    id: "harta",
    type: "image",
    src: "/images/harta.webp",
    category: "Hărți & Explorare",
    title: "Hartă luminoasă a Republicii Moldova la ELEMENTAR",
    alt: "Adolescent explorând harta luminoasă a Republicii Moldova la ELEMENTAR, hartă educativă cu județe iluminate.",
  },
  {
    id: "harta_zoom",
    type: "image",
    src: "/images/hartazoom.webp",
    category: "Hărți & Explorare",
    title: "Zoom pe harta Republicii Moldova la ELEMENTAR",
    alt: "Detaliu cu degetul unui copil arătând orașul Chișinău pe harta Republicii Moldova la ELEMENTAR.",
  },

  // EXPERIMENTE PRACTICE
  {
    id: "bots1",
    type: "image",
    src: "/images/bots1.webp",
    category: "Experimente Practice",
    title: "Experiment cu echipamente de siguranță la ELEMENTAR",
    alt: "Copil testând un pantof de protecție pe un stand interactiv de siguranță la ELEMENTAR.",
  },
  {
    id: "botts",
    type: "image",
    src: "/images/botts.webp",
    category: "Experimente Practice",
    title: "Prezentare ghidată a experimentului cu șireturi și pantof de protecție",
    alt: "Ghidă la ELEMENTAR demonstrând un experiment practic cu pantof de protecție și șireturi colorate.",
  },
  {
    id: "cube",
    type: "image",
    src: "/images/cube.webp",
    category: "Experimente Practice",
    title: "Copii descoperă un cub interactiv luminos",
    alt: "Două fete care descoperă un cub interactiv luminos la ELEMENTAR, într-un spațiu de explorare științifică.",
  },
  {
    id: "iqpuzzle",
    type: "image",
    src: "/images/iqpuzzle.webp",
    category: "Experimente Practice",
    title: "Puzzle IQ cu forme geometrice colorate",
    alt: "Activitate IQ puzzle cu forme geometrice colorate pe o masă interactivă la ELEMENTAR.",
  },
  {
    id: "puzzle_anatomic",
    type: "image",
    src: "/images/puzzle.webp",
    category: "Experimente Practice",
    title: "Puzzle anatomic colorat – organele umane",
    alt: "Familie rezolvând un puzzle anatomic colorat cu organele interne ale corpului uman la ELEMENTAR.",
  },

  // CURSE AUTO
  {
    id: "race_trace",
    type: "image",
    src: "/images/race_trace.webp",
    category: "Curse Auto",
    title: "Circuit auto interactiv pentru copii la ELEMENTAR",
    alt: "Mamă și copil jucându-se cu mașinuțe teleghidate pe circuitul auto interactiv la ELEMENTAR.",
  },
  {
    id: "race_trace2",
    type: "image",
    src: "/images/race_trace2.webp",
    category: "Curse Auto",
    title: "Copii la curse auto pe circuitul interactiv",
    alt: "Doi copii conducând mașinuțe pe un circuit auto complex cu curbe și poduri la ELEMENTAR.",
  },

  // WELCOME / LOGO
  {
    id: "welcome",
    type: "image",
    src: "/images/welcome_to_elementar.webp",
    category: "Welcome",
    title: "Zonă foto cu logo-ul ELEMENTAR – Parc de știință și curiozități",
    alt: "Vizitatoare pozând lângă logo-ul ELEMENTAR – parc de știință și curiozități pentru copii și părinți.",
  },

  // VIDEO
  {
    id: "video_intro",
    type: "video",
    src: "/video/introelementar.webm",
    poster: "/images/welcome_to_elementar.webp",
    category: "Video",
    title: "Tur general prin parc – prezentare ELEMENTAR",
    alt: "Videoclip de prezentare generală a parcului de știință și curiozități ELEMENTAR.",
  },
  {
    id: "video_overview",
    type: "video",
    src: "/video/overview.webm",
    poster: "/images/bigtable.webp",
    category: "Video",
    title: "Tur general prin parc – overview cu activități",
    alt: "Videoclip overview cu mai multe zone interactive și activități din parcul ELEMENTAR.",
  },
  {
    id: "video_fizica",
    type: "video",
    src: "/video/Fizica.webm",
    poster: "/images/cube.webp",
    category: "Video",
    title: "Experimente de fizică la ELEMENTAR",
    alt: "Videoclip cu experimente de fizică și instalații interactive în parc.",
  },
  {
    id: "video_airtube",
    type: "video",
    src: "/video/airtube.webm",
    poster: "/images/race_trace2.webp",
    category: "Video",
    title: "Experiment cu aer și tuburi la ELEMENTAR",
    alt: "Videoclip cu experiment de tip airtube, în care copiii urmăresc mișcarea obiectelor prin tuburi cu aer.",
  },
]

const categories = ["Toate", "Iluzii Optice", "Hărți & Explorare", "Experimente Practice", "Curse Auto", "Welcome", "Video"] as const

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("Toate")
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null)

  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"

  const filteredItems =
    selectedCategory === "Toate"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <>
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center space-y-6">
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 ${fx}`}
              >
                <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                Galerie Foto & Video
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                Descoperă Elementar
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Galerie completă cu imagini reale și videoclipuri din parc — pentru părinți și copii curioși.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild className={`bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
                  <Link href="/domenii">
                    Vezi domeniile
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
          </div>
        </section>

        {/* FILTRU CATEGORII */}
        <section className="py-8 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-sky-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/15"
                  } ${fx}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle title="Galerie" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) =>
                item.type === "image" ? (
                  <GalleryImageCard
                    key={item.id}
                    fx={fx}
                    src={item.src}
                    alt={item.alt}
                    category={item.category}
                    title={item.title}
                    onClick={() => setSelectedMedia(item)}
                  />
                ) : (
                  <GalleryVideoCard
                    key={item.id}
                    fx={fx}
                    src={item.src}
                    poster={item.poster}
                    category={item.category}
                    title={item.title}
                    alt={item.alt}
                    onClick={() => setSelectedMedia(item)}
                  />
                ),
              )}
            </div>
          </div>
        </section>

        {/* PAGINI CONEXE */}
        <section className="py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-8 text-center">Descoperă mai mult</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/domenii"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Domenii Științifice</h3>
                <p className="text-gray-400 text-sm">Explorează ce poți experimenta la ELEMENTAR.</p>
              </Link>
              <Link
                href="/galerie"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Galerie Foto & Video</h3>
                <p className="text-gray-400 text-sm">Vezi mai multe imagini și clipuri din parc.</p>
              </Link>
              <Link
                href="/faq"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Întrebări Frecvente</h3>
                <p className="text-gray-400 text-sm">Află cum decurge o vizită la ELEMENTAR.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL MEDIA MĂRITĂ */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                poster={selectedMedia.poster}
                controls
                autoPlay
                className="w-full h-full object-contain rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
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

function GalleryImageCard({
  fx,
  src,
  alt,
  category,
  title,
  onClick,
}: {
  fx: string
  src: string
  alt: string
  category: string
  title: string
  onClick: () => void
}) {
  return (
    <div className={`group relative overflow-hidden rounded-xl cursor-pointer ${fx}`} onClick={onClick}>
      <img
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-sm font-semibold text-white drop-shadow-sm line-clamp-2">{title}</p>
      </div>
      <span className="absolute top-3 left-3 px-2 py-1 bg-sky-500/80 hover:bg-sky-600/80 text-white text-xs rounded-full transition-colors">
        {category}
      </span>
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-2">
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <Share2 className="h-4 w-4" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function GalleryVideoCard({
  fx,
  src,
  poster,
  category,
  title,
  alt,
  onClick,
}: {
  fx: string
  src: string
  poster?: string
  category: string
  title: string
  alt: string
  onClick: () => void
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl cursor-pointer bg-black/60 ${fx}`}
      onClick={onClick}
      aria-label={alt}
    >
      <video
        src={src}
        poster={poster}
        muted
        loop
        className="w-full h-64 object-cover"
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
            <Play className="h-6 w-6 text-white" />
          </div>
          <p className="text-sm font-semibold text-white text-center px-4 line-clamp-2">{title}</p>
        </div>
      </div>
      <span className="absolute top-3 left-3 px-2 py-1 bg-sky-500/80 text-white text-xs rounded-full">
        {category}
      </span>
    </div>
  )
}
