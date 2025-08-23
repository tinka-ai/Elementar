import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Instagram, Home, Phone, MapPin, Mail } from "lucide-react"

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

const fx =
  "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
const fxIcon =
  "grid h-10 w-10 place-items-center rounded-md border border-white/10 hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
const fxLink = "relative transition-colors duration-200 hover:text-white"

/** înălțimi fixe: header = 64px, bottom bar = 56px */
const HEADER_H = "h-16"
const BOTTOM_H = "h-14"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      {/* padding top/bottom ca să nu fie acoperit conținutul de barele fixe */}
      <body className={`${inter.className} min-h-screen bg-background text-foreground pt-16 pb-14`}>
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

/* ===== Header global (FIXED pe toate paginile) ===== */
function SiteHeader() {
  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/5 ${HEADER_H}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* logo + home */}
          <Link href="/" className="flex items-center gap-3" aria-label="Acasă">
            <img
              src="/images/logo-elementara-new.png"
              alt="Logo ELEMENTAR — Parc de Știință și Curiozități"
              className="h-8 sm:h-9 md:h-10 w-auto select-none pointer-events-none"
            />
            <span className="sr-only">Parcul de Știință și Curiozități</span>
          </Link>

          {/* meniul site-ului (fără „Experiențe”) */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className={`${fxLink} text-sky-400`}>Acasă</Link>
            <Link href="/domenii" className={fxLink}>Domenii</Link>
            <Link href="/galerie" className={fxLink}>Galerie</Link>
            <Link href="/faq" className={fxLink}>Întrebări</Link>
            <Link href="/contact" className={fxLink}>Contact</Link>
          </nav>

          {/* programul de lucru + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>PROGRAM: Lu - Du, 10:00 - 22:00</span>
            </div>
            <Button className={`bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
              Programează o vizită
              <ArrowRight className="ms-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </header>
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
          <p>Made with curiosity.</p>
        </div>
      </div>
    </footer>
  )
}

/* ===== Bara fixă jos (FIXED pe toate ecranele) ===== */
function BottomBar() {
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[90] bg-black/80 backdrop-blur-md border-t border-white/10 ${BOTTOM_H}`}>
      <div className="h-full flex items-center justify-around px-4 max-w-3xl mx-auto text-gray-300">
        <Link href="/" className="flex flex-col items-center gap-1 text-xs hover:text-white">
          <Home className="h-5 w-5" />
          Acasă
        </Link>
        <a href="tel:+37379010277" className="flex flex-col items-center gap-1 text-xs hover:text-white">
          <Phone className="h-5 w-5" />
          Apelează
        </a>
        <a
          href="https://maps.app.goo.gl/J2M2Yq3T9mJ2Qw1t9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-xs hover:text-white"
        >
          <MapPin className="h-5 w-5" />
          Locație
        </a>
        <a href="mailto:office@elementar.md" className="flex flex-col items-center gap-1 text-xs hover:text-white">
          <Mail className="h-5 w-5" />
          Email
        </a>
      </div>
    </div>
  )
}
