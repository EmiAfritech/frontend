import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Dashboard } from "./pages/dasboard/dashboard";
import { RiskMonitoring } from "./pages/riskmonitoring/riskmonitoring";
import { Sidebar } from "./component/components/sidebar";
import { Riskreview } from "./pages/riskreview/riskreview";
import { Department } from "./pages/Departments/department";
import { Employees } from "./pages/employees/employees";
import { Report } from "./pages/report/report";
import { ReportRiskAdvice } from "./pages/report/advice";
import { ReportRiskMitigation } from "./pages/report/mitgation";
import { ReportRiskDashboard } from "./pages/report/dashboard";
import { ReportRiskImpact } from "./pages/report/impact";
import { ReportRiskChatbot } from "./pages/report/chatbot";
import { RiskView } from "./pages/riskmonitoring/riskview";
import { HighLowRisk } from "./pages/riskmonitoring/HighLowtab";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes path="/" element={<Sidebar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/risk-monitoring" element={<RiskMonitoring />} />
        <Route path="/risk-review" element={<Riskreview />} />
        <Route path="/department" element={<Department />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/RiskView" element={<RiskView />} />
        <Route path="/high-&-Low-Risk" element={<HighLowRisk />} />
        <Route path="/report" element={<Report />}>
          <Route index element={<ReportRiskDashboard />} />
          <Route path="advice" element={<ReportRiskAdvice />} />
          <Route path="mitigation" element={<ReportRiskMitigation />} />
          <Route path="impact" element={<ReportRiskImpact />} />
          <Route path="chatbot" element={<ReportRiskChatbot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
