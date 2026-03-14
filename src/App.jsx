import { HashRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/nexus-logo.png";
import { chapters, sectionOrder, chapterMap } from "./data/chapters";

import OverviewPage from "./pages/OverviewPage";
import CustomersNeedsPage from "./pages/CustomersNeedsPage";
import NexusServicesPage from "./pages/NexusServicesPage";
import EcosystemModelPage from "./pages/EcosystemModelPage";
import PlatformFoundationPage from "./pages/PlatformFoundationPage";
import SystemArchitectureMapPage from "./pages/SystemArchitectureMapPage";
import CorePlatformServicesPage from "./pages/CorePlatformServicesPage";
import EventAutomationModelPage from "./pages/EventAutomationModelPage";
import DataArchitecturePage from "./pages/DataArchitecturePage";
import IntegrationsPage from "./pages/IntegrationsPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const node = document.getElementById("content-top");
    if (node) {
      node.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const grouped = useMemo(
    () =>
      sectionOrder.map((section) => ({
        section,
        items: chapters.filter((chapter) => chapter.section === section),
      })),
    []
  );

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="brand-block">
          <a href="https://nexus-payment.com/" className="brand-link">
            <img src={logo} alt="NEXUS" className="brand-logo" />
          </a>

          <div className="brand-title-stack">
            <div className="brand-line brand-line-2">
              ENTERPRISE DIGITAL SERVICES ECHOSYSTEM
            </div>
            <div className="brand-tag">ARCHITECTURE BLUEPRINT</div>
          </div>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          ☰ Sections
        </button>

        <div className={`sidebar-inner ${mobileMenuOpen ? "open" : ""}`}>
          {grouped.map(({ section, items }) => (
            <div key={section} className="sidebar-group">
              <div className="sidebar-group-title">{section}</div>

              <nav className="nav">
                {items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-number">{item.number}</span>
                    <span className="nav-title">{item.title}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>

      <main className="content" id="content-top">
        {children}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<CustomersNeedsPage chapter={chapterMap["/customers-needs"]} />}
          />
          <Route
            path="/overview"
            element={<OverviewPage chapter={chapterMap["/overview"]} />}
          />
          <Route
            path="/customers-needs"
            element={<CustomersNeedsPage chapter={chapterMap["/customers-needs"]} />}
          />
          <Route
            path="/services-through-nexus"
            element={<NexusServicesPage chapter={chapterMap["/services-through-nexus"]} />}
          />
          <Route
            path="/ecosystem-model"
            element={<EcosystemModelPage chapter={chapterMap["/ecosystem-model"]} />}
          />
          <Route
            path="/platform-foundation"
            element={<PlatformFoundationPage chapter={chapterMap["/platform-foundation"]} />}
          />
          <Route
            path="/system-architecture-map"
            element={<SystemArchitectureMapPage chapter={chapterMap["/system-architecture-map"]} />}
          />
          <Route
            path="/core-platform-services"
            element={<CorePlatformServicesPage chapter={chapterMap["/core-platform-services"]} />}
          />
          <Route
            path="/event-automation-model"
            element={<EventAutomationModelPage chapter={chapterMap["/event-automation-model"]} />}
          />
          <Route
            path="/data-architecture"
            element={<DataArchitecturePage chapter={chapterMap["/data-architecture"]} />}
          />
          <Route
            path="/integrations"
            element={<IntegrationsPage chapter={chapterMap["/integrations"]} />}
          />
        </Routes>
      </Layout>
    </HashRouter>
  );
}