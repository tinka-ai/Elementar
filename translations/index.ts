import { ro } from "./ro"
import { en } from "./en"
import { ru } from "./ru"

export const translations = {
  ro,
  en,
  ru,
}

export type TranslationKey = keyof typeof ro
