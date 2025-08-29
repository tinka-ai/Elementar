import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import SiteHeader from "@/components/site-header"
import { Facebook, Instagram, Home, Phone, MapPin, Mail } from "lucide-react"

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
      </body>
    </html>
  )
}

/* ===== Footer global ===== */
function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-gray-300 font-medium">Contact</p>
            <p className="text-sm text-gray-300">
              Port Mall, Chișinău MD — Strada Mihai Sadoveanu 42/6, MD-2075
            </p>
            <p className="text-sm text-gray-300">+373 79 010 277 • office@elementar.md</p>
          </div>

          <div className="flex items-center gap-3">
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
        </div>

        <div className="mt-8 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} ELEMENTAR. Toate drepturile rezervate.</p>
          <p>Powered by TINKA AI.</p>
        </div>
      </div>
    </footer>
  )
}

/* ===== Bara fixă jos (mobil) — cu alegere Google Maps / Waze ===== */
function BottomBar() {
  return (
    <div
  className="fixed-layer inset-x-0 bottom-0 z-[120] md:hidden border-t border-white/10
             bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-black/60"
  style={{
    paddingBottom: "env(safe-area-inset-bottom, 0px)",
  }}
>
      <nav className="h-14 max-w-3xl mx-auto px-4 flex items-center justify-around text-gray-300">
        <Link href="/" className="flex flex-col items-center gap-1 text-xs hover:text-white active:translate-y-px">
          <Home className="h-5 w-5" aria-hidden="true" />
          Acasă
        </Link>

        <a href="tel:+37379010277" className="flex flex-col items-center gap-1 text-xs hover:text-white active:translate-y-px">
          <Phone className="h-5 w-5" aria-hidden="true" />
          Apelează
        </a>

        {/* Locație cu meniu de alegere */}
        <details className="relative">
          <summary
            className="list-none [&::-webkit-details-marker]:hidden flex flex-col items-center gap-1 text-xs
                       hover:text-white active:translate-y-px cursor-pointer select-none"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Locație
          </summary>

          {/* Meniul apare deasupra barei */}
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[130] w-48 rounded-lg border border-white/10
                       bg-black/90 backdrop-blur p-2 space-y-1 shadow-lg"
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Strada%20Mihai%20Sadoveanu%2042%2F6%2C%20Chi%C8%99in%C4%83u%2C%20MD-2075%2C%20Moldova"
              className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
              rel="noopener noreferrer"
            >
              Deschide în Google Maps
            </a>
            <a
              href="https://waze.com/ul?q=Strada%20Mihai%20Sadoveanu%2042%2F6%2C%20Chi%C8%99in%C4%83u%2C%20MD-2075%2C%20Moldova&navigate=yes"
              className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
              rel="noopener noreferrer"
            >
              Deschide în Waze
            </a>
          </div>
        </details>

        <a href="mailto:office@elementar.md" className="flex flex-col items-center gap-1 text-xs hover:text-white active:translate-y-px">
          <Mail className="h-5 w-5" aria-hidden="true" />
          Email
        </a>
      </nav>
    </div>
  )
}
