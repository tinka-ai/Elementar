// components/ga-route-listener.tsx
"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

type Props = { gaId: string }

export default function GaRouteListener({ gaId }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "")
    // rulează doar dacă gtag a fost încărcat deja
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      ;(window as any).gtag("config", gaId, { page_path: url })
    }
  }, [pathname, searchParams, gaId])

  return null
}
