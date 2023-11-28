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
import { Link } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState } from "react";

export function Sidebar() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const userRole = localStorage.getItem("role");

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

      localStorage.clear();

      console.log("Logging Out Successful");
      navigate("/", { replace: true });
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
          <Link to="/dashboard">Overview</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <Link to="/risk-identification">New Risk</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <Link to="/risk-monitoring">Monitored Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <Link to="/risk-mitigation">Mitigated Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <Link to="/risk-review">Reviewed Risks</Link>
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
          <Link to="/dashboard">Overview</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <Link to="/risk-identification">New Risk</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <Link to="/risk-monitoring">Monitored Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <Link to="/risk-mitigation">Mitigated Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <Link to="/risk-review">Reviewed Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <Link to="/employees">Users</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUsers className="icons" />
          <Link to="/department">Departments</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <Link to="/report">Reporting</Link>
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
          <Link to="/dashboard">Overview</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <Link to="/risk-identification">New Risk</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <Link to="/risk-monitoring">Monitored Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <Link to="/risk-mitigation">Mitigated Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <Link to="/risk-review">Reviewed Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <Link to="/employees">Users</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUsers className="icons" />
          <Link to="/department">Departments</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <Link to="/report">Reporting</Link>
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
          <Link to="/dashboard">Overview</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaRegShareSquare className="icons" />
          <Link to="/risk-identification">New Risk</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardCheck className="icons" />
          <Link to="/risk-monitoring">Monitored Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaPencilAlt className="icons" />
          <Link to="/risk-mitigation">Mitigated Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaUserFriends className="icons" />
          <Link to="/employees">Users</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaClipboardList className="icons" />
          <Link to="/risk-review">Reviewed Risks</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <Link to="/report">Reporting</Link>
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
          src="https://xlriskecg.emiafritech.com/images/logo@2x1.png"
          style={{ width: 150, height: 100, borderRadius: 100 }}
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
