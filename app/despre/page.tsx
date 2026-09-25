import type { Metadata } from "next"
import Link from "next/link"
import { BadgeCheck } from "lucide-react"
import { ELEMENTAR } from "@/lib/entity"

export const metadata: Metadata = {
  title: "Despre ELEMENTAR — Parcul de Știință din Chișinău",
  description:
    "Cine suntem, ce oferim și cui ne adresăm la ELEMENTAR — parc educațional interactiv în Port Mall, Chișinău, cu experimente de fizică, chimie și astronomie pentru copii.",
  alternates: {
    canonical: `${ELEMENTAR.url}/despre`,
  },
  openGraph: {
    title: "Despre ELEMENTAR — Parcul de Știință din Chișinău",
    description:
      "Cine suntem, ce oferim și cui ne adresăm la ELEMENTAR — parc educațional interactiv în Port Mall, Chișinău.",
    url: `${ELEMENTAR.url}/despre`,
  },
}

export default function DesprePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-200">
          Acasă
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-200">Despre</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          Parcul de Știință ELEMENTAR — Chișinău
        </h1>
        <p className="mt-4 text-lg text-gray-300">{ELEMENTAR.descriptionLong}</p>
      </header>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Cine suntem</h2>
        <p className="text-gray-300">
          Elementar este un parc educațional interactiv în care copiii învață prin experiment și explorare ghidată.
          Conceptele științifice sunt prezentate simplu, prin demonstrații și activități practice.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Ce oferim</h2>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <ul className="space-y-2 text-gray-300">
            {[
              "Experimente interactive de fizică",
              "Demonstrații de chimie",
              "Zone tematice de astronomie",
              "Ateliere practice pentru copii",
              "Programe pentru excursii școlare",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Cui ne adresăm</h2>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <ul className="space-y-2 text-gray-300">
            {ELEMENTAR.audience.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Unde ne aflăm</h2>
        <p className="text-gray-300">
          {ELEMENTAR.address.streetAddress}, {ELEMENTAR.address.addressLocality}, Republica Moldova.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Misiunea noastră</h2>
        <p className="text-gray-300">
          Transformăm curiozitatea copiilor în înțelegere și încredere, prin experiențe STEM memorabile și sigure.
        </p>

        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300">
          <p>
            Vrei să planifici o vizită? Vezi{" "}
            <Link href="/domenii" className="text-sky-400 hover:text-sky-300 font-semibold">
              domeniile științifice
            </Link>{" "}
            explorate în parc sau{" "}
            <Link href="/contact" className="text-sky-400 hover:text-sky-300 font-semibold">
              contactează-ne
            </Link>{" "}
            direct pentru program și rezervări.
          </p>
        </div>
      </section>
    </main>
  )
}
