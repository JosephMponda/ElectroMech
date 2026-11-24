import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/lib/site-data";
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return {
    title: service ? service.title : "Service",
    description: service?.summary,
  };
}
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{service.title}</h1>
          <p className="lead">{service.summary}</p>
        </div>
      </section>
      <section className="section">
        <div className="container service-intro">
          <div className="service-image-frame">
            <Image
              className="service-detail-image"
              src={service.image}
              alt={service.imageAlt}
              width="800"
              height="560"
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2>What the service covers</h2>
            <ul className="scope-list">
              {service.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="deliverable-panel service-deliverables">
            <h2>Typical deliverables</h2>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button" href={"/contact/?service=" + service.slug}>
              Request a quote
            </Link>
          </aside>
        </div>
      </section>
      <section className="section dark-section">
        <div className="container">
          <h2 className="on-dark">Other services</h2>
          <div className="related-services">
            {services
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <Link
                  className="tag on-dark"
                  href={"/services/" + item.slug + "/"}
                  key={item.slug}
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
