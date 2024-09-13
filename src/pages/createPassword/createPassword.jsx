import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import afriquetek_logo from "../../assets/images/afriquetek_logo.png";
import "../login/login.css";

export function CreatePasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    token: ""
  });
  const [isActivating, setIsActivating] = useState(false);
  const [activationSuccess, setActivationSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
      setFormData((prevData) => ({
        ...prevData,
        token: location.state.token,
      }));
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleActivation = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password should be at least 6 characters long.');
      return;
    }

    setIsActivating(true);
    try {
      const response = await axios.post(
        '/api/activate',  // Replace with your actual activation URL
        {
          email,
          token: formData.token,
          password: formData.password
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setActivationSuccess(true);
        toast.success('Account activated successfully!');
        navigate('/'); // Redirect after successful activation
      } else {
        toast.error('Activation failed. Please try again.');
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Server error. Please try again later.'
      );
    } finally {
      setIsActivating(false);
    }
  };

  return (
    <>
      <ToastContainer hideProgressBar />
      <div className="flex flex-row h-screen">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3 flex items-center justify-center">
          <div className="login-container">
            <div className="flex-col m-16 flex items-center">
              <img
                src={afriquetek_logo}
                alt="Afriquetek Logo"
                className="w-52 h-auto mb-12"
              />
              <form className="w-full" onSubmit={handleActivation}>
                <div className=" w-full">
                  {activationSuccess ? (
                    <p>Your account has been activated. You can now log in.</p>
                  ) : (
                    <div className="w-full">
                      <p className="mb-4 p-4 border border-blue-300 rounded-full font-bold text-sm w-full">
                        email: {email}
                      </p>
                      <div className="w-full mb-4">
                        <label className="block mb-1 text-xs" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 text-sm h-12 border border-gray-300 rounded-xl"
                        />
                      </div>
                      <div className="w-full mb-4">
                        <label
                          className="block mb-1 text-xs"
                          htmlFor="confirmPassword"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 text-sm h-12 border border-gray-300 rounded-xl"
                        />
                      </div>
                      <button
                        type="submit"
                        className="login w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition duration-300"
                        disabled={isActivating || !formData.token}
                      >
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
