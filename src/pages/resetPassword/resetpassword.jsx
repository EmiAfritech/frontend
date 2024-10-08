import React, { useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../login/login.css";
import { ResetPasswordUrl } from "../../api/routes";
import { TfiEmail } from "react-icons/tfi";
import { AuthContext } from "../../context/AuthContext";

export function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isActivating, setIsActivating] = useState(false);
  const [activationSuccess, setActivationSuccess] = useState(false);
  const {auth} = useContext(AuthContext)


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleActivation = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    setIsActivating(true);
    try {
      const response = await axios.post(
        ResetPasswordUrl,
        JSON.stringify({
          email: auth.email,
          password: formData.password,
        }),
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        setActivationSuccess(true);
        toast.success("Weldone, Password Set successfully! Now Login");
        navigate("/"); // Redirect after successful activation
      } else {
        toast.error("Password Set failed. Please try again.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Server error. Please try again later."
      );
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
            <div className="px-16">
              <h2 className="text-4xl mb-2 text-black">Reset Password</h2>
              <h2 className="text-sm mb-16 text-black">enter your new password</h2>
            </div>
            <div className="flex-col m-16 flex items-center">
              <form className="w-full">
                <div className=" w-full">
                  {activationSuccess ? (
                    <p>Your account has been activated. You can now log in.</p>
                  ) : (
                    <div className="w-full">
                      <div className="flex justify-center items-center space-x-2 mb-8">
                        <span>
                          <TfiEmail/>
                        </span>
                        <span className=" text-lg">{auth.email}</span>
                      </div>
                      <div className="w-full mb-4">
                        <label
                          className="block mb-1 text-xs"
                          htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 text-sm h-16 border border-gray-300 rounded-xl"
                        />
                      </div>
                      <div className="w-full mb-4">
                        <label
                          className="block mb-1 text-xs"
                          htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 text-sm h-16 border border-gray-300 rounded-xl"
                        />
                      </div>
                      <button
                        onClick={handleActivation}
                        className="login w-full bg-blue-500 hover:bg-blue-600 text-white py-3 transition duration-300 h-16"
                        disabled={isActivating}>
                        {isActivating ? "Loading..." : "Submit"}
                      </button>
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
