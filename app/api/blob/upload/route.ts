import { put } from "@vercel/blob"

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const file = form.get("file") as File | null
    if (!file) {
      return new Response("Lipsește fișierul.", { status: 400 })
    }

    const name = file.name?.replace(/\s+/g, "-").toLowerCase() || "image"
    const pathname = `gallery/${Date.now()}-${name}`

    const blob = await put(pathname, file, {
      access: "public",
      contentType: file.type || "application/octet-stream",
      addRandomSuffix: true, // evită probleme de cache la actualizări [^2]
      cacheControlMaxAge: 60 * 60 * 24 * 30, // ~30 zile [^2]
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })

    return Response.json({
      url: blob.url,
      pathname: blob.pathname,
      // downloadUrl may be present on blob depending on SDK version; omitted to avoid coupling.
    })
  } catch (err: any) {
    return new Response(err?.message || "Eroare internă la upload.", { status: 500 })
  }
}
