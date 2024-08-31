import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../api/routes";
import "../login/login.css"
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ResetPassword() {
  const [confirmpassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem(email)

  const notifyNetworkError = () => {
    toast.error("Server is Currently Unavailable, Please Try Again Later", {});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      ); 
      navigate("/", { replace: true });
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
            <div className="formstyle flex-col">
              <div className="border-solid border-2 border-indigo-600">
                <input value={email}/>
              </div>
              <form>
                <div className="">
                  <div>
                    <label htmlFor="email">Mot de Passe</label>
                  </div>
                  <div>
                    <input
                      value={password}
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="confirm password">Confirmer le mot de passe</label>
                  </div>
                  <div>
                    <input
                      autoComplete="off"
                      value={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                  <Link to="/">
                Retour à la connexion?
                </Link>
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
