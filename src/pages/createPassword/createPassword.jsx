import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

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
      <div className="activation-container">
        <h2>Account Activation</h2>
        {activationSuccess ? (
          <p>Your account has been activated. You can now log in.</p>
        ) : (
          <div>
            <p>email: {email}</p>
            <button
              className="activate-button"
              onClick={handleActivation}
              disabled={isActivating}
            >
              {isActivating ? 'Activating...' : 'Activate Account'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
