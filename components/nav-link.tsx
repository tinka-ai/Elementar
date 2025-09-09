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
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)

  const activeText =
    "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 font-semibold"
  const inactiveText = "text-gray-300 hover:text-white"

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`relative group inline-flex items-center px-0.5 py-1 text-sm transition-colors ${isActive ? activeText : inactiveText} ${className}`}
    >
      <span className="relative z-10">{children}</span>

      {/* underline multicolor – apare doar la hover pe linkurile neactive */}
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute left-0 -bottom-[2px] h-[2px] rounded-full",
          "bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500",
          "transition-[width] duration-300 ease-out",
          isActive ? "w-0" : "w-0 group-hover:w-full",
        ].join(" ")}
      />
    </Link>
  )
}
