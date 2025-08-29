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
        className={`${inter.className} min-h-screen bg-background text-foreground pt-24 md:pt-16 pb-14 supports-[env(safe-area-inset-top)]:pt-[calc(4rem+env(safe-area-inset-top))]`}
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

/* ===== Bara fixă jos (mobil) ===== */
function BottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[120] md:hidden border-t border-white/10"
      style={{
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      <div className="h-14 flex items-center justify-around px-4 max-w-3xl mx-auto text-gray-300">
        <Link href="/" className="flex flex-col items-center gap-1 text-xs hover:text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Acasă
        </Link>
        <a href="tel:+37379010277" className="flex flex-col items-center gap-1 text-xs hover:text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.62a2 2 0 0 1-.45 2.11L7 8.91a16 16 0 0 0 6 6l1.46-1.26a2 2 0 0 1 2.11-.45c.84.28 1.72.48 2.62.6A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Apelează
        </a>
        <a
          href="https://maps.app.goo.gl/J2M2Yq3T9mJ2Qw1t9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-xs hover:text-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3" fill="currentColor"/></svg>
          Locație
        </a>
        <a href="mailto:office@elementar.md" className="flex flex-col items-center gap-1 text-xs hover:text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2z"/><path d="M22 8l-10 6L2 8"/><path d="M2 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Email
        </a>
      </div>
    </div>
  )
}

