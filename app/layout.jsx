import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl = "https://electromechmw.com";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ElectroMech Solutions | Engineering Consultancy, Malawi",
    template: "%s | ElectroMech Solutions",
  },
  description:
    "Mechanical and electrical engineering consultancy for industry in Malawi.",
  openGraph: {
    type: "website",
    locale: "en_MW",
    siteName: "ElectroMech Solutions Limited",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ElectroMech Solutions Limited",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "ElectroMech Solutions Limited",
    description:
      "Professional consulting firm providing mechanical and electrical engineering services to industry.",
    url: siteUrl,
    telephone: "+265999858218",
    email: "admin@electromechmw.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop A2, Guoji Shopping Complex, Area 49, P.O. Box 20017, Kawale",
      addressLocality: "Lilongwe",
      addressCountry: "MW",
    },
    openingHours: "Mo-Fr 09:30-16:30",
    areaServed: "Malawi",
  };
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <a
          className="whatsapp"
          href="https://wa.me/265999858218"
          aria-label="Chat with ElectroMech Solutions on WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          WA
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
