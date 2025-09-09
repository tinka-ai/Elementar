"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

export default function NavLink({
  href,
  children,
  className = "",
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const pathname = usePathname()
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`group relative inline-block px-1 text-sm ${isActive ? "font-semibold" : ""} ${className}`}
    >
      {/* Text: gradient când e activ; altfel gri și devine alb pe hover */}
      <span
        className={
          isActive
            ? "bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent"
            : "text-gray-300 transition-colors group-hover:text-white"
        }
      >
        {children}
      </span>

      {/* Underline multicolor: apare doar la hover pentru non-active și crește stânga→dreapta */}
      <span
        aria-hidden
        className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500
                    transition-[width] duration-300 ease-out will-change-[width]
                    ${isActive ? "hidden" : "group-hover:w-full group-focus-visible:w-full"}`}
      />
    </Link>
  )
}
