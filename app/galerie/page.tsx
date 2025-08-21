"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Download, Share2 } from "lucide-react"
import { useState } from "react"
import BlobUpload from "@/components/blob-upload"
import GalleryClient from "@/components/gallery-client"

export default function GaleriePage() {
  const [uploadVersion, setUploadVersion] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"

  const galleryImages = [
    {
      src: "/astronomie-planetariu-tehnologie.png",
      alt: "Planetariu interactiv cu copii explorând sistemul solar",
      category: "Astronomie",
    },
    {
      src: "/optical-illusions-science-exhibit.png",
      alt: "Expoziție de iluzii optice cu instalații interactive",
      category: "Fizică",
    },
    {
      src: "/hands-on-science-experiment.png",
      alt: "Copii participând la experimente hands-on",
      category: "Experimente",
    },
    {
      src: "/planetariu-astronomie-copii.png",
      alt: "Sesiune de astronomie în planetariu",
      category: "Astronomie",
    },
    {
      src: "/provocari-logice-puzzle-stiinta.png",
      alt: "Provocări logice și puzzle-uri științifice",
      category: "Matematică",
    },
    {
      src: "/tesla-coil-experiment.png",
      alt: "Experiment cu bobina Tesla și descărcări electrice",
      category: "Fizică",
    },
    {
      src: "/interactive-physics-experiment.png",
      alt: "Experimente interactive de fizică",
      category: "Fizică",
    },
    {
      src: "/interactive-biology-microscope.png",
      alt: "Explorarea lumii microscopice",
      category: "Biologie",
    },
    {
      src: "/colorful-chemistry-experiments.png",
      alt: "Experimente chimice colorate și spectaculoase",
      category: "Chimie",
    },
  ]

  const categories = ["Toate", "Fizică", "Chimie", "Biologie", "Astronomie", "Matematică", "Experimente"]
  const [selectedCategory, setSelectedCategory] = useState("Toate")

  const filteredImages =
    selectedCategory === "Toate" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center space-y-6">
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 ${fx}`}
              >
                <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                {"Galerie Foto"}
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                {"Știința în imagini"}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Descoperă momentele magice ale explorării științifice prin colecția noastră de fotografii din
                experiențele interactive și atelierele educative.
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
            <SectionTitle title="Colecția noastră" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages.map((image, index) => (
                <GalleryImageCard
                  key={index}
                  fx={fx}
                  src={image.src}
                  alt={image.alt}
                  category={image.category}
                  onClick={() => setSelectedImage(image.src)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* UPLOAD SECTION */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-8">
              <SectionTitle title="Împărtășește experiența ta" />
              <p className="mt-4 text-gray-300">
                Ai vizitat parcul nostru? Încarcă fotografiile tale și ajută-ne să construim o galerie comună a
                momentelor speciale.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <BlobUpload
                onUploaded={() => setUploadVersion((v) => v + 1)}
                helperText="Acceptăm imagini JPG, PNG până la 4.5MB"
              />
            </div>
          </div>
        </section>

        {/* IMAGINI ÎNCĂRCATE DE UTILIZATORI */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle title="Imagini încărcate de vizitatori" />
            <div className="mt-8">
              <GalleryClient version={uploadVersion} />
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
                <p className="text-gray-400 text-sm">Explorează domeniile științifice</p>
              </Link>
              <Link
                href="/domenii"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Domenii Științifice</h3>
                <p className="text-gray-400 text-sm">Explorează domeniile științifice</p>
              </Link>
              <Link
                href="/faq"
                className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
              >
                <h3 className="text-lg font-bold text-gray-300 mb-2">Întrebări Frecvente</h3>
                <p className="text-gray-400 text-sm">Află mai multe despre experiențele din fotografii</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL PENTRU IMAGINE MĂRITĂ */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Imagine mărită"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
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

/* ————— Sub‑componente ————— */

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
  onClick,
}: {
  fx: string
  src: string
  alt: string
  category: string
  onClick: () => void
}) {
  const getCategoryLink = (category: string) => {
    switch (category) {
      case "Fizică":
      case "Chimie":
      case "Biologie":
      case "Astronomie":
      case "Matematică":
        return "/domenii"
      case "Experimente":
        return "/experiente"
      default:
        return "/experiente"
    }
  }

  return (
    <div className={`group relative overflow-hidden rounded-xl cursor-pointer ${fx}`} onClick={onClick}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <Link href={getCategoryLink(category)} className="absolute top-3 left-3">
        <span className="px-2 py-1 bg-sky-500/80 hover:bg-sky-600/80 text-white text-xs rounded-full transition-colors">
          {category}
        </span>
      </Link>
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
