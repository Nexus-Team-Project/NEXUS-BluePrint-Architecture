import { NavLink } from "react-router-dom";
import { useMemo, useState } from "react";

import logo from "../assets/nexus-logo.png";
import { chapters, sectionOrder } from "../data/chapters";

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
          Sections
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

export default Layout;