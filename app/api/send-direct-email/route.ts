import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs" // necesar pentru nodemailer
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message } = await request.json()

    if (!to) {
      return NextResponse.json({ success: false, error: "missing-to" }, { status: 400 })
    }

    // Aceleași variabile de mediu ca la /api/offer și /api/send-contact-email,
    // ca să funcționeze imediat dacă sunt deja setate în Netlify.
    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com"
    const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
    const SMTP_USER = process.env.SMTP_USER || process.env.MAIL_TO
    const SMTP_PASS = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("Lipsesc variabilele SMTP_USER / SMTP_PASS (sau MAIL_TO / GMAIL_APP_PASSWORD).")
      return NextResponse.json({ success: false, error: "smtp-misconfigured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"ELEMENTAR – Contact direct" <${SMTP_USER}>`,
      to: String(to),
      subject: String(subject || "Contact direct de pe site"),
      html: `<p>${String(message || "").replace(/\n/g, "<br/>")}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error: "send-failed" }, { status: 500 })
  }
}
