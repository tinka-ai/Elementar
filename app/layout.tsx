import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

function generateMetadata(locale = "ro"): Metadata {
  const titles = {
    ro: "ELEMENTAR — Parc de Știință și Curiozități",
    en: "ELEMENTAR — Science and Curiosity Park",
    ru: "ELEMENTAR — Парк Науки и Любопытства",
  }

  const descriptions = {
    ro: "Parcul de Știință și Curiozități – locul în care joaca, arta și experimentul te conduc la înțelegerea fenomenelor reale. Vino să atingi, să testezi, să descoperi.",
    en: "The Science and Curiosity Park – where play, art and experimentation lead you to understanding real phenomena. Come touch, test, discover.",
    ru: "Парк Науки и Любопытства – место, где игра, искусство и эксперимент ведут вас к пониманию реальных явлений. Приходите трогать, тестировать, открывать.",
  }

  const keywords = {
    ro: [
      "știință",
      "experimente",
      "copii",
      "educație",
      "interactiv",
      "Chișinău",
      "Moldova",
      "fizică",
      "chimie",
      "biologie",
      "astronomie",
    ],
    en: [
      "science",
      "experiments",
      "children",
      "education",
      "interactive",
      "Chisinau",
      "Moldova",
      "physics",
      "chemistry",
      "biology",
      "astronomy",
    ],
    ru: [
      "наука",
      "эксперименты",
      "дети",
      "образование",
      "интерактивный",
      "Кишинев",
      "Молдова",
      "физика",
      "химия",
      "биология",
      "астрономия",
    ],
  }

  return {
    title: {
      default: titles[locale as keyof typeof titles] || titles.ro,
      template: "%s | ELEMENTAR",
    },
    description: descriptions[locale as keyof typeof descriptions] || descriptions.ro,
    keywords: keywords[locale as keyof typeof keywords] || keywords.ro,
    authors: [{ name: "ELEMENTAR" }],
    creator: "ELEMENTAR",
    publisher: "ELEMENTAR",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://elementar.md"),
    alternates: {
      canonical: "/",
      languages: {
        ro: "/ro",
        en: "/en",
        ru: "/ru",
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.ro,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.ro,
      url: "https://elementar.md",
      siteName: "ELEMENTAR",
      images: [
        {
          url: "/images/logo-elementara-new.png",
          width: 1200,
          height: 630,
          alt: titles[locale as keyof typeof titles] || titles.ro,
        },
      ],
      locale: locale === "ro" ? "ro_MD" : locale === "en" ? "en_US" : "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.ro,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.ro,
      images: ["/images/logo-elementara-new.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    generator: "v0.app",
  }
}

export const metadata: Metadata = generateMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="alternate" hrefLang="ro" href="https://elementar.md/ro" />
        <link rel="alternate" hrefLang="en" href="https://elementar.md/en" />
        <link rel="alternate" hrefLang="ru" href="https://elementar.md/ru" />
        <link rel="alternate" hrefLang="x-default" href="https://elementar.md" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
