"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocaleState] = useState<Locale>("ro")

  useEffect(() => {
    const savedLocale = localStorage.getItem("elementar-locale") as Locale
    const initialLocale = savedLocale || "ro"
    setLocaleState(initialLocale)
  }, [])

  const setLocale = (newLocale: Locale) => {
    console.log("[v0] Setting locale to:", newLocale)
    setLocaleState(newLocale)
    localStorage.setItem("elementar-locale", newLocale)
    // React will automatically re-render components when locale state changes
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let current: any = translations[locale]

    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k]
      } else {
        console.warn(`[v0] Translation key not found: ${key} for locale: ${locale}`)
        // Fallback to Romanian if translation not found
        let fallback: any = translations.ro
        for (const fallbackKey of keys) {
          if (fallback && typeof fallback === "object" && fallbackKey in fallback) {
            fallback = fallback[fallbackKey]
          } else {
            return key // Return key if no translation found
          }
        }
        return typeof fallback === "string" ? fallback : key
      }
    }

    return typeof current === "string" ? current : key
  }

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
