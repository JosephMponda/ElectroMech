import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>We could not find that page.</h1>
        <p className="lead">The link may be out of date. Try one of these instead.</p>
        <div className="hero-actions">
          <Link className="button" href="/">
            Go to the homepage
          </Link>
          <Link className="button button--ghost" href="/services/">
            View services
          </Link>
          <Link className="button button--ghost" href="/contact/">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
