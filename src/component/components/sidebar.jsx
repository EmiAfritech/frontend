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
  FaBorderStyle,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState, useEffect,React } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [selectedTab, setSelectedTab] = useState("Overview");

  useEffect(() => {
    // Fetch user role from localStorage when the component mounts
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);

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

      alert("Logging Out Successful");
      navigate("/", { replace: true });
    } catch (error) {
      alert(error);
    }
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderManagerTabs = () => {
    const tabs = [
      { name: "Risk Management", subTabs: ["Home", "NewRisk", "MonitoredRisks", "MitigatedRisks", "ReviewedRisks", "ClosedRisks"] },
      { name: "User Management", subTabs: ["Home", "ViewUser"] },
      // Add more tabs here...
    ];

    const icons = {
      Home: FaUniversity,
      NewRisk: FaRegShareSquare,
      MonitoredRisks: FaClipboardCheck,
      MitigatedRisks: FaPencilAlt,
      ReviewedRisks: FaClipboardList,
      ClosedRisks: FaRegShareSquare,
      ViewUser: FaUserFriends,
      Logout: FaSignOutAlt,
    };

    const routes = {
      Home: "/dashboard",
      NewRisk: "/risk-identification",
      MonitoredRisks: "/risk-monitoring",
      MitigatedRisks: "/risk-mitigation",
      ReviewedRisks: "/risk-review",
      ClosedRisks: "/closed-risks",
      ViewUser: "/employeees",
    };

    return tabs.map((tab) => (
      <li key={tab.name} onClick={() => handleTabClick(tab.name)}>
        <FaBorderStyle className="icons" />
        <Link to="#">{tab.name}</Link>
        <ul className="sub-menu">
          {tab.subTabs.map((subTab) => (
            <li key={subTab} onClick={() => handleTabClick(subTab)}>
              {React.createElement(icons[subTab], { className: "icons" })}
              {subTab === "Logout" ? (
                <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                  {subTab}
                </button>
              ) : (
                <Link to={routes[subTab]}>{subTab.replace(/([A-Z])/g, " $1").trim()}</Link>
              )}
            </li>
          ))}
        </ul>
      </li>
    ));
  };

  return (
    <div className="sidebar">
      <div className="logo-details">
        <FaCopy className="logo-icon" />
        <div className="logo_name">Risk Manager</div>
      </div>
      <Sessions/>
      <ul className="nav-links">{renderManagerTabs()}</ul>
      {isLoading && <LoadingPopup />}
    </div>
  );
}







// import "../comstyles/component.css";
// import axios from "../../api/axios";
// import { useNavigate } from "react-router-dom";

// import { LOGOUT_URL } from "../../api/routes";
// import {
//   FaCopy,
//   FaClipboardList,
//   FaUniversity,
//   FaClipboardCheck,
//   FaSignOutAlt,
//   FaUserFriends,
//   FaUsers,
//   FaRegShareSquare,
//   FaPencilAlt,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import LoadingPopup, { Sessions } from "../../api/sessions";
// import { useState } from "react";

// export function Sidebar() {
//   const navigate = useNavigate();
//   const [isLoading, setLoading] = useState(false);

//   const handleLogOut = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     try {
//       await axios.get(LOGOUT_URL, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//         withCredentials: true,
//       });

//       localStorage.clear();

//       alert("Logging Out Successful");
//       navigate("/", { replace: true });
//     } catch (error) {
//       alert(error);
//     }
//   };

//   return (
//     <div className="sidebar-container bg-[#2B6CB0]">
//       <div className="sidebar-header mb-1">
//         <img
//           src="https://xlriskecg.emiafritech.com/images/logo@2x1.png"
//           style={{ width: 150, height: 100, borderRadius: 100 }}
//         />
//         <span>RISK APPLICATION</span>
//       </div>
//       <div className="sidebar-main">
//         <ul>
//           <li>
//             <FaUniversity className="icons" />
//             <Link to="/dashboard">Overview</Link>
//           </li>
//           <li>
//             <FaRegShareSquare className="icons" />
//             <Link to="/risk-identification">New Risk</Link>
//           </li>
//           <li>
//             <FaClipboardList className="icons" />
//             <Link to="/risk-monitoring">Risk Monitoring</Link>
//           </li>
//           <li>
//             <FaPencilAlt className="icons" />
//             <Link to="/risk-mitigation">Risk Mitigation</Link>
//           </li>
//           <li>
//             <FaClipboardCheck className="icons" />
//             <Link to="/risk-review">Risk Review</Link>
//           </li>
//           <li>
//             <FaUsers className="icons" />
//             <Link to="/department">Departments</Link>
//           </li>
//           <li>
//             <FaUserFriends className="icons" />
//             <Link to="/employees">Employees</Link>
//           </li>
          
//           <li>
//             <FaCopy className="icons" />
//             <Link to="/report">Report</Link>
//           </li>

//           <button
//             className="flex flex row items-center p-3"
//             onClick={handleLogOut}
//           >
//             <FaSignOutAlt className="icons" />
//             LogOut
//           </button>
//           <LoadingPopup isLoading={isLoading} />
//           <Sessions />
//         </ul>
//       </div>
//     </div>
//   );
// }
