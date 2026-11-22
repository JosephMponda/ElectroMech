import { SectionHeading } from "@/components/SectionHeading";
import { insights } from "@/lib/site-data";
export const metadata = {
  title: "Insights",
  description: "Engineering perspectives from ElectroMech Solutions Limited.",
};
export default function Insights() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Insights</p>
          <h1>Perspectives on the systems behind productive industry.</h1>
          <p className="lead">
            A concise editorial space for electrical and mechanical engineering
            knowledge. Stale template dates and unmoderated comments are
            intentionally removed.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest perspectives"
            title="Engineering topics worth a closer look."
          />
          <div className="insight-grid">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.title}>
                <p className="eyebrow">Engineering insight</p>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <p className="notice">
                  [ADD APPROVED FULL ARTICLE OR CMS POST]
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
