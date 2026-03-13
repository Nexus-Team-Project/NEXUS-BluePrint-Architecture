import React from "react";
import ecosystemImage from "./assets/nexus-ecosystem-model.png";

export default function OperatingModelPage() {
  return (
    <section className="page page-minimal">

      <div className="operating-model">

        <div className="operating-model-header">
          <div className="operating-model-kicker">
            NEXUS Architecture Blueprint
          </div>

          <h1>The NEXUS Ecosystem Model</h1>

          <p className="operating-model-intro">
            How organizations operate digital services through NEXUS
            and connect those services into scalable digital ecosystems.
          </p>
        </div>

        <div className="ecosystem-diagram">
          <img
            src={ecosystemImage}
            alt="NEXUS Ecosystem Model"
          />
        </div>

      </div>

    </section>
  );
}