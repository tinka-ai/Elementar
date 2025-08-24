"use client"

// Galerie statică: fără încărcare, fără listă din /api/blob/list
type StaticImage = { src: string; alt: string }

const IMAGES: StaticImage[] = [
  { src: "/images/optical-illusions-science-exhibit.png", alt: "Iluzii optice în sala interactivă" },
  { src: "/images/colorful-chemistry-experiments.png", alt: "Experimente de chimie colorată" },
  { src: "/images/astronomie-planetariu-tehnologie.png", alt: "Astronomie și planetariu" },
  { src: "/images/hands-on-science-experiment.png", alt: "Experimente practice hands-on" },
  { src: "/images/tesla-coil-experiment.png", alt: "Experiment cu bobina Tesla" },
  { src: "/images/planetariu-astronomie-copii.png", alt: "Copii la zona de astronomie" },
  // adaugă/șterge după ce ai imaginile în /public sau /public/images
]

export default function GalleryClient() {
  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] rounded-xl overflow-hidden"

  // Fallback rapid dacă imaginea lipsește (înlocuiește cu /placeholder.svg)
  const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget
    if (el.src.endsWith("/placeholder.svg")) return
    el.src = "/placeholder.svg"
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {IMAGES.map((img, i) => (
        <div key={`${img.src}-${i}`} className={`relative bg-white/5 border border-white/10 ${fx}`}>
          <img
            src={img.src}
            alt={img.alt}
            width={1200}
            height={800}
            className="h-full w-full object-cover"
            loading={i < 3 ? "eager" : "lazy"}
            decoding="async"
            onError={onImgError}
          />
        </div>
      ))}
    </div>
  )
}
