import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { whatsappLink } from "@/lib/site-data";
export const metadata = {
  title: "Contact",
  description:
    "Request a mechanical or electrical engineering quote from ElectroMech Solutions in Lilongwe.",
};
export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Bring us the engineering question.</h1>
          <p className="lead">
            Tell us what needs to be designed, managed, assessed or clarified.
            We’ll start with the right scope.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-panel">
            <h2>ElectroMech Solutions Limited</h2>
            <ul className="contact-list">
              <li>
                <strong>Office</strong>Shop A2, Guoji Shopping Complex, Area 49,
                P.O. Box 20017, Kawale, Lilongwe
              </li>
              <li>
                <strong>Phone</strong>
                <a href="tel:+265999858218">+265 999 858 218</a>
                <br />
                <a href="tel:+265991398317">+265 991 398 317</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:admin@electromechmw.com">
                  admin@electromechmw.com
                </a>
                <br />
                <a href="mailto:sales@electromechmw.com">
                  sales@electromechmw.com
                </a>
              </li>
              <li>
                <strong>Hours</strong>Mon–Fri, 9:30–16:30
              </li>
            </ul>
            <a className="button button--whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </aside>
          <ContactForm />
        </div>
        <div className="container">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
