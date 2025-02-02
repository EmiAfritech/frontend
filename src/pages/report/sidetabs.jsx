import "../../component/comstyles/component.css";
import { NavLink } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState, useContext } from "react";
import { t } from "i18next";
import { AuthContext } from "../../context/AuthContext";


export function ReportSideTabs2() {
  const [isLoading] = useState(false);
  const { auth } = useContext(AuthContext);
  const userRole = auth?.role;

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
              <NavLink to="risk-status-report" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("riskStatusReport")}</NavLink>
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
              <NavLink to=""style={({ isActive }) => ({ color: isActive? "black": "black", borderBottom: `2px solid ${isActive ? 'blue' : 'blue'}` })}>{t("report")}</NavLink>
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
              <NavLink to="risk-status-report" style={({ isActive }) => ({ color: isActive? "blue": "black", borderBottom: `2px solid ${isActive ? 'red' : 'blue'}`})}>{t("riskStatusReport")}</NavLink>
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



export const Tabs = [
  {
    title: "Balance Scorecard",
  },
  {
    title: "Operational Effeciency",
  },
  {
    title: "Strategic Performance",
  },
  {
    title: "System Goals",
  },
  {
    title: "Badges",
  },
];


export default function ReportSideTabs({ onTabChange }) {
    const [activeTab, setActiveTab] = useState(Tabs[0].title);
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
      onTabChange(tab);
    };
  
    return (
      <div>
        {/* Tabs Navigation */}
        <div className="flex p-6 justify-center">
          <ul className="flex flex-row space-x-4 border-b border-gray-300">
            {Tabs.map((tab) => (
              <li key={tab.title}>
                <button
                  onClick={() => handleTabChange(tab.title)}
                  className={`text-md p-4 ${activeTab === tab.title ? 'text-[#08376B] border-b-2 border-[#08376B]' : 'text-black'}`}
                >
                  <span className="ml-2 transition duration-300 ease-out">
                    {tab.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }



