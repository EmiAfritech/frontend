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
import afriquetek_logo from "../../assets/images/afriquetek_logo.png";
import ReCaptcha from "react-google-recaptcha";
import { Notification } from "../../component/components/notifications";

export function Login() {
  const { setAuth } = useContext(AuthContext);
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const [notification,setNotification] = useState({
    authorized: "",
    serverDown: "",
    errorMessage: ""
  })

  const notifyNetworkError = () => {
    toast.error("Server is Currently Unavailable, Please Try Again Later", {});
  };
  const notifyUnauthorizedUser = () => {
    toast.error("Unauthorized User! Please check your credentials", {});
  };
  const verifyRecapture = () => {
    toast.info("Are you a bot?", {});
  };
  const notifyFillForms = () => {
    toast.error("Kindly check Input details");
  };

  const reload = () => {
    setEmail("");
    setPassword("");
  };

  const handleCaptchaSuccess = (value) => {
    axios
      .post("/verify-captcha",  JSON.stringify({recaptchaResponse: value  }),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      },)
      .then((res) => {
        console.log(res)
        if (res.data) {
          setVerified(false); 

          navigate("/dashboard", { replace: true });
        } else {
          toast.error("ReCaptcha verification failed");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const {
          authToken: token,
          role,
          department,
          organizationName,
        } = response.data;

        Cookies.set("token", authToken, {
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        });
        Cookies.set("name", department, {
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        });
        Cookies.set("refNum", role, {
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        });
        if (token && role) {
          setAuth({
            token,
            role,
            department,
            organizationName,
          });
          setVerified(true);
          verifyRecapture();
        }
      }
    } catch (err) {
      if (err.message.includes("Network Error")) {
        notifyNetworkError();
        reload();
      } else if (err.response?.status === 401) {
        notifyUnauthorizedUser();
      } else if ([400, 404].includes(err.response?.status)) {
        notifyFillForms();
      }
    } finally {
      setLoading(false);
    }
  };

  const getNotification = () => {
    if (authorized) {
      return <Notification message="Your email or password may be incorrect" type="error" />;
    }
    if (serverDown) {
      return <Notification message="Server is currently unavailable. Contact Admin." type="error" />;
    }
    if (errorMessage) {
      return <Notification message="missing fields" type="error" />;
    }
    return null;
  };

  return (
    <>
      <div className="flex flex-row flex-direction">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3">
          <div className="login-container">
            <div className="flex flex-row-reverse mt-3 mr-3 items-center">
              <LanguageButton />
              <span className="pr-2">
                <FaLanguage size={20} color="blue" />
              </span>
            </div>
            <div className="mb-[15%]"> {getNotification()}</div>
            <div className="formstyle flex-col">
              <div className="flex justify-center">
                <img
                  src={afriquetek_logo}
                  alt="Afriquetek logo"
                  className="w-36 h-20 mb-12 "
                />
              </div>
              <div className="mx-20 ">
                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="mb-5">
                    <label htmlFor="email">{t("email")}</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  {/* Password */}
                  <div className="mb-8">
                    <label htmlFor="password">{t("password")}</label>
                    <input
                      type="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Login button */}
                  <button
                    className="login hover:bg-[#2a36b8]"
                    type="submit"
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

                  {/* ReCaptcha appears only after successful login */}
                  {verified && (
                    <div className="pt-3">
                      <ReCaptcha
                        sitekey="6LeGM8oqAAAAACTKpjN2jsXPk5Z_3o64ZAR3PKgs" // Replace with your ReCaptcha site key
                        onChange={handleCaptchaSuccess}
                      />
                    </div>
                  )}

                  {/* Password reset */}
                  <div className="pt-3">
                    <span style={{ color: "blue" }}>
                      <Link className="new" to="/verifyemail">
                        {t("passwordReset")}
                      </Link>
                    </span>
                  </div>
                  {/* Create a new account */}
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
      </div>
    </>
  );
}
