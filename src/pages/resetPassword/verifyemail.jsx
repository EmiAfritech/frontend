import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "../../api/axios";
import { LOGIN_URL, VerifyPasswordEmail } from "../../api/routes";
import "../login/login.css";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function VerifyEmail() {
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      alert("verification email sent to you")
      Cookies.set('email', JSON.stringify(email), {
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'Strict', 
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
                <h2 className="text-4xl mb-2 text-black items">
                  Password Reset!
                </h2>
                <h2 className="text-sm mb-8 text-black">
                  A reset link will be sent to your email if your email is
                  verified
                </h2>
              </div>

              <form >
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
                    "Envoyer"
                  )}
                </button>
                {/* password reset */}
                <div className="reset">
                  <Link to="/">Retour à la connexion?</Link>
                </div>
                {/* create a new account */}
                <div className="new-user">
                  <span style={{ color: "blue" }}>Nouveau sur EmiRisk ?</span>{" "}
                  <span>
                    <Link className="new" to="/signup">
                      Contactez-nous
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
