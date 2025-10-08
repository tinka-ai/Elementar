// components/offer/OfferCta.tsx
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { useOfferModal } from "@/components/offer/OfferModalProvider"

export default function OfferCTA({
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
    <Button
      onClick={open}
      aria-label={label}
      className={`group relative overflow-hidden ${base} ${className}
        transition-transform duration-150 active:scale-[0.97] active:translate-y-[1px]`}
    >
      <span className="pointer-events-none">{label}</span>
      <ArrowRight
        className="ml-2 h-4 w-4 transition-transform duration-150
                   group-hover:translate-x-1 group-active:translate-x-1"
      />
    </Button>
  )
}
