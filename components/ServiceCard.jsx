import Link from "next/link";
export function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <span className="service-index">{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link className="text-link" href={"/services/" + service.slug + "/"}>
        Explore service
      </Link>
    </article>
  );
}
