import { HashRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import logo from "./assets/nexus-logo.png";

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="brand-block">
          <a href="https://nexus-payment.com/" className="brand-link">
            <img src={logo} alt="NEXUS" className="brand-logo" />
          </a>
          <div className="brand-sub">Platform Documentation</div>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          ☰ Platform Documentation
        </button>

        <div className={`sidebar-inner ${mobileMenuOpen ? "open" : ""}`}>
          <div className="nav-section-title">Platform Documentation</div>

          <nav className="nav">
            <NavLink to="/" end className="nav-link" onClick={closeMobileMenu}>Overview</NavLink>
            <NavLink to="/executive-overview" className="nav-link" onClick={closeMobileMenu}>Executive Overview</NavLink>
            <NavLink to="/vision-positioning" className="nav-link" onClick={closeMobileMenu}>Vision & Positioning</NavLink>
            <NavLink to="/platform-value" className="nav-link" onClick={closeMobileMenu}>Platform Value Proposition</NavLink>
            <NavLink to="/core-principles" className="nav-link" onClick={closeMobileMenu}>Core Platform Principles</NavLink>
            <NavLink to="/platform-actors" className="nav-link" onClick={closeMobileMenu}>Platform Actors</NavLink>
            <NavLink to="/identity-access" className="nav-link" onClick={closeMobileMenu}>Identity & Access Control</NavLink>
            <NavLink to="/product-governance-model" className="nav-link" onClick={closeMobileMenu}>Product Governance Model</NavLink>
            <NavLink to="/operational-intelligence" className="nav-link" onClick={closeMobileMenu}>Operational Intelligence</NavLink>
            <NavLink to="/self-service-onboarding" className="nav-link" onClick={closeMobileMenu}>Self-Service Onboarding</NavLink>
            <NavLink to="/observability-security" className="nav-link" onClick={closeMobileMenu}>Observability, Monitoring & Security</NavLink>
            <NavLink to="/platform-architecture" className="nav-link" onClick={closeMobileMenu}>Platform Architecture</NavLink>
            <NavLink to="/platform-service-domains" className="nav-link" onClick={closeMobileMenu}>Platform Service Domains</NavLink>
            <NavLink to="/success-metrics" className="nav-link" onClick={closeMobileMenu}>Success Metrics</NavLink>
            <NavLink to="/platform-evolution" className="nav-link" onClick={closeMobileMenu}>Platform Evolution</NavLink>
            <NavLink to="/platform-scope" className="nav-link" onClick={closeMobileMenu}>Platform Scope</NavLink>
            <NavLink to="/deployment-model" className="nav-link" onClick={closeMobileMenu}>Platform Deployment Model</NavLink>
            <NavLink to="/extensibility-model" className="nav-link" onClick={closeMobileMenu}>Platform Extensibility Model</NavLink>
          </nav>

          <div className="sidebar-footer">
            <div className="legend-title">Legend</div>
            <div className="legend-item"><span className="dot tone-interaction"></span>Interaction</div>
            <div className="legend-item"><span className="dot tone-access"></span>Access Layer</div>
            <div className="legend-item"><span className="dot tone-core"></span>Shared Core</div>
            <div className="legend-item"><span className="dot tone-domain"></span>Domain Services</div>
            <div className="legend-item"><span className="dot tone-intelligence"></span>Intelligence</div>
            <div className="legend-item"><span className="dot tone-event"></span>Events</div>
            <div className="legend-item"><span className="dot tone-session"></span>Session</div>
            <div className="legend-item"><span className="dot tone-data"></span>Data</div>
            <div className="legend-item"><span className="dot tone-governance"></span>Governance</div>
            <div className="legend-item"><span className="dot tone-external"></span>External Ecosystem</div>
          </div>
        </div>
      </aside>

      <main className="content" id="content-top">
        {children}
        <footer className="page-footer">
          <div>NEXUS Platform Documentation</div>
          <div>Blueprint 1.1 aligned with PRD 2.0 • Enterprise Digital Services Platform</div>
        </footer>
      </main>
    </div>
  );
}

