"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, Share2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

// ---------------------------------------------
// CONFIGURAȚIE GALERIE
// ---------------------------------------------

// IMAGINI DIN /public/images
const galleryImages = [
  // ILUZII OPTICE
  {
    src: "/images/bigtable.webp",
    alt: "Iluzie optică cu masă și scaune uriașe la Elementar",
    category: "Iluzii Optice",
  },
  {
    src: "/images/head_on_tablle.webp",
    alt: "Iluzie optică masa fără corp, cap pe masă la Elementar",
    category: "Iluzii Optice",
  },

  // HARTĂ ȘI EXPLORARE
  {
    src: "/images/harta.webp",
    alt: "Copil explorând harta iluminată a Republicii Moldova - exhibit interactiv",
    category: "Hartă & Explorare",
  },
  {
    src: "/images/hartazoom.webp",
    alt: "Hartă detaliată a Republicii Moldova la Elementar - zoom pe regiuni",
    category: "Hartă & Explorare",
  },
  {
    src: "/images/ghidgrup.webp",
    alt: "Ghidaj de grup la Elementar - prezentare interactivă",
    category: "Hartă & Explorare",
  },

  // EXPERIMENTE PRACTICE
  {
    src: "/images/bots1.webp",
    alt: "Copil participând la experiment cu șireturi și instrumente",
    category: "Experimente Practice",
  },
  {
    src: "/images/botts.webp",
    alt: "Prezentare interactivă despre echipamente și siguranță",
    category: "Experimente Practice",
  },
  {
    src: "/images/cube.webp",
    alt: "Activitate de logică și construcție cu cuburi colorate",
    category: "Experimente Practice",
  },
  {
    src: "/images/iqpuzzle.webp",
    alt: "Puzzle interactiv IQ cu forme geometrice la Elementar",
    category: "Experimente Practice",
  },
  {
    src: "/images/puzzle.webp",
    alt: "Mască anatomică puzzle - organelle umane, activitate educativă",
    category: "Experimente Practice",
  },

  // CURSE AUTO
  {
    src: "/images/race_trace.webp",
    alt: "Circuit auto pentru copii - mașinuțe telecomandate",
    category: "Curse Auto",
  },
  {
    src: "/images/race_trace2.webp",
    alt: "Copii participând la curse auto pe circuit interactiv",
    category: "Curse Auto",
  },

  // WELCOME WALL
  {
    src: "/images/welcome_to_elementar.webp",
    alt: "Peretele Elementar, logo oficial și zonă foto pentru vizitatori",
    category: "Welcome",
  },
]

// VIDEOURI DIN /public/video
const galleryVideos = [
  {
    src: "/video/introelementar.webm",
    alt: "Video introductiv despre Elementar Parc de Știință",
    category: "Video",
  },
  {
    src: "/video/overview.webm",
    alt: "Tur video general al parcului de știință Elementar",
    category: "Video",
  },
  {
    src: "/video/Fizica.webm",
    alt: "Demonstratie video de experimente de fizică la Elementar",
    category: "Video",
  },
  {
    src: "/video/airtube.webm",
    alt: "Experiment cu tub de aer - demonstrație științifică interactiva",
    category: "Video",
  },
]

// CATEGORII
const categories = [
  "Toate",
  "Iluzii Optice",
  "Hartă & Explorare",
  "Experimente Practice",
  "Curse Auto",
  "Welcome",
  "Video",
]

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)

  const filteredImages =
    selectedCategory === "Toate"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const filteredVideos =
    selectedCategory === "Toate"
      ? galleryVideos
      : galleryVideos.filter((v) => v.category === selectedCategory)

  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"

  return (
    <>
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 text-center space-y-6">
            <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 ${fx}`}>
              <Sparkles className="h-3.5 w-3.5 text-sky-400" /> Galerie Foto & Video
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              Descoperă Elementar
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Galerie completă cu imagini reale și videouri din parc — pentru părinți și copii.
            </p>
          </div>
        </section>

        {/* CATEGORII */}
        <section className="py-8 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/15"
                } ${fx}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* GALERIE IMAGINI + VIDEO */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500">
              Galerie
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* IMAGINI */}
              {filteredImages.map((img, index) => (
                <MediaCard
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  category={img.category}
                  fx={fx}
                  onClick={() => setSelectedMedia(img.src)}
                  type="image"
                />
              ))}

              {/* VIDEOURI */}
              {filteredVideos.map((vid, index) => (
                <MediaCard
                  key={index}
                  src={vid.src}
                  alt={vid.alt}
                  category={vid.category}
                  fx={fx}
                  onClick={() => setSelectedMedia(vid.src)}
                  type="video"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* MODAL MEDIA */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {selectedMedia.endsWith(".webm") ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <img
                src={selectedMedia}
                alt="Previzualizare media"
                className="w-full h-full object-contain rounded-lg"
              />
            )}
            <button
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full"
              onClick={() => setSelectedMedia(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

// -----------------------------------------------------------
// Card pentru imagine / video
// -----------------------------------------------------------

function MediaCard({
  src,
  alt,
  category,
  fx,
  type,
  onClick,
}: {
  src: string
  alt: string
  category: string
  fx: string
  type: "image" | "video"
  onClick: () => void
}) {
  return (
    <div className={`group relative overflow-hidden rounded-xl cursor-pointer ${fx}`} onClick={onClick}>
      {type === "video" ? (
        <video
          src={src}
          muted
          className="w-full h-64 object-cover"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="absolute top-3 left-3 px-2 py-1 bg-sky-500/80 text-white text-xs rounded-full">
        {category}
      </div>

      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-2">
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30">
            <Share2 className="h-4 w-4" />
          </button>
          <a
            href={src}
            download
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
