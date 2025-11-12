"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Download, Share2, PlayCircle } from "lucide-react"

type GalleryItem = {
  type: "image" | "video"
  src: string
  alt: string
  category: string
  label?: string
}

export default function GaleriePage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"

  /** Elemente din galerie
   *  — imaginile trebuie să existe fizic în: public/images
   *  — videourile trebuie să existe fizic în: public/video
   *  URL-urile din cod sunt: /images/... respectiv /video/...
   */
  const galleryItems: GalleryItem[] = [
    // ILUZII OPTICE
    {
      type: "image",
      src: "/images/bigtable.webp",
      alt: "Iluzie optică la masa cu scaune uriașe în parcul de știință ELEMENTAR",
      category: "Iluzii Optice",
      label: "Masă și scaune uriașe",
    },
    {
      type: "image",
      src: "/images/head_on_tablle.webp",
      alt: "Iluzie optică la ELEMENTAR cu capul așezat pe masă într-un decor alb-negru",
      category: "Iluzii Optice",
      label: "Masă fără corp",
    },

    // HĂRȚI & EXPLORARE
    {
      type: "image",
      src: "/images/hartazoom.webp",
      alt: "Harta Moldovei luminată cu zoom pe Chișinău în parcul de știință ELEMENTAR",
      category: "Hărți & Explorare",
      label: "Hartă Moldova – zoom Chișinău",
    },
    {
      type: "image",
      src: "/images/harta.webp",
      alt: "Adolescent explorând harta luminoasă a Republicii Moldova la ELEMENTAR",
      category: "Hărți & Explorare",
      label: "Hartă interactivă Moldova",
    },

    // EXPERIMENTE PRACTICE
    {
      type: "image",
      src: "/images/bots1.webp",
      alt: "Copil experimentând un dispozitiv interactiv cu șireturi și bocanci la ELEMENTAR",
      category: "Experimente Practice",
      label: "Experiment cu bocanci și șireturi",
    },
    {
      type: "image",
      src: "/images/botts.webp",
      alt: "Ghid ELEMENTAR demonstrând experimentul cu bocanci și șireturi",
      category: "Experimente Practice",
      label: "Demonstrație cu bocanci",
    },
    {
      type: "image",
      src: "/images/cube.webp",
      alt: "Două fete descoperă un cub interactiv luminos în parcul de știință ELEMENTAR",
      category: "Experimente Practice",
      label: "Cub interactiv",
    },
    {
      type: "image",
      src: "/images/iqpuzzle.webp",
      alt: "Activitate IQ puzzle cu forme geometrice colorate la ELEMENTAR",
      category: "Experimente Practice",
      label: "IQ puzzle cu forme geometrice",
    },
    {
      type: "image",
      src: "/images/puzzle.webp",
      alt: "Familie rezolvând un puzzle anatomic colorat la ELEMENTAR",
      category: "Experimente Practice",
      label: "Puzzle anatomic uriaș",
    },

    // CURSE AUTO
    {
      type: "image",
      src: "/images/race_trace.webp",
      alt: "Mamă și copil jucându-se cu mașinuțe telecomandate pe circuit la ELEMENTAR",
      category: "Curse Auto",
      label: "Circuit auto pentru copii",
    },
    {
      type: "image",
      src: "/images/race_trace2.webp",
      alt: "Copii conduc mașinuțe pe circuitul auto interactiv din parcul ELEMENTAR",
      category: "Curse Auto",
      label: "Curse auto pe circuit",
    },

    // WELCOME / BRAND
    {
      type: "image",
      src: "/images/welcome_to_elementar.webp",
      alt: "Zonă foto cu logo-ul oficial ELEMENTAR – Parc de știință și curiozități",
      category: "Welcome",
      label: "Welcome to ELEMENTAR",
    },

    // VIDEO
    {
      type: "video",
      src: "/video/introelementar.webm",
      alt: "Video de prezentare generală a parcului de știință ELEMENTAR pentru părinți și copii",
      category: "Video",
      label: "Prezentare ELEMENTAR",
    },
    {
      type: "video",
      src: "/video/overview.webm",
      alt: "Tur video cu privire de ansamblu asupra expozițiilor din ELEMENTAR",
      category: "Video",
      label: "Tur general prin parc",
    },
    {
      type: "video",
      src: "/video/Fizica.webm",
      alt: "Video cu experimente de fizică și instalații interactive la ELEMENTAR",
      category: "Video",
      label: "Experimente de fizică",
    },
    {
      type: "video",
      src: "/video/airtube.webm",
      alt: "Video cu instalația airtube și experimente cu aer la ELEMENTAR",
      category: "Video",
      label: "Experimente cu aer",
    },
  ]

  const categories = ["Toate", "Iluzii Optice", "Hărți & Explorare", "Experimente Practice", "Curse Auto", "Welcome", "Video"]
  const [selectedCategory, setSelectedCategory] = useState("Toate")

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

        {/* GALERIA PRINCIPALĂ */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle title="Galerie" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <GalleryCard key={index} fx={fx} item={item} onClick={() => setSelectedItem(item)} />
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
                <h3 className="text-lg font-bold text-gray-300 mb-2">Domenii Științifice</h3>
                <p className="text-gray-400 text-sm">Explorează ce poți experimenta la ELEMENTAR</p>
              </Link>
              <Link
                href="/galerie"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Galerie Foto & Video</h3>
                <p className="text-gray-400 text-sm">Vezi mai multe imagini și clipuri din parc</p>
              </Link>
              <Link
                href="/faq"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Întrebări Frecvente</h3>
                <p className="text-gray-400 text-sm">Află cum decurge o vizită la ELEMENTAR</p>
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
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="w-full h-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <img
                src={selectedItem.src || "/placeholder.svg"}
                alt={selectedItem.alt}
                className="w-full h-full max-h-[80vh] object-contain rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            {selectedItem.alt && (
              <p className="mt-3 text-sm text-gray-300 text-center">{selectedItem.alt}</p>
            )}
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

function GalleryCard({ fx, item, onClick }: { fx: string; item: GalleryItem; onClick: () => void }) {
  const isVideo = item.type === "video"

  const getCategoryLink = (_category: string) => "/domenii" // toate duc spre Domenii (deocamdată)

  return (
    <div className={`group relative overflow-hidden rounded-xl cursor-pointer ${fx}`} onClick={onClick}>
      {isVideo ? (
        <div className="relative w-full h-64 bg-black/60 flex items-center justify-center">
          <video
            src={item.src}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-black/70">
                <PlayCircle className="h-10 w-10 text-white" />
              </div>
              {item.label && <span className="text-xs text-gray-100 font-medium">{item.label}</span>}
            </div>
          </div>
        </div>
      ) : (
        <img
          src={item.src || "/placeholder.svg"}
          alt={item.alt}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <Link href={getCategoryLink(item.category)} className="absolute top-3 left-3">
        <span className="px-2 py-1 bg-sky-500/80 hover:bg-sky-600/80 text-white text-xs rounded-full transition-colors">
          {item.category}
        </span>
      </Link>

      {item.type === "image" && (
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
            <button
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                // simplu download via link
                const a = document.createElement("a")
                a.href = item.src
                a.download = ""
                a.click()
              }}
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
