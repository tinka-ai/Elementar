// components/offer/OfferCta.tsx
"use client"

import { useState } from "react"
import OfferModal from "./OfferModal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

export default function OfferCta({ variant = "primary" }: { variant?: "primary" | "ghost" }) {
  const [open, setOpen] = useState(false)
  const { t } = useLocale() as any
  const label = t?.offer?.cta ?? "Solicită ofertă"
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={variant === "primary" ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}
      >
        {label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <OfferModal open={open} onOpenChange={setOpen} />
    </>
  )
}
