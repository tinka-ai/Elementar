// lib/schema-page.ts
import { ELEMENTAR } from "./entity"
import { getElementarJsonLd } from "./schema"

function absUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return undefined
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${ELEMENTAR.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export function getGuideJsonLd(params: {
  slug: string
  title: string
  description: string
  imagePath: string
}) {
  const orgId = `${ELEMENTAR.url}/#organization`
  const url = `${ELEMENTAR.url}/${params.slug}`
  const image = absUrl(params.imagePath)

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: params.title,
    description: params.description,
    inLanguage: "ro-MD",
    primaryImageOfPage: image
      ? { "@type": "ImageObject", url: image }
      : undefined,
    publisher: { "@id": orgId },
    isPartOf: { "@id": orgId }, // opțional, dar util semantic
  }
}
