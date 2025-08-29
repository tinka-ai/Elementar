"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"

const NAV = [
  { href: "/",        label: "Acasă" },
  { href: "/domenii", label: "Domenii" },
  { href: "/galerie", label: "Galerie" },
  { href: "/faq",     label: "Întrebări" },
  { href: "/contact", label: "Contact" },
]

export default function SiteHeader() {
  const pathname = usePathname() || "/"

  const linkCls = (href: string) => {
    const active = pathname === href
    return [
      "px-2 py-1 text-sm transition-colors",
      active
        ? "text-sky-300 underline decoration-sky-400 decoration-2 underline-offset-8"
        : "text-gray-200 hover:text-white hover:underline decoration-sky-400 underline-offset-8",
    ].join(" ")
  }

  return (
    <header
  className="fixed top-0 left-0 right-0 z-[120] bg-black border-b border-white/10"
  style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* DESKTOP (>= md) */}
        <div className="hidden md:flex h-16 items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3" aria-label="Acasă">
            <Image
              src="/images/logo-elementara-new.png"
              alt="Logo ELEMENTAR — Parc de Știință și Curiozități"
              width={150}
              height={34}
              priority
            />
          </Link>

          {/* MENIU */}
          <nav className="flex items-center gap-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkCls(item.href)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* PROGRAM + CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-300">
              <Clock className="h-4 w-4" />
              <span>PROGRAM: Lu – Du, 10:00 – 22:00</span>
            </div>
            <Button className="bg-sky-500 text-white hover:bg-sky-400" asChild>
              <Link href="/contact">
                Programează o vizită
                <ArrowRight className="ms-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>

        {/* MOBILE (< md) – o singură zonă cu wrap ca să fie totul vizibil */}
        <div className="md:hidden py-2">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3" aria-label="Acasă">
              <Image
                src="/images/logo-elementara-new.png"
                alt="Logo ELEMENTAR — Parc de Știință și Curiozități"
                width={130}
                height={30}
                priority
              />
            </Link>

            {/* CTA mic */}
            <Button size="sm" className="bg-sky-500 text-white hover:bg-sky-400" asChild>
              <Link href="/contact">
                Programează
                <ArrowRight className="ms-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Program (vizibil pe mobil) */}
          <p className="mt-1 text-xs text-gray-300 flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            PROGRAM: Lu – Du, 10:00 – 22:00
          </p>

          {/* MENIU – vizibil, cu wrap (fără scroll orizontal) */}
          <nav className="mt-2">
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={linkCls(item.href)}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}
