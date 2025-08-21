"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function BlobUpload({
  onUploaded,
  helperText = "",
}: {
  onUploaded?: () => void
  helperText?: string
}) {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const MAX_SERVER_UPLOAD = 4.5 * 1024 * 1024 // ~4.5 MB

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!file) {
      setError("Selectează o imagine.")
      return
    }
    if (file.size > MAX_SERVER_UPLOAD) {
      setError(
        "Fișier prea mare pentru upload via server (~4.5 MB). Folosește o imagine mai mică sau un flux de upload direct din client.",
      )
      return
    }

    try {
      setUploading(true)
      const fd = new FormData()
      fd.append("file", file)
      const res = await fetch("/api/blob/upload", {
        method: "POST",
        body: fd,
      })
      if (!res.ok) {
        const msg = await res.text()
        throw new Error(msg || "Eroare la upload.")
      }
      await res.json()
      setFile(null)
      if (onUploaded) onUploaded()
    } catch (err: any) {
      setError(err.message || "Eroare la upload.")
    } finally {
      setUploading(false)
    }
  }

  const fx =
    "transition-transform duration-300 ease-out will-change-transform hover:scale-[1.04] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_28px_6px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 rounded-md"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-start sm:items-end gap-3">
      <div className={fx}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          aria-label="Selectează o imagine pentru upload"
          className="block w-full text-sm text-gray-300 file:mr-4 file:rounded-md file:border file:border-white/10 file:bg-white/5 file:px-3 file:py-2 file:text-gray-200 hover:file:bg-white/10"
        />
        <p className="mt-1 text-xs text-gray-400">{helperText}</p>
        {file ? (
          <p className="mt-1 text-xs text-gray-400">
            Selectat: {file.name} ({Math.round(file.size / 1024)} KB)
          </p>
        ) : null}
        {error ? <p className="mt-1 text-xs text-red-400">{error}</p> : null}
      </div>
      <Button type="submit" disabled={!file || isUploading} className={`bg-sky-500 text-white hover:bg-sky-400 ${fx}`}>
        {isUploading ? "Se încarcă..." : "Încarcă în galerie"}
      </Button>
    </form>
  )
}
