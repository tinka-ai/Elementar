"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { locales, type Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  fx?: string
}

const localeShortNames: Record<Locale, string> = {
  ro: "Ro",
  en: "En",
  ru: "Ru",
}

export function LanguageSwitcher({ fx = "" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (newLocale: Locale) => {
    console.log("[v0] Language change requested:", newLocale)
    setLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-2 py-2 text-sm text-gray-300 hover:text-white border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-medium">{localeShortNames[locale]}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg z-50">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLanguageChange(loc)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm text-left hover:bg-white/10 transition-colors ${
                  locale === loc ? "text-sky-400 bg-white/5" : "text-gray-300 hover:text-white"
                }`}
                role="menuitem"
              >
                <span className="font-medium">{localeShortNames[loc]}</span>
                {locale === loc && <div className="w-2 h-2 rounded-full bg-sky-400" aria-label="Current language" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
