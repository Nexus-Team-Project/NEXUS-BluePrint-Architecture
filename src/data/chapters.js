export const chapters = [
  {
    number: "01",
    title: "Customers & Needs",
    path: "/customers-needs",
    section: "FOUNDATION",
    subtitle: "Why service growth creates operational complexity for organizations.",
  },
  {
    number: "02",
    title: "Overview",
    path: "/overview",
    section: "FOUNDATION",
    subtitle: "Why organizations need a better way to operate digital services.",
  },
  {
    number: "03",
    title: "Services Operated Through NEXUS",
    path: "/services-through-nexus",
    section: "FOUNDATION",
    subtitle: "How NEXUS enables organizations to operate meaningful services for their users.",
  },
  {
    number: "04",
    title: "Ecosystem Model",
    path: "/ecosystem-model",
    section: "ECOSYSTEM",
    subtitle: "How services connect into a broader ecosystem around organizations and users.",
  },
  {
    number: "05",
    title: "Platform Foundation",
    path: "/platform-foundation",
    section: "PLATFORM",
    subtitle: "The role of the platform as the enabling infrastructure of the ecosystem.",
  },
  {
    number: "06",
    title: "System Architecture Map",
    path: "/system-architecture-map",
    section: "PLATFORM",
    subtitle: "Visual reference for the NEXUS platform architecture.",
  },
  {
    number: "07",
    title: "Core Platform Services",
    path: "/core-platform-services",
    section: "PLATFORM",
    subtitle: "The shared platform capabilities that support service operation and scale.",
  },
  {
    number: "08",
    title: "Event & Automation Model",
    path: "/event-automation-model",
    section: "ARCHITECTURE",
    subtitle: "How events and automation support ecosystem coordination and operation.",
  },
  {
    number: "09",
    title: "Data Architecture",
    path: "/data-architecture",
    section: "ARCHITECTURE",
    subtitle: "How data supports operation, visibility, and growth across the ecosystem.",
  },
  {
    number: "10",
    title: "Integrations",
    path: "/integrations",
    section: "ARCHITECTURE",
    subtitle: "How providers, partners, and enterprise systems connect into the model.",
  },
];

export const sectionOrder = ["FOUNDATION", "ECOSYSTEM", "PLATFORM", "ARCHITECTURE"];

export const chapterMap = Object.fromEntries(
  chapters.map((chapter, index) => [chapter.path, { ...chapter, index }])
);