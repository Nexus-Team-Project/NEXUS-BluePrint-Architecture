import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function PlatformFoundationPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Enabling Layer"
        title="The platform is the enabling infrastructure, not the main story."
        text="Only after the business and ecosystem logic are clear does the blueprint introduce the platform itself: the shared infrastructure that makes coordinated service operation possible."
      />

      <div className="grid three-up">
        <Card title="Shared Foundation" tone="core">
          The platform provides a common infrastructure layer that supports multiple services and
          operational flows without recreating technical foundations for each service.
        </Card>

        <Card title="Enablement Role" tone="interaction">
          Its purpose is to enable organizations to operate services and ecosystems more effectively,
          not to replace the business logic of those services.
        </Card>

        <Card title="Scalability" tone="intelligence">
          A shared platform foundation allows service growth, ecosystem expansion, and reuse of
          operational capabilities without equivalent growth in complexity.
        </Card>
      </div>

      <div className="grid two-up">
        <Card title="Interfaces" tone="access">
       The platform is accessed through user interfaces, management interfaces, system APIs, and agent interfaces, enabling interaction by users, organizations, external systems, and AI-driven agents.
        </Card>

        <Card title="Consistency" tone="governance">
          The foundation supports consistency across identity, control, operational logic, and
          service coordination.
        </Card>
      </div>
    </Page>
  );
}

export default PlatformFoundationPage;