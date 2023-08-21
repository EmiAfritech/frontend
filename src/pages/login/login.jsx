import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit  = async () => {
    // <Link className="to-login" to="/dashboard">
    //   <input className="login" type="submit" value="Login" />
    // </Link>

    let result = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/jason",
      },
    });
    result = await result.json();
    console.warn(result);
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
              <form  onSubmit={handleSubmit}>
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
