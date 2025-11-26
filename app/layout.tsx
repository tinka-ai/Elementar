import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import SiteHeader from "@/components/site-header"
import { Facebook, Instagram, Home, Phone, MapPin, Mail } from "lucide-react"
import Script from "next/script"
import GaRouteListener from "@/components/ga-route-listener" // <- pentru pageview la schimbarea rutei

const GA_ID = "G-VHXGNT73PX"

export const dynamic = "force-dynamic"
export const revalidate = 0

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "ELEMENTAR — Parc de Știință și Curiozități",
    template: "%s | ELEMENTAR",
  },
  description:
    "Parcul de Știință și Curiozități – locul în care joaca, arta și experimentul te conduc la înțelegerea fenomenelor reale. Vino să atingi, să testezi, să descoperi.",
  metadataBase: new URL("https://elementar.md"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "ELEMENTAR — Parc de Știință și Curiozități",
    description:
      "Parcul de Știință și Curiozități – locul în care joaca, arta și experimentul te conduc la înțelegerea fenomenelor reale.",
    url: "https://elementar.md",
    siteName: "ELEMENTAR",
    images: [{ url: "/images/logo-elementara-new.png", width: 1200, height: 630, alt: "ELEMENTAR" }],
    locale: "ro_MD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEMENTAR — Parc de Știință și Curiozități",
    description:
      "Parcul de Știință și Curiozități – locul în care joaca, arta și experimentul te conduc la înțelegerea fenomenelor reale.",
    images: ["/images/logo-elementara-new.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  generator: "v0.app",
  verification: {
    google: "Yfe3pUh08J0q7dCCXykSnLW8FQpFJCi32kuUv-CWPZw",
  },
}

const fxIcon =
  "grid h-10 w-10 place-items-center rounded-md border border-white/10 hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className="scroll-smooth overscroll-y-contain" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
        </Script>
      </head>

      {/* pt-24 pe mobil (header are 2 rânduri), pt-16 pe desktop; pb-14 pentru bara fixă jos */}
      <body
        className={`${inter.className}
              bg-background text-foreground
              min-h-screen supports-[height:100svh]:min-h-[100svh]
              pt-24 md:pt-16 pb-14
             `}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
            <BottomBar />
          </LanguageProvider>
        </ThemeProvider>

        {/* Pageview la schimbarea rutei (SPA) */}
        <GaRouteListener gaId={GA_ID} />
      </body>
    </html>
  )
}

/* ===== Footer global ===== */
function SiteFooter() {
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
                src="/images/svirge.png"
                alt="Suedia — suport financiar"
                className="h-12 w-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />

              {/* Logo Fundația Est-Europeană */}
              <img
                src="/images/FundatiaEstEuropeanaMD.png"
                alt="Fundația Est-Europeană — logo"
                className="h-12 w-auto object-contain select-none"
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
