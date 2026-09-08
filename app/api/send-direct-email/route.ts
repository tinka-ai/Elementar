import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Elementar.md nu mai folosește un formular/endpoint de trimis email — emailul
// se trimite exclusiv prin link-uri mailto:, deschise direct în aplicația
// vizitatorului. Acest endpoint a rămas doar ca fișier (nu poate fi șters de
// aici) dar nu mai trimite niciun email — răspunde mereu 410 Gone.
// Poate fi șters manual din repo: app/api/send-direct-email/route.ts
export async function POST() {
  return NextResponse.json({ success: false, error: "removed" }, { status: 410 })
}
