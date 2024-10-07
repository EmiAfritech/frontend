import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ACTIVATE_ACCOUNT } from "../../api/routes";
import { TfiEmail } from "react-icons/tfi";
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
          token,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        setActivationSuccess(true);
        toast.success(
          "Account activated successfully! You almost there,  kindly Set your password"
        );
        navigate("/subscription", { replace: true, state: { email } });
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
              <h2 className="text-4xl mb-2 text-black">
                Activate your Account
              </h2>
              <h2 className="text-sm mb-16 text-black">
                Enter your activation code
              </h2>
              <form className="w-full">
                <div className="activation-container w-full">
                  {activationSuccess ? (
                    <p>Your account has been activated. You can now log in.</p>
                  ) : (
                    <div className="w-full ">
                      {/* email */}
                      <div className="flex justify-center items-center space-x-2 mb-8">
                        <span>
                          <TfiEmail />
                        </span>
                        <span className=" text-lg">{email}</span>
                      </div>
                      <div className="w-full">
                        <label className="block mb-1 text-xs italic font-bold">
                          token
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
                        {isActivating ? "Activating..." : "Submit"}
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
