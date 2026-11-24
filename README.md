# ElectroMech Solutions Limited website

A fast, static-export Next.js website for ElectroMech Solutions Limited. Content is intentionally centralised in `lib/site-data.js` so the service descriptions and insight cards are easy to revise before a CMS is connected.

## Start locally

1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run dev` and visit `http://localhost:3000`.
4. Run `npm run build` for the production static site. It creates an `out/` folder, which can be uploaded to any ordinary static host.

## Deploy

- **Static hosting:** upload everything inside `out/` to the web root after `npm run build`.
- **Netlify / Cloudflare Pages:** set build command to `npm run build`; publish directory is `out`.
- **Domain:** point `electromechmw.com` to the chosen host, then change the URL in `app/layout.jsx`, `app/sitemap.js` and `public/robots.txt` if the final canonical domain differs.
- **Form:** set `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`) to a Formspree or Web3Forms endpoint so quote requests arrive by email. If it is not set, the form hands the enquiry to WhatsApp (+265 999 858 218), so no lead is lost.

## Editorial handover

- Edit services and the three initial insight summaries in `lib/site-data.js`.
- The service detail pages are generated automatically from those records.
- Replace the company-profile images with rights-cleared project photography when available. `showClientLogos` in `lib/site-data.js` hides the client-logo strip until each organisation approves it.
- Projects and Insights pages are hidden from navigation, the sitemap and search (noindex) until real case studies and articles exist.
- Use a CMS such as Sanity, Contentful or a headless WordPress only when the team needs browser-based authoring; the current structure is ready to map those records into page components.

## Required from the client before launch

1. Approved logo files and brand usage rules.
2. Rights-cleared project photos with descriptions and alt text.
3. Client-approved project case studies: sector, scope, role, location and outcomes.
4. Written testimonials and named client-logo permissions, if they are to be used.
5. Confirmed certifications, registrations and accreditations, if any.
6. Approved team bios, headshots and the correct public email address. The legacy site conflicts: it shows `admin@electromech.com` while current supplied details use `admin@electromechmw.com`.
7. A form-delivery provider/account and a privacy policy if personal data will be collected.

8. A vector (SVG) or high-resolution transparent logo. The supplied JPG is small; the header uses a white badge to cope.
9. Confirmation of the public email address (the legacy site showed admin@electromech.com; this build uses admin@electromechmw.com) and a review of `/privacy/`.
