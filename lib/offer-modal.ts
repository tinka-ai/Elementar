// apel: openOfferModal() din orice componentă (ex: butonul „Solicită ofertă”)
export function openOfferModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-offer-modal"))
  }
}
