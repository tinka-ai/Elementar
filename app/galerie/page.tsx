import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { ELEMENTAR } from "@/lib/entity"

export const metadata: Metadata = {
  title: "Galerie Foto & Video — revenim în curând",
  description: "Galeria foto și video ELEMENTAR este în curs de actualizare cu imagini noi.",
  alternates: {
    canonical: `${ELEMENTAR.url}/galerie`,
  },
  robots: { index: false, follow: true },
}

export default function GaleriePage() {
  return (
    <main className="px-4 sm:px-6 py-24 max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 text-sm text-sky-300 mb-3">
        <Sparkles className="h-4 w-4" />
        Galerie Foto & Video
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
        Revenim în curând
      </h1>
      <p className="mt-6 text-lg text-gray-300">
        Actualizăm galeria cu imagini noi. Ne poți vizita între timp pe rețelele sociale sau ne poți contacta
        direct pentru orice întrebare despre parc.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/domenii"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-6 py-3 text-white hover:bg-sky-400 transition-colors"
        >
          Vezi domeniile
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 text-gray-200 hover:bg-white/10 transition-colors"
        >
          Contactează-ne
        </Link>
      </div>
    </main>
  )
}
