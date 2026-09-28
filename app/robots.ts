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
      // Crawlere folosite de motoarele de raspuns/AI ca sa citeze/recomande
      // pagini in rezultate conversationale. Wildcard-ul de mai sus le permite
      // deja pe toate — intrarile explicite doar documenteaza intentia si
      // previn un blocaj accidental viitor daca cineva restrange wildcard-ul.
      { userAgent: "OAI-SearchBot", allow: "/" }, // citari in ChatGPT Search
      { userAgent: "ChatGPT-User", allow: "/" }, // vizite declansate de un utilizator ChatGPT
      { userAgent: "GPTBot", allow: "/" }, // antrenare modele OpenAI
      { userAgent: "PerplexityBot", allow: "/" }, // crawling/citari Perplexity
      { userAgent: "Perplexity-User", allow: "/" }, // vizite declansate de un utilizator Perplexity
      { userAgent: "ClaudeBot", allow: "/" }, // antrenare Claude (Anthropic)
      { userAgent: "Claude-User", allow: "/" }, // vizite declansate de un utilizator Claude
      { userAgent: "Claude-SearchBot", allow: "/" }, // citari in Claude cu web search
      { userAgent: "Google-Extended", allow: "/" }, // AI Overviews / Gemini (separat de Googlebot)
    ],
    sitemap: `${ELEMENTAR.url}/sitemap.xml`,
    host: ELEMENTAR.url,
  }
}
