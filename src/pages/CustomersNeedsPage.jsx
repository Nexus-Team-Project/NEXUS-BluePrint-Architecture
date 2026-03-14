import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function CustomersNeedsPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Operational Reality"
        title="The challenge is not only creating services. It is operating them well."
        text="As organizations expand service offerings, complexity grows across providers, processes, interactions, and data flows."
      />

      <div className="story-block">
        <p>
          Organizations today operate in environments where users expect continuous access to
          valuable digital services.
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
          However, managing these services is not simple.
        </p>

        <p>
          Each service often involves different suppliers, integrations, operational processes,
          user interactions, and data flows. As more services are introduced, organizations must
          manage growing complexity across multiple systems and providers.
        </p>

        <p>
          In many cases, services are introduced individually over time, without a unified
          operational model. This creates fragmentation, operational inefficiencies, and limited
          scalability.
        </p>

        <p>
          Organizations therefore face a structural challenge:
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
          Service expansion is natural, but it introduces new suppliers, processes, and operating
          demands that are difficult to coordinate over time.
        </Card>

        <Card title="Lack of a Unified Model" tone="governance">
          Without a structured model, organizations accumulate fragmented services rather than a
          scalable service system.
        </Card>
      </div>
    </Page>
  );
}

export default CustomersNeedsPage;