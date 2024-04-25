import { createRoot } from "react-dom/client";
import { App } from "./app/app";

import "@/app/styles/layout.scss";

const container =
  document.getElementById("root") || document.createElement("div");
const root = createRoot(container);
root.render(<App />);
