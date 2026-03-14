import React from "react";
import Card from "../components/Card";
import HeroPanel from "../components/HeroPanel";
import Page from "../components/Page";

function OverviewPage({ chapter }) {
  return (
    <Page chapter={chapter}>
      <HeroPanel
        title="NEXUS enables organizations to transform isolated services into coordinated digital ecosystems."
        text="Organizations can move beyond fragmented service operations and coordinate multiple services through a structured ecosystem model."
      />

      <div className="story-block">
        <p>
          Organizations no longer operate a single digital service. They operate
          multiple services, programs, partners, and interactions.
        </p>

        <p>
          NEXUS provides the operating model that allows these services to
          function as a coordinated ecosystem rather than fragmented initiatives.
        </p>
      </div>

      <div className="nexus-map">
        <div className="map-layer map-users">
  <div className="map-box">
    <div className="map-title">Service Demand</div>
    <div className="map-text">
      Users, employees, customers engaging with digital services
    </div>
  </div>
</div>
        <div className="map-layer map-participants">
          <div className="map-box">
            <div className="map-title">Ecosystem Participants</div>
            <div className="map-text">
              Organizations, partners, and providers participating in the ecosystem.
Participants may operate services, provide capabilities, integrate systems,
and contribute new value into the ecosystem.
            </div>
          </div>
        </div>

        <div className="map-layer map-services">
          <div className="map-services-title">Composable Service Programs</div>

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
            <div className="map-title">NEXUS Ecosystem Enabler</div>
            <div className="map-text">
              Shared infrastructure enabling service operation, integrations,
              automation, and ecosystem growth.
            </div>
          </div>
        </div>
      </div>

      <div className="story-block">
        <p>
          NEXUS provides a model that enables organizations to move beyond
          isolated services and operate coordinated service ecosystems.
        </p>

        <p>
          Instead of managing individual services separately, organizations can
          structure their offerings as interconnected programs that evolve
          through ecosystem participation.
        </p>

        <p>
          In the NEXUS model, organizations operate services for their users
          while enabling partners, providers, and platforms to contribute
          capabilities into the ecosystem.
        </p>

        <p>
          Over time, these ecosystems can expand beyond the boundaries of a
          single organization, allowing new participants to join, contribute
          value, and create new interactions between services.
        </p>

        <p>
          This evolution enables service ecosystems to gradually develop into
          open digital marketplaces where organizations, partners, providers,
          and users participate in a shared environment of services,
          capabilities, and value exchange.
        </p>

        <p>
          Over time, participants within the ecosystem can both consume and
          provide services, creating continuously expanding networks of value.
        </p>
      </div>

      <div className="grid three-up">
        <Card title="Ecosystem First" tone="interaction">
          Services are designed as part of broader ecosystems rather than
          isolated products. Organizations operate services that connect users,
          providers, and partners into coordinated service environments.
        </Card>

        <Card title="Composability" tone="core">
          Capabilities can be combined, extended, and recomposed to support new
          services and interactions. Organizations can continuously evolve their
          service ecosystems without rebuilding their operational foundations.
        </Card>

        <Card title="Open Participation" tone="intelligence">
          Ecosystems allow multiple participants to contribute capabilities and
          services. Organizations, partners, and providers can join and expand
          the ecosystem over time, enabling new forms of collaboration and
          value creation.
        </Card>
      </div>
    </Page>
  );
}

export default OverviewPage;