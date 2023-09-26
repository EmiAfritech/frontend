import "../comstyles/component.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

import { LOGOUT_URL } from "../../api/routes";
import {
  FaCopy,
  FaClipboardList,
  FaUniversity,
  FaClipboardCheck,
  FaChessRook,
  FaSignOutAlt,
  FaUserFriends,
  FaUsers,
  FaRegShareSquare,
  FaPencilAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.get(
        LOGOUT_URL,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      )
      navigate("/", { replace: true });
    }catch(error){
      alert(error)
    }
  };
    
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
            <FaRegShareSquare className="icons" />
            <Link to="/risk-identification">New Risk</Link>
          </li>
          <li>
            <FaClipboardList className="icons" />
            <Link to="/risk-monitoring">Perform Risk Monitoring</Link>
          </li>
          <li>
            <FaPencilAlt className="icons" />
            <Link to="/risk-mitigation">Risk Mitigation</Link>
          </li>
          <li>
            <FaClipboardCheck className="icons" />
            <Link to="/risk-review">Perform Risk Review</Link>
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
        
            <button onClick={handleSubmit}>
              <FaSignOutAlt className="icons" />
              LogOut
            </button>
          
        </ul>
      </div>
    </div>
  );
}
