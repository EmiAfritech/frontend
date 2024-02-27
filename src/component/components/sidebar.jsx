import "../comstyles/component.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

import { LOGOUT_URL } from "../../api/routes";
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
import { ToastContainer,toast } from "react-toastify";

export function Sidebar() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const userRole = localStorage.getItem("role");
  const notify = () => {
    toast.success("Logging Out Successful", {
      onClose: () => {
        navigate("/", { replace: true });
        localStorage.clear();
      },
    });
  };

  const handleLogOut = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await axios.get(LOGOUT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      notify();
    } catch (error) {
      console.log(error);
    }
  };

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
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Monitored Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Mitigated Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reviewed Risks</NavLink>
        </li>

        <button
          onClick={handleLogOut}
          className="flex flex row items-center p-3">
          <FaSignOutAlt className="icons" />
          LogOut
        </button>
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
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Monitored Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Mitigated Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reviewed Risks</NavLink>
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
        <button
          onClick={handleLogOut}
          className="flex flex row items-center p-3">
          <FaSignOutAlt className="icons" />
          LogOut
        </button>
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
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Monitored Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Mitigated Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review"style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reviewed Risks</NavLink>
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
        <button
          onClick={handleLogOut}
          className="flex flex row items-center p-3">
          <FaSignOutAlt className="icons" />
          LogOut
        </button>
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
          <FaClipboardCheck className="icons" />
          <NavLink to="/risk-monitoring" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Monitored Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <NavLink to="/risk-mitigation" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Mitigated Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <NavLink to="/risk-review" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reviewed Risks</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <NavLink to="/employees" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Users</NavLink>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <NavLink to="/report" style={({ isActive }) => ({ color: isActive? "greenyellow": "white",})}>Reporting</NavLink>
        </li>

        <button
          onClick={handleLogOut}
          className="flex flex row items-center p-3">
          <FaSignOutAlt className="icons" />
          LogOut
        </button>
      </>
    );
  };

  return (
    <div className="sidebar-container bg-[#2B6CB0]">
      <div className="sidebar-header mb-1">
        <img
          src="https://blog.meqasa.com/wp-content/uploads/2020/10/logobanner.jpg"
          style={{ width: 150, height: 100, borderRadius: 100 }}
        />
        <span>RISK APPLICATION</span>
      </div>
      <div className="sidebar-main">
        <ul>
          <ToastContainer onClose={500}/>
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
