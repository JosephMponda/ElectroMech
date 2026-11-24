import Link from "next/link";

export const metadata = {
  title: "Insights",
  description: "Engineering insights from ElectroMech Solutions Limited.",
  robots: { index: false, follow: true },
};

export default function Insights() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Insights are on the way.</h1>
          <p className="lead">
            We are preparing practical articles on electrical and mechanical engineering. In the
            meantime, our team is happy to answer your questions directly.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact/">
              Ask the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
