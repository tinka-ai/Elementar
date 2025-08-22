Netlify deploy (Next.js App Router, RSC support)
================================================

1) In Netlify → Site settings → Build & deploy:
   • Build command: npm run build
   • Publish directory: .next

2) In your repo, ensure you have:
   • netlify.toml (this file configures the Next.js plugin)
   • package.json with a "build": "next build" script

3) Install the plugin in your project (optional but recommended to pin locally):
   npm install -D @netlify/plugin-nextjs

4) Trigger a new deploy in Netlify. The plugin will handle routes like /en and RSC assets.

5) The Web App Manifest is served from /public/site.webmanifest and linked in app/layout.tsx.
