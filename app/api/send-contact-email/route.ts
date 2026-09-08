import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Elementar.md nu mai folosește un formular de contact pe site — contactul se
// face exclusiv prin link-uri mailto:/tel:, deschise direct în aplicația
// vizitatorului. Acest endpoint a rămas doar ca fișier (nu poate fi șters de
// aici) dar nu mai trimite niciun email — răspunde mereu 410 Gone.
// Poate fi șters manual din repo: app/api/send-contact-email/route.ts
export async function POST() {
  return NextResponse.json({ ok: false, error: "removed" }, { status: 410 })
}
