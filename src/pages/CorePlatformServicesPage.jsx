import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function CorePlatformServicesPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Shared Capabilities"
        title="Core platform services support multiple services across the ecosystem."
        text="These are not the business services themselves. They are the shared capabilities that make coordinated operation, control, and scale possible."
      />

      <div className="grid three-up">
        <Card title="Identity & Access" tone="access">
          Supports access control, participation control, and access points across user and management contexts.
        </Card>

        <Card title="Tenant Management" tone="core">
          Preserves organizational boundaries and controlled operation on shared infrastructure.
        </Card>

        <Card title="Workflow & Coordination" tone="event">
Supports service sequencing, orchestration, and event-driven platform coordination.        </Card>

        <Card title="Policy & Governance" tone="governance">
          Supports rules, constraints, and platform-wide control logic.
        </Card>

        <Card title="Service Interaction Layer" tone="interaction">
          Enables continuity across user-facing and management-facing service journeys.
        </Card>

        <Card title="Shared Operational Backbone" tone="intelligence">
          Supports observability, monitoring, and platform-wide operational awareness.
        </Card>
      </div>
    </Page>
  );
}

export default CorePlatformServicesPage;