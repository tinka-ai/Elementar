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
                  href="https://www.google.com/maps/dir/?api=1&destination=Mircea+cel+B%C4%83tr%C3%A2n+20%2F1%2C+Chi%C8%99in%C4%83u%2C+Moldova&travelmode=driving"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoogleMapsIcon className="mr-2 h-5 w-5 shrink-0" />
                  Deschide în Google Maps
                </a>
              </Button>

              <Button asChild className={`w-full bg-purple-500 text-white hover:bg-purple-400 ${fx}`}>
                <a
                  href="https://waze.com/ul?q=Mircea%20cel%20B%C4%83tr%C3%A2n%2020%2F1%20Chi%C8%99in%C4%83u%20Moldova&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WazeIcon className="mr-2 h-5 w-5 shrink-0" />
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

/* Iconițe oficiale (simple-icons), inline ca să nu adăugăm o dependență nouă */
function GoogleMapsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
    </svg>
  )
}

function WazeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.218 0C9.915 0 6.835 1.49 4.723 4.148c-1.515 1.913-2.31 4.272-2.31 6.706v1.739c0 .894-.62 1.738-1.862 1.813-.298.025-.547.224-.547.522-.05.82.82 2.31 2.012 3.502.82.844 1.788 1.515 2.832 2.036a3 3 0 0 0 2.955 3.528 2.966 2.966 0 0 0 2.931-2.385h2.509c.323 1.689 2.086 2.856 3.974 2.21 1.64-.546 2.36-2.409 1.763-3.924a12.84 12.84 0 0 0 1.838-1.465 10.73 10.73 0 0 0 3.18-7.65c0-2.882-1.118-5.589-3.155-7.625A10.899 10.899 0 0 0 13.218 0zm0 1.217c2.558 0 4.967.994 6.78 2.807a9.525 9.525 0 0 1 2.807 6.78A9.526 9.526 0 0 1 20 17.585a9.647 9.647 0 0 1-6.78 2.807h-2.46a3.008 3.008 0 0 0-2.93-2.41 3.03 3.03 0 0 0-2.534 1.367v.024a8.945 8.945 0 0 1-2.41-1.788c-.844-.844-1.316-1.614-1.515-2.11a2.858 2.858 0 0 0 1.441-.846 2.959 2.959 0 0 0 .795-2.036v-1.789c0-2.11.696-4.197 2.012-5.861 1.863-2.385 4.62-3.726 7.6-3.726zm-2.41 5.986a1.192 1.192 0 0 0-1.191 1.192 1.192 1.192 0 0 0 1.192 1.193A1.192 1.192 0 0 0 12 8.395a1.192 1.192 0 0 0-1.192-1.192zm7.204 0a1.192 1.192 0 0 0-1.192 1.192 1.192 1.192 0 0 0 1.192 1.193 1.192 1.192 0 0 0 1.192-1.193 1.192 1.192 0 0 0-1.192-1.192zm-7.377 4.769a.596.596 0 0 0-.546.845 4.813 4.813 0 0 0 4.346 2.757 4.77 4.77 0 0 0 4.347-2.757.596.596 0 0 0-.547-.845h-.025a.561.561 0 0 0-.521.348 3.59 3.59 0 0 1-3.254 2.061 3.591 3.591 0 0 1-3.254-2.061.64.64 0 0 0-.546-.348z" />
    </svg>
  )
}
