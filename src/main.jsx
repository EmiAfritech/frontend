import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider, ModaltriggerProvider } from "./context/AuthProvider";
import { Sessions } from "./api/sessions.jsx";
import "./language/language_translation.jsx";
import "devextreme/dist/css/dx.light.css";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ModaltriggerProvider>
        <App />
      </ModaltriggerProvider>
    </AuthProvider>
  </React.StrictMode>
);
