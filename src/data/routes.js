import CustomersNeedsPage from "../pages/CustomersNeedsPage";
import OverviewPage from "../pages/OverviewPage";
import NexusServicesPage from "../pages/NexusServicesPage";
import EcosystemModelPage from "../pages/EcosystemModelPage";
import PlatformFoundationPage from "../pages/PlatformFoundationPage";
import SystemArchitectureMapPage from "../pages/SystemArchitectureMapPage";
import CorePlatformServicesPage from "../pages/CorePlatformServicesPage";
import EventAutomationModelPage from "../pages/EventAutomationModelPage";
import DataArchitecturePage from "../pages/DataArchitecturePage";
import IntegrationsPage from "../pages/IntegrationsPage";
import { chapterMap } from "./chapters";

export const appRoutes = [
  {
    path: "/",
    component: CustomersNeedsPage,
    chapter: chapterMap["/customers-needs"],
  },
  {
    path: "/customers-needs",
    component: CustomersNeedsPage,
    chapter: chapterMap["/customers-needs"],
  },
  {
    path: "/overview",
    component: OverviewPage,
    chapter: chapterMap["/overview"],
  },
  {
  path: "/services-through-nexus",
  component: NexusServicesPage,
  chapter: chapterMap["/services-through-nexus"],
  },
  {
    path: "/ecosystem-model",
    component: EcosystemModelPage,
    chapter: chapterMap["/ecosystem-model"],
  },
  {
    path: "/platform-foundation",
    component: PlatformFoundationPage,
    chapter: chapterMap["/platform-foundation"],
  },
  {
    path: "/system-architecture-map",
    component: SystemArchitectureMapPage,
    chapter: chapterMap["/system-architecture-map"],
  },
  {
    path: "/core-platform-services",
    component: CorePlatformServicesPage,
    chapter: chapterMap["/core-platform-services"],
  },
  {
    path: "/event-automation-model",
    component: EventAutomationModelPage,
    chapter: chapterMap["/event-automation-model"],
  },
  {
    path: "/data-architecture",
    component: DataArchitecturePage,
    chapter: chapterMap["/data-architecture"],
  },
  {
    path: "/integrations",
    component: IntegrationsPage,
    chapter: chapterMap["/integrations"],
  },
];