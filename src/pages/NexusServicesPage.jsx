import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function NexusServicesPage({ chapter }) {
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

export default NexusServicesPage;