import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../../api/axios";
import { VerifyPasswordEmail } from "../../api/routes";
import "../login/login.css";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  const notifyNetworkError = () => {
    toast.error("Server is Currently Unavailable, Please Try Again Later", {});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(VerifyPasswordEmail, JSON.stringify({ email }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      alert("verification email sent to you");
      Cookies.set("email", JSON.stringify(email), {
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
      });
    } catch (err) {
      if (err.message.includes("Network Error")) {
        notifyNetworkError();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-row flex-direction">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3 ">
          <div className="login-container">
            <div className="formstyle flex-col w-full px-16">
              <div>
                <h2 className="text-2xl mb-2 text-black">
                  Request password reset!
                </h2>
                <h2 className="text-sm mb-8 text-black">
                  A reset link will be sent to your email if your email is
                  verified
                </h2>
              </div>

              <form>
                <div className="mb-4">
                  <div>
                    <label htmlFor="email">email</label>
                  </div>
                  <div>
                    <input
                      type="email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14"
                    />
                  </div>
                </div>

                {/* login-btn */}
                <button
                  className="login hover:bg-[#2a36b8]"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading} // Disable the button while loading
                >
                  {isLoading ? (
                    <CircularProgress size={27} thickness={6} color="primary" />
                  ) : (
                    "Request"
                  )}
                </button>
                {/* or line */}
                <div className="flex items-center justify-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="px-2 text-sm text-gray-500">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* sign up */}
                <div className="flex justify-center items-center space-x-1">
                  <span className="text-sm text-black">Return to</span>
                  <span className="text-blue-500 text-sm">
                    <Link className="new" to="/">
                      Home Page
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
