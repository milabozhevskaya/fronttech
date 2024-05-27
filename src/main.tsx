import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import "./index.css";
import { setupStore } from "./store";

const root = document.getElementById("root") || document.createElement("div");

const store = setupStore();

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
