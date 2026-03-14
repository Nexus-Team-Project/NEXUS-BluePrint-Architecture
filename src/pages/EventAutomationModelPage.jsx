import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function EventAutomationModelPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Architecture"
        title="Events and automation support service coordination at scale."
        text="Once services and platform foundations are in place, event and automation models explain how the ecosystem responds, coordinates, and operates dynamically."
      />

      <div className="grid three-up">
        <Card title="Events" tone="event">
          Events represent meaningful activity across services, users, and operations.
        </Card>

        <Card title="Triggers" tone="interaction">
          Trigger logic allows events to initiate workflows, service reactions, and coordinated actions.
        </Card>

        <Card title="Automation" tone="core">
          Automation reduces manual coordination and supports scalable service operation across the ecosystem.
        </Card>

        <Card title="Operational Flow" tone="domain">
          The model helps services interact in a structured way instead of relying on isolated processes.
        </Card>

        <Card title="Responsiveness" tone="intelligence">
          The ecosystem becomes more adaptive when activity signals can drive timely actions.
        </Card>

        <Card title="Scalable Operation" tone="governance">
          Structured automation supports growth without requiring equivalent growth in manual control.
        </Card>
      </div>
    </Page>
  );
}

export default EventAutomationModelPage;