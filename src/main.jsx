import React, { useState } from "react";
import "devextreme/dist/css/dx.light.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";

import { ModaltriggerProvider } from "./AuthProvider";
import { RiskViewTable } from "../component/components/tables";

ReactDOM.createRoot(document.getElementById("root")).render(
<>
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>

<ModaltriggerProvider>
<RiskViewTable/>
</ModaltriggerProvider>
</>
);
