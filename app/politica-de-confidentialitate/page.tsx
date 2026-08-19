import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politica de Confidențialitate",
  description:
    "Politica de Confidențialitate ELEMENTAR — nu solicităm și nu colectăm date cu caracter personal prin formularul de contact. Orice informație oferită este voluntară.",
  alternates: { canonical: "/politica-de-confidentialitate" },
  robots: { index: true, follow: true },
}

export default function PoliticaDeConfidentialitatePage() {
  return (
    <main className="min-h-dvh bg-black text-gray-200 antialiased">
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
            Politica de Confidențialitate
          </h1>
          <p className="mt-4 text-sm text-gray-400">Ultima actualizare: 19 august 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-10 text-gray-300 leading-relaxed">
          <div className="rounded-lg border border-sky-500/30 bg-sky-500/10 p-5">
            <p className="text-gray-100 font-medium">
              Pe scurt: ELEMENTAR nu solicită și nu colectează date cu caracter personal prin site sau prin
              formularul de contact. Singurul câmp obligatoriu din formular este mesajul. Orice informație de
              contact (nume, email, telefon etc.) este oferită exclusiv din proprie inițiativă de către vizitator,
              pe propria răspundere.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">1. Cine suntem</h2>
            <p>
              Acest site este operat de A.O. „Pro-Elementary", cu sediul în Chișinău, Port Mall, Strada Mihai
              Sadoveanu 42/6, MD-2075, Republica Moldova. Ne poți contacta la{" "}
              <a href="mailto:office@elementar.md" className="text-sky-400 hover:text-sky-300 underline">
                office@elementar.md
              </a>{" "}
              sau la telefon +373 698 30 702.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">2. Nu solicităm date cu caracter personal</h2>
            <p>
              Formularul de contact de pe pagina Contact are un singur câmp obligatoriu: <strong>mesajul</strong>.
              Nu cerem nume, email sau telefon în câmpuri separate obligatorii. Există și un câmp opțional „Cum
              preferi să primești răspunsul?", pe care îl poți lăsa complet necompletat.
            </p>
            <p className="mt-3">
              Dacă alegi, din proprie inițiativă, să incluzi în mesaj sau în acel câmp opțional date de contact
              (de exemplu email sau telefon), o faci pe propria răspundere. Prin bifarea căsuței de la trimiterea
              formularului, confirmi electronic că ai citit și înțeles acest lucru.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">3. Ce facem cu informațiile oferite voluntar</h2>
            <p>
              Dacă ne transmiți voluntar date de contact, le folosim exclusiv pentru a-ți răspunde la mesajul
              trimis. Nu le folosim în scop de marketing, nu le vindem și nu le transmitem către terți, cu excepția
              furnizorului de servicii tehnice folosit pentru trimiterea emailurilor (necesar strict pentru
              funcționarea formularului). Păstrăm aceste informații cel mult 12 luni, după care sunt șterse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">4. Cookie-uri și analiză de trafic</h2>
            <p>
              Site-ul folosește Google Analytics pentru statistici agregate despre utilizarea site-ului (pagini
              vizitate, dispozitiv folosit etc.). Aceste date nu sunt folosite pentru a te identifica personal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">5. Drepturile tale</h2>
            <p>
              În cazul (rar) în care ne transmiți voluntar date de contact, ai dreptul de a solicita accesul,
              rectificarea sau ștergerea acestora, precum și de a-ți retrage oricând acordul dat. Ne poți scrie
              oricând la{" "}
              <a href="mailto:office@elementar.md" className="text-sky-400 hover:text-sky-300 underline">
                office@elementar.md
              </a>
              .
            </p>
            <p className="mt-3">
              Autoritatea de supraveghere competentă în Republica Moldova este Centrul Național pentru Protecția
              Datelor cu Caracter Personal (CNPDCP) —{" "}
              <a
                href="https://www.datepersonale.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                datepersonale.md
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">6. Modificări ale acestei politici</h2>
            <p>
              Putem actualiza periodic această pagină. Orice modificare va fi publicată aici, cu menționarea datei
              ultimei actualizări.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline text-sm">
              ← Înapoi la pagina de Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
