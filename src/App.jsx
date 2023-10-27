import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "./pages/login/login";
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
import { RiskView } from "./pages/riskidentification/riskview";
import { HighLowRisk } from "./pages/riskmonitoring/HighLowtab";
import { RiskStatusReport } from "./pages/report/riskStatusReport";
import { ReportRiskAppetite } from "./pages/report/riskAppetite";
import { ReviewNeedingRisksReport } from "./pages/report/reviewNeedingRisks";
import { ReportAuditTrail } from "./pages/report/auditTrail";
import { RiskMitigation } from "./pages/riskmitigation/riskmitigation";
import { Login } from "./pages/login/login";
import { ClosedRisk } from "./pages/riskreview/closedrisk";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Sidebar />}>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/risk-identification" element={<RiskView />} />
        <Route path="/risk-monitoring" element={<RiskMonitoring />} />
        <Route path="/risk-review" element={<Riskreview />} />
        <Route path="/risk-mitigation" element={<RiskMitigation />} />
        <Route path="/department" element={<Department />} />
        <Route path="/closed-risks" element={<ClosedRisk />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/high-&-Low-Risk" element={<HighLowRisk />} />
        <Route path="/report" element={<Report />}>
          <Route index element={<ReportRiskDashboard />} />
          <Route path="advice" element={<ReportRiskAdvice />} />
          <Route path="mitigation" element={<ReportRiskMitigation />} />
          <Route path="impact" element={<ReportRiskImpact />} />

          <Route path="risk-status-report" element={<RiskStatusReport />} />

          <Route path="risk-appetite" element={<ReportRiskAppetite />} />
          <Route path="audit-trail" element={<ReportAuditTrail />} />

          <Route
            path="review-needing-risks"
            element={<ReviewNeedingRisksReport />}
          />
          <Route path="chatbot" element={<ReportRiskChatbot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
