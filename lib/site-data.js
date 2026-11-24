export const profileUrl = "/Electromech-Company-Profile-2026.pdf";

export const company = {
  name: "ElectroMech Solutions Limited",
  siteUrl: "https://electromechmw.com",
  phones: [
    { label: "+265 999 858 218", tel: "+265999858218" },
    { label: "+265 991 398 317", tel: "+265991398317" },
  ],
  whatsapp: "265999858218",
  emails: ["admin@electromechmw.com", "sales@electromechmw.com"],
  address: "Shop A2, Guoji Shopping Complex, Area 49, P.O. Box 20017, Kawale, Lilongwe",
  hours: "Mon–Fri, 9:30–16:30",
};

export const whatsappLink = (text = "Hello ElectroMech, I would like to make an engineering enquiry.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

// Set to false to hide the client-logo strip until each organisation has approved its use.
export const showClientLogos = true;

export const reasons = [
  {
    title: "Electrical and mechanical under one roof",
    text: "One consultancy covers both disciplines, so design, delivery and maintenance decisions are coordinated instead of handed between firms.",
  },
  {
    title: "Practical, cost-effective solutions",
    text: "Our mission is engineering that is specifically designed for the job, innovative where it helps and sensible on cost.",
  },
  {
    title: "Independent technical advice",
    text: "Advisory support on systems, compliance and claims, so your decisions rest on a clear engineering opinion.",
  },
  {
    title: "Based in Lilongwe, serving Malawi",
    text: "A local team and office in Area 49, Kawale, reachable by phone, WhatsApp or in person.",
  },
];

export const faqs = [
  {
    q: "What does ElectroMech do?",
    a: "ElectroMech Solutions Limited is a consulting firm providing mechanical and electrical engineering services to industry: design and development, project management, asset management and advisory.",
  },
  {
    q: "How do I request a quote?",
    a: "Use the quote form, call or WhatsApp us, or email sales@electromechmw.com. Describe what needs to be designed, managed, assessed or clarified and we will respond with the right next step.",
  },
  {
    q: "Where are you based?",
    a: "Our office is at Shop A2, Guoji Shopping Complex, Area 49, Kawale, Lilongwe. We serve clients across Malawi.",
  },
  {
    q: "When can I reach you?",
    a: "Our office hours are Monday to Friday, 9:30 to 16:30. WhatsApp messages and emails sent outside those hours are answered on the next working day.",
  },
];
export const services = [
  {
    slug: "design-development",
    title: "Design & Development",
    image: "/images/profile/design-development.webp",
    imageAlt:
      "Engineer holding drawings, pictured in ElectroMech's company profile",
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
    title: "Project Management",
    image: "/images/profile/project-management.webp",
    imageAlt:
      "Hydroelectric infrastructure, pictured in ElectroMech's company profile",
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
    title: "Asset Management",
    image: "/images/profile/asset-management.webp",
    imageAlt:
      "Technician working on elevated electrical equipment, pictured in ElectroMech's company profile",
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
    title: "Advisory",
    image: "/images/profile/advisory.webp",
    imageAlt:
      "Engineering control interface, pictured in ElectroMech's company profile",
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
