import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";
import { CREATE_URL } from "../../api/routes";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    confirmPassword: "",
    password: "",
    name: "",
    firstName: "",
    lastName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const notifyError = (message) => toast.error(message);
  const notifyInfo = (message) => toast.info(message);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const checkPasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      notifyError("Passwords do not match");
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    checkPasswords();
    try {
      const response = await axios.post(
        CREATE_URL,
        JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const { status } = response;

      if (status === 201) {
        alert("Organization Created Successfully, Kindly Login");
        navigate("/", { replace: true });
      } else {
        notifyInfo("Authorization returned null");
      }
    } catch (err) {
      if (err.message.includes("Network Error")) {
        notifyError("Server is Currently Unavailable, Please Try Again Later");
        resetForm();
      } else if (err.response?.status === 401) {
        notifyError("Unauthorized User! Please check your credentials");
      } else if ([400, 404].includes(err.response?.status)) {
        notifyError("Kindly check input details");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: "",
      confirmPassword: "",
      password: "",
      name: "",
      firstName: "",
      lastName: "",
    });
  };

  const handleReset = () => {
    if (!formData.email) {
      alert("Enter your email");
    } else {
      localStorage.setItem("email", formData.email);
      navigate("/resetpassword", { replace: true });
    }
  };

  return (
    <>
      <ToastContainer hideProgressBar />
      <div className="flex flex-row">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3">
          <div className="login-container">
            <div className="flex-col m-16">
              <img
                src="https://afriquetek.com/wp-content/uploads/2023/07/afriquetek-logo-1.png"
                alt="Afriquetek Logo"
                className="w-55 h-20 mb-10"
              />
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-1">Organizational Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 text-sm h-14 mb-2 border border-gray-300 rounded-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <label className="block mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 text-sm h-14  border border-gray-300 rounded-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 text-sm h-14 border mb-2 border-gray-300 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 text-sm h-14 border mb-2 border-gray-300 rounded-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 text-sm h-14 border mb-2 border-gray-300 rounded-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 text-sm h-14 border mb-2 border-gray-300 rounded-full"
                  />
                </div>
                <button
                  className="login hover:bg-[#2a36b8] mt-4 p-2 text-sm"
                  type="submit"
                  disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex justify-center">
                      <span className="text-sm pr-2">Loading</span>
                      <CircularProgress size={27} thickness={6} />
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
                <div className="new-user mt-4">
                  <Link to="/" className="new text-blue-600">
                    Already registered? Return to Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
