import React from "react";

export default function OperatingModelPage() {
  return (
    <section className="page page-minimal">
      <div className="operating-model">
        <div className="operating-model-header">
          <div className="operating-model-kicker">NEXUS Architecture Blueprint</div>
          <h1>NEXUS Operating Model</h1>
          <p className="operating-model-intro">
            The NEXUS model enables organizations to operate digital services for their users
            and evolve those services into structured service ecosystems.
          </p>
        </div>

        <div className="operating-diagram-card">
          <div className="operating-diagram">
            <div className="diagram-node node-organizations">
              <div className="diagram-node-title">Organizations</div>
              <div className="diagram-node-text">
                Operate services for their users
              </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-node node-services">
              <div className="diagram-node-title">Services</div>
              <div className="diagram-node-text">
                Deliver structured value across multiple needs
              </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-node node-users">
              <div className="diagram-node-title">Users</div>
              <div className="diagram-node-text">
                Receive value through digital service interactions
              </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-node node-ecosystems">
              <div className="diagram-node-title">Service Ecosystems</div>
              <div className="diagram-node-text">
                Services connect with partners, providers, and additional capabilities
              </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-node node-platform">
              <div className="diagram-node-title">NEXUS Platform</div>
              <div className="diagram-node-text">
                Provides the infrastructure enabling this model
              </div>
            </div>
          </div>
        </div>

        <div className="operating-model-notes">
          <div className="operating-note">
            <strong>Organizations</strong> are the operating entity.
          </div>
          <div className="operating-note">
            <strong>Services</strong> are how value is delivered.
          </div>
          <div className="operating-note">
            <strong>Ecosystems</strong> emerge as services connect and expand.
          </div>
          <div className="operating-note">
            <strong>The platform</strong> exists to enable this operating model.
          </div>
        </div>
      </div>
    </section>
  );
}