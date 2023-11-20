import "../comstyles/component.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { FaUniversity, FaRegShareSquare, FaClipboardList, FaPencilAlt, FaClipboardCheck, FaUsers, FaUserFriends, FaCopy, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState, useEffect } from "react";

export function Sidebar() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Fetch user role from localStorage when the component mounts
    const role = localStorage.getItem("userRole");
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

  const renderTabsBasedOnRole = () => {
    switch (userRole) {
      case "ADMIN":
        return (
          <>
            <li>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li>
              <FaUniversity className="icons" />
              Admin
              <ul>
                <li>
                  User Management
                  <ul>
                    <li>
                      <Link to="/new-user">New User</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Risk Management
                  <ul>
                    <li>
                      <Link to="/new-risk">New Risk</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Department Management
                  <ul>
                    <li>
                      <Link to="/new-department">New Department</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <FaUsers className="icons" />
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <FaCopy className="icons" />
              <Link to="/reporting">Reporting</Link>
            </li>
            <li>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );

      case "MANAGER":
        return (
          <>
            <li>
              <FaUniversity className="icons" />
              <Link to="/dashboard">Overview</Link>
            </li>
            <li>
              <FaClipboardList className="icons" />
              Risk Management
              <ul>
                <li>
                  <Link to="/new-risk">New Risk</Link>
                </li>
                <li>
                  Monitored Risks
                </li>
                <li>
                  Mitigated Risks
                </li>
                <li>
                  Reviewed Risks
                </li>
                <li>
                  Closed Risks
                </li>
              </ul>
            </li>
            <li>
              <FaUserFriends className="icons" />
              Users
              <ul>
                <li>
                  <Link to="/view-user">View User</Link>
                </li>
              </ul>
            </li>
            <li>
              <FaCopy className="icons" />
              <Link to="/reporting">Reporting</Link>
            </li>
            <li>
              <button className="flex flex row items-center p-3" onClick={handleLogOut}>
                <FaSignOutAlt className="icons" />
                LogOut
              </button>
            </li>
          </>
        );

      default:
        return null;
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
          {renderTabsBasedOnRole()}
          <LoadingPopup isLoading={isLoading} />
          <Sessions />
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
