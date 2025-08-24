"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

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
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3" aria-label="Acasă">
            <Image
              src="/logo-elementara-new.png"
              alt="Logo ELEMENTAR — Parc de Știință și Curiozități"
              width={150}
              height={34}
              priority
            />
          </Link>

          {/* MENIU */}
          <nav className="hidden md:flex items-center gap-6">
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
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Clock className="h-4 w-4" />
              <span>PROGRAM: Lu – Du, 10:00 – 22:00</span>
            </div>
            <Button className="bg-sky-500 text-white hover:bg-sky-400">
              Programează o vizită
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
