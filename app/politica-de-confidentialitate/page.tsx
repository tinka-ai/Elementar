import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politica de Confidențialitate",
  description:
    "Elementar.md este un site informațional, fără formular de contact, fără cookie-uri de analiză și fără urmărirea vizitatorilor. Notă de informare privind prelucrarea datelor.",
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
          <p className="mt-4 text-sm text-gray-400">Ultima actualizare: 8 septembrie 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-10 text-gray-300 leading-relaxed">
          <div className="rounded-lg border border-sky-500/30 bg-sky-500/10 p-5">
            <p className="text-gray-100 font-medium">
              Elementar.md este un site informațional și nu este conceput pentru colectarea datelor cu caracter
              personal ale vizitatorilor. Site-ul nu are formular de contact, nu folosește cookie-uri de analiză sau
              marketing și nu urmărește vizitatorii. Mai jos explicăm exact cum funcționează fiecare parte a
              site-ului și ce se întâmplă dacă alegi să ne contactezi.
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
              sau la telefon +373 79 010 277.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">2. Cum funcționează acest site</h2>
            <p>Site-ul oferă următoarele funcții, fără niciun formular de colectare a datelor:</p>
            <ul className="mt-3 space-y-3 list-disc pl-5">
              <li>
                <strong className="text-gray-100">Email</strong> — butoanele de email folosesc un link{" "}
                <code className="text-sky-300">mailto:</code>, care deschide aplicația ta de email. Site-ul nu
                trimite nimic singur.
              </li>
              <li>
                <strong className="text-gray-100">Telefon</strong> — butoanele de telefon folosesc un link{" "}
                <code className="text-sky-300">tel:</code>, care deschide funcția de apelare a dispozitivului tău.
              </li>
              <li>
                <strong className="text-gray-100">Google Maps / Waze</strong> — link-uri externe, care deschid
                aplicația respectivă doar după ce apeși pe buton. Nu încărcăm o hartă automat pe pagină și nu cerem
                acces la locația ta — geolocația este gestionată ulterior, dacă e cazul, de Google Maps sau Waze,
                potrivit relației lor cu tine, nu de Elementar.
              </li>
              <li>
                <strong className="text-gray-100">Adresă, program, prețuri</strong> — informații afișate static pe
                pagină, fără nicio colectare.
              </li>
              <li>
                <strong className="text-gray-100">Galerie foto</strong> — conținut static, generat cu inteligență
                artificială (vezi secțiunea 6); nu colectăm date despre vizitatori prin galerie.
              </li>
              <li>
                <strong className="text-gray-100">Domenii / exponate</strong> — conținut static, informativ.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">3. Contactul pe care îl inițiezi tu</h2>
            <p>
              Dacă alegi să ne scrii un email sau să ne suni, acea corespondență are loc direct între tine și
              Elementar — prin email sau telefon — și nu este colectată printr-un formular al site-ului. Din acel
              moment, prelucrarea datelor pe care alegi să ni le transmiți (de exemplu într-un email) reprezintă un
              flux separat, gestionat de Elementar ca organizator de evenimente și vizite, nu ca „website”.
            </p>
            <p className="mt-3">
              Pentru organizarea vizitelor de grup sau a excursiilor școlare aplicăm principiul minimizării: nu
              solicităm lista copiilor, IDNP, data nașterii, adrese sau datele părinților. Reținem doar ce este
              necesar organizării — de regulă o persoană de contact, un telefon sau email de legătură și numărul
              aproximativ de participanți.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Site-ul nu are cont de utilizator, newsletter, upload de fișiere sau rezervare online — orice
              organizare a unei vizite se face prin contactul direct descris mai sus.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">4. Ce nu folosim</h2>
            <p>Ca să păstrăm site-ul cât mai simplu și mai puțin intruziv posibil, Elementar.md nu folosește:</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2 list-disc pl-5">
              <li>Google Analytics sau alt instrument de analiză</li>
              <li>Meta Pixel, TikTok Pixel sau alți pixeli de marketing</li>
              <li>Conturi de utilizator</li>
              <li>Newsletter</li>
              <li>Colectare de geolocație</li>
              <li>Tracking sau profilare a vizitatorilor</li>
              <li>Rezervare online</li>
              <li>Colectarea datelor copiilor prin site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">5. Cookie-uri</h2>
            <p>
              Elementar.md nu utilizează cookie-uri sau tehnologii similare pentru analiză, marketing, profilare
              ori urmărirea vizitatorilor. Preferințe strict tehnice ale browserului (de exemplu tema aleasă)
              rămân, dacă e cazul, salvate local în browserul tău și nu sunt trimise către noi sau către terți.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">6. Fotografii și imagini</h2>
            <p>
              ELEMENTAR nu fotografiază și nu filmează vizitatorii în scopuri publicitare în cadrul operațiunilor
              curente ale parcului. Imaginile actuale de pe acest site sunt generate cu inteligență artificială și
              nu reprezintă vizitatori reali.
            </p>
            <p className="mt-3">
              Dacă în viitor dorim să realizăm o campanie foto/video cu copii sau vizitatori reali, prezenta
              politică nu se aplică automat acelei situații — vom stabili separat, înainte de fotografiere, scopul,
              temeiul juridic, informarea prealabilă a persoanelor vizate și, acolo unde este necesar,
              consimțământul explicit corespunzător.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">7. Loguri tehnice ale găzduirii</h2>
            <p>
              Elementar nu solicită și nu colectează activ date cu caracter personal prin intermediul site-ului.
              Nu putem însă afirma că, în legătură cu simpla accesare a site-ului, nu are loc absolut nicio
              prelucrare: furnizorul nostru de găzduire poate genera automat, ca parte din funcționarea tehnică
              standard, loguri care includ adresa IP și alte date tehnice. Potrivit definiției largi a
              „prelucrării" din Legea nr. 195/2024 privind protecția datelor cu caracter personal, o astfel de
              înregistrare tehnică poate constitui prelucrare, chiar dacă vizitatorul nu completează nimic pe site.
              Acest aspect este în curs de verificare tehnică împreună cu furnizorul de găzduire; vom actualiza
              această secțiune cu detalii concrete de îndată ce verificarea este finalizată.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">8. Drepturile tale</h2>
            <p>
              În măsura în care ne transmiți date cu caracter personal (de exemplu printr-un email), ai dreptul de
              a solicita accesul, rectificarea sau ștergerea acestora, precum și de a-ți retrage oricând
              consimțământul, atunci când prelucrarea se bazează pe consimțământ. Ne poți scrie oricând la{" "}
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
            <h2 className="text-xl font-bold text-gray-100 mb-3">9. Modificări ale acestei politici</h2>
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
