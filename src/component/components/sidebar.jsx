import "../comstyles/component.css";
import {
  FaCopy,
  FaClipboardList,
  FaUniversity,
  FaClipboardCheck,
  FaChessRook,
  FaSignOutAlt,
  FaUserFriends,
  FaUsers,
  FaListUl,
  FaPencilAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header drop-shadow-lg mb-1">
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
            <FaListUl className="icons" />
            <Link to="/risk-identification">Risk Identification</Link>
          </li>
          <li>
            <FaClipboardList className="icons" />
            <Link to="/risk-monitoring">Perform Risk Monitoring</Link>
          </li>
          <li>
            <FaClipboardCheck className="icons" />
            <Link to="/risk-review">Perform Risk Review</Link>
          </li>
          <li>
            <FaPencilAlt className="icons" />
            <Link to="/risk-mitigation">Risk Mitigation</Link>
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
            <FaChessRook className="icons" />
            Governance
          </li>
          <li>
            <FaCopy className="icons" />
            <Link to="/report">Report</Link>
          </li>
          <li>
            <FaSignOutAlt className="icons" />
            LogOut
          </li>
        </ul>
      </div>
    </div>
  );
}
