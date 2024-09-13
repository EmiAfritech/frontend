import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ACTIVATE_ACCOUNT } from "../../api/routes";
import afriquetek_logo from "../../assets/images/afriquetek_logo.png";
import "../login/login.css";

export function ActivationPage() {
  const [formData, setFormData] = useState({ token: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const [isActivating, setIsActivating] = useState(false);
  const [activationSuccess, setActivationSuccess] = useState(false);
  const email = location.state?.email || "";
  const { token } = formData;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleActivation = async () => {
    if (!formData.token) {
      toast.error("Please enter the activation token.");
      return;
    }

    setIsActivating(true);
    try {
      const response = await axios.post(
        ACTIVATE_ACCOUNT,
        JSON.stringify({
          token
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );


      if (response.status === 201) {
        setActivationSuccess(true);
        toast.success("Account activated successfully! You almost there,  kindly Set your password");
        navigate("/setPassword" , { replace: true, state: { email } });
      } else {
        toast.error("Activation failed. Please try again.");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
    } finally {
      setIsActivating(false);
    }
  };

  return (
    <>
      <ToastContainer hideProgressBar />
      <div className="flex flex-row flex-direction">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3">
          <div className="login-container">
            <div className="flex-col m-16 flex items-center">
              <img
                src={afriquetek_logo}
                alt="Afriquetek Logo"
                className="w-55 h-20 mb-12"
              />
              <form className="w-full">
                <div className="activation-container w-full">
                  {activationSuccess ? (
                    <p>Your account has been activated. You can now log in.</p>
                  ) : (
                    <div className="w-full">
                      <p className="mb-16 px-4 py-2  border border-blue-300 rounded-full font-bold text-sm w-full">
                        email: {email}
                      </p>
                      <div className="w-full">
                        <label className="block mb-1 text-xs">
                          Activation Token
                        </label>
                        <input
                          type="text"
                          id="token"
                          value={formData.token}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 text-sm h-12 mb-6 border border-gray-300 rounded-xl"
                        />
                      </div>
                      <button
                        className="login w-full hover:bg-[#2a36b8] mt-4 p-4 text-sm rounded-xl"
                        onClick={handleActivation}
                        disabled={isActivating || !formData.token} // Disable button if no token
                      >
                        {isActivating ? "Activating..." : "Submit Link"}
                      </button>
                      <div className="new-user mt-4">
                        <span>No code sent?</span>{" "}
                        <span style={{ color: "blue" }}>
                          <Link className="new" to="/signup">
                            Return to signUp
                          </Link>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
