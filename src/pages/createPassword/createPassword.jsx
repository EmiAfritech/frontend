import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import afriquetek_logo from "../../assets/images/afriquetek_logo.png";

export function CreatePasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({ 
    password: "" ,
    confirmPassword: "",
  });
  const [isActivating, setIsActivating] = useState(false);
  const [activationSuccess, setActivationSuccess] = useState(false);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    } else {
      toast.error('No email found. Please try signing up again.');
      navigate('/');
    }
  }, [location.state, navigate]);

  const handleActivation = async () => {
    setIsActivating(true);
    try {
      const response = await axios.post(
        '/api/activate',  // Replace with your actual activation URL
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setActivationSuccess(true);
        toast.success('Account activated successfully!');
        // Navigate to login or home page after successful activation
        navigate('/');
      } else {
        toast.error('Activation failed. Please try again.');
      }
    } catch (error) {
      toast.error('Server error. Please try again later.');
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
                      <p className="mb-48 p-4  border border-blue-300 rounded-full font-bold text-sm w-full">
                        email: {email}
                      </p>
                      <div className="w-full">
                        <label className="block mb-1 text-xs">
                          password
                        </label>
                        <input
                          type="text"
                          id="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full p-1 text-sm h-12 mb-24 border border-gray-300"
                        />
                      </div>
                      <div className="w-full">
                        <label className="block mb-1 text-xs">
                          confirm password
                        </label>
                        <input
                          type="text"
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          className="w-full p-1 text-sm h-12 mb-24 border border-gray-300"
                        />
                      </div>
                      <button
                        className="login w-full hover:bg-[#2a36b8] mt-4 p-4 text-sm"
                        onClick={handleActivation}
                        disabled={isActivating || !formData.token} // Disable button if no token
                      >
                        {isActivating ? "Activating..." : "Submit Link"}
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
