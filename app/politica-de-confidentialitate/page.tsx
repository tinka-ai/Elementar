import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politica de Confidențialitate",
  description:
    "Elementar.md este un website cu caracter predominant informațional, fără formular de contact, conturi, rezervări online sau instrumente de analiză ori marketing pentru urmărirea vizitatorilor.",
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
          <p className="mt-4 text-sm text-gray-400">Ultima actualizare: 10 septembrie 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-10 text-gray-300 leading-relaxed">
          <div className="rounded-lg border border-sky-500/30 bg-sky-500/10 p-5">
            <p className="text-gray-100 font-medium">
              Elementar.md este un website cu caracter predominant informațional. Website-ul nu conține formular de
              contact, conturi de utilizator, rezervări online sau mecanisme de încărcare a fișierelor și nu
              utilizează instrumente de analiză sau marketing pentru urmărirea vizitatorilor.
            </p>
            <p className="mt-3 text-gray-300">
              Prezenta Politică explică modul în care A.O. „Pro-Elementary" prelucrează date cu caracter personal în
              legătură cu utilizarea website-ului și cu contactarea directă a organizației.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">1. Operatorul datelor cu caracter personal</h2>
            <p>
              Operatorul website-ului și, după caz, al datelor cu caracter personal prelucrate în legătură cu
              activitatea ELEMENTAR este:
            </p>
            <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-4 text-gray-200">
              <p className="font-semibold text-gray-100">A.O. „Pro-Elementary"</p>
              <p>Chișinău, Republica Moldova</p>
              <p>
                Email:{" "}
                <a href="mailto:office@elementar.md" className="text-sky-400 hover:text-sky-300 underline">
                  office@elementar.md
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+37379010277" className="text-sky-400 hover:text-sky-300 underline">
                  +373 79 010 277
                </a>
              </p>
            </div>
            <p className="mt-3">
              Pentru orice întrebare privind protecția datelor cu caracter personal sau pentru exercitarea
              drepturilor prevăzute de lege, ne poți contacta folosind datele de mai sus.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">2. Cum funcționează website-ul</h2>
            <p>
              Website-ul oferă în principal informații despre ELEMENTAR, domeniile și exponatele parcului, program,
              prețuri, galerie și modalități de contact.
            </p>
            <p className="mt-3">
              Website-ul nu conține un formular prin care să introduci și să transmiți către noi date cu caracter
              personal.
            </p>
            <p className="mt-3">Funcțiile de contact și orientare funcționează astfel:</p>
            <ul className="mt-3 space-y-3 list-disc pl-5">
              <li>
                <strong className="text-gray-100">Email</strong> — butonul de email utilizează un link{" "}
                <code className="text-sky-300">mailto:</code> și deschide aplicația de email configurată pe
                dispozitivul tău. Website-ul nu transmite automat conținutul unui mesaj către ELEMENTAR.
              </li>
              <li>
                <strong className="text-gray-100">Telefon</strong> — butonul de telefon utilizează un link{" "}
                <code className="text-sky-300">tel:</code> și deschide funcția de apelare a dispozitivului tău.
              </li>
              <li>
                <strong className="text-gray-100">Google Maps / Waze</strong> — sunt utilizate linkuri externe.
                Serviciul respectiv este accesat numai după ce alegi să apeși pe link. ELEMENTAR nu încorporează pe
                această pagină o hartă Google Maps/Waze și website-ul nu solicită acces la geolocația dispozitivului
                tău.
              </li>
              <li>
                <strong className="text-gray-100">Adresă, program, prețuri, domenii și exponate</strong> — sunt
                informații afișate pe website și nu necesită introducerea de date personale de către vizitator.
              </li>
              <li>
                <strong className="text-gray-100">Galerie</strong> — conține în prezent imagini generate cu
                inteligență artificială și nu este utilizată pentru colectarea datelor vizitatorilor.
              </li>
            </ul>
            <p className="mt-3">
              După accesarea unui serviciu extern, precum Google Maps, Waze, Facebook sau Instagram, prelucrarea
              realizată pe platforma respectivă este supusă regulilor și politicilor operatorului acelui serviciu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">3. Contactarea ELEMENTAR prin email sau telefon</h2>
            <p>
              Dacă alegi să ne contactezi prin email sau telefon, datele pe care ni le comunici sunt prelucrate de
              A.O. „Pro-Elementary", în calitate de operator.
            </p>
            <p className="mt-3">
              Aceste date nu sunt colectate printr-un formular al website-ului. Ele sunt furnizate direct de tine
              prin canalul de comunicare pe care alegi să îl utilizezi.
            </p>
            <p className="mt-3">În funcție de solicitare, putem prelucra, de exemplu:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>numele persoanei de contact;</li>
              <li>numărul de telefon;</li>
              <li>adresa de email;</li>
              <li>organizația sau instituția reprezentată, dacă este cazul;</li>
              <li>informațiile privind vizita solicitată;</li>
              <li>numărul aproximativ de participanți;</li>
              <li>conținutul mesajului și al corespondenței necesare soluționării solicitării.</li>
            </ul>
            <p className="mt-3">
              Datele sunt utilizate pentru a răspunde solicitărilor, pentru comunicarea cu persoana care ne
              contactează și, după caz, pentru organizarea unei vizite, excursii sau activități la ELEMENTAR.
            </p>
            <p className="mt-3">
              Temeiul juridic concret depinde de natura solicitării și poate consta, după caz, în efectuarea
              demersurilor necesare la cererea persoanei înainte de încheierea unui contract, executarea unui
              contract, îndeplinirea unei obligații legale sau interesul legitim al A.O. „Pro-Elementary" de a
              gestiona solicitările și comunicările legate de activitatea sa.
            </p>
            <p className="mt-3">
              Pentru vizitele de grup și excursiile școlare aplicăm principiul minimizării datelor. În mod obișnuit,
              pentru organizarea vizitei nu solicităm liste nominale ale copiilor, IDNP-uri, date de naștere, adrese
              sau datele personale ale părinților. Sunt solicitate numai informațiile necesare organizării vizitei,
              de regulă datele persoanei de contact și numărul aproximativ de participanți.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">4. Ce nu utilizăm pe Elementar.md</h2>
            <p>În configurația actuală, Elementar.md nu utilizează:</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2 list-disc pl-5">
              <li>Google Analytics sau alte instrumente proprii de analiză a comportamentului vizitatorilor</li>
              <li>Meta Pixel, TikTok Pixel sau alți pixeli de marketing</li>
              <li>Profilarea vizitatorilor</li>
              <li>Conturi de utilizator</li>
              <li>Newsletter</li>
              <li>Formular de contact</li>
              <li>Rezervări online</li>
              <li>Mecanisme de upload</li>
              <li>Colectarea geolocației prin website</li>
              <li>Colectarea prin website a listelor sau datelor personale ale copiilor</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">5. Cookie-uri și stocare locală</h2>
            <p>
              În configurația actuală, codul propriu al Elementar.md nu setează cookie-uri pentru analiză, marketing,
              profilare sau urmărirea vizitatorilor.
            </p>
            <p className="mt-3">
              Website-ul nu utilizează în prezent mecanisme proprii de stocare locală pentru memorarea preferințelor
              de limbă sau temă.
            </p>
            <p className="mt-3">
              Dacă funcționalitățile website-ului vor fi modificate în viitor și vor fi introduse tehnologii care
              necesită informarea sau consimțământul utilizatorului potrivit legislației aplicabile, această Politică
              și mecanismele website-ului vor fi actualizate înainte de utilizarea lor.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">6. Fotografii și imagini</h2>
            <p>
              În cadrul practicii actuale, ELEMENTAR nu utilizează fotografii sau înregistrări video ale
              vizitatorilor în scop publicitar pe acest website. Imaginile cu persoane afișate în prezent pe website
              sunt generate cu inteligență artificială și nu reprezintă vizitatori reali ai parcului.
            </p>
            <p className="mt-3">
              Dacă în viitor A.O. „Pro-Elementary" va organiza fotografierea sau filmarea unor persoane reale pentru
              promovare sau alte scopuri, va stabili în prealabil scopul și temeiul juridic al prelucrării, va
              informa persoanele vizate și va obține consimțământul atunci când acesta este necesar potrivit legii.
              În cazul copiilor vor fi aplicate suplimentar cerințele legale corespunzătoare protecției minorilor.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">7. Date tehnice și găzduirea website-ului</h2>
            <p>Elementar.md este găzduit utilizând infrastructura tehnică Netlify.</p>
            <p className="mt-3">
              Chiar dacă ELEMENTAR nu solicită vizitatorului să introducă date personale pe website, funcționarea
              tehnică a unui serviciu web poate presupune prelucrarea automată a unor informații tehnice, precum
              adresa IP, data și ora solicitării, resursa solicitată și anumite informații tehnice referitoare la
              browser sau dispozitiv.
            </p>
            <p className="mt-3">Aceste date pot fi prelucrate în măsura necesară pentru:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>furnizarea și transmiterea website-ului către dispozitivul vizitatorului;</li>
              <li>funcționarea infrastructurii tehnice;</li>
              <li>securitatea și integritatea serviciului;</li>
              <li>identificarea și investigarea erorilor sau incidentelor tehnice;</li>
              <li>prevenirea utilizării abuzive a infrastructurii.</li>
            </ul>
            <p className="mt-3">
              În măsura în care A.O. „Pro-Elementary" determină scopurile și mijloacele unei asemenea prelucrări,
              temeiul juridic îl constituie interesul legitim privind furnizarea și securizarea website-ului, în
              condițiile prevăzute de legislația privind protecția datelor.
            </p>
            <p className="mt-3">
              În furnizarea serviciilor tehnice pot fi implicate Netlify și furnizorii săi de infrastructură.
              Infrastructura tehnică poate implica prelucrarea datelor în afara Republicii Moldova. A.O.
              „Pro-Elementary" va păstra documentația contractuală și garanțiile aplicabile unor asemenea transferuri,
              în măsura în care acestea sunt necesare potrivit Legii nr. 195/2024.
            </p>
            <p className="mt-3">
              Datele tehnice nu sunt utilizate de A.O. „Pro-Elementary" pentru publicitate comportamentală sau
              pentru crearea unor profiluri ale vizitatorilor.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">8. Păstrarea datelor</h2>
            <p>
              Datele cu caracter personal nu sunt păstrate mai mult decât este necesar pentru scopul pentru care au
              fost prelucrate și pentru îndeplinirea obligațiilor legale aplicabile. Perioada concretă depinde de
              natura prelucrării.
            </p>
            <p className="mt-3">
              În cazul comunicărilor primite prin email sau telefon, datele sunt păstrate atât timp cât este necesar
              pentru soluționarea solicitării și, dacă aceasta conduce la o relație contractuală sau la o obligație
              legală de păstrare, pentru perioada aplicabilă documentelor respective.
            </p>
            <p className="mt-3">
              Pentru datele tehnice generate la nivelul infrastructurii de găzduire se aplică perioadele sau
              criteriile de păstrare corespunzătoare serviciilor tehnice utilizate și configurației acestora.
            </p>
            <p className="mt-3">
              Perioadele de păstrare aplicabile activităților de prelucrare ale A.O. „Pro-Elementary" sunt stabilite
              și documentate intern în funcție de scopul și temeiul juridic al fiecărei prelucrări.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">9. Cui pot fi divulgate datele</h2>
            <p>
              În funcție de natura prelucrării, datele pot fi accesibile numai persoanelor autorizate din cadrul
              A.O. „Pro-Elementary" și furnizorilor de servicii care asigură funcționarea activităților necesare, în
              măsura în care accesul lor este necesar.
            </p>
            <p className="mt-3">
              În cazul website-ului, aceasta poate include furnizorii infrastructurii de găzduire și serviciilor
              tehnice.
            </p>
            <p className="mt-3">
              Datele pot fi comunicate autorităților publice atunci când divulgarea este prevăzută sau solicitată în
              condițiile legii.
            </p>
            <p className="mt-3">
              A.O. „Pro-Elementary" nu vinde datele personale ale vizitatorilor și nu le transmite unor terți pentru
              publicitate comportamentală.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">10. Drepturile persoanei vizate</h2>
            <p>
              În condițiile prevăzute de Legea nr. 195/2024 privind protecția datelor cu caracter personal, persoana
              vizată poate beneficia, după caz, de:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>dreptul de acces la datele cu caracter personal;</li>
              <li>dreptul la rectificarea datelor inexacte;</li>
              <li>dreptul la ștergerea datelor, atunci când sunt îndeplinite condițiile legale;</li>
              <li>dreptul la restricționarea prelucrării;</li>
              <li>dreptul la portabilitatea datelor, atunci când sunt îndeplinite condițiile legale;</li>
              <li>dreptul de a se opune prelucrării, în cazurile prevăzute de lege;</li>
              <li>
                dreptul de a retrage consimțământul în orice moment, dacă o anumită prelucrare se bazează pe
                consimțământ, fără a afecta legalitatea prelucrării efectuate anterior retragerii;
              </li>
              <li>dreptul de a depune o plângere la autoritatea competentă de supraveghere.</li>
            </ul>
            <p className="mt-3">
              ELEMENTAR nu utilizează prin intermediul website-ului procese decizionale individuale automatizate și
              nu realizează profilarea vizitatorilor.
            </p>
            <p className="mt-3">
              Pentru exercitarea drepturilor sau pentru întrebări privind prelucrarea datelor, ne poți contacta la{" "}
              <a href="mailto:office@elementar.md" className="text-sky-400 hover:text-sky-300 underline">
                office@elementar.md
              </a>
              .
            </p>
            <p className="mt-3">
              Autoritatea de supraveghere competentă în Republica Moldova este:
              <br />
              Centrul Național pentru Protecția Datelor cu Caracter Personal (CNPDCP)
              <br />
              Website:{" "}
              <a
                href="https://www.datepersonale.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                datepersonale.md
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-100 mb-3">11. Modificarea prezentei Politici</h2>
            <p>
              Prezenta Politică poate fi actualizată atunci când se modifică funcționalitățile website-ului,
              activitățile de prelucrare, furnizorii utilizați sau cerințele legale aplicabile.
            </p>
            <p className="mt-3">
              Versiunea actualizată va fi publicată pe această pagină, împreună cu data ultimei actualizări.
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
