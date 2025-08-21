import { list } from "@vercel/blob"

export async function GET() {
  try {
    const res = await list()
    const items = res.blobs
      .filter((b) => b.pathname?.startsWith("gallery/"))
      .map((b) => ({
        url: b.url,
        pathname: b.pathname,
        downloadUrl: (b as any).downloadUrl, // expus de SDK conform documentației [^2]
        size: (b as any).size,
      }))

    return Response.json({ items })
  } catch (err: any) {
    return new Response(err?.message || "Eroare la listare.", { status: 500 })
  }
}
