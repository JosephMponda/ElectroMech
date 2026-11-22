import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
export const metadata = {
  title: "Projects / Case Studies",
  description:
    "Client-approved engineering project case studies from ElectroMech Solutions.",
};
export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Projects / Case studies</p>
          <h1>Evidence-led case studies, published with permission.</h1>
          <p className="lead">
            No awards, figures or client stories are presented until they are
            verified and approved for publication.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Coming soon"
            title="A focused record of work, not a generic gallery."
          />
          <div className="project-grid">
            {Array.from({ length: 6 }, (_, index) => (
              <article className="placeholder-project" key={index}>
                <span>Case study pending</span>
                <h3>[ADD PROJECT]</h3>
                <p>
                  Add sector, brief, ElectroMech scope, location, approved
                  photos and measurable outcomes.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section cta-band">
        <div className="container split">
          <div>
            <p className="eyebrow">Have a project in mind?</p>
            <h2>Start with a clear technical brief.</h2>
          </div>
          <Link className="button" href="/contact/">
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
