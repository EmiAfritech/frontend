import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
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
              <form onSubmit={handleSubmit}>
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
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* login-btn */}
                <input className="login" type="submit" value="Login" />
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
