import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { insights, profileUrl, services } from "@/lib/site-data";

const featuredOrganisations = [
  { name: "NOCMA", image: "/images/organisations/nocma.webp" },
  { name: "NBS Bank", image: "/images/organisations/nbs-bank.webp" },
  { name: "Press Trust", image: "/images/organisations/press-trust.webp" },
  { name: "Expert", image: "/images/organisations/expert.webp" },
  { name: "Protea Hotels", image: "/images/organisations/protea-hotels.webp" },
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
          <p className="eyebrow">Mechanical + electrical consultancy</p>
          <h1>Engineering decisions that keep industry moving.</h1>
          <p className="lead">
            ElectroMech Solutions Limited provides practical mechanical and
            electrical engineering services for industry in Malawi.
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
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="A clear technical partner from concept to operation."
              lead="We bring engineering thinking to the work that matters: defining the problem, shaping a practical solution and supporting informed delivery."
            />
            <Link className="text-link" href="/about/">
              About ElectroMech
            </Link>
          </div>
          <div className="signal">
            <strong>Our mission</strong>
            <p>
              Specifically-designed, practical, innovative, cost-effective
              engineering solutions and unmatched customer service.
            </p>
            <a
              className="button"
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download company profile
            </a>
          </div>
        </div>
      </section>
      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            dark
            eyebrow="Capabilities"
            title="Engineering consultancy, built around the real task."
            lead="Four focused services, coordinated around your requirements."
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
          <SectionHeading
            eyebrow="How we work"
            title="Deliberate in approach. Practical in delivery."
          />
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Understand</h3>
              <p>Clarify the site, systems, objective and constraints.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Define</h3>
              <p>
                Build a focused technical scope and a practical way forward.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Deliver</h3>
              <p>
                Coordinate technical work with attention to quality and
                progress.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Support</h3>
              <p>
                Leave clear documentation and useful next steps for operation.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section project-section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects deserve evidence, not invented claims."
            lead="Client-approved case studies will be added here. Until then, this site makes the gap clear."
          />
          <div className="project-grid">
            {["[ADD PROJECT]", "[ADD PROJECT]", "[ADD PROJECT]"].map(
              (project, index) => (
                <article className="placeholder-project" key={index}>
                  <span>Case study pending</span>
                  <h3>{project}</h3>
                  <p>Add client-approved scope, location, role and outcome.</p>
                </article>
              ),
            )}
          </div>
          <Link className="text-link" href="/projects/">
            View project placeholders
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected experience"
            title="Organisations featured in our company profile."
          />
          <div className="client-logos" role="list">
            {featuredOrganisations.map((organisation) => (
              <article className="client-logo" key={organisation.name} role="listitem">
                <Image
                  src={organisation.image}
                  alt={`${organisation.name} logo`}
                  width={480}
                  height={180}
                  sizes="(min-width: 42rem) 20vw, 50vw"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Insights"
            title="Useful perspectives for better engineering decisions."
          />
          <div className="insight-grid">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.title}>
                <p className="eyebrow">Engineering insight</p>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <Link className="text-link" href="/insights/">
                  Read insight
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section cta-band">
        <div className="container split">
          <div>
            <p className="eyebrow">Start with the scope</p>
            <h2>Need a mechanical or electrical engineering partner?</h2>
          </div>
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
