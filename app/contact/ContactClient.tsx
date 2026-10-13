"use client"

import type React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Facebook,
  Instagram,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  BookOpen,
  HelpCircle,
} from "lucide-react"

export default function ContactClient() {
  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"

  return (
    <main className="min-h-dvh bg-black text-gray-200 antialiased pb-20">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center space-y-6">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 ${fx}`}
            >
              <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden />
              Contactează-ne
            </div>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              Hai să planificăm vizita
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Suntem aici să răspundem la întrebările tale și să te ajutăm să organizezi o experiență de neuitat la
              parcul nostru de știință.
            </p>
          </div>
        </div>
      </section>

      {/* INFORMAȚII + ACȚIUNI DIRECTE */}
      <section className="py-16 sm:py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* INFO */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-300 mb-6">Informații de contact</h2>
                <div className="space-y-6">
                  <ContactInfo
                    fx={fx}
                    icon={<MapPin className="h-6 w-6" />}
                    title="Adresa"
                    info="Chișinău, MD"
                    details="Mircea cel Bătrân 20/1, MD-2044"
                  />
                  <ContactInfo
                    fx={fx}
                    icon={<Phone className="h-6 w-6" />}
                    title="Telefon"
                    info="+373 79 010 277"
                    details="Luni - Duminică, 10:00 - 22:00"
                  />
                  <ContactInfo
                    fx={fx}
                    icon={<Mail className="h-6 w-6" />}
                    title="Email"
                    info="office@elementar.md"
                    details="Răspundem în maxim 24 de ore"
                  />
                  <ContactInfo
                    fx={fx}
                    icon={<Clock className="h-6 w-6" />}
                    title="Program"
                    info="Luni - Duminică"
                    details="10:00 - 22:00 (ultimele intrări la 21:00)"
                  />
                </div>
              </div>

              {/* SOCIAL */}
              <div>
                <h3 className="text-xl font-bold text-gray-300 mb-4">Urmărește-ne</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/elementar.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
                  >
                    <Facebook className="h-6 w-6 text-blue-400" />
                    <div>
                      <p className="font-medium text-gray-300">Facebook</p>
                      <p className="text-sm text-gray-400">@elementar.md</p>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/elementar.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
                  >
                    <Instagram className="h-6 w-6 text-pink-400" />
                    <div>
                      <p className="font-medium text-gray-300">Instagram</p>
                      <p className="text-sm text-gray-400">@elementar.md</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* CONTACTEAZĂ-NE DIRECT — fără formular, doar link-uri mailto: / tel: */}
            <div className={`p-8 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
              <h2 className="text-2xl font-bold text-gray-300 mb-2">Contactează-ne direct</h2>
              <p className="text-sm text-gray-400 mb-8">
                Nu avem un formular pe site. Apasă pe un buton și se deschide aplicația ta de email sau de apeluri —
                mesajul sau apelul pleacă direct din dispozitivul tău, nu prin site.
              </p>

              <div className="space-y-4">
                <Button asChild className={`w-full h-auto py-4 bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
                  <a href="mailto:office@elementar.md">
                    <Mail className="mr-3 h-5 w-5 shrink-0" />
                    <span className="flex flex-col items-start text-left">
                      <span className="font-semibold">Trimite-ne un email</span>
                      <span className="text-xs font-normal text-sky-100/80">office@elementar.md</span>
                    </span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className={`w-full h-auto py-4 border-sky-700/60 text-sky-300 hover:bg-sky-500/10 bg-transparent ${fx}`}
                >
                  <a href="tel:+37379010277">
                    <Phone className="mr-3 h-5 w-5 shrink-0" />
                    <span className="flex flex-col items-start text-left">
                      <span className="font-semibold">Sună-ne</span>
                      <span className="text-xs font-normal text-gray-400">+373 79 010 277</span>
                    </span>
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-xs text-gray-500 leading-relaxed">
                Dacă alegi să ne scrii sau să ne suni, corespondența are loc direct între tine și Elementar (prin
                email sau telefon) — site-ul nu colectează și nu înregistrează nimic din această interacțiune. Detalii
                în{" "}
                <Link href="/politica-de-confidentialitate" className="text-sky-400 hover:text-sky-300 underline">
                  Politica de Confidențialitate
                </Link>
                .
              </p>

              {/* NAVIGARE RAPIDĂ */}
              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-lg font-bold text-gray-300 mb-4">Între timp, explorează:</h3>
                <div className="mx-auto max-w-3xl grid gap-3 justify-items-center sm:grid-cols-2">
                  <Link
                    href="/domenii"
                    className={`w-full p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                  >
                    <BookOpen className="mx-auto h-6 w-6 text-sky-400 mb-1" />
                    <div className="text-sm text-gray-300">Domenii</div>
                  </Link>
                  <Link
                    href="/faq"
                    className={`w-full p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                  >
                    <HelpCircle className="mx-auto h-6 w-6 text-sky-400 mb-1" />
                    <div className="text-sm text-gray-300">FAQ</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMAȚII UTILE */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-300 mb-8 text-center">Pregătește-te pentru vizită</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/domenii"
              className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
            >
              <h3 className="text-lg font-bold text-gray-300 mb-2">Ce să aștepți</h3>
              <p className="text-gray-400 text-sm">Descoperă toate domeniile științifice care te așteaptă</p>
            </Link>
            <Link
              href="/faq"
              className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
            >
              <h3 className="text-lg font-bold text-gray-300 mb-2">Întrebări Frecvente</h3>
              <p className="text-gray-400 text-sm">Găsește răspunsuri la întrebările despre vizită</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CUM AJUNGI — doar link-uri către Google Maps / Waze, fără hartă încorporată */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent mb-4">
              Cum ajungi la noi
            </h2>
            <p className="text-lg text-gray-300">
              Ne găsești la noua adresă din Chișinău, pe Mircea cel Bătrân 20/1.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* INSTRUCȚIUNI */}
            <div className="space-y-6">
              <div className={`p-6 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-green-500/20 text-green-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-2">Cu mașina</h3>
                    {/* TODO: de confirmat disponibilitatea parcării la noua adresă
                        și adăugat aici, odată ce avem informația. */}
                    <p className="text-gray-400 text-sm">
                      Ne găsești pe Mircea cel Bătrân 20/1, Chișinău. Pentru traseu exact, folosește butoanele
                      Google Maps / Waze de mai jos.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-blue-500/20 text-blue-400">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-2">Transport public</h3>
                    {/* TODO: de confirmat rutele/stația cea mai apropiată pentru
                        noua adresă (Mircea cel Bătrân 20/1) și completat aici. */}
                    <p className="text-gray-400 text-sm">
                      Detaliile despre transportul public către noua locație urmează să fie publicate — revino
                      curând sau sună-ne pentru indicații.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTOANE MAPS/WAZE */}
            <div className="space-y-6">
              <p className="text-sm text-gray-400">
                Pentru orientare, deschide traseul direct în aplicația ta preferată — nu încărcăm o hartă pe această
                pagină:
              </p>

              <Button asChild className={`w-full bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Mircea+cel+B%C4%83tr%C3%A2n+20%2F1%2C+Chi%C8%99in%C4%83u%2C+Moldova"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Deschide în Google Maps
                </a>
              </Button>

              <Button asChild className={`w-full bg-purple-500 text-white hover:bg-purple-400 ${fx}`}>
                <a
                  href="https://waze.com/ul?q=Mircea%20cel%20B%C4%83tr%C3%A2n%2020%2F1%20Chi%C8%99in%C4%83u%20Moldova&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Deschide în WAZE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ————— Sub-componente ————— */

function ContactInfo({
  fx,
  icon,
  title,
  info,
  details,
}: {
  fx: string
  icon: React.ReactNode
  title: string
  info: string
  details: string
}) {
  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5 ${fx}`}>
      <div className="grid h-10 w-10 place-items-center rounded-md bg-white/8 text-sky-400">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-300">{title}</h3>
        <p className="text-gray-300">{info}</p>
        <p className="text-sm text-gray-400">{details}</p>
      </div>
    </div>
  )
}
