import Link from "next/link";
import { Brand } from "./SiteHeader";
import { profileUrl } from "@/lib/site-data";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p className="footer-copy">
            Professional consulting firm providing mechanical and electrical
            engineering services to industry.
          </p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <ul className="footer-links">
            <li>
              <Link href="/about/">About / Our Team</Link>
            </li>
            <li>
              <Link href="/services/">Services</Link>
            </li>
            <li>
              <Link href="/projects/">Projects</Link>
            </li>
            <li>
              <Link href="/insights/">Insights</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <ul className="footer-links">
            <li>
              <a href="tel:+265999858218">+265 999 858 218</a>
            </li>
            <li>
              <a href="tel:+265991398317">+265 991 398 317</a>
            </li>
            <li>
              <a href="mailto:admin@electromechmw.com">
                admin@electromechmw.com
              </a>
            </li>
            <li>
              <a href={profileUrl} target="_blank" rel="noreferrer">
                Company profile (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ElectroMech Solutions Limited</span>
        <span>Shop A2, Guoji Shopping Complex, Area 49, Lilongwe</span>
      </div>
    </footer>
  );
}
