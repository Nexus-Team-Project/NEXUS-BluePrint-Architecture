import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function NexusServicesPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Service Model"
        title="Organizations operate service programs for their users through the NEXUS model."
        text="The business logic of NEXUS is service enablement through composable programs.
Organizations can combine independent services into structured programs that deliver value to their users and expand over time."
      />

      <div className="grid three-up">
        <Card title="User-Facing Services" tone="interaction">
        Organizations operate modular services that deliver direct value to users across benefits, engagement, financial capabilities, loyalty programs, and everyday digital utilities.
        </Card>

        <Card title="Programs Organize Services" tone="core">
         Services are not operated as isolated launches. They operate as part of structured service programs that support coordination, scalability, and operational control.
        </Card>

        <Card title="Expandable Over Time" tone="external">
          As new capabilities, partners, and service types are added,
          the service model can expand into a broader ecosystem without losing coherence.
        </Card>
      </div>

      <div className="grid two-up">
        <Card title="What NEXUS Provides" tone="domain">
          NEXUS provides the platform and operating model that allows organizations to 
          coordinate multiple services and service programs with consistency and reduced operational fragmentation.
        </Card>

        <Card title="Why This Matters" tone="governance">
          The more services organizations operate, the greater the need for a structured model that
          supports growth without increasing operational complexity linearly.
        </Card>
      </div>
    </Page>
  );
}

export default NexusServicesPage;