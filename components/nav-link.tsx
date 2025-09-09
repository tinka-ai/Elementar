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

  // activ: exact "/" sau orice rută care începe cu href
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)

  const linkColor = isActive ? "text-white" : "text-gray-300 hover:text-white"

  return (
    <Link href={href} className={`relative group px-0.5 text-sm transition-colors ${linkColor} ${className}`}>
      <span>{children}</span>

      {/* underline gradient — crește pe hover; rămâne plină când e activ */}
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full rounded-full",
          "bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500",
          "origin-left transition-[transform,opacity] duration-300 ease-out",
          isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
        ].join(" ")}
      />
    </Link>
  )
}
