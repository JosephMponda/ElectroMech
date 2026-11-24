# ElectroMech Website Guide

## Project

- This repository is a static-export Next.js site for ElectroMech Solutions Limited.
- The production artifact is `out/`, generated with `npm run build`. It is suitable for ordinary static hosting.
- The initial redesign was committed and pushed as `58aa4cb` (`Build ElectroMech consulting website`).

## Architecture

- App Router pages are in `app/`; shared presentation components are in `components/`.
- `lib/site-data.js` is the single source for services, generated service-page content, company-profile URL, and starter insight cards. Edit it before duplicating service copy across pages.
- `app/services/[slug]/page.jsx` statically generates every service route from that data.
- `next.config.mjs` uses `output: 'export'`; do not introduce server-only features, image optimisation, API routes, or middleware without changing the deployment model.
- The contact form intentionally validates and displays a client-side confirmation only. Connect a chosen form provider, email workflow, CRM, or serverless endpoint before launch.

## Verified Brand Evidence

- Live source checked: `https://electromechmw.com/`.
- Company-uploaded header logo source: `https://electromechmw.com/wp-content/uploads/2025/08/PHOTO-2025-08-29-10-25-37.jpg`. A local, 18 KB copy is stored at `public/electromech-logo.jpg` and used by `components/SiteHeader.jsx`.
- Live CSS palette references: primary blue `#3368C6`, deep navy `#18336C`, slate `#788AAF`. The uploaded logo also contains cyan `#00A3E4` and dark blue `#0043AB`. Brand tokens are in `app/globals.css`.
- Retain the real logo image; do not recreate or replace it with a generic engineering mark.

## Company Profile Imagery

- The source profile is `https://electromechmw.com/wp-content/uploads/2025/08/Electromech-Company-Profile-2026.pdf` (pages 4–6 in the downloaded PDF).
- Locally derived, compressed WebP assets live in `public/images/profile/`: `power-line-hero.webp`, `electrical-technician.webp`, and one image for each of the four services. Together they are approximately 340 KB.
- Home uses the power-line image; About uses the electrical-technician image; `ServiceCard` and every service detail page use the matching service image configured in `lib/site-data.js`.
- Describe these as images from the company profile. Do not present them as a specific ElectroMech project, site, employee, or client engagement unless the company confirms that context.
- Keep the local files and their descriptive alt text. Do not restore the former external Unsplash image.

## Content & Claims

- Use only verified company facts: services are Design & Development, Project Management, Asset Management, and Advisory.
- Keep explicit placeholders such as `[ADD PROJECT]`, `[CLIENT LOGO]`, and `[ADD APPROVED ...]` until the company supplies approval. Never invent clients, project outcomes, certifications, testimonials, awards, or metrics.
- Keep the email discrepancy visible until resolved: the legacy site shows `admin@electromech.com`; supplied current information uses `admin@electromechmw.com`.
- The current stock engineering photography is not an ElectroMech project. Replace it with rights-cleared, compressed project photography and accurate alt text when available.

## Quality & Deployment

- Maintain semantic landmarks, visible keyboard focus, WCAG AA contrast, responsive layouts, and `prefers-reduced-motion` support.
- Use the existing lightweight pattern: avoid large client libraries, autoplay media, trackers, and unnecessary image downloads.
- Update `app/layout.jsx`, `app/sitemap.js`, and `public/robots.txt` together if the canonical domain changes.
- Run `npm run build` after meaningful changes. The original Next 15 static export passed for all 15 generated routes; if package versions change, validate again before release.

## Repository Hygiene

- Do not commit `node_modules/`, `.next/`, or `out/`.
- Preserve unrelated working-tree files unless the user explicitly asks to include or remove them.
