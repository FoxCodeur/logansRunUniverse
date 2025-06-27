import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { DataProvider } from "./context/DataContext";
import { PortfolioProvider } from "../src/context/PortfolioProvider"; // Ajoute ceci
import "./styles/index.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <DataProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </DataProvider>
  </BrowserRouter>
);
