import { ELEMENTAR } from "@/lib/entity"

export default function DesprePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Parcul de Știință Elementar – Chișinău</h1>

      <p className="mt-4 text-lg">{ELEMENTAR.descriptionLong}</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Cine suntem</h2>
        <p className="mt-3">
          Elementar este un parc educațional interactiv în care copiii învață prin experiment și explorare ghidată.
          Conceptele științifice sunt prezentate simplu, prin demonstrații și activități practice.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Ce oferim</h2>
        <ul className="mt-3 list-disc pl-6">
          <li>Experimente interactive de fizică</li>
          <li>Demonstrații de chimie</li>
          <li>Zone tematice de astronomie</li>
          <li>Ateliere practice pentru copii</li>
          <li>Programe pentru excursii școlare</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Cui ne adresăm</h2>
        <ul className="mt-3 list-disc pl-6">
          {ELEMENTAR.audience.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Unde ne aflăm</h2>
        <p className="mt-3">
          {ELEMENTAR.address.streetAddress}, {ELEMENTAR.address.addressLocality}, Republica Moldova.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Misiunea noastră</h2>
        <p className="mt-3">
          Transformăm curiozitatea copiilor în înțelegere și încredere, prin experiențe STEM memorabile și sigure.
        </p>
      </section>
    </main>
  )
}
