"use client"

import * as React from "react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/translations"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const DEFAULT_LOCALE: Locale = "ro"

const LanguageContext = React.createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE)

  // Citește preferința din localStorage după montare (evită mismatch)
  React.useEffect(() => {
    try {
      const saved = (localStorage.getItem("elementar-locale") as Locale) || DEFAULT_LOCALE
      setLocaleState(saved)
    } catch {
      // dacă localStorage nu e disponibil, rămâne "ro"
    }
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem("elementar-locale", next)
    } catch {
      /* noop */
    }
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    // încearcă întâi în limba curentă
    let cur: any = translations[locale]
    for (const k of keys) {
      if (cur && typeof cur === "object" && k in cur) cur = cur[k]
      else {
        // fallback pe RO dacă nu găsește
        let fb: any = translations.ro
        for (const fk of keys) {
          if (fb && typeof fb === "object" && fk in fb) fb = fb[fk]
          else return key
        }
        return typeof fb === "string" ? fb : key
      }
    }
    return typeof cur === "string" ? cur : key
  }

  const value: LanguageContextType = React.useMemo(
    () => ({ locale, setLocale, t }),
    [locale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextType {
  const ctx = React.useContext(LanguageContext)
  if (ctx) return ctx

  // În PROD nu dărâmăm pagina: folosim fallback „ro”.
  // În DEV aruncăm eroare ca să vezi unde lipsește providerul.
  if (process.env.NODE_ENV !== "production") {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  const t = (key: string) => {
    const keys = key.split(".")
    let cur: any = translations.ro
    for (const k of keys) {
      if (cur && typeof cur === "object" && k in cur) cur = cur[k]
      else return key
    }
    return typeof cur === "string" ? cur : key
  }

  return { locale: DEFAULT_LOCALE, setLocale: () => {}, t }
}
