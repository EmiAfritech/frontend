import React, { useState } from "react";
import "devextreme/dist/css/dx.light.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider, ModaltriggerProvider } from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ModaltriggerProvider>
        <App />
      </ModaltriggerProvider>
    </AuthProvider>
  </React.StrictMode>
);
