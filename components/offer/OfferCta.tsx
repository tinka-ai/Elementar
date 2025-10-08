// components/offer/OfferCta.tsx
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { useOfferModal } from "@/components/offer/OfferModalProvider"

export default function OfferCta({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "ghost"
  className?: string
}) {
  const { t } = useLocale() as any
  const { open } = useOfferModal()
  const label = t?.offer?.cta ?? "Solicită ofertă"

  const base =
    variant === "primary"
      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
      : "bg-transparent text-foreground hover:bg-muted/40"

  return (
    <Button onClick={open} className={`${base} ${className}`} aria-label={label}>
      {label}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
