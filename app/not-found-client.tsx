// app/not-found-client.tsx
"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function NotFoundClient() {
  const sp = useSearchParams()
  const from = sp.get("from") // dacă ai nevoie de ceva de genul ăsta; altfel șterge complet

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-200">Pagina nu a fost găsită</h1>
      <p className="mt-3 text-gray-300">
        Link-ul nu există sau a fost modificat{from ? ` (de la: ${from})` : ""}.
      </p>

      <div className="mt-6 flex gap-3">
        <Link href="/" className="text-sky-400 hover:text-sky-300 font-semibold">
          Înapoi la Acasă →
        </Link>
      </div>
    </main>
  )
}
