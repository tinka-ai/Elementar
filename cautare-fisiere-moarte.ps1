# =============================================================================
# Elementar.md — curățare fișiere moarte + rute API neutralizate
# Rulează acest script DIN interiorul folderului "Elementar" al proiectului
# (folderul care conține package.json, app/, components/ etc.)
#
# Ce face:
#   1. Șterge fișierele de cod moarte (neimportate nicăieri, verificat prin
#      audit complet al repo-ului).
#   2. Șterge complet cele 5 fișiere de rută API deja neutralizate la 410 —
#      după ștergere, Next.js va răspunde natural cu 404 Not Found pe acele
#      adrese, fără nicio configurare suplimentară.
#   3. Șterge folderele rămase goale.
#
# Fiecare pas cere confirmare (Y/n) înainte de a șterge. Poți răspunde "a"
# (all) la primul prompt ca să confirmi tot dintr-o dată.
# =============================================================================

$ErrorActionPreference = "Stop"

# Verificare: rulăm din locul corect?
if (-not (Test-Path ".\package.json") -or -not (Test-Path ".\app")) {
    Write-Host "EROARE: rulează acest script din interiorul folderului 'Elementar' (unde e package.json)." -ForegroundColor Red
    exit 1
}

$filesToDelete = @(
    # --- Cod mort: analytics / consent (deja eliminate din layout.tsx) ---
    "components\cookie-consent.tsx",
    "components\analytics-loader.tsx",
    "components\ga-route-listener.tsx",

    # --- Cod mort: modal de ofertă (fără formular, deja neutilizat) ---
    "components\offer\OfferCta.tsx",
    "components\offer\OfferModal.tsx",
    "components\offer\OfferModalProvider.tsx",

    # --- Cod mort: upload / galerie dinamică ---
    "components\blob-upload.tsx",
    "components\gallery-client.tsx",

    # --- Cod mort: Server Actions de trimis email (Resend / EmailJS) ---
    "app\actions\send-email.ts",
    "app\actions\send-email-emailjs.ts",

    # --- Cod mort: layout client orfan + rută pages/ nefolosită de App Router ---
    "app\client-layout.tsx",
    "app\pages\index.tsx",

    # --- Legacy: endpoint PHP folosit de vechiul formular (nu mai e apelat) ---
    "send-email.php",

    # --- Rute API deja neutralizate (410) — se șterg complet -> devin 404 reale ---
    "app\api\offer\route.ts",
    "app\api\blob\upload\route.ts",
    "app\api\blob\list\route.ts",
    "app\api\send-contact-email\route.ts",
    "app\api\send-direct-email\route.ts"
)

Write-Host "Se vor șterge următoarele fișiere (dacă există):" -ForegroundColor Cyan
$filesToDelete | ForEach-Object { Write-Host "  - $_" }
Write-Host ""
$confirm = Read-Host "Continui cu ștergerea? (y/n)"
if ($confirm -notmatch '^[yYaA]') {
    Write-Host "Anulat. Nu s-a șters nimic." -ForegroundColor Yellow
    exit 0
}

$deleted = @()
$missing = @()

foreach ($f in $filesToDelete) {
    if (Test-Path $f) {
        Remove-Item $f -Force
        $deleted += $f
        Write-Host "Șters: $f" -ForegroundColor Green
    } else {
        $missing += $f
        Write-Host "Nu există (deja șters?): $f" -ForegroundColor DarkGray
    }
}

# Foldere care rămân goale după ștergerea fișierelor de mai sus — le eliminăm
# doar dacă sunt efectiv goale, ca să nu ștergem nimic neintenționat.
$foldersToPruneIfEmpty = @(
    "components\offer",
    "app\actions",
    "app\pages",
    "app\api\offer",
    "app\api\blob\upload",
    "app\api\blob\list",
    "app\api\blob",
    "app\api\send-contact-email",
    "app\api\send-direct-email"
)

foreach ($d in $foldersToPruneIfEmpty) {
    if (Test-Path $d) {
        $isEmpty = -not (Get-ChildItem $d -Force -ErrorAction SilentlyContinue | Select-Object -First 1)
        if ($isEmpty) {
            Remove-Item $d -Force -Recurse
            Write-Host "Folder gol eliminat: $d" -ForegroundColor Green
        } else {
            Write-Host "Folder NU e gol, nu-l șterg: $d" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "=== Rezumat ===" -ForegroundColor Cyan
Write-Host "Fișiere șterse: $($deleted.Count)"
Write-Host "Fișiere deja absente: $($missing.Count)"
Write-Host ""
Write-Host "Următorul pas: verifică 'git status' în GitHub Desktop, revizuiește" -ForegroundColor Cyan
Write-Host "ștergerile listate, apoi rulează 'npm run build' local pentru o" -ForegroundColor Cyan
Write-Host "verificare finală înainte de commit + push." -ForegroundColor Cyan