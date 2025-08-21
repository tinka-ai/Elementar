export type Locale = "ro" | "ru" | "en"

export const locales: Locale[] = ["ro", "ru", "en"]

export const localeNames: Record<Locale, string> = {
  ro: "Română",
  ru: "Русский",
  en: "English",
}

export const localeFlags: Record<Locale, string> = {
  ro: "🇷🇴",
  ru: "🇷🇺",
  en: "🇬🇧",
}

// Translation type for type safety
export interface Translations {
  [key: string]: string | Translations
}

// Simple translation function
export function getTranslation(translations: Translations, key: string, locale: Locale): string {
  const keys = key.split(".")
  let current: any = translations[locale]

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = current[k]
    } else {
      // Fallback to Romanian if translation not found
      current = translations["ro"]
      for (const fallbackKey of keys) {
        if (current && typeof current === "object" && fallbackKey in current) {
          current = current[fallbackKey]
        } else {
          return key // Return key if no translation found
        }
      }
      break
    }
  }

  return typeof current === "string" ? current : key
}
