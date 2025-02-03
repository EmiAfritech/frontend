import { useEffect, useState } from "react";
import { AuthContext, Modaltrigger } from "./AuthContext";
import Cookies from 'js-cookie';


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    role: "",
    departmentID: "",
    organizationName: "",

  });
  
  useEffect(() => {
    if (auth.token) {
      Cookies.set('token', auth.token, {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict'
      });
    }
  }, [auth.token]);
  
  useEffect(() => {
    const savedToken = Cookies.get("token");
    console.log({"savedToken": savedToken})
    if ( savedToken) {
      setAuth({
        token: savedToken ? savedToken : null,
      });
    }
  }, []);
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


