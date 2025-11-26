// components/site-footer.tsx
import { Facebook, Instagram } from "lucide-react"

export default function SiteFooter() {
  const fxIcon =
    "grid h-10 w-10 place-items-center rounded-md border border-white/10 hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"

  return (
    <footer id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        {/* rândul principal */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {/* Contact */}
          <div className="space-y-2">
            <p className="text-gray-300 font-medium">Contact</p>
            <p className="text-sm text-gray-300">
              Port Mall, Chișinău MD — Strada Mihai Sadoveanu 42/6, MD-2075
            </p>
            <p className="text-sm text-gray-300">
              +373 79 010 277 • office@elementar.md
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 sm:justify-start">
            <a
              href="https://facebook.com/elementara.ro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={fxIcon}
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="https://instagram.com/elementara.ro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={fxIcon}
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Sponsor */}
          <div className="lg:justify-end flex">
            <div className="flex items-start gap-4">
              {/* Logo Suedia */}
              <img
                src="/images/sverige.png"
                alt="Suedia — suport financiar"
                className="h-12 w-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />

              {/* Logo Fundația Est-Europeană */}
              <img
                src="/images/FundatiaEstEuropeanaMD.png"
                alt="Fundația Est-Europeană — logo"
                className="h-14 w-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />

              {/* Text */}
              <p className="max-w-xs text-xs leading-snug text-gray-400">
                Parcul de științe „ELEMENTAR” a fost creat de către A.O. „Pro-Elementary”
                cu suportul financiar al Suediei, prin intermediul Fundației „Est-Europene”.
                Conținutul acestui web-site aparține autorilor și nu reflectă neapărat
                punctul de vedere al Suediei sau al Fundației „Est-Europene”.
              </p>
            </div>
          </div>
        </div>

        {/* rândul de jos */}
        <div className="mt-8 text-xs text-gray-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} PRO-ELEMENTARY A.O.. Toate drepturile rezervate.</p>

          <p>
            <a
              href="https://tinka.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Powered by TINKA AI
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
