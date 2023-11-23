import "../comstyles/component.css";
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

export function Navigation() {
  const role = localStorage.getItem("role");
  console.log(role);

  if (role === "ADMIN" || "GENERAL MANAGER") {
    return admin();
  } else if (role === "AUDITOR") {
    return auditor();
  } else {
    return manager();
  }
}

function admin() {
  return (
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

      <button className="flex flex row items-center p-3" onClick={handleLogOut}>
        <FaSignOutAlt className="icons" />
        LogOut
      </button>
    </ul>
  );
}
function manager() {
  return (
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

      <button className="flex flex row items-center p-3" onClick={handleLogOut}>
        <FaSignOutAlt className="icons" />
        LogOut
      </button>
    </ul>
  );
}
function auditor() {
  return (
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

      <button className="flex flex row items-center p-3" onClick={handleLogOut}>
        <FaSignOutAlt className="icons" />
        LogOut
      </button>
    </ul>
  );
}
