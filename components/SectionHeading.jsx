export function SectionHeading({ eyebrow, title, lead, dark = false }) {
  return (
    <div className={dark ? "on-dark" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
