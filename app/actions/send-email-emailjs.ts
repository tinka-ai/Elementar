"use server"

// Alternative solution using a simple fetch to a PHP endpoint
export async function sendContactEmailPHP(formData: FormData) {
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

    // Send to PHP endpoint
    const response = await fetch("https://elementar.md/wp-content/themes/elementar/send-email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        visitType,
        groupSize,
        preferredDate,
        message,
      }),
    })

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const result = await response.json()

    if (result.success) {
      return { success: true, message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând." }
    } else {
      return { success: false, error: result.error || "Eroare la trimiterea emailului." }
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, error: "Eroare la trimiterea emailului. Vă rugăm să încercați din nou." }
  }
}
