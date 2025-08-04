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
import { ReportRiskChatbot } from "./pages/report/chatbot";
import { RiskView } from "./pages/riskidentification/riskview";
import { RiskStatusReport } from "./pages/report/riskStatusReport";
import { ReportRiskAppetite } from "./pages/report/riskAppetite";
import { ReviewNeedingRisksReport } from "./pages/report/reviewNeedingRisks";
import { ReportAuditTrail } from "./pages/report/auditTrail";
import { RiskMitigation } from "./pages/riskmitigation/riskmitigation";
import { Login } from "./pages/login/login";
import { ClosedRisk } from "./pages/riskreview/closedrisk";
import { ReportLikelyhoodVsImpact } from "./pages/report/likelyhoodvsimpact";
import { ResetPassword } from "./pages/resetPassword/resetpassword";
import { Sessions } from "./api/sessions";
import { SignUp } from "./pages/signup/signup";
import { ActivationPage } from "./pages/ActivateAccount/activatePage";
import { CreatePasswordPage } from "./pages/createPassword/createPassword";
import { SubscriptionPage } from "./pages/subscription/subscription";
import { VerifyEmail } from "./pages/resetPassword/verifyemail";
import { Compliance } from "./pages/Compliance/complaince";
import { Governance } from "./pages/Governance/governance";
import { AnalyticsAi } from "./frontend-risk-advisor/pages/AnalyticsAi";
import { SettingsAi } from "./frontend-risk-advisor/pages/SettingsAi";
import { HomeAi } from "./frontend-risk-advisor/pages/HomeAi";
import { FeatureDetail } from "./frontend-risk-advisor/pages/FeatureDetail";
import { RiskScoreCard } from "./frontend-risk-advisor/components/RiskScoreCard";

export default function App() {
  return (
    <BrowserRouter>
      <Sessions />
      <Routes path="/" element={<Sidebar />}>
        <Route path="/activate" element={<ActivationPage />} />
        <Route path="/setPassword" element={<CreatePasswordPage />} />
        <Route path="/complaince" element={<Compliance />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/subscription" element={<SubscriptionPage/>} />
        <Route path="/verifyemail" element={<VerifyEmail/>} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/risk-identification" element={<RiskView />} />
        <Route path="/risk-monitoring" element={<RiskMonitoring />} />
        <Route path="/risk-review" element={<Riskreview />} />
        <Route path="/risk-mitigation" element={<RiskMitigation />} />
        <Route path="/department" element={<Department />} />
        <Route path="/closed-risks" element={<ClosedRisk />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/report" element={<Report />}>
          <Route index element={<ReportRiskDashboard />} />
          <Route path="advice" element={<ReportRiskAdvice />} />
          <Route path="mitigation" element={<ReportRiskMitigation />} />

          <Route path="risk-status-report" element={<RiskStatusReport />} />

          <Route path="risk-appetite" element={<ReportRiskAppetite />} />
          <Route path="audit-trail" element={<ReportAuditTrail />} />
          <Route
            path="likelyhood-vs-impact"
            element={<ReportLikelyhoodVsImpact />}
          />

          <Route
            path="review-needing-risks"
            element={<ReviewNeedingRisksReport />}
          />
          <Route path="chatbot" element={<ReportRiskChatbot />} />
        </Route>
        <Route path="/risk-ai" element={<HomeAi />}>
          <Route path="features/:feature" element={<FeatureDetail data-id="a4453m1gz"/>} data-id="ihu3vnod0"/>
          <Route path="analytics" element={<AnalyticsAi data-id="zkaqcxnpm"/>} data-id="6906oed92"/>
          <Route path="settings" element={<SettingsAi data-id="rsvp6or3h"/>} data-id="vlqsdhrsh"/>
          <Route path="/scorecard" element={<RiskScoreCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


