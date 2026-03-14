import "./App.css";

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}