"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Facebook,
  Instagram,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Users,
  BookOpen,
  Image as ImageIcon,
  HelpCircle,
  PlayCircle,
  X,
} from "lucide-react"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)
  const [showEmailSuccess, setShowEmailSuccess] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      message: (formData.get("message") as string)?.trim() || "",
      contactInfo: (formData.get("contactInfo") as string)?.trim() || "",
      consent: formData.get("consent") === "on",
    }

    if (!data.message || data.message.length < 5) {
      setResult({ success: false, error: "Te rugăm să scrii un mesaj." })
      setIsLoading(false)
      return
    }

    if (!data.consent) {
      setResult({
        success: false,
        error: "Pentru a trimite mesajul, bifează căsuța de mai jos ca să confirmi că ai citit informarea.",
      })
      setIsLoading(false)
      return
    }

    try {
      const emailJSResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_elementar",
          template_id: "template_contact",
          user_id: "your_emailjs_user_id",
          template_params: {
            message: data.message,
            contact_info: data.contactInfo || "Nu a fost oferită nicio informație de contact.",
            to_email: "office@elementar.md",
          },
        }),
      })

      if (emailJSResponse.ok) {
        setResult({ success: true, message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând." })
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("EmailJS failed")
      }
    } catch {
      try {
        const phpResponse = await fetch("/wp-content/themes/elementar/send-email.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        const r = await phpResponse.json()
        if (r.success) {
          setResult({ success: true, message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând." })
          ;(e.target as HTMLFormElement).reset()
        } else {
          throw new Error(r.error || "PHP endpoint failed")
        }
      } catch {
        const bodyLines = [
          "Mesaj:",
          data.message,
          "",
          data.contactInfo
            ? `Informație de contact oferită voluntar: ${data.contactInfo}`
            : "Nu a fost oferită nicio informație de contact.",
        ].join("\n")
        const mailtoLink = `mailto:office@elementar.md?subject=${encodeURIComponent(
          "Mesaj nou de pe site-ul ELEMENTAR",
        )}&body=${encodeURIComponent(bodyLines)}`
        window.location.href = mailtoLink
        setResult({
          success: true,
          message: "S-a deschis aplicația de email. Vă rugăm să trimiteți emailul din aplicația dumneavoastră.",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function handleDirectEmail() {
    try {
      setIsLoading(true)
      const response = await fetch("/api/send-direct-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "element.ar.md@gmail.com",
          subject: "Contact direct de pe site",
          message: "Un vizitator a solicitat contact direct prin butonul de email.",
        }),
      })
      if (response.ok) {
        setShowEmailSuccess(true)
        setTimeout(() => setShowEmailSuccess(false), 3000)
      } else {
        window.location.href =
          "mailto:office@elementar.md?subject=Întrebare despre Parcul de Știință și Curiozități&body=Bună ziua,%0D%0A%0D%0AAș dori să aflu mai multe informații despre..."
      }
    } catch {
      window.location.href =
        "mailto:office@elementar.md?subject=Întrebare despre Parcul de Știință și Curiozități&body=Bună ziua,%0D%0A%0D%0AAș dori să aflu mai multe informații despre..."
    } finally {
      setIsLoading(false)
    }
  }

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

      {/* INFORMAȚII + FORMULAR */}
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
                    info="Port Mall, et. 4, Chișinău MD"
                    details="Strada Mihai Sadoveanu 42/6, MD-2075"
                  />
                  <ContactInfo
                    fx={fx}
                    icon={<Phone className="h-6 w-6" />}
                    title="Telefon"
                    info="+373 698 30 702"
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

            {/* FORMULAR */}
            <div className={`p-8 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
              <h2 className="text-2xl font-bold text-gray-300 mb-2">Trimite-ne un mesaj</h2>
              <p className="text-sm text-gray-400 mb-6">
                Nu solicităm și nu colectăm date cu caracter personal. Singurul câmp obligatoriu este mesajul tău.
              </p>

              {result && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    result.success
                      ? "bg-green-500/20 border border-green-500/30"
                      : "bg-red-500/20 border border-red-500/30"
                  }`}
                >
                  <p className={`text-sm ${result.success ? "text-green-300" : "text-red-300"}`}>
                    {result.success ? result.message : result.error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mesaj *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-white/10 border border-white/20 rounded-md text-gray-200 placeholder:text-gray-400"
                    placeholder="Spune-ne mai multe despre vizita ta sau întreabă orice te interesează..."
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-300 mb-2">
                    Cum preferi să primești răspunsul? <span className="text-gray-500">(opțional)</span>
                  </label>
                  <Input
                    id="contactInfo"
                    name="contactInfo"
                    type="text"
                    className="bg-white/10 border-white/20 text-gray-200 placeholder:text-gray-400"
                    placeholder="Ex: email, telefon, sau altă modalitate de contact — la alegerea ta"
                    disabled={isLoading}
                  />
                  <p className="mt-1.5 text-xs text-gray-500">
                    Nu îți cerem acest lucru — poți lăsa câmpul necompletat. Dacă alegi să ne oferi o modalitate de
                    contact, o faci din proprie inițiativă și pe propria răspundere.
                  </p>
                </div>

                {/* INFORMARE — fără colectare de date personale */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 space-y-3">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    ELEMENTAR nu solicită și nu colectează date cu caracter personal prin acest formular. Singurul
                    câmp obligatoriu este mesajul. Dacă alegi, din proprie inițiativă, să incluzi în mesaj sau în
                    câmpul de mai sus date de contact (nume, email, telefon etc.), o faci pe propria răspundere —
                    le vom folosi exclusiv pentru a-ți răspunde, fără a le folosi în alt scop.
                  </p>
                  <label className="flex items-start gap-2.5 text-xs text-gray-300">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      disabled={isLoading}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-white/10 accent-sky-500"
                    />
                    <span>
                      Am citit și sunt de acord cu cele de mai sus (semnătură electronică), conform{" "}
                      <Link href="/politica-de-confidentialitate" className="text-sky-400 hover:text-sky-300 underline">
                        Notei privind protecția datelor
                      </Link>
                      . *
                    </span>
                  </label>
                </div>

                <Button type="submit" disabled={isLoading} className={`w-full bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
                  <Send className="mr-2 h-4 w-4" />
                  {isLoading ? "Se trimite..." : "Trimite mesajul"}
                </Button>
              </form>

              {/* CONTACT DIRECT */}
              <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-sm font-bold text-gray-300 mb-2">Sau contactează-ne direct:</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={`border-sky-700/60 text-sky-300 hover:bg-sky-500/10 bg-transparent ${fx}`}
                  >
                    <a href="tel:+37379010277">
                      <Phone className="mr-2 h-4 w-4" />
                      Sună acum
                    </a>
                  </Button>
                  <Button
                    onClick={handleDirectEmail}
                    disabled={isLoading}
                    variant="outline"
                    size="sm"
                    className={`border-sky-700/60 text-sky-300 hover:bg-sky-500/10 bg-transparent ${fx}`}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {isLoading ? "Se trimite..." : "Email direct"}
                  </Button>
                </div>
              </div>

              {/* POPUP SUCCES EMAIL DIRECT */}
              {showEmailSuccess && (
                <div className="fixed top-4 right-4 z-50 p-4 bg-green-500/90 border border-green-400 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-medium">Mesajul a fost transmis cu succes!</p>
                  </div>
                </div>
              )}

              {/* NAVIGARE RAPIDĂ */}
              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-lg font-bold text-gray-300 mb-4">Între timp, explorează:</h3>
                <div className="mx-auto max-w-3xl grid gap-3 justify-items-center sm:grid-cols-2 md:grid-cols-3">
                  <Link
                    href="/domenii"
                    className={`w-full p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                  >
                    <BookOpen className="mx-auto h-6 w-6 text-sky-400 mb-1" />
                    <div className="text-sm text-gray-300">Domenii</div>
                  </Link>
                  <Link
                    href="/galerie"
                    className={`w-full p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                  >
                    <ImageIcon className="mx-auto h-6 w-6 text-sky-400 mb-1" />
                    <div className="text-sm text-gray-300">Galerie</div>
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
          <div className="grid gap-6 md:grid-cols-3">
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
            <Link
              href="/galerie"
              className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
            >
              <h3 className="text-lg font-bold text-gray-300 mb-2">Vezi Galeria</h3>
              <p className="text-gray-400 text-sm">Inspiră-te din experiențele altor vizitatori</p>
            </Link>
          </div>
        </div>
      </section>

      {/* HARTĂ ȘI ACCES */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent mb-4">
              Cum ajungi la noi
            </h2>
            <p className="text-lg text-gray-300">
              Ne găsești în inima Chișinăului, în Port Mall, cu acces facil și parcare gratuită.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* HARTĂ */}
            <div className={`rounded-xl overflow-hidden ${fx}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8234567890123!2d28.8638!3d47.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3f7b123456%3A0x1234567890abcdef!2sPort%20Mall%2C%20Strada%20Mihai%20Sadoveanu%2042%2F6%2C%20Chi%C8%99in%C4%83u%20MD-2075%2C%20Moldova!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația ELEMENTAR în Port Mall"
              />
            </div>

            {/* INSTRUCȚIUNI + VIDEO */}
            <div className="space-y-6">
              <div className={`p-6 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-green-500/20 text-green-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-2">Cu mașina</h3>
                    <p className="text-gray-400 text-sm">
                      Parcare gratuită disponibilă în Port Mall. Intrarea principală pe Strada Mihai Sadoveanu. Parcul
                      se află la etajul 4.
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
                    <p className="text-gray-400 text-sm">
                      PORT MALL oferă transport (auobuz) absolut gratuit pentru toți vizitatorii care circulă pe două
                      rute principale: Ciocana și Râșcani. Din transport public circulă autobuzul de pe ruta Nr. 5, care
                      oprește în apropierea mall-ului. Stația cea mai apropiată: „Port Mall".
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD VIDEO HOW TO GET TO */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className={`w-full text-left p-6 rounded-xl border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 flex gap-4 items-center ${fx}`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-sky-500/30 text-sky-100">
                  <PlayCircle className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-1">
                    Apasa aici sa vezi cum ajungi din parcare până la etajul, 4 la ELEMENTAR
                  </h3>
                  <p className="text-sm text-gray-300">
                    Vezi pas cu pas drumul de la intrarea in mall până în parcul de știință ELEMENTAR.
                  </p>
                </div>
              </button>

              <Button asChild className={`w-full bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
                <a
                  href="https://www.google.com/maps/dir//Port+Mall,+Strada+Mihai+Sadoveanu+42%2F6,+Chi%C8%99in%C4%83u+MD-2075,+Moldova/@47.0105,28.8638,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Deschide în Google Maps
                </a>
              </Button>

              <Button asChild className={`w-full bg-purple-500 text-white hover:bg-purple-400 mt-3 ${fx}`}>
                <a
                  href="https://waze.com/ul?q=Port%20Mall%20Strada%20Mihai%20Sadoveanu%2042%2F6%20Chi%C8%99in%C4%83u%20MD-2075%20Moldova&navigate=yes"
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

      {/* MODAL VIDEO HOW TO GET TO */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-[480px]">
            <button
              type="button"
              aria-label="Închide video"
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-gray-200 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/20 bg-black">
              <video
                src="/video/How%20to%20get%20to.webm"
                controls
                autoPlay
                className="h-full w-full object-contain bg-black"
              />
            </div>
          </div>

          {/* click pe fundal închide modalul */}
          <button
            type="button"
            className="fixed inset-0 -z-10"
            aria-label="Închide video"
            onClick={() => setIsVideoOpen(false)}
          />
        </div>
      )}
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
