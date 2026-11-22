import { ContactForm } from "@/components/ContactForm";
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
          <p className="eyebrow">Contact</p>
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
            <p className="eyebrow">Find us</p>
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
            <p className="notice">
              The older website also displays{" "}
              <strong>admin@electromech.com</strong>. Confirm the preferred
              public address before launch.
            </p>
          </aside>
          <ContactForm />
        </div>
        <div className="container map-wrap">
          <iframe
            title="ElectroMech Solutions location in Kawale, Lilongwe"
            src="https://www.google.com/maps?q=Guoji%20Shopping%20Complex%20Area%2049%20Lilongwe%20Malawi&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
