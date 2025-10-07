// app/api/offer/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function listify(v: any) {
  if (v === undefined || v === null) return ""
  if (Array.isArray(v)) return v.join(", ")
  return String(v)
}

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      name, email, phone, company, region,
      about, audience, problems, links,
      websiteGoals, kpi,
      features, content, branding, refs, integrations, domain,
      botChannels, botRole, botLangs, kb,
      automations, other,
      deadline, budget, notes,
      uiLocale,
    } = data

    const toOwner = process.env.TO_EMAIL || process.env.SMTP_USER
    const brand = process.env.BRAND_NAME || "TINKA AI"
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    })

    const html = `
      <h2>Nouă solicitare ofertă – Pachet lansare rapidă</h2>
      <p><b>UI language:</b> ${uiLocale || "-"}</p>
      <h3>Contact</h3>
      <p><b>Nume:</b> ${name || "-"}<br/>
         <b>Email:</b> ${email}<br/>
         <b>Telefon:</b> ${phone || "-"}<br/>
         <b>Companie:</b> ${company || "-"}<br/>
         <b>Regiune:</b> ${region || "-"}</p>

      <h3>Afacere</h3>
      <p><b>Descriere:</b> ${about || "-"}<br/>
         <b>Public țintă:</b> ${audience || "-"}<br/>
         <b>Probleme:</b> ${problems || "-"}<br/>
         <b>Linkuri:</b> ${links || "-"}</p>

      <h3>Obiective & KPI</h3>
      <p><b>Scop website:</b> ${listify(websiteGoals)}<br/>
         <b>KPI:</b> ${kpi || "-"}</p>

      <h3>Website</h3>
      <p><b>Funcții:</b> ${listify(features)}<br/>
         <b>Conținut:</b> ${content || "-"}<br/>
         <b>Branding:</b> ${branding || "-"}<br/>
         <b>Referințe:</b> ${refs || "-"}<br/>
         <b>Integrări:</b> ${integrations || "-"}<br/>
         <b>Domeniu:</b> ${domain || "-"}</p>

      <h3>Chatbot</h3>
      <p><b>Canale:</b> ${listify(botChannels)}<br/>
         <b>Rol:</b> ${listify(botRole)}<br/>
         <b>Limbi:</b> ${botLangs || "-"}<br/>
         <b>Knowledge base:</b> ${kb || "-"}</p>

      <h3>Automatizări</h3>
      <p><b>Acțiuni:</b> ${listify(automations)}<br/>
         <b>Altele:</b> ${other || "-"}</p>

      <h3>Constrângeri</h3>
      <p><b>Deadline:</b> ${deadline || "-"}<br/>
         <b>Buget:</b> ${budget || "-"}<br/>
         <b>Note:</b> ${notes || "-"}</p>
    `

    // email către tine
    await transporter.sendMail({
      from: `"${brand} – Forms" <${process.env.SMTP_USER}>`,
      to: toOwner,
      subject: `Oferta ${brand}: ${company || name || email}`,
      html,
      replyTo: email, // ca să poți răspunde direct
    })

    // auto-răspuns către client
    await transporter.sendMail({
      from: `"${brand}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `${brand}: am primit solicitarea ta`,
      html: `
        <p>Bună${name ? `, ${name}` : ""}!</p>
        <p>Îți mulțumim pentru interesul în <b>Pachetul de lansare rapidă</b>. 
        Am primit detaliile și revenim cât de curând cu o propunere.</p>
        <p>Pe scurt, iată ce am primit:</p>
        ${html}
        <p>— Echipa ${brand}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
