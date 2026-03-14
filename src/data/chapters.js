export const chapters = [
  {
    number: "01",
    title: "The Operational Complexity of Modern Digital Services",
    path: "/customers-needs",
    section: "FOUNDATION",
    subtitle: "Why organizations struggle to manage growing digital service ecosystems.",
  },
  {
    number: "02",
    title: "NEXUS Vision",
    path: "/overview",
    section: "FOUNDATION",
    subtitle: "NEXUS enables organizations to transform isolated services into coordinated digital ecosystems.",
  },
  {
    number: "03",
    title: "Operating Services Through the NEXUS Model",
    path: "/services-through-nexus",
    section: "FOUNDATION",
    subtitle: "How organizations operate modular services and structure them into composable service programs.",
  },
  {
    number: "04",
    title: "Ecosystem Model",
    path: "/ecosystem-model",
    section: "ECOSYSTEM",
    subtitle: "The NEXUS ecosystem connects organizations, providers, partners, and services into a shared service environment.",
  },
  {
    number: "05",
    title: "Platform Foundation",
    path: "/platform-foundation",
    section: "PLATFORM",
    subtitle: "The platform provides the operational foundation that enables the ecosystem to function.",
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
    subtitle: "How providers, partners, and enterprise systems connect into the NEXUS ecosystem.",
  },
];

export const sectionOrder = ["FOUNDATION", "ECOSYSTEM", "PLATFORM", "ARCHITECTURE"];

export const chapterMap = Object.fromEntries(
  chapters.map((chapter, index) => [chapter.path, { ...chapter, index }])
);