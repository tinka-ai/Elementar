"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"

export type ConsentState = { analytics: boolean } | null

const STORAGE_KEY = "elementar-cookie-consent"
export const CONSENT_EVENT = "elementar:consent-changed"
export const OPEN_SETTINGS_EVENT = "elementar:open-cookie-settings"

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (typeof parsed?.analytics === "boolean") return parsed
    return null
  } catch {
    // localStorage poate fi indisponibil (ex. mod privat) — bannerul reapare la refresh, nimic nu se blochează
    return null
  }
}

function writeConsent(value: { analytics: boolean }) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // ignorăm — vezi nota de mai sus
  }
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analyticsChoice, setAnalyticsChoice] = useState(false)

  useEffect(() => {
    setVisible(!readConsent())

    const openSettings = () => {
      setAnalyticsChoice(readConsent()?.analytics ?? false)
      setShowSettings(true)
      setVisible(true)
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings)
  }, [])

  if (!visible) return null

  const acceptAll = () => {
    writeConsent({ analytics: true })
    setVisible(false)
    setShowSettings(false)
  }
  const rejectNonEssential = () => {
    writeConsent({ analytics: false })
    setVisible(false)
    setShowSettings(false)
  }
  const saveSettings = () => {
    writeConsent({ analytics: analyticsChoice })
    setVisible(false)
    setShowSettings(false)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] border-t border-white/10 bg-black/95 backdrop-blur px-4 py-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {!showSettings ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Cookie className="h-5 w-5 shrink-0 text-sky-400 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-gray-300 leading-relaxed">
                Folosim cookie-uri strict necesare pentru funcționarea site-ului și, doar cu acordul tău,
                cookie-uri de analiză (Google Analytics) ca să înțelegem cum e folosit site-ul. Vezi și{" "}
                <Link href="/politica-de-confidentialitate" className="text-sky-400 hover:text-sky-300 underline">
                  Politica de Confidențialitate
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:shrink-0">
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 rounded-md text-sm border border-white/20 text-gray-300 hover:bg-white/10 transition-colors"
              >
                Setări
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-4 py-2 rounded-md text-sm border border-white/20 text-gray-300 hover:bg-white/10 transition-colors"
              >
                Refuz neesențiale
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2 rounded-md text-sm bg-sky-500 text-white hover:bg-sky-400 transition-colors"
              >
                Accept toate
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-300">Alege ce categorii de cookie-uri sunt active:</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/5 p-3">
                <div>
                  <p className="text-sm font-medium text-gray-200">Strict necesare</p>
                  <p className="text-xs text-gray-500">
                    Necesare pentru funcționarea de bază a site-ului. Mereu active.
                  </p>
                </div>
                <span className="text-xs text-gray-500 shrink-0">Mereu active</span>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/5 p-3">
                <div>
                  <p className="text-sm font-medium text-gray-200">Analiză (Google Analytics)</p>
                  <p className="text-xs text-gray-500">
                    Ne ajută să înțelegem cum este folosit site-ul, în mod agregat.
                  </p>
                </div>
                <label className="relative inline-flex shrink-0 cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={analyticsChoice}
                    onChange={(e) => setAnalyticsChoice(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="h-6 w-11 rounded-full bg-white/20 transition-colors peer-checked:bg-sky-500" />
                  <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 rounded-md text-sm border border-white/20 text-gray-300 hover:bg-white/10 transition-colors"
              >
                Înapoi
              </button>
              <button
                type="button"
                onClick={saveSettings}
                className="px-4 py-2 rounded-md text-sm bg-sky-500 text-white hover:bg-sky-400 transition-colors"
              >
                Salvează preferințele
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
