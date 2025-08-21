"use client"

import { useEffect, useState } from "react"

type BlobItem = {
  url: string
  pathname: string
  downloadUrl?: string
  size?: number
}

export default function GalleryClient({ version = 0 }: { version?: number }) {
  const [items, setItems] = useState<BlobItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function load() {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch("/api/blob/list", { cache: "no-store" })
      if (!res.ok) throw new Error("Nu s-a putut încărca lista de imagini.")
      const data = (await res.json()) as { items: BlobItem[] }
      setItems(data.items)
    } catch (err: any) {
      setError(err.message || "Eroare la listarea imaginilor.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version])

  if (loading) {
    return <p className="mt-6 text-sm text-gray-400">Se încarcă galeria...</p>
  }
  if (error) {
    return <p className="mt-6 text-sm text-red-400">{error}</p>
  }
  if (!items.length) {
    return <p className="mt-6 text-sm text-gray-400">Încă nu există imagini încărcate.</p>
  }

  // static effects for images
  const fxStatic =
    "transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] rounded-xl"

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.pathname}
          className={`group relative overflow-hidden bg-white/5 border border-white/10 ${fxStatic}`}
        >
          <img
            src={it.url || "/placeholder.svg"}
            alt={`Imagine încărcată: ${it.pathname}`}
            width={520}
            height={340}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/50 px-3 py-2 text-xs text-gray-300 flex items-center justify-between">
            <span className="truncate">{it.pathname.replace(/^gallery\//, "")}</span>
            {it.downloadUrl ? (
              <a className="underline hover:text-white" href={it.downloadUrl}>
                descarcă
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}
