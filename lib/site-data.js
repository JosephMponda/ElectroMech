export const profileUrl =
  "https://electromechmw.com/wp-content/uploads/2025/08/Electromech-Company-Profile-2026.pdf";
export const services = [
  {
    slug: "design-development",
    number: "01",
    title: "Design & Development",
    summary:
      "Engineering concepts developed into practical, efficient solutions built for the work ahead.",
    scope: [
      "Electrical and mechanical concept development",
      "Technical studies and site assessments",
      "System design and engineering documentation",
      "Design coordination for implementation",
    ],
    deliverables: [
      "Design basis and technical scope",
      "Drawings, schedules and specifications",
      "Equipment and system recommendations",
      "Implementation-ready documentation",
    ],
  },
  {
    slug: "project-management",
    number: "02",
    title: "Project Management",
    summary:
      "Technical direction that keeps engineering delivery focused on scope, quality, programme and cost.",
    scope: [
      "Project planning and technical coordination",
      "Site monitoring and progress reporting",
      "Quality-focused delivery oversight",
      "Stakeholder and contractor coordination",
    ],
    deliverables: [
      "Project execution plan",
      "Programme and progress reports",
      "Meeting records and action registers",
      "Completion and handover support",
    ],
  },
  {
    slug: "asset-management",
    number: "03",
    title: "Asset Management",
    summary:
      "A structured view of electrical infrastructure performance, reliability and working life.",
    scope: [
      "Asset condition assessment",
      "Maintenance planning support",
      "Reliability and lifecycle review",
      "Infrastructure performance improvement",
    ],
    deliverables: [
      "Asset register support",
      "Condition assessment findings",
      "Maintenance recommendations",
      "Prioritised improvement plan",
    ],
  },
  {
    slug: "advisory",
    number: "04",
    title: "Advisory",
    summary:
      "Independent technical advice for decisions around systems, compliance, claims and performance.",
    scope: [
      "Advice on design, build, operation and maintenance",
      "Electrical and mechanical inspection support",
      "Compliance and technical risk review",
      "Electrical and mechanical claims assessments",
    ],
    deliverables: [
      "Technical opinion or report",
      "Inspection findings",
      "Risk and compliance observations",
      "Clear practical recommendations",
    ],
  },
];
export const insights = [
  {
    title: "Powering critical infrastructure: what reliable delivery demands",
    excerpt:
      "A concise perspective on site assessment, high-voltage systems and back-up power for essential facilities.",
  },
  {
    title: "Engineering support across the project lifecycle",
    excerpt:
      "Why practical planning, installation oversight and preventive maintenance work better as one conversation.",
  },
  {
    title: "Reliable systems support industrial growth",
    excerpt:
      "Electrical and mechanical infrastructure is a foundation for productive, resilient operations.",
  },
];
export const serviceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
