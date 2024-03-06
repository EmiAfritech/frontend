import { useState } from "react";
import { AuthContext, Modaltrigger } from "./AuthContext";


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


export const ModaltriggerProvider =({children}) => {
  const [trigger, setTrigger] = useState(false)

  const triggerComponent = () => {
    setTrigger(!trigger);
  };


  return (
    <Modaltrigger.Provider value={{ trigger, triggerComponent }}>
      {children}
    </Modaltrigger.Provider>
  );
}


