import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Home } from "./components/pages/Home";
import { Chucky } from "./components/pages/Chucky";

export const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/chucky"
          element={
            <DefaultLayout>
              <Chucky />
            </DefaultLayout>
          }
        />
      </Routes>
    </HelmetProvider>
  );
};
