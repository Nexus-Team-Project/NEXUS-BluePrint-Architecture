import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function EcosystemModelPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Ecosystem Logic"
        title="Services become more powerful when they operate within a connected ecosystem."
        text={`The NEXUS ecosystem enables multiple participants to collaborate around digital services. 
Organizations operate services for their users, while partners, providers, and platforms contribute capabilities, integrations, and additional value.

Through this model, services can extend beyond a single organization and evolve into broader digital ecosystems where multiple participants collaborate, contribute capabilities, and create new value.

Over time, these ecosystems can grow into open digital marketplaces where organizations, partners, providers, and users interact within a shared service environment.`}
      />

      <div className="grid three-up">

        <Card title="Organizations" tone="interaction">
          Organizations remain the primary operators of services and the anchor point of the ecosystem.
        </Card>

        <Card title="Service Consumers" tone="domain">
          Consumers receive value through multiple connected services rather than isolated interactions.
          Their participation across services drives ecosystem demand and activity.
        </Card>

        <Card title="Partners & Providers" tone="external">
          Partners, suppliers, and providers expand the ecosystem by contributing capabilities,
          services, and interactions.
        </Card>

        <Card title="Value Flows" tone="core">
          The ecosystem is defined by connected flows of service delivery, participation,
          interaction, and operational coordination.
        </Card>

        <Card title="Coordination Model" tone="governance">
          A coherent ecosystem requires structure, not just connectivity.
          It needs defined roles, relationships, and operating logic.
        </Card>

        <Card title="Growth Logic" tone="intelligence">
          Ecosystem growth expands service value and participation while maintaining
          coordination and operational coherence.
        </Card>

      </div>
    </Page>
  );
}

export default EcosystemModelPage;