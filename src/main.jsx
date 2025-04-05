import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { DataProvider } from "./context/DataContext"; // Import du DataProvider
import "./styles/index.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <DataProvider>
      {" "}
      {/* Englobe l'App avec le DataProvider */}
      <App />
    </DataProvider>
  </BrowserRouter>
);
