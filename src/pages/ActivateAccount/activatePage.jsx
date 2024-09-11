import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ACTIVATE_ACCOUNT } from "../../api/routes";

export function ActivationPage() {
  const [formData, setFormData] = useState({
    token: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isActivating, setIsActivating] = useState(false);
  const [activationSuccess, setActivationSuccess] = useState(false);

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    } else {
      toast.error("No email found. Please try signing up again.");
      navigate("/");
    }
  }, [location.state, navigate]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const resetForm = () => {
    setFormData({
      token: "",
    });
  };

  const handleActivation = async () => {
    setIsActivating(true);
    try {
      const response = await axios.post(
        ACTIVATE_ACCOUNT,
        { token },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        setActivationSuccess(true);
        toast.success("Account activated successfully!");
        navigate("/");
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
      <div className="activation-container">
        <h2>Account Activation</h2>
        {activationSuccess ? (
          <p>Your account has been activated. You can now log in.</p>
        ) : (
          <div>
            <p className="mb-8">Activating account for: {email}</p>
            <div>
              <label className="block mb-1 text-xs">Subscription token</label>
              <input
                type="text"
                id="token"
                value={formData.token}
                onChange={handleInputChange}
                required
                className="w-full p-1 text-sm h-12 mb-2 border border-gray-300 rounded-full"
              />
            </div>
            <button
              className="activate-button"
              onClick={handleActivation}
              disabled={isActivating}>
              {isActivating ? "Activating..." : "Activate Account"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
