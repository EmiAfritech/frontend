import "../../component/comstyles/component.css";
import { NavLink } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState } from "react";
// import { useTranslation } from "react-i18next";
import { t } from "i18next";


export function ReportSideTabs() {
  const [isLoading] = useState(false);
  

  const userRole = localStorage.getItem("role");

  const GeneralnAdminMainTabs = () => {
    return (
      <>
            <li>
              <NavLink to="" style={({ isActive }) => ({ color: isActive? "blue": "blue", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("report")}</NavLink>
            </li>
            <li>
              <NavLink to="likelyhood-vs-impact" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("likelyhoodvsimpact")}</NavLink>
            </li>
            <li>
              <NavLink to="risk-appetite" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("riskAppetite")}</NavLink>
            </li>
            <li>
              <NavLink to="mitigation" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("mitigationByDate")}</NavLink>
            </li>
            <li>
              <NavLink to="risk-status-report" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("riskStatus")}</NavLink>
            </li>
            <li>
              <NavLink to="review-needing-risks" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>
                {t("allOpenedRiskNeedingReview")}
              </NavLink>
            </li>
            <li>
              <NavLink to="audit-trail" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("auditTrail")}</NavLink>
            </li>
            <li>
              <NavLink to="advice" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("riskAdvice")}</NavLink>
            </li>
            {/* <li>
              <NavLink to="chatbot">Risk chat box</NavLink>
            </li> */}
      </>
      
    );
  };
const ManagernAuditor = () => {
    return (
      <>
        <li>
              <NavLink to=""style={({ isActive }) => ({ color: isActive? "black": "black", borderBottom: `2px solid ${isActive ? 'blue' : 'blue'}`})}>{t("report")}</NavLink>
            </li>
            <li>
              <NavLink to="likelyhood-vs-impact" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("likelyhoodvsimpact")}</NavLink>
            </li>
            <li>
              <NavLink to="risk-appetite" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("riskAppetite")}</NavLink>
            </li>
            <li>
              <NavLink to="mitigation" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("mitigationByDate")}</NavLink>
            </li>
            <li>
              <NavLink to="risk-status-report" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("riskStatus")}</NavLink>
            </li>
            <li>
              <NavLink to="review-needing-risks" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>
              {t("allOpenedRiskNeedingReview")}
              </NavLink>
            </li>
            <li>
              <NavLink to="advice" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("riskAdvice")}</NavLink>
            </li>
            {/* <li>
              <NavLink to="chatbot">Risk chat box</NavLink>
            </li> */}
      </>
      
    );
  };
  return (
    <div className="report-container">
        <div className="report-main">
          <ul>  
            <Sessions />
            {userRole === "ADMIN" && GeneralnAdminMainTabs()}
            {userRole === "GENERALMANAGER" && GeneralnAdminMainTabs()}
            {userRole === "MANAGER" && ManagernAuditor()}
            {userRole === "AUDITOR" && ManagernAuditor()}
            <LoadingPopup isLoading={isLoading} />
          </ul>
        </div>
    </div>
  );
}


/**
 * import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function ReportSideTabs() {
  return (
    <div className="report-container">
      <div className="report-main mt-20 mx-10">
        <ul>
          <li>
            <Link to="">Report</Link>
          </li>
          
          <li>
            <Link to="risk-appetite">Risk Appetite</Link>
          </li>
          <li>
            <Link to="mitigation">Mitigations By Date</Link>
          </li>
          <li>
            <Link to="risk-status-report">Risk Status</Link>
          </li>
          <li>
            <Link to="review-needing-risks">
              All Opened Risks Needing a Review
            </Link>
          </li>
          <li>
            <Link to="audit-trail">Audit Trail</Link>
          </li>
          <li>
            <Link to="advice">Risk Advice</Link>
          </li>

        </ul>
      </div>
    </div>
  );
}
*/







