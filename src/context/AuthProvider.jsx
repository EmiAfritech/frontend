import { useState } from "react";
import { AuthContext, Modaltrigger } from "./AuthContext";


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    role: "",
    departmentID: "",
    organizationName: "",

  });

  const clearAuth = () => {
    setAuth({
      token: "",
      role: "",
      departmentID: "",
    });
  };

  if (token === "") {
   alert("token empty")
  }

  useEffect(() => {
    try {
      axios
      .post(Sessions_URL, JSON.stringify({ token }), {
        headers: { "Content-Type": "application/json" },
      })
      .then((data) => {
        setSession(data.data.message);
        if (session === "Invalid") {
          alert("session invalid")
        } 
        
      })
      .catch((err) => {
        if (err.message.includes("Network Error")) {
          notifyNetwork()
        }    
      });
    } catch (error) {
     if (error.message.includes("Network Error")) {
      notifySystem()
      } 
    }
    
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};



export const ModaltriggerProvider =({children}) => {
  const [trigger, setTrigger] = useState(false)

  const triggerComponent = () => {
    setTrigger(true);
  };

  const resettriggerComponent = () => {
    setTrigger(false);
  };


  return (
    <Modaltrigger.Provider value={{ trigger, triggerComponent, resettriggerComponent }}>
      {children}
    </Modaltrigger.Provider>
  );
}


