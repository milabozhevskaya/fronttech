import React from "react";

import ReactDOM from "react-dom/client";

import { App } from "./app/App";
import "@mantine/core/styles.css";
import "shared/styles/main.scss";

const root = document.getElementById("root") || document.createElement("div");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
