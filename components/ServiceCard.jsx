import Image from "next/image";
import Link from "next/link";
export function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <Image
        className="service-card-image"
        src={service.image}
        alt={service.imageAlt}
        width="800"
        height="560"
        sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 25vw"
      />
      <span className="service-index">{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link className="text-link" href={"/services/" + service.slug + "/"}>
        Explore service
      </Link>
    </article>
  );
}
