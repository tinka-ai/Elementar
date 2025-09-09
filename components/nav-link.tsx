"use client"

import Link from "next/link"
import NavLink from "@/components/nav-link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HEADER_H = "h-16"

export default function SiteHeader() {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[110] border-b border-white/10
                  bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 ${HEADER_H}`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Acasă">
            <img
              src="/images/logo-elementara-new.png"
              alt="ELEMENTAR — Parc de Știință și Curiozități"
              className="h-8 sm:h-9 md:h-10 w-auto select-none pointer-events-none"
            />
            <span className="sr-only">ELEMENTAR</span>
          </Link>

          {/* Meniu desktop: FOLOSEȘTE NavLink */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">Acasă</NavLink>
            <NavLink href="/domenii">Domenii</NavLink>
            <NavLink href="/galerie">Galerie</NavLink>
            <NavLink href="/faq">Întrebări</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Program + CTA (opțional) */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>PROGRAM: Lu - Du, 10:00 - 22:00</span>
            </div>
            <Button className="bg-sky-500 text-white hover:bg-sky-400">
              Programează o vizită
              <ArrowRight className="ms-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
