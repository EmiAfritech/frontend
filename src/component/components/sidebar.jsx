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
  
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Sidebar(currentTab) {
  
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [selectedTab, setSelectedTab] = useState(currentTab.currentTab);
  
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

      console.log("Logging Out Successful");
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabClick = (tab) => {
      setSelectedTab(tab);
  };
 
  //Auditor Tabs
  const AuditorMainTabs = () => {
   return (
      <>
         <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Overview")}>
          <FaBorderStyle className="icons" />
          <Link to="/dashboard">Overview</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Risk Management")}>
          <FaRegShareSquare className="icons" />
          <Link to="/risk-identification">Risk Management</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <Link to="/report">Reporting</Link>
        </li>
        
        <li className="flex flex row items-center p-3">
          <button onClick={handleLogOut}>
            <FaSignOutAlt className="icons" />
            LogOut
          </button>
        </li>
        
      </>
   );
  };
  const handleAuditorRiskManagementTabs = () => {
    return (
      <>
       
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("New Risk")}>
          <FaRegShareSquare className="icons" />
          <Link to="/risk-identification">New Risk</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Monitored Risks")}>
          <FaClipboardCheck className="icons" />
          <Link to="/risk-monitoring">Monitored Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Mitigated Risks")}>
          <FaPencilAlt className="icons" />
          <Link to="/risk-mitigation">Mitigated Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Reviewed Risks")}>
          <FaClipboardList className="icons" />
          <Link to="/risk-review">Reviewed Risks</Link>
        </li>
         <li className="flex flex row items-center p-5" onClick={()=> handleTabClick("Home")}>
          <FaUniversity className="icons" />
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="flex flex row items-center p-5">
          <button onClick={handleLogOut}>
          <FaSignOutAlt className="icons" />
           LogOut
        </button>
        </li>
        
      </>
    );
  }
  const renderAuditorTabs = () => {
    
    if(selectedTab === "Overview" || selectedTab === "Home"){
     
      return AuditorMainTabs();

    } 
    if(selectedTab === "Risk Management"){
    
      return handleAuditorRiskManagementTabs();
    } 
    
    if(selectedTab === "New Risk"){
    
      return handleAuditorRiskManagementTabs();

    } 
    if(selectedTab === "Monitored Risks"){
     
      return handleAuditorRiskManagementTabs();
    }
    if(selectedTab === "Mitigated Risks"){
     
      return handleAuditorRiskManagementTabs();
    }
    if(selectedTab === "Reviewed Risks"){
      
      return handleAuditorRiskManagementTabs();
    } 

      

  }

  //Admin Tabs
  const AdminMainTabs = () => {
    return (
      <>
         <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Overview")}>
          <FaBorderStyle className="icons" />
          <Link to="/admin-dashboard">Overview</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Risk Management")}>
          <FaRegShareSquare className="icons" />
          <Link to="/new-risk">Risk Management</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Employees")}>
          <FaUserFriends className="icons" />
          <Link to="/employees">Users</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Departments")}>
          <FaUsers className="icons" />
          <Link to="/department">Departments</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <Link to="/report">Reporting</Link>
        </li>
        
        <li className="flex flex row items-center p-3">
          <button onClick={handleLogOut}>
            <FaSignOutAlt className="icons" />
            LogOut
          </button>
        </li>
      </>
      );
  }
  const handleAdminRiskManagementTabs = () => {
    return (
      <>
       
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("New Risk")}>
          <FaRegShareSquare className="icons" />
          <Link to="/new-risk">New Risk</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Monitored Risks")}>
          <FaClipboardCheck className="icons" />
          <Link to="/risk-monitoring">Monitored Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Mitigated Risks")}>
          <FaPencilAlt className="icons" />
          <Link to="/risk-mitigation">Mitigated Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Reviewed Risks")}>
          <FaClipboardList className="icons" />
          <Link to="/risk-review">Reviewed Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Closed Risks")}>
          <FaRegShareSquare className="icons" />
          <Link to="/closed-risks">Closed Risks</Link>
        </li>
         <li className="flex flex row items-left p-3" onClick={()=> handleTabClick("Home")}>
          <FaUniversity className="icons" />
          <Link to="/admin-dashboard">Home</Link>
        </li>
        <li className="flex flex row items-left p-4">
          <button onClick={handleLogOut}>
          <FaSignOutAlt className="icons" />
           LogOut
        </button>
        </li>
        
      </>
    );
  }
  
  const renderAdminTabs = () => {
      
      if(selectedTab === "Overview" || selectedTab === "Home"){
      
        return AdminMainTabs();
  
      } 
      if(selectedTab === "Risk Management"){
      
        return handleAdminRiskManagementTabs();
      } 
      
      if(selectedTab === "New Risk"){
      
        return handleAdminRiskManagementTabs();
  
      } 
      if(selectedTab === "Monitored Risks"){
      
        return handleAdminRiskManagementTabs();
      }
      if(selectedTab === "Mitigated Risks"){
      
        return handleAdminRiskManagementTabs();
      }
      if(selectedTab === "Reviewed Risks"){
        
        return handleAdminRiskManagementTabs();
      } 
      if(selectedTab === "Closed Risks"){
        
        return handleAdminRiskManagementTabs();
      } 
      if(selectedTab === "Employees"){
        
        return AdminMainTabs();
      } 
      if(selectedTab === "Departments"){
        
        return AdminMainTabs();
      } 
      

  }

  //General Manager Tabs
  const GeneralManagerMainTabs = () => {
    return (
      <>
         <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Overview")}>
          <FaBorderStyle className="icons" />
          <Link to="/admin-dashboard">Overview</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Risk Management")}>
          <FaRegShareSquare className="icons" />
          <Link to="/new-risk">Risk Management</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Employees")}>
          <FaUserFriends className="icons" />
          <Link to="/employees">Users</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Departments")}>
          <FaUsers className="icons" />
          <Link to="/department">Departments</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <Link to="/report">Reporting</Link>
        </li>
        
        <li className="flex flex row items-center p-3">
          <button onClick={handleLogOut}>
            <FaSignOutAlt className="icons" />
            LogOut
          </button>
        </li>
      </>
      );
  }
  const handleGeneralManagerRiskManagementTabs = () => {
    return (
      <>
       
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("New Risk")}>
          <FaRegShareSquare className="icons" />
          <Link to="/new-risk">New Risk</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Monitored Risks")}>
          <FaClipboardCheck className="icons" />
          <Link to="/risk-monitoring">Monitored Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Mitigated Risks")}>
          <FaPencilAlt className="icons" />
          <Link to="/risk-mitigation">Mitigated Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Reviewed Risks")}>
          <FaClipboardList className="icons" />
          <Link to="/risk-review">Reviewed Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Closed Risks")}>
          <FaRegShareSquare className="icons" />
          <Link to="/closed-risks">Closed Risks</Link>
        </li>
         <li className="flex flex row items-left p-3" onClick={()=> handleTabClick("Home")}>
          <FaUniversity className="icons" />
          <Link to="/admin-dashboard">Home</Link>
        </li>
        <li className="flex flex row items-left p-4">
          <button onClick={handleLogOut}>
          <FaSignOutAlt className="icons" />
           LogOut
        </button>
        </li>
        
      </>
    );
  }

  const renderGeneralManagerTabs = () => {
      
      if(selectedTab === "Overview" || selectedTab === "Home"){
      
        return GeneralManagerMainTabs();
  
      } 
      if(selectedTab === "Risk Management"){
      
        return handleGeneralManagerRiskManagementTabs();
      } 
      
      if(selectedTab === "New Risk"){
      
        return handleGeneralManagerRiskManagementTabs();
  
      } 
      if(selectedTab === "Monitored Risks"){
      
        return handleGeneralManagerRiskManagementTabs();
      }
      if(selectedTab === "Mitigated Risks"){
      
        return handleGeneralManagerRiskManagementTabs();
      }
      if(selectedTab === "Reviewed Risks"){
        
        return handleGeneralManagerRiskManagementTabs();
      } 
      if(selectedTab === "Closed Risks"){
        
        return handleGeneralManagerRiskManagementTabs();
      } 
      if(selectedTab === "Employees"){
        
        return GeneralManagerMainTabs();
      } 
      if(selectedTab === "Departments"){
        
        return GeneralManagerMainTabs();
      } 
  }

  //Manager Tabs
  const ManagerMainTabs = () => {
    return (
      <>
         <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Overview")}>
          <FaBorderStyle className="icons" />
          <Link to="/dashboard">Overview</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Department Management")}>
          <FaUsers className="icons" />
          <Link to="/department">Department Management</Link>
        </li>
        <li className="flex flex row items-center p-3">
          <FaCopy className="icons" />
          <Link to="/report">Reporting</Link>
        </li>
        
        <li className="flex flex row items-center p-5">
          <button onClick={handleLogOut}>
            <FaSignOutAlt className="icons" />
            LogOut
          </button>
        </li>
      </>
      );
  }
  const handleManagerDepartmentRisksTabs = () => {
    return (
      <>
       
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("New Risk")}>
          <FaRegShareSquare className="icons" />
          <Link to="/risk-identification">New Risk</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Monitored Risks")}>
          <FaClipboardCheck className="icons" />
          <Link to="/risk-monitoring">Monitored Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Mitigated Risks")}>
          <FaPencilAlt className="icons" />
          <Link to="/risk-mitigation">Mitigated Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Reviewed Risks")}>
          <FaClipboardList className="icons" />
          <Link to="/risk-review">Reviewed Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Closed Risks")}>
          <FaRegShareSquare className="icons" />
          <Link to="/closed-risks">Closed Risks</Link>
        </li>
         <li className="flex flex row items-left p-3" onClick={()=> handleTabClick("Home")}>
          <FaUniversity className="icons" />
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="flex flex row items-left p-4">
          <button onClick={handleLogOut}>
          <FaSignOutAlt className="icons" />
           LogOut
        </button>
        </li>
        
      </>
    );
  }
  const handleManagerDepartmentManagementTabs = () => {
    return (
      <>
       
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Dashboard")}>
          <FaUsers className="icons" />
          <Link to="/department">New Department</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Risks")}>
          <FaClipboardCheck className="icons" />
          <Link to="/risk-identification">Department Members</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Members")}>
          <FaPencilAlt className="icons" />
          <Link to="/employees">Department Risks</Link>
        </li>
        <li className="flex flex row items-center p-3" onClick={()=> handleTabClick("Reporting")}>
          <FaClipboardList className="icons" />
          <Link to="/report">Department Reporting</Link>
        </li>
         <li className="flex flex row items-left p-3" onClick={()=> handleTabClick("Home")}>
          <FaUniversity className="icons" />
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="flex flex row items-left p-4">
          <button onClick={handleLogOut}>
          <FaSignOutAlt className="icons" />
           LogOut
        </button>
        </li>
        
      </>
    );
  }
  const renderManagerTabs = () => {
        
        if(selectedTab === "Overview" || selectedTab === "Home"){
        
          return ManagerMainTabs();
    
        } 
        if(selectedTab === "Department Management"){
        
          return handleManagerDepartmentManagementTabs();
        } 
        
        if(selectedTab === "Dashboard"){
        
          return handleManagerDepartmentManagementTabs();
    
        } 
        if(selectedTab === "Risks"){
        
          return handleManagerDepartmentRisksTabs();
        }
        if(selectedTab === "Members"){
        
          return handleManagerDepartmentManagementTabs();
        }
        if(selectedTab === "Reporting"){
          
          return handleManagerDepartmentManagementTabs();
        } 
        if(selectedTab === "New Risk"){
        
          return handleManagerDepartmentRisksTabs();
    
        } 
        if(selectedTab === "Monitored Risks"){
        
          return handleManagerDepartmentRisksTabs();
        }
        if(selectedTab === "Mitigated Risks"){
        
          return handleManagerDepartmentRisksTabs();
        }
        if(selectedTab === "Reviewed Risks"){
          
          return handleManagerDepartmentRisksTabs();
        } 
        if(selectedTab === "Closed Risks"){
          
          return handleManagerDepartmentRisksTabs();
        } 
  }


 

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
          {userRole === "ADMIN" && renderAdminTabs()}
          {userRole === "GENERALMANAGER" && renderGeneralManagerTabs()}
          {userRole === "MANAGER" && renderManagerTabs()}
          {userRole === "AUDITOR" && renderAuditorTabs()}
          
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

//       console.log("Logging Out Successful");
//       navigate("/", { replace: true });
//     } catch (error) {
//       console.log(error);
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
