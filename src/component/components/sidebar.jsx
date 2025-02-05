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
import { NavLink } from "react-router-dom";
import LoadingPopup from "../../api/sessions";
import { useState, useContext } from "react";
import { LogOut } from "./modals";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";

import afriquetek_logo from "../../assets/images/afriquetek_logo.png";
import ecg_logo from "../../assets/images/ecg_logo.jpg";
import wafi_logo from "../../assets/images/wafi_logo.jpg";
import ugnpa from "../../assets/images/ugnpa.png";
import Cookies from 'js-cookie';

export function Sidebar() {
  const { auth } = useContext(AuthContext);
  const [isLoading] = useState(false);
  const { t } = useTranslation();
  const userRole = JSON.parse(Cookies.get("role"));

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
  const NavItem = ({ to, icon: Icon, label }) => (
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
  );

  // Tab components for each role
  const AuditorTabs = () => (
    <>
      <NavItem to="/dashboard" icon={FaThList} label={t("overview")} />
      <NavItem to="/risk-identification" icon={FaRegShareSquare} label={t("newRisk")} />
      <NavItem to="/risk-mitigation" icon={FaPencilAlt} label={t("mitigateRisk")} />
      <NavItem to="/risk-review" icon={FaClipboardList} label={t("reviewRisk")} />
      <NavItem to="/report" icon={FaCopy} label={t("report")} />
      <NavItem to="#" icon={FaClipboardList} label="Governance" />
      <NavItem to="#" icon={FaCopy} label="Compliance" />
      <LogOut />
    </>
  );

  const AdminTabs = () => (
    <>
      <NavItem to="/dashboard" icon={FaThList} label={t("overview")} />
      <NavItem to="/risk-identification" icon={FaRegShareSquare} label={t("newRisk")} />
      <NavItem to="/risk-mitigation" icon={FaPencilAlt} label={t("mitigateRisk")} />
      <NavItem to="/risk-review" icon={FaClipboardList} label={t("reviewRisk")} />
      <NavItem to="/risk-monitoring" icon={FaClipboardCheck} label={t("monitorRisk")} />
      <NavItem to="/employees" icon={FaUserFriends} label={t("users")} />
      <NavItem to="/department" icon={FaUsers} label={t("departments")} />
      <NavItem to="/report" icon={FaCopy} label={t("report")} />
      <NavItem to="#" icon={FaClipboardList} label="Governance" />
      <NavItem to="#" icon={FaCopy} label="Compliance" />
      <LogOut />
    </>
  );

  const GeneralManagerTabs = () => (
    <>
      <NavItem to="/dashboard" icon={FaThList} label={t("overview")} />
      <NavItem to="/risk-identification" icon={FaRegShareSquare} label={t("newRisk")} />
      <NavItem to="/risk-mitigation" icon={FaPencilAlt} label={t("mitigateRisk")} />
      <NavItem to="/risk-review" icon={FaClipboardList} label={t("reviewRisk")} />
      <NavItem to="/risk-monitoring" icon={FaClipboardCheck} label={t("monitorRisk")} />
      <NavItem to="/employees" icon={FaUserFriends} label={t("users")} />
      <NavItem to="/department" icon={FaUsers} label={t("departments")} />
      <NavItem to="/report" icon={FaCopy} label={t("report")} />
      <NavItem to="#" icon={FaClipboardList} label="Governance" />
      <NavItem to="#" icon={FaCopy} label="Compliance" />
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
      <NavItem to="#" icon={FaClipboardList} label="Governance" />
      <NavItem to="#" icon={FaCopy} label="Compliance" />
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
      case "AUDITOR":
        return <AuditorTabs />;
      default:
        return <AuditorTabs />;
    }
  };

  return (
    <div className="sidebar-container bg-[#07073C]">
      <div className="sidebar-header mb-1 h-[20%] bg-sky-50">
        <img
          src={SidebarLogo}
          style={{ height: 80, borderRadius: 20 }}
          alt="Organization Logo"
        />
        <span>{t("riskApplication")}</span>
      </div>
      <div className="sidebar-main">
        <ul>
          {renderTabsByRole()}
          <LoadingPopup isLoading={isLoading} />
        </ul>
      </div>
    </div>
  );
}
