"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const visitType = formData.get("visitType") as string
    const groupSize = formData.get("groupSize") as string
    const preferredDate = formData.get("preferredDate") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !message) {
      return { success: false, error: "Câmpurile obligatorii nu sunt completate." }
    }

    // Create email content
    const emailContent = `
      <h2>Mesaj nou de pe site-ul ELEMENTAR</h2>
      
      <h3>Informații de contact:</h3>
      <p><strong>Nume:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
      
      <h3>Detalii vizită:</h3>
      ${visitType ? `<p><strong>Tipul vizitei:</strong> ${visitType}</p>` : ""}
      ${groupSize ? `<p><strong>Numărul de persoane:</strong> ${groupSize}</p>` : ""}
      ${preferredDate ? `<p><strong>Data preferată:</strong> ${preferredDate}</p>` : ""}
      
      <h3>Mesaj:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
      
      <hr>
      <p><small>Acest mesaj a fost trimis prin formularul de contact de pe site-ul ELEMENTAR.</small></p>
    `

    // Send email
    const { data, error } = await resend.emails.send({
      from: "ELEMENTAR Contact <noreply@elementar.md>",
      to: ["office@elementar.md"],
      subject: `Mesaj nou de la ${name} - ${visitType || "Contact general"}`,
      html: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error("Email sending error:", error)
      return { success: false, error: "Eroare la trimiterea emailului. Vă rugăm să încercați din nou." }
    }

    return { success: true, message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând." }
  } catch (error) {
    console.error("Server action error:", error)
    return { success: false, error: "Eroare internă. Vă rugăm să încercați din nou mai târziu." }
  }
}
