import "../comstyles/component.css";
import {
  FaCopy,
  FaClipboardList,
  FaClipboardCheck,
  FaSignOutAlt,
  FaUserFriends,
  FaUsers,
  FaRegShareSquare,
  FaPencilAlt,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState } from "react";
import { LogOut } from "./modals";

export function Sidebar() {
  const [isLoading] = useState(false);

  const userRole = localStorage.getItem("role");
  

  //Auditor Tabs
  const AuditorMainTabs = () => {
    return (
      <>
        <li className="flex flex row items-center p-3">
          <FaThList className="icons" />
          <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Overview</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <NavLink to="/risk-identification" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>New Risk</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Mitigate Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Review Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reporting</NavLink>
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
          <NavLink to="/dashboard"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Overview</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <NavLink to="/risk-identification"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>New Risk</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Mitigate Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Review Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Monitor Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <NavLink to="/employees"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Users</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUsers className="icons" />
          <NavLink to="/department"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Departments</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reporting</NavLink>
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
          <NavLink to="/dashboard"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Overview</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <NavLink to="/risk-identification"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>New Risk</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Mitigate Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Review Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Monitor Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <NavLink to="/employees"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Users</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUsers className="icons" />
          <NavLink to="/department"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Departments</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reporting</NavLink>
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
          <NavLink to="/dashboard"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Overview</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <NavLink to="/risk-identification"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>New Risk</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Mitigate Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Review Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Monitor Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <NavLink to="/employees" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Users</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reporting</NavLink>
        </li>
        <LogOut/>
      </>
    );
  };

  return (
    <div className="sidebar-container bg-slate-100">
      <div className="sidebar-header mb-1">
        <img
          src="https://static.africa-press.net/ghana/sites/18/2022/04/img-62599904dbcbf.jpg"
          style={{ width: 200, height: 80, borderRadius: 20 }}
        />
        <span>RISK APPLICATION</span>
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
