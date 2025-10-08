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

/* ---------- helpers: bridges pentru shadcn -> FormData ---------- */

// Checkbox shadcn + input real care ajunge în FormData
function FormCB({
  name,
  value,
  label,
  defaultChecked = false,
}: {
  name: string
  value?: string
  label: React.ReactNode
  defaultChecked?: boolean
}) {
  const [checked, setChecked] = useState<boolean>(defaultChecked)
  return (
    <label className="flex items-center gap-2 text-sm">
      <Checkbox checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
      {/* input real care ajunge în FormData */}
      <input
        type="checkbox"
        className="sr-only"
        name={name}
        value={value ?? "on"}
        checked={checked}
        onChange={() => {}}
      />
      <span>{label}</span>
    </label>
  )
}

// Select shadcn controlat + input hidden pentru FormData
function FormSelect({
  name,
  placeholder,
  children,
  defaultValue = "",
}: {
  name: string
  placeholder?: string
  children: React.ReactNode
  defaultValue?: string
}) {
  const [val, setVal] = useState(defaultValue)
  return (
    <>
      <Select value={val} onValueChange={setVal}>
        <SelectTrigger id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
      <input type="hidden" name={name} value={val} />
    </>
  )
}

/* ---------- componenta principală ---------- */

type OfferModalProps = { open: boolean; onOpenChange: (v: boolean) => void }

const WEBSITE_GOALS_KEYS = ["leads","ecom","brand","info","support"] as const
const WEBSITE_FEATURES_KEYS = ["blog","portfolio","form","booking","payments","ecommerce","multilang","gdpr","analytics"] as const
const BOT_CHANNEL_KEYS = ["site","whatsapp","facebook","telegram","viber"] as const
const BOT_ROLE_KEYS = ["sales","support","faq","booking"] as const
const AUTOMATION_KEYS = ["crm","qualify","notify","schedule","followup","newsletter","other"] as const

export default function OfferModal({ open, onOpenChange }: OfferModalProps) {
  const { t, locale } = useLocale() as any
  const L = t?.offer
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState<null | "ok" | "err">(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setSent(null)

    const fd = new FormData(e.currentTarget)
    // adăugăm și limba UI
    const uiLocale = String(locale || "ro")

    // construim payload-ul; colectăm explicit array-urile
    const getAll = (k: string) => fd.getAll(k).map(String).filter(Boolean)
    const payload: any = {
      uiLocale,
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      company: fd.get("company") || "",
      region: fd.get("region") || "",
      about: fd.get("about") || "",
      audience: fd.get("audience") || "",
      problems: fd.get("problems") || "",
      links: fd.get("links") || "",
      websiteGoals: getAll("websiteGoals"),
      kpi: fd.get("kpi") || "",
      features: getAll("features"),
      content: fd.get("content") || "",
      branding: fd.get("branding") || "",
      refs: fd.get("refs") || "",
      integrations: fd.get("integrations") || "",
      domain: fd.get("domain") || "",
      botChannels: getAll("botChannels"),
      botRole: getAll("botRole"),
      botLangs: fd.get("botLangs") || "",
      kb: fd.get("kb") || "",
      automations: getAll("automations"),
      other: fd.get("other") || "",
      deadline: fd.get("deadline") || "",
      budget: fd.get("budget") || "",
      notes: fd.get("notes") || "",
      gdpr: fd.get("gdpr") ? true : false,
    }

    const res = await fetch("/api/offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
            <p className="text-muted-foreground">
              {L?.successBody ?? "TINKA AI va analiza răspunsurile și revine în curând cu oferta. Ți-am trimis și un email de confirmare."}
            </p>
            <Button onClick={() => onOpenChange(false)} className="mt-2">
              {L?.close ?? "Închide"}
            </Button>
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
                      <FormCB key={k} name="websiteGoals" value={k} label={L?.options?.websiteGoals?.[k]} />
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
                      <FormCB key={k} name="features" value={k} label={L?.options?.features?.[k]} />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="content">{L?.fields?.content}</Label>
                    <FormSelect name="content" placeholder={L?.placeholders?.content}>
                      <SelectItem value="have">{L?.options?.content?.have}</SelectItem>
                      <SelectItem value="need">{L?.options?.content?.need}</SelectItem>
                    </FormSelect>
                  </div>
                  <div>
                    <Label htmlFor="branding">{L?.fields?.branding}</Label>
                    <FormSelect name="branding" placeholder={L?.placeholders?.branding}>
                      <SelectItem value="have">{L?.options?.branding?.have}</SelectItem>
                      <SelectItem value="need">{L?.options?.branding?.need}</SelectItem>
                    </FormSelect>
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
                  <FormSelect name="domain" placeholder={L?.placeholders?.domain}>
                    <SelectItem value="have">{L?.options?.domain?.have}</SelectItem>
                    <SelectItem value="need">{L?.options?.domain?.need}</SelectItem>
                  </FormSelect>
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
                      <FormCB key={k} name="botChannels" value={k} label={L?.options?.botChannels?.[k]} />
                    ))}
                  </div>
                </div>
                <div>
                  <Label>{L?.fields?.botRole}</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {BOT_ROLE_KEYS.map((k) => (
                      <FormCB key={k} name="botRole" value={k} label={L?.options?.botRole?.[k]} />
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
                      <FormCB key={k} name="automations" value={k} label={L?.options?.automations?.[k]} />
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
                  <FormSelect name="budget" placeholder={L?.placeholders?.budget}>
                    <SelectItem value="lt1k">{L?.options?.budget?.lt1k}</SelectItem>
                    <SelectItem value="1to5">{L?.options?.budget?.["1to5"]}</SelectItem>
                    <SelectItem value="5to10">{L?.options?.budget?.["5to10"]}</SelectItem>
                    <SelectItem value="gt10">{L?.options?.budget?.gt10}</SelectItem>
                  </FormSelect>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="notes">{L?.fields?.notes}</Label>
                  <Textarea id="notes" name="notes" rows={2} placeholder={L?.placeholders?.notes} />
                </div>
              </div>
              <FormCB name="gdpr" label={L?.fields?.gdpr ?? "Sunt de acord cu prelucrarea datelor."} defaultChecked={false} />
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
