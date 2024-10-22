import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";
import { CREATE_ORGANIZATION } from "../../api/routes";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    name: "",
    firstName: "",
    lastName: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const notifyError = (message) => toast.error(message);
  const notifyInfo = (message) => toast.info(message);
  const { email, address, phoneNumber, name, firstName, lastName } = formData;
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        CREATE_ORGANIZATION,
        JSON.stringify({
          email,
          address,
          phoneNumber,
          name,
          firstName,
          lastName,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const { status } = response;

      if (status === 201) {
        alert("Organization Created Successfully, Kindly Check your Mail");
        navigate("/activate", { replace: true, state: { email } });
      } else {
        notifyInfo("Authorization returned null");
      }
    } catch (err) {
      if (err.message.includes("Network Error")) {
        notifyError("Network is Currently Unavailable, Please Try Again Later");
        resetForm();
      } else if (err.response?.status === 401) {
        notifyError("Unauthorized User! Please check your credentials");
      } else if ([400, 404].includes(err.response?.status)) {
        notifyError("Kindly check input details");
      } else if ([500].includes(err.response?.status)) {
        notifyError("Server is Currently unavailable, please contact admin");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: "",
      phoneNumber: "",
      name: "",
      firstName: "",
      lastName: "",
      address: "",
    });
  };

  return (
    <>
      <ToastContainer hideProgressBar />
      <div className="flex flex-row">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3">
          <div className="login-container">
          <h2 className="text-4xl mx-16 mb-2 text-black mt-8">Get Started Now</h2>
          <h2 className="text-sm mx-16">create your new organization</h2>
            <div className="flex-col m-16 flex items-center">
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-1 text-xs">
                    Organizational Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-1 text-sm h-12 mb-2 border border-gray-300 rounded-lg p-4"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-xs">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full p-1 text-sm h-12 border mb-2 border-gray-300 rounded-lg p-4"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-xs">
                    Organizational Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-1 text-sm h-12 border mb-2 border-gray-300 rounded-lg p-4"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <label className="block mb-1 text-xs">
                      Admin First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-1 text-sm h-12 border border-gray-300 rounded-lg p-4"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs">
                      Admin Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-1 text-sm h-12 border mb-2 border-gray-300 rounded-lg p-4"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-xs">Contact Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full p-1 text-sm h-12 border mb-2 border-gray-300 rounded-lg p-4"
                  />
                </div>
                <button
                  className="login hover:bg-[#2a36b8] mt-4 p-4 text-sm"
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
                  <span>Already registered?</span>{" "}
                  <span style={{ color: "blue" }}>
                    <Link className="new" to="/">
                      Return to Login
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
