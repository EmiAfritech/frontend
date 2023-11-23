import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUniversity,
  FaRegShareSquare,
  FaClipboardList,
  FaPencilAlt,
  FaClipboardCheck,
  FaUsers,
  FaUserFriends,
  FaCopy,
  FaSignOutAlt,
} from 'react-icons/fa';

const Navigation = () => {
  const role = localStorage.getItem("role");

  const menuItems = {
    ADMIN: [
      { icon: <FaUniversity />, label: 'Overview', link: '/dashboard' },
      { icon: <FaRegShareSquare />, label: 'New Risk', link: '/risk-identification' },
      { icon: <FaClipboardList />, label: 'Risk Monitoring', link: '/risk-monitoring' },
      { icon: <FaPencilAlt />, label: 'Risk Mitigation', link: '/risk-mitigation' },
      { icon: <FaClipboardCheck />, label: 'Risk Review', link: '/risk-review' },
      { icon: <FaUsers />, label: 'Departments', link: '/department' },
      { icon: <FaUserFriends />, label: 'Employees', link: '/employees' },
      { icon: <FaCopy />, label: 'Report', link: '/report' },
    ],
    GENERAL_MANAGER: [
      { icon: <FaUniversity />, label: 'Overview', link: '/dashboard' },
      { icon: <FaRegShareSquare />, label: 'New Risk', link: '/risk-identification' },
      { icon: <FaClipboardList />, label: 'Risk Monitoring', link: '/risk-monitoring' },
      { icon: <FaPencilAlt />, label: 'Risk Mitigation', link: '/risk-mitigation' },
      { icon: <FaClipboardCheck />, label: 'Risk Review', link: '/risk-review' },
    ],
    AUDITOR: [
      { icon: <FaClipboardCheck />, label: 'Risk Review', link: '/risk-review' },
      { icon: <FaUsers />, label: 'Departments', link: '/department' },
      { icon: <FaUserFriends />, label: 'Employees', link: '/employees' },
      { icon: <FaCopy />, label: 'Report', link: '/report' },
    ],
  };

  
  const renderMenu = (role) => {
    return (
      <ul>
        {menuItems[role].map((item, index) => (
          <li key={index}>
            {item.icon && <item.icon className="icons" />}
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
        <button className="flex flex-row items-center p-3" >
          <FaSignOutAlt className="icons" />
          Log Out
        </button>
      </ul>
    );
  };

  return renderMenu(role);
};

export default Navigation;
