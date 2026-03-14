import React from "react";
import Page from "../components/Page";

const architectureMapSrc = `${process.env.PUBLIC_URL}/architecture/nexus-architecture-map.png`;

function SystemArchitectureMapPage({ chapter }) {
  return (
    <Page chapter={chapter} minimal>
      <div className="map-page-title">NEXUS Platform Architecture Map</div>

      <div className="map-visual-card">
        <img
          src={architectureMapSrc}
          alt="NEXUS Platform Architecture Map"
          className="architecture-map-image"
        />
      </div>
    </Page>
  );
}

export default SystemArchitectureMapPage;