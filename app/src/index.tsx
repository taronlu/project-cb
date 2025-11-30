import { createRoot } from "react-dom/client";

import { Provider } from "./components/ui/provider";
import Root from "./components/Root";

import "./global.css";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <Root />
  </Provider>
);
