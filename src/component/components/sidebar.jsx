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
  switch (tab) {
    case "Risk Management":
      setSelectedTab("New Risk"); // Set the active tab to "New Risk" when "Risk Management" is clicked
      break;

    case "New Risk":
      setSelectedTab("New Risk"); // Set the active tab to "New Risk" when "Risk Management" is clicked
      break;
    case "Monitored Risks":
      setSelectedTab("Monitored Risks"); // Set the active tab to "New Risk" when "Risk Management" is clicked
      break;
    case "Mitigated Risks":
      setSelectedTab("Mitigated Risks"); // Set the active tab to "New Risk" when "Risk Management" is clicked
      break;
    case "Reviewed Risks":
      setSelectedTab("Reviewed Risks"); // Set the active tab to "New Risk" when "Risk Management" is clicked
      break;
      

    case "Home":
      setSelectedTab("Overview"); // Set the default tab when "Home" is clicked
      break;

    default:
      setSelectedTab(tab);
      break;
  }
};


  const renderManagerTabs = () => {
    switch (selectedTab) {
     case "Risk Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Risk")}>
              <FaRegShareSquare className="icons" />
              <Link to="/risk-identification">New Risk</Link>
            </li>
            <li onClick={() => handleTabClick("Monitored Risks")}>
              <FaClipboardCheck className="icons" />
              <Link to="/risk-monitoring">Monitored Risks</Link>
            </li>
            <li onClick={() => handleTabClick("Mitigated Risks")}>
              <FaPencilAlt className="icons" />
              <Link to="/risk-mitigation">Mitigated Risks</Link>
            </li>
            <li onClick={() => handleTabClick("Reviewed Risks")}>
              <FaClipboardList className="icons" />
              <Link to="/risk-review">Reviewed Risks</Link>
            </li>
            <li onClick={() => handleTabClick("Closed Risks")}>
              <FaRegShareSquare className="icons" />
              <Link to="/closed-risks">Closed Risks</Link>
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
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("View User")}>
              <FaUserFriends className="icons" />
              <Link to="/employeees">View User</Link>
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

      default:
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <FaBorderStyle className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Overview")}>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Risk Management")}>
              <FaRegShareSquare className="icons" />
              <Link to="/risk-identification">Risk Management</Link>
            </li>
            <li onClick={() => handleTabClick("User Management")}>
              <FaUserFriends className="icons" />
              <Link to="/employees">User Management</Link>
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

 const renderAuditorTabs = () => {
  const commonTabs = (
    <>
      <li onClick={() => handleTabClick("Home")}>
        <FaUniversity className="icons" />
        <Link to="/dashboard">Overview</Link>
      </li>
      <li onClick={() => handleTabClick("New Risk")}>
        <FaRegShareSquare className="icons" />
        <Link to="/risk-identification">New Risk</Link>
      </li>
      <li onClick={() => handleTabClick("Monitored Risks")}>
        <FaClipboardCheck className="icons" />
        <Link to="/risk-monitoring">Monitored Risks</Link>
      </li>
      <li onClick={() => handleTabClick("Mitigated Risks")}>
        <FaPencilAlt className="icons" />
        <Link to="/risk-mitigation">Mitigated Risks</Link>
      </li>
      <li onClick={() => handleTabClick("Reviewed Risks")}>
        <FaClipboardList className="icons" />
        <Link to="/risk-review">Reviewed Risks</Link>
      </li>
      <li onClick={() => handleTabClick("Logout")}>
        <button className="flex flex-row items-center p-3" onClick={handleLogOut}>
          <FaSignOutAlt className="icons" />
          LogOut
        </button>
      </li>
    </>
  );

  switch (selectedTab) {
    case "Risk Management":
    case "New Risk":
    case "Monitored Risks":
    case "Mitigated Risks":
    case "Reviewed Risks":
      return commonTabs;

    default:
      return (
        <>
          <li onClick={() => handleTabClick("Overview")}>
            <FaBorderStyle className="icons" />
            <Link to="/dashboard">Overview</Link>
          </li>
          <li onClick={() => handleTabClick("Risk Management")}>
            <FaRegShareSquare className="icons" />
            <Link to="/risk-identification">Risk Management</Link>
          </li>
          <li onClick={() => handleTabClick("Reporting")}>
            <FaCopy className="icons" />
            <Link to="/report">Reporting</Link>
          </li>
          <li onClick={() => handleTabClick("Logout")}>
            <button className="flex flex-row items-center p-3" onClick={handleLogOut}>
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
      case "Admin":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("User Management")}>
              <FaUserFriends className="icons" />
              <Link to="/employees">User Management</Link>
            </li>
            <li onClick={() => handleTabClick("Risk Management")}>
              <FaRegShareSquare className="icons" />
              <Link to="/risk-identification">Risk Management</Link>
            </li>
            <li onClick={() => handleTabClick("Department Management")}>
              <FaUsers className="icons" />
              <Link to="/department">Department Management</Link>
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
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New User")}>
              <FaUserFriends className="icons" />
              <Link to="/employees">New User</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );
      case "Risk Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Risk")}>
              <FaRegShareSquare className="icons" />
              <Link to="/risk-identification">New Risk</Link>
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
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Department")}>
              <FaUsers className="icons" />
              <Link to="/department">New Department</Link>
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
              <FaBorderStyle className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Risk Management")}>
              <FaRegShareSquare className="icons" />
              <Link to="/risk-identification">Risk Management</Link>
            </li>
            <li onClick={() => handleTabClick("Users")}>
              <FaUserFriends className="icons" />
              <Link to="/employees">Users</Link>
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
   const renderAdminTabs = () => {
    switch (selectedTab) {
      case "Admin":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("User Management")}>
              <FaUserFriends className="icons" />
              <Link to="/employees">User Management</Link>
            </li>
            <li onClick={() => handleTabClick("Risk Management")}>
              <FaRegShareSquare className="icons" />
              <Link to="/risk-identification">Risk Management</Link>
            </li>
            <li onClick={() => handleTabClick("Department Management")}>
              <FaUsers className="icons" />
              <Link to="/department">Department Management</Link>
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
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New User")}>
              <FaUserFriends className="icons" />
              <Link to="/employees">New User</Link>
            </li>
            <li onClick={() => handleTabClick("Logout")}>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );
      case "Risk Management":
        return (
          <>
            <li onClick={() => handleTabClick("Home")}>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Risk")}>
              <FaRegShareSquare className="icons" />
              <Link to="/risk-identification">New Risk</Link>
            </li>
            <li onClick={() => handleTabClick("Monitored Risks")}>
              <FaClipboardCheck className="icons" />
              <Link to="/risk-monitoring">Monitored Risks</Link>
            </li>
            <li onClick={() => handleTabClick("Mitigated Risks")}>
              <FaPencilAlt className="icons" />
              <Link to="/risk-mitigation">Mitigated Risks</Link>
            </li>
            <li onClick={() => handleTabClick("Reviewed Risks")}>
              <FaClipboardList className="icons" />
              <Link to="/risk-review">Reviewed Risks</Link>
            </li>
            <li onClick={() => handleTabClick("Closed Risks")}>
              <FaRegShareSquare className="icons" />
              <Link to="/closed-risks">Closed Risks</Link>
            </li>

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
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("New Department")}>
              <FaUsers className="icons" />
              <Link to="/department">New Department</Link>
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
              <FaBorderStyle className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li onClick={() => handleTabClick("Admin")}>
              <FaUserShield className="icons" />
              <Link to="/dashboard">Admin</Link>
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
