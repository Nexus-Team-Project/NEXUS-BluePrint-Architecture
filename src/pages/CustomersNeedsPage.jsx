import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function CustomersNeedsPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Operational Reality"
        title="The challenge is not only creating digital services.
The real challenge is operating many services coherently as complexity grows."
        text="As organizations expand service offerings, complexity grows across providers, processes, interactions, and data flows."
      />

      <div className="story-block">
        <p>
          Organizations today operate in environments where users expect continuous access to valuable digital services across multiple channels and ecosystems.
        </p>

        <p>
          Employees expect benefits and engagement services.
          Customers expect loyalty programs, financial capabilities, and personalized offerings.
          Partners increasingly interact with organizations through digital service channels.
        </p>

        <p>
          As a result, organizations are expanding the range of services they provide to their users.
        </p>

        <p>
          However, coordinating these services becomes increasingly difficult as complexity grows.
        </p>

        <p>
          Each service introduces new suppliers, integrations, operational processes, user interactions, and data flows that must be coordinated across the organization.
          As services multiply, the number of integrations grows rapidly, making service environments increasingly difficult to maintain and evolve.
        </p>

        <p>
          In many cases, services are introduced individually over time, without a unified
          operational model. This creates fragmentation, operational inefficiencies, and limited
          scalability.
        </p>

        <p>
          The core problem is not building services.
The core problem is coordinating them. Organizations therefore face a structural challenge:
        </p>

        <p className="highlight-line">
          how to operate multiple services for their users in a coordinated, scalable, and manageable way.
        </p>

        <p>
          This need creates the foundation for the NEXUS model described in the following sections.
        </p>
      </div>

      <div className="grid two-up">
        <Card title="Growing Service Count" tone="interaction">
          Service expansion is natural, but each new service introduces suppliers, processes, and operational dependencies that are increasingly difficult to coordinate.
        </Card>

        <Card title="Lack of a Unified Model" tone="governance">
          Without a structured model, organizations accumulate fragmented services rather than a
          scalable service system.
        </Card>
         <Card title="Integration Complexity" tone="governance">
          Each new service introduces additional integrations, partners, and operational dependencies.
           Over time this creates fragile service environments that are difficult to manage and expand.
        </Card>
      </div>
    </Page>
  );
}

export default CustomersNeedsPage;