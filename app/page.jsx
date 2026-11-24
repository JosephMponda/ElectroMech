import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { faqs, profileUrl, reasons, services, showClientLogos } from "@/lib/site-data";

const featuredOrganisations = [
  { name: "NOCMA", image: "/images/organisations/nocma.webp" },
  { name: "NBS Bank", image: "/images/organisations/nbs-bank.webp" },
  { name: "Press Trust", image: "/images/organisations/press-trust.webp" },
  { name: "Expert", image: "/images/organisations/expert.webp" },
  { name: "Protea Hotels", image: "/images/organisations/protea-hotels.webp" },
];

const steps = [
  ["Understand", "We clarify the site, systems, objective and constraints."],
  ["Define", "We agree a focused technical scope and a practical way forward."],
  ["Deliver", "We coordinate the technical work with attention to quality and progress."],
  ["Hand over", "You receive clear documentation and useful next steps for operation."],
];

export default function Home() {
  return (
    <>
      <section className="hero on-dark">
        <Image
          className="hero-image"
          src="/images/profile/power-line-hero.webp"
          alt="Electricity transmission tower pictured in ElectroMech's company profile"
          fill
          priority
          sizes="100vw"
        />
        <div className="container hero-copy">
          <h1>Electrical and mechanical engineering that keeps industry running.</h1>
          <p className="lead">
            ElectroMech Solutions is a consulting firm in Lilongwe. We design, manage, assess and
            advise on the systems your operation depends on.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact/">
              Request a quote
            </Link>
            <Link className="button button--ghost" href="/services/">
              View services
            </Link>
          </div>
        </div>
        <div className="credibility-strip">
          <div className="container">
            <div>Mechanical and electrical engineering</div>
            <div>Practical, project-focused solutions</div>
            <div>Based in Lilongwe, serving Malawi</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <SectionHeading
            title="One consultancy from first concept to day-to-day operation."
            lead="We bring engineering judgement to the work that matters: defining the problem, shaping a practical solution and supporting informed delivery."
          />
          <div className="signal">
            <strong>Our mission</strong>
            <p>
              Specifically designed, practical, innovative and cost-effective engineering solutions,
              with unmatched customer service.
            </p>
            <a className="button" href={profileUrl} target="_blank" rel="noreferrer">
              Download company profile
            </a>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            dark
            title="Four services, coordinated around your requirement."
            lead="Use one, or combine them across the life of a project or asset."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Why clients work with ElectroMech." />
          <div className="reasons">
            {reasons.map((reason) => (
              <article key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading title="How an engagement runs." />
          <ol className="process-grid">
            {steps.map(([title, text], index) => (
              <li key={title}>
                <span aria-hidden="true">{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {showClientLogos && (
        <section className="section">
          <div className="container">
            <SectionHeading title="Organisations in our company profile." />
            <ul className="client-logos">
              {featuredOrganisations.map((organisation) => (
                <li className="client-logo" key={organisation.name}>
                  <Image
                    src={organisation.image}
                    alt={`${organisation.name} logo`}
                    width={480}
                    height={180}
                    sizes="(min-width: 42rem) 20vw, 50vw"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section section--tint">
        <div className="container faq-layout">
          <SectionHeading title="Common questions." />
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container split">
          <h2>Need a mechanical or electrical engineering partner?</h2>
          <div>
            <Link className="button" href="/contact/">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
