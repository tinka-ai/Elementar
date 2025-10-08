"use client"

import { createContext, useCallback, useContext, useState } from "react"
import OfferModal from "./OfferModal"

type Ctx = { open: () => void; close: () => void; isOpen: boolean }
const OfferModalCtx = createContext<Ctx | null>(null)

export function OfferModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <OfferModalCtx.Provider value={{ open, close, isOpen }}>
      {children}
      {/* modalul e montat o singură dată la rădăcină */}
      <OfferModal open={isOpen} onOpenChange={setIsOpen} />
    </OfferModalCtx.Provider>
  )
}

export function useOfferModal() {
  const ctx = useContext(OfferModalCtx)
  if (!ctx) throw new Error("useOfferModal must be used within OfferModalProvider")
  return ctx
}
