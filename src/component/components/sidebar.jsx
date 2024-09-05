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
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState, useContext } from "react";
import { LogOut } from "./modals";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import afriquetek_logo from "../../assets/images/afriquetek_logo.png"
import ecg_logo from "../../assets/images/ecg_logo.jpg"
import wafi_logo from "../../assets/images/wafi_logo.jpg"
import ugnpa from "../../assets/images/ugnpa.png"

export function Sidebar() {
  const { auth } = useContext(AuthContext);
  const [isLoading] = useState(false);
  const { t } = useTranslation();
  const userRole = auth?.role;
  console.log(auth.organizationName)
  const Sidebar_logo = 
  auth.organizationName === "electricity company of ghana limited"
  ? ecg_logo 
  : auth.organizationName === "Waficapital" 
  ? wafi_logo 
  : auth.organizationName === "Uganda NPA" 
  ? ugnpa
  : afriquetek_logo;



  //Auditor Tabs
  const AuditorMainTabs = () => {
    return (
      <>
        <li className="flex flex row items-center p-3">
          <FaThList className="icons" />
          <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("overview")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <NavLink to="/risk-identification" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("newRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("mitigateRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("reviewRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("report")}</NavLink>
        </li>
        <LogOut/>
      </>
    );
  };
  //Admin Tabs
  const AdminMainTabs = () => {
    return (
      <>
        <li className="flex flex row items-center p-3">
          <FaThList className="icons" />
          <NavLink to="/dashboard"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("overview")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <NavLink to="/risk-identification"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("newRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("mitigateRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("reviewRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("monitorRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <NavLink to="/employees"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("users")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUsers className="icons" />
          <NavLink to="/department"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("departments")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("report")}</NavLink>
        </li>
        <LogOut/>
      </>
    );
  };
  //General Manager Tabs
  const GeneralManagerMainTabs = () => {
    return (
      <>
        <li className="flex flex row items-center p-3">
          <FaThList className="icons" />
          <NavLink to="/dashboard"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("overview")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <NavLink to="/risk-identification"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("newRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("mitigateRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("reviewRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("monitorRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <NavLink to="/employees"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("users")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUsers className="icons" />
          <NavLink to="/department"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("departments")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("report")}</NavLink>
        </li>
        <LogOut/>
      </>
    );
  };

  //Manager Tabs
  const ManagerMainTabs = () => {
    return (
      <>
        <li className="flex flex row items-center p-3">
          <FaThList className="icons" />
          <NavLink to="/dashboard"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("overview")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <NavLink to="/risk-identification"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("newRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("mitigateRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("reviewRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("monitorRisk")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <NavLink to="/employees" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("users")}</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>{t("report")}</NavLink>
        </li>
        <LogOut/>
      </>
    );
  };

  return (
    <div className="sidebar-container bg-[#2B6CB0]">
      <div className="sidebar-header mb-1">
        <img
          src={Sidebar_logo}
          style={{ height: 80, borderRadius: 20 }}
        />
        <span>{t("riskApplication")}</span>
      </div>
      <div className="sidebar-main">
        <ul>
          <Sessions />
          {userRole === "ADMIN" && AdminMainTabs()}
          {userRole === "GENERALMANAGER" && GeneralManagerMainTabs()}
          {userRole === "MANAGER" && ManagerMainTabs()}
          {userRole === "AUDITOR" && AuditorMainTabs()}

          <LoadingPopup isLoading={isLoading} />
        </ul>
      </div>
    </div>
  );
}
