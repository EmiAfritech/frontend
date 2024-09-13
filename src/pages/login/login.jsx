import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../api/routes";
import "./login.css";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../../language/language_switcher";
import { AuthContext } from "../../context/AuthContext";
import afriquetek_logo from "../../assets/images/afriquetek_logo.png"

export function Login() {
  const {auth, setAuth } = useContext(AuthContext);
  const { t } = useTranslation();
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
          headers: { "Content-Type": "application/json","Accept": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const token = response.data.authToken;
        const role = response.data.role;
        const department = response.data.department;
        const organizationName = response.data.organizationName;
        
        if (token && role) {
          setAuth({ 
            token: token, 
            role: role, 
            department: department, 
            organizationName: organizationName
          });
          navigate("dashboard", { replace: true });
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
            <div className="flex flex-row-reverse mt-3 mr-3 items-center">
              <LanguageButton />
              <span className="pr-2">
                <FaLanguage size={20} color="blue" />
              </span>
            </div>
            <div className="formstyle flex-col">
              <img
                src={afriquetek_logo}
                alt="Paris"
                className="w-55 h-20 mb-12"
              />
              <form>
                {/* username */}
                <div className="">
                  <div>
                    <label htmlFor="email">{t("email")}</label>
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
                    <label htmlFor="password">{t("password")}</label>
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
                      <p className="text-sm pr-2">{t("loading")}</p>
                      <CircularProgress
                        size={27}
                        thickness={6}
                        color="primary"
                      />
                    </div>
                  ) : (
                    t("submit")
                  )}
                </button>
                {/* password reset */}
                <div className="pt-3">
                  <button
                    style={{ color: "blue" }}
                    onClick={handleReset}
                    className="flex flex row items-center">
                    {t("passwordReset")}
                  </button>
                </div>
                {/* create a new account */}
                <div className="new-user">
                  <span>{t("registerQuestion")}</span>{" "}
                  <span style={{ color: "blue" }}>
                    <Link className="new" to="/signup">
                      {t("register")}
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
