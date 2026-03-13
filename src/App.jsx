import { HashRouter, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/nexus-logo.png";

const chapters = [
  {
    number: "01",
    title: "Overview",
    path: "/overview",
    section: "FOUNDATION",
    subtitle: "Business context and document purpose.",
  },
  {
    number: "02",
    title: "Customers & Needs",
    path: "/customers-needs",
    section: "FOUNDATION",
    subtitle: "The customer problems and business needs the ecosystem is designed to address.",
  },
  {
    number: "03",
    title: "Nexus Services",
    path: "/nexus-services",
    section: "FOUNDATION",
    subtitle: "The service portfolio that NEXUS delivers through a shared infrastructure approach.",
  },
  {
    number: "04",
    title: "Ecosystem Model",
    path: "/ecosystem-model",
    section: "ECOSYSTEM",
    subtitle: "The ecosystem structure: actors, value flows, partners, and service participation.",
  },
  {
    number: "05",
    title: "Platform Foundation",
    path: "/platform-foundation",
    section: "PLATFORM",
    subtitle: "The role of the platform as the technical foundation of the broader ecosystem.",
  },
  {
    number: "06",
    title: "System Architecture Map",
    path: "/system-architecture-map",
    section: "PLATFORM",
    subtitle: "Visual reference map of the NEXUS platform architecture.",
  },
  {
    number: "07",
    title: "Core Platform Services",
    path: "/core-platform-services",
    section: "PLATFORM",
    subtitle: "The core shared capabilities that enable service delivery across the ecosystem.",
  },
  {
    number: "08",
    title: "Event & Automation Model",
    path: "/event-automation-model",
    section: "ARCHITECTURE",
    subtitle: "How events, triggers, workflows, and automation support ecosystem operation.",
  },
  {
    number: "09",
    title: "Data Architecture",
    path: "/data-architecture",
    section: "ARCHITECTURE",
    subtitle: "How platform data is structured, governed, and used across operational and analytical needs.",
  },
  {
    number: "10",
    title: "Integrations",
    path: "/integrations",
    section: "ARCHITECTURE",
    subtitle: "How external systems, providers, and partners connect into the NEXUS ecosystem.",
  },
];

const sectionOrder = ["FOUNDATION", "ECOSYSTEM", "PLATFORM", "ARCHITECTURE"];

const chapterMap = Object.fromEntries(chapters.map((c, index) => [c.path, { ...c, index }]));

const architectureMapSrc = `${process.env.PUBLIC_URL}/architecture/nexus-architecture-map.png`;

function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const contentTop = document.getElementById("content-top");
    if (contentTop) {
      contentTop.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
}

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useScrollToTop();

  const grouped = useMemo(() => {
    return sectionOrder.map((section) => ({
      section,
      items: chapters.filter((chapter) => chapter.section === section),
    }));
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="brand-block">
          <a href="https://nexus-payment.com/" className="brand-link">
            <img src={logo} alt="NEXUS" className="brand-logo" />
          </a>

          <div className="brand-title-stack">
            <div className="brand-line brand-line-1">NEXUS</div>
            <div className="brand-line brand-line-2">Enterprise Digital Services Ecosystem</div>
            <div className="brand-line brand-line-3">Architecture Blueprint</div>
          </div>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          ☰ Sections
        </button>

        <div className={`sidebar-inner ${mobileMenuOpen ? "open" : ""}`}>
          {grouped.map(({ section, items }) => (
            <div key={section} className="sidebar-group">
              <div className="sidebar-group-title">{section}</div>
              <nav className="nav">
                {items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-number">{item.number}</span>
                    <span className="nav-title">{item.title}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>

      <main className="content" id="content-top">
        {children}
      </main>
    </div>
  );
}

function ChapterFooter({ chapter }) {
  return (
    <footer className="chapter-footer">
      <div className="chapter-footer-left">
        {chapter.number} {chapter.title}
      </div>
      <div className="chapter-footer-right">
        Blueprint Version 1.3 | Aligned with PRD 1.4
      </div>
    </footer>
  );
}

function ChapterNavigation({ chapter }) {
  const previous = chapter.index > 0 ? chapters[chapter.index - 1] : null;
  const next = chapter.index < chapters.length - 1 ? chapters[chapter.index + 1] : null;

  return (
    <div className="chapter-nav">
      {previous ? (
        <Link to={previous.path} className="chapter-nav-button chapter-nav-prev">
          <span className="chapter-nav-label">← Previous Chapter</span>
          <span className="chapter-nav-title">
            {previous.number} {previous.title}
          </span>
        </Link>
      ) : (
        <div className="chapter-nav-spacer" />
      )}

      {next ? (
        <Link to={next.path} className="chapter-nav-button chapter-nav-next">
          <span className="chapter-nav-label">Next Chapter →</span>
          <span className="chapter-nav-title">
            {next.number} {next.title}
          </span>
        </Link>
      ) : (
        <div className="chapter-nav-spacer" />
      )}
    </div>
  );
}

function Page({ chapter, children, minimal = false }) {
  return (
    <section className={`page ${minimal ? "page-minimal" : ""}`}>
      <div className="page-header">
        <div className="page-kicker">
          {chapter.number} {chapter.title}
        </div>
        <h1>{chapter.title}</h1>
        {chapter.subtitle && <p>{chapter.subtitle}</p>}
      </div>

      <div className="page-body">{children}</div>

      <ChapterNavigation chapter={chapter} />
      <ChapterFooter chapter={chapter} />
    </section>
  );
}

function Card({ title, children, tone = "default" }) {
  return (
    <div className={`card tone-${tone}`}>
      <div className="card-title">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}

function HeroPanel({ eyebrow, title, text }) {
  return (
    <div className="hero-panel">
      <div className="hero-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function OverviewPage() {
  const chapter = chapterMap["/overview"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Business Context"
        title="NEXUS is building a business ecosystem powered by a shared platform foundation."
        text="This blueprint describes the technical infrastructure that enables the wider NEXUS ecosystem of services, partners, users, and operational flows."
      />

      <div className="grid two-up">
        <Card title="Document Purpose" tone="core">
          This document explains how the NEXUS ecosystem is structured from business context to
          platform architecture, while keeping the technical explanation aligned with business logic.
        </Card>

        <Card title="Reading Logic" tone="interaction">
          The reader is guided from customer needs, to services, to ecosystem logic, to platform
          foundation, and only then into the detailed technical architecture.
        </Card>
      </div>

      <div className="grid three-up">
        <Card title="Company" tone="domain">
          NEXUS is the company and business entity operating and growing the ecosystem.
        </Card>
        <Card title="Ecosystem" tone="external">
          The ecosystem includes services, actors, partners, providers, and value flows.
        </Card>
        <Card title="Platform" tone="access">
          The platform is the shared technical infrastructure that enables the ecosystem.
        </Card>
      </div>
    </Page>
  );
}

function CustomersNeedsPage() {
  const chapter = chapterMap["/customers-needs"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Customer Context"
        title="Customer needs come first."
        text="The ecosystem exists because organizations need a coherent way to deliver, operate, and expand digital services without fragmenting experience, control, and operational logic."
      />

      <div className="grid three-up">
        <Card title="Fragmented Services" tone="interaction">
          Customers increasingly consume services that span payments, benefits, commerce,
          support, and partner interactions, yet many organizations still manage them as separate
          disconnected applications.
        </Card>

        <Card title="Operational Complexity" tone="governance">
          As services multiply, organizations struggle with orchestration, consistency,
          control, policy management, and ecosystem scalability.
        </Card>

        <Card title="Need for a Shared Model" tone="core">
          Customers need a coordinated operating model where multiple digital services can
          exist inside one governed and extensible ecosystem.
        </Card>
      </div>

      <div className="grid two-up">
        <Card title="Business Need" tone="domain">
          Enterprises need the ability to launch and manage a broader digital services
          ecosystem under a coherent business model.
        </Card>

        <Card title="Technology Need" tone="data">
          They also need shared technical infrastructure instead of duplicated technical stacks
          for each new service or partner.
        </Card>
      </div>
    </Page>
  );
}

function NexusServicesPage() {
  const chapter = chapterMap["/nexus-services"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Services"
        title="NEXUS delivers services, not just software."
        text="The business value of NEXUS is expressed through service offerings that operate within a broader ecosystem and are enabled by shared infrastructure."
      />

      <div className="grid three-up">
        <Card title="Service Portfolio" tone="domain">
          Nexus services can include payment-related capabilities, benefits-oriented capabilities,
          commerce-related services, partner-enabled experiences, and broader ecosystem functions.
        </Card>

        <Card title="Shared Experience Logic" tone="interaction">
          Even when services differ in business purpose, they can share common digital journeys,
          identity, orchestration, and operational foundations.
        </Card>

        <Card title="Scalable Service Model" tone="core">
          New services should not require building a new technical world each time. They should
          be enabled through the same shared platform model.
        </Card>
      </div>
    </Page>
  );
}

function EcosystemModelPage() {
  const chapter = chapterMap["/ecosystem-model"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Ecosystem"
        title="The value proposition is larger than any single service."
        text="NEXUS operates in an ecosystem model where users, organizations, service providers, partners, and platform capabilities interact in one connected operating environment."
      />

      <div className="grid two-up">
        <Card title="Actors" tone="external">
          The ecosystem includes customers, tenants, partners, service providers, operators,
          and end users, each contributing to value creation and delivery.
        </Card>

        <Card title="Value Flows" tone="interaction">
          The ecosystem creates value through connected flows across services, data,
          transactions, engagement, and operational coordination.
        </Card>
      </div>

      <div className="grid three-up">
        <Card title="Multi-Actor Environment" tone="domain">
          The ecosystem is not a single application but an environment where multiple
          actors participate through structured roles and interactions.
        </Card>

        <Card title="Shared Coordination" tone="core">
          Platform-enabled coordination is what allows services and actors to work together
          as a coherent ecosystem rather than as isolated products.
        </Card>

        <Card title="Growth Logic" tone="governance">
          The ecosystem can expand over time by introducing more services, more actors,
          and more interaction patterns without changing its foundational model.
        </Card>
      </div>
    </Page>
  );
}

function PlatformFoundationPage() {
  const chapter = chapterMap["/platform-foundation"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Platform"
        title="The NEXUS Platform is the technical foundation of the ecosystem."
        text="The platform is not the company and not the whole ecosystem. It is the shared infrastructure that enables services, orchestration, governance, and growth."
      />

      <div className="grid three-up">
        <Card title="Shared Infrastructure" tone="core">
          The platform provides shared technical capabilities that multiple services and actors
          can use without duplicating infrastructure for each business need.
        </Card>

        <Card title="Interface Layer" tone="interaction">
          The platform is consumed through UI and MI as formal interfaces, as well as through
          system APIs where required.
        </Card>

        <Card title="Governed Foundation" tone="governance">
          Governance, tenant separation, control, and lifecycle consistency are platform-level
          characteristics rather than service-specific add-ons.
        </Card>
      </div>

      <div className="grid two-up">
        <Card title="Platform Principles" tone="access">
          The platform foundation is API-oriented, multi-tenant aware, modular, and designed
          to support ecosystem orchestration rather than isolated service delivery.
        </Card>

        <Card title="Why It Matters" tone="domain">
          Without a platform foundation, service growth would create fragmentation,
          duplicated technical work, and weaker ecosystem scalability.
        </Card>
      </div>
    </Page>
  );
}

function SystemArchitectureMapPage() {
  const chapter = chapterMap["/system-architecture-map"];

  return (
    <Page chapter={chapter} minimal>
      <div className="map-page-title">NEXUS Platform Architecture Map</div>

      <div className="map-visual-card">
        <img
          src={architectureMapSrc}
          alt="NEXUS Platform Architecture Map"
          className="architecture-map-image"
        />
      </div>
    </Page>
  );
}

function CorePlatformServicesPage() {
  const chapter = chapterMap["/core-platform-services"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Core Services"
        title="Shared platform services enable the ecosystem to operate consistently."
        text="Core platform services are not business domains themselves; they are shared capabilities that support multiple services and actors across the ecosystem."
      />

      <div className="grid three-up">
        <Card title="Identity & Access" tone="access">
          Supports access control, identity context, and interface entry across UI, MI, and system access.
        </Card>

        <Card title="Tenant Context" tone="core">
          Preserves organizational boundaries, tenant behavior, and controlled participation on shared infrastructure.
        </Card>

        <Card title="Workflow & Orchestration" tone="event">
          Supports service coordination, activity sequencing, and operational flow management.
        </Card>

        <Card title="Policy & Governance" tone="governance">
          Enables rules, constraints, lifecycle control, and governance logic at platform level.
        </Card>

        <Card title="Session & Interaction Support" tone="interaction">
          Supports continuity of user and management interactions across multiple service experiences.
        </Card>

        <Card title="Shared Operational Backbone" tone="intelligence">
          Enables common monitoring, observability, and platform-wide intelligence capabilities.
        </Card>
      </div>
    </Page>
  );
}

function EventAutomationModelPage() {
  const chapter = chapterMap["/event-automation-model"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Technical Architecture"
        title="Events and automation turn the platform into an operating system for the ecosystem."
        text="The event and automation model explains how activity signals, triggers, workflows, and system responses support dynamic coordination across the platform."
      />

      <div className="grid three-up">
        <Card title="Event Foundation" tone="event">
          Platform events represent meaningful state changes, service activity, or interaction signals.
        </Card>

        <Card title="Trigger Model" tone="interaction">
          Events can initiate automation flows, notifications, orchestration logic, and operational actions.
        </Card>

        <Card title="Workflow Logic" tone="core">
          Automation allows the platform to coordinate responses across services, actors, and operational layers.
        </Card>
      </div>

      <div className="grid two-up">
        <Card title="Operational Value" tone="intelligence">
          The model improves responsiveness, reduces manual effort, and supports ecosystem scalability.
        </Card>

        <Card title="Architectural Role" tone="domain">
          Event logic is part of the platform operating model, not just a technical add-on.
        </Card>
      </div>
    </Page>
  );
}

function DataArchitecturePage() {
  const chapter = chapterMap["/data-architecture"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Data"
        title="Data architecture supports operational control, ecosystem visibility, and long-term intelligence."
        text="The data architecture explains how data is structured and used to support transactions, operations, analytics, governance, and platform evolution."
      />

      <div className="grid three-up">
        <Card title="Operational Data" tone="data">
          Supports service execution, user activity, workflow state, and transaction-level operation.
        </Card>

        <Card title="Contextual Data" tone="core">
          Supports tenant-specific context, platform rules, ecosystem participation, and service relationships.
        </Card>

        <Card title="Analytical Data" tone="intelligence">
          Supports reporting, insight generation, operational intelligence, and future optimization.
        </Card>

        <Card title="Governed Data" tone="governance">
          Data must align with platform governance, access control, and policy enforcement.
        </Card>

        <Card title="Reusable Data Foundation" tone="access">
          Data structures should support multiple services and interfaces rather than fragmented storage by service.
        </Card>

        <Card title="Platform Role of Data" tone="domain">
          Data is not only stored by the platform; it is used to coordinate, observe, and improve the ecosystem.
        </Card>
      </div>
    </Page>
  );
}

function IntegrationsPage() {
  const chapter = chapterMap["/integrations"];

  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Integrations"
        title="The ecosystem grows through controlled integrations."
        text="The integrations chapter explains how external systems, providers, partners, and supporting technologies connect into the NEXUS ecosystem through the platform."
      />

      <div className="grid three-up">
        <Card title="Partner Integrations" tone="external">
          Enable external ecosystem actors to participate in service delivery and operational flows.
        </Card>

        <Card title="System Integrations" tone="access">
          Enable controlled connectivity with enterprise systems, third-party platforms, and operational tools.
        </Card>

        <Card title="Provider Connectivity" tone="domain">
          Supports participation of external service providers inside the broader ecosystem model.
        </Card>

        <Card title="Integration Governance" tone="governance">
          Integration is managed through consistent access, control, and platform-level policy.
        </Card>

        <Card title="Extensibility by Design" tone="core">
          Integrations allow the ecosystem to expand without forcing redesign of the underlying technical foundation.
        </Card>

        <Card title="Business Outcome" tone="interaction">
          The result is a broader ecosystem that can grow through connection, not through repeated rebuilding.
        </Card>
      </div>
    </Page>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/customers-needs" element={<CustomersNeedsPage />} />
          <Route path="/nexus-services" element={<NexusServicesPage />} />
          <Route path="/ecosystem-model" element={<EcosystemModelPage />} />
          <Route path="/platform-foundation" element={<PlatformFoundationPage />} />
          <Route path="/system-architecture-map" element={<SystemArchitectureMapPage />} />
          <Route path="/core-platform-services" element={<CorePlatformServicesPage />} />
          <Route path="/event-automation-model" element={<EventAutomationModelPage />} />
          <Route path="/data-architecture" element={<DataArchitecturePage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}