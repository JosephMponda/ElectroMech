import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
export const metadata = {
  title: "About / Our Team",
  description:
    "About ElectroMech Solutions Limited, mechanical and electrical engineering consultants in Lilongwe.",
};
export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Engineering with purpose, leading with vision.</h1>
          <p className="lead">
            A professional consulting firm providing mechanical and electrical
            engineering services to industry.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="image-frame">
            <Image
              src="/images/profile/electrical-technician.webp"
              alt="Electrical technician working on a control panel, pictured in ElectroMech's company profile"
              width="800"
              height="1100"
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeading
              title="Technical work grounded in your requirement."
              lead="ElectroMech is set up to support industry with practical electrical and mechanical engineering input. We focus on clarity, disciplined delivery and solutions that work in context."
            />
            <p>
              Our work covers design and development, project management, asset
              management and technical advisory.
            </p>
          </div>
        </div>
      </section>
      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            dark
            title="Where we are going, and how we get there."
          />
          <div className="values">
            <article className="value">
              
              <h3>Vision</h3>
              <p>
                To be the electrical and mechanical consultant of choice in
                Malawi and beyond.
              </p>
            </article>
            <article className="value">
              
              <h3>Mission</h3>
              <p>
                Specifically-designed, practical, innovative, cost-effective
                engineering solutions and unmatched customer service.
              </p>
            </article>
            <article className="value">
              
              <h3>What we do</h3>
              <p>
                Design & Development, Project Management, Asset Management and
                Advisory.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              title="Leadership."
              lead="Eng. Eugenio Tebulo, Managing Director, leads ElectroMech Solutions Limited."
            />
            <Link className="button button--outline" href="/contact/">
              Speak to the team
            </Link>
          </div>
          <article className="team-card">
            <p className="role">Managing Director</p>
            <h2>Eng. Eugenio Tebulo</h2>
          </article>
        </div>
      </section>
    </>
  );
}
