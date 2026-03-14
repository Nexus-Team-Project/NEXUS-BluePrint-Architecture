import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function DataArchitecturePage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Architecture"
        title="Data supports operation, visibility, and long-term ecosystem intelligence."
        text="The data architecture explains how the system supports operational state, organizational context, and analytical understanding across services and ecosystem activity."
      />

      <div className="grid three-up">
        <Card title="Operational Data" tone="data">
Supports the operational state of services, transactions, and system processes required for day-to-day service execution.        </Card>

        <Card title="Event Data" tone="core">
Event data captures activity signals across services, users, and ecosystem operations.
These events drive automation, coordination, and analytical insight.</Card>

        <Card title="Analytical Data" tone="intelligence">
          Supports reporting, visibility, insight generation, and operational improvement.
        </Card>

        <Card title="Governed Data" tone="governance">
          Data must align with policy, access control, and structured platform governance.
        </Card>

        <Card title="Shared Data Foundation" tone="access">
          Data structures support multiple services and interfaces across the platform rather than fragmented data silos.
        </Card>

        <Card title="Ecosystem Visibility" tone="interaction">
          Data gives organizations and NEXUS a better ability to understand how services and actors interact over time.
        </Card>

        <Card title="Contextual Data" tone="core">
          Supports tenant context, service relationships, roles, and control structures.
        </Card>
      </div>
    </Page>
  );
}

export default DataArchitecturePage;