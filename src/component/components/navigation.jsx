import "../comstyles/component.css";
import axios from "../../api/axios";
import { useNavigate, useState } from "react-router-dom";

import { LOGOUT_URL } from "../../api/routes";
import {
  FaCopy,
  FaClipboardList,
  FaUniversity,
  FaClipboardCheck,
  FaSignOutAlt,
  FaUserFriends,
  FaUsers,
  FaRegShareSquare,
  FaPencilAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";



export function Navigation() {
  const role = localStorage.getItem('role')

  if (role === "ADMIN" || "GENERAL MANAGER") {
    return admin();
  } else if (role === "AUDITOR") {
    return auditor();
  } else {
    return manager();
  }
}






function admin() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

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
          <li>
            <FaUniversity className="icons" />
            <Link to="/dashboard">Overview</Link>
          </li>
          <li>
            <FaRegShareSquare className="icons" />
            <Link to="/risk-identification">New Risk</Link>
          </li>
          <li>
            <FaClipboardList className="icons" />
            <Link to="/risk-monitoring">Risk Monitoring</Link>
          </li>
          <li>
            <FaPencilAlt className="icons" />
            <Link to="/risk-mitigation">Risk Mitigation</Link>
          </li>
          <li>
            <FaClipboardCheck className="icons" />
            <Link to="/risk-review">Risk Review</Link>
          </li>
          <li>
            <FaUsers className="icons" />
            <Link to="/department">Departments</Link>
          </li>
          <li>
            <FaUserFriends className="icons" />
            <Link to="/employees">Employees</Link>
          </li>

          <li>
            <FaCopy className="icons" />
            <Link to="/report">Report</Link>
          </li>

          <button
            className="flex flex row items-center p-3"
            onClick={handleLogOut}>
            <FaSignOutAlt className="icons" />
            LogOut
          </button>
          <LoadingPopup isLoading={isLoading} />
          <Sessions />
        </ul>
      </div>
    </div>
  );
}
function manager() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

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
          <li>
            <FaUniversity className="icons" />
            <Link to="/dashboard">Overview</Link>
          </li>
          <li>
            <FaRegShareSquare className="icons" />
            <Link to="/risk-identification">New Risk</Link>
          </li>
          <li>
            <FaClipboardList className="icons" />
            <Link to="/risk-monitoring">Risk Monitoring</Link>
          </li>
          <li>
            <FaPencilAlt className="icons" />
            <Link to="/risk-mitigation">Risk Mitigation</Link>
          </li>
          <li>
            <FaClipboardCheck className="icons" />
            <Link to="/risk-review">Risk Review</Link>
          </li>
          <li>
            <FaUserFriends className="icons" />
            <Link to="/employees">Employees</Link>
          </li>
          <li>
            <FaCopy className="icons" />
            <Link to="/report">Report</Link>
          </li>

          <button
            className="flex flex row items-center p-3"
            onClick={handleLogOut}>
            <FaSignOutAlt className="icons" />
            LogOut
          </button>
          <LoadingPopup isLoading={isLoading} />
          <Sessions />
        </ul>
      </div>
    </div>
  );
}
function auditor() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

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
          <li>
            <FaUniversity className="icons" />
            <Link to="/dashboard">Overview</Link>
          </li>
          <li>
            <FaRegShareSquare className="icons" />
            <Link to="/risk-identification">New Risk</Link>
          </li>
          <li>
            <FaClipboardList className="icons" />
            <Link to="/risk-monitoring">Risk Monitoring</Link>
          </li>
          <li>
            <FaPencilAlt className="icons" />
            <Link to="/risk-mitigation">Risk Mitigation</Link>
          </li>
          <li>
            <FaClipboardCheck className="icons" />
            <Link to="/risk-review">Risk Review</Link>
          </li>
          <li>
            <FaCopy className="icons" />
            <Link to="/report">Report</Link>
          </li>

          <button
            className="flex flex row items-center p-3"
            onClick={handleLogOut}>
            <FaSignOutAlt className="icons" />
            LogOut
          </button>
          <LoadingPopup isLoading={isLoading} />
          <Sessions />
        </ul>
      </div>
    </div>
  );
}
