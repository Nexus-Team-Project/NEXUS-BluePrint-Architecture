import React from "react";
import "./App.css";

function ExecutiveOverviewPage() {
  return (
    <div className="content-section">
      <h1>Executive Overview</h1>

      <h2>The Platform for Enterprise Digital Ecosystems</h2>

      <p>
        NEXUS is building the infrastructure for digital value ecosystems.
      </p>

      <p>
        As organizations expand the services they provide to customers and employees,
        fragmented solutions can no longer support the growing complexity of
        payments, benefits, commerce, and engagement.
      </p>

      <p>
        The NEXUS Platform enables organizations to design, launch, and operate
        their own branded digital ecosystems on a unified, extensible platform.
      </p>
    </div>
  );
}

function VisionPositioningPage() {
  return (
    <div className="content-section">
      <h1>Platform Vision</h1>

      <h2>From Digital Services to Digital Ecosystems</h2>

      <p>
        The future of digital engagement is not built from isolated applications.
      </p>

      <p>
        Organizations require a platform capable of orchestrating services,
        partners, financial flows, and user engagement within a single digital
        environment.
      </p>

      <p>
        NEXUS is designed to become the operating layer for enterprise digital ecosystems.
      </p>
    </div>
  );
}

function PlatformValuePage() {
  return (
    <div className="content-section">
      <h1>Platform Value Proposition</h1>

      <p>
        Through a multi-tenant, API-first, event-driven architecture, the NEXUS
        platform enables organizations to:
      </p>

      <ul>
        <li>launch branded digital service ecosystems and wallet environments</li>
        <li>orchestrate payments, benefits, commerce, and partner services</li>
        <li>automate engagement and operational workflows</li>
        <li>leverage analytics and operational intelligence</li>
        <li>prepare their ecosystems for AI-driven operations</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <ExecutiveOverviewPage />
      <VisionPositioningPage />
      <PlatformValuePage />
    </div>
  );
}

export default App;