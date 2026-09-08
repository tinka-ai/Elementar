"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { readConsent, CONSENT_EVENT } from "@/components/cookie-consent"

declare global {
  interface Window {
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

type Props = { gaId: string }

// Încarcă Google Analytics DOAR dacă vizitatorul a acceptat cookie-urile de analiză
// din bannerul de consimțământ (components/cookie-consent.tsx). Fără consimțământ,
// acest component nu randează nimic — nu se trimite nicio cerere către Google.
export default function AnalyticsLoader({ gaId }: Props) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const sync = () => setEnabled(readConsent()?.analytics === true)
    sync()
    window.addEventListener(CONSENT_EVENT, sync)
    return () => window.removeEventListener(CONSENT_EVENT, sync)
  }, [])

  if (!enabled || !gaId) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
      </Script>
    </>
  )
}
