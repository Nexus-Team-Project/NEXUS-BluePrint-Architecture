import "./App.css";

function Box({ title, children, className = "" }) {
  return (
    <div className={`box ${className}`}>
      <div className="box-title">{title}</div>
      <div className="box-content">{children}</div>
    </div>
  );
}

function ArrowDown() {
  return <div className="arrow-down">↓</div>;
}

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>NEXUS Platform Architecture</h1>
        <p>
          Visual architecture document for a multi-tenant, event-driven,
          white-label SaaS platform
        </p>
      </header>

      <section className="panel">
        <h2>1. High-Level System Architecture</h2>

        <div className="grid-3">
          <Box title="NEXUS Admin Console" className="frontend">
            Platform governance<br />
            Global operations
          </Box>
          <Box title="Tenant Admin Console" className="frontend">
            Local service management<br />
            User administration
          </Box>
          <Box title="End User Channels" className="frontend">
            Portal / App<br />
            Service interaction
          </Box>
        </div>

        <ArrowDown />

        <Box title="API Gateway" className="gateway wide">
          Authentication · Routing · Policies · Rate Limiting
        </Box>

        <ArrowDown />

        <div className="grid-3">
          <Box title="Identity & Access Service" className="service">
            Auth<br />
            Authorization<br />
            RBAC
          </Box>
          <Box title="Tenant Management Service" className="service">
            Provisioning<br />
            Lifecycle<br />
            Configuration
          </Box>
          <Box title="Product Service" className="service">
            Global products<br />
            Tenant assignment<br />
            Local enablement
          </Box>
        </div>

        <div className="grid-3 mt">
          <Box title="User Management Service" className="service">
            User lifecycle<br />
            Grouping<br />
            Admin actions
          </Box>
          <Box title="Automation Engine" className="automation">
            Trigger<br />
            Condition<br />
            Action
          </Box>
          <Box title="Event Processing Layer" className="event">
            Ingestion<br />
            Normalization<br />
            Routing
          </Box>
        </div>

        <ArrowDown />

        <div className="grid-2">
          <Box title="Data Layer" className="data">
            Operational DB<br />
            Event Store<br />
            Analytics Views<br />
            Audit Data
          </Box>
          <Box title="External Integrations" className="external">
            CRM · Payments · Messaging · BI Tools · 3rd Party APIs
          </Box>
        </div>
      </section>

      <section className="panel">
        <h2>2. Frontend vs Backend</h2>

        <div className="split">
          <div className="column frontend-zone">
            <h3>Frontend</h3>
            <Box title="NEXUS Admin UI" className="frontend">
              Platform administration
            </Box>
            <Box title="Tenant Admin UI" className="frontend">
              Tenant operations and analytics
            </Box>
            <Box title="User Channels" className="frontend">
              Portal / App / Service views
            </Box>
          </div>

          <div className="column backend-zone">
            <h3>Backend</h3>
            <Box title="API Gateway" className="gateway">
              Controlled access to platform services
            </Box>
            <Box title="Core Platform Services" className="service">
              Identity · Tenants · Products · Users · Notifications
            </Box>
            <Box title="Operational Intelligence" className="event">
              Events · Sessions · Analytics · Automation
            </Box>
            <Box title="Persistence & Integrations" className="data">
              Operational DB · Event Store · External Systems
            </Box>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2>3. Platform Service Domains</h2>

        <div className="grid-3">
          <Box title="Identity & Access">Authentication, authorization, RBAC</Box>
          <Box title="Tenant Management">Provisioning, lifecycle, configuration</Box>
          <Box title="Product Service">Catalog, assignment, enablement</Box>
          <Box title="User Management">Provisioning, lifecycle, grouping</Box>
          <Box title="Event Service">Ingestion, enrichment, distribution</Box>
          <Box title="Session Service">Context, engagement grouping</Box>
          <Box title="Automation Service">Workflow execution, trigger handling</Box>
          <Box title="Analytics Service">Aggregation, metrics, insights</Box>
          <Box title="Notification Service">Outbound messaging and alerts</Box>
        </div>
      </section>

      <section className="panel">
        <h2>4. Event / Automation Flow</h2>

        <div className="flow-row">
          <div className="flow-step">User Action</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Event Generated</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Event Store</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Session Context</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Automation Rules</div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">Notifications / Analytics</div>
        </div>
      </section>
    </div>
  );
}

export default App;