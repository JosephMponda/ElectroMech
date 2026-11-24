import Link from "next/link";
import { Brand } from "./SiteHeader";
import { company, profileUrl, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p className="footer-copy">
            Professional consulting firm providing mechanical and electrical engineering services to
            industry.
          </p>
        </div>
        <div>
          <p className="footer-title">Services</p>
          <ul className="footer-links">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={"/services/" + service.slug + "/"}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <ul className="footer-links">
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li>
              <a href={profileUrl} target="_blank" rel="noreferrer">
                Company profile (PDF)
              </a>
            </li>
            <li>
              <Link href="/privacy/">Privacy notice</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <ul className="footer-links">
            {company.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={"tel:" + phone.tel}>{phone.label}</a>
              </li>
            ))}
            {company.emails.map((email) => (
              <li key={email}>
                <a href={"mailto:" + email}>{email}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <span>{company.hours}, Area 49, Kawale, Lilongwe</span>
      </div>
    </footer>
  );
}
