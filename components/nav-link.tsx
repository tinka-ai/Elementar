"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"

export default function NavLink({
  href,
  children,
  className = "",
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const pathname = usePathname()

  // e activ dacă suntem exact pe / sau pe o rută care începe cu href
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={`group relative px-0.5 text-sm text-gray-300 hover:text-white transition-colors ${className}`}
    >
      <span>{children}</span>

      {/* underline gradient – crește pe hover; rămâne plină când e activ */}
      <span
        aria-hidden
        className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r
          from-pink-400 via-sky-400 to-violet-500 transition-[width] duration-300
          ${isActive ? "w-full" : "group-hover:w-full"}`}
      />
    </Link>
  )
}
