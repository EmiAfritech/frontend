import { useState } from "react";
import { AuthContext, Modaltrigger } from "./AuthContext";


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    role: "",
    departmentID: "",

  });

  const clearAuth = () => {
    setAuth({
      token: "",
      role: "",
      departmentID: "",
    });
  };


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


