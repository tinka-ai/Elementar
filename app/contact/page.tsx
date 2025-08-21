"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Facebook,
  Instagram,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  Users,
} from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)
  const [showEmailSuccess, setShowEmailSuccess] = useState(false)

  const fx =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxIcon =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45),0_0_18px_4px_rgba(168,85,247,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"
  const fxLink =
    "relative transition-colors duration-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-sky-400 after:to-violet-500 after:transition-all after:duration-300"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      visitType: formData.get("visitType") as string,
      groupSize: formData.get("groupSize") as string,
      preferredDate: formData.get("preferredDate") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      setResult({ success: false, error: "Câmpurile obligatorii nu sunt completate." })
      setIsLoading(false)
      return
    }

    try {
      // Method 1: Using EmailJS (client-side, WordPress compatible)
      const emailJSResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_elementar", // You'll need to configure this in EmailJS
          template_id: "template_contact", // You'll need to configure this in EmailJS
          user_id: "your_emailjs_user_id", // You'll need to get this from EmailJS
          template_params: {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            visit_type: data.visitType,
            group_size: data.groupSize,
            preferred_date: data.preferredDate,
            message: data.message,
            to_email: "office@elementar.md",
          },
        }),
      })

      if (emailJSResponse.ok) {
        setResult({ success: true, message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând." })
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("EmailJS failed")
      }
    } catch (error) {
      // Fallback Method 2: Direct PHP endpoint
      try {
        const phpResponse = await fetch("/wp-content/themes/elementar/send-email.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        const result = await phpResponse.json()

        if (result.success) {
          setResult({ success: true, message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând." })
          ;(e.target as HTMLFormElement).reset()
        } else {
          throw new Error(result.error || "PHP endpoint failed")
        }
      } catch (phpError) {
        // Fallback Method 3: Simple mailto (always works)
        const mailtoLink = `mailto:office@elementar.md?subject=Mesaj nou de la ${data.name} - ${data.visitType || "Contact general"}&body=Nume: ${data.name}%0D%0AEmail: ${data.email}%0D%0A${data.phone ? `Telefon: ${data.phone}%0D%0A` : ""}${data.visitType ? `Tipul vizitei: ${data.visitType}%0D%0A` : ""}${data.groupSize ? `Numărul de persoane: ${data.groupSize}%0D%0A` : ""}${data.preferredDate ? `Data preferată: ${data.preferredDate}%0D%0A` : ""}%0D%0AMesaj:%0D%0A${data.message}`

        window.location.href = mailtoLink
        setResult({
          success: true,
          message: "S-a deschis aplicația de email. Vă rugăm să trimiteți emailul din aplicația dumneavoastră.",
        })
      }
    }

    setIsLoading(false)
  }

  const handleDirectEmail = async () => {
    try {
      setIsLoading(true)

      // Send email in background to element.ar.md@gmail.com
      const response = await fetch("/api/send-direct-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "element.ar.md@gmail.com",
          subject: "Contact direct de pe site",
          message: "Un vizitator a solicitat contact direct prin butonul de email.",
        }),
      })

      if (response.ok) {
        setShowEmailSuccess(true)
        // Hide success message after 3 seconds
        setTimeout(() => setShowEmailSuccess(false), 3000)
      } else {
        // Fallback to mailto if API fails
        window.location.href =
          "mailto:office@elementar.md?subject=Întrebare despre Parcul de Știință și Curiozități&body=Bună ziua,%0D%0A%0D%0AAș dori să aflu mai multe informații despre..."
      }
    } catch (error) {
      // Fallback to mailto if there's an error
      window.location.href =
        "mailto:office@elementar.md?subject=Întrebare despre Parcul de Știință și Curiozități&body=Bună ziua,%0D%0A%0D%0AAș dori să aflu mai multe informații despre..."
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-dvh bg-black text-gray-200 antialiased pb-20">
      <Header fx={fx} fxIcon={fxIcon} fxLink={fxLink} />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center space-y-6">
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 ${fx}`}
              >
                <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                {"Contactează-ne"}
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-pink-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                {"Hai să planificăm vizita"}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Suntem aici să răspundem la întrebările tale și să te ajutăm să organizezi o experiență de neuitat la
                parcul nostru de știință.
              </p>
            </div>
          </div>
        </section>

        {/* INFORMAȚII DE CONTACT */}
        <section className="py-16 sm:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* INFORMAȚII */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-300 mb-6">Informații de contact</h2>
                  <div className="space-y-6">
                    <ContactInfo
                      fx={fx}
                      icon={<MapPin className="h-6 w-6" />}
                      title="Adresa"
                      info="Port Mall, Chișinău MD"
                      details="Strada Mihai Sadoveanu 42/6, MD-2075"
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

                {/* SOCIAL MEDIA */}
                <div>
                  <h3 className="text-xl font-bold text-gray-300 mb-4">Urmărește-ne</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/elementara.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
                    >
                      <Facebook className="h-6 w-6 text-blue-400" />
                      <div>
                        <p className="font-medium text-gray-300">Facebook</p>
                        <p className="text-sm text-gray-400">@elementara.ro</p>
                      </div>
                    </a>
                    <a
                      href="https://instagram.com/elementara.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${fx}`}
                    >
                      <Instagram className="h-6 w-6 text-pink-400" />
                      <div>
                        <p className="font-medium text-gray-300">Instagram</p>
                        <p className="text-sm text-gray-400">@elementara.ro</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* FORMULAR DE CONTACT */}
              <div className={`p-8 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
                <h2 className="text-2xl font-bold text-gray-300 mb-6">Trimite-ne un mesaj</h2>

                {/* MESAJ DE REZULTAT */}
                {result && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${result.success ? "bg-green-500/20 border border-green-500/30" : "bg-red-500/20 border border-red-500/30"}`}
                  >
                    <p className={`text-sm ${result.success ? "text-green-300" : "text-red-300"}`}>
                      {result.success ? result.message : result.error}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nume complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="bg-white/10 border-white/20 text-gray-200 placeholder:text-gray-400"
                        placeholder="Numele tău"
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/10 border-white/20 text-gray-200 placeholder:text-gray-400"
                        placeholder="email@exemplu.com"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-white/10 border border-white/20 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        placeholder="+373 XX XXX XXX"
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label htmlFor="visitType" className="block text-sm font-medium text-gray-300 mb-2">
                        Tipul vizitei
                      </label>
                      <select
                        id="visitType"
                        name="visitType"
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        disabled={isLoading}
                      >
                        <option value="">Selectează</option>
                        <option value="individual">Vizită individuală</option>
                        <option value="familie">Vizită în familie</option>
                        <option value="grup">Grup organizat</option>
                        <option value="scoala">Excursie școlară</option>
                        <option value="aniversare">Petrecere aniversară</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-gray-300 mb-2">
                        Numărul de persoane
                      </label>
                      <Input
                        id="groupSize"
                        name="groupSize"
                        type="number"
                        min="1"
                        className="bg-white/10 border border-white/20 rounded-md text-gray-200 placeholder:text-gray-400"
                        placeholder="Ex: 5"
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-2">
                        Data preferată
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        className="bg-white/10 border border-white/20 rounded-md text-gray-200"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mesaj *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="bg-white/10 border border-white/20 rounded-md text-gray-200 placeholder:text-gray-400"
                      placeholder="Spune-ne mai multe despre vizita ta sau întreabă orice te interesează..."
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-sky-500 text-white hover:bg-sky-400 ${fx}`}
                  >
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

                {/* CONTACT DIRECT SUCCESS POPUP */}
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
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Link
                      href="/domenii"
                      className={`p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                    >
                      <div className="text-sky-400 mb-1">🔬</div>
                      <div className="text-sm text-gray-300">Domenii</div>
                    </Link>
                    <Link
                      href="/domenii"
                      className={`p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                    >
                      <div className="text-sky-400 mb-1">📚</div>
                      <div className="text-sm text-gray-300">Domenii</div>
                    </Link>
                    <Link
                      href="/galerie"
                      className={`p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                    >
                      <div className="text-sky-400 mb-1">📸</div>
                      <div className="text-sm text-gray-300">Galerie</div>
                    </Link>
                    <Link
                      href="/faq"
                      className={`p-3 rounded-lg bg-white/10 hover:bg-white/15 text-center transition-colors ${fx}`}
                    >
                      <div className="text-sky-400 mb-1">❓</div>
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

              {/* INSTRUCȚIUNI DE ACCES */}
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
                        se află la etajul 2.
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
                        Autobuzele 1, 22, 35 și troleibuzele 2, 8 opresc în apropierea mall-ului. Stația cea mai
                        apropiată: "Port Mall".
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl border border-white/10 bg-white/5 ${fx}`}>
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-md bg-purple-500/20 text-purple-400">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300 mb-2">Rezervare recomandată</h3>
                      <p className="text-gray-400 text-sm">
                        Pentru o experiență optimă, recomandăm rezervarea în avans, mai ales pentru weekend și
                        sărbători.
                      </p>
                    </div>
                  </div>
                </div>

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
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.184 10.036c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm-10-8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14.5c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5-6.5zm0-11c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z" />
                    </svg>
                    Deschide în WAZE
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer fx={fx} fxIcon={fxIcon} />
    </div>
  )
}

/* ————— Sub‑componente ————— */

function Header({ fx, fxIcon, fxLink }: { fx: string; fxIcon: string; fxLink: string }) {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Acasă">
            <img
              src="/images/logo-elementara.png"
              alt="Logo ELEMENTAR — Parc de Știință și Curiozități"
              className="h-8 sm:h-9 md:h-10 w-auto select-none pointer-events-none"
            />
            <span className="sr-only">Parcul de Știință și Curiozități</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className={fxLink}>
              Acasă
            </Link>
            <Link href="/domenii" className={fxLink}>
              Domenii
            </Link>
            <Link href="/galerie" className={fxLink}>
              Galerie
            </Link>
            <Link href="/faq" className={fxLink}>
              FAQ
            </Link>
            <Link href="/contact" className={`${fxLink} text-sky-400`}>
              Contact
            </Link>
          </nav>
          <Button asChild className={`hidden md:inline-flex bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
            <Link href="/contact">
              Programează o vizită
              <ArrowRight className="ms-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

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

function Footer({ fx, fxIcon }: { fx: string; fxIcon: string }) {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-gray-300 font-medium">Contact</p>
            <p className="text-sm text-gray-300">Port Mall, Chișinău MD — Strada Mihai Sadoveanu 42/6, MD-2075</p>
            <p className="text-sm text-gray-300">+373 79 010 277 • office@elementar.md</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/elementara.ro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`grid h-10 w-10 place-items-center rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white ${fxIcon}`}
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/elementara.ro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`grid h-10 w-10 place-items-center rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white ${fxIcon}`}
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500 flex items-center justify-between">
          <div>
            <p>© {new Date().getFullYear()} ELEMENTAR — Parc de Știință și Curiozități.</p>
            <p className="mt-1">powered by TINKA AI</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +373 79 010 277
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                />
              </svg>
              office@elementar.md
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
