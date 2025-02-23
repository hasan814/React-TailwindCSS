import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MyProvider } from "./context/MyProvider.tsx";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MyProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </MyProvider>
  </BrowserRouter>
);
