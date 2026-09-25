import type { Metadata } from "next"
import { ELEMENTAR } from "@/lib/entity"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact — Program, adresă și telefon",
  description:
    "Contactează ELEMENTAR: Port Mall, et. 4, Chișinău, Strada Mihai Sadoveanu 42/6. Telefon +373 79 010 277, program zilnic 10:00-22:00. Fără formular — scrii sau suni direct.",
  alternates: {
    canonical: `${ELEMENTAR.url}/contact`,
  },
  openGraph: {
    title: "Contact ELEMENTAR — Port Mall, Chișinău",
    description: "Adresă, telefon și program de vizitare pentru ELEMENTAR, parcul de știință din Port Mall, Chișinău.",
    url: `${ELEMENTAR.url}/contact`,
  },
}

export default function ContactPage() {
  return <ContactClient />
}
