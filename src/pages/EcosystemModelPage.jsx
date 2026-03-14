import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function EcosystemModelPage({ chapter }) {
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

export default EcosystemModelPage;