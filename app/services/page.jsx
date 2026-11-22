import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";
export const metadata = {
  title: "Services",
  description:
    "Design, project management, asset management and advisory services from ElectroMech Solutions.",
};
export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our services</p>
          <h1>Engineering excellence through focused, dependable services.</h1>
          <p className="lead">
            From planning to delivery, our consultancy services bring together
            innovation, precision and practical long-term value.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="The right level of technical support for the job."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
