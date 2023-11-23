import "../comstyles/component.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

import { LOGOUT_URL } from "../../api/routes";

import LoadingPopup, { Sessions } from "../../api/sessions";
import { useState } from "react";
import { Navigation } from "./navigation";

export function Sidebar() {
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
        <Navigation />
        <LoadingPopup isLoading={isLoading} />
        <Sessions />
      </div>
    </div>
  );
}

