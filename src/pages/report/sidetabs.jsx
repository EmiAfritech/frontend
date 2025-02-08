import "../../component/comstyles/component.css";
import { NavLink } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState, useContext } from "react";
import { t } from "i18next";
import { AuthContext } from "../../context/AuthContext";
import { ReportRiskDashboard } from "./dashboard";
import { ReportLikelyhoodVsImpact } from "./likelyhoodvsimpact";
import { ReportRiskAppetite } from "./riskAppetite";
import { ReportRiskMitigation } from "./mitgation";
import { RiskStatusReport } from "./riskStatusReport";
import { ReviewNeedingRisksReport } from "./reviewNeedingRisks";
import { ReportRiskAdvice } from "./advice";
import { useTranslation } from "react-i18next";





export function ReportSideTabs() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("report"); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  console.log(activeTab)
  const renderComponent = () => {
    switch (activeTab) {
      case "report":
        return <ReportRiskDashboard/>;
      case "likelyhoodvsimpact":
        return <ReportLikelyhoodVsImpact/>;
      case "riskAppetite":
        return <ReportRiskAppetite/>;
      case "mitigationByDate":
        return <ReportRiskMitigation/>;
      case "riskStatusReport":
        return <RiskStatusReport/>;
      case "allOpenedRiskNeedingReview":
        return <ReviewNeedingRisksReport/>;
      case "riskAdvice":
        return <ReportRiskAdvice/>;
      default:
        return <ReportRiskDashboard/>;
    }
  };

  return (
    <div>
      <LoadingPopup/>
      <ReportingNavigation onTabChange={handleTabChange} />
      <div className="mt-6">
        {renderComponent()}
      </div>
    </div>
  );
}


export const Tabs = [
  {
    title: "report"
  },
  {
    title: "likelyhoodvsimpact",
  },
  {
    title: "riskAppetite",
  },
  {
    title: "mitigationByDate",
  },
  {
    title: "riskStatusReport",
  },
  {
    title: "allOpenedRiskNeedingReview",
  },
  {
    title: "riskAdvice",
  },
];


export function ReportingNavigation({ onTabChange }) {
    const [activeTab, setActiveTab] = useState(Tabs[0].title);
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
      onTabChange(tab);
    };
  
    return (
      <div>
        {/* Tabs Navigation */}
        <div className="flex p-6 justify-center">
          <ul className="flex flex-row space-x-1 border-b border-gray-300">
            {Tabs.map((tab) => (
              <li key={tab.title}>
                <button
                  onClick={() => handleTabChange(tab.title)}
                  className={`text-md font-thin font-[Open_Sans] p-4 ${activeTab === tab.title ? 'text-[#04026b] border-b-2 border-[#04026b]' : 'text-black'}`}
                >
                  <span className=" transition duration-300 ease-out">
                    {t(tab.title)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}



