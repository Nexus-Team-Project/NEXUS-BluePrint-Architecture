import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function IntegrationsPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Architecture"
        title="Integrations connect the ecosystem to the wider operating environment."
        text="External systems, providers, and partners connect through controlled integration models based on APIs, events, and secure platform interfaces."
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
Better integrations expand ecosystem value while preserving operational control.        </Card>
      </div>
    </Page>
  );
}

export default IntegrationsPage;