import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/public-sans";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/lib/site-data";

const siteUrl = company.siteUrl;
const title = "ElectroMech Solutions | Electrical & Mechanical Engineering Consultants, Malawi";
const description =
  "Mechanical and electrical engineering consultancy in Lilongwe, Malawi: design and development, project management, asset management and technical advisory.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | ElectroMech Solutions" },
  description,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "en_MW",
    siteName: company.name,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ElectroMech Solutions Limited: electrical and mechanical engineering consultants",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export const viewport = { themeColor: "#18336c" };

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: company.name,
    description:
      "Professional consulting firm providing mechanical and electrical engineering services to industry.",
    url: siteUrl,
    logo: `${siteUrl}/electromech-logo.jpg`,
    image: `${siteUrl}/og-image.png`,
    telephone: company.phones.map((p) => p.tel),
    email: company.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop A2, Guoji Shopping Complex, Area 49, Kawale",
      postOfficeBoxNumber: "20017",
      addressLocality: "Lilongwe",
      addressCountry: "MW",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "16:30",
    },
    areaServed: { "@type": "Country", name: "Malawi" },
    knowsAbout: [
      "Electrical engineering",
      "Mechanical engineering",
      "Engineering project management",
      "Asset management",
    ],
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
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
