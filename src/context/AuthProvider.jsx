import { useEffect, useState } from "react";
import { AuthContext, Modaltrigger } from "./AuthContext";
import Cookies from 'js-cookie';


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    role: "",
    departmentId: "",
    organizationName: "",

  });
  useEffect(() => {
    const savedToken = Cookies.get("token");
    if ( savedToken) {
      const savedRole = Cookies.get("role");
      const savedDepartmentId = Cookies.get("departmentId");
      const savedOrganizationName = Cookies.get("organizationName");
      setAuth({
        token: savedToken ? savedToken : null,
        role: savedRole ? savedRole : null,
        departmentID: savedDepartmentId ? savedDepartmentId : null,
        organizationName: savedOrganizationName ? savedOrganizationName : null,
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


