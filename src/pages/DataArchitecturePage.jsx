import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function DataArchitecturePage({ chapter }) {
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

export default DataArchitecturePage;