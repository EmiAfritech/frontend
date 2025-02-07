import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider, ModaltriggerProvider } from "./context/AuthProvider";
import "./language/language_translation.jsx";
import "devextreme/dist/css/dx.light.css";
import "./index.css";
import { ToastProvider } from "./component/components/notifications.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ModaltriggerProvider>
        <ToastProvider />
        <App />
      </ModaltriggerProvider>
    </AuthProvider>
  </React.StrictMode>
);
