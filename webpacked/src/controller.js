// start of controller.js

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./scss/main.scss"

const root = createRoot(document.getElementById('react-controller'))
root.render(
  <StrictMode>
    <App appTitle="Controller: Create Product or Service"/>
  </StrictMode>
)

// end of controller.js
