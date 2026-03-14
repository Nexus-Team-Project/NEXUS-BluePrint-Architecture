import React from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./data/routes";
export default function AppRoutes() {
  return (
    <Routes>
      {appRoutes.map(({ path, component: Component, chapter }) => (
        <Route
          key={path}
          path={path}
          element={<Component chapter={chapter} />}
        />
      ))}
    </Routes>
  );
}