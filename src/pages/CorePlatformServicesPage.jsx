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

export default CorePlatformServicesPage;