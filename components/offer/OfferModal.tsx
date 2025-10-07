// components/offer/OfferModal.tsx
"use client"

import { useState } from "react"
import { useLocale } from "@/contexts/locale-context"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Send } from "lucide-react"

type OfferModalProps = { open: boolean; onOpenChange: (v: boolean) => void }

const WEBSITE_GOALS_KEYS = ["leads","ecom","brand","info","support"] as const
const WEBSITE_FEATURES_KEYS = ["blog","portfolio","form","booking","payments","ecommerce","multilang","gdpr","analytics"] as const
const BOT_CHANNEL_KEYS = ["site","whatsapp","facebook","telegram","viber"] as const
const BOT_ROLE_KEYS = ["sales","support","faq","booking"] as const
const AUTOMATION_KEYS = ["crm","qualify","notify","schedule","followup","newsletter","other"] as const
const BUDGET_KEYS = ["lt1k","1to5","5to10","gt10"] as const

export default function OfferModal({ open, onOpenChange }: OfferModalProps) {
  const { t, locale } = useLocale() as any
  const L = t?.offer // dicționarul de mai jos (secțiunea 2.4)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState<null | "ok" | "err">(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setSent(null)

    const fd = new FormData(e.currentTarget)
    // adăugăm și limba curentă în payload
    fd.set("uiLocale", locale || "ro")

    const res = await fetch("/api/offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fd.entries())),
    })

    setSending(false)
    if (res.ok) {
      setSent("ok")
      ;(e.target as HTMLFormElement).reset()
    } else {
      setSent("err")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{L?.title ?? "Solicită ofertă – Pachet lansare rapidă"}</DialogTitle>
          <DialogDescription>{L?.subtitle ?? "Completează cât poți — ne ajută să propunem soluția potrivită."}</DialogDescription>
        </DialogHeader>

        {sent === "ok" ? (
          <div className="space-y-3">
            <p className="text-green-500 font-medium">{L?.successTitle ?? "Mulțumim! Formularul a fost trimis."}</p>
            <p className="text-muted-foreground">{L?.successBody ?? "TINKA AI va analiza răspunsurile și revine în curând cu oferta. Ți-am trimis și un email de confirmare."}</p>
            <Button onClick={() => onOpenChange(false)} className="mt-2">{L?.close ?? "Închide"}</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">{L?.sections?.contact ?? "Contact"}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{L?.fields?.name}</Label>
                  <Input id="name" name="name" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">{L?.fields?.email} *</Label>
                  <Input id="email" name="email" type="email" required placeholder="name@domain.com" />
                </div>
                <div>
                  <Label htmlFor="phone">{L?.fields?.phone}</Label>
                  <Input id="phone" name="phone" placeholder="+373…" />
                </div>
                <div>
                  <Label htmlFor="company">{L?.fields?.company}</Label>
                  <Input id="company" name="company" placeholder="Company SRL" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="region">{L?.fields?.region}</Label>
                  <Input id="region" name="region" placeholder={L?.placeholders?.region ?? "Țară / oraș / fus orar"} />
                </div>
              </div>
            </section>

            {/* Business */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">{L?.sections?.business}</h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="about">{L?.fields?.about}</Label>
                  <Textarea id="about" name="about" rows={3} placeholder={L?.placeholders?.about} />
                </div>
                <div>
                  <Label htmlFor="audience">{L?.fields?.audience}</Label>
                  <Textarea id="audience" name="audience" rows={2} placeholder={L?.placeholders?.audience} />
                </div>
                <div>
                  <Label htmlFor="problems">{L?.fields?.problems}</Label>
                  <Textarea id="problems" name="problems" rows={2} placeholder={L?.placeholders?.problems} />
                </div>
                <div>
                  <Label htmlFor="links">{L?.fields?.links}</Label>
                  <Input id="links" name="links" placeholder="https://exemplu.com, https://instagram.com/..." />
                </div>
              </div>
            </section>

            {/* Goals */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">{L?.sections?.goals}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{L?.fields?.websiteGoals}</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {WEBSITE_GOALS_KEYS.map((k) => (
                      <label key={k} className="flex items-center gap-2 text-sm">
                        <Checkbox name="websiteGoals" value={k} /> <span>{L?.options?.websiteGoals?.[k]}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="kpi">{L?.fields?.kpi}</Label>
                  <Input id="kpi" name="kpi" placeholder={L?.placeholders?.kpi} />
                </div>
              </div>
            </section>

            {/* Website */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">{L?.sections?.website}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{L?.fields?.features}</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {WEBSITE_FEATURES_KEYS.map((k) => (
                      <label key={k} className="flex items-center gap-2 text-sm">
                        <Checkbox name="features" value={k} /> <span>{L?.options?.features?.[k]}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="content">{L?.fields?.content}</Label>
                    <Select name="content">
                      <SelectTrigger id="content"><SelectValue placeholder={L?.placeholders?.content} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="have">{L?.options?.content?.have}</SelectItem>
                        <SelectItem value="need">{L?.options?.content?.need}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="branding">{L?.fields?.branding}</Label>
                    <Select name="branding">
                      <SelectTrigger id="branding"><SelectValue placeholder={L?.placeholders?.branding} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="have">{L?.options?.branding?.have}</SelectItem>
                        <SelectItem value="need">{L?.options?.branding?.need}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="refs">{L?.fields?.refs}</Label>
                    <Input id="refs" name="refs" placeholder="https://site1.com, https://site2.com, https://site3.com" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="integrations">{L?.fields?.integrations}</Label>
                  <Input id="integrations" name="integrations" placeholder={L?.placeholders?.integrations} />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="domain">{L?.fields?.domain}</Label>
                  <Select name="domain">
                    <SelectTrigger id="domain"><SelectValue placeholder={L?.placeholders?.domain} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="have">{L?.options?.domain?.have}</SelectItem>
                      <SelectItem value="need">{L?.options?.domain?.need}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Chatbot */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">{L?.sections?.bot}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{L?.fields?.botChannels}</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {BOT_CHANNEL_KEYS.map((k) => (
                      <label key={k} className="flex items-center gap-2 text-sm">
                        <Checkbox name="botChannels" value={k} /> <span>{L?.options?.botChannels?.[k]}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>{L?.fields?.botRole}</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {BOT_ROLE_KEYS.map((k) => (
                      <label key={k} className="flex items-center gap-2 text-sm">
                        <Checkbox name="botRole" value={k} /> <span>{L?.options?.botRole?.[k]}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="botLangs">{L?.fields?.botLangs}</Label>
                  <Input id="botLangs" name="botLangs" placeholder={L?.placeholders?.botLangs} />
                </div>
                <div>
                  <Label htmlFor="kb">{L?.fields?.kb}</Label>
                  <Textarea id="kb" name="kb" rows={2} placeholder={L?.placeholders?.kb} />
                </div>
              </div>
            </section>

            {/* Automations */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">{L?.sections?.automation}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{L?.fields?.automations}</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {AUTOMATION_KEYS.map((k) => (
                      <label key={k} className="flex items-center gap-2 text-sm">
                        <Checkbox name="automations" value={k} /> <span>{L?.options?.automations?.[k]}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="other">{L?.fields?.other}</Label>
                  <Textarea id="other" name="other" rows={2} placeholder={L?.placeholders?.other} />
                </div>
              </div>
            </section>

            {/* Constraints */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">{L?.sections?.constraints}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="deadline">{L?.fields?.deadline}</Label>
                  <Input id="deadline" name="deadline" placeholder={L?.placeholders?.deadline} />
                </div>
                <div>
                  <Label htmlFor="budget">{L?.fields?.budget}</Label>
                  <Select name="budget">
                    <SelectTrigger id="budget"><SelectValue placeholder={L?.placeholders?.budget} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lt1k">{L?.options?.budget?.lt1k}</SelectItem>
                      <SelectItem value="1to5">{L?.options?.budget?.["1to5"]}</SelectItem>
                      <SelectItem value="5to10">{L?.options?.budget?.["5to10"]}</SelectItem>
                      <SelectItem value="gt10">{L?.options?.budget?.gt10}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="notes">{L?.fields?.notes}</Label>
                  <Textarea id="notes" name="notes" rows={2} placeholder={L?.placeholders?.notes} />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <Checkbox required name="gdpr" /> <span>{L?.fields?.gdpr}</span>
              </label>
            </section>

            {sent === "err" && (
              <p className="text-sm text-red-500">{L?.error ?? "A apărut o eroare. Te rugăm să încerci din nou."}</p>
            )}

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                {L?.cancel ?? "Renunță"}
              </Button>
              <Button type="submit" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                {sending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                {L?.submit ?? "Trimite"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
