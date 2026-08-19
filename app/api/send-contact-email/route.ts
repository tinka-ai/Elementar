import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs" // necesar pentru nodemailer
export const dynamic = "force-dynamic"

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const message = String(body?.message || "").trim()
    const contactInfo = String(body?.contactInfo || "").trim()

    if (!message || message.length < 5) {
      return NextResponse.json({ ok: false, error: "missing-message" }, { status: 400 })
    }

    // Config SMTP — aceleași variabile de mediu ca la /api/offer, ca să funcționeze
    // imediat dacă sunt deja setate în Netlify (Site settings → Environment variables).
    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com"
    const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
    const SMTP_USER = process.env.SMTP_USER || process.env.MAIL_TO
    const SMTP_PASS = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("Lipsesc variabilele SMTP_USER / SMTP_PASS (sau MAIL_TO / GMAIL_APP_PASSWORD).")
      return NextResponse.json({ ok: false, error: "smtp-misconfigured" }, { status: 500 })
    }

    // Adresa care primește mesajele de pe formularul de contact ELEMENTAR.
    // Poate fi suprascrisă cu variabila de mediu CONTACT_TO_EMAIL în Netlify.
    const TO_OWNER = process.env.CONTACT_TO_EMAIL || "office@elementar.md"

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const html = `
      <h2>Mesaj nou de pe site-ul ELEMENTAR</h2>
      <p><strong>Mesaj:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      <p><strong>Modalitate de contact indicată de vizitator:</strong><br/>
      ${contactInfo ? escapeHtml(contactInfo) : "Nu a fost oferită."}</p>
      <hr/>
      <p style="color:#888;font-size:12px">Trimis automat prin formularul de contact de pe elementar.md.</p>
    `

    await transporter.sendMail({
      from: `"ELEMENTAR – Formular contact" <${SMTP_USER}>`,
      to: TO_OWNER,
      subject: "Mesaj nou de pe site-ul ELEMENTAR",
      html,
      // dacă vizitatorul a lăsat un email valid în câmpul liber, îl punem pe Reply-To
      ...(contactInfo && /\S+@\S+\.\S+/.test(contactInfo)
        ? { replyTo: contactInfo.match(/\S+@\S+\.\S+/)?.[0] }
        : {}),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Eroare la trimiterea emailului de contact:", err)
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 500 })
  }
}
