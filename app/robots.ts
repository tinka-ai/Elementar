import type { MetadataRoute } from "next"
import { ELEMENTAR } from "@/lib/entity"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${ELEMENTAR.url}/sitemap.xml`,
    host: ELEMENTAR.url,
  }
}
