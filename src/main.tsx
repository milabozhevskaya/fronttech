import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

const root = document.getElementById("root") || document.createElement("div");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
