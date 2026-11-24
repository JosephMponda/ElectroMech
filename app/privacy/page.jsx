import { company } from "@/lib/site-data";

export const metadata = {
  title: "Privacy notice",
  description: "How ElectroMech Solutions Limited handles personal information submitted through this website.",
};

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Privacy notice</h1>
          <p className="lead">How we handle information you send us through this website.</p>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <h2>What we collect</h2>
          <p>
            When you use the quote form, we collect your name, email address, phone number, the
            service you are interested in and the message you write. If you contact us on WhatsApp,
            by phone or by email, we receive the details you share in that conversation.
          </p>
          <h2>How we use it</h2>
          <p>
            We use this information only to respond to your enquiry, prepare a quotation and
            manage any resulting work. We do not sell your information or use it for unrelated
            marketing.
          </p>
          <h2>Who sees it</h2>
          <p>
            Form submissions are delivered to our team by email through a form-handling provider.
            WhatsApp messages are handled under WhatsApp&rsquo;s own terms. Our map is loaded from
            Google Maps only when you choose to show it.
          </p>
          <h2>Keeping and correcting your information</h2>
          <p>
            We keep enquiry records for as long as needed to respond and to meet our business and
            legal obligations. To ask us to correct or delete your information, email{" "}
            <a href={"mailto:" + company.emails[0]}>{company.emails[0]}</a>.
          </p>
          <h2>Contact</h2>
          <p>
            {company.name}, {company.address}.
          </p>
        </div>
      </section>
    </>
  );
}
