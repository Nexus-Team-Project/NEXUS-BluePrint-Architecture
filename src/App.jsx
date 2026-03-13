import { HashRouter, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/nexus-logo.png";
import overviewDiagram from "./assets/nexus-echosystem-model.png";

const chapters = [
  {
    number: "01",
    title: "Overview",
    path: "/overview",
    section: "FOUNDATION",
    subtitle: "Why organizations need a better way to operate digital services.",
  },
  {
    number: "02",
    title: "Customers & Needs",
    path: "/customers-needs",
    section: "FOUNDATION",
    subtitle: "Why service growth creates operational complexity for organizations.",
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

const sectionOrder = ["FOUNDATION", "ECOSYSTEM", "PLATFORM", "ARCHITECTURE"];

const chapterMap = Object.fromEntries(
  chapters.map((chapter, index) => [chapter.path, { ...chapter, index }])
);

const architectureMapSrc = `${process.env.PUBLIC_URL}/architecture/nexus-architecture-map.png`;

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const node = document.getElementById("content-top");
    if (node) {
      node.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const grouped = useMemo(
    () =>
      sectionOrder.map((section) => ({
        section,
        items: chapters.filter((chapter) => chapter.section === section),
      })),
    []
  );

  const closeMobileMenu = () => setMobileMenuOpen(false);

return (
  <div className="app-shell">
    <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="brand-block">
        <a href="https://nexus-payment.com/" className="brand-link">
          <img src={logo} alt="NEXUS" className="brand-logo" />
        </a>

        <div className="brand-title-stack">
          <div className="brand-line brand-line-2">
            ENTERPRISE DIGITAL SERVICES ECHOSYSTEM
          </div>
          <div className="brand-tag">
            ARCHITECTURE BLUEPRINT
          </div>
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
function OperatingModelPage() {
  return (
    <section className="page page-minimal">
      <div className="operating-model">
        <div className="operating-model-header">
          <div className="operating-model-kicker">NEXUS Architecture Blueprint</div>
          <h1>NEXUS Operating Model</h1>
          <p className="operating-model-intro">
            The NEXUS model enables organizations to operate digital services for their users
            and evolve those services into structured service ecosystems.
          </p>
        </div>

        <div className="operating-diagram-card">
          <div className="operating-diagram">
            <div className="diagram-node node-organizations">
              <div className="diagram-node-title">Organizations</div>
              <div className="diagram-node-text">
                Operate services for their users
              </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-node node-services">
              <div className="diagram-node-title">Services</div>
              <div className="diagram-node-text">
                Deliver structured value across multiple needs
              </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-node node-users">
              <div className="diagram-node-title">Users</div>
              <div className="diagram-node-text">
                Receive value through digital service interactions
              </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-node node-ecosystems">
              <div className="diagram-node-title">Service Ecosystems</div>
              <div className="diagram-node-text">
                Services connect with partners, providers, and additional capabilities
              </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-node node-platform">
              <div className="diagram-node-title">NEXUS Platform</div>
              <div className="diagram-node-text">
                Provides the infrastructure enabling this model
              </div>
            </div>
          </div>
        </div>

        <div className="operating-model-notes">
          <div className="operating-note">
            <strong>Organizations</strong> are the operating entity.
          </div>
          <div className="operating-note">
            <strong>Services</strong> are how value is delivered.
          </div>
          <div className="operating-note">
            <strong>Ecosystems</strong> emerge as services connect and expand.
          </div>
          <div className="operating-note">
            <strong>The platform</strong> exists to enable this operating model.
          </div>
        </div>
      </div>
    </section>
  );
}
function OverviewPage() {
  const chapter = chapterMap["/overview"];

  return (
    <Page chapter={chapter}>
      <div className="overview-fullscreen-hero">
        <img
          src="/images/nexus-ecosystem.png"
          alt="NEXUS Ecosystem"
        />
      </div>

      <HeroPanel
        eyebrow="Business Context"
        title="Organizations today are expected to continuously deliver meaningful value to their users."
        text="Organizations are expected to operate a growing range of digital services across customers, employees, and partners."
      />

      <div className="story-block">
        <p>
          Operating and coordinating these services across providers, systems, and user interactions becomes increasingly complex.
        </p>

        <p>
          NEXUS introduces a structured model that enables organizations to operate and expand digital service ecosystems.
        </p>
      </div>

      <div className="grid three-up">
        <Card title="Organizations" tone="interaction">
          Organizations are the starting point of the model.
        </Card>

        <Card title="Users" tone="domain">
          Users receive value through services.
        </Card>

        <Card title="Enablement" tone="core">
          NEXUS enables structured and scalable service operation.
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
        eyebrow="Operational Reality"
        title="The challenge is not only creating services. It is operating them well."
        text="As organizations expand service offerings, complexity grows across providers, processes, interactions, and data flows."
      />

      <div className="story-block">
        <p>
          Organizations today operate in environments where users expect continuous access to
          valuable digital services.
        </p>

        <p>
          Employees expect benefits and engagement services.
          Customers expect loyalty programs, financial capabilities, and personalized offerings.
          Partners increasingly interact with organizations through digital service channels.
        </p>

        <p>
          As a result, organizations are expanding the range of services they provide to their users.
        </p>

        <p>
          However, managing these services is not simple.
        </p>

        <p>
          Each service often involves different suppliers, integrations, operational processes,
          user interactions, and data flows. As more services are introduced, organizations must
          manage growing complexity across multiple systems and providers.
        </p>

        <p>
          In many cases, services are introduced individually over time, without a unified
          operational model. This creates fragmentation, operational inefficiencies, and limited
          scalability.
        </p>

        <p>
          Organizations therefore face a structural challenge:
        </p>

        <p className="highlight-line">
          how to operate multiple services for their users in a coordinated, scalable, and manageable way.
        </p>

        <p>
          This need creates the foundation for the NEXUS model described in the following sections.
        </p>
      </div>

      <div className="grid two-up">
        <Card title="Growing Service Count" tone="interaction">
          Service expansion is natural, but it introduces new suppliers, processes, and operating
          demands that are difficult to coordinate over time.
        </Card>

        <Card title="Lack of a Unified Model" tone="governance">
          Without a structured model, organizations accumulate fragmented services rather than a
          scalable service system.
        </Card>
      </div>
    </Page>
  );
}

function NexusServicesPage() {
const chapter = chapterMap["/services-through-nexus"];
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Service Model"
        title="Organizations operate services for their users through the NEXUS model."
        text="The business logic of NEXUS is service enablement. The company helps organizations operate and expand digital services in a coordinated way."
      />

      <div className="grid three-up">
        <Card title="User-Facing Services" tone="interaction">
          Organizations can operate services that deliver direct value to users across benefits,
          engagement, financial capabilities, loyalty, and everyday digital utility.
        </Card>

        <Card title="Operationally Structured" tone="core">
          Services are not treated as isolated launches. They operate through a consistent model
          that supports coordination, scalability, and control.
        </Card>

        <Card title="Expandable Over Time" tone="external">
          As new capabilities, partners, and service types are added, the service model can grow
          into a wider ecosystem without losing coherence.
        </Card>
      </div>

      <div className="grid two-up">
        <Card title="What NEXUS Provides" tone="domain">
          NEXUS provides the enablement model through which organizations can run multiple services
          for users with more consistency and less operational fragmentation.
        </Card>

        <Card title="Why This Matters" tone="governance">
          The more services organizations operate, the greater the need for a structured model that
          supports growth without increasing complexity linearly.
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
        eyebrow="Ecosystem Logic"
        title="Services become more valuable when they connect into a broader ecosystem."
        text="Over time, services can extend beyond one-to-one delivery and become part of a wider model involving partners, suppliers, providers, and coordinated value flows."
      />

      <div className="grid three-up">
        <Card title="Organizations" tone="interaction">
          Organizations remain the primary operators of services and the anchor point of the ecosystem.
        </Card>

        <Card title="Users" tone="domain">
          Users receive value through multiple connected services, not through a single isolated interaction.
        </Card>

        <Card title="Partners & Providers" tone="external">
          Partners, suppliers, and providers expand the ecosystem by contributing capabilities,
          services, and interactions.
        </Card>

        <Card title="Value Flows" tone="core">
          The ecosystem is defined by connected flows of service delivery, participation, interaction,
          and operational coordination.
        </Card>

        <Card title="Coordination Model" tone="governance">
          A coherent ecosystem requires structure, not just connectivity. It needs defined roles,
          relationships, and operating logic.
        </Card>

        <Card title="Growth Logic" tone="intelligence">
          Ecosystem growth should expand service value and participation without creating uncontrolled complexity.
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
        eyebrow="Enabling Layer"
        title="The platform is the enabling infrastructure, not the main story."
        text="Only after the business and ecosystem logic are clear does the blueprint introduce the platform itself: the shared infrastructure that makes coordinated service operation possible."
      />

      <div className="grid three-up">
        <Card title="Shared Foundation" tone="core">
          The platform provides a common infrastructure layer that supports multiple services and
          operational flows without recreating technical foundations for each service.
        </Card>

        <Card title="Enablement Role" tone="interaction">
          Its purpose is to enable organizations to operate services and ecosystems more effectively,
          not to replace the business logic of those services.
        </Card>

        <Card title="Scalability" tone="intelligence">
          A shared platform foundation allows service growth, ecosystem expansion, and reuse of
          operational capabilities without equivalent growth in complexity.
        </Card>
      </div>

      <div className="grid two-up">
        <Card title="Interfaces" tone="access">
          The platform is accessed through UI, MI, and controlled system interfaces, enabling both
          user-facing and management-facing operation.
        </Card>

        <Card title="Consistency" tone="governance">
          The foundation supports consistency across identity, control, operational logic, and
          service coordination.
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
        eyebrow="Shared Capabilities"
        title="Core platform services support multiple services across the ecosystem."
        text="These are not the business services themselves. They are the shared capabilities that make coordinated operation, control, and scale possible."
      />

      <div className="grid three-up">
        <Card title="Identity & Access" tone="access">
          Supports access control, participation control, and interface entry across user and management contexts.
        </Card>

        <Card title="Tenant Context" tone="core">
          Preserves organizational boundaries and controlled operation on shared infrastructure.
        </Card>

        <Card title="Workflow & Coordination" tone="event">
          Supports service sequencing, orchestration, and coordinated platform behavior.
        </Card>

        <Card title="Policy & Governance" tone="governance">
          Supports rules, constraints, and platform-wide control logic.
        </Card>

        <Card title="Interaction Support" tone="interaction">
          Enables continuity across user-facing and management-facing service journeys.
        </Card>

        <Card title="Shared Operational Backbone" tone="intelligence">
          Supports observability, monitoring, and platform-wide operational awareness.
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
        eyebrow="Architecture"
        title="Events and automation support service coordination at scale."
        text="Once services and platform foundations are in place, event and automation models explain how the ecosystem responds, coordinates, and operates dynamically."
      />

      <div className="grid three-up">
        <Card title="Events" tone="event">
          Events represent meaningful activity across services, users, and operations.
        </Card>

        <Card title="Triggers" tone="interaction">
          Trigger logic allows events to initiate responses, workflows, and coordinated actions.
        </Card>

        <Card title="Automation" tone="core">
          Automation reduces manual coordination and supports scalable service operation across the ecosystem.
        </Card>

        <Card title="Operational Flow" tone="domain">
          The model helps services interact in a structured way instead of relying on isolated processes.
        </Card>

        <Card title="Responsiveness" tone="intelligence">
          The ecosystem becomes more adaptive when activity signals can drive timely actions.
        </Card>

        <Card title="Scalable Operation" tone="governance">
          Structured automation supports growth without requiring equivalent growth in manual control.
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
        eyebrow="Architecture"
        title="Data supports operation, visibility, and long-term ecosystem learning."
        text="The data architecture explains how the system supports operational state, organizational context, and analytical understanding across services and ecosystem activity."
      />

      <div className="grid three-up">
        <Card title="Operational Data" tone="data">
          Supports service execution, user activity, process state, and day-to-day operation.
        </Card>

        <Card title="Contextual Data" tone="core">
          Supports tenant context, service relationships, roles, and control structures.
        </Card>

        <Card title="Analytical Data" tone="intelligence">
          Supports reporting, visibility, insight generation, and operational improvement.
        </Card>

        <Card title="Governed Data" tone="governance">
          Data must align with policy, access control, and structured platform governance.
        </Card>

        <Card title="Reusable Foundation" tone="access">
          Data structures should support multiple services and interfaces rather than fragmented data silos.
        </Card>

        <Card title="Ecosystem Visibility" tone="interaction">
          Data gives organizations and NEXUS a better ability to understand how services and actors interact over time.
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
        eyebrow="Architecture"
        title="Integrations connect the ecosystem to the wider operating environment."
        text="External systems, providers, and partners connect through controlled integration models that extend capability without breaking the platform structure."
      />

      <div className="grid three-up">
        <Card title="Provider Integrations" tone="external">
          Enable suppliers and providers to contribute capabilities into the wider service model.
        </Card>

        <Card title="Partner Integrations" tone="interaction">
          Enable ecosystem participants to connect services, interactions, and value delivery into the model.
        </Card>

        <Card title="Enterprise Systems" tone="access">
          Enable organizations to connect internal systems and operational tools where needed.
        </Card>

        <Card title="Governed Connectivity" tone="governance">
          Integrations are controlled through platform rules, access logic, and lifecycle discipline.
        </Card>

        <Card title="Extensibility" tone="core">
          The ecosystem grows through connection and extension, not by rebuilding the technical model each time.
        </Card>

        <Card title="Business Outcome" tone="domain">
          Better integrations expand service potential while preserving operational coherence.
        </Card>
      </div>
    </Page>
  );
}
function OverviewWithOperatingModel() {
  return (
    <>
      <OperatingModelPage />
      <OverviewPage />
    </>
  );
}
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewWithOperatingModel />} />
          <Route path="/overview" element={<OverviewWithOperatingModel />} />
          <Route path="/customers-needs" element={<CustomersNeedsPage />} />
          <Route path="/services-through-nexus" element={<NexusServicesPage />} />
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