function Page({ title, subtitle, children, badge }) {
  return (
    <section className="page">
      <div className="page-header">
        {badge && <div className="page-badge">{badge}</div>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
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

function QuickLink({ to, title, text }) {
  return (
    <Link to={to} className="quick-link">
      <div className="quick-link-title">{title}</div>
      <div className="quick-link-text">{text}</div>
    </Link>
  );
}

function Divider() {
  return <div className="divider">⇅</div>;
}

function OverviewPage() {
  return (
    <Page
      badge="NEXUS Platform"
      title="The Platform for Enterprise Digital Services"
      subtitle="Enterprise Digital Services Platform — multi-tenant, event-driven, modular SaaS infrastructure for white-label digital value ecosystems with human and machine interaction models."
    >
      <div className="hero-panel">
        <div className="hero-left">
          <div className="hero-kicker">Platform Overview</div>
          <div className="hero-title">
            A governed digital services platform for enterprise-operated service ecosystems
          </div>
          <p>
            NEXUS enables organizations to launch and operate multiple digital services under
            their own brand while relying on a shared platform infrastructure for identity,
            governance, automation, analytics, and extensibility.
          </p>

          <div className="hero-tags">
            <span>Enterprise SaaS</span>
            <span>Multi-Tenant</span>
            <span>White-Label</span>
            <span>Event-Driven</span>
            <span>Automation-First</span>
            <span>AI-Ready</span>
            <span>Integration-Ready</span>
          </div>
        </div>

        <div className="hero-right">
          <Card title="Platform Services" tone="access">
            <strong>The NEXUS platform supports multiple enterprise digital services including:</strong>
            <br /><br />
            • Benefits Programs
            <br />• Engagement Campaigns
            <br />• Loyalty Programs
            <br />• Digital Wallet Services
            <br />• Payment Services
            <br /><br />
            All services operate on the shared NEXUS platform infrastructure.
          </Card>
        </div>
      </div>

      <div className="section-mini-title">Platform Architecture & Capabilities</div>
      <div className="grid-4">
        <QuickLink to="/executive-overview" title="Executive Overview" text="Platform definition, positioning, and service ecosystem." />
        <QuickLink to="/platform-architecture" title="Platform Architecture" text="Unified architectural layers and platform structure." />
        <QuickLink to="/platform-service-domains" title="Platform Service Domains" text="Shared core, domain services, and intelligence services." />
        <QuickLink to="/operational-intelligence" title="Operational Intelligence" text="Events, sessions, analytics, automation, and monitoring." />
        <QuickLink to="/platform-scope" title="Platform Scope" text="What the platform is responsible for and what remains tenant-controlled." />
        <QuickLink to="/deployment-model" title="Deployment Model" text="Cloud SaaS delivery with shared infrastructure and strict isolation." />
        <QuickLink to="/extensibility-model" title="Platform Extensibility" text="How new services are added without platform redesign." />
        <QuickLink to="/success-metrics" title="Success Metrics" text="How platform adoption and engagement will be measured." />
      </div>
    </Page>
  );
}

function ExecutiveOverviewPage() {
  return (
    <Page badge="Section 1" title="Executive Overview" subtitle="Product framing of the NEXUS platform.">
      <div className="grid-2">
        <Card title="Platform Definition" tone="interaction">
          NEXUS is a multi-tenant enterprise SaaS platform designed to enable organizations to deploy,
          operate, and manage digital services through a unified infrastructure.
        </Card>
        <Card title="Platform Positioning" tone="access">
          NEXUS is designed as an <strong>Enterprise Digital Services Platform</strong> that supports
          multiple white-label services operated under enterprise brands.
        </Card>
      </div>
      <div className="grid-2 mt-16">
        <Card title="Service Portfolio" tone="domain">
          The platform supports multiple digital services including benefits, engagement campaigns,
          loyalty, digital wallet services, and payment services.
        </Card>
        <Card title="Architectural Foundation" tone="intelligence">
          The platform is built on a modern event-driven architecture enabling scalable service delivery,
          operational automation, advanced analytics, and service extensibility.
        </Card>
      </div>
    </Page>
  );
}

function VisionPositioningPage() {
  return (
    <Page badge="Section 2" title="Vision & Positioning" subtitle="Strategic direction and long-term platform vision.">
      <div className="grid-2">
        <Card title="Platform Vision" tone="interaction">
          NEXUS aims to become a unified platform for enterprise digital services.
        </Card>
        <Card title="Enterprise Value" tone="access">
          The platform enables organizations to deploy digital services rapidly, operate them under
          their own brand, manage users and permissions, monitor engagement, automate workflows,
          and generate insights through analytics.
        </Card>
      </div>
      <div className="grid-1 mt-16">
        <Card title="Strategic Positioning" tone="external">
          The architecture is designed to support continuous service expansion without platform redesign,
          enabling long-term growth into a broader digital value ecosystem.
        </Card>
      </div>
    </Page>
  );
}

function PlatformValuePage() {
  return (
    <Page badge="Section 3" title="Platform Value Proposition" subtitle="How the platform creates value for enterprise clients and for NEXUS.">
      <div className="grid-2">
        <Card title="For Enterprise Clients" tone="access">
          • launch new digital services quickly
          <br />• manage service operations centrally
          <br />• maintain enterprise-grade governance and security
          <br />• automate operational processes
          <br />• analyze service engagement and performance
        </Card>
        <Card title="For NEXUS" tone="external">
          • scalable SaaS infrastructure
          <br />• ability to operate multiple enterprise tenants and services simultaneously
        </Card>
      </div>
      <div className="grid-1 mt-16">
        <Card title="Examples of Supported Services" tone="domain">
          Benefits Programs • Engagement Campaigns • Loyalty Programs • Digital Wallet Services • Payment Services
        </Card>
      </div>
    </Page>
  );
}

function CorePrinciplesPage() {
  return (
    <Page badge="Section 4" title="Core Platform Principles" subtitle="Architectural principles shaping product and platform design.">
      <div className="grid-3">
        <Card title="Multi-Tenant Architecture" tone="governance">Each enterprise organization operates as an isolated tenant.</Card>
        <Card title="Global Product Governance" tone="core">Products are defined and managed at the platform level by NEXUS.</Card>
        <Card title="Local Service Operation" tone="domain">Tenants operate services within their own organization.</Card>
        <Card title="Event-Driven Infrastructure" tone="event">All meaningful platform activity generates structured events.</Card>
        <Card title="Automation-First Design" tone="intelligence">Workflows are triggered automatically by events.</Card>
        <Card title="Self-Service Enablement" tone="interaction">Organizations can onboard and configure services independently.</Card>
      </div>
    </Page>
  );
}

function PlatformActorsPage() {
  return (
    <Page badge="Section 5" title="Platform Actors" subtitle="Human and machine actors interacting with the platform.">
      <div className="section-mini-title">Human Actors (UI Interfaces)</div>
      <div className="grid-3">
        <Card title="Platform Administrator (NEXUS)" tone="governance">
          Managing enterprise tenants, global products, platform policies, platform activity monitoring, and automation rules.
        </Card>
        <Card title="Tenant Administrator" tone="interaction">
          Managing users and permissions, configuring services, operating services, monitoring service performance,
          and managing tenant configuration.
        </Card>
        <Card title="End Users" tone="domain">
          Users interacting with services operated by enterprise tenants through platform user interfaces.
        </Card>
      </div>

      <div className="section-mini-title mt-16">Machine Actors (Machine Interfaces – MI)</div>
      <div className="grid-3">
        <Card title="AI Agents" tone="intelligence">
          Recommendation engines, automated decision systems, and AI-driven service orchestration interacting with the platform programmatically.
        </Card>
        <Card title="Automation Platforms" tone="event">
          Workflow automation systems and operational automation engines triggering platform workflows through APIs and event-driven integrations.
        </Card>
        <Card title="Enterprise & Partner Systems" tone="external">
          CRM systems, ERP systems, partner APIs, and integration platforms interacting with NEXUS through governed machine identities.
        </Card>
      </div>
    </Page>
  );
}

function IdentityAccessPage() {
  return (
    <Page badge="Section 6" title="Identity, User Management and Access Control" subtitle="Enterprise-grade identity, user lifecycle, and RBAC model.">
      <div className="grid-2">
        <Card title="Capabilities" tone="core">
          • user provisioning
          <br />• user lifecycle management
          <br />• profile management
          <br />• activation / deactivation
          <br />• organizational grouping
        </Card>
        <Card title="RBAC Model" tone="access">
          Platform Scope — NEXUS administrators
          <br />Tenant Scope — enterprise administrators
          <br /><br />This model ensures strict tenant isolation.
        </Card>
      </div>
    </Page>
  );
}

function ProductGovernanceModelPage() {
  return (
    <Page badge="Section 7" title="Product Governance Model" subtitle="Separation between platform ownership and tenant operations.">
      <div className="grid-2">
        <Card title="Global Product Layer (NEXUS)" tone="governance">
          • defining product architecture
          <br />• managing product lifecycle
          <br />• releasing product updates
          <br />• maintaining cross-tenant compatibility
        </Card>
        <Card title="Tenant Service Layer" tone="interaction">
          • enable or disable services
          <br />• configure service parameters
          <br />• manage service content
          <br />• monitor service usage
          <br /><br />Tenants cannot modify the product architecture.
        </Card>
      </div>
    </Page>
  );
}

function OperationalIntelligencePage() {
  return (
    <Page badge="Section 8" title="Operational Intelligence Layer" subtitle="Event-driven intelligence supporting analytics, automation, monitoring, and engagement insights.">
      <div className="grid-2">
        <Card title="Core Functions" tone="intelligence">
          • analytics
          <br />• automation
          <br />• monitoring
          <br />• engagement insights
        </Card>
        <Card title="Event Infrastructure" tone="event">
          Events include metadata such as tenant, user, service, timestamp, and session context.
          Events feed analytics systems, automation workflows, monitoring systems, and engagement metrics.
        </Card>
      </div>
      <div className="grid-2 mt-16">
        <Card title="Session Context" tone="session">
          User activity is grouped into sessions to analyze behavior.
        </Card>
        <Card title="Automation Engine" tone="intelligence">
          Automation workflows follow:
          <br /><br /><strong>Trigger → Conditions → Actions</strong>
          <br /><br />Examples: onboarding workflows, operational alerts, engagement campaigns, administrative notifications.
        </Card>
      </div>
    </Page>
  );
}

function SelfServiceOnboardingPage() {
  return (
    <Page badge="Section 9" title="Self-Service Onboarding" subtitle="Scalable onboarding flow enabling organizations to activate services independently.">
      <div className="flow">
        <div className="flow-step">Organization Registration</div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">Tenant Provisioning</div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">Administrator Creation</div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">Service Selection</div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">Platform Activation</div>
      </div>
    </Page>
  );
}

function ObservabilitySecurityPage() {
  return (
    <Page badge="Section 10" title="Observability, Monitoring & Security" subtitle="Enterprise-grade visibility, monitoring, and security controls.">
      <div className="grid-2">
        <Card title="Observability" tone="intelligence">
          • operational dashboards
          <br />• usage analytics
          <br />• event monitoring
          <br />• performance metrics
        </Card>
        <Card title="Security" tone="governance">
          • tenant data isolation
          <br />• RBAC access control
          <br />• authentication and authorization
          <br />• audit logging
        </Card>
      </div>
    </Page>
  );
}

function PlatformArchitecturePage() {
  return (
    <Page badge="Section 11" title="Platform Architecture" subtitle="High-level architectural layers of the NEXUS platform.">
      <div className="diagram-frame">
        <div className="grid-2">
          <Card title="Interaction Interfaces" tone="interaction">
            Human Interfaces
            <br />• NEXUS Admin Console
            <br />• Tenant Admin Console
            <br />• End User Applications
            <br /><br />
            Machine Interfaces
            <br />• API Clients
            <br />• External Systems
            <br />• AI Agents
          </Card>
          <Card title="Platform Governance & Control" tone="governance">
            Cross-cutting controls across all layers:
            <br />• RBAC
            <br />• Tenant Isolation
            <br />• Policy Enforcement
            <br />• Audit Logging
            <br />• Observability
          </Card>
        </div>

        <Divider />

        <Card title="Access Layer" tone="access">
          API Gateway
          <br />Authentication • Authorization • Routing
          <br />Rate Limiting • API Versioning
        </Card>

        <Divider />

        <Card title="Shared Platform Core" tone="core">
          Identity & Access Service • Tenant Management Service • Product Governance Service •
          User Management Service • Notification Service
        </Card>

        <Divider />

        <Card title="Platform Domain Services" tone="domain">
          Benefits Programs • Engagement Campaigns • Loyalty Programs • Digital Wallet Services • Payment Services
        </Card>

        <Divider />

        <Card title="Operational Intelligence Layer" tone="intelligence">
          Event Processing Infrastructure • Session Context Processing • Automation Engine • Analytics Engine
        </Card>

        <Divider />

        <div className="grid-2">
          <Card title="Data Layer" tone="data">
            Operational Database • Event Store • Analytics Data • Audit & Compliance Logs
          </Card>
          <Card title="External Ecosystem" tone="external">
            CRM Systems • ERP Systems • Messaging Platforms • Payment Networks • BI Platforms • AI Platforms
          </Card>
        </div>
      </div>
    </Page>
  );
}

function PlatformServiceDomainsPage() {
  return (
    <Page badge="Section 12" title="Platform Service Domains" subtitle="Functional service domains forming the operational backbone of the platform.">
      <div className="grid-3">
        <Card title="Shared Platform Core Services" tone="core">
          Identity & Access Service
          <br />Tenant Management Service
          <br />Product Service
          <br />User Management Service
          <br />Configuration Service
          <br />Notification Service
        </Card>
        <Card title="Domain Services" tone="domain">
          Benefits Service
          <br />Campaign Service
          <br />Wallet Service
          <br />Payments Service
          <br />Loyalty Service
        </Card>
        <Card title="Intelligence Services" tone="intelligence">
          Event Processing Service
          <br />Automation Engine
          <br />Analytics Service
          <br />Observability Service
        </Card>
      </div>
    </Page>
  );
}

function SuccessMetricsPage() {
  return (
    <Page badge="Section 13" title="Success Metrics" subtitle="Measures used to evaluate platform performance and growth.">
      <div className="grid-3">
        <Card title="Active Enterprise Tenants" tone="governance">Number of active enterprise tenants operating on the platform.</Card>
        <Card title="Service Adoption Rates" tone="domain">Adoption of services across tenants and user groups.</Card>
        <Card title="Platform Engagement Metrics" tone="intelligence">Activity, interaction depth, and operational usage patterns.</Card>
        <Card title="Service Utilization" tone="data">Usage intensity across products and services.</Card>
        <Card title="Tenant Retention & Expansion" tone="external">Retention, growth, and service expansion over time.</Card>
      </div>
    </Page>
  );
}

function PlatformEvolutionPage() {
  return (
    <Page badge="Section 14" title="Platform Evolution" subtitle="Future expansion paths supported by the platform architecture.">
      <div className="grid-2">
        <Card title="Future Capabilities" tone="intelligence">
          • advanced analytics
          <br />• AI-driven service recommendations
          <br />• advanced automation orchestration
          <br />• integrations with external enterprise systems
        </Card>
        <Card title="Future Platform Services" tone="domain">
          • digital wallet services
          <br />• payment processing capabilities
          <br />• loyalty and rewards programs
        </Card>
      </div>
    </Page>
  );
}

function PlatformScopePage() {
  return (
    <Page badge="Section 16" title="Platform Scope" subtitle="What NEXUS is responsible for and what remains under tenant control.">
      <div className="grid-2">
        <Card title="Platform Responsibilities" tone="core">
          • tenant infrastructure and governance
          <br />• identity and access management
          <br />• product lifecycle management
          <br />• service configuration and operation
          <br />• event-driven automation
          <br />• analytics and operational insights
        </Card>
        <Card title="Tenant Responsibility Boundary" tone="governance">
          The platform does not implement enterprise business logic specific to each organization,
          which remains under tenant control.
        </Card>
      </div>
    </Page>
  );
}

function DeploymentModelPage() {
  return (
    <Page badge="Section 17" title="Platform Deployment Model" subtitle="How NEXUS is delivered and operated in real-world enterprise environments.">
      <div className="grid-2">
        <Card title="Cloud SaaS Delivery" tone="external">
          NEXUS is delivered as a cloud-based SaaS platform operating shared infrastructure with strict tenant isolation.
        </Card>
        <Card title="Deployment Characteristics" tone="access">
          • multi-tenant architecture
          <br />• centralized platform governance
          <br />• tenant-level configuration and operation
          <br />• API-based integrations
          <br />• scalable cloud infrastructure
        </Card>
      </div>
    </Page>
  );
}

function ExtensibilityModelPage() {
  return (
    <Page badge="Section 18" title="Platform Extensibility Model" subtitle="How the platform grows by introducing new services without redesign.">
      <div className="grid-2">
        <Card title="Shared Platform Capabilities" tone="core">
          New services leverage common capabilities including identity and access,
          tenant infrastructure, event infrastructure, automation workflows, and analytics services.
        </Card>
        <Card title="Service Growth Model" tone="domain">
          Each new service is implemented as a domain service integrating with the shared platform core,
          allowing NEXUS to evolve into a multi-service ecosystem while maintaining architectural consistency.
        </Card>
      </div>
    </Page>
  );
}

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/executive-overview" element={<ExecutiveOverviewPage />} />
          <Route path="/vision-positioning" element={<VisionPositioningPage />} />
          <Route path="/platform-value" element={<PlatformValuePage />} />
          <Route path="/core-principles" element={<CorePrinciplesPage />} />
          <Route path="/platform-actors" element={<PlatformActorsPage />} />
          <Route path="/identity-access" element={<IdentityAccessPage />} />
          <Route path="/product-governance-model" element={<ProductGovernanceModelPage />} />
          <Route path="/operational-intelligence" element={<OperationalIntelligencePage />} />
          <Route path="/self-service-onboarding" element={<SelfServiceOnboardingPage />} />
          <Route path="/observability-security" element={<ObservabilitySecurityPage />} />
          <Route path="/platform-architecture" element={<PlatformArchitecturePage />} />
          <Route path="/platform-service-domains" element={<PlatformServiceDomainsPage />} />
          <Route path="/success-metrics" element={<SuccessMetricsPage />} />
          <Route path="/platform-evolution" element={<PlatformEvolutionPage />} />
          <Route path="/platform-scope" element={<PlatformScopePage />} />
          <Route path="/deployment-model" element={<DeploymentModelPage />} />
          <Route path="/extensibility-model" element={<ExtensibilityModelPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
