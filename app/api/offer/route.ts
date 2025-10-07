import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"  // asigură Node runtime (necesar pt nodemailer)
export const dynamic = "force-dynamic"

function listify(v: any) {
  if (v === undefined || v === null) return ""
  return Array.isArray(v) ? v.join(", ") : String(v)
}

function normalizeBody(obj: Record<string, any>) {
  // aplatizează valori de tip File / Blob și curăță spații
  const out: Record<string, any> = {}
  for (const [k, v] of Object.entries(obj)) {
    if (v instanceof File || v instanceof Blob) continue
    out[k] = typeof v === "string" ? v.trim() : v
  }
  return out
}

function fromFormData(fd: FormData) {
  const obj: Record<string, any> = {}
  fd.forEach((v, k) => {
    if (obj[k] !== undefined) {
      obj[k] = Array.isArray(obj[k]) ? [...obj[k], String(v)] : [obj[k], String(v)]
    } else {
      obj[k] = String(v)
    }
  })
  return obj
}

function toHTMLTable(obj: Record<string, any>) {
  const entries = Object.entries(obj)
    .filter(([k]) => k !== "agree") // excludem checkbox-ul GDPR dacă există
    .map(([k, v]) => {
      return `<tr>
        <td style="padding:6px 10px;border-bottom:1px solid #eee;"><b>${k}</b></td>
        <td style="padding:6px 10px;border-bottom:1px solid #eee;">${listify(v) || "-"}</td>
      </tr>`
    })
    .join("")
  return `<table style="border-collapse:collapse;width:100%;font-family:Inter,Arial">${entries}</table>`
}

export async function POST(req: Request) {
  try {
    // 1) Citim payload-ul indiferent dacă e JSON sau FormData
    const ctype = req.headers.get("content-type") || ""
    let data: Record<string, any> = {}
    if (ctype.includes("application/json")) {
      data = normalizeBody(await req.json())
    } else {
      data = normalizeBody(fromFormData(await req.formData()))
    }

    const brand = process.env.BRAND_NAME || "TINKA AI"

    // câmpuri utile pentru subiect / reply-to
    const clientEmail = String(data.email || "")
    const who = data.company || data.name || clientEmail || "Ofertă nouă"

    if (!clientEmail) {
      return NextResponse.json({ ok: false, error: "no-email" }, { status: 400 })
    }

    // 2) Config SMTP (Gmail implicit). Poți folosi și alt provider via env.
    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com"
    const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
    const SMTP_USER = process.env.SMTP_USER || process.env.MAIL_TO // fallback pe MAIL_TO
    const SMTP_PASS = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("Lipsesc variabilele SMTP_USER / SMTP_PASS (sau MAIL_TO / GMAIL_APP_PASSWORD).")
      return NextResponse.json({ ok: false, error: "smtp-misconfigured" }, { status: 500 })
    }

    const TO_OWNER = process.env.TO_EMAIL || SMTP_USER

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true pt 465, false pt 587
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    // 3) HTML pentru e-mailuri
    const summaryTable = toHTMLTable(data)

    const ownerHTML = `
      <h2>Nouă solicitare de ofertă — ${brand}</h2>
      ${summaryTable}
    `

    const clientHTML = `
      <p>Bună${data.name ? `, ${data.name}` : ""}!</p>
      <p>Îți mulțumim pentru interesul în <b>${brand}</b>. Am primit detaliile tale și revenim cât mai curând cu o propunere.</p>
      <p><b>Rezumatul trimis</b>:</p>
      ${summaryTable}
      <p>— Echipa ${brand}</p>
    `

    // 4) Email către tine
    await transporter.sendMail({
      from: `"${brand} – Forms" <${SMTP_USER}>`,
      to: TO_OWNER,
      subject: `Ofertă ${brand}: ${who}`,
      html: ownerHTML,
      replyTo: clientEmail,
    })

    // 5) Confirmare către client
    await transporter.sendMail({
      from: `"${brand}" <${SMTP_USER}>`,
      to: clientEmail,
      subject: `${brand}: am primit solicitarea ta`,
      html: clientHTML,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
