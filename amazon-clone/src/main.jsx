import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import { initialState, reducer } from "./Utility/reducer.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <DataProvider initialState={initialState} reducer={reducer}>
    <App />
  </DataProvider>
);

