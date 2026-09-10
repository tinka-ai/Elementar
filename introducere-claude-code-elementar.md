# Introducere în proiectul Elementar.md — pentru Claude Code

Acest document e gândit ca briefing complet pentru Claude Code (instanța locală, cu acces la terminal și fișiere pe acest calculator), ca să poată prelua de aici înainte sarcinile de mentenanță/dezvoltare pe acest proiect, fără să mai treacă prin explicații repetate. Citește-l integral înainte de a face orice modificare.

---

## 1. Cine e clientul și ce e proiectul

- **Site**: [elementar.md](https://elementar.md) — parc de știință și curiozități în Chișinău, Republica Moldova.
- **Operator/client**: A.O. „Pro-Elementary" (organizație non-profit, Chișinău).
- **Agenția care dezvoltă/mentine site-ul**: TINKA AI.
- **Stack tehnic**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4, găzduit pe **Netlify** cu deploy automat din GitHub.
- **Repo**: `github.com/tinka-ai/Elementar`, branch de producție `main`. Orice push pe `main` declanșează automat un build + deploy pe Netlify (comandă build: `npm run build`, publish dir: `.next`, plugin `@netlify/plugin-nextjs`).
- **Locația locală a proiectului**: `D:\TINKA\WEBSITE\Elementar` (pe acest calculator).
- **Workflow de deploy**: editare locală → `npm run build` (verificare) → commit + push în `main` din GitHub Desktop (sau `git` direct) → Netlify preia automat și publică.

## 2. De ce s-au făcut modificările recente — contextul legal

Site-ul trece printr-o restructurare de conformitate cu protecția datelor cu caracter personal, cerută explicit de client (probabil cu suport juridic/GDPR extern). Motivul: Republica Moldova a adoptat **Legea nr. 195/2024 privind protecția datelor cu caracter personal** (intrată în vigoare 23 august 2026), modelată puternic după GDPR. Autoritatea de supraveghere: **CNPDCP** (Centrul Național pentru Protecția Datelor cu Caracter Personal, datepersonale.md).

Clientul a decis o arhitectură **minimalistă din proprie inițiativă**: nu doar conformitate minimă, ci eliminarea completă a oricărei colectări active de date prin website, ca să reducă riscul și obligațiile la maximum posibil pentru acest tip de site (informațional, fără nevoie reală de formular/analytics).

### Arhitectura de conformitate — regulile care guvernează orice modificare viitoare

Aceste decizii sunt **stabilite de client** și nu se schimbă din inițiativă proprie a programatorului/AI-ului. Orice funcționalitate nouă trebuie verificată față de această listă înainte de a fi adăugată:

- **Fără formular de contact** pe site — contactul se face exclusiv prin:
  - Email — buton cu link `mailto:office@elementar.md` (deschide clientul de email al vizitatorului, site-ul nu trimite nimic singur)
  - Telefon — buton cu link `tel:+37379010277` (deschide apelarea pe dispozitiv)
- **Fără Google Analytics, Meta Pixel, TikTok Pixel, Hotjar, Clarity** sau orice alt instrument de analiză/tracking/marketing.
- **Google Maps / Waze — doar linkuri externe**, niciodată hartă încorporată (`<iframe>`) și niciodată `navigator.geolocation`. Utilizatorul e dus pe site-ul extern doar dacă apasă explicit butonul.
- **Fără conturi de utilizator, newsletter, upload de fișiere, rezervare online.**
- **Fără colectarea datelor copiilor** prin site (pentru vizite de grup/excursii școlare se aplică minimizarea: doar persoană de contact + număr aproximativ de participanți, niciodată liste nominale/IDNP/date de naștere).
- **Ideal, fără cookies sau browser storage persistent.** Codul propriu nu setează cookie-uri. `localStorage` a fost eliminat complet (vezi secțiunea 3).
- **Imagini doar generate cu AI** (galeria) — nu fotografii reale ale vizitatorilor, până când clientul decide altfel (caz în care ar necesita consimțământ explicit, cu atenție suplimentară dacă apar copii în cadru).
- **Politica de Confidențialitate — textul juridic e furnizat de client/consultant juridic extern.** Programatorul/AI-ul **nu rescrie conținutul juridic din proprie inițiativă** — poate face doar corecturi tehnice/factuale (ex: număr de telefon greșit) sau poate semnala informații învechite, dar textul de fond vine de la client.
- Numărul de telefon unificat pe tot site-ul: **+373 79 010 277** (format `tel:+37379010277` pentru linkuri). Sursa de adevăr e `lib/entity.ts` (obiectul `ELEMENTAR`, folosit și de `lib/schema.ts` pentru JSON-LD).

## 3. Ce s-a făcut deja (istoric, cronologic pe scurt)

Lucrul a fost făcut inițial printr-o sesiune Claude (Cowork, cloud) fără acces direct la terminal pe acest calculator — de-a lungul mai multor runde:

1. **Eliminarea formularului de contact** din `app/contact/page.tsx` — înlocuit cu butoane `mailto:`/`tel:` și linkuri externe Maps/Waze (fără `<iframe>` încorporat).
2. **Eliminarea Google Analytics** din `app/layout.tsx` (script-uri GA, `GaRouteListener`, `AnalyticsLoader`, `CookieConsentBanner`).
3. **Neutralizarea și apoi ștergerea completă** a 5 rute API care erau live-reachable deși UI-ul lor era mort: `/api/offer`, `/api/blob/upload`, `/api/blob/list`, `/api/send-contact-email`, `/api/send-direct-email`. Erau întâi transformate în stub-uri 410, apoi șterse complet — acum răspund cu 404 real (nu mai există fișierele de rută).
4. **Ștergerea codului mort** neimportat nicăieri: `components/cookie-consent.tsx`, `analytics-loader.tsx`, `ga-route-listener.tsx`, `components/offer/*` (OfferCta, OfferModal, OfferModalProvider), `components/blob-upload.tsx`, `components/gallery-client.tsx`, `app/actions/send-email.ts`, `app/actions/send-email-emailjs.ts`, `app/client-layout.tsx` (orfan), `app/pages/index.tsx` (rută moartă, nume greșit pentru App Router), `send-email.php` (endpoint legacy la rădăcină).
5. **Eliminarea completă a `localStorage`**:
   - `components/language-provider.tsx` — nu mai persistă limba (`elementar-locale`); site-ul rămâne mereu "ro" (nu există comutator de limbă vizibil oricum).
   - `app/layout.tsx` — `ThemeProvider` schimbat din `defaultTheme="dark" enableSystem` (scria `localStorage["theme"]`) în `forcedTheme="dark"` (fixează tema, fără storage). Comportamentul vizual e identic (site-ul era deja mereu dark).
6. **Curățarea `package.json`**: eliminat `resend`, `@vercel/blob`, `@react-email/render`, `nodemailer` — nemaifiind folosite după ștergerea rutelor API. Lockfile regenerat.
7. **Security headers** adăugate în `netlify.toml` (bloc `[[headers]]` pentru `/*`): `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security` (HSTS), `Permissions-Policy: geolocation=(), camera=(), microphone=()`, `Content-Security-Policy` restrictivă (`default-src 'self'`, `frame-src 'none'`, `object-src 'none'`).
8. **Rescrierea Politicii de Confidențialitate** (`app/politica-de-confidentialitate/page.tsx`) cu textul juridic final furnizat de client (10 septembrie 2026) — 11 secțiuni: operator identificat (A.O. „Pro-Elementary"), cum funcționează site-ul, contactarea directă ca prelucrare separată, ce nu se folosește, cookies/storage, fotografii AI, date tehnice de găzduire (Netlify), păstrarea datelor, destinatari, drepturile persoanei vizate (Legea 195/2024), modificări viitoare ale politicii. **Nu conține o perioadă exactă de retenție pentru logurile Netlify** — intenționat, până se obține documentație reală de la Netlify (nu se inventează cifre).
9. **Build de producție confirmat curat** — 17 rute, toate statice, zero rute `/api/*`, fără erori.
10. Commit + push pe `main` efectuat — deploy automat pe Netlify declanșat.

## 4. Ce rămâne de făcut (nefinalizat la data acestui document — 10 septembrie 2026)

Astea necesită acces la dashboard-uri externe (Netlify, Vercel, Resend) cu login-ul clientului — Claude Code, rulând local, **tot nu are acces automat la aceste dashboard-uri web** (nu e o limitare de sandbox, e pur și simplu că sunt interfețe web cu autentificare) — dar poate ajuta utilizatorul să navigheze acolo dacă are un instrument de browser automation, sau poate măcar pregăti liste/checklist-uri și verifica local codul care le corespunde:

1. **Variabile de mediu vechi în Netlify** (Site configuration → Environment variables) — de șters: `RESEND_API_KEY`, `BLOB_READ_WRITE_TOKEN`, `SMTP_HOST/PORT/USER/PASS`, `TO_EMAIL`/`TO_OWNER`/`CONTACT_TO_EMAIL`/`MAIL_TO`, `GMAIL_APP_PASSWORD`, `BRAND_NAME`, orice ID GA/Meta/TikTok. Dacă vreo cheie a fost expusă public vreodată (folosită de un endpoint care răspundea public), trebuie **revocată/regenerată la furnizor**, nu doar ștearsă din Netlify.
2. **Vercel Blob** — verificare cont Vercel pentru fișiere istorice încărcate în bucket; dacă există, șterse; tokenul revocat.
3. **Resend** — verificare cont pentru emailuri trimise istoric prin API key-ul folosit; dacă nu mai e folosit, revocat.
4. **Netlify Forms** — verificare/dezactivare "Form detection" (Site configuration → Forms). Codul nu are niciun `<form>`, dar Netlify poate detecta automat la build.
5. **Netlify Web Analytics / RUM** — verificare că sunt dezactivate (Site configuration → Analytics). Serviciu server-side, independent de cod.
6. **Deploy Previews** — confirmate ACTIVE la ultima verificare (pentru orice PR către `main`). Recomandare: dezactivare completă din Site configuration → Build & deploy → Deploy contexts, dacă fluxul de lucru nu folosește Pull Requests (pare că nu).
7. **Deploy log visibility** — confirmat "Logs are public" la ultima verificare. Recomandare: schimbat pe "Logs are private", dacă planul Netlify permite.
8. **Netlify Identity / Functions / Edge Functions / Integrations** — de verificat că nu există nimic activ în afara funcției standard generate de `@netlify/plugin-nextjs`.
9. **Test live în incognito, după fiecare deploy relevant**:
   - DevTools → Network: fără cereri către `google-analytics.com`, `googletagmanager.com`, `facebook.net`, `tiktok.com`, `hotjar.com`, `clarity.ms`, Vercel Blob, Resend.
   - Maps/Waze: nicio cerere până nu se apasă explicit butonul.
   - DevTools → Application → Cookies: gol (sau doar cookie-uri tehnice Netlify CDN).
   - DevTools → Application → Local Storage: ideal gol.
   - Nicio solicitare de permisiune locație/cameră/microfon.
10. După ce toate cele de mai sus sunt confirmate, se poate transmite propoziția finală de confirmare tehnică (deja formulată de client):
    > „Versiunea publicată a Elementar.md nu conține formulare, mecanisme de upload, analytics, tracking, profilare sau colectare de geolocație și nu solicită activ date cu caracter personal prin interfața website-ului. Au rămas numai prelucrările tehnice inevitabile ale infrastructurii de hosting descrise separat."
11. După confirmarea tehnică finală, proiectul trece la **ROPA Elementar** (Registrul activităților de prelucrare) — document separat, de completat cu clientul.

## 5. Convenții tehnice de reținut

- **Fișierul sursă de adevăr pentru datele de contact**: `lib/entity.ts` (obiectul `ELEMENTAR`) — folosit și de `lib/schema.ts` pentru JSON-LD (Organization/LocalBusiness). Orice modificare de telefon/email/adresă se face acolo, nu izolat prin pagini individuale.
- **Rutele App Router necesită exact numele `page.tsx`** — un fișier greșit numit (ex. `app/pages/index.tsx`) nu se servește niciodată; a fost motivul pentru care acel fișier era mort.
- **Server Actions (`"use server"`) fără niciun importator nu au URL public fix** și devin inerte automat odată neimportate — spre deosebire de **API Routes (`route.ts`)**, care au mereu URL fix, reachable indiferent dacă UI-ul le mai apelează — de-asta rutele API au necesitat ștergere explicită, nu doar eliminarea UI-ului.
- **`next/font/google` (fontul Inter)** — auto-hostat la runtime (fără cereri către Google din browserul vizitatorilor), dar **build-ul** are nevoie de o cerere de rețea către `fonts.googleapis.com` pentru a descărca fontul o singură dată, la compilare. Pe acest calculator (mediu normal, cu internet) asta funcționează fără probleme.
- **`next-themes` cu `forcedTheme="dark"`** — nu mai citește/scrie `localStorage`, dar tot aplică `class="dark"` pe `<html>`, esențial pentru stilurile Tailwind (`@custom-variant dark` + `.dark {}` din `app/globals.css`). Nu elimina `ThemeProvider` complet — ar rupe dark mode-ul.
- **Verificare rapidă de sănătate a codului** înainte de commit: `npm run build` trebuie să treacă fără erori, cu **zero rute `/api/*`** în output și fără referințe reziduale la `resend`/`@vercel/blob`/`nodemailer` în `package.json`.
- **`next.config.mjs`** are `typescript: { ignoreBuildErrors: true }` și `eslint: { ignoreDuringBuilds: true }` — există erori TypeScript preexistente (necorelate cu munca de conformitate) care nu blochează build-ul; nu e nevoie să fie rezolvate ca parte a acestei lucrări, dar merită cunoscute dacă se lucrează la alte funcționalități.

## 6. Reguli de conduită pentru orice lucru viitor pe acest proiect

1. **Nu adăuga niciodată** analytics, pixeli, formulare de colectare, conturi, cookie-uri de tracking, geolocație sau upload, fără o discuție explicită cu clientul — arhitectura minimalistă e o decizie deliberată, nu un accident de a fi „încă neterminată".
2. **Nu rescrie textul juridic** al Politicii de Confidențialitate din proprie inițiativă — doar corecturi factuale/tehnice, sau semnalează ce pare învechit.
3. **Rulează întotdeauna `npm run build` local înainte de push** — e verificarea reală, cea din sandbox-ul Claude anterior a fost adesea blocată de restricții de rețea proprii mediului cloud, deci acest calculator e locul unde verificarea contează cu adevărat.
4. **Verifică `git status`/tab-ul Changes înainte de commit** — s-a întâmplat cel puțin o dată ca modificări să fie deja commise local fără să fi fost împinse (push); verifică tab-ul History pentru commit-uri „ahead of origin" înainte să presupui că nu s-a întâmplat nimic.
5. Pentru orice fișier șters sau adăugat, verifică din nou lista de reguli din secțiunea 2 — dacă o funcționalitate nouă ar reintroduce colectare de date, semnalează asta explicit înainte de a o implementa.

---

*Document generat de Claude (Cowork) pe 10 septembrie 2026, ca predare de context către Claude Code pentru continuarea lucrului pe acest proiect direct pe acest calculator.*
