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
    const savedToken = Cookies.get("token");
    const savedName = Cookies.get("name");
    const savedRef = Cookies.get("role");
    if ( savedToken) {
      setAuth({
        token: savedToken ? savedToken : null,
        name: savedName ? savedName : null,
        refNum: savedRef ? savedRef : null,
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


