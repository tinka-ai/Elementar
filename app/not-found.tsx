// app/not-found.tsx
import Link from "next/link"

export const dynamic = "force-static"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-200">Pagina nu a fost găsită</h1>
        <p className="mt-4 text-gray-300">
          Adresa accesată nu există sau a fost modificată. Îți recomandăm să revii la paginile principale.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
          >
            Mergi la Acasă
          </Link>

          <Link
            href="/ghiduri"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-200 hover:bg-white/10 transition-colors"
          >
            Vezi ghidurile
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-200 hover:bg-white/10 transition-colors"
          >
            Contact
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          Dacă ai ajuns aici dintr-un link extern, e posibil să fie un link vechi.
        </p>
      </div>
    </main>
  )
}
