"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { OfferModalProvider } from "@/components/offer/OfferModalProvider" // ⬅️ NOU

function Header({ fx, fxIcon, fxLink, t }: { fx: string; fxIcon: string; fxLink: string; t: (key: string) => string }) {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3" aria-label={t("aria.home")}>
            <img
              src="/images/logo-elementara-new.png"
              alt="Logo ELEMENTAR — Parc de Știință și Curiozități"
              className="h-8 sm:h-9 md:h-10 w-auto select-none pointer-events-none"
            />
            <span className="sr-only">Parcul de Știință și Curiozități</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className={`${fxLink} text-sky-400`}>{t("header.nav.home")}</Link>
            <Link href="/domenii" className={fxLink}>{t("header.nav.domains")}</Link>
            <Link href="/galerie" className={fxLink}>{t("header.nav.gallery")}</Link>
            <Link href="/faq" className={fxLink}>{t("header.nav.faq")}</Link>
            <Link href="/contact" className={fxLink}>{t("header.nav.contact")}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher fx={fx} />
            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t("header.schedule")}</span>
            </div>
            <Button className={`hidden md:inline-flex bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
              {t("header.bookVisit")}
              <ArrowRight className="ms-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function BottomNavigation({ fxIcon, t }: { fxIcon: string; t: (key: string) => string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/10">
      <div className="flex items-center justify-around py-3 px-4 max-w-md mx-auto">
        <Link href="/" className={`flex flex-col items-center gap-1 text-xs text-gray-300 hover:text-white ${fxIcon}`} aria-label={t("aria.home")}>
          <div className="p-2 rounded-lg bg-white/10">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span>{t("bottomNav.home")}</span>
        </Link>

        <Link href="https://www.google.com/maps/dir//Port+Mall,+Strada+Mihai+Sadoveanu+42%2F6,+Chi%C8%99in%C4%83u+MD-2075,+Moldova/@47.0105,28.8638,17z"
              target="_blank" rel="noopener noreferrer" aria-label={t("aria.navigation")}
              className={`flex flex-col items-center gap-1 text-xs text-gray-300 hover:text-white ${fxIcon}`}>
          <div className="p-2 rounded-lg bg-white/10">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span>{t("bottomNav.map")}</span>
        </Link>

        <Link href="tel:+37379010277" className={`flex flex-col items-center gap-1 text-xs text-gray-300 hover:text-white ${fxIcon}`} aria-label={t("aria.callNow")}>
          <div className="p-2 rounded-lg bg-white/10">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span>{t("bottomNav.call")}</span>
        </Link>

        <Link href={`mailto:office@elementar.md?subject=${encodeURIComponent(t("email.subject"))}&body=${encodeURIComponent(t("email.body"))}`}
              className={`flex flex-col items-center gap-1 text-xs text-gray-300 hover:text-white ${fxIcon}`}
              aria-label={t("aria.sendEmail")}>
          <div className="p-2 rounded-lg bg-white/10">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span>{t("bottomNav.email")}</span>
        </Link>
      </div>
    </div>
  )
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxIcon =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45),0_0_18px_4px_rgba(168,85,247,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxLink =
    "relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-sky-400 after:to-violet-500 after:transition-all after:duration-300"

  return (
    <div className="min-h-dvh bg-black text-gray-200 antialiased pb-20">
      <Header fx={fx} fxIcon={fxIcon} fxLink={fxLink} t={t} />
      {children}
      <BottomNavigation fxIcon={fxIcon} t={t} />
    </div>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <OfferModalProvider>
        <LayoutContent>{children}</LayoutContent>
      </OfferModalProvider>
    </LanguageProvider>
  )
}
