// start of block.js
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./scss/main.scss"

const root = createRoot(document.getElementById('react-block'))
root.render(
  <StrictMode>
    <App appTitle="Block: Create Product or Service"/>
  </StrictMode>
)

// end of block.js
