import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../api/routes";
import "./login.css";

export function Login() {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const reload = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        if (
          token !== null ||
          token !== undefined ||
          role !== null ||
          role !== undefined
        ) {
          setAuth({ email, password, role, token });
          navigate("/dashboard", { replace: true });
          localStorage.setItem("token", token);
          alert("You have successfully logged in");
          reload();
        } else {
          alert("Authorization returned null");
        }
      }
    } catch (err) {
      alert("Unathourized User: Input right details");
      reload();
    }
  };

  return (
    <>
      <div className="flex flex-row flex-direction">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3 ">
          <div className="login-container">
            <div className="formstyle flex-col">
              <img
                src="https://xlriskecg.emiafritech.com/images/logo@2x1.png"
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
                  className="login  hover:bg-[#2a36b8]"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                {/* password reset */}
                <div className="reset">Forgot Password?</div>
                {/* create new account */}
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
