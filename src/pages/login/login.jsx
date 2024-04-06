import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../api/routes";
import "./login.css";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const notifyNetworkError = () => {
    toast.error("Server is Currently Unavailable, Please Try Again Later", {});
  };
  const notifyUnauthorizedUser = () => {
    toast.error("Unauthorized User! Please check your credentials", {});
  };
  const notifyReturningNull = () => {
    toast.info("Authorization returned null", {});
  };

  const reload = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const token = response.data.authToken;
        const role = response.data.role;
        const department = response.data.department;

        if (token && role) {
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          localStorage.setItem("departmentID", department);
          navigate("/dashboard", { replace: true });
        } else {
          notifyReturningNull();
        }
      }
    } catch (err) {
      if (err.message.includes("Network Error")) {
        notifyNetworkError();
        reload();
      } else if (err.response.status === 401) {
        notifyUnauthorizedUser();
      }
    } finally {
      setLoading(false);
    }

    
  };
  const handleReset = async (e) => {
    if (email === "") {
      alert("Enter your email");
    } else {
      localStorage.setItem("email", email);
      navigate("/resetpassword", { replace: true });
    }
  };

  return (
    <>
      <ToastContainer hideProgressBar/>
      <div className="flex flex-row flex-direction">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3 ">
          <div className="login-container card">
            <div className="formstyle flex-col">
              <img
                src="https://afriquetek.com/wp-content/uploads/2023/07/afriquetek-logo-1.png"
                alt="Paris"
                className="w-55 h-20"
              />
              <form>
                {/* username */}
                <div className="">
                  <div>
                    <label htmlFor="email">Email</label>
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* password */}
                <div>
                  <div>
                    <label htmlFor="password">Password</label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    "Submit"
                  )}
                </button>
                {/* password reset */}
                <div className="pt-3">
                  <button
                    onClick={handleReset}
                    className="flex flex row items-center p-3">
                    Forgot your password?
                  </button>
                </div>
                {/* create a new account */}
                <div className="new-user">
                  <span style={{ color: "blue" }}>New to EmiRisk?</span>{" "}
                  <span>
                    <Link className="new" to="/signup">
                      Contact Us
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
