"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Download, Share2, PlayCircle } from "lucide-react"

type MediaItem = {
  type: "image" | "video"
  src: string
  alt: string
  category: string
}

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)

  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"

  // Imagini reale din /public/images și video-urile din /public/video
  const galleryMedia: MediaItem[] = [
    {
      type: "image",
      src: "/images/bigtable.webp",
      alt: "Iluzie optică la ELEMENTAR – masă uriașă la care copiii par pitici într-un decor de puncte colorate",
      category: "Iluzii optice",
    },
    {
      type: "image",
      src: "/images/head_on_tablle.webp",
      alt: "Iluzie optică la ELEMENTAR – copil cu capul aparent așezat pe masă într-o cameră desenată alb-negru",
      category: "Iluzii optice",
    },
    {
      type: "image",
      src: "/images/bots1.webp",
      alt: "Copii care testează roboți și dispozitive interactive la parcursul de știință ELEMENTAR",
      category: "Experimente & jocuri",
    },
    {
      type: "image",
      src: "/images/botts.webp",
      alt: "Activitate practică cu roboți și senzori pentru copii la ELEMENTAR Science Park",
      category: "Experimente & jocuri",
    },
    {
      type: "image",
      src: "/images/cube.webp",
      alt: "Copil și părinte experimentând un cub interactiv de știință la ELEMENTAR",
      category: "Experimente & jocuri",
    },
    {
      type: "image",
      src: "/images/ghidgrup.webp",
      alt: "Grup de copii și părinți ghidați de un educator în parcursul de știință ELEMENTAR",
      category: "Experiențe în parc",
    },
    {
      type: "image",
      src: "/images/harta.webp",
      alt: "Hartă interactivă de lume la ELEMENTAR, unde copiii descoperă orașe și regiuni",
      category: "Hărți & explorare",
    },
    {
      type: "image",
      src: "/images/hartazoom.webp",
      alt: "Detaliu din harta interactivă – deget arătând către orașe pe panoul educativ ELEMENTAR",
      category: "Hărți & explorare",
    },
    {
      type: "image",
      src: "/images/iqpuzzle.webp",
      alt: "Copil care rezolvă un puzzle logic IQ la masa de jocuri STEM în parcul ELEMENTAR",
      category: "Puzzle & logică",
    },
    {
      type: "image",
      src: "/images/puzzle.webp",
      alt: "Activitate de puzzle interactiv cu părinți și copii la ELEMENTAR Science Park",
      category: "Puzzle & logică",
    },
    {
      type: "image",
      src: "/images/race_trace.webp",
      alt: "Traseu de mașinuțe cu piste colorate unde copiii testează viteza și curbele",
      category: "Experimente & jocuri",
    },
    {
      type: "image",
      src: "/images/race_trace2.webp",
      alt: "Copii care se joacă cu mașinuțe pe un circuit complex la ELEMENTAR",
      category: "Experimente & jocuri",
    },
    {
      type: "image",
      src: "/images/welcome_to_elementar.webp",
      alt: "Panoul de bun venit ELEMENTAR – parc de știință și curiozități pentru copii și părinți",
      category: "Experiențe în parc",
    },

    // VIDEO – categoria „Video”
    {
      type: "video",
      src: "/video/introelementar.webm",
      alt: "Video de prezentare ELEMENTAR – tur general al parcului de știință pentru copii și părinți",
      category: "Video",
    },
    {
      type: "video",
      src: "/video/overview.webm",
      alt: "Overview video – spațiile principale și zonele interactive ale parcului de știință ELEMENTAR",
      category: "Video",
    },
    {
      type: "video",
      src: "/video/Fizica.webm",
      alt: "Video cu experimente de fizică pentru copii realizate în parcursul de știință ELEMENTAR",
      category: "Video",
    },
    {
      type: "video",
      src: "/video/airtube.webm",
      alt: "Video airtube – instalație interactivă cu tuburi de aer prin care circulă obiecte colorate",
      category: "Video",
    },
  ]

  const categories = [
    "Toate",
    "Experiențe în parc",
    "Experimente & jocuri",
    "Iluzii optice",
    "Hărți & explorare",
    "Puzzle & logică",
    "Video",
  ]

  const filteredMedia =
    selectedCategory === "Toate"
      ? galleryMedia
      : galleryMedia.filter((item) => item.category === selectedCategory)

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
                Galerie foto & video
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                Știința în imagini și povești
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Răsfoiește fotografii și clipuri video din ELEMENTAR – parc de știință și curiozități unde copiii
                experimentează, descoperă și se joacă împreună cu părinții.
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

        {/* GALERIA PRINCIPALĂ */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle title="Colecția noastră de momente" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMedia.map((item, index) => (
                <GalleryCard
                  key={index}
                  fx={fx}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
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
                <h3 className="text-lg font-bold text-gray-300 mb-2">Domenii științifice</h3>
                <p className="text-gray-400 text-sm">Vezi ce experimente și zone tematice găsești la ELEMENTAR.</p>
              </Link>
              <Link
                href="/contact"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Rezervă o vizită</h3>
                <p className="text-gray-400 text-sm">Programează o excursie pentru familie, clasă sau grup organizat.</p>
              </Link>
              <Link
                href="/faq"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Întrebări frecvente</h3>
                <p className="text-gray-400 text-sm">Află detalii practice despre bilete, program și acces.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL PENTRU IMAGINE / VIDEO MĂRIT */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedItem.src}
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                playsInline
              />
            )}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Închide media"
            >
              ✕
            </button>
            <p className="mt-3 text-sm text-gray-300 text-center">{selectedItem.alt}</p>
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

function GalleryCard({
  fx,
  item,
  onClick,
}: {
  fx: string
  item: MediaItem
  onClick: () => void
}) {
  const isVideo = item.type === "video"

  return (
    <div
      className={`group relative overflow-hidden rounded-xl cursor-pointer ${fx}`}
      onClick={onClick}
      aria-label={item.alt}
    >
      {isVideo ? (
        <div className="relative w-full h-64 overflow-hidden">
          <video
            src={item.src}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 px-3 py-2 bg-black/70 rounded-full text-white text-sm">
              <PlayCircle className="h-5 w-5" />
              <span>Vezi video</span>
            </div>
          </div>
        </div>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-sky-500/80 hover:bg-sky-600/80 text-white text-xs rounded-full transition-colors pointer-events-auto">
            {item.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          <div className="flex gap-2">
            <button
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              aria-label="Copiază linkul imaginii sau videoclipului"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              aria-label="Descarcă imaginea"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
