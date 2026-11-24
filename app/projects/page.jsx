import Link from "next/link";
import { profileUrl } from "@/lib/site-data";

export const metadata = {
  title: "Projects",
  description: "Selected project work from ElectroMech Solutions is shared on request.",
  robots: { index: false, follow: true },
};

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Project work, shared on request.</h1>
          <p className="lead">
            Our company profile describes our services and the organisations we work with. To
            discuss relevant experience for your project, get in touch.
          </p>
          <div className="hero-actions">
            <a className="button" href={profileUrl} target="_blank" rel="noreferrer">
              Download company profile
            </a>
            <Link className="button button--ghost" href="/contact/">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
