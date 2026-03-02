// app/not-found.tsx
import { Suspense } from "react"
import NotFoundClient from "./not-found-client"

export default function NotFound() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 py-12 text-gray-300">Se încarcă…</div>}>
      <NotFoundClient />
    </Suspense>
  )
}
