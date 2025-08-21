"use client"

import { useRouter } from "next/router"
import { getTranslation, type Translations, type Locale } from "@/lib/i18n"

export function useTranslations(translations: Translations) {
  const router = useRouter()
  const locale = (router.locale || "ro") as Locale

  const t = (key: string): string => {
    return getTranslation(translations, key, locale)
  }

  return { t, locale }
}
