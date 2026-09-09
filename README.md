# vibesacadamypath-admissions-site (Demo)

This repo contains a demo landing page built from the user's specification: a conversion-optimized education/admissions site. It includes:

- `index.html` — production-ready static landing page (demo values, Calendly booking flow wired)
- `vite-react/` — a minimal Vite React starter (instructions included)
- `nextjs/` — a minimal Next.js page example (instructions included)
- `assets/` — placeholder asset filenames and specs

Notes:
- This is a demo. Replace the demo Calendly link, emails, trust numbers, logos, and analytics before going live.
- Primary CTA across the site: "Book Your Free Strategy Call" links to demo Calendly.
- The in-page lead form opens the Calendly booking page and shows a demo success message.

How to preview the static site locally:

1. Open `index.html` in a browser (drag into browser or use a simple static server):
   - Python: `python -m http.server 8000` and open http://localhost:8000

Vite React quick start (optional):

1. `cd vite-react`
2. `npm install`
3. `npm run dev`

Next.js quick start (optional):

1. `cd nextjs`
2. `npm install`
3. `npm run dev`

Deploy:
- Netlify/Vercel/Cloudflare Pages support static `index.html` or full framework deployments.

TODO before production:
- Replace Calendly/demo behavior with your booking or lead-capture endpoint.
- Insert Google Analytics or GTM snippet.
- Replace placeholder images in `assets/` with your real logo, hero image, and headshots.
- Update pricing, partner logos, and testimonials with verified real data.
