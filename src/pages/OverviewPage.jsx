import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function OverviewPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        eyebrow="Ecosystem Model"
        title="NEXUS provides the operating model for dynamic digital service ecosystems."
        text="In the NEXUS ecosystem, participants may operate services,
provide capabilities, consume services, or extend the ecosystem
through integrations."
      />

      <div className="nexus-map">
        <div className="map-layer map-users">
          <div className="map-box">
            <div className="map-title">End Users</div>
            <div className="map-text">
              People interacting with digital services
            </div>
          </div>
        </div>

        <div className="map-layer map-participants">
          <div className="map-box">
            <div className="map-title">Ecosystem Participants</div>
            <div className="map-text">
              Organizations, individuals, and services connected to the ecosystem.
              Participants may operate services, provide capabilities,
              consume services, or extend the ecosystem through integrations.
            </div>
          </div>
        </div>

        <div className="map-layer map-services">
          <div className="map-services-title">Service Programs</div>

          <div className="map-services-grid">
            <div className="service-pill">Benefits</div>
            <div className="service-pill">Loyalty</div>
            <div className="service-pill">Financial</div>
            <div className="service-pill">Employee</div>
            <div className="service-pill">Utilities</div>
          </div>
        </div>

        <div className="map-layer map-platform">
          <div className="platform-bar">
            <div className="map-title">NEXUS Platform</div>
            <div className="map-text">
              Shared infrastructure enabling service operation, integrations,
              automation, and ecosystem growth.
            </div>
          </div>
        </div>
      </div>

      <div className="story-block">
        <p>
          Digital ecosystems are not built around fixed roles. Participants
          within the ecosystem may operate services, provide capabilities,
          integrate systems, or consume services depending on the context.
        </p>

        <p>
          The NEXUS model provides a structured platform foundation that
          enables these interactions to operate coherently while allowing
          services and ecosystem relationships to expand over time.
        </p>
      </div>

      <div className="grid three-up">
        <Card title="Ecosystem Participants" tone="interaction">
          Organizations, individuals, and services participating in the
          ecosystem with dynamic roles.
        </Card>

        <Card title="Service Ecosystem" tone="core">
          Service programs such as benefits, loyalty, financial services,
          employee programs, and digital utilities.
        </Card>

        <Card title="Platform Foundation" tone="intelligence">
          The NEXUS platform provides the shared infrastructure enabling
          integrations, automation, and scalable ecosystem operation.
        </Card>
      </div>
    </Page>
  );
}

export default OverviewPage;