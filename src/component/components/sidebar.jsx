import "../comstyles/component.css";
import {
  FaCopy,
  FaClipboardList,
  FaClipboardCheck,
  FaUserFriends,
  FaUsers,
  FaRegShareSquare,
  FaPencilAlt,
  FaThList,
} from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import LoadingPopup from "../../api/sessions";
import { useState, useContext } from "react";
import { LogOut } from "./modals";
import { useTranslation } from "react-i18next";
import { MdCheckCircle } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import { FaRobot } from "react-icons/fa";

import afriquetek_logo from "../../assets/images/afriquetek_logo.png";
import ecg_logo from "../../assets/images/ecg_logo.jpg";
import wafi_logo from "../../assets/images/wafi_logo.jpg";
import ugnpa from "../../assets/images/ugnpa.png";
import Cookies from 'js-cookie';

export function Sidebar() {
  const { auth } = useContext(AuthContext);
  const [isLoading] = useState(false);
  const { t } = useTranslation();
  const userRole = Cookies.get("role");
  const location = useLocation();

  // Determine the organization logo
  const SidebarLogo =
    auth.organizationName === "electricity company of ghana limited"
      ? ecg_logo
      : auth.organizationName === "Waficapital"
      ? wafi_logo
      : auth.organizationName === "Uganda NPA"
      ? ugnpa
      : afriquetek_logo;

  // Component for individual nav links
  function NavItem  ({ to, icon: Icon, label, active })  {
    return(
      <li className="flex flex-row items-center p-3 px-24">
      <Icon className="icons" />
      <NavLink
        to={to}
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
      >
        {label}
      </NavLink>
    </li>
    )
  }

  // Tab components for each role
  const AuditorTabs = () => (
    <>
      <NavItem to="/dashboard" icon={FaThList} label={t("overview")} />
      <NavItem to="/risk-identification" icon={FaRegShareSquare} label={t("newRisk")} />
      <NavItem to="/risk-mitigation" icon={FaPencilAlt} label={t("mitigateRisk")} />
      <NavItem to="/report" icon={FaCopy} label={t("report")} />
      <LogOut />
    </>
  );

  
  const AdminTabs = () => (
    <>
      <NavItem to="/dashboard" icon={FaThList} label={t("overview")} />
      <NavItem to="/governance" icon={RiGovernmentLine} label="Governance" />
      <NavItem to="/risk-identification" icon={FaRegShareSquare} label={t("newRisk")} />
      <NavItem to="/risk-mitigation" icon={FaPencilAlt} label={t("mitigateRisk")} />
      <NavItem to="/risk-review" icon={FaClipboardList} label={t("reviewRisk")} />
      <NavItem to="/risk-monitoring" icon={FaClipboardCheck} label={t("monitorRisk")} />
      <NavItem to="/employees" icon={FaUserFriends} label={t("users")} />
      <NavItem to="/department" icon={FaUsers} label={t("departments")} />
      <NavItem to="/report" icon={FaCopy} label={t("report")} />
      <NavItem to="/complaince" icon={MdCheckCircle} label="Compliance" />
      <NavItem to="/risk-ai" icon={FaRobot} label="Risk-Ai" />
    </>
  );

  const GeneralManagerTabs = () => (
    <>
      <NavItem to="/dashboard" icon={FaThList} label={t("overview")} />
      <NavItem to="/governance" icon={RiGovernmentLine} label="Governance" />
      <NavItem to="/risk-identification" icon={FaRegShareSquare} label={t("newRisk")} />
      <NavItem to="/risk-mitigation" icon={FaPencilAlt} label={t("mitigateRisk")} />
      <NavItem to="/risk-review" icon={FaClipboardList} label={t("reviewRisk")} />
      <NavItem to="/risk-monitoring" icon={FaClipboardCheck} label={t("monitorRisk")} />
      <NavItem to="/employees" icon={FaUserFriends} label={t("users")} />
      <NavItem to="/department" icon={FaUsers} label={t("departments")} />
      <NavItem to="/report" icon={FaCopy} label={t("report")} />
      <NavItem to="/complaince" icon={MdCheckCircle} label="Compliance" />
      <LogOut />
    </>
  );

  const ManagerTabs = () => (
    <>
      <NavItem to="/dashboard" icon={FaThList} label={t("overview")} />
      <NavItem to="/risk-identification" icon={FaRegShareSquare} label={t("newRisk")} />
      <NavItem to="/risk-mitigation" icon={FaPencilAlt} label={t("mitigateRisk")} />
      <NavItem to="/risk-review" icon={FaClipboardList} label={t("reviewRisk")} />
      <NavItem to="/risk-monitoring" icon={FaClipboardCheck} label={t("monitorRisk")} />
      <NavItem to="/employees" icon={FaUserFriends} label={t("users")} />
      <NavItem to="/report" icon={FaCopy} label={t("report")} />
      <LogOut />
    </>
  );


  

 

  // Function to render tabs based on the role
  const renderTabsByRole = () => {
    switch (userRole) {
      case "ADMIN":
        return <AdminTabs />;
      case "GENERALMANAGER":
        return <GeneralManagerTabs />;
      case "MANAGER":
        return <ManagerTabs />;
      case "ANALYST":
        return <AuditorTabs />;
      default:
        return <AdminTabs />;
    }
  };

  

  return (
    <div className="sidebar-container bg-[#07073C] h-screen flex flex-col">
      <div className="sidebar-header mb-1 h-[20%] flex flex-col items-center">
        <img
          src={SidebarLogo}
          style={{ height: 80, borderRadius: 20 }}
          alt="Organization Logo"
        />
        <span className="text-white">{t("riskApplication")}</span>
      </div>
      <div className="sidebar-main flex-1 overflow-y-auto overflow-x-hidden p-2">
        <ul>
          {renderTabsByRole()}
          <LoadingPopup isLoading={isLoading} />
        </ul>
      </div>
    </div>

  );
}


