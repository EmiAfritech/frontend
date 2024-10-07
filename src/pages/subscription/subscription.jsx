import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";
import { CREATE_ORGANIZATION } from "../../api/routes";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SubscriptionPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Free"); 
  const email = location.state?.email || "";
    console.log(email)
  const handleButtonClick = (button) => {
    setActiveButton(button); 

    if(button === "Free"){
        navigate("/setPassword", { replace: true , state: { email }});
    }
  };

  return (
    <>
      <ToastContainer hideProgressBar />
      <div className="flex flex-row">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3">
          <div className="login-container">
            <h2 className="text-2xl mx-16 mb-2 text-black mt-8">
              Select Your Subscription Now!
            </h2>
            <h2 className="text-sm mb-4 mx-16">choose your offer! You almost there</h2>
            <div className="m-16 grid grid-cols-2 gap-4">
              {/* Free Button */}
              <button
                className={`border-2 border-blue-500 mt-4 p-4 text-sm rounded-sm ${
                  activeButton === "Free"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-[#2a36b8] hover:text-white"
                }`}
                type="button"
                disabled={isLoading}
                onClick={() => handleButtonClick("Free")}>
                {isLoading ? (
                  <div className="flex justify-center">
                    <span className="text-sm pr-2">Loading</span>
                    <CircularProgress size={27} thickness={6} />
                  </div>
                ) : (
                  "Free"
                )}
              </button>

              {/* Basic Button */}
              <button
                className={`border-2 border-blue-500 mt-4 p-4 text-sm rounded-sm ${
                  activeButton === "Basic"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-[#2a36b8] hover:text-white"
                }`}
                type="button"
                disabled={isLoading}
                onClick={() => handleButtonClick("Basic")}>
                {isLoading ? (
                  <div className="flex justify-center">
                    <span className="text-sm pr-2">Loading</span>
                    <CircularProgress size={27} thickness={6} />
                  </div>
                ) : (
                  "Basic"
                )}
              </button>
              
              {/* Standard Button */}
              <button
                className={`border-2 border-blue-500 mt-4 p-4 text-sm rounded-sm ${
                  activeButton === "Standard"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-[#2a36b8] hover:text-white"
                }`}
                type="button"
                disabled={isLoading}
                onClick={() => handleButtonClick("Standard")}>
                {isLoading ? (
                  <div className="flex justify-center">
                    <span className="text-sm pr-2">Loading</span>
                    <CircularProgress size={27} thickness={6} />
                  </div>
                ) : (
                  "Standard"
                )}
              </button>

              {/* Enterprise Button */}
              <button
                className={`border-2 border-blue-500 mt-4 p-4 text-sm rounded-sm ${
                  activeButton === "Enterprise"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-[#2a36b8] hover:text-white"
                }`}
                type="button"
                disabled={isLoading}
                onClick={() => handleButtonClick("Enterprise")}>
                {isLoading ? (
                  <div className="flex justify-center">
                    <span className="text-sm pr-2">Loading</span>
                    <CircularProgress size={27} thickness={6} />
                  </div>
                ) : (
                  "Enterprise"
                )}
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
