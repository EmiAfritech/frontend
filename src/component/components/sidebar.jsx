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
import { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    switch (selectedTab) {
      case "Risk Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Risk")}>
              <Link to="/new-risk">New Risk</Link>
            </li>
            <li onClick={() => handleTabClick("Monitored Risks")}>
              Monitored Risks
            </li>
            <li onClick={() => handleTabClick("Mitigated Risks")}>
              Mitigated Risks
            </li>
            <li onClick={() => handleTabClick("Reviewed Risks")}>
              Reviewed Risks
            </li>
            <li onClick={() => handleTabClick("Closed Risks")}>
              Closed Risks
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3">
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );

      case "User Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("View User")}>
              <Link to="/view-user">View User</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3">
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );

      // Add similar cases for other tabs...

      default:
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Overview")}>
              <Link to="/overview">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Risk Management")}>
              <Link to="/risk-management">Risk Management</Link>
            </li>
            <li onClick={() => handleTabClick("User Management")}>
              <Link to="/user-management">User Management</Link>
            </li>
            <li onClick={() => handleTabClick("Reporting")}>
              <Link to="/reporting">Reporting</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3">
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );
    }
  };

  const renderAuditorTabs = () => {
    switch (selectedTab) {
      case "Risk Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Risk")}>
              <Link to="/new-risk">New Risk</Link>
            </li>
            <li onClick={() => handleTabClick("Monitored Risks")}>
              Monitored Risks
            </li>
            <li onClick={() => handleTabClick("Mitigated Risks")}>
              Mitigated Risks
            </li>
            <li onClick={() => handleTabClick("Reviewed Risks")}>
              Reviewed Risks
            </li>
            <li onClick={() => handleTabClick("Closed Risks")}>
              Closed Risks
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3">
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );

      // Add similar cases for other tabs...

      default:
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Overview")}>
              <Link to="/overview">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Risk Management")}>
              <Link to="/risk-management">Risk Management</Link>
            </li>
            <li onClick={() => handleTabClick("Reporting")}>
              <Link to="/reporting">Reporting</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3">
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );
    }
  };
  const renderGeneralManagerTabs = () => {
    switch (selectedTab) {
      case "Risk Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Risk")}>
              <Link to="/new-risk">New Risk</Link>
            </li>
            <li onClick={() => handleTabClick("Monitored Risks")}>
              Monitored Risks
            </li>
            <li onClick={() => handleTabClick("Mitigated Risks")}>
              Mitigated Risks
            </li>
            <li onClick={() => handleTabClick("Reviewed Risks")}>
              Reviewed Risks
            </li>
            <li onClick={() => handleTabClick("Closed Risks")}>
              Closed Risks
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3">
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );

      case "Users":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("View User")}>
              <Link to="/view-user">View User</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3">
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );
    
      default:
        return (
          <>
            <li onClick={() => handleTabClick("Overview")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Risk Management")}>
              <Link to="/risk-management">Risk Management</Link>
            </li>
            <li onClick={() => handleTabClick("Users")}>
              <Link to="/users">Users</Link>
            </li>
            <li onClick={() => handleTabClick("Reporting")}>
              <Link to="/reporting">Reporting</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3">
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );
    }
  };
   const renderAdminTabs = () => {
    switch (selectedTab) {
      case "Admin":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("User Management")}>
              <Link to="/user-management">User Management</Link>
            </li>
            <li onClick={() => handleTabClick("Risk Management")}>
              <Link to="/risk-management">Risk Management</Link>
            </li>
            <li onClick={() => handleTabClick("Department Management")}>
              <Link to="/department-management">Department Management</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );

      case "User Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New User")}>
              <Link to="/new-user">New User</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );

      // Add similar cases for other tabs...
      case "Risk Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Risk")}>
              <Link to="/new-risk">New Risk</Link>
            </li>
            {/* Add other Risk Management tabs as needed */}
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
      );
      case "Department Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Department")}>
              <Link to="/new-department">New Department</Link>
            </li>
           
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );
      default:
        return (
          <>
            <li onClick={() => handleTabClick("Overview")}>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Admin")}>
              <Link to="/admin">Admin</Link>
            </li>
            <li onClick={() => handleTabClick("Departments")}>
              <FaUsers className="icons" />
              <Link to="/department">Departments</Link>
            </li>
            <li onClick={() => handleTabClick("Reporting")}>
              <FaCopy className="icons" />
              <Link to="/report">Reporting</Link>
            </li>
            
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );
    
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
          <Sessions/>
          {userRole === "MANAGER" && renderManagerTabs()}
          {userRole === "AUDITOR" && renderAuditorTabs()}
          {userRole === "ADMIN" && renderAdminTabs()}
          {userRole === "GENERALMANAGER" && renderGeneralManagerTabs()}
          <LoadingPopup isLoading={isLoading} />
        </ul>
      </div>
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
