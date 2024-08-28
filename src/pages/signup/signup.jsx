import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../api/routes";
import "../login/login.css";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignUp() {
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

  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
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
      } else if (err.response.status === 400 || err.response.status === 404) {
        notifyFillForms();
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
      <ToastContainer hideProgressBar />
      <div className="flex flex-row flex-direction">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3 ">
          <div className="login-container">
            <div className="formstyle flex-col">
              <img
                src="https://afriquetek.com/wp-content/uploads/2023/07/afriquetek-logo-1.png"
                alt="Paris"
                className="w-55 h-20"
              />
              <form>
                {/* organization */}
                <div>
                  <div>
                    <label>Organizational Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* email */}
                <div className=" grid grid-cols-2">
                  <div>
                  <div>
                    <label>First Name</label>
                  </div>
                    <input
                      type="text"
                      id="email"
                      value={firstName}
                      autoComplete="off"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                  <div>
                    <label>Last Name</label>
                  </div>
                    <input
                      type="text"
                      id="email"
                      value={lastName}
                      autoComplete="off"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* email */}
                {/* <div className="">
                  <div>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div> */}
                {/*employees in the organization*/}
                {/* <div>
                  <div>
                    <label htmlFor="email">Number of Employees</label>
                  </div>
                  <input type="number" />
                </div> */}
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
                <div>
                  <div>
                    <label htmlFor="password">Confirm Organizational Password</label>
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
                    <div className="flex flex-row justify-center">
                      <p className="text-sm pr-2">Loading</p>
                      <CircularProgress
                        size={27}
                        thickness={6}
                        color="primary"
                      />
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
                {/* create a new account */}
                <div className="new-user">
                  <span style={{ color: "blue" }}>
                    <Link className="new" to="/">
                    Have you already registered? Return to Login
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
