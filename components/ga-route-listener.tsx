// components/ga-route-listener.tsx
"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

type Props = { gaId: string }

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function GaRouteListener({ gaId }: Props) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!pathname) return
    if (!gaId) return

    const url = `${window.location.pathname}${window.location.search}`

    if (typeof window.gtag === "function") {
      window.gtag("config", gaId, { page_path: url })
    }
  }, [pathname, gaId])

  return null
}
