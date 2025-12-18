"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Download, Share2, Play } from "lucide-react"

/* =======================
   TIPURI
======================= */

type Category =
  | "Iluzii Optice"
  | "Explorare"
  | "Experimente Practice"
  | "Video"

type BaseItem = {
  id: string
  title: string
  alt: string
  category: Category
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

/* =======================
   DATE GALERIE
======================= */

const galleryItems: GalleryItem[] = [
  // ILUZII OPTICE
  {
    id: "bigtable",
    type: "image",
    src: "/images/bigtable.webp",
    category: "Iluzii Optice",
    title: "Masă și scaune uriașe",
    alt: "Iluzie optică cu masă și scaune uriașe la ELEMENTAR.",
  },
  {
    id: "head_on_table",
    type: "image",
    src: "/images/head_on_tablle.webp",
    category: "Iluzii Optice",
    title: "Capul pe masă",
    alt: "Iluzie optică în care capul pare separat de corp.",
  },
  {
    id: "3-color-chess",
    type: "image",
    src: "/images/3-color-cheess.webp",
    category: "Iluzii Optice",
    title: "Șah tridimensional cu trei culori",
    alt: "Instalație de șah tridimensional la ELEMENTAR.",
  },
  {
    id: "pentagon",
    type: "image",
    src: "/images/pentagon.webp",
    category: "Iluzii Optice",
    title: "Iluzie optică – Pentagon",
    alt: "Iluzie optică geometrică de tip pentagon.",
  },
  {
    id: "real-and-copy",
    type: "image",
    src: "/images/real-and-copy.webp",
    category: "Iluzii Optice",
    title: "Real sau copie?",
    alt: "Instalație educațională despre percepție.",
  },

  // EXPLORARE
  {
    id: "welcome",
    type: "image",
    src: "/images/welcome_to_elementar.webp",
    category: "Explorare",
    title: "Zona foto ELEMENTAR",
    alt: "Vizitatori la zona foto ELEMENTAR.",
  },
  {
    id: "harta",
    type: "image",
    src: "/images/harta.webp",
    category: "Explorare",
    title: "Harta Republicii Moldova",
    alt: "Hartă educativă luminoasă.",
  },
  {
    id: "harta_zoom",
    type: "image",
    src: "/images/hartazoom.webp",
    category: "Explorare",
    title: "Zoom hartă Moldova",
    alt: "Detaliu hartă Moldova.",
  },
  {
    id: "group-children",
    type: "image",
    src: "/images/crup-din-3-copii.jpg",
    category: "Explorare",
    title: "Grup de copii la ELEMENTAR",
    alt: "Copii explorând instalațiile interactive.",
  },
  {
    id: "elementar-selfie",
    type: "image",
    src: "/images/Elementar-selfie.webp",
    category: "Explorare",
    title: "Selfie la ELEMENTAR",
    alt: "Vizitatori făcând selfie.",
  },

  // EXPERIMENTE PRACTICE
  {
    id: "bots1",
    type: "image",
    src: "/images/bots1.webp",
    category: "Experimente Practice",
    title: "Echipamente de siguranță",
    alt: "Experiment cu pantof de protecție.",
  },
  {
    id: "botts",
    type: "image",
    src: "/images/botts.webp",
    category: "Experimente Practice",
    title: "Experiment ghidat",
    alt: "Prezentare ghidată.",
  },
  {
    id: "cube",
    type: "image",
    src: "/images/cube.webp",
    category: "Experimente Practice",
    title: "Cub interactiv",
    alt: "Cub interactiv luminos.",
  },
  {
    id: "cubes-real",
    type: "image",
    src: "/images/cubes.jpg",
    category: "Experimente Practice",
    title: "Cuburi de construcție",
    alt: "Copii construind cu cuburi.",
  },
  {
    id: "organe-interne",
    type: "image",
    src: "/images/organe-interne.webp",
    category: "Experimente Practice",
    title: "Organe interne – puzzle",
    alt: "Puzzle educațional cu organe interne.",
  },
  {
    id: "catch-it",
    type: "image",
    src: "/images/catch-it.webp",
    category: "Experimente Practice",
    title: "Catch It",
    alt: "Joc de reacție și coordonare.",
  },

  // VIDEO
  {
    id: "video_intro",
    type: "video",
    src: "/video/introelementar.webm",
    poster: "/images/welcome_to_elementar.webp",
    category: "Video",
    title: "Tur general ELEMENTAR",
    alt: "Video prezentare parc.",
  },
]

const categories: (Category | "Toate")[] = [
  "Toate",
  "Iluzii Optice",
  "Explorare",
  "Experimente Practice",
  "Video",
]

/* =======================
   PAGINA
======================= */

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("Toate")
  const [selectedMedia, setSelectedMedia] =
    useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === "Toate"
      ? galleryItems
      : galleryItems.filter((i) => i.category === selectedCategory)

  return (
    <main className="px-4 sm:px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-sm text-sky-300 mb-3">
          <Sparkles className="h-4 w-4" />
          Galerie Foto & Video
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          Descoperă Elementar
        </h1>
      </div>

      {/* FILTRU */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === cat
                ? "bg-sky-500 text-white"
                : "bg-white/10 text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) =>
          item.type === "image" ? (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="cursor-pointer rounded-xl overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="cursor-pointer rounded-xl overflow-hidden relative"
            >
              <video
                src={item.src}
                poster={item.poster}
                muted
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Play className="h-10 w-10 text-white" />
              </div>
            </div>
          ),
        )}
      </div>

      {/* MODAL */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          {selectedMedia.type === "image" ? (
            <img
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              className="max-h-[90vh] object-contain"
            />
          ) : (
            <video
              src={selectedMedia.src}
              poster={selectedMedia.poster}
              controls
              autoPlay
              className="max-h-[90vh]"
            />
          )}
        </div>
      )}
    </main>
  )
}